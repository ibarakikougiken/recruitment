<script setup lang="ts">
const meta = useDefaultSeoMeta({
  title: "プライバシーポリシー",
  description:
    "茨城大学航空技術研究会のプライバシーポリシーについてのページです。",
});
useSeoMeta(meta);
</script>

<template>
  <div class="privacy-policy">
    <h1>プライバシーポリシー</h1>

    <h2>プライバシーポリシー</h2>
    <ol>
      <li>
        <h3>基本的考え方</h3>
        <p>
          茨城大学航空技術研究会では、当ウェブサイトのの円滑な運営に必要な範囲で、当ウェブサイトの利用者の情報を収集しています。
          収集した情報は、利用目的の範囲内で適切に取り扱います。
        </p>
      </li>
      <li>
        <h3>収集する情報の範囲</h3>
        <p>
          当ウェブサイトでは、参照元のサイトドメイン名（リファラー）、IPアドレス、当ウェブサイトの閲覧状況等の情報を自動的に収集します。
        </p>
      </li>
      <li>
        <h3>利用目的</h3>
        <p>当ウェブサイトでは、収集した情報を以下の目的で利用します。</p>
        <ul>
          <li>当ウェブサイトの運営に必要な範囲で利用するため</li>
          <li>当ウェブサイトの利用状況の把握のため</li>
        </ul>
      </li>
      <li>
        <h3>利用及び提供の制限</h3>
        <p>
          茨城大学航空技術研究会では、法令に基づく開示要請があった場合、不正アクセス、脅迫等の違法行為があった場合その他特別の理由のある場合を除き、収集した情報を利用目的以外の目的のために自ら利用し、又は第三者に提供いたしません。
        </p>
      </li>
      <li>
        <h3>情報の管理</h3>
        <p>
          茨城大学航空技術研究会では、収集した情報を適切に管理し、情報の漏洩、滅失又は毀損のために必要な措置を講じます。
        </p>
      </li>
      <li>
        <h3>プライバシーポリシーの変更</h3>
        <p>
          当ウェブサイトでは、法令の変更その他の事情により、プライバシーポリシーを変更することがあります。
        </p>
      </li>
    </ol>

    <h2>Google Analyticsの利用について</h2>
    <p>
      当ウェブサイトでは、Google LLCが提供するGoogle
      Analyticsを利用してアクセス解析を行っています。 Google Analyticsは、Cookie
      を使用して当サイトの利用状況を分析するために情報を収集します。
      収集した情報は、Google社のプライバシーポリシーに基づいて管理されます。
      Google
      Analyticsによる情報の収集及び利用については、Google社のプライバシーポリシーをご覧ください。

      <a
        href="https://policies.google.com/privacy?hl=ja"
        target="_blank"
        rel="noopener"
      >
        Google ポリシーと規約
      </a>

      なお、Google
      Analyticsのサービス利用による損害については、茨城大学航空技術研究会は一切の責任を負わないものとします。
    </p>

    <h2>動画の埋め込みについて</h2>
    <p>
      当ウェブサイトでは、動画形式でコンテンツを掲載するため、Google
      LLCが提供するYouTubeの動画を埋め込んでいます。
      YouTubeの動画コンテンツが埋め込まれているページを閲覧すると、利用するブラウザからGoogle社に対し、IPアドレスや閲覧したサイトのURL、ブラウザの情報等が自動的に送信されます。
      詳細はGoogle社のプライバシーポリシーをご確認ください。
      <a
        href="https://policies.google.com/privacy?hl=ja"
        target="_blank"
        rel="noopener"
      >
        Google ポリシーと規約
      </a>
    </p>
  </div>
</template>

<style scoped>
.privacy-policy {
  max-width: min(800px, calc(100vw - 3rem));
  margin: 0 auto;
  font-feature-settings: "palt";
}
p {
  display: flex;
  flex-direction: column;
  word-break: auto-phrase;
  font-feature-settings: "palt";
  text-autospace: ideograph-alpha;
}
</style>
