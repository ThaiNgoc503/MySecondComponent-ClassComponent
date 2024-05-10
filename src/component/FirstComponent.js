import React from 'react';



class Car extends React.Component {
  constructor(props){
    super(props); //goi ctst của lớp cha React.Component ko goi props se ko đc khởi tạo và giá trị == UNDIFIED
    console.log(props);
  }
  render() {
    return(
        <div>
              <h2>Hi, I am a Car! and i'm {this.props.name}</h2>
        </div>
    );
  }
}

export default Car;


