<template>
  <q-page class="column items-center justify-evenly">
    <q-btn-group>
      <q-btn @click="cursor" color="primary" glossy label="Курсор" />
      <q-btn color="primary" glossy label="Смещение" />
      <q-btn color="primary" glossy label="Вращение" />
      <q-btn color="primary" glossy label="Масштабирование" />
    </q-btn-group>
   <canvas></canvas>
  </q-page>
</template>

<script lang="ts">
import BabylonScene from '../components/BabylonScene.vue';
import { defineComponent, ref } from 'vue';
import { BasicScene } from '../Babylon/BasicScene'

export default defineComponent({
  name: 'IndexPage',
  components: { BabylonScene },
   mounted() {
    const canvas = document.querySelector("canvas")!
    new BasicScene(canvas)
  },
  setup() {
  }
});
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
