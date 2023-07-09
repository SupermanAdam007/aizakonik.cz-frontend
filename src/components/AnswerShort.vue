<template>
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text></v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  data() {
    return {
      urlRules: [
        (value) => !!value || "Napište dotaz.",
      ],
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ['prompt']),
    ...mapState(useAppStore, ['answer'])
  },
  mounted() {
    if (this.$route.query.prompt !== undefined) {
      this.prompt = this.$route.query.prompt
    }
  },
  methods: {
    ...mapActions(useAppStore, ['fetchAnswer']),
    onClick() {
      this.fetchAnswer()

      setTimeout(() => {
        this.$router.push('/odpoved')
      }, 1000)
    },
  },
}
</script>

<style></style>