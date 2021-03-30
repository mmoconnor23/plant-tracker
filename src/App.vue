<template>
  <IonApp>
    <IonTabs>
      <!--TODO: named slot error, remove warn override-->
      <IonTabBar slot="bottom">
        <IonTabButton tab="plants" href="/plants">
          <IonLabel>Plants</IonLabel>
          <IonIcon name="leaf-outline"></IonIcon>
        </IonTabButton>
        <IonTabButton tab="calendar" href="/calendar">
          <IonLabel>Calendar</IonLabel>
          <IonIcon name="calendar-clear-outline"></IonIcon>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonLabel>Profile</IonLabel>
          <IonIcon name="person-outline"></IonIcon>
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
