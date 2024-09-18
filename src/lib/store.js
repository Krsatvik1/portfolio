import { writable } from 'svelte/store';

const initialState = 'work';

function createNavStore() {
  const { subscribe, set, get } = writable(initialState);

  return {
    subscribe,
    set,
    get,
    update(value) {
      set(value);
    },
    reset() {
      set(initialState);
    }
  };
}

export const navState = createNavStore();

