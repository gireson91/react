const Person = (props => {
    return(
        <table>
            <tr>
                <td>This is {props.name}, they are from {props.city}</td>
            </tr>
        </table>
    )
})

export default Person;