<script>
  export let type;
  export const colors = {
    Bug: "bg-indigo-300",
    Dark: "bg-gray-500",
    Dragon: "bg-blue-200",
    Electric: "bg-yellow-300",
    Fighting: "bg-pink-500",
    Fire: "bg-red-500",
    Flying: "bg-indigo-400",
    Fairy: "bg-pink-200",
    Grass: "bg-green-500",
    Ghost: "bg-indigo-500",
    Ground: "bg-indigo-700",
    Ice: "bg-blue-200",
    Normal: "bg-gray-200",
    Poison: "bg-purple-500",
    Psychic: "bg-purple-900",
    Rock: "bg-gray-900",
    Steel: "bg-gray-600",
    Water: "bg-blue-500",
  };
</script>

<p
  class="label text-sm text-white rounded-full px-2 py-1 mr-1 mb-1 {colors[
    type
  ]}"
>
  {type}
</p>
