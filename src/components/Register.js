import React from 'react';
import axios from 'axios';

class Register extends React.Component{

    constructor(){

        super();
        this.state={
            username: "",
            password: "",
            emailId:""
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

       register=(event)=>{
             event.preventDefault();

              axios.post("http://localhost:9013/register", this.state).then(
                  response => {
                       console.log(response);
                        if(response.data.token){
                            localStorage.setItem('token', response.data.token);
                            this.props.history.push("/dashboard");
                        }
                  }
              )
       }
    render(){
        console.log('render called');
        return(
            <div>

                 <br></br>
                 <br></br>
               <form>

                   Username:<input onChange={this.updateValue} type="text" className="form-control" name="username"></input> <br></br><br></br>
                   Password: <input onChange={this.updateValue} type="password" className="form-control" name="password"></input><br></br><br></br>
                   EmailId: <input onChange={this.updateValue} type="text" className="form-control" name="emailId"></input><br></br><br></br>
                   <button className="btn btn-danger" onClick={this.register}>Submit</button>
                   

               </form>
            </div>
        )
    }
}
export default Register