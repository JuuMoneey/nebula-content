// import React, {useState} from 'react';
// import './App.css';
// import IdCreator from './components/Id-Creator/Id-Creator';


// function App() {
//   return (
//     <div className="id">
//       <IdCreator/>      
//     </div>
//   );
// }

// export default App;




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
    dob: '',
    gender: '',
    height: '',
    eyeColor: '',
  }); 

  const [user, setUser] = useState([
    {idNumber: '',
    fullName: '',
    address: '',
    dob: '',
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
      dob: '',
      gender: '',
      height: '',
      eyeColor: '',
    });
  }
  
  return (
    <div className="idCard">
    <form onSubmit={handleSubmit}>
      
      <div className='image'>
        <input type='image'></input>
      </div>


      <div className='topId'>
        <label>Enter Id Number
          <input type='text' name='idNumber' value={idData.idNumber} onChange={handleChange}/>
        </label>
      </div>


      <div className='section1'>
        <label>Enter Full Name
          <input type='text' name='fullName' value={idData.fullName} onChange={handleChange}/>
        </label>
        <label>Enter Address
          <input type='text' name='address' value={idData.address} onChange={handleChange}/>
        </label>
      </div>


      <div className='section2'>
        <label>Enter Date Of Birth
          <input type='text' name='DOB' value={idData.dob} onChange={handleChange}/>
        </label>
      </div>


      <div className='bottomId'>
        <label>Enter Gender
          <input type='text' name='gender' value={idData.gender} onChange={handleChange}/>
        </label>

        <label>Enter Height
          <input type='text' name='height' value={idData.height} onChange={handleChange}/>
        </label>

        <label>Enter Eye Color
          <input type='text' name='eyeColor' value={idData.eyeColor} onChange={handleChange}/>
        </label>
      </div>

        <button>Generate Id</button>
     </form>
     <IdNumber idNumber = {user[0].idNumber}/>
     <FullName fullName = {user[0].fullName}/>
     <Address address = {user[0].address}/>
     <DOB dob = {user[0].dob}/>
     <Gender gender = {user[0].gender}/>
     <Height height = {user[0].height}/>
     <EyeColor eyeColor = {user[0].eyeColor}/>
    </div>
  );
}

export default App;
