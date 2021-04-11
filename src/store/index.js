import { writable } from 'svelte/store';

function createMapStore(initial) {
  const store = writable(initial)
  const set = (key, value) => store.update(s => Object.assign({}, s, { [key]: value }))

  return {
    subscribe: store.subscribe,
    set
  };
}

export const pokemonStore = createMapStore({});

export const userStore = createMapStore({});