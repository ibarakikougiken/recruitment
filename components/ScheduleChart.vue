<script setup lang="ts">
type Schedule = {
  title: string;
  start: number;
  end: number;
};

const month = ref<string[]>([]);
const schedules = ref<Schedule[]>([]);

const data: Schedule[] = [
  { title: "新歓祭", start: 4, end: 4 },
  { title: "科学の祭典", start: 5, end: 10 },
  { title: "こうがく祭", start: 10, end: 11 },
  { title: "茨苑祭", start: 10, end: 11 },
  { title: "ドローン・RC機製作", start: 4, end: 3 },
  { title: "ドローン教室", start: 4, end: 3 },
];

onMounted(() => {
  month.value = [];
  for (let i = 4; i <= 12 + 3; i++) {
    month.value.push(`${i % 12 || 12}月`);
  }
  for (const d of data) {
    schedules.value.push({
      title: d.title,
      start: (d.start + 12 - 4) % 12,
      end: (d.end + 12 - 4) % 12,
    });
  }
});
</script>

<template>
  <div class="chart">
    <div class="months">
      <div v-for="m in month" :key="m" class="month">{{ m }}</div>
    </div>
    <div class="schedules">
      <div
        class="schedule"
        v-for="s in schedules"
        :key="s.title"
        :style="{
          gridColumn: `${s.start + 1} / span ${s.end - s.start + 1}`,
        }"
      >
        {{ s.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
.months,
.schedules {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 5rem);
  grid-auto-rows: 3rem;
}
.month,
.schedule {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  margin-bottom: -1px;
  margin-right: -1px;
}
</style>
