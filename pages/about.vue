<script setup lang="ts">
useHead({
  title: "活動内容",
  meta: [
    {
      name: "description",
      content:
        "航空技術研究会は、ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動するサークルです。",
    },
  ],
});
</script>

<template>
  <div class="about">
    <h1>航空技術研究会について</h1>
    <p>
      航空技術研究会は、ドローン、ラジコン飛行機、電子工作、プログラミングなどの分野で幅広く活動するサークルです。
    </p>
    <div>
      <h2>体験会</h2>
      <p>
        <span>Commig soon...</span>
        <span>ドローンの操縦体験会は今後、Twitterで告知する予定です。</span>
      </p>

      <h2>活動内容</h2>
      <p>航空技術研究会の活動は、以下のようなものがあります。</p>
      <ul>
        <li>ドローンの操縦練習、空撮</li>
        <li>ドローン・ラジコン飛行機の製作</li>
        <li>近隣の学校でのドローン教室</li>
        <li>地域イベントへの出展</li>
        <li>文化祭への出展</li>
        <li>その他、電子工作、プログラミングなど</li>
      </ul>
    </div>
    <div>
      <div>
        <h2>スケジュール</h2>
        <p>航空技術研究会のスケジュール(予定)です。</p>
        <p>昨年度の活動報告は以下のリンクからご覧いただけます。</p>
        <p>
          <a
            href="https://ibarakikougiken.github.io/articles/mhtritcywxfttwuv/"
            target="_blank"
          >
            年末のご挨拶と活動報告 2024
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="none"
              viewBox="0 0 24 24"
            >
              <desc>外部リンク</desc>
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0-7 7"
              />
            </svg>
          </a>
        </p>
      </div>
      <ScheduleChart />
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
}
p {
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  word-break: auto-phrase;
  font-feature-settings: "palt";
}
a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
