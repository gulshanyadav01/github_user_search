import React from 'react'
import {GithubContext} from "../Context/Context";
import {Link} from "react-router-dom"


const Followers = ()  => {
    const {followers} = React.useContext(GithubContext); 


    return (
        <div>
            {followers.map((follower, index) => {
                const {login, avatar_url,html_url,   url} = follower; 
                {/* console.log(follower) */}
                return(
                    <div className = "flex  hover:bg-black">
                      <div>
                        <img src = {avatar_url} className = "w-12 m-4 h-12 ring-2 ring-red-400 rounded-full"  alt = "image"/>
                      </div>
                      <div className = "m-4 font-extrabold " style ={{color:"#8D9AC4"}}>
                      <h1  className = "text-blue-900 ">{login}</h1>
                      <Link to = {url} >{html_url}</Link>
                      </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Followers
