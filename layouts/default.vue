<template>
    <Nuxt />
</template>

<script>
export default {
}
</script>

<style>
html, body {
  @apply h-full;
}
#__nuxt, #__layout {
  @apply h-full;
}
body {
  @apply font-sans bg-purple-700;
}
.input-label {
  max-height:52px;
  height: 52px;
}
.fade-enter-active, .fade-leave-active { transition: opacity .3s; }
.fade-enter, .fade-leave-active { opacity: 0; }
  input::placeholder {
      @apply text-purple-700;
  }
  button[disabled=disabled], 
  button:disabled {
      @apply bg-blue-300;
  }
</style>
