<script>
  import { onMount } from 'svelte';

  let menuOpen = false; // Для управления состоянием меню
</script>

<nav class="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
  <div class="text-xl font-bold text-blue-600">Web Rendering</div>

  <!-- Для больших экранов (md и выше) -->
  <div class="hidden md:flex space-x-4">
    <a href="/" class="hover:text-blue-600 transition-colors">Главная</a>
    <a href="/what-is-rendering" class="hover:text-blue-600 transition-colors">Что такое рендеринг?</a>
    <a href="/rendering-stages" class="hover:text-blue-600 transition-colors">Этапы</a>
    <a href="/problems" class="hover:text-blue-600 transition-colors">Проблемы</a>
    <a href="/practice" class="hover:text-blue-600 transition-colors">Практика</a>
    <a href="/contact" class="hover:text-blue-600 transition-colors">Контакты</a>
  </div>

  <!-- Кнопка меню для мобильных устройств -->
  <button
    class="md:hidden"
on:click={() => (menuOpen = !menuOpen)}
    aria-label="Открыть меню"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>
</nav>

<!-- Мобильное меню, которое открывается при клике на кнопку -->
{#if menuOpen}
  <div class="md:hidden flex flex-col space-y-4 py-4 px-6 bg-white shadow-md">
    <a href="/" class="hover:text-blue-600 transition-colors">Главная</a>
    <a href="/what-is-rendering" class="hover:text-blue-600 transition-colors">Что такое рендеринг?</a>
    <a href="/rendering-stages" class="hover:text-blue-600 transition-colors">Этапы</a>
    <a href="/problems" class="hover:text-blue-600 transition-colors">Проблемы</a>
    <a href="/practice" class="hover:text-blue-600 transition-colors">Практика</a>
    <a href="/contact" class="hover:text-blue-600 transition-colors">Контакты</a>
  </div>
{/if}
