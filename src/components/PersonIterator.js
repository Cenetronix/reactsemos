const persons = [
    {
        maticen:123,
        ime:"Stavre",
        godini: 30
    },

    {
        maticen:1234,
        ime:"Mavre",
        godini: 40
    },

    {
        maticen:12345,
        ime:"Ovoj",
        godini: 50
    },

    {
        maticen:1234567,
        ime:"Onoj",
        godini: 60
    },

]

const PersonIterator = () => {
    return persons.map (person => {
        return <li key={person.maticen}>{person.ime} : {person.godini}</li>
    })
}

export default PersonIterator