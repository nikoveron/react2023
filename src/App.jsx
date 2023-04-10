/* 

import React, { useState, useEffect } from 'react';
import PeopleList from '../components/PeopleList';

function App() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    setPeople(data.results);
  };

  

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div>
      <h1>Lista de personajes de Star Wars</h1>
      
       <PeopleList people={people} />  
    </div>
  );
}

export default App;
 */

import React, { useState} from 'react';
import PeopleList from '../components/PeopleList';

function App() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    setPeople(data.results);
  };

  const toggleList = () => {
    if (people.length === 0) {
      fetchPeople();
    } else {
      setPeople([]);
    }
  };

  return (
    <div>
      <h1>Lista de personajes de Star Wars</h1>
      <button onClick={toggleList}>
        {people.length === 0 ? 'Mostrar lista' : 'Ocultar lista'}
      </button>
      {people.length > 0 && <PeopleList people={people} />}
    </div>
  );
}

export default App;
