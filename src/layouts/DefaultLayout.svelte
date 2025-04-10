<script>
  import NavBar from '../components/NavBar.svelte';
</script>

<div class="min-h-screen flex flex-col bg-gray-50">
  <NavBar />
  <main class="flex-1">
    <slot />
  </main>
  <footer class="text-center text-sm py-4 text-gray-500 bg-white shadow-inner">
    © 2025 Web Rendering Guide
  </footer>
</div>
