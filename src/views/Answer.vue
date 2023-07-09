<template>
  <v-container>
    <div>Loading: {{ loading }}</div>
    <div>Prompt: {{ prompt }}</div>
    <div>Answer: {{ answer }}</div>
  </v-container>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useAppStore } from '@/store/app'


export default {
  computed: {
    ...mapWritableState(useAppStore, ['prompt']),
    ...mapState(useAppStore, ['loading', 'answer'])
  }
}
</script>
