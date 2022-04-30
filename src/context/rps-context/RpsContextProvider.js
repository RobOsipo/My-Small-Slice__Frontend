import React, { useEffect, useState } from 'react'
import RpsContext from './RpsContext'

const RpsContextProvider = ({ children, choice, setRpsChoice }) => {
    const [rps, setRps] = useState({})

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'rock-paper-scissor2.p.rapidapi.com',
                'X-RapidAPI-Key': '1757706a65msh174aaddee59c027p135cdejsnb498833785a9'
            }
        };
        
        fetch(`https://rock-paper-scissor2.p.rapidapi.com/api/${choice}`, options)
            .then(response => response.json())
            .then(response => setRps(response))
            .catch(err => console.error(err));

        return () => {
            setRpsChoice('')
        }

    }, [choice])


  return (
    <RpsContext.Provider value={rps}>
        {children}
    </RpsContext.Provider>
  )
}



export default RpsContextProvider