import './components.css'

export default function Education(props){
    function sendData(data){
        props.parentCallback(data, 'education')
    }
    function exportToFinished(event){
        event.preventDefault()
        let schoolName = event.target[0].value
        let fieldOfStudy = event.target[1].value
        let startDateOfStudy = event.target[2].value
        let endDateOfStudy = event.target[3].value

        let data = ({
            'schoolName': schoolName,
            'fieldOfStudy': fieldOfStudy,
            'startDateOfStudy': startDateOfStudy,
            'endDateOfStudy': endDateOfStudy,
    })
        sendData(data)

    }
    return (
        <div>

            <form onSubmit={exportToFinished} class='component'>
            <h3>Education</h3>

            <label id='schoolName'>School Name</label>
            <input id= 'schoolName' type='text'></input>

            <label id='fieldOfStudy'>Field of Study</label>
            <input id= 'fieldOfStudy' type='text'></input>

            <label id='startDateOfStudy'>Start Date</label>
            <input id= 'startDateOfStudy' type='date'></input>

            <label id='endDateOfStudy'>End Date</label>
            <input id= 'endDateOfStudy' type='date'></input>

            <button type='reset'>Clear</button>
            <button type='submit'>Submit</button>

            </form> 
        </div>
    )
}