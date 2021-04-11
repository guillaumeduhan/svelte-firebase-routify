import { GET_ELEMENT_FROM_DB, SET_FAVORITE_TO_USER } from "./firebase";

export function getPokemonById(id) {
  return new Promise(async (resolve, reject) => {
    await GET_ELEMENT_FROM_DB(id)
      .then((pokemon) => {
        if (pokemon) {
          resolve(pokemon)
        } else {
          resolve('No pokemon found')
        }
      })
      .catch((err) => {
        reject(err)
      });
  });
};

export function setPokemonAsFavorite(pokemonNationalNumber, userId) {
  return new Promise(async (resolve, reject) => {
    await SET_FAVORITE_TO_USER(pokemonNationalNumber, userId)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => reject(err));
  });

}