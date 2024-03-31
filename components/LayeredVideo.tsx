
import React from 'react'
import ReactPlayer from 'react-player'
const LayeredVideo = () => {

    const videoUrl = '/videos/storylinevideo.mp4'
  return (
    <div className='video-container'>
        <ReactPlayer url={videoUrl} 
        controls = {false} 
        width="100%" 
        height="100vh"
        playing = {true}
        style={{objectFit:'cover'}}
        loop={true}/>
    </div>
  )
}

export default LayeredVideo