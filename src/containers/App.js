import React, { Component } from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import './App.css';



class App extends Component {
    constructor() {
        super()
       this.state = {
        robots: [],
        searchfield: ''
       } 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users }));
        
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
       return robots.lenght === 0 ?
       <h1>Loding</h1> :    
       (
            <div className='tc'>
                <h1 className='f1'>robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                  <CardList robots={filteredRobots}/>  
                </Scroll>

                
            </div>
            
        );
        }
       
    }
   


export default App;