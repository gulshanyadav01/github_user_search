import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import { GithubContext } from '../Context/Context';
;
const  Search = () =>{
    const [user, setUser] = React.useState("");
    const {requests, error, searchGithubUser} = React.useContext(GithubContext);
    console.log(requests);
    console.log(error.msg);

    const onChange = (e) =>{
        setUser(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // console.log(user);
        // more login coming soon
        if(user){
            searchGithubUser(user);
            // setUser("");
        }
        

    }
    return (
        <div style = {{backgroundColor:"#0E1122"}} >
            <div className = " h-12 rounded focus:ring-1 focus:ring-red-400  mr-4 ml-4 mb-4 flex" style = {{backgroundColor:"#182037"}}>
                <AiOutlineSearch className = "ml-20 mt-4 w-8 h-8 text-blue-500"/>
                <form className = "mt-1" onSubmit = {onSubmit}>
                    <input type = "text" placeholder = "Enter Github User" className = "bg-transparent   pl-8 text-white text-xl pr-96 h-8" sytle = {{color:"#8B98C1"}} value = {user} onChange = {onChange}/>
                   {requests>0 && <button type = "submit" className = "ml-56  px-6 py-2 text-blue-700 ring-2 ring-yellow-300  font-extrabold rounded bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500  ">Search</button>} 
                </form>
            </div>
        </div>
        
    )
}

export default Search;
