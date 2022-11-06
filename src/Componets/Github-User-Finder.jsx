import React, { useEffect, useState } from 'react'
import profile1 from "./Assets/profile.png"
import axios from "axios";
import errorImg from "./Assets/error.png"

const GithubUsersfind = () => {
  const [inputValue, SetinputValue] = useState("")
  const [userInfo, setUserInfo] = useState("")
  const [error, setError] = useState(false);
  const [callApi, setCallApi] = useState(false)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${inputValue ? inputValue : "huzaifasheikh2002"}`)
      .then((res) => {
        // console.log(res);
        setUserInfo(res.data);
        setError(false);
      })
      .catch((err) => {
        // console.log(err);
        setError(true)
      });

  }, [callApi])

  const handleForm = (e) => {
    e.preventDefault();
    console.log("submit", inputValue);

    if (!inputValue) {
      console.log("enter some value");
      return;
    }
    setCallApi(!callApi)
    // axios
    // .get(`https://api.github.com/users/${inputValue}`)
    // .then((res) => {
    //   // console.log(res);
    //   setUserInfo(res.data);
    //   setError(false);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   setError(true)
    //   // setError(true);
    // });

  }
  return (<>
  <h1></h1>
    <section className='box1'>

      <section className='box2'>

        {/*  */}
        <nav className="navbar bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ">GitHub User Finder</a>
    <form  onSubmit={handleForm} className="d-flex" role="search">
      <input autoFocus value={inputValue}
              onChange={(e) => {
                SetinputValue(e.target.value);
              }} className="form-control me-2 " type="search"
               placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

        {/*  */}
{/* 
    
          <form onSubmit={handleForm}>
            <div className='input'>
            <input type="text" placeholder='Enter Github Username'
              value={inputValue}
              onChange={(e) => {
                SetinputValue(e.target.value);
              }} 
            />
            </div>
          </form>
         */}

      </section>
      {error === false ? (

        <section className='cardWrapper'>
          <div className='ProfileImg'>
          <img src={userInfo ? userInfo.avatar_url : profile1} />
          </div>
          <div className='profileListing'>
            <ul>
              
              <li>Name:{userInfo ? userInfo.name : "User Name"}</li>
              <li>Bio:{userInfo ? userInfo.bio : "User Bio"}</li>
              <li>Followers:{userInfo ? userInfo.followers : "User Followers"}</li>
              <li>Following:{userInfo ? userInfo.following : "User Following"}</li>
              <li>Public Repositories:{userInfo ? userInfo.public_repos : "Public Repositories"}</li>
            </ul>

          </div>

        </section>) : (
        <img src={errorImg} />

      )}
    </section>

  </>)
}

export default GithubUsersfind;