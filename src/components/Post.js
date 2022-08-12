import { Link } from 'react-router-dom';
const Post = ({id, name, goal, creatorName,description}) => {
    return (
        <tr>
        <td><Link to={`/myroutines/${id}`} >{name}</Link></td>
        <td>{goal}</td>
        <td>{creatorName}</td>
        <td>{description}</td>
        
         </tr> 
    )
}

export default Post;
