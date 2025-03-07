<script setup lang="ts">
useHead({
  title: "入会のご案内",
  meta: [
    {
      name: "description",
      content: "航空技術研究会への入会についてのご案内です。",
    },
  ],
});
</script>

<template>
  <div class="container">
    <h1>入会のご案内</h1>
    <p>航空技術研究会への入会についてのご案内です。</p>

    <h2>入会の流れ</h2>
    <p>航空技術研究会への入会方法は以下の通りです。</p>
    <ol>
      <li>
        <p>
          <span>TwitterのDMまたはメールで入会希望の旨をお知らせください</span>
          <span>Forms は準備中です</span>
        </p>
      </li>
      <li>
        <p>サークルの活動日に対面で参加し、必要な手続きを行います</p>
      </li>
      <li>
        <p>入会手続き完了！</p>
      </li>
    </ol>

    <h2>入会資格</h2>
    <p>航空技術研究会への入会資格は以下の通りです。</p>
    <ul>
      <li>
        <span>茨城大学の学生であること</span>
        <span>（学位・学部・学年問わず大歓迎です！）</span>
      </li>
      <li>茨城大学航空技術研究会会則に同意すること</li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}
p {
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  word-break: auto-phrase;
  font-feature-settings: "palt";
}
</style>
