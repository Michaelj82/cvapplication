import React from 'react'
import './components.css'

export default function General(){

    return (
        <div>
           <form class='component'>

            <label id='name'>Name</label>
            <input id= 'name' type='text'></input>

            <label id='email'>Email</label>
            <input id= 'email' type='email'></input>

            <label id='phoneNumber'>Phone Number</label>
            <input id= 'phoneNumber' type='text' maxLength={11}></input>

            <label id='position'>Position</label>
            <input id= 'position' type='text'></input>
            

            </form> 
        </div>
    )
}