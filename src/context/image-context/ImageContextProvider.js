import React, { useState, useEffect } from 'react'
import ImageContext from './image-context'

const ImageContextProvider = ({children, searchBy}) => {
    
    const [images, setImages] = useState([])

  // ! Deleted fetch request to save on rewuest made until launch



  return (
    <ImageContext.Provider value={images}>
        {children}
    </ImageContext.Provider>
  )
}

ImageContextProvider.defaultProps = {
    searchBy: 'coding'
}

export default ImageContextProvider