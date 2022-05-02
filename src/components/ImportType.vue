<template>
  <IonContent>
    <p>import type should be removed without side-effect{{bread?.fox}}</p>
  </IonContent>
</template>

<script lang="js">
import {IonContent} from '@ionic/vue';
export default {
  components: {
    IonContent
  },
  data() {
    return {
      bread: {
        fox: 1
      }
    }
  }
}
</script>
