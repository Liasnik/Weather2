import video from '../../video/water.mp4'
import video2 from '../../video/coverr2.mp4'
import s from './bgVideo.module.scss'

const BgVideo = ({theme}) => {

  if (theme) {
    return <video src={video} autoPlay loop muted></video>
  } 
  return   <video  src={video2} autoPlay loop muted></video>
 
}

export default BgVideo