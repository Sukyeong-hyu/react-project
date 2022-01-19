import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Character from './Character.js';

export default function Characters() {
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return response.json();
  };

  // useQuery
  // data: data that is returned from the function
  // status: check loading, error, or success
  const { status, data } = useQuery('characters', fetchCharacters); // (name, function that returns data)

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error!</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} />
      ))}
    </div>
  );
}
