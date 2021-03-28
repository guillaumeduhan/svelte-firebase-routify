<script>
  import { initAuth } from "../auth";

  const { loginWithGoogle, logout, user } = initAuth();

  let _user;
  user.subscribe((v) => (_user = v));
</script>

<main>
  <p>navigation bar</p>
  {#if _user}
    <p>connecté</p>
    <button type="button" on:click|preventDefault={logout}> Logout </button>
  {:else}
    <p>non connecté</p>
    <button type="button" on:click|preventDefault={loginWithGoogle}>
      Sign In with Google
    </button>
  {/if}
</main>
