import { useParams } from 'react-router-dom';
import sampleData from '../sampleData.json';

function Users() {
    const params = useParams();
    const { id } = params;
    const person = sampleData[id];

  return (
    <div>
        <p>  {`Param: ${person.id}`} </p>
        <p>My name is {person.name}</p>
    </div>
  );
}

export default Users;
