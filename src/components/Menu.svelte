<script>
  import { createEventDispatcher } from "svelte";
  import { url } from "@roxi/routify";

  import { clickOutside } from "../services/clickOutside";

  const dispatch = createEventDispatcher();

  export let user;
  let isOpen = false;
  let menuOptions = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/profile",
      title: "My profile",
    },
  ];

  function handleClickOutside(event) {
    isOpen = false;
  }

  function openMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="relative cursor-pointer">
  <div class="flex items-center justify-center" on:click={openMenu}>
    <p class="mr-2">{user.name}</p>
    <div class="w-8 h-8 rounded-full overflow-hidden">
      <img src={user.picture} alt="user thumb" class="w-8 h-8" />
    </div>
  </div>
  {#if isOpen}
    <div
      class="flex flex-col text-right absolute border top-16 right-0 bg-white z-50 rounded-lg p-4 text-black pl-32"
      use:clickOutside
      on:click_outside={handleClickOutside}
    >
      {#each menuOptions as option, i}
        <a href={$url(option.path)} key={i}>
          {option.title}
        </a>
      {/each}
      <p class="text-red-500" on:click={() => dispatch("confirmLogout")}>
        Logout
      </p>
    </div>
  {/if}
</div>
