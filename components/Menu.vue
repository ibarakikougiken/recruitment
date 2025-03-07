<script setup lang="ts">
import ShuffleText from "shuffle-text";

const emit = defineEmits(["close_menu"]);

const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/gallery", text: "Gallery" },
  { to: "/join", text: "Join" },
  { to: "/privacy-policy", text: "Privacy Policy" },
];

const elements = ref<HTMLElement[]>([]);
onMounted(() => {
  for (const el of elements.value) {
    const element = el.firstChild as HTMLElement;

    const shuffleText = new ShuffleText(element);
    function start() {
      shuffleText.isRunning || shuffleText.start();
    }

    element.addEventListener("mouseenter", start);
    element.addEventListener("touchstart", start);
  }
});
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.to" ref="elements">
        <NuxtLink :to="link.to" @click="emit('close_menu')">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  margin: 0;
  padding: 1rem 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #333;
  user-select: none;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
}

li {
  margin: 0 0.5rem;
}

a {
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
}
</style>
