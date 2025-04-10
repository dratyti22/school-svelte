<script>
  let text = 'Click';
  let onClick = () => {};
  let variant = 'primary'; // 'primary' | 'secondary'
</script>

<button
  class={`px-4 py-2 rounded-2xl transition-colors font-medium
          ${variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
          ${variant === 'secondary' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : ''}
        `}
  on:click={onClick}
>
  {text}
</button>
