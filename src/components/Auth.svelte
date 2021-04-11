<script context="module">
  import { initAuth } from "../auth";
  import { userStore } from "../store";
  import { GET_USER_DOCUMENT } from "../services/firebase";
  export const { loginWithGoogle, user, logout } = initAuth();
  user.subscribe((v) => {
    if (v) {
      GET_USER_DOCUMENT(v.id)
        .then((data) => {
          if (data) {
            userStore.set("favorites", data.favorites);
          }
        })
        .catch((err) => console.log(err));
    }
  });
</script>
