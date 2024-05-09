import React, {useRef} from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'
const VideoPlayer = ({playVideo, setPlayVideo}) => {
    const player = useRef(null)

    const closePlayer = (e) =>{
        if(e.target===player.current){
            setPlayVideo(false)
        }
    }

  return (
    <div className={`video-player ${playVideo?'':'hide'}` } ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
import './VideoPlayer.css'
export default VideoPlayer
