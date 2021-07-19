export interface PokemonsList {
    count: number,
    next?: string,
    previous?: string,
    results: Array<{
      name: string,
      url: string
    }>
  }
  
export interface Pokemon {
    id: number,
    name: string
}