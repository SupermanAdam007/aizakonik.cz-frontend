<template>
  <div>
    <v-app-bar flat app>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <router-link v-show="$route.path !== '/'" to="/" style="color: inherit; text-decoration: inherit;" class="ml-6">
        <v-toolbar-title title="AI Zákoník">
          AI Zákoník
        </v-toolbar-title>
      </router-link>

      <!-- <v-spacer v-show="$route.path !== '/'"></v-spacer> -->

      <!-- <v-btn v-show="$route.path !== '/'" icon to="/">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list :items="collectionsOfLawsList" density="compact" @click:select="selectCollectionsOfLaws"></v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ['prompt', 'selectedCollectionOfLaws']),
    ...mapState(useAppStore, ['collectionsOfLaws']),
    collectionsOfLawsList() {
      return this.collectionsOfLaws.map(x => {
        return { title: x, value: x }
      })
    }
  },
  methods: {
    selectCollectionsOfLaws({id}) {
      this.selectedCollectionOfLaws = id
      this.drawer = false
    }
  }
}

</script>
