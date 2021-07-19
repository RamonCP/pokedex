import { useState, useEffect } from 'react';

import LoadPokemons from '../../services'
import { Pokemon } from '../../types'

import { Row } from '../../components/Row/styled'
import { Card } from '../../components/Card/styled'
import { Title } from './styled'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    LoadPokemons()
      .then(setPokemons)
      .catch(err => console.error(err))

  }, [])

  return (
    <>
      <Title>Pokédex</Title>
      <Row>
        {pokemons?.map(({ id, name }) => (

          <Card key={id}>
            <figure>
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name}/>
            </figure>
            <div className="info">
              <span className="number">Nº {id}</span>
              <h5>{name}</h5>
            </div>
          </Card>

        ))}
      </Row>
    </>
  );
}

export default App;