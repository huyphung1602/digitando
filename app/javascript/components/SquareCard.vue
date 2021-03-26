<template>
  <div class="container shadow-xl p-10 h-60 w-60 rounded-md bg-gradient-to-r from-bumble-200 to-bumble-100">
    <p class="line-clamp-4 font-mono text-center text-2xl text-dark-bumble">
      {{ title }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'SquareCard',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}

</script>
