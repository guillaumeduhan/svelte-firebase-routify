<script>
  import { goto } from "@roxi/routify";
  import { random } from "lodash";
  import { addPokemonToStore } from "../components/Pokemon.svelte";
  import { getPokemonById } from "../services";
  import { Autocomplete, Button, Loading, ListItem } from "../components";
  import { user } from "../components/Auth.svelte";

  let isLoading = true;
  let list = [];
  let _user;

  user.subscribe((v) => (_user = v));

  const getRandomPokemons = async () => {
    list = new Array();
    isLoading = true;
    for (let i = 0; i < 5; i++) {
      let randomId = random(0, 806);
      await getPokemonById(randomId)
        .then((pokemon) => {
          list.push({ id: randomId, ...pokemon });
          addPokemonToStore(pokemon);
        })
        .catch((err) => console.log(err));
    }
    isLoading = false;
  };

  const goToPokemon = function (id) {
    $goto(`/pokemon/${id}`);
  };

  getRandomPokemons();
</script>

<main>
  <div class="w-full lg:w-2/4 mx-auto px-1">
    <div
      class="search mt-6 mb-12 pb-4 w-full flex flex-col items-center justify-center"
    >
      <header class="mb-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Welcome !</h1>
        <p class="text-gray-600">Search for a pokemon now</p>
      </header>
      <Autocomplete />
    </div>
    <header class="my-4 w-full flex items-center justify-center">
      <Button
        on:click={getRandomPokemons}
        title="Get Random Pokemons"
        red
        disabled={isLoading}
      />
    </header>
    {#if isLoading}
      <div class="flex w-full items-center justify-center">
        <Loading />
      </div>
    {:else if !list.length}
      <p>No result</p>
    {:else}
      {#each list as pokemon}
        <ListItem {pokemon} on:click={goToPokemon(pokemon.national_number)} />
      {/each}
    {/if}
  </div>
</main>
