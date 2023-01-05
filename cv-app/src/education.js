import './components.css'

export default function Education(){

    return (
        <div>
           <form class='component'>

            <label id='schoolName'>School Name</label>
            <input id= 'schoolName' type='text'></input>

            <label id='fieldOfStudy'>Field of Study</label>
            <input id= 'fieldOfStudy' type='text'></input>

            <label id='startDateOfStudy'>Start Date</label>
            <input id= 'startDateOfStudy' type='date'></input>

            <label id='endDateOfStudy'>End Date</label>
            <input id= 'endDateOfStudy' type='date'></input>

            </form> 
        </div>
    )
}