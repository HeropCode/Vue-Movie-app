<template>
  <v-app>
    <v-container class="pt-10">
      <search-bar />
      <error-message />
      <movie-list />
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import ErrorMessage from '@/components/ErrorMessage'
import MovieList from '@/components/MovieList'

export default {
  name: 'App',
  components: {
    SearchBar,
    ErrorMessage,
    MovieList
  }
};
</script>
