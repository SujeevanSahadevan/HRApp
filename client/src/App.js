
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {
  constructor(){
    super();
    this.state={
    Name:'',
    Age:0,
    Country:'',
    Position:'',
    Salary:0,
    EmployeeList:[]
    }
    this.changeName=this.changeName.bind(this);
    this.changeAge=this.changeAge.bind(this);
    this.changeCountry=this.changeCountry.bind(this);
    this.changePosition=this.changePosition.bind(this);
    this.changeSalary=this.changeSalary.bind(this);

    //bind methods
  }

  changeName(event){
    this.setState({
        Name:event.target.value
    })
}


changeAge(event){
  this.setState({
    Age:event.target.value
  })
}

changeCountry(event){
  this.setState({
    Country:event.target.value
  })
}

changePosition(event){
  this.setState({
    Position:event.target.value
  })
}

changeSalary(event){
  this.setState({
    Salary:event.target.value
  })
}

addEmployee =()=>{
  console.log("Name",this.state.Name);
axios.post("http://localhost:3001/create",{
  Name:this.state.Name,
  Age:this.state.Age,
  Country:this.state.Country,
  Position:this.state.Position,
  Salary:this.state.Salary
}).then(()=>{console.log("Suncess")});
};

showEmployee=()=>{
 const Employees= axios.get("http://localhost:3001/getList").then((response)=>{
    console.log("Response",response);
    this.setState({
      EmployeeList:response.data
    })
    //console.log("list state",this.state.EmployeeList)
  })
}



  render() { 

//const displayinfo=()=>{console.log(this.state.Name,this.state.Age)}
    return (
      <div className="App">
       <h1>Welcome to Project 2</h1>
       <h3>{this.state.EmployeeList.length}</h3>
       <div className="information">

      <label>Name</label>
      <input type="text" 
      placeholder="Name" 
      onChange={this.changeName}
      value={this.state.Name} />

      <label>Age</label>
      <input type="number" 
      placeholder="Age" 
      onChange={this.changeAge} 
      value={this.state.Age} />

      <label>Country</label>
      <input type="text" 
      placeholder="Country" 
      onChange={this.changeCountry}
      value={this.state.Country} />

      <label>Position</label>
      <input type="text" 
      placeholder="Position" 
      onChange={this.changePosition}
      value={this.state.Position} />

      <label>Salary(year)</label>
      <input type="number" 
      placeholder="Salary" 
      onChange={this.changeSalary}
      value={this.state.Salary} />

      <button onClick={this.addEmployee}>Add Employee</button>
      </div>
      <br/>
      <button id='sb' onClick={this.showEmployee}>Show Employees</button>

      <div>
      {this.state.EmployeeList.map((val,key)=>{
        return <div className="employee">
         <h2>Name {key="1",val.Name}</h2>
         <h2>Age {key="2",val.Age}</h2>
         <h2>Country {key="3",val.Country}</h2>
         <h2>Position {key="4",val.Position}</h2>
         <h2>Salary {key="5",val.Salary}</h2>
          </div>
      })}
      </div>
      </div>
    );
    
  }
}
 
export default App;

