import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars=this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(res => {
        this.setState({
        cars: res.data
     })
    })
  }

  render() {
    const carz = this.state.cars.map(car => {
      return (
        <div key={car.id}>
          <p>make: {car.make}</p>
          <p>model: {car.model}</p>
          <p>year: {car.year}</p>
          <p>color: {car.color}</p>
          <p>price: {car.price}</p>
          <br />
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
          {carz}
      </div>
    );
  }
}

export default App;
