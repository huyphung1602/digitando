<template>
  <h1>{{msg}}</h1>
</template>

<script>


export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello World'
    }
  },
}
</script>
