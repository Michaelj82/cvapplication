import './components.css'
import General from './general';
import Experience from './experience';
import Education from './education';
import React, {useState} from 'react';
export default function Finished(props){

    const [generalInfo, setGeneralInfo] = useState({})
    const [experienceInfo, setExperienceInfo] = useState({})
    const [educationInfo, setEducationInfo] = useState({})
    
    function callbackFunction(childData, type){

        if (type === 'general'){
            setGeneralInfo(childData)
        }else if (type === 'experience'){
            setExperienceInfo(childData)
        }else if (type === 'education'){
            setEducationInfo(childData)
        }
    }

    return(
        <div id='site'>
            <div id='forms'>
            <General parentCallback = {callbackFunction}></General>
            <Experience parentCallback = {callbackFunction}></Experience>
            <Education parentCallback={callbackFunction}></Education>
            </div>

            <div id='cv'>
                <div id='cvHeader'>
                    <h2>{generalInfo.name}</h2>
                    <h4>{generalInfo.position}</h4>
                    <div>{generalInfo.email}</div>
                    <div>{generalInfo.phone}</div>
                </div>

                <div id='cvSideBar'>
                    
                </div>

                <div id='cvEducation'>
                    <div>{educationInfo.schoolName}</div>
                    <div>Major: {educationInfo.fieldOfStudy}</div>
                    <div>Timeframe Attended:</div>
                    <div>{educationInfo.startDateOfStudy}</div>
                    <div>{educationInfo.endDateOfStudy}</div>
                </div>
                
                <div id='cvExperience'>
                    <div>{experienceInfo.companyName}</div>
                    <div>{experienceInfo.position}</div>
                    <div>Tasks: {experienceInfo.mainTasks}</div>
                    <div>Timeframe Working:</div>
                    <div>{experienceInfo.startDateOfWork}</div>
                    <div>{experienceInfo.endDateOfWork}</div>
                </div>

                <div id='cvFooter'>
                    
                </div>

            </div>

        </div>
    )

}
