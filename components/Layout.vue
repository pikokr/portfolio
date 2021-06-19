<template>
  <div>
    LAYOUT
    <div>
      <slot>
        <Nuxt />
      </slot>
      <div id="transition_cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>
