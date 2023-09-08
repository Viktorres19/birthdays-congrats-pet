const Person = ({id, image, name, age, cheerPerson }) => {
    return (
        <div className="person">
            <img src={image} alt={name} style={{borderRadius: '50%', width: '50px', height: '50px', objectFit: 'cover' }} />
            <div>
                <h3>{name}</h3>
                <h4>{age}</h4>
            </div>
            <button onClick={() => cheerPerson(id)} className="btn btn-blue">Cheer person</button>
        </div>
    )
}

export default Person