<script setup lang="ts">
const kategori = ref<object>({})
const rows = ref<object>([])

const fetchKategori = async () => {
  const res = await fetch('http://localhost:8080/api/reference/category', {
    method: 'GET',
  }).then(res => res.json())

  res.data.map((el: any) => (
    kategori.value = {
      ...kategori.value,
      [el.category_id]: el.name,
    }
  ))
}

const fetchSubKategori = async () => {
  await fetchKategori()
  const res = await fetch('http://localhost:8080/api/reference/sub_category', {
    method: 'GET',
  }).then(res => res.json())

  rows.value = res.data.map((el: any) => {
    const temp = {
      sub_category_id: Number(el.sub_category_id),
      category: kategori.value[el.category_id],
      name: el.name,
      created_at: useFormatDate(el.created_at).dateLong,
    }

    return temp
  })
}

onMounted(() => {
  fetchSubKategori()
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
                Nama Sub Kategori
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item of kategori" :key="item.category_id">
              <tr>
                <td class="bg-blue-50 py-1.5 px-4">
                  <b>{{ item }}</b>
                </td>
              </tr>
              <template v-for="row in rows" :key="row.sub_category_id">
                <tr v-if="row.category === item">
                  <td class="border-b border-slate-200 py-1.5 px-4">
                    {{ row.name }}
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
        <SkeletonDefault v-else />
      </div>
    </div>
  </div>
</template>
