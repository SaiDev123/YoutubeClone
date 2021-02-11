import React from 'react';

class Users extends React.Component{

     constructor(){

        console.log("constructor called");
         super();
         this.state={
             name: 'default name',
             address:'default address'
         };

     }
 compone
       updateState=()=>{
        //    this.setState({
        //        name:'ravi kiran',
        //        address:'hyderabad'
        //    })
        //  this.state.name="Sai Kumar";
        //  this.state.address="Banglore";

         this.setState({name:'Sai', address:'banglore'});
       }

       componentDidMount(){
           console.log("component did mount called");
       }

       componentWillUnmount(){
           console.log("component will unmount called");
       }
     render(){
             console.log("render called");
              
         return(
             <div>
                 <h1>This is users component</h1>

                 <button onClick={this.updateState}>Update State</button>

                 {this.state.name} {this.state.address}
             </div>
         )
     }
}

export default Users;
