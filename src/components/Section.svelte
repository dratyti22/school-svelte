<script>
  let title = '';
  let subtitle = '';
</script>

<section class="py-12 px-4 md:px-16 bg-white">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
    {#if subtitle}
      <p class="text-lg text-gray-600 mb-6">{subtitle}</p>
    {/if}
    <slot />
  </div>
</section>
