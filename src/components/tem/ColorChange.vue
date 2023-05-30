<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
defineProps({
  position: {
    default: 'left-0',
    type: String,
  },
})
// const colorMode = useColorMode()
const availableColor = ref([
  {
    id: 1,
    name: 'system',
    icon: 'i-ph-laptop-duotone',
  },
  {
    id: 2,
    name: 'dark',
    icon: 'i-ph-moon-stars-duotone',
  },
  {
    id: 3,
    name: 'light',
    icon: 'i-ph-sun-dim-duotone',
  },
])
</script>

<template>
  <div>
    <Listbox
      v-model="$colorMode.preference"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        Theme
      </ListboxLabel>
      <ListboxButton type="button" title="Change Color">
        <div
          class="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark"
        >
          <UnoIcon :class="availableColor.filter(key => key.name === $colorMode.value)[0].icon" class="text-md dark:text-white" />
        </div>
      </ListboxButton>
      <ListboxOptions
        :class="position"
        class="absolute top-full z-[999] mt-2 w-40 !-left-32 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <ListboxOption
          v-for="color in availableColor"
          :key="color.id"
          :value="color.name"
          class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
          :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              $colorMode.preference === color.name,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              $colorMode.preference !== color.name,
          }"
        >
          <span class="truncate capitalize">
            {{ color.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <UnoIcon :class="color.icon" class="text-base" />
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
