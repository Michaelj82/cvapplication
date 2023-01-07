import './components.css'

export default function Experience(){

    return (
        <div>

            <form class='component'>
            <h3>Experience</h3>

            <label id='companyName'>Company Name</label>
            <input id= 'companyName' type='text'></input>

            <label id='position'>Position</label>
            <input id= 'position' type='text'></input>

            <label id='mainTasks'>Main Tasks</label>
            <textarea id= 'mainTasks'></textarea>

            <label id='startDateOfWork'>Start Date</label>
            <input id= 'startDateOfWork' type='date'></input>

            <label id='endDateOfWork'>End Date</label>
            <input id= 'endDateOfWork' type='date'></input>
            <button type='reset'>Clear</button>
            <button type='submit'>Submit</button>

            </form> 
        </div>
    )
}