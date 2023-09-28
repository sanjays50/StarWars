
import './App.css';

import React from 'react';

class Starwars extends React.Component{
  constructor(){
    super()
    this.state={
      loadedchar:false,
      name:null,
      imga:null,
      gender:null,
      height:null,
      homeworld:null,
      species:null,
      mass:null
    }
  }
  getnewchar(){
    const t=Math.floor(Math.random()*30);
    const url=`https://akabab.github.io/starwars-api/api/id/${t}.json`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      this.setState({
        name:data.name,
        imga:data.image,
        loadedchar:true,
        gender:data.gender,
        height:data.height,
        homeworld:data.homeworld,
        species:data.species,
        mass:data.mass
      })
    })
  }

  render(){
    return(
      <div>
        <h1>Star Wars Characters</h1>
        <button type="button" onClick={()=>this.getnewchar()}> Get Random Characters</button>
          { this.state.loadedchar && <div>
              <h1>Name : {this.state.name}</h1>
              <h3>Gender : {this.state.gender}</h3>
              <h3>Height : {this.state.height}</h3>
              <h3>Mass : {this.state.mass}</h3>
              <h3>species : {this.state.species}</h3>
              <h3>HomeWorld : {this.state.homeworld}</h3>
                <img className='climg' src={this.state.imga} alt="true" />
          </div>}
      </div> 


    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Starwars/>
      </header>
    </div>
  );
}

export default App;
