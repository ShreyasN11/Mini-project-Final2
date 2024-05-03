import React from "react";
import './SearchPatient.css';
import { FaUserAlt,FaLock } from "react-icons/fa";
import {useState} from "react";
import { HiIdentification } from "react-icons/hi2";
import ReactDOM from "react-dom";


const SearchPatient = ()=> {

    const [aadharNumber, setAadharNumber] = useState('');
    const [backendData, setBackendData] = useState(null); 

    const handleFindPatient = (event) => {
        event.preventDefault();
        if (!aadharNumber) {
            alert('Please enter Aadhar number');
            return;
        }
        const requestBody = {
            aadharNumber: aadharNumber
        };
        fetch('/searchPatient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setBackendData(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    };

    if(backendData){
        const resultContainer = document.getElementById('result-container');
        const aadharInput = document.getElementById('input');
        const btn = document.getElementById('btn-container');
        const header = document.getElementById('header');
        //console.log(aadharInput);
        aadharInput.style.display = "none";
        btn.style.display = "none";
        header.style.display = "none";
        resultContainer.innerHTML = '';
        //console.log(backendData);
        for (const [key, value] of Object.entries(backendData)) {
            // Check if the value is not null or undefined
            if (value !== null && value !== undefined) {
                // Create a new paragraph element for each property
                const paragraph = document.createElement('div');
                console.log(key);
                paragraph.setAttribute('id', 'final');
                if(key=='Pid')
                {
                    ReactDOM.render(<HiIdentification />, paragraph);
                    paragraph.textContent = `${key}: ${value}`;
                    resultContainer.appendChild(paragraph);
                }
                else{
                    // Set the text content of the paragraph to the property name and value
                    paragraph.textContent = `${key}: ${value}`;
                    // Append the paragraph to the result container
                    resultContainer.appendChild(paragraph);
                }
                
            }
        }
    }
    
    const [isMouseOver , setMouseOver]=useState(false);

    function OnMouseOver(){
        setMouseOver(true);
    }
    function OnMouseOut() {
        setMouseOver(false);
    }

    function changeTextColor(input) {
        input.style.color = "black";
    }

    return ( <div className="wrapper"> 
    <form className="auth-fields-and-buttons" id="login-form" onSubmit={handleFindPatient}>
        <div id="header">
            <h1>Search Patient</h1>
        </div>
        <div className="input-box" id="input">
         <input type="text" placeholder="Aadhar-Number" id="aadharNumber-input" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} required />
         <FaUserAlt  className="icon"/>
        </div>
        <div id="btn-container">
            <button type="submit" id="butt" 
            onMouseOver={OnMouseOver} style={{backgroundColor:(isMouseOver)?"#2ec4b6":"white"}}
            onMouseOut={OnMouseOut}
            >Search</button>
        </div>
        </form>
        <div id="result-container">

        </div>
        </div> );
}


export default SearchPatient;