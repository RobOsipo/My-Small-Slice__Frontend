import React, { useState, useEffect } from 'react'
import ImageContext from './image-context'

const ImageContextProvider = ({children, searchBy}) => {
    
    const [images, setImages] = useState([])

  // ! Deleted fetch request to save on rewuest made until launch

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '1757706a65msh174aaddee59c027p135cdejsnb498833785a9'
        }
    };
    
    fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${searchBy}&pageNumber=1&pageSize=10&autoCorrect=true`, options)
        .then(response => response.json())
        .then(response => setImages(response.value))
        .catch(err => console.error(err));

  }, [searchBy])

  



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