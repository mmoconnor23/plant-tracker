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
            <IonIcon :icon="refreshOutline" @click="onFabListClick('Rotate')"/>
          </IonFabButton>
          <IonFabButton>
            <IonIcon :icon="archiveOutline" @click="onFabListClick('Repot')"/>
          </IonFabButton>
        </IonFabList>
      </IonFab>

      <IonModal
        :is-open="isModalOpen"
        css-class="my-modal"
        @didDismiss="closeModal"
      >
        <Actions :action="currentAction"/>
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
import Actions from '../components/Actions.vue';

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

    Actions,
  },
  setup() {
    const isModalOpen = ref(false);
    const currentAction = ref('');
    const onFabListClick = (action: string) => {
      isModalOpen.value = true;
      currentAction.value = action;
    };

    const closeModal = () => {
      isModalOpen.value = false;
      currentAction.value = '';
    };

    return {
      archiveOutline,
      heartOutline,
      refreshOutline,

      isModalOpen,
      currentAction,
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
