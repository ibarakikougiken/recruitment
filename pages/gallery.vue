<script setup lang="ts">
import { NuxtImg } from "#components";

useHead({
  title: "ギャラリー",
  meta: [
    {
      name: "description",
      content: "航空技術研究会の活動写真や動画を掲載しています。",
    },
  ],
});

const video = ref<{ player: YT.Player | undefined } | null>(null);
const muted = useMute();

watch(muted, (value) => {
  const { player } = video.value!;
  if (value) {
    player?.mute();
  } else {
    player?.unMute();
  }
});

onMounted(() => {
  // const { player } = video.value!;
  // muted && player?.mute();
  // player?.seekTo(0, true);
  // player?.playVideo();
  // player?.addEventListener("onReady", () => {
  //   player?.playVideo();
  // });
});

const images = [
  {
    path: "logo.png",
    alt: "航空技術研究会のロゴ",
  },
  {
    path: "/drone.jpg",
    alt: "空を飛ぶ DJI Phantom 4 Advance",
  },
  {
    path: "flyer1.png",
    alt: "新歓祭チラシ",
  },
  {
    path: "hot_air_balloon.png",
    alt: "熱気球同好会",
  },
  {
    path: "flyer2.png",
    alt: "新歓祭チラシ",
  },
  {
    path: "kagakunosaiten.jpg",
    alt: "科学の祭典日立大会の様子",
  },
  {
    path: "flyer3.png",
    alt: "新歓祭チラシ",
  },
  {
    path: "servo.rs.jpg",
    alt: "サーボモーターを回すプログラム",
  },
];
</script>

<template>
  <div>
    <ScriptYouTubePlayer
      ref="video"
      class="video"
      video-id="QSbKgX8El1k"
      :player-vars="{
        /**
         * @see https://developers.google.com/youtube/player_parameters#Parameters
         */
        controls: 0, // Hide the video controls
        autoplay: 1, // Autoplay the video
        loop: 1, // Loop the video
        rel: 0, // Hide related videos
        enablejsapi: 1, // Enable the JS API
        playlist: 'QSbKgX8El1k', // Needed for the loop
        disablekb: 1, // Disable keyboard controls
        fs: 0, // Disable fullscreen
        iv_load_policy: 3, // Disable annotations
        mute: muted ? 1 : 0, // Mute the video
      }"
      trigger="visible"
    />

    <div class="images">
      <NuxtImg
        v-for="image in images"
        :key="image.path"
        :src="image.path"
        :alt="image.alt"
        format="webp"
        class="image"
      />
    </div>
  </div>
</template>

<style scoped>
.video {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
.images {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.images .image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-position: center;
  object-fit: contain;
  -webkit-user-drag: none;
  user-select: none;
}
</style>
