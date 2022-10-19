import { useParams } from 'react-router-dom';
import sampleData from '../sampleData.json';

function Users() {
    const person = useParams();
    const thisUser = sampleData.id.map(person.id)
  return (
    <div>
        <p>  {`Param: ${person.id}`} </p>
        <p> Hello, {person.name} from {person.address.city}! </p>
    </div>
  );
}

export default Users;
