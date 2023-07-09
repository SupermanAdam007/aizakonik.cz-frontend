<template>
  <v-container class="fill-height pt-0">
    <v-responsive class="align-center text-center fill-height">
      <div>
        <h1 class="text-h2 text-sm-h1" color="primary">
          AI Zákoník
        </h1>
        <h2 class="text-subtitle-1 text-sm-h5 mt-4 mb-12">
          Naučili jsme umělou inteligenci 
          <br><strong>Právní předpisy a zákony v České republice</strong>
        </h2>
      </div>

      <v-row no-gutters class="align-center justify-center mt-4">
        <v-col cols="12">
          <PromptInput style="max-width: 650px;" class="mx-auto mb-10 pb-10" />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import PromptInput from './PromptInput.vue'

export default {
  components: { PromptInput }
}
</script>
