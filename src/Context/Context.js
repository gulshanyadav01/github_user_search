import React,{ useState, useEffect } from 'react'
import User from "./mockData/mockUser"
import Repos from "./mockData/mockRepos"
import Followers from "./mockData/mockFollowers"
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext()

// Provider and consumer from GithubContext.Provider 

const GithubProvider = ({children}) =>{
    const [githubuser, setGithubUser] = useState(User);
    const [repos, setRepos] = useState(Repos);
    const [followers, setFollowers] = useState(Followers)
    
    //request loading 
    const [requests, setRequests]  = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const searchGithubUser = async(user) =>{
        toggleError();
        setIsLoading(true)
        const response = await axios.get(`${rootUrl}/users/${user}`).catch(err =>{
            console.log(err);
        })
        if(response){
            setGithubUser(response.data);
            const {login, followers_url} = response.data;
            // repos
            axios.get(`${rootUrl}/users/${login}/repos?per_page = 100`).
            then(response =>{
                setRepos(response.data);
            })
            // followers 
            axios.get(`${followers_url}?per_page=100`).
            then(response =>{
                // console.log(response)
                setFollowers(response.data)
            })
        }
        else{
            toggleError(true,"There is no user with this username");
        }
        checkRequest();
        setIsLoading(false);
    }

    // error 

    const [error, setError] = useState({show: false, msg:""});

    // check the rate limit 
    const checkRequest = () =>{
        axios.get(`${rootUrl}/rate_limit`).then(({data}) =>{
            let {rate:{remaining}, 
        } = data;
         setRequests(remaining)
        

        if(remaining === 0 ){
            
            toggleError(true, "sorry, you have succeeded hourly rate limit");

        }


        }).catch((err) =>{
            console.log(err);
        })
    }

    // setting up the error

    const toggleError = (show = false, msg = '') => {
        setError({show, msg})
    }

    useEffect(
        checkRequest,
    []);

    return(
        <GithubContext.Provider value = {{githubuser, repos, followers, requests, error,searchGithubUser, isLoading }}>
            {children}
        </GithubContext.Provider>
    )
}

export  {GithubContext, GithubProvider}; 
