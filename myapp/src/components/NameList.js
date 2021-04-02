import React from 'react'
import Person from './Person'

function NameList({person}) {
    const names = ['Sylvia', 'Monica', 'Emma', 'Sylvia']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Sylvia',
    //         age: 25,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Monica',
    //         age: 28,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Emma',
    //         age: 32,
    //         skill: 'Vue'
    //     }
    // ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{nameList}</div>
}

export default NameList
