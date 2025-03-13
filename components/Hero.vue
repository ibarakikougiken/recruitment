<script setup lang="ts">
import ShuffleText from "shuffle-text";

useHead({
  meta: [
    {
      name: "description",
      content:
        "ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動する茨城大学航空技術研究会の新歓特設サイトです。",
    },
  ],
});

const index = ref(0);
const desc = ref("");
const elements = ref<HTMLElement[]>([]);
const fontSize = ref(0);
const data = [
  ["電子工作、プログラミング、", "はじめてみよう。"],
  ["入ってみな、", "飛ぶぞ"],
  ["さあ、", "社会貢献。"],
  ["新しいコト、", "挑戦してみませんか？"],
  ["ドローン、", "飛ばしてみない？"],
  ["撮ろう", "絶景。"],
];

const letters =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

onMounted(() => {
  const startShuffle = () => {
    const promises = elements.value.map((element, i) => {
      return new Promise<void>((resolve) => {
        const shuffleText = new ShuffleText(element);

        const texts = data[index.value];
        desc.value = texts.join("");
        const text = texts[i];
        shuffleText.setText(text);

        const max_len = Math.max(...texts.map((t) => [...t].length));
        const fontWidth = 500 / max_len + 2;
        const fontHeight = 100 / texts.length;
        fontSize.value = Math.floor(Math.min(fontWidth, fontHeight));

        shuffleText.sourceRandomCharacter = letters;
        shuffleText.emptyCharacter = `\u2000`;
        shuffleText.duration = 1000;

        shuffleText.start();
        setTimeout(() => {
          shuffleText.dispose();
          resolve();
        }, 1000 + 1200);
      });
    });
    Promise.all(promises).then(() => {
      setTimeout(() => {
        index.value = (index.value + 1) % data.length;
        startShuffle();
      }, 6000);
    });
  };

  startShuffle();
});
</script>

<template>
  <div class="hero">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :height="fontSize * 1.2 * 2"
      viewBox="0 0 500 100"
    >
      <desc>{{ desc }}</desc>
      <text
        v-for="(_, i) in 2"
        x="0"
        :y="fontSize * 1.2 * i"
        dy="50%"
        :font-size="fontSize"
        font-weight="bold"
        :key="i"
        ref="elements"
      ></text>
    </svg>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  aspect-ratio: 3 / 1;
  user-select: none;
}
svg {
  max-width: 100%;
  height: 100%;
}
</style>
