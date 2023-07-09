<template>
  <div class="mt-n2">
    <v-textarea v-model="prompt" autofocus class="mt-2" :loading="loading" :rules="urlRules" variant="solo" label="Na co se chcete zeptat?" hide-details append-inner-icon="mdi-magnify"
      @click:append-inner="onClick" v-on:keyup.enter="onClick" type="text">
    </v-textarea>

    <!-- <v-select v-model="selectedCollectionOfLaws" class="mt-2" :items="collectionsOfLaws" label="Vyberte oblast" variant="solo" hide-details></v-select> -->

  </div>
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
    ...mapWritableState(useAppStore, ['prompt', 'selectedCollectionOfLaws']),
    ...mapState(useAppStore, ['loading', 'collectionsOfLaws'])
  },
  mounted() {
    if (this.$route.query.prompt !== undefined) {
      this.prompt = this.$route.query.prompt
    }
  },
  methods: {
    ...mapActions(useAppStore, ['fetchAnswer']),
    onClick() {
      if (this.prompt.length <= 5) return

      this.fetchAnswer()

      setTimeout(() => {
        this.$router.push('/odpoved')
      }, 1000)
    },
  },
}
</script>

<style></style>