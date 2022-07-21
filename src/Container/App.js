import React,{Component} from 'react';
import classes from './App.module.css';
//npm run eject
import Persons from '../Components/Persons/Persons.js';
import Cockpit from '../Components/Cockpit/Cockpit';
import { render } from '@testing-library/react';

 class App extends Component {
constructor(props){
  super(props);
  console.log('app.js constructor');
}

static getDerivedStateFromProps(props,state){
  console.log('app.js.. getDerivedStateFromProps',props)
  return props;
}
// componentDidMount(){
//   console.log('app.js...componentDidMound');
// }
   state ={person:
     [{id:'p1',name:'ankita', age:23},
     {id:'p2',name:'soni',age:30},
     {id:'p3',name:"aditi",age:20}],
     toggle:false,
     showCockpit:true
   }

 nameChangeHandler=(event,id)=>{
const personIndex=this.state.person.findIndex(p=>{
  return p.id===id;
})
const person={...this.state.person[personIndex]};
person.name=event.target.value;

const persons=[...this.state.person];
persons[personIndex]=person;
  this.setState({
    person:persons,
    toggle:true,   
  })
 }
 togglePersonHandler=()=>{
const toggleperson=this.state.toggle;
this.setState({toggle:(!toggleperson)})
 }

 deletePersonHandler=(personIndex)=>{
// const persons=this.state.person.slice();
const persons=[...this.state.person];
persons.splice(personIndex,1);
this.setState({person:persons});
 }
  render(){
    console.log('app.js..inside render');
    let person=null;
if(this.state.toggle){  
  person=(
<div>   <Persons delClicked={this.deletePersonHandler} changeClicked={this.nameChangeHandler} 
persons={this.state.person}/>  </div>
  )}
    return(
      <div className={classes.App}>
      {/* {this.state.toggle===true?
      :null} */}
      
      {console.log(this.state.showCockpit)}

      {this.state.showCockpit? <Cockpit title={this.props.title}state={this.state.toggle} toggleClick={ this.togglePersonHandler} persons={this.state.person}/>
      :null
      }
      <button onClick={()=>{
        this.setState({showCockpit:false});
      }}>removeCockPit</button>
   
      {person}
      </div>
    ) 
  }}
export default App;







//life cycle of component
// constructor()
// static getDerivedSateFromProps(props,state)
// render()
// children rendering
// componentWillMound()
// componentDidMound()





// import styled from 'styled-components';
// import Radium,{StyleRoot} from 'radium';




//  switchHandler=(newName)=>{
//    this.setState({
//      person:
//      [{name:'ankita', age:23},{name:newName ,age:30},{name:"aditi", age:30}]
//    }) 
//  }


//style using styled components    
//  const StyleButton=styled.button`
//  background-color:${props=>props.alt ? 'red':'green'};
//      color:white;
//      border:2px solid #ddd;
//  margin:5px;
//      padding:10px;
//      cursor:pointer;
//  fontSize:20px;
//  &:hover{
//    background-color:${props=>props.alt ? 'pink':'lightgreen'};
//    color:black;
//  }`;



// inline css
  //    const style={
  //      backgroundColor:"green",
  //      color:"white",
  //      border:"2px solid #ddd",
  //  margin:"5px",
  //      padding:"10px",
  //      cursor:"pointer",
  //  fontSize:"20px",
  //  ':hover':{
  //    backgroundColor:'lightgreen',
  //    color:'black'
  //  }
  //    };


// style.backgroundColor="red";
  // style[':hover']={
  //   backgroundColor:'pink',
  //   color:'black'
  // }


// {this.state.person.map((person,index)=>{
//   return <Person 
//   name={person.name}
//    age={person.age}
//     click={()=>this.deletePersonHandler(index)}
//     key={person.id}
//     changed={(event)=>this.nameChangeHandler(event,person.id)}
//    />
// })}




      {/* <Person 
      name={this.state.person[0].name} 
      age={this.state.person[0].age}
changed={this.nameChangeHandler}
      />
        
        <Person 
        name={this.state.person[1].name}
         age={this.state.person[1].age}
         click={this.switchHandler.bind(this,'mmiya')}>my hobby is:planting</Person>
        
        <Person 
        name={this.state.person[2].name} age={this.state.person[2].age}>Iam affected by first person input</Person>

        <button onClick={()=>this.switchHandler('newMmiya')}>switch</button> */}




  // const App=props=>{
//  const [personState,setPersonState]=useState({
//   person:[{name:'ankita', age:23},{name:'soni',age:30}]
//        } )

// const switchHandler=()=>{
// setPersonState({
//      person:
//      [{name:'ankita', age:23},{name:'jyotii',age:30}]
//    }) 
//  }

  //   return (
  //     <div className="App">
  //     <Person name={personState.person[0].name} age={personState.person[0].age}/>
  //      <Person name={personState.person[1].name} age={personState.person[1].age}>my hobby is:planting!!</Person>
  //      <button onClick={switchHandler}>switch</button>
  //     </div>
  //   );
  // }

 