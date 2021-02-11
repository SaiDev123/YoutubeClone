import React from 'react';


class SearchBar extends React.Component{
     constructor(){
         super();
         
         this.state={
             term:''
         }
     } 

      updateSearchTerm=(event) =>{
      
        this.setState({term:event.target.value});
        console.log('state', this.state.term);
        this.props.onSearchTerm(this.state.term);

        
      }
     render(){

        return(
            <div>

                <form>
                    <input onChange={this.updateSearchTerm} type="text" size="100"></input>
                </form>

            </div>
        )

     }
}

export default SearchBar;