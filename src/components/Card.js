import React from 'react'
import {GithubContext} from "../Context/Context";
import Followers from "./Followers"
import {HiOutlineOfficeBuilding} from "react-icons/hi"
import {ImLocation2} from "react-icons/im"
import {AiOutlineLink} from "react-icons/ai"


const Card =  ()  => {
    const {githubuser} = React.useContext(GithubContext);
    const {avatar_url, html_url, name, company,blog,} = githubuser;
    return (
        <div className = "lg:flex lg:flex-row lg:w-full">
            <div className ="lg:w-1/2 sm:w-1 mt-8 mr-4 h-64  rounded" style = {{backgroundColor:"#182037"}} >
                <div>
                    <div className ="flex m-3">
                    <img src = {avatar_url} alt = {name} className = "rounded-full w-24 h-24" />
                    <h1 className = "m-4" style ={{color:"#8D9AC4"}}>{name}</h1>
                    </div>
                </div>
                <div style ={{color:"#8D9AC4"}} className = "m-4">
                    <h1><span><HiOutlineOfficeBuilding className  = "inline m-2 text-blue-600"/></span>{html_url}</h1>
                    <h1><span><ImLocation2 className  = "inline m-2 text-blue-600"/></span>{company}</h1>
                    <h1><span><AiOutlineLink className  = "inline m-2 text-blue-600"/></span>{blog}</h1>
                </div>

            </div>
            <div className = "lg:w-1/2   lg:mt-8 lg:ml-4   h-64 rounded  overflow-x-auto overflow-x-hidden" style = {{backgroundColor:"#182037"}}>
                <Followers/>
            </div>
        </div>
    )
}

export default Card;
