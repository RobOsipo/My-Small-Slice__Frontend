import React, { useContext } from 'react'
import ImageContext from '../../../context/image-context/image-context'
// import useHover from '../../../hooks/useHover'

import classes from './MapImages.module.css'

const MapImages = () => {
// const [hovered, ref] = useHover()
const fetchImageContext = useContext(ImageContext)


const data = fetchImageContext.map((image, index) => (
    <>
    {/* <div className={classes.images} style={{ backgroundImage: "url('image.url')"}}></div> */}
    <img className={classes.images} src={image.url} alt={image.title} key={index}  />
    </>
))


  return (
    <>
        {data.length === 0 ? <h1 className={classes.loading}>Loading Images...</h1> : data}
    </>
  )
}

export default MapImages