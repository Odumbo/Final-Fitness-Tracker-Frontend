import {useState, useEffect} from 'react';
import ColumnHeaders from "../components/ColumnHeaders";
import Post from '../components/Post';


const Routines = () => {
     const [routines, setRoutines] = useState ([])

    useEffect (() => {
        async function getRoutines (){
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
            const routines = await response.json();
            console.log(routines);
            setRoutines(routines);
        }
        getRoutines();
    },[])
    return (
    <main>
    <h2>Routines</h2>
    <table>
        <tr>
        <ColumnHeaders />
        </tr>
        <tr>
     <td>Play Roulette</td>
     <td>Throw</td>
     <td>Derek Miler</td>
     </tr>
     {routines.map(({id,  name,  goal, creatorName,})=>(
         <Post key={id} id={id} name={name}  goal={goal} creatorName={creatorName} />
     ))}
    </table>
    </main>
    )
}

export default Routines;

