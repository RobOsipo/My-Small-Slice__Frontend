import React from 'react'
import Card from '../Card/Card'

const SingleNote = ({ title, content }) => {
  return (
    <Card>
        <h1>{title}</h1>
        <p>{content}</p>
    </Card>
  )
}

export default SingleNote