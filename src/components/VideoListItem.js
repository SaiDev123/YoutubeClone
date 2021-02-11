
import React from 'react';

class VideoListItem extends React.Component{
    render(){

        let video=this.props.video;

      //  console.log(video);

        let title=video.snippet.title;

        let imageUrl= video.snippet.thumbnails.medium.url

        return(
            
               <li onClick={() => this.props.onVideoSelect(video)}>

                     <h3>{title}</h3>
                     <img src={imageUrl} alt="this image is not available"></img>

               </li>
            
        )

    }
}
export default VideoListItem;