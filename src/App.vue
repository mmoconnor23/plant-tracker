<template>
  <IonApp>
    <IonTabs>
      <IonTabBar>
        <IonTabButton tab="plants" href="/plants">
          <IonLabel>Plants</IonLabel>
          <IonIcon :icon="leafOutline"></IonIcon>
        </IonTabButton>
        <IonTabButton tab="calendar" href="/calendar">
          <IonLabel>Calendar</IonLabel>
          <IonIcon :icon="calendarClearOutline"></IonIcon>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonLabel>Profile</IonLabel>
          <IonIcon :icon="personOutline"></IonIcon>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/vue';
import {
  calendarClearOutline,
  leafOutline,
  personOutline,
} from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
  },
  setup() {
    return {
      calendarClearOutline,
      leafOutline,
      personOutline,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
