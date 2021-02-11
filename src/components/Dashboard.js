import React from 'react';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

class Dashboard extends React.Component{
  constructor(){

    super();

    this.state={
      videos:[],
      selectedVideo:null
    }
 }
 componentDidMount=() =>{
     this.videoSearch('kgf');
 }
  videoSearch =(term) =>{
   let currentComponent = this;
   YTSearch({term:term,key:'AIzaSyD2yHEmLk-1GTifHQA_OrswUP4OaTtiFWY'},function(videos){
       console.log('videos',videos);
       currentComponent.setState({videos:videos});
       currentComponent.setState({selectedVideo:videos[0]});
   })
  }
  render(){
   return(
     <div>
         <SearchBar onSearchTerm={_.debounce(term => this.videoSearch(term),1000)}></SearchBar> <br></br>

         <VideoPlayer selectedVideo={this.state.selectedVideo}></VideoPlayer>

           <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo:selectedVideo})} videos={this.state.videos}></VideoList>

     </div>
   )

  }
}
export default Dashboard;