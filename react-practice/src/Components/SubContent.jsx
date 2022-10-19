import sampleData from '../sampleData.json'
import Person from './Person'

const SubContent = () => {
    return (
        <div>
            {sampleData.map((person)=>(
                <Person key={person.id} name={person.name} city={person.address.city}/>
            ))}
        </div>
    )
}
export default SubContent;