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
const elements = ref<HTMLElement[]>([]);
const data = [
  ["電子工作、プログラミング、", "はじめてみよう。"],
  ["入ってみな、", "飛ぶぞ"],
  ["さあ、", "社会貢献。"],
  ["新しいコト、", "挑戦してみませんか？"],
  ["緩いです。", "とっても。"],
  ["ドローン、", "飛ばしてみない？"],
  ["撮ろう", "絶景。"],
];

const letters =
  "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

onMounted(async () => {
  // Layout shift として評価されないように待機
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  for (let i = 0; i < elements.value.length; i++) {
    const element = elements.value[i];
    const shuffleText = new ShuffleText(element);
    shuffleText.setText(data[index.value][i]);
    shuffleText.sourceRandomCharacter = letters;
    shuffleText.emptyCharacter = `\u2000`;
    shuffleText.start();
  }
  setInterval(() => {
    index.value = (index.value + 1) % data.length;
    for (let i = 0; i < elements.value.length; i++) {
      if (data[index.value][i] === undefined) {
        continue;
      }
      const element = elements.value[i];
      const shuffleText = new ShuffleText(element);
      shuffleText.setText(data[index.value][i]);
      shuffleText.sourceRandomCharacter = letters;
      shuffleText.emptyCharacter = `\u2000`;
      shuffleText.start();
    }
  }, 6000);
});
</script>

<template>
  <div class="hero">
    <div class="message">
      <span class="text" v-for="(_, i) in 2" :key="i" ref="elements"></span>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
}
.message {
  height: calc(clamp(1.5rem, 8vw, 5rem) * 6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.text {
  width: 100%;
  font-size: clamp(1.5rem, 8vw, 5rem);
  user-select: none;
}
</style>
