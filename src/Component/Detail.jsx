import React from 'react'
import data from '../data.json'
import Card from './Card';

function Detail() {
    
  return (
    <main>
    {
        data.map((e) => (
            
              <Card value={e} />
            
          ))
    }
    </main>
  )
}

export default Detail
