<template>
  <IonHeader translucent>
    <IonToolbar>
      <IonTitle>{{action}}</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent class="ion-padding">
    {{action}}
  </IonContent>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  },
  props: {
    action: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
    };
  },
});
</script>

<style scoped>
</style>
