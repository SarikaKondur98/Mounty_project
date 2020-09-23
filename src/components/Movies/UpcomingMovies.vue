<template>
  <div>
    <v-img src="/Static/ucmovies.jpg">
      <v-container text-xs-center>
        <v-layout>
          <v-flex xs12 sm6 md12>
            <h1 class="display-2">UpComing Movies</h1>
            <br />
            <br />
            <br />
            <div class="film">
              <v-layout row wrap>
                <v-flex xs7 md2 class="pink--text font-weight-black">Title</v-flex>
                <v-flex xs4 md2 class="deep-purple--text font-weight-black">Popularity</v-flex>
                <v-flex xs4 md2 class="pink--text font-weight-black">Vote count</v-flex>
                <v-flex xs7 md3 class="deep-purple--text font-weight-black">Release Date</v-flex>
                <v-flex xs7 md3 class="light-green--text font-weight-black">Overview</v-flex>
              </v-layout>
            </div>
            <div class="cinema">
              <v-flex class="pa-3 my-3" v-for="movie in ucMovies" :key="movie.title">
                <v-layout row wrap>
                  <v-flex xs7 md2>{{movie.title}}</v-flex>
                  <v-flex xs4 md2>{{movie.popular}}</v-flex>
                  <v-flex xs4 md2>{{movie.votecount}}</v-flex>
                  <v-flex xs7 md3>{{movie.releasedate}}</v-flex>
                  <v-flex xs7 md3>{{movie.over}}</v-flex>
                </v-layout>
              </v-flex>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getUpComingMovies");
  },
  computed: {
    ...mapState(["ucMovies"]),
  },
};
</script>

<style scoped>
h1 {
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  padding-top: 75px;
  color: antiquewhite;
}
.cinema {
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  color: antiquewhite;
}
.film {
  font-family: "Ranchers", cursive;
  font-weight: bold;
}
</style>