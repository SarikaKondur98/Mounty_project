<template>
  <div>
    <v-img src="/Static/movies.jpg">
      <v-container text-xs-center>
        <v-layout>
          <v-flex xs12 sm6 md12>
            <h1 class="display-3 my-5">Welcome to Feature Film World</h1>
            <p class="py-5"> 
              This website displays the different Genres of movies having top rated movies and upcoming movies
              <br />They include all the classic movies and sorted according to their categories. Please have a look at
              <br />them by clicking on the following buttons which redirects you to the pages.
            </p>
            <br />
            <br />
            <v-btn
              outline
              color="deep-purple darken-4"
              @click.native="$router.push('/top-rated-movies')"
            >Top Rated Movies</v-btn>
            <v-btn
              outline
              color="pink darken-4"
              @click.native="$router.push('/upcoming-movies')"
            >UpComing Movies</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-family: "Nunito", sans-serif;
  padding-top: 150px;
  color: darkslateblue;
}
p {
  font-family: "Dancing Script", cursive;
  font-size: 20px;
  color: lemonchiffon;
}
</style>