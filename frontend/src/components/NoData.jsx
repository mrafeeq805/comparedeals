import React from 'react'
import animationData from '../lotties/nodata.json'
import Lottie from 'react-lottie';

const NoData = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className='flex flex-col items-center'>
        <Lottie options={defaultOptions} height={300} width={300}/>
        <h1 className='text-white text-2xl font-poppins'>No Data Found !</h1>
    </div>
  )
}

export default NoData