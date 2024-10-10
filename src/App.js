import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import cr from './img/cross.webp'
import ci from './img/circle.png'

function App() {
  let [turn,setturn]=useState('cross')
  let [winner,setwinner]=useState('')
  let [o1,seto1]=useState('');
  let [o2,seto2]=useState('');
  let [o3,seto3]=useState('');
  let [o4,seto4]=useState('');
  let [o5,seto5]=useState('');
  let [o6,seto6]=useState('');
  let [o7,seto7]=useState('');
  let [o8,seto8]=useState('');
  let [o9,seto9]=useState('');
  let t=()=>{
    if(turn=='cross'){
      setturn('circle');
    }
    else{
      setturn('cross');
    }
  }
  let check=()=>{
    if(o1==o2 && o2==o3 && (o2=='cross' || o2=='circle')){
      console.log("hello1");
      setwinner(o1);
    }
    else if(o1==o5 && o5==o9 && (o1=='cross' || o1=='circle')){
      console.log("hello2");
      setwinner(o1);
    }
    else if(o1==o4 && o4==o7 && (o1=='cross' || o1=='circle')){
      console.log("hello3");
      setwinner(o1);
    }
    else if(o2==o5 && o5==o8 && (o2=='cross' || o2=='circle')){
      console.log("hello4");
      setwinner(o2);
    }
    else if(o3==o6 && o3==o9 && (o3=='cross' || o3=='circle')){
      console.log("hello5");
      setwinner(o3);
    }
    else if(o4==o5 && o5==o6 && (o4=='cross' || o4=='circle')){
      console.log("hello6");
      setwinner(o4);
    }
    else if(o3==o5 && o5==o7 && (o3=='cross' || o3=='circle')){
      console.log("hello7");
      setwinner(o3);
    }
    else if(o7==o8 && o8==o9 && (o7=='cross' || o7=='circle')){
      console.log("hello8");
      setwinner(o7);
    }
  }
  return (
    <div className="App">
      <div className='headings'>
        <h1 className='heading'>Tic Tac Toe</h1>
        { (winner=='') ? 
        <h1 className='announce'>Turn: <img src={(turn=='cross') ? cr : ci } className='turnnow'/></h1>
        : 
        ''}
      </div>
      <div className='panel'>
        <div className='contain' onMouseOver={check}>
          <div className='objects' onClick={()=>{seto1(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o1=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o1=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto2(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o2=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o2=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto3(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o3=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o3=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto4(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o4=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o4=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto5(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o5=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o5=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto6(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o6=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o6=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto7(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o7=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o7=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto8(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o8=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o8=='circle') ? '' : 'hide'}`}/>
          </div>
          <div className='objects' onClick={()=>{seto9(turn);t();}}>
            <img src={cr} className={`objectfit ${ (o9=='cross') ? '' : 'hide'}`}/>
            <img src={ci} className={`objectfit ${ (o9=='circle') ? '' : 'hide'}`}/>
          </div>
        </div>
      </div>
        { (winner!=='') ?
        <h1 className='winner'>The winner is {`${winner }`}<button onClick={()=>window.location.reload(true)} className='restart'>Restart</button></h1>
        :
        <div className='rebut'>
          <button onClick={()=>window.location.reload(true)} className='restart'>Restart</button>
        </div>
        }
    </div>
  );
}

export default App;
