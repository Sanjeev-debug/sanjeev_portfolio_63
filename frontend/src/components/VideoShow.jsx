import React from 'react'
import './VideoShow.css'
import { ReactTyped } from 'react-typed';

const VideoShow = ({item}) => {
  return (
    <>
     <div className='haatProject'  >
            <h2>
              <ReactTyped
                strings={[item.title1, item.title2]}
                typeSpeed={80}
                backSpeed={50}
                loop
                smartBackspace={true}
              />

            </h2>
            
            <div className="haatVideo">
              <video src={item.videoName} controls muted loop poster={item.posterName} ></video>
            </div>
          </div>
    
    </>
  )
}

export default VideoShow