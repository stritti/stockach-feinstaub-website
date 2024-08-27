<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="theme-default-content">
        &copy; 2021-{{ currentYear }}, Feinstaub in Stockach |
        <a href="/impressum.html">Impressum</a> |
        <a href="/datenschutz.html">Datenschutz</a>
      </div>
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear());
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>