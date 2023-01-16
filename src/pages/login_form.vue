<template>
    <application>
      <v-card id="app">
        <v-row>
          <v-col class="mx-auto" cols="12" sm="8" md="6">
            <v-card elevation="9">
              <v-card-title class="justify-center">
                <div>
                  <h1 class="headline mb-0">Login</h1>
                </div>
              </v-card-title>
              <v-text-field
                label="ID"
                hide-details="auto" v-model="userID">
              </v-text-field>
      
              <v-text-field label="Password" hide-details="true" v-model="password"></v-text-field>

              <v-card-actions>
                <v-btn text color="orange" @click="loginCheck">로그인</v-btn>
                <v-btn text color="orange">회원가입</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </application>
  </template>

<script>

import application from '@/components/template/application'


export default {
  name: 'Login',
  components: {
    application,
  },
  data() {
    return {
    userID:'',
    password:'',
    }
  },
  computed: {
  readyToSignIn() {
    return this.userID && this.password
  },
  },
  methods: {
    redirect() {
      this.$router.push('/campaign');
    },
    loginCheck() {
      if (this.userID == 'test' & this.password == 'test') {
        return this.redirect();
      } else {return alert('ID or password is wrong!')}
    },
  },
    rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
    ],
}
</script>
