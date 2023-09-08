const url = 'https://birthdays-congrats-pet.onrender.com/people'
import { useState, useEffect } from 'react'
// import data from './data'
import List from './List'

const App = () => {
  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    try {
      const response = await fetch(url)
      const people = await response.json()
      setPeople(people)
    } catch (error) {
      console.log(error)
    } finally {
      // setIsLoading(false)
      console.log('It`s all right!')
    }
  }

  useEffect(() =>{
    fetchPeople()
  },[])

  const cheerPerson = (id) => {
    const newPeople = people.filter(person => person.id !== id)
    setPeople(newPeople)
  }

  if (people.length === 0) {
    return (
    <main>
      <div className="title">
        <h2>no birthday people left</h2>
        <button
          type='button'
          style={{marginTop:'2rem'}}
          className='btn btn-green'
          onClick={() => fetchPeople()}
        >
          Bring them all back
        </button>
      </div>
    </main>
    )
  } else {
    return (
      <main>
        <section className="container">
          <h3>It remains to congratulate <b>{people.length}</b> birthday people today</h3>
          <List people={people} cheerPerson={cheerPerson} />
          <button onClick={() => setPeople([])} className='btn btn-red'>clear all</button>
        </section>
      </main>
    )
  }

}

export default App
