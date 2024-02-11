<template>
  <div class="container">
    <div class="mb-8">
      施工暫存導覽區
      <nav>
        <RouterLink to="/base" class="px-4">
          <Button variant="btn1"> 設計稿基礎設定頁 </Button>
        </RouterLink>
        <RouterLink to="/loading" class="px-4">
          <Button variant="btn1"> loading動畫 </Button>
        </RouterLink>
      </nav>
    </div>
    <p>尋找讓你 <br />難忘的演唱會， <br />前進每個感動的瞬間</p>
  </div>

  <div class="md:text-center">
    <div class="font-lato-display display-title drop-shadow-light">CONCERT NOW</div>
  </div>

  <div class="container">
    <Button variant="btn1" class="bg-primary">主題色</Button>
  </div>
</template>
<script setup>
import { Button } from '@/components/ui/button';
</script>

<script>
export default {};
</script>
