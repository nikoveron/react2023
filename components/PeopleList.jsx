import React from 'react';

function PeopleList({ people }) {
  return (
    <>
      {people.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </>
  );
}

export default PeopleList;
