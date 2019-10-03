<template>
  <section>
    <Navbar />
    <v-layout wrap mt-6 justify-center>
      <v-flex sm4>
        <v-card class="mx-auto">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title class="align-end fill-height">I'm a title</v-card-title>
          </v-img>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn text>Click</v-btn>
            <v-btn outlined>Click</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm12>
      <v-sheet height="500">
        <v-calendar
          type="month"
          now="2019-01-08"
          value="2019-01-08"
          :events="events"
        ></v-calendar>
      </v-sheet>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
  components: { Navbar },
  data: () => ({
      events: [
        {
          name: 'Vacation',
          start: '2018-12-30',
          end: '2019-01-02',
        },
        {
          name: 'Meeting',
          start: '2019-01-07',
        },
        {
          name: '30th Birthday',
          start: '2019-01-03',
        },
        {
          name: 'New Year',
          start: '2019-01-01',
        },
        {
          name: 'Conference',
          start: '2019-01-21',
        },
        {
          name: 'Hackathon',
          start: '2019-01-30',
          end: '2019-02-01',
        },
      ]
    })
}
</script>