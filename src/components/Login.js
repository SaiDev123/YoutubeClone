import React from 'react';


class Login extends React.Component{

    constructor(){

        super();
        this.state={
            username: "",
            password: ""
        }

        //this.updateUsername= this.updateUsername.bind(this);

    }

    //    updateUsername(event){
    //        var value= event.target.value;
    //       this.setState({username:value});
    //    }

       updateValue=(event)=>{
           var value= event.target.value;
           var name= event.target.name;
          this.setState({
              [name]:value
          });
       }

    render(){
        console.log('render called');
        return(
            <div>
               <form>

                   Username:<input onChange={this.updateValue} type="text" name="username"></input>
                   Password: <input onChange={this.updateValue} type="password" name="password"></input>
                   <button>Submit</button>
                   {this.state.username} {this.state.password}

               </form>
            </div>
        )
    }

}
export default Login;

