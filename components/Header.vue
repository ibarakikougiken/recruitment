<script setup lang="ts">
import ShuffleText from "shuffle-text";

const muted = useMute();

const menu_open = ref(false);

const links = [
  { to: "/about", text: "About" },
  { to: "/gallery", text: "Gallery" },
  { to: "/join", text: "Join" },
];

const elements = ref<HTMLElement[]>([]);
onMounted(() => {
  for (const el of elements.value) {
    const element = el.firstChild as HTMLElement;
    const shuffleText = new ShuffleText(element);
    function start() {
      shuffleText.isRunning || shuffleText.start();
    }

    element.addEventListener("mouseenter", () => {
      start();
    });
    element.addEventListener(
      "touchstart",
      () => {
        start();
      },
      { passive: true },
    );
  }
});
</script>

<template>
  <header>
    <div class="container">
      <NuxtLink class="name" to="/">
        <span class="main">
          <span class="univ">茨城大学</span>
          <span class="club">航空技術研究会</span>
        </span>
        <span class="sub">新歓特設サイト</span>
      </NuxtLink>
      <nav>
        <ul>
          <li v-for="link in links" :key="link.to" ref="elements">
            <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="buttons">
      <button
        class="mute"
        :title="muted ? 'ミュートを解除' : 'ミュート'"
        @click="muted = !muted"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          fill="none"
          viewBox="0 0 24 24"
        >
          <desc v-if="muted">ミュートを解除</desc>
          <desc v-else>ミュート</desc>
          <title v-if="muted">ミュートを解除</title>
          <title v-else>ミュート</title>
          <g v-if="muted">
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16V8h3l5-4v16l-5-4H3Zm11.5-1 6-6m-6 0 6 6"
            />
          </g>
          <g v-else>
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16V8h3l5-4v16l-5-4H3Zm10-7s2 .5 2 3-2 3-2 3m2-8s3 .833 3 5-3 5-3 5"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 5s4 1.167 4 7-4 7-4 7"
            />
          </g>
        </svg>
      </button>
      <button
        :title="menu_open ? 'メニューを閉じる' : 'メニューを開く'"
        class="menu"
        @click="menu_open = !menu_open"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2rem"
          height="2rem"
          viewBox="0 0 24 24"
        >
          <desc v-if="menu_open">メニューを閉じる</desc>
          <desc v-else>メニューを開く</desc>
          <path
            v-if="menu_open"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path v-else d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </button>
    </div>
    <Menu v-if="menu_open" @close_menu="menu_open = false" />
  </header>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: stretch;
  align-items: center;
  background-color: #fff;
  color: #333;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem;
  border-bottom: 1px solid #333;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  margin: 0;
  margin-right: clamp(1rem, 1vw, 6rem);
  padding: 0 1rem;
  user-select: none;
}

.name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #333;
  transition: 0.2s;
  cursor: pointer;
}
@media (hover: none) {
  .name:active {
    animation: shake 0.5s infinite ease-in-out both running;
  }
}
@media (hover: hover) {
  .name:hover {
    animation: shake 0.5s infinite ease-in-out both running;
  }
}
.name .main {
  font-size: 1.5rem;
  font-weight: bold;
}
.name .sub {
  font-size: 1rem;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  list-style: none;
}
nav ul li {
  margin: 0;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul li a {
  display: block;
  text-decoration: none;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  text-align: center;
  overflow: hidden;
  color: #333;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
  z-index: 1000;
}
button {
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  border: 1px solid #333;
  border-radius: 12%;
  padding: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}
@media (hover: none) {
  button:active {
    border-radius: 50%;
    animation: route 0.5s alternate;
  }
}
@media (hover: hover) {
  button:hover {
    border-radius: 50%;
    animation: route 0.5s alternate;
  }
}

@media (max-width: 1000px) {
  .container nav {
    display: none;
  }
}
@media (max-width: 520px) {
  .container {
    gap: 1rem;
  }
  .name {
    padding: 0.5rem;
  }
  .univ {
    display: none;
  }
}
@media (max-width: 420px) {
  .name .main {
    font-size: 1.2rem;
  }
  .name .sub {
    font-size: 0.8rem;
  }
}

@keyframes route {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
