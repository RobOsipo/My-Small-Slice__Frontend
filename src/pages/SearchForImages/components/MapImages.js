import React, { useContext, useState } from 'react'
import ImageContext from '../../../context/image-context/image-context'
// import useHover from '../../../hooks/useHover'

import classes from './MapImages.module.css'

const MapImages = () => {
// const [hovered, ref] = useHover()
const [likes, setLikes] = useState(0)
const fetchImageContext = useContext(ImageContext)

const handleClick = () => {
  setLikes(prevState => prevState + 1)
}


const data = fetchImageContext.map((image, index) => (
    <div className={classes.container} key={index}>
   
    <span className={classes.span}><button className={classes.button} onClick={handleClick}>Like</button><span className={classes.innerSpan}>{likes}</span></span>

    <img className={classes.images} src={image.url} alt={image.title}  />
    </div>
))


  return (
    <>
        {data.length === 0 ? <h1 className={classes.loading}>Loading Images...</h1> : data}
    </>
  )
}

export default MapImages