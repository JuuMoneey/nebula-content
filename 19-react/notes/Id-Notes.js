import React, {useState} from 'react';
import './App.css';
import IdNumber from './components/Id-Number/Id-Number';
import FullName from './components/Full-Name/Full-Name';
import Address from './components/Address/Address';
import DOB from './components/DOB/DOB';
import Gender from './components/Gender/Gender';
import Height from './components/Height/Height';
import EyeColor from './components/Eye-Color/Eye-Color';


function App() {
  const [idData, setIdData] = useState({
    idNumber: '',
    fullName: '',
    address: '',
    DOB: '',
    gender: '',
    height: '',
    eyeColor: '',
  }); 

  const [user, setUser] = useState([
    {idNumber: '',
    fullName: '',
    address: '',
    DOB: '',
    gender: '',
    height: '',
    eyeColor: '',}
  ]);

  function handleChange(e) {
    setIdData({
      ...idData, 
      [e.target.name] : e.target.value
    });
  }
  
  function handleSubmit(e){
    e.preventDefault()
    setUser([idData, setUser])
    setIdData({
      idNumber: '',
      fullName: '',
      address: '',
      DOB: '',
      gender: '',
      height: '',
      eyeColor: '',
    });
  }
  
  return (
    <div className="id">
    <form onSubmit={handleSubmit}>
        <label>Enter Id Number
          <input type='text' name='idNumber' value={idData.idNumber} onChange={handleChange}/>
        </label>
        <label>Enter Full Name
          <input type='text' name='fullName' value={idData.fullName} onChange={handleChange}/>
        </label>
        <label>Enter Address
          <input type='text' name='address' value={idData.address} onChange={handleChange}/>
        </label>
        <label>Enter DOB
          <input type='text' name='DOB' value={idData.DOB} onChange={handleChange}/>
        </label>
        <label>Enter Gender
          <input type='text' name='gender' value={idData.gender} onChange={handleChange}/>
        </label>
        <label>Enter Height
          <input type='text' name='height' value={idData.height} onChange={handleChange}/>
        </label>
        <label>Enter Eye Color
          <input type='text' name='eyeColor' value={idData.eyeColor} onChange={handleChange}/>
        </label>
        <button>Generate</button>
     </form>
     <IdNumber idNumber = {user[0].idNumber}/>
     <FullName fullName = {user[0].fullName}/>
     <Address address = {user[0].address}/>
     <DOB DOB = {user[0].DOB}/>
     <Gender gender = {user[0].gender}/>
     <Height height = {user[0].height}/>
     <EyeColor eyeColor = {user[0].eyeColor}/>
    </div>
  );
}

export default App;
