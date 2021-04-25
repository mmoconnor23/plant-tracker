<template>
  <IonPage>
    <IonHeader translucent>
      <IonToolbar>
        <IonButtons>
          <IonBackButton/>
        </IonButtons>
        <IonTitle>Plant Page</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen class="ion-padding">
      <h1>{{$route.params.name}}</h1>

      <img src="/monstera-leaf.png"/>
      Activity Log

      Add Plant Action
      - repot
      - rotate
      - notes

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon :icon="heartOutline"/>
        </IonFabButton>
        <IonFabList side="start">
          <IonFabButton>
            <IonIcon :icon="refreshOutline" @click="onFabListClick('rotate')"/>
          </IonFabButton>
          <IonFabButton>
            <IonIcon :icon="archiveOutline" @click="onFabListClick('repot')"/>
          </IonFabButton>
        </IonFabList>
      </IonFab>

      <IonModal
        :is-open="isModalOpen"
        css-class="my-modal"
        @onDidDismiss="closeModal"
      >
        Modal is open
      </IonModal>
    </IonContent>
  </IonPage>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import {
  archiveOutline,
  heartOutline,
  refreshOutline,
} from 'ionicons/icons';

export default defineComponent({
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonHeader,
    IonIcon,
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const isModalOpen = ref(false);
    const onFabListClick = (action: string) => {
      isModalOpen.value = true;
      console.log(`click happened for ${action}`);
    };

    const closeModal = () => {
      // FIXME: once closed, doesn't open again :(
      isModalOpen.value = false;
    };

    return {
      archiveOutline,
      heartOutline,
      refreshOutline,

      isModalOpen,
      onFabListClick,
      closeModal,
    };
  },
});
</script>

<style>
.my-modal {
  --height: 75%;
  --width: 75%;
}
</style>
