import React,{Component} from 'react';
import classes from './Person.module.css';
// import Radium  from 'radium';
//import styled from 'styled-components';
class Person extends Component{
    render(){
        console.log('person.js..render')
        let assignClass=[classes.box];
        if(this.props.persons.length==2)
        assignClass.push(classes.red2);
        else 
        if(this.props.persons.length==1)
        assignClass.push(classes.red3);
       
    return(
     <div className={assignClass.join(' ')}>
    {/* //    <StyledDiv> */}
    
            <p >Hello my name is {this.props.name} and I am{this.props.age} {Math.floor(Math.random()*30)} year old.</p><p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            <button className={classes.button}onClick={this.props.click}>remove person</button>
        {/* // </StyledDiv> */}
         </div>
    )
    }
    
}
export default Person;































 // const style={
    //     '@media(min-width:500px)':{ width:'450px'}
    // }
    // const StyledDiv= styled.div`
    // border: 1px solid #ddd;
    // width: 300px;
    // margin: 20px auto;
    // padding: 20px;
    // background-color:yellow;

    // @media(min-width:500px){ 
    //     width:450px;}
    // `;