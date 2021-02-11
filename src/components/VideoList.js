import React from 'react';
import VideoListItem from './VideoListItem';


class VideoList extends React.Component{
     renderList =() =>{
 
         let allVideosList=this.props.videos.map(video => {
             return <VideoListItem key={video.etag} onVideoSelect={this.props.onVideoSelect} video={video}></VideoListItem>
         })
         console.log('allVideosList',allVideosList);
         return allVideosList;

     }
     render(){
         return(
             <div>

                 <h1>I am videolist</h1>

                 {this.renderList()}
                 
             </div>
         )
     }
}
export default VideoList;