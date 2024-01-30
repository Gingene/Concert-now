<template lang="">
  <div class="flex flex-col items-center">
    <h1>這是首頁</h1>
    <div class="mb-4">
      <Button @click="toggleDarkMode">切換模式</Button>
      <Button @click="toggleDarkMode" variant="destructive">切換模式</Button>
      <Button @click="toggleDarkMode" variant="outline">切換模式</Button>
      <Button @click="toggleDarkMode" variant="secondary">切換模式</Button>
      <Button @click="toggleDarkMode" variant="ghost">切換模式</Button>
      <Button @click="toggleDarkMode" variant="link">切換模式</Button>
      <Button @click="getConcerts">test</Button>
    </div>
    <div>
      <Select v-model="theme">
        <SelectTrigger>
          <SelectValue placeholder="切換主題" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="theme-default"> Default </SelectItem>
            <SelectItem value="theme-violet"> Violet </SelectItem>
            <SelectItem value="theme-green"> Green </SelectItem>
            <SelectItem value="theme-blue"> Blue </SelectItem>
            <SelectItem value="theme-red"> Red </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </div>
  <div>
    {{ concerts }}
  </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
</script>
<script>
import { mapState, mapActions } from 'pinia';
import { concertStore } from '@/stores/concerts';
export default {
  inject: ['http', 'path'],
  data() {
    return {
      theme: '',
    };
  },
  methods: {
    toggleDarkMode() {
      // const body = document.body;
      // const isDark = body?.classList.contains("dark");
      // isDark ? body?.classList.remove("dark") : body?.classList.add("dark");
      const root = document.querySelector(':root');
      root?.classList.toggle('dark');
    },
    changeTheme(theme) {
      const root = document.querySelector(':root');
      if (!root) return;
      const isDark = root?.classList.contains('dark');

      root.className = '';
      if (isDark) root?.classList.add('dark');
      if (theme === 'theme-default') {
        return;
      }
      root?.classList.add(theme);
    },
    ...mapActions(concertStore, ['getConcerts']),
  },
  computed: {
    ...mapState(concertStore, ['concerts']),
  },
  watch: {
    theme(val) {
      this.changeTheme(val);
    },
  },
};
</script>
<style lang=""></style>
