<template>
  <div class="container mx-auto px-6 bg-bumble">
    <div class="grid grid-cols-3 gap-6">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  </div>
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
