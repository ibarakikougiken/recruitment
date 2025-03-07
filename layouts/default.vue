<script setup lang="ts">
const top = ref<HTMLAnchorElement | null>(null);

function handleClick(e: MouseEvent) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function fadeIn(el: HTMLElement) {
  if (el.style.display === "block") return;
  el.style.opacity = "0";
  el.style.display = "block";
  el.getAnimations().forEach((animation) => animation.cancel());
  el.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 200,
    fill: "forwards",
  }).onfinish = () => {
    el.style.opacity = "1";
  };
}
function fadeOut(el: HTMLElement) {
  if (el.style.display === "none") return;
  el.style.opacity = "1";
  el.getAnimations().forEach((animation) => animation.cancel());
  el.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 200,
    fill: "forwards",
  }).onfinish = () => {
    el.style.display = "none";
  };
}

onMounted(() => {
  const el = top.value;
  if (!el) return;
  window.addEventListener(
    "scroll",
    () => {
      window.screenY > document.body.clientHeight / 2
        ? fadeIn(el)
        : fadeOut(el);
    },
    { passive: true },
  );
});
</script>

<template>
  <div class="default">
    <Header />
    <div class="content">
      <slot />
    </div>
    <a
      ref="top"
      href="#top"
      class="top"
      aria-label="ページ上部に戻る"
      title="ページ上部に戻る"
      @click="handleClick"
    >
      🚀
    </a>
    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans",
    Meiryo, sans-serif;
  font-size: clamp(1rem, calc(0.75rem + 1vw), 1.2rem);
}

#__nuxt {
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}
</style>

<style scoped>
.default {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.content {
  margin: 0 auto;
  padding: 1rem;

  width: calc(100% - 2rem);
  overflow: auto;
}
.top {
  display: none;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  z-index: 1000;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.top:hover {
  animation: bounce 1s ease-in-out infinite;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
