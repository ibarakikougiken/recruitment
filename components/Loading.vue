<script setup lang="ts">
import ShuffleText from "shuffle-text";

const emit = defineEmits(["loaded"]);

const elements = ref<HTMLElement[]>([]);
const fontSize = ref(0);
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
  const max_len = Math.max(...texts.map((t) => [...t].length));
  const fontWidth = 500 / max_len + 2;
  const fontHeight = 100 / texts.length;
  fontSize.value = Math.floor(Math.min(fontWidth, fontHeight));

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
      <desc>
        {{ texts.join("") }}
      </desc>
      <text
        v-for="(_, i) in 2"
        :key="i"
        x="0"
        :y="fontSize * 1.2 * i"
        :font-size="fontSize"
        font-weight="bold"
        ref="elements"
        class="shuffle-text"
      />
    </svg>
  </div>
</template>

<style scoped>
.loading {
  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
  padding: 2rem;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: #fff;
  color: #333;
  display: flex;
  user-select: none;
  -webkit-user-drag: none;
}
svg {
  width: 100%;
  height: 100%;
  dominant-baseline: hanging;
}
text {
  fill: currentColor;
}
.shuffle-text {
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
