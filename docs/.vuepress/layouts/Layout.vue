<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="theme-default-content">
        &copy; 2021-2022, Feinstaub in Stockach |
        <a href="/impressum.html">Impressum</a> |
        <a href="/datenschutz.html">Datenschutz</a>
      </div>
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>