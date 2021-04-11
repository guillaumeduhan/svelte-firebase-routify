<script>
  import { params } from "@roxi/routify/runtime/helpers";
  import { userStore } from "../../store";
  import { fetchPokemon } from "../../components/Pokemon.svelte";
  import { Button, Label, Loading } from "../../components";

  let pokemon;
  let favorites = [];

  userStore.subscribe((s) => {
    favorites = s.favorites;
  });

  if (!pokemon) {
    fetchPokemon($params.id)
      .then((p) => (pokemon = p))
      .catch((err) => console.log(err));
  }
</script>

<main>
  <div class="my-16">
    {#if pokemon}
      {#if pokemon.sprites}
        <div class="flex items-center justify-center mb-8">
          <img src={pokemon.sprites.large} alt={pokemon.name} />
        </div>
      {/if}
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-medium mb-2">{pokemon.name}</h1>
        <p class="text-gray-500">Number {pokemon.national_number}</p>
        {#if pokemon && pokemon.type}
          <div class="flex my-2">
            {#each pokemon.type as type}
              <Label {type} />
            {/each}
          </div>
        {/if}
        {#if favorites.length > 0 && !favorites.includes(pokemon.national_number)}
          <Button title="Add as favorite" />
        {:else}
          <Button title="Remove favorite" red />
        {/if}
      </div>
    {:else}
      <Loading />
    {/if}
  </div>
</main>
