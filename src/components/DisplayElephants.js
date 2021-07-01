import React from 'react'
import Elephant from './Elephant'

export default function DisplayElephants(props) {

    if (props.elephants) {
    return props.elephants.map(elephant => {
        return (
            <Elephant image={elephant.image} name={elephant.name} id={elephant._id} key={elephant._id}/>
        )
    })
   } else {
       return null
   }
}
