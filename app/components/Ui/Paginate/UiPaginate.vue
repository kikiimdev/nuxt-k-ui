<script setup lang="ts">
import type { UiInputSelectItem } from "../Input/Select/UiInputSelectBase.vue";

const props = defineProps<{
  paginate: any;
}>();

const takeOptions: UiInputSelectItem[] = [
  {
    label: "10",
    value: 10,
  },
  {
    label: "25",
    value: 25,
  },
  {
    label: "50",
    value: 50,
  },
  {
    label: "100",
    value: 100,
  },
];
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-nowrap items-center gap-2">
      <div class="text-sm">
        Total: <strong>{{ displayNumber(paginate.total) }}</strong>
      </div>
      <div>
        <UiInputSelect
          input-class="input-sm -mt-3"
          dropdown-class="dropdown-top"
          :items="takeOptions"
          v-model="paginate.take"
        />
      </div>
    </div>
    <div class="join">
      <button
        class="join-item btn btn-sm bg-base-100"
        :disabled="paginate.disabledPrevButton"
        @click="paginate.prevPage()"
      >
        <Icon name="lucide:arrow-left" />
      </button>
      <button class="join-item btn btn-sm bg-base-100">
        Page {{ displayNumber(paginate.page) }} /
        {{ displayNumber(paginate.totalPage) }}
      </button>
      <button
        class="join-item btn btn-sm bg-base-100"
        :disabled="paginate.disabledNextButton"
        @click="paginate.nextPage()"
      >
        <Icon name="lucide:arrow-right" />
      </button>
    </div>
  </div>
</template>

<style></style>
