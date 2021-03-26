<template>
  <div class="min-h-screen bg-bumble-100">
    <div class="container mx-auto p-20 px-6 font-mono text-3xl text-dark-bumble">
      <square-card
        title="Hello my name is Huy Phung. I am a stupid Developer."
      />
    </div>
  </div>
</template>

<script>
import SquareCard from './SquareCard.vue';

export default {
  name: 'App',
  components: {
    SquareCard,
  },
  props: {
    msg: {
      type: String,
      default: 'Hello World'
    }
  },
}
</script>
