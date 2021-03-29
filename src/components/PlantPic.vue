<template>
  <IonCard button @click="goToPlantPage">
    <img :src="image"/>
    <IonCardHeader>
      <IonCardTitle>{{name}}</IonCardTitle>
    </IonCardHeader>
  </IonCard>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: String,
  },
  setup(props) {
    const goToPlantPage = () => {
      router.push({
        name: 'PlantPage',
        params: {
          name: props.name,
        },
      });
    };

    return {
      goToPlantPage,
    };
  },
});
</script>

<style scoped>
</style>
