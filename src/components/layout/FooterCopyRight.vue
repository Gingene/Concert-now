<template>
  <footer class="container py-6">
    <nav id="sns" class="mb-6 lg:mb-10">
      <ul class="flex justify-end space-x-2">
        <li v-for="item in socialIcon" :key="item.icon">
          <a href="#" target="_blank" class="inline-flex justify-center items-center size-10">
            <font-awesome-icon :icon="item.icon" class="text-xl" />
          </a>
        </li>
      </ul>
    </nav>
    <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:justify-between lg:items-end">
      <div class="lg:order-3">
        <a href="#" class="underline me-6">隱私權政策</a>
        <a href="#" class="underline">智慧財產權</a>
      </div>
      <div class="lg:order-2">
        <p>Copyright © 2024</p>
      </div>
      <div class="lg:order-1">
        <p>
          本網站為作品集，僅用來學習，非商業用途。<br />
          創作者：宗豪、銀光菇、Celine 510、Celine
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      socialIcon: [
        {
          icon: 'fa-brands fa-facebook',
        },
        {
          icon: 'fa-brands fa-line',
        },
        {
          icon: 'fa-brands fa-instagram',
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
