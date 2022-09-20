import React, { useEffect, useState } from 'react'
import profile1 from "./Assets/profile.png"
import axios from "axios";


const WeatherApp = () => {
  const [inputValue, SetinputValue] = useState("") 
  const [userInfo,setUserInfo]=useState("")
 
  const handleForm =(e)=>{
    e.preventDefault();
    console.log("submit" ,inputValue);

    if(!inputValue){
    console.log("enter some value");
  return;
}
axios
.get(`https://api.github.com/users/${inputValue}`)
.then((res) => {
  // console.log(res);
  setUserInfo(res.data);
  // setError(false);
})
.catch((err) => {
  console.log(err);
  // setError(true);
});

}
  return(<>
<section className='box1'>

    <section className='box2'>

      <div className='inputBox'>
        <form onSubmit={handleForm}>
          
    <input type="text" placeholder='Enter Github Username'
     value={inputValue}
    onChange={(e)=>{
    SetinputValue(e.target.value);
    }}
    />
    </form>
      </div>
  
      </section>
    <section className='cardWrapper'>
      <img src={userInfo ? userInfo.avatar_url: profile1}/>
        <div className='profileListing'>
        <ul>
        <li>Name:{userInfo ? userInfo.name : "User Name"}</li>
          <li>Bio:{userInfo  ? userInfo.bio :"User Bio"}</li>
          <li>Followers:{userInfo ? userInfo.followers:"User Followers"}</li>
          <li>Following:{userInfo?userInfo.following:"User Following"}</li>
          <li>Public Repositories:{userInfo ? userInfo.public_repos:"Public Repositories"}</li>
        </ul>
        
        </div>

      </section>  

</section>

  </> )
}

export default WeatherApp;