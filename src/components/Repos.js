import React from 'react'
import Pie from "./Charts/pie"
import Column from "./Charts/Column"
import {GithubContext} from "../Context/Context"; 
import Doughnut from "./Charts/Doughnut" 
import Bar from "./Charts/Bar";


const  Repos  = () =>  {
    const {repos } = React.useContext(GithubContext); 
 const  languages = repos.reduce((total, item) =>{
     const {language, stargazers_count } = item;
     if(!language) return total;
     if(!total[language]){
         total[language] = {
             label: language, value:1,
             stars: stargazers_count
         }; 
     }else{
        total[language] = {...total[language], value:total[language].value + 1,
        stars: total[language].stars + stargazers_count,
    };
     }
     return total;
     
 },{});
 
 const mostUsed  = Object.values(languages).sort((a, b) =>{
     return b.value - a.value
 }).slice(0,5)

 // most start per lange 
 

 const mostPopular = Object.values(languages).sort((a,b) =>{
     return b.stars - a.stars;
 }).map((item) =>{
     return {...item, value:item.stars}
 }); 


 // stars, forks 

 let {stars, forks } = repos.reduce((total, item) =>{
    const {stargazers_count, name , forks} = item;
    total.stars[stargazers_count] = {label:name, value: stargazers_count};
    total.forks[forks] = {label:name, value:forks}
    return total;
 },
 {
    stars:{},
    forks:{},
 });

 stars = Object.values(stars).slice(-5).reverse();
 forks = Object.values(forks).slice(-5).reverse();


//  const chartData = [
//     {
//         label:"HTML",
//         value:"13",
//     },
//     {
//         label:"CSS",
//         value:"190",
//     },
//     {
//         label:"JAVASCRIPT",
//         value:"800"
//     }
// ];

    return (
        <div>
            <div className = "flex">
                <div className = "w-2/5  hover:bg-blue-100  mt-4 bg-blue-200 rounded">
                {/* for the first chart */}
                    <Pie data = {mostUsed}/>
                </div>
                <div className = "w-3/5 mt-4   ml-3 rounded">
                    <Column data = {stars}/>
                </div>
            </div>
      s      <div className = "flex ">
            <div className = "w-2/5  mt-4  bg-blue-200 rounded">
            {/* for the first chart */}
                <Doughnut data = {mostPopular}/>
            </div>
            <div className = "w-3/5  mt-4   bg-blue-200 ml-3 rounded">
                <Bar data = {forks}/>
                {/* // pending something chart  */}
            </div>
        </div>
        </div>
    )
}

export default Repos;
