import React,{useEffect} from 'react';
import classes from './Cockpit.module.css';
const Cockpit=(props)=>{
// useEffect is a important react hook which combine the componentDidMound and componentDidUpdate

// one can use many usecase for different different cases
    useEffect(()=>{
console.log('[cockpit.js..useEffect')
const timer=setTimeout(()=>{
    console.log(timer);
    clearTimeout(timer);
    alert('data is saved!');

    
},1000);

return ()=>{
    console.log('[cockpit.js]...cleanup working in useEffect');
}
    },[]);


    console.log('cockpit.js..render');
    let btnClass=[classes.Button];
if(props.state)
btnClass.push(classes.red);

return(
    <div>
        <h1>{props.title}</h1>
    <p>This is really working</p>
      <button className={btnClass.join(' ')}  onClick={props.toggleClick}>toggle person</button>
    </div>
);
}
export default Cockpit;