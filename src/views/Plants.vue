<template>
  <IonPage>
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Plants</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen class="ion-padding">
      <h1>Plants</h1>
      <PlantPic name="Fiona" image="./monstera-leaf.png"/>
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
import PlantPic from '@/components/PlantPic.vue';

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    PlantPic,
  },
});
</script>

<style>
</style>
