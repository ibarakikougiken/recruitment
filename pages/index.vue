<template>
  <div>
    <Hero />

    <div class="container description">
      <h1>茨城大学航空技術研究会 新歓特設サイト</h1>
      <p>
        ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動する茨城大学航空技術研究会の新歓特設サイトです。
      </p>

      <h2>新歓イベント</h2>
      <p>開催予定の新歓イベントは以下の通りです。</p>
      <ul>
        <li>
          4月9日
          <ul>
            <li>新歓祭 (水戸キャンパス)</li>
            <li>課外活動説明会 (日立キャンパス)</li>
          </ul>
        </li>
        <li>
          日時未定
          <ul>
            <li>ドローン操縦体験会</li>
          </ul>
        </li>
      </ul>

      <h2>新歓祭について</h2>
      <p>
        <span>
          新歓祭は、茨城大学水戸キャンパスで開催される新入生歓迎イベントです。
        </span>
        <span>
          航空技術研究会は、新歓祭に出展し、活動内容の紹介やトイドローン操縦体験を行います。
        </span>
      </p>

      <h2>課外活動説明会について</h2>
      <p>
        <span>
          課外活動説明会は、茨城大学日立キャンパスで開催される課外活動紹介イベントです。
        </span>
        <span>
          工学部生向けの展示を行います。また、トイドローンの操縦体験会も予定しています。
        </span>
      </p>

      <h2>ドローン操縦体験会について</h2>
      <p>
        <span>
          ドローン操縦体験会では、茨城大学水戸キャンパス第2グラウンドで、DJI
          Phantom 4 Advanceを操縦できます。
        </span>
        <span>日時等はTwitterでお知らせします。お楽しみに！</span>
      </p>

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
  width: 80%;
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
