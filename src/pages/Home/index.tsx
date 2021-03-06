import { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

import LoadPokemons from '../../services'
import { Pokemon, TypesColors, Abilities } from '../../types'

import { Row } from '../../components/Row/styled'
import { Card, BadgeAbilities } from '../../components/Card/styled'
import { Title } from './styled'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    LoadPokemons()
      .then(setPokemons)
      .catch((err) => console.error(err))
  }, [])

  function formatAbilities(abilities: Abilities) {
    let abilitiesText = ''
    for (let x = 0; x < abilities.length; x++) {
      let abilityName = abilities[x].ability.name
      abilityName = abilityName.replace('-', ' ')

      abilitiesText += abilityName

      if (x !== abilities.length - 1) {
        abilitiesText += ' / '
      }
    }

    return abilitiesText
  }

  return (
    <>
      <Title>Pokédex</Title>
      <Row>
        {pokemons.length > 0
          ? pokemons?.map(({ id, name, types, abilities }) => (
              <Card key={id}>
                <figure>
                  <img
                    src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    alt={name}
                  />
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
                        <BadgeAbilities
                          key={key}
                          bgColor={`${TypesColors[item.type.name]}`}
                        >
                          {item.type.name}
                        </BadgeAbilities>
                      ))}
                    </div>
                  </div>

                  <div className="box-info">
                    <h5>Abilities</h5>
                    <div className="list">
                      <p>{formatAbilities(abilities)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          : [1, 2, 3, 4, 5, 6].map((key) => (
              <Card key={key}>
                <figure>
                  <CircularProgress size={60} />
                </figure>
              </Card>
            ))}
      </Row>
    </>
  )
}

export default App
