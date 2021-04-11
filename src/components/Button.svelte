<script>
  export let title;
  export let red = false;
  export let white = false;
  export let disabled = false;
</script>

<button
  on:click
  class="btn"
  class:btn-red={red}
  class:btn-white={white}
  class:disabled>{title}</button
>

<style>
  .btn {
    @apply px-4 py-2 border rounded-lg outline-none;
  }
  .btn-red {
    @apply text-white bg-red-500 border-red-500;
  }
  .btn-white {
    @apply text-white border-white;
  }
  .disabled {
    @apply opacity-50 pointer-events-none;
  }
</style>
