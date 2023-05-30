<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '~/locales/availableLocales'

defineProps({
  position: {
    default: 'left-0',
    type: String,
  },
})
const { locale } = useI18n()
const localeUserSetting = useCookie('librify_i18n_redirected')

watch(localeUserSetting, () => {
  locale.value = <string>localeUserSetting.value
})

onMounted(() => {
  setCookie('i18n_redirected', 'id-ID', 365)
  locale.value = 'id-ID'
})
</script>

<template>
  <div>
    <Listbox
      v-model="localeUserSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        Theme
      </ListboxLabel>
      <ListboxButton type="button" title="Change Language">
        <div
          class="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark"
        >
          <UnoIcon :class="locale === 'en-US' ? 'i-twemoji-flag-us-outlying-islands' : 'i-twemoji-flag-indonesia'" class=" text-md dark:text-white" />
        </div>
      </ListboxButton>
      <ListboxOptions
        class="absolute top-full !-left-32 z-[999] mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
          :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              locale === lang.iso,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              locale !== lang.iso,
          }"
        >
          <span class="truncate">
            {{ lang.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <UnoIcon :class="lang.flag" class="text-base" />
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
