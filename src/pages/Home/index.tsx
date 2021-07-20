import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import LoadPokemons from '../../services'
import { Pokemon, TypesColors } from '../../types'

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
        {pokemons.length > 0 ? pokemons?.map(({ id, name, types }) => (

          <Card key={id}>
            <figure>
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name}/>
            </figure>
            <div className="info">
              <div className="title">
                <h3>{name}</h3>
                <span className="number">{id}</span>
              </div>

              <div className="box-info">
                <h5>Type</h5>
                <div className="list">
                  {types.map((item, key) => (
                    <span 
                      key={key} 
                      color={TypesColors[item.type.name]}
                      >
                        {item.type.name}
                      </span> 
                  ))}
                  </div>
              </div>

              <div className="box-info">
                <h5>Abilities</h5>
                <div className="list">
                  <p>Inner force</p>
                </div>
              </div>

            </div>
          </Card>

        )) : [1,2,3,4,5,6].map(key => (
          <Card key={key}>
            <figure>
              <CircularProgress size={60}/>
            </figure>
          </Card>
        ))}

      </Row>
    </>
  );
}

export default App;