import React from 'react'
import  {useState} from 'react'

const Style=()=> {

  const [name, setName] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Email, setEmail] = useState("");
  const [counter, setCounter]= useState(1)
  
  
  const increment=()=>{
    setCounter(counter +1);
    };

  return (
    <div>
        <form >
    <label>Enter your FullName: 
      <input type="text"  aria-label="Firstname" placeholder='Enter your Name' value={name}  
        onChange={(e) => setName(e.target.value)}
      />   
    </label><br />
    <label>Enter your PhoneNo: 
      <input
        type="text" placeholder='Enter your PhoneNo'
        value={PhoneNo}  
        onChange={(e) => setPhoneNo(e.target.value)}
      />
    </label><br />
    <label>Enter your Email: 
      <input
        type="text" placeholder='Enter your Email'
        value={Email}  
        onChange={(e) => setEmail(e.target.value)}
      />
    </label><br />
    <label>Enter your Password:       
      <input
        type="text" placeholder='Enter your Password'
        value={name}  
        onChange={(e) => setName(e.target.value)}
      />
    </label><br />
  </form>
  <div>  
     <button onClick={increment}>Submit</button>Number of Entries We Have: {counter} </div>
    </div>
  )
}

export default Style;