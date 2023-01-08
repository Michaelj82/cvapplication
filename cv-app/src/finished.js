import './components.css'
import General from './general';
import Experience from './experience';
import Education from './education';
import React, {useState} from 'react';
export default function Finished(props){

    const [generalInfo, setGeneralInfo] = useState({})
    const [experienceInfo, setExperienceInfo] = useState({})
    const [educationInfo, setEducationInfo] = useState({})
    
    function callbackFunction(childData){
        setGeneralInfo(childData)
    }

    return(
        <div>
            <General parentCallback = {callbackFunction}></General>
            <Experience></Experience>
            <Education></Education>
            hi
            <div>{generalInfo.name}</div>
            <div>{generalInfo.email}</div>
            <div>{generalInfo.phone}</div>
            <div>{generalInfo.position}</div>


        </div>
    )

}
