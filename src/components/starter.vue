<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="mx-auto mt-4 max-w-sm">
    <div class="mb-10 flex items-center justify-between">
      <NuxtLink to="/">
        Librify
      </NuxtLink>
      <div class="flex space-x-2">
        <TemLanguageChange />
        <TemColorChange />
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div class="text-center">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Menu
              <UnoIcon
                class="i-ic-round-menu text-white-200 hover:text-white-100 -mr-1k ml-2 text-lg"
              />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <NuxtLink
                    to="kategori"
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    ]"
                  >
                    <UnoIcon
                      class="i-ic:baseline-12mp mr-2 text-lg text-violet-400"
                    />
                    Kategori
                  </NuxtLink>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <NuxtLink
                    to="sub_kategori"
                    class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                    :class="[
                      active ? 'bg-violet-500 text-white' : 'text-gray-900',
                    ]"
                  >
                    <UnoIcon
                      class="i-ic:baseline-12mp mr-2 text-lg text-violet-400"
                    />
                    Sub Kategori
                  </NuxtLink>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>
