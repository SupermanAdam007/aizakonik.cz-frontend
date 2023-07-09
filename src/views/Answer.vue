<template>
  <v-container style="max-width: 900px;">
    <v-row no-gutters class="align-center justify-center mt-4">
      <v-col cols="12">
        <PromptInput style="max-width: 650px;" class="mx-auto" />
      </v-col>
    </v-row>

    <!-- <h2>Odpověď</h2> -->
    <p class="mt-6" style="text-align: justify; word-break: keep-all;">{{ answer }}</p>

    <!-- <h2>Související</h2>
    <p v-for="source in sourceDocumentsFormatted" :key="source">{{ source }}</p> -->
  </v-container>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useAppStore } from '@/store/app'

import PromptInput from '@/components/PromptInput.vue'

export default {
  components: { PromptInput },
  computed: {
    ...mapWritableState(useAppStore, ['prompt', 'sourceDocuments']),
    ...mapState(useAppStore, ['loading', 'answer']),
    sourceDocumentsFormatted() {
      return this.sourceDocuments.map((x) => {
        return x.page_content
      })
    }
  }
}
</script>
