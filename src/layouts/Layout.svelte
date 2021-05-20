<script>
  export let templateHtml, settings;
  // import '../../assets/style.css';
  // import '../tailwind.css';
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<svelte:head>
  <!-- <link rel="stylesheet" href="/style.css" /> -->
</svelte:head>
<div class="md:container md:mx-auto">
  {@html templateHtml}
</div>
