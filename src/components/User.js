import React,{useContext} from 'react'
import {GithubContext} from "../Context/Context";
import {RiGitRepositoryLine} from "react-icons/ri"

import {GiShadowFollower} from "react-icons/gi"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {BsFileEarmarkCode} from "react-icons/bs"
// import Card from "./Card"


const  User = () =>  {
    const {githubuser} = useContext(GithubContext);
    const {public_repos, followers, following, public_gists} = githubuser;
    // make the array of 
    // const items = [
    //     {id:1, icons:}
    // ]

    return (
        <div className = "lg:flex lg:flex-row sm:flex-col  ">

            <div className = "lg:w-1/4 m-4 sm:w-1 rounded bg-gradient-to-r from-blue-300  to-blue-600  rounded  h-16 items-center" style = {{backgroundColor:"#182037"}}>
                <div className = "m-2 flex">
                    <div className = "w-12 h-12 px-2 py-2 rounded-3xl bg-blue-100 items-center" style = {{backgroundColor:"#1494F9"}}>
                        <RiGitRepositoryLine className = "text-white  w-8 h-8"/>
                    </div>
                    <div className = "ml-8">
                        <h1 style = {{color:"white"}}>Repos</h1>
                        <h1 className = "text-2xl font-bold" style = {{color:"white"}}>{public_repos}</h1>
                    </div>
                </div>
            </div>
            <div className = "lg:w-1/4 m-4 sm:w-1 rounded  bg-gradient-to-r from-red-300  to-red-600 h-16 hover:bg-black " style = {{backgroundColor:"#182037"}}>
               <div className = "m-2 flex">
                   <div className = "px-2 py-2 w-12 h-12 rounded-3xl bg-blue-100 items-center  " style = {{backgroundColor:"#6A5DE1"}} >
                       <GiShadowFollower className = "w-8 h-8 text-white "/>
                   </div>
                   <div className = "ml-8">
                        <h1 style = {{color:"white"}}>Followers</h1>
                        <h1 className = "text-2xl font-bold" style = {{color:"white"}}>{followers}</h1>

                    </div>
               </div>
            </div>
            <div className = "lg:w-1/4 m-4 sm:w-1 rounded h-16 bg-gradient-to-r from-yellow-300  to-yellow-600  hover:bg-black-100 " style = {{backgroundColor:"#182037"}}>
               <div className = "m-2 flex">
                   <div className =  "w-12 h-12 px-2 py-2 rounded-3xl bg-blue-100 items-center" style = {{backgroundColor:"#D731AF"}}>
                    <AiOutlineUsergroupAdd className = "w-8 h-8 text-white "/>
                   </div>
                   <div className = "ml-8">
                        <h1 style = {{color:"white"}}>Following</h1>
                        <h1 className = "text-2xl font-bold" style = {{color:"white"}}>{following}</h1>
                    </div>
               </div>
            </div>
            <div className = "lg:w-1/4 m-4 sm:w-1 rounded h-16 bg-gradient-to-r from-green-300  to-green-600 hover:bg-black " style = {{backgroundColor:"#182037"}}>
                <div className = "m-2 flex">
                    <div className =  "w-12 h-12 px-2 py-2 rounded-3xl bg-blue-100 items-center" style = {{backgroundColor:"#E5813A"}}>
                        <BsFileEarmarkCode className = "w-8 h-8 text-white "/>
                    </div>
                    <div className = "ml-8">
                        <h1 style = {{color:"white"}}>Public_gists</h1>
                        <h1 className = "text-2xl font-bold" style = {{color:"white"}}>{public_gists}</h1>

                    </div>
                </div>

            </div>
            
           
        </div>
       
    )
}

export default User
