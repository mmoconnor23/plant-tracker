<template>
  <IonPage>
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Calendar</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen class="ion-padding">
      <h1>Calendar</h1>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
});
</script>

<style>
</style>
