<template>
    <em class="linethrough block not-italic text-purple-100">
        <span>
            <slot></slot>
        </span>
    </em>
</template>

<style>
em {
  position: relative;
  margin: 1rem 0;
  text-align: center;
}

.linethrough {
  background: linear-gradient(#44337a 0%, #44337a 49%, #211644 50%, #211644 51%, #44337a 52%, #44337a 100%);
}

.linethrough span {
  background: #44337a;
  padding: 0 1rem;
  position: relative;
  z-index: 5;
}
</style>
