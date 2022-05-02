import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ImageContextProvider from '../../context/image-context/ImageContextProvider'
import MapImages from './components/MapImages'
import classes from './SearchForImages.module.css'

const SearchForImages = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [submitSearch, setSubmitSearch] = useState('final fantasy')
    const [loadingFlag, setLoadingFlag] = useState(false)

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = (e) =>  {
        e.preventDefault()
        setLoadingFlag(true)
        setSubmitSearch(searchTerm)

        setTimeout(() => {
            setLoadingFlag(false)
        }, 3000)
        
    }



    // todo: left searchBy prop hardcoded to prevent too many request
  return (
      <ImageContextProvider searchBy={submitSearch}> 

        <section className={classes['main-container']}>
            <Header />
            <form onSubmit={handleSubmit}>
                <label className={classes.label} htmlFor="search">Search for Images Here</label>
                <input className={classes.input} name="search" value={searchTerm} onChange={(e) => handleChange(e)} />
                <button type="submit" value="submit">Click to Search</button>
            </form>
            {loadingFlag && <h2 className={classes.loading}>Please wait while we fetch your photos</h2>}
            <section className={classes['images-container']}>
                <MapImages />
            </section>
        </section>
  
      </ImageContextProvider>
  )
}

export default SearchForImages