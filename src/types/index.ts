export type PokemonsList = {
    count: number,
    next?: string,
    previous?: string,
    results: Array<{
      name: string,
      url: string
    }>
  }
  
export type Pokemon = {
    id: number,
    name: string,
    abilities: Abilities,
    types: Array<{
      slot: number,
      type: {
        name: string
      }
    }>
}

export type Abilities = Array<{
  ability: {
    name: string
  }
}>

interface Object {
  [idx: string]: string;
}

export const TypesColors: Object =  {
  "normal"    : "#a4acaf",
  "fighting"  : "#d56723",
  "flying"    : "#3dc7ef",        // /#bebab9
  "poison"    : "#b97fc9",
  "ground"    : "#f7de3f",        // /#ab9842
  "rock"      : "#a38c21",
  "bug"       : "#729f3f",
  "ghost"     : "#7b62a3",
  "steel"     : "#9eb7b8",
  "fire"      : "#fd7d24",
  "water"     : "#4592c4",
  "grass"     : "#9bcc50",
  "electric"  : "#efd636",
  "psychic"   : "#f366b9",
  "ice"       : "#51c4e7",
  "dragon"    : "#f16e57",        // /#53a4cf
  "dark"      : "#707070",
  "fairy"     : "#fdb9e9"
}
