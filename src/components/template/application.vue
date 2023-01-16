<template>
    <v-app props...>
      <slot name="before-main" />
      <v-main app>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
      <slot name="after-main" />
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'application', 
    data() {
      return {};
    }
  }
  </script>
  
  <style scoped>
</style>