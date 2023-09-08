import Person from './Person'
const List = ({people, cheerPerson}) => {
    return (
        <section>
            {people.map((person) => {
                return <Person key={person.id} {...person} cheerPerson={cheerPerson} />
            })}
        </section>
    )
}

export default List