import React from 'react';

class VideoPlayer extends React.Component{

     render(){

       let video=this.props.selectedVideo;

        console.log('video',video);

         var v=Object.assign({},video);
        //var v= JSON.parse(JSON.stringify(video));
         
       var x=Object.assign({},v.id);
       let videoId= x.videoId;

       let src=`https://www.youtube.com/embed/${videoId}`
       // console.log('In Video Player',videoId);
         return(
            <div>

<iframe width="560" height="315" src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>

         )
     
         }

}
export default VideoPlayer;