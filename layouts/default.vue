<script setup lang="ts">
const top = ref<HTMLAnchorElement | null>(null);
let isLocked = false;

function handleClick(e: MouseEvent) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function fadeIn(el: HTMLElement) {
  if (el.style.display === "block") return;
  if (isLocked) return;

  isLocked = true;
  el.style.display = "block";
  el.style.opacity = "0";

  el.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 200,
    fill: "forwards",
  }).finished.then((anim) => {
    el.style.opacity = "1";
    anim.cancel();
    isLocked = false;
  });
}
function fadeOut(el: HTMLElement) {
  if (el.style.display === "none") return;
  if (isLocked) return;

  isLocked = true;
  el.style.opacity = "1";

  el.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 200,
    fill: "forwards",
  }).finished.then((anim) => {
    el.style.display = "none";
    el.style.opacity = "0";
    isLocked = false;
    anim.cancel();
  });
}

onMounted(() => {
  const el = top.value;
  if (!el) return;

  function visible() {
    const scrollY = window.scrollY;
    const height = window.innerHeight;
    return scrollY > height / 2;
  }

  el.style.display = visible() ? "block" : "none";
  window.addEventListener(
    "scroll",
    () => {
      visible() ? fadeIn(el) : fadeOut(el);
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
}
.top {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;
  z-index: 600;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.top:hover {
  animation: bounce 1s ease-in-out infinite;
}
.top:active {
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
