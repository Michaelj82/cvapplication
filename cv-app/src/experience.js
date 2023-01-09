import './components.css'

export default function Experience(props){
    function sendData(data){
        props.parentCallback(data, 'experience')
    }
    function exportToFinished(event){
        event.preventDefault()
        let companyName = event.target[0].value
        let position = event.target[1].value
        let mainTasks = event.target[2].value
        let startDateOfWork = event.target[3].value
        let endDateOfWork = event.target[4].value

        let data = ({
            'companyName': companyName,
            'position': position,
            'mainTasks': mainTasks,
            'startDateOfWork': startDateOfWork,
            'endDateOfWork':endDateOfWork
    })
        sendData(data)

    }
    return (
        <div>

            <form onSubmit={exportToFinished} class='component'>
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