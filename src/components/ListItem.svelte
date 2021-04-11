<script>
  import { user } from "./Auth.svelte";
  import { userStore } from "../store";
  import { setPokemonAsFavorite } from "../services";
  import Label from "./Label.svelte";
  import Loading from "./Loading.svelte";
  import Star from "../../assets/images/svg/star.svg";

  export let pokemon;
  let isLoading = false;
  let _user;
  let favorites = [];

  user.subscribe((v) => (_user = v));
  userStore.subscribe((s) => {
    favorites = s.favorites;
  });

  const setNewFavorite = async () => {
    await setPokemonAsFavorite(pokemon.national_number, _user.id)
      .then((data) => {
        userStore.set("favorites", data);
      })
      .catch((err) => console.log(err));
  };
</script>

<div
  class="list-item cursor-pointer p-4 pb-2 border rounded-lg my-2 flex grid grid-flow-row grid-cols-12 gap-2"
>
  <div class="col-span-3 flex-grow" on:click>
    <img src={pokemon.sprites.normal} alt={pokemon.name} class="w-24 h-24" />
  </div>
  <div class="col-span-7" on:click>
    <p class="text-xs text-gray-500">{pokemon.national_number}</p>
    <p class="text-lg font-bold my-1">{pokemon.name}</p>
    <div class="list-item-type flex">
      {#each pokemon.type as type}
        <Label {type} />
      {/each}
    </div>
  </div>
  <div class="col-span-2 flex items-start justify-end">
    {#if _user}
      {#if !isLoading}
        {#if favorites && favorites.length > 0}
          <div on:click={setNewFavorite}>
            <Star
              color={favorites.includes(pokemon.national_number)
                ? "gold"
                : "gray"}
            />
          </div>
        {/if}
      {:else}
        <Loading />
      {/if}
    {/if}
  </div>
</div>
