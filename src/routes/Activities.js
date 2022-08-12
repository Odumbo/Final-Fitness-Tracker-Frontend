import { useEffect, useState } from "react";
// import NoMatchPage from "../NoMatchPage";
// import ColumnHeaders from "../components/ColumnHeaders";
import Post from '../components/Post';

    const Activities = () => {
    const [activities, setActivities] = useState ([])

    useEffect(() => {
    async function getActivities (){
        const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities')
           const activities = await response.json();
                   console.log(activities);
                   setActivities(activities);
               }
               getActivities();
    },[])
    return (
    <main>
    <h2>Activities</h2>
    <table>
    <tr>
    <th className="name">Name</th> 
    <th className="des">Description</th>   
     </tr> 
     {activities.map(({id,  name,  description, })=>(
         <Post key={id} id={id} name={name}  description={description}  />
     ))}
     </table>
    </main>
    )
}

export default Activities;

