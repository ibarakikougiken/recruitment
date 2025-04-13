<script setup lang="ts">
const meta = useDefaultSeoMeta({
  title: "活動内容",
  description: "航空技術研究会の活動、スケジュールをご紹介します。",
});
useSeoMeta(meta);
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
        <span>ドローンの操縦体験会を 3/20（日）、3/27(日)に開催します</span>
        <span>
          予約などは不要なので、お気軽にご参加ください！ 2年生以上も大歓迎です！
        </span>
        <span>
          悪天時は、中止となる可能性があります。
          中止等の場合は、Twitterでお知らせいたしますので、フォローをよろしくお願いします！
        </span>
      </p>
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

      <h2>活動場所</h2>
      <ul>
        <li>茨城大学水戸キャンパス第2グラウンド</li>
        <li>茨城大学日立キャンパスサークル棟</li>
      </ul>
      <p>
        水戸キャンパスでは、ドローンの操縦練習や空撮、ラジコン飛行機の飛行練習を行っています。
      </p>
      <p>
        日立キャンパスでは、電子工作やプログラミングなどの活動を行っています。
      </p>

      <h2>活動時間、曜日</h2>
      <p>水戸キャンパスでは、日曜日の午後に活動することが多いです。</p>
      <p>日立キャンパスでは、平日に活動することが多いです。</p>

      <h2>メンバー</h2>
      <p>現在のメンバー数：11人（学部生：9人）</p>
      <p>学部生の学部：工学部（100%）</p>
      <p>
        学部生の学部：機械システム工学科、物質科学工学科、電気電子工学科、情報工学科
      </p>

      <h3>学年・学部別の人数</h3>
      <table>
        <thead>
          <tr>
            <th>学部</th>
            <th>2年</th>
            <th>3年</th>
            <th>4年</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>機械システム工学科</td>
            <td>4</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>物質科学工学科</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>電気電子工学科</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>情報工学科</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
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
            <img src="~/assets/svg/external_link.svg" alt="External Link" />
          </a>
        </p>
      </div>
      <ScheduleChart />
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: min(800px, calc(100vw - 3rem));
  margin: 0 auto;
}

.flyers {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.flyer {
  margin: 0.5rem 0;
  max-width: min(360px, 100%);
}

h2 {
  margin: 2em 0 0.5em;
}
h3 {
  margin: 0.5em 0;
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

table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 0.5em;
}
th {
  background-color: #f5f5f5;
}
</style>
