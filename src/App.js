import React from 'react';
import './App.css';
import Car from './component/FirstComponent.js';

// function App() {
//   return (
//     <div>
//       <Car></Car>
//     </div>
//   );
// }

// chuyen thanh class coponent

class App extends React.Component {
  state = {
  name : "Ngoc",
  aga: 21,
  yearCreateProject: 2024
};
  render(){
    return (
      <div>
        <Car name = "Ngoc" ></Car>
        my name is {this.state.name} and i'm {this.state.aga} year old and i create Project in: {this.state.yearCreateProject}
      </div>
    );
  }
}

export default App;
