import React,{ useState } from "react";


function MyRoutines ({token}) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [creatorname, creatorName] = useState('');
  const [creatorid, creatorId] = useState('');
  const [ispublic, isPublic] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('name:', name);
    console.log('goal:', goal);
    console.log('creatorname:', creatorname);
    console.log('creatorid:', creatorid);
    console.log('ispublic:', ispublic);

    console.log(token);
    const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/routines', {
      method: "POST",
      headers:{
        'Content-type':'Application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        headers:{
        name,
        goal,
        creatorName,
        creatorId,
        isPublic,
        }
        
      })
    });
    const data = await response.json();
    console.log ('data:', data);

}
return (
 
      
    <form onSubmit={handleSubmit}>
    <h2>Add Routine</h2>
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="title"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
        <label htmlFor="name">Goal</label>
        <input
          id="goal"
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">creatorName</label>
        <input
          id="creatorname"
          type="text"
          value={creatorname}
          onChange={(e) => creatorName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

}
     
 


  export default MyRoutines;











// const MyRoutines = ({token}) => {
//     let navigate = useNavigate();
//     useEffect(() => {
//     fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ${token}'
//     },
//   }).then(response => response.json())
//     .then(result => {
//       console.log(result);
//       if (!result.success){
//           navigate ("../home",  {replace: true})
//       }
//     })
//     .catch(console.error);
// }, [])
// return (
 
//     <main>
//   <h2>Name</h2>
   
//     </main>
//     )
// }

