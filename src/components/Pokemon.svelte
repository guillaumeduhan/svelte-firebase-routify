<script context="module">
  import { pokemonStore } from "../store";
  import { GET_ELEMENT_BY_ID } from "../services/firebase";

  export const addPokemonToStore = (_pokemon) => {
    pokemonStore.set(_pokemon.national_number, _pokemon);
  };

  export const fetchPokemon = (id) => {
    return new Promise(async (resolve, reject) => {
      await GET_ELEMENT_BY_ID(id)
        .then((_pokemon) => {
          let p = Object.values(_pokemon)[0];
          addPokemonToStore(p);
          resolve(p);
        })
        .catch((err) => reject(err));
    });
  };
</script>
