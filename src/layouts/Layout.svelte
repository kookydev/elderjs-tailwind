<script>
  export let templateHtml, settings;
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  h1,
h2,
h3,
h4 {
  @apply font-serif font-bold leading-9;
}

h1 {
  @apply text-4xl leading-10 my-6;
}

h2 {
  @apply text-xl leading-10 my-6;
}

h3 {
  @apply text-lg leading-10 my-6;
}

p {
  @apply text-base leading-6 my-6;
}

a {
  @apply text-red-500 underline;
}

.code,
code {
  @apply px-1 text-sm bg-gray-300 rounded-lg mr-2 my-1 font-mono inline-block;
}

body {
  @apply antialiased text-base text-gray-900 border-gray-800 border-t-8 pt-8 font-sans bg-gray-100;
}



  @tailwind utilities;
</style>

<svelte:head>
  <!-- <link rel="stylesheet" href="/style.css" /> -->
</svelte:head>
<div class="md:container md:mx-auto">
  {@html templateHtml}
</div>
