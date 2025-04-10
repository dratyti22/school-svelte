import './styles/tailwind.css';
import App from './App.svelte';

// Создание экземпляра Svelte-приложения
const app = new App({
  target: document.getElementById('app') // Указываем, куда рендерить приложение
});

export default app;
