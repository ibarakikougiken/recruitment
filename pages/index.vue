<script setup lang="ts">
const meta = useDefaultSeoMeta({});
useSeoMeta(meta);
</script>

<template>
  <div>
    <Hero />

    <div class="container description">
      <h1>茨城大学航空技術研究会 新歓特設サイト</h1>
      <p>
        ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動する茨城大学航空技術研究会の新歓特設サイトです。
      </p>
      <p>
        学年や学科に関係なく、活動に興味がある方はどなたでも歓迎します。
        ぜひ、新歓イベントにお越しください！
      </p>

      <h2>ドローン操縦体験会</h2>
      <p>
        <span>
          ドローン操縦体験会では、茨城大学水戸キャンパス第2グラウンドで、DJI
          Phantom 4 Advanceを操縦できます。
        </span>
        <span>
          予約などは不要なので、お気軽にご参加ください！ 2年生以上も大歓迎です！
        </span>
      </p>

      <img src="/images/memo.png" alt="ドローン操縦体験会チラシ" />
      <div class="flyers">
        <img
          src="/images/ee1.png"
          alt="ドローン操縦体験会チラシの表面"
          class="flyer"
        />
        <img
          src="/images/ee2.png"
          alt="ドローン操縦体験会チラシの裏面"
          class="flyer"
        />
      </div>

      <h2>お問い合わせ</h2>
      <p>
        <span>
          茨城大学航空技術研究会についてのお問い合わせは、TwitterのDMまたはメールでお願いします。
        </span>
        <span>ご質問や見学希望など、お気軽にお問い合わせください。</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 90%;
  max-width: min(800px, calc(100vw - 3rem));
  height: 50%;
  margin: clamp(0.4rem, 1vw, 1.5rem) auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  text-align: start;
}
.description {
  max-width: 1200px;
  gap: 0.2rem;
}
p,
li,
span {
  margin: 0;
  /* @see https://caniuse.com/?search=auto-phrase */
  word-break: auto-phrase;
  font-feature-settings: "palt";
}

.description h2 {
  margin: 2rem 0 1rem;
}
.description p {
  margin: 0;
}
.description ul {
  margin: 0;
  padding: 0 1rem;
}

.flyers {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
img {
  margin: 0.5rem auto;
  max-width: min(720px, 100%);
}
.flyer {
  margin: 0.5rem 0;
  max-width: min(360px, 100%);
}

.icon {
  width: 100%;
  max-width: 800px;
  max-height: 8rem;
  width: 60%;
  margin: 0 auto;
  object-fit: contain;
  -webkit-user-drag: none;
  user-select: none;
}
.scroll {
  animation: scroll 1s infinite;
  align-self: center;
}
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
