<script>
  import { goto } from "@roxi/routify";
  import { GET_ELEMENT_BY_NAME } from "../services/firebase";
  import Loading from "./Loading.svelte";
  import ListItem from "./ListItem.svelte";

  let isLoading = false;
  let search = undefined;
  let result = [];

  const goToPokemon = function ({ national_number }) {
    $goto(`/pokemon/${national_number}`);
  };

  const searching = async () => {
    if (!search) return;
    isLoading = true;
    await GET_ELEMENT_BY_NAME(search)
      .then((val) => {
        if (val !== null) {
          result = Object.values(val);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => (isLoading = false));
  };
</script>

<main class="w-full relative">
  <input
    class="w-full border rounded-md outline-none px-2 py-1"
    bind:value={search}
    on:input={searching}
    placeholder="Search by name..."
  />
  {#if search}
    <div
      class="absolute flex flex-col items-center justify-center p-2 z-50 top-8 w-full border border-t-0 rounded-bl-md rounded-br-md bg-white shadow-md"
    >
      {#if isLoading}
        <Loading />
      {:else if result.length === 0}
        <p>No results</p>
      {:else}
        {#each result as pokemon}
          <ListItem {pokemon} on:click={goToPokemon(pokemon)} />
        {/each}
      {/if}
    </div>
  {/if}
</main>
