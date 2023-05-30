<template>
  <div class="p-6 bg-white dark:bg-dark">
    <div v-for="i in 10" :key="i" class="flex  py-[1px] gap-1 ">
      <div class="h-10 rounded w-full animate-pulse bg-slate-200" />
    </div>
  </div>
</template>
