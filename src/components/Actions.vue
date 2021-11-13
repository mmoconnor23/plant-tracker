<template>
  <IonHeader translucent>
    <IonToolbar>
      <IonTitle>{{action}}</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent class="ion-padding">
    {{action}}
    <IonItem>
      <IonLabel>Date</IonLabel>
      <IonDatetime v-model="date" placeholder="Select Date"></IonDatetime>
    </IonItem>
  </IonContent>
  <IonFooter>
    <IonToolbar>
      <IonButtons slot="end">
        <IonButton @click="addEventToPlant">Save</IonButton>
      </IonButtons>
    </IonToolbar>
  </IonFooter>
</template>

<script lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonButton,
    IonButtons,
    IonContent,
    IonDatetime,
    IonFooter,
    IonHeader,
    IonItem,
    IonLabel,
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
    const date = ref(new Date().toISOString());

    const addEventToPlant = () => {
      console.log(date.value);
    };

    return {
      addEventToPlant,
      date,
    };
  },
});
</script>

<style scoped>
</style>
