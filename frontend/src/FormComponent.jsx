import React, { useState } from "react";
import axios from "axios";

export default function FormComponent() {
    const [age, setAge] = useState('');                 //useState = utiliser les états entrés dans le form
    const [gender, setGender] = useState('');
    const [cp, setCP] = useState('');
    const [bp, setBP] = useState('');
    const [cholesterol, setCholesterol] = useState('');
    const [fbs, setFbs] = useState('');
    const [ecg, setEcg] = useState('');
    const [mhr, setMhr] = useState('');
    const [exang, setExang] = useState('');
    const [oldpeak, setOldpeak] = useState('');
    const [slope, setSlope] = useState('');
    const [ca, setCa] = useState('');
    const [thal, setThal] = useState('');
    const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {                                           //fonct° lorsque clic sur bouton Submit
    e.preventDefault();                                                         //empêche navigateur de recharger la page
    try {                                                                       //envoi des données à FastApi : 
        const res = await axios.post('http://localhost:8000/predict', {            // Post à URL du backend FastAPI
            age: Number(age), 
            sex: Number(gender), 
            cp: Number(cp), 
            trestbps: Number(bp),
            chol: Number(cholesterol),
            fbs: Number(fbs),
            restecg: Number(ecg),
            thalach: Number(mhr),
            exang: Number(exang),
            oldpeak: Number(oldpeak),
            slope: Number(slope),
            ca: Number(ca),
            thal: Number(thal)
        }
        );
        setResponse(res.data.message);
    } catch (err) {
        console.error(err);
        setResponse('An error occurred.');
    }
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="age">Enter your age</label>
        <br/>
        <input 
            id="age"
            type="number" 
            placeholder="Your age" 
            value={age} 
            onChange={(e) => setAge(e.target.value)}
            required/>
        <br />
        <label htmlFor="gender">Gender?</label>
        <br />
        <select 
            id="gender" 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required>
            <option value="">-- Select gender --</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
        </select>
        <br/>
        <label htmlFor="cp">Chest pain type</label>
        <br/>
        <select 
            id="cp"
            type="checkbox" 
            value={cp} 
            onChange={(e) => setCP(e.target.value)}
            required>
            <option value="">-- Select option --</option>
            <option value="1">Typical angina (chest pain due to decreased blood supply)</option>
            <option value="2"> Atypical angina</option>
            <option value="3">Non-anginal pain</option>
            <option value="4">Asymptomatic</option>
        </select>
        <br />
        <label htmlFor="bp">Resting Blood Pressure</label>
        <br/>
        <input 
            id="bp"
            type="number" 
            placeholder="Your resting Blood Pressure (in mm Hg)" 
            value={bp} 
            onChange={(e) => setBP(e.target.value)}
            required/>
        <br />
        <label htmlFor="cholesterol">Cholesterol rate</label>
        <br />
        <input 
            id="cholesterol"
            type="number" 
            placeholder="Cholesterol rate" 
            value={cholesterol} 
            onChange={(e) => setCholesterol(e.target.value)}
            required/>
        <br />
        <label htmlFor="fbs">Fasting Blood Sugar (fbs)</label>
        <br />
        <select 
            id="fbs"
            type="checkbox" 
            value={fbs} 
            onChange={(e) => setFbs(e.target.value)}
            required>
            <option value="">-- Select option --</option>
            <option value="0">inferior to 120 mg/dL</option>
            <option value="1">superior to 120 mg/dL</option>
        </select>
        <br />
        <label htmlFor="resting ECG">Resting ECG</label>
        <br />
        <select 
            id="ecg"
            type="checkbox" 
            value={ecg} 
            onChange={(e) => setEcg(e.target.value)}
            required>
            <option value="">-- Select option --</option>
            <option value="0">Normal</option>
            <option value="1">Having ST-T wave abnormality</option>
            <option value="2">Showing probable or definite left ventricular hypertrophy</option>
        </select>
        <br />
        <label htmlFor="mhr">Max Heart Rate</label>
        <br/>
        <input 
            id="mhr"
            type="number" 
            placeholder="Max Heart Rate" 
            value={mhr} 
            onChange={(e) => setMhr(e.target.value)}
            required/>
        <br />
        <label htmlFor="exang">Exercise-Induced Angina</label>
        <br />
        <select 
            id="exang"
            type="checkbox" 
            value={exang} 
            onChange={(e) => setExang(e.target.value)}
            required>
            <option value="">-- Select option --</option>
            <option value="0">No</option>
            <option value="1">Yes (chest pain during exercise)</option>
        </select>
        <br />
        <label htmlFor="old">ST depression</label>
        <br/>
        <input 
            id="oldpeak"
            type="number" 
            step="0.1"
            min="0"
            placeholder="oldpeak" 
            value={oldpeak} 
            onChange={(e) => setOldpeak(e.target.value)}
            required/>
        <br />
        <label htmlFor="slope">Slope of ST</label>
        <br />
        <select 
            id="slope"
            type="checkbox" 
            value={slope} 
            onChange={(e) => setSlope(e.target.value)}
            required>
            <option value="">-- Select option --</option>
            <option value="0">Upsloping (less risk)</option>
            <option value="1">Flat</option>
            <option value="2">Downsloping (more risk)</option>
        </select>
        <br/>
        <label htmlFor="ca">Number of Major Vessels </label>
        <br />
        <input 
            id="ca"
            type="number" 
            value={ca} 
            min="0" 
            max="4" 
            onChange={(e) => setCa(e.target.value)}
            required/>
        <br />
        <label htmlFor="thal">Thallium Stress Test</label>
        <br />
        <select 
            id="thal"
            type="checkbox" 
            value={thal} 
            onChange={(e) => setThal(e.target.value)}
            required>
            <option value="">-- Select option --</option>
            <option value="3">Normal</option>
            <option value="6">Fixed defect</option>
            <option value="7">Reversable defect</option>
        </select>
        <br /><br />
        <button type="submit">Obtain my prediction</button>
        {response && <p>{response}</p>} 
    </form>
    );
}
