import React from 'react'

export default function Elephant({ image, name, id }) {

    const displayPhoto = () => {
        if (image) {
            const elephantPhoto = document.getElementById(id)
            elephantPhoto.src = image
        }
    }

    return (
        <div className='elephantCard'>
            <h3>{name}</h3>
            <button onClick={displayPhoto}>see photo</button>
            <img className='elephantImage' id={id} src=''></img>
        </div>
    )
}
