import React from 'react'
import './components.css'
import Finished from './finished'
export default function General(props){
    function sendData(data){
        props.parentCallback(data, 'general')
    }
    function exportToFinished(event){
        event.preventDefault()
        let name = event.target[0].value
        let email = event.target[1].value
        let phone = event.target[2].value
        let position = event.target[3].value

        let data = ({
            'name': name,
            'email': email,
            'phone': phone,
            'position': position
    })
        sendData(data)

    }

    return (
        <div>
            <form onSubmit={exportToFinished} class='component'>
            <h3>General Details</h3>

            <label id='name'>Name</label>
            <input id= 'name' type='text'></input>

            <label id='email'>Email</label>
            <input id= 'email' type='email'></input>

            <label id='phoneNumber'>Phone Number</label>
            <input id= 'phoneNumber' type='text' maxLength={11}></input>

            <label id='position'>Position</label>
            <input id= 'position' type='text'></input>
            <button type='reset'>Clear</button>
            <button type='submit'>Submit</button>
            </form> 
        </div>
    )
}