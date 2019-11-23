import * as React from 'react';


interface todo{
  title:string,
  state?:boolean
}

 class App extends React.Component<{},todo> {

  change=(e:React.FormEvent<HTMLInputElement>)=>{
    
  this.setState({
    title:e.currentTarget.value,
    state:false
  })
  
 
}

add=(event:React.MouseEvent<HTMLButtonElement>)=>{
 
    console.log('res')
  
  
}
 
  
  render(){

  return (
    
      <>
      <input type="text" placeholder="New Task" onChange={this.change} ></input>
      <button onClick={this.add} >Add</button>

  
      </>
    
  );
  }
 }
 

export default App;
