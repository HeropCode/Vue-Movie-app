<template>
  <v-app>
    <v-container class="pt-10">
      <search-bar />
      <movie-list />
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'

export default {
  name: 'App',
  components: {
    SearchBar,
    MovieList
  }
};
</script>
