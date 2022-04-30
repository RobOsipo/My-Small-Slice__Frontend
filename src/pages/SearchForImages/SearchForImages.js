import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ImageContextProvider from '../../context/image-context/ImageContextProvider'
import MapImages from './components/MapImages'
import classes from './SearchForImages.module.css'

const SearchForImages = () => {
    const [searchTerm, setSearchTerm] = useState('final fantasy')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    // todo: left searchBy prop hardcoded to prevent too many request
  return (
      <ImageContextProvider searchBy="Final Fantasy"> 

        <section className={classes['main-container']}>
            <Header />
            <label className={classes.label} htmlFor="search">Search for Images Here</label>
            <input className={classes.input} name="search" value={searchTerm} onChange={(e) => handleChange(e)} />
            <section className={classes['images-container']}>
                <MapImages />
            </section>
        </section>
  
      </ImageContextProvider>
  )
}

export default SearchForImages