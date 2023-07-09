import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAppStore = defineStore("app", {
  state: () => ({
    loading: false,
    prompt: useStorage("prompt", ""),
    answer: useStorage("answer", ""),
    sourceDocuments: useStorage("sourceDocuments", []),
    collectionsOfLaws: [
      "Daňový řád",
      "Insolvenční zákon",
      "Nový občanský zákoník",
      "Občanský soudní řád",
      "Správní řád",
      "Stavební zákon",
      "Školský zákon",
      "Trestní zákoník",
      "Trestní řád",
      "Zákon o advokacii",
      "Zákon o daních z příjmů",
      "Zákon o DPH",
      "Zákon o obchodních korporacích",
      "Zákon o přestupcích",
      "Zákon o rodině",
      "Zákon o státní službě",
      "Zákon o účetnictví",
      "Zákon o veřejném zdravotním pojištění",
      "Zákoník práce",
      "Živnostenský zákon",
    ],
    selectedCollectionOfLaws: useStorage(
      "selectedCollectionOfLaws",
      "Daňový řád"
    ),
  }),
  actions: {
    fetchAnswer() {
      this.loading = true;

      return fetch(`${import.meta.env.VITE_API_HOST}/prediction`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: this.prompt,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          this.answer = data.result.replaceAll("$", "§");
          this.sourceDocuments = data.source_documents;

          this.loading = false;
        })
        .catch((error) => {
          console.error(error);
          this.loading = false;
        });
    },
  },
});
