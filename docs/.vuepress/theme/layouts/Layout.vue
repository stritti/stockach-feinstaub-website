<template>
  <Layout>
    <template #page-bottom>
      <div class="theme-default-content">
        &copy; 2021, Feinstaub in Stockach
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>