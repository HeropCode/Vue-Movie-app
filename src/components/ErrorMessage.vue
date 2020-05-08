<template>
  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  computed: {
    errorMessage () {
      const error = this.$store.state.movie.error
      if (error) {
        return error.message
      }
      return ''
    }
  }
}
</script>
