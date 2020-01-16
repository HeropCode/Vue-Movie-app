<template>
  <v-row
    v-masonry
    item-selector=".item">
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      v-masonry-tile
      class="item"
      cols="12"
      lg="3"
      md="3"
      sm="6">
      <v-card>
        <v-img
          :src="movie.Poster"
          :alt="movie.Title"
          :height="movie.Poster === 'N/A' ? 100 : 305">
          <template v-slot:placeholder>
            <div style="background: lightgray; height: 100%;"></div>
          </template>
        </v-img>
        <v-card-title>
          {{ movie.Title }}
        </v-card-title>
        <v-card-subtitle>
          {{ movie.Year }}
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Movies',
  computed: {
    movies () {
      return this.$store.state.movie.movies
    }
  }
}
</script>
