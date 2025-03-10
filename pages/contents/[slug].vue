<script setup lang="ts">
import type { TocLink } from "@nuxt/content";

const route = useRoute();
const { path } = route;
const { data } = await useAsyncData(path, () =>
  queryCollection("contents").path(path).first(),
);

useSeoMeta({
  title: data?.value?.title,
  description: data?.value?.description,
  ogTitle: data?.value?.title,
  ogType: "article",
  ogDescription: data?.value?.description,
  ogUrl: `https://ibarakikougiken.github.io/recruitment${path}`,
  ogImage: `https://ibarakikougiken.github.io/recruitment${path}/ogp.png`,
  twitterTitle: data?.value?.title,
  twitterDescription: data?.value?.description,
  twitterSite: "@ibarakikougiken",
  twitterCreator: "@ibarakikougiken",
  twitterCard: "summary_large_image",
  twitterImage: `https://ibarakikougiken.github.io/recruitment${path}/ogp.png`,
});

// スクロールロック
let locked = false;

const toc_elemens = ref<HTMLElement[]>([]);

const flattenToc = (toc: TocLink[]): TocLink[] => {
  return toc.flatMap((item) => {
    if (item.children) {
      return [item, ...flattenToc(item.children)];
    }
    return [item];
  });
};
const toc = computed(() => {
  if (data?.value?.body.toc) {
    return flattenToc(data.value.body.toc.links);
  }
  return [];
});

onMounted(() => {
  const body = document.querySelector(".markdown-body");
  const headings = body?.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const links = document.querySelectorAll(".markdown-body a");
  const toc = document.querySelector(".toc");
  const rem = window.getComputedStyle(document.documentElement).fontSize;

  links.forEach((el) => {
    const href = el.getAttribute("href");
    if (href && href.startsWith("http")) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });

  for (const el of toc_elemens.value) {
    const element = el.firstChild as HTMLAnchorElement;
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const href = element.getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      const offset = target?.getBoundingClientRect().top;
      if (!offset) return;

      locked = true;
      window.scrollTo({
        top: window.scrollY + offset - parseInt(rem) * 10,
        behavior: "smooth",
      });
      locked = false;
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        const link = toc_elemens.value.find((el) => {
          const element = el.firstChild as HTMLAnchorElement;
          return element.getAttribute("href") === `#${id}`;
        });
        link?.classList.toggle("active", entry.isIntersecting);

        if (entry.isIntersecting && !locked && toc) {
          const offset = link?.scrollHeight;
          if (!offset) return;

          locked = true;
          toc.scrollTo({
            top: link.offsetTop - toc.clientHeight / 2 + offset,
            behavior: "smooth",
          });
          locked = false;
        }
      }
    },
    {
      rootMargin: "0px",
      threshold: 0.5,
    },
  );
  headings?.forEach((heading) => {
    observer.observe(heading);
  });
});
</script>

<template>
  <div class="container">
    <article v-if="data">
      <h1 class="title">{{ data.title }}</h1>
      <date :date="data.date">
        {{ parse(data.date) }}
      </date>
      <p class="description">{{ data.description }}</p>
      <div class="tags">
        <span v-for="tag in data.tags" :key="tag">
          <NuxtLink class="tag" :to="`/contents/tags/${tag}`">
            {{ tag }}
          </NuxtLink>
        </span>
      </div>
      <ContentRenderer :value="data" class="markdown-body" />
    </article>
    <div v-else>
      <h1>記事が見つかりませんでした</h1>
    </div>

    <aside v-if="data?.body.toc">
      <div class="toc">
        <h2>目次</h2>
        <ul>
          <li v-for="item in toc" :key="item.id" ref="toc_elemens">
            <NuxtLink
              :to="`#${item.id}`"
              :data-depth="item.depth"
              class="toc-link"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

article {
  max-width: 800px;
  margin: 0 auto;
}
.title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.description {
  margin-bottom: 1rem;
  font-size: 1rem;
}
.tags {
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  border-radius: 5px;
  padding: 5px 10px;
  text-decoration: none;
  color: #000;
  background-color: #f0f0f0;
}
.markdown-body {
  margin: 1rem 0;
  line-height: 1.6;
}

aside {
  position: sticky;
  top: 10rem;
  width: 24rem;
}
@media (max-width: 1260px) {
  aside {
    display: none;
  }
}
.toc {
  height: calc(100vh - 18rem);
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: auto;
}
.toc h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  user-select: none;
  -webkit-user-drag: none;
}
.toc ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.toc-link {
  display: block;
  padding: 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  border: 1px solid transparent;
  transition: background-color 0.3s;
  user-select: none;
  -webkit-user-drag: none;
}
.toc ul .active .toc-link {
  border: 1px solid #b4b4b4;
}
@media (hover: hover) {
  .toc-link:hover {
    background-color: #f0f0f0;
  }
}
@media (hover: none) {
  .toc-link:active {
    background-color: #f0f0f0;
  }
}
.toc-link[data-depth="2"] {
  font-weight: bold;
  font-size: 1.2rem;
}
.toc-link[data-depth="3"] {
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: normal;
}
.toc-link[data-depth="4"] {
  padding-left: 1.5rem;
  font-size: 0.8rem;
  font-weight: normal;
}
</style>

<style>
@import url("github-markdown-css/github-markdown-light.css");

.markdown-body h1 a,
.markdown-body h2 a,
.markdown-body h3 a,
.markdown-body h4 a,
.markdown-body h5 a,
.markdown-body h6 a {
  color: #000;
  text-decoration: none;
}

.markdown-body p {
  word-break: auto-phrase;
  font-feature-settings: "palt";
}
.markdown-body a[href^="https://"]::after
{
  content: url(~/assets/svg/external_link.svg);
  padding: 0 0.25rem;
  vertical-align: middle;
}

.markdown-body .scrollable {
  max-width: calc(100vw - 3rem);
  overflow: auto;
}
.markdown-body table {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  border-collapse: collapse;
  white-space: nowrap;
}
.markdown-body table thead tr {
  background-color: #ececec;
}
.markdown-body table tr,
.markdown-body table tr:nth-child(2n) {
  background-color: #fff;
}
</style>
