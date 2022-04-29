import React, { useContext } from 'react'
import ImageContext from '../../../context/image-context/image-context'

import classes from './MapImages.module.css'

const MapImages = () => {

const fetchImageContext = useContext(ImageContext)
console.log('fetchcontext', fetchImageContext)

const data = fetchImageContext.map((image, index) => (
    <>
    {/* <div className={classes.images} style={{ backgroundImage: "url('image.url')"}}></div> */}
    <img className={classes.images} src={image.url} alt={image.title} />
    </>
))


  return (
    <>
        {data.length === 0 ? <h1 className={classes.loading}>Loading Images...</h1> : data}
    </>
  )
}

export default MapImages