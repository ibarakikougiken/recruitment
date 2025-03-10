<script setup lang="ts">
const meta = useDefaultSeoMeta({
  title: "ギャラリー",
  description: "航空技術研究会の活動写真や動画を掲載しています。",
});
useSeoMeta(meta);

const video = ref<{ player: YT.Player } | null>(null);
const muted = useMute();

watch(muted, (value) => {
  const { player } = video.value!;
  if (value) {
    player?.mute();
  } else {
    player?.unMute();
  }
});

function onPlayerReady() {
  const player = video.value?.player as YT.Player;
  if (!player) return;
  player.setPlaybackQuality("hd1080");
  player.playVideo();
}

const images = [
  {
    path: "logo.png",
    alt: "航空技術研究会のロゴ",
  },
  {
    path: "drone.jpg",
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

const path = (image: string) => `/recruitment/images/${image}`;
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
        loop: 1, // Loop the video
        rel: 0, // Hide related videos
        controls: 0, // Hide the controls
        enablejsapi: 1, // Enable the JS API
        mute: muted ? 1 : 0, // Mute the video
        iv_load_policy: 3, // Disable annotations
        playlist: 'QSbKgX8El1k', // Needed for the loop
      }"
      :width="1920"
      :height="1080"
      @ready="onPlayerReady"
      trigger="visible"
    />

    <div class="images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="path(image.path)"
        :alt="image.alt"
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
