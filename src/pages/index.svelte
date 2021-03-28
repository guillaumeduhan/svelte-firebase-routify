<script>
  import { initAuth } from "../auth";

  const { loginWithGoogle, logout, user } = initAuth();

  let _user;
  user.subscribe((v) => (_user = v));
</script>

<main>
  {#if _user}
    <button type="button" on:click|preventDefault={logout}> Logout </button>
  {:else}
    <button type="button" on:click|preventDefault={loginWithGoogle}>
      Sign In with Google
    </button>
  {/if}
</main>
