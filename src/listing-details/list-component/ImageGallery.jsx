import React from 'react'

function ImageGallery({cars}) {
  return (
    <div>
        <img src={cars?.images[0].imageUrl}
         className='w-fit h-fit rounded-t-xl object-cover' />
    </div>
  )
}

export default ImageGallery;