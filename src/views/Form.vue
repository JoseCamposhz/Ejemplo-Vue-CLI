<template>
  <section>
    <Navbar />
    <v-container mt-4>
      <v-layout wrap>
        <v-flex md6 sm12 xs12 px-2>
          <v-form id="form" @submit.prevent="enviarFormulario">
            <h2>DEJA TU RESPUESTA</h2>
            <v-text-field
              v-model="autor"
              :error-messages="errorAutor"
              placeholder="Ingresa tu Nombre"
              label="Autor"
            />
            <v-textarea
              v-model="descripcion"
              :error-messages="errorComentario"
              :rules="rules"
              placeholder="Ingresa tu Comentario"
              label="Comentario"
              rows="2"
              maxlength="100"
              counter="100"
            />
            <v-btn dark type="submit" form="form">Enviar!</v-btn>
          </v-form>
      </v-flex>
      <v-flex md6 sm12 xs12 px-2>
        <h2>COMENTARIOS</h2>
        <v-card v-for="(c, index) in comentarios" :key="index" class="mb-5" min-width="400px">
          <v-card-title>
            Autor: {{ c.autor }}
            <v-spacer />
            <v-btn fab color="red" dark small @click="eliminarComentario(index)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>{{ c.descripcion }}</v-card-text>
        </v-card>
      </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      comentarios: [],
      autor: "",
      descripcion: "",
      errorAutor: "",
      errorComentario: "",
      rules: [v => v.length < 100 || 'Máximo 100 caracteres'],
    };
  },
  methods: {
    enviarFormulario() {
      let validar = true
      if (this.autor === "") {
        this.errorAutor = "El Autor es requerido"
        validar = false
      } else {
        this.errorAutor = ""
      }
      if (this.descripcion === "") {
        this.errorComentario = "El comentario es requerido"
        validar = false
      } else {
        this.errorComentario = ""
      }
      if (validar) {
        this.comentarios.push({autor: this.autor, descripcion: this.descripcion})
        this.autor = ""
        this.descripcion = ""
        this.errorAutor = ""
        this.errorComentario = ""
      }
    },
    eliminarComentario (index) {
      let msg = confirm("¿Estas seguro de eliminar este comentario?");
      if (msg) {
        this.comentarios.splice(index, 1);
      }
    }
  }
};
</script>