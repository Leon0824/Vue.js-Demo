<script setup>
import { RouterView } from "vue-router";
import { NConfigProvider, NMessageProvider } from 'naive-ui';
</script>

<template>
  <n-config-provider inline-theme-disabled>
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
