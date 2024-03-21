<template>
  <nav class="container">
    <ul class="uppercase">
      <li class="footer-nav flex flex-col border-b-2 border-black-80 py-6" v-for="item in footNavList" :key="item.enTitle">
        <RouterLink :to="item.href" class="flex justify-between items-end w-full">
          <div class="flex flex-col lg:flex-row">
            <div class="pt-0 md:pt-4 text-sm lg:text-4xl lg:order-2">{{ item.title }}</div>
            <div class="text-5xl font-lato lg:font-lato-display3 lg:order-1 lg:me-5">{{ item.enTitle }}</div>
          </div>
          <ArrowDownRight class="footer-nav-arrow size-10 lg:size-24" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ArrowDownRight } from 'lucide-vue-next';
export default {
  components: { ArrowDownRight },
  data() {
    return {
      footNavList: [
        {
          title: '演唱會',
          enTitle: 'CONCERTS',
          href: '/concerts',
        },
        {
          title: '表演者',
          enTitle: 'ARTISTS',
          href: '/artists',
        },
        {
          title: '場地',
          enTitle: 'VENUE',
          href: '/venues',
        },
        {
          title: '關於我們',
          enTitle: 'ABOUT US',
          href: '/about',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.footer-nav {
  transition: border 0.3s ease;
  overflow: hidden;
  &:hover {
    border-bottom: 10px solid #fff;
    .footer-nav-arrow {
      animation: translateDownUp 0.5s ease-in-out;
    }
  }
}

@keyframes translateDownUp {
  0% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
  30% {
    opacity: 0;
    transform: translate(100%, 100%);
  }
  70% {
    opacity: 0;
    transform: translate(-20%, -20%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
}
</style>
