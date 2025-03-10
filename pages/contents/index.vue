<script setup lang="ts">
const { data } = await useAsyncData("blog", () =>
  queryCollection("contents")
    .where("draft", "=", false)
    .order("date", "DESC")
    .all(),
);

const meta = useDefaultSeoMeta({
  title: "記事一覧",
  description: "記事一覧 | 茨城大学航空技術研究会新歓特設サイト",
});
useSeoMeta(meta);
</script>

<template>
  <div>
    <ul v-if="data" class="list">
      <li v-for="article in data" :key="article.path" class="item">
        <NuxtLink :to="article.path" class="title">
          <h2>{{ article.title }}</h2>
          <time datetime="article.date" class="date">
            {{ parse(article.date) }}
          </time>
          <p class="description">
            {{ article.description }}
          </p>
        </NuxtLink>
        <div class="tags">
          <NuxtLink
            v-for="tag in article.tags"
            :key="tag"
            :to="`/contents/tags/${tag}`"
            class="tag"
          >
            {{ tag }}
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
.item {
  display: grid;
  grid-template-rows: auto auto auto auto 1fr;

  border-radius: 0.5rem;
  background-color: white;
  border: 1px solid #3a3a3a;
}
.title {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: 1 / 6;
  grid-column: 1;
  gap: 0.25rem;

  padding: 1rem;
  color: #000;
  text-decoration: none;
}
.title h2 {
  grid-row: 1 / 2;
  grid-column: 1;
  margin: 0;
}
.title .date {
  grid-row: 2 / 3;
  grid-column: 1;
  margin: 0;
  font-size: 0.8rem;
  color: #3a3a3a;
}
.title .description {
  grid-row: 3 / 4;
  grid-column: 1;
  margin: 0;
  font-size: 1rem;
  color: #3a3a3a;
}
.tags {
  grid-row: 4 / 5;
  grid-column: 1;

  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  list-style: none;
  padding: 1rem 1rem 0;
  margin: 0;

  pointer-events: none;
}
.tag {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #000;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  text-decoration: none;

  pointer-events: auto;
}
</style>
