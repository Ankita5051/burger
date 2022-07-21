import React,{Component} from 'react';//we import react to be able to render jsx
import Person from './Person/Person';
class Persons extends Component{
shouldComponentUpdate(){
    console.log('persons.js.. shouldComponent update');
    return true;
}
getSnapshotBeforeUpdate(prevProps,preState)
{
    console.log('persons.js .. getSnapshotBeforeUpdate');
    return {message:'snapshot'};
}
componentDidUpdate(prop,state,snapshot){
    console.log('persons.js componentDidUpdate');
    console.log(state);
    return snapshot;
}
componentWillUnmount(){
    console.log('[persons.js....componentDidMount');
}
    render(){
    
    
        console.log('persons.js.. rendering');
        return(
          this.props.persons.map((person,index)=>{
                return <Person persons={this.props.persons}
                name={person.name}
                 age={person.age}
                  click={()=>this.props.delClicked(index)}
                  key={person.id}
                  changed={(event)=>this.props.changeClicked(event,person.id)}
                 />
              })
        );
    }
    
};

export default Persons;