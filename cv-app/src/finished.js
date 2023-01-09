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
        <div>
            <General parentCallback = {callbackFunction}></General>
            <Experience parentCallback = {callbackFunction}></Experience>
            <Education parentCallback={callbackFunction}></Education>
            hi
            <div>{generalInfo.name}</div>
            <div>{generalInfo.email}</div>
            <div>{generalInfo.phone}</div>
            <div>{generalInfo.position}</div>
            hi again
            <div>{experienceInfo.companyName}</div>
            <div>{experienceInfo.position}</div>
            <div>{experienceInfo.mainTasks}</div>
            <div>{experienceInfo.startDateOfWork}</div>
            <div>{experienceInfo.endDateOfWork}</div>
            last one
            <div>{educationInfo.schoolName}</div>
            <div>{educationInfo.fieldOfStudy}</div>
            <div>{educationInfo.startDateOfStudy}</div>
            <div>{educationInfo.endDateOfStudy}</div>
        </div>
    )

}
