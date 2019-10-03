<template>
  <section>
    <Navbar />
    <v-container>
        <v-layout md12>
            <v-text-field
                v-model="search"
                append-icon="mdi-search"
                placeholder="Buscar"
                single-line
            />
        </v-layout>
        <v-layout
        v-if="countriesFilter && countriesFilter.length"
        wrap
        md12>
            <v-flex
                v-for="(country, index) in countriesFilter" :key="index" class="mb-5" min-width="300px"
                :search="search"
                md3
                sm4
                xs12
                px-2>
                <v-card >
                <v-img
                    class="white--text"
                    height="180px"
                    v-bind:src="country.flag"
                >
                <v-card-title>{{ country.name }}
                </v-card-title>
                </v-img>
                <v-card-text>
                    <div class="subtitle-1">Continente: {{ country.region }}</div>
                    <div class="subtitle-1">Capital: {{ country.capital }}</div>
                    <div class="subtitle-1">Población: {{ populationFormat(country.population) }}</div>
                </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
  </section>
</template>

<script>
import axios from 'axios'
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      countries: [],
      search: ''
    }
  },
  created () {
    this.getCountries()
  },
  computed: {
    countriesFilter () {
      return this.countries.filter(e => {
        return e.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    }
  },
  watch: {
      search (nuevoValor, valorAntiguo) {
          console.log("Valor Antiguo: "+valorAntiguo+ " - Nuevo Valor: "+nuevoValor)
      }
  },
  methods: {
    getCountries () {
      axios.get('https://restcountries.eu/rest/v2/all').then(response => {
        this.countries = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    populationFormat (population) {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>
