<script setup lang="ts">
import ShuffleText from "shuffle-text";

const emit = defineEmits(["loaded"]);

const elements = ref<HTMLElement[]>([]);
const texts = ["新しいコト、", "挑戦してみませんか？"];
const duration = 1000;

async function fadeOut(target: HTMLElement): Promise<Animation> {
  return target.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: duration,
    easing: "ease",
    fill: "forwards",
  }).finished;
}
function effect(target: HTMLElement, text: string): ShuffleText {
  const effect = new ShuffleText(target);
  effect.sourceRandomCharacter =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  effect.emptyCharacter = `\u2000`;
  effect.duration = duration;
  effect.setText(text);
  effect.start();
  return effect;
}

onMounted(() => {
  const promises = elements.value.map((element, index) => {
    return new Promise<void>((resolve) => {
      const e = effect(element, texts[index]);
      const timer = setTimeout(() => {
        fadeOut(element).then(() => {
          clearTimeout(timer);
          e.dispose();
          resolve();
        });
      }, duration + 1200);
    });
  });
  Promise.all(promises).then(() => {
    setTimeout(() => {
      emit("loaded");
    }, 200);
  });
});
</script>

<template>
  <div class="loading">
    <div class="inner">
      <p
        v-for="(text, index) in texts"
        :key="index"
        ref="elements"
        class="shuffle-text"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
}
.shuffle-text {
  width: 100%;
  font-size: calc(100vw / 12);
  font-weight: bold;
  margin: 0;
  padding: 0;
  user-select: none;
}
</style>
