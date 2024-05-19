<template>
  <Tabs>
    <template #tab1>
      <section class="container">
        <NuxtImg src="/assets/images/content.png"/>
      </section>
    </template>
    <template #tab2>
        <section class="container">
        <div>
          <h2>Tab 1 Content</h2>
          <p>Content for Tab 1.</p>
        </div>
      </section>
    </template>
  </Tabs>
  <NuxtImg src="/assets/images/content.png" />
</template>

<script>
import { NuxtImg } from "#build/components";

export default {
  components: { NuxtImg },
};
</script>

<style></style>
