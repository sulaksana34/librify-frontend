<script setup lang="ts">
const rows = ref<object>([])

const fetchKategori = async () => {
  const res = await fetch('http://localhost:8080/api/reference/category', {
    method: 'GET',
  }).then(res => res.json())

  rows.value = res.data.map((el: any) => {
    const temp = {
      category_id: Number(el.category_id),
      name: el.name,
      created_at: useFormatDate(el.created_at).dateLong,
    }

    return temp
  })
}

onMounted(() => {
  fetchKategori()
})
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
      <div class="w-full">
        <table v-if="rows.length > 0" class="w-full">
          <thead>
            <tr>
              <th class="bg-orange-300 py-1.5">
                Nama Kategori
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.category_id">
              <td class="border-b border-slate-200 py-1.5 px-4">
                {{ row.name }}
              </td>
            </tr>
          </tbody>
        </table>
        <SkeletonDefault v-else />
      </div>
    </div>
  </div>
</template>
