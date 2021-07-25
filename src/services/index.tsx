import { PokemonsList, Pokemon } from '../types'

export default async function LoadPokemons() {
    
    const pokemonsList = await fetchPokemonsList('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemons = await loopInAllPokemons(pokemonsList)

    async function fetchPokemonsList(url: string) {
        try {
          const response = await fetch(url)
          const data = response.json()
          return data
        } catch(err) {
          console.error(err);
        }
    }

    async function loopInAllPokemons(pokemonsList: PokemonsList) {
        const results = pokemonsList.results
        const allPokemons: Pokemon[] = []

        for (const { url } of results) {
            const pokemon = await fetchPokemonsList(url)
            allPokemons.push(pokemon)
        }

        return allPokemons
    }

    console.log(pokemons)

    return pokemons
}