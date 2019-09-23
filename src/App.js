import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monsters: [],
       searchedMonster: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleOnChange(e) {

    this.setState({
      searchedMonster: e.target.value
    })
    
  }

  render() {

    const { monsters, searchedMonster } = this.state;
    const filteredMonster = monsters.filter(
        monster => monster.name.toLowerCase().includes(searchedMonster.toLowerCase())
      )

    return(
      <div className="App">
        <h1>Moster Rolodex</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={this.handleOnChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;
