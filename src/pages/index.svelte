<script>
 import { url } from "@roxi/routify";
 import { Nav } from "../components";
</script>

<main>
 <Nav />
 <a href={$url("./profile")}>go to profile</a>
</main>
