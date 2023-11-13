import video1 from '../../video/water.mp4'
import video2 from '../../video/coverr2.mp4'
import s from './bgVideo.module.scss'

const BgVideo = ({theme}) => {

  if (theme === 'video-1') {
    return <video src={video1} autoPlay loop muted></video>
  } if  (theme === 'video-2')
  return   <video  src={video2} autoPlay loop muted></video>
}

export default BgVideo