<template>
  <div class="container">
    <div
      class="flex justify-between items-end p-8 my-6 rounded-[40px] h-64 bg-cover bg-center bg-black/50 bg-blend-multiply"
      style="
        background-image: url('https://images.unsplash.com/photo-1699865575415-4ef0db078a4a?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      ">
      <div
        class="relative rounded-full w-[150px] h-[150px] bg-white/25 bg-[length:100px] bg-center bg-no-repeat"
        style="background-image: url('https://blush.design/api/download?shareUri=kK-78nEmrjoy3GoG&c=Skin_0%7Effdbb4&w=300&h=300&fm=png')">
        <h2 class="absolute -bottom-5 left-20 text-nowrap">Celine Lin</h2>
      </div>
      <p class="text-gray-400 tracking-wider">since 2024</p>
      <HoverCard>
        <HoverCardTrigger>
          <Info />
        </HoverCardTrigger>
        <HoverCardContent class="w-[160px] text-center"> 警告次數：2 </HoverCardContent>
      </HoverCard>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6 mb-12">
      <Card class="bg-shadow-trans-text rounded-[40px] border-black-60 p-3 relative">
        <span class="font-lato-display3 text-stroke opacity-20 absolute bottom-20 left-5 -rotate-12">ARTISTS</span>
        <CardHeader>
          <CardTitle>追蹤表演者列表</CardTitle>
          <CardDescription>追蹤數：3</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge v-for="artist in artists" :key="artist.id" class="badge touch-pinch-zoom">
            {{ artist.name }}
          </Badge>
        </CardContent>
      </Card>
      <Card class="bg-shadow-trans-text rounded-[40px] border-black-60 p-3 pb-8 relative">
        <span class="font-lato-display3 text-stroke opacity-20 absolute bottom-20 left-5 -rotate-12">CONCERTS</span>
        <CardHeader>
          <CardTitle>收藏演唱會列表</CardTitle>
          <CardDescription>收藏數：{{ concerts.length }}</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea class="h-[300px] w-full">
            <div v-for="concert in concerts" :key="concert.id" class="flex gap-4 p-5 flex-row justify-between rounded-[30px] hover:bg-accent/75 hover:cursor-pointer">
              <Bookmark color="#42dfc8" fill="#42dfc8" />
              <div class="basis-3/4">
                {{ concert.title }}
              </div>
              <div class="basis-1/6">{{ concert.date }}</div>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
<script setup>
import { Bookmark, Info } from 'lucide-vue-next';
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
</script>
<script>
export default {
  data() {
    return {
      concerts: [
        {
          id: 1,
          title: 'Tom Jones湯姆瓊斯演唱會2024台北站',
          date: '2024-03-12',
        },
        {
          id: 2,
          title: '2023 Apink FANCONCERT in Taipei [Pink drive]',
          date: '2023-04-01',
        },
        {
          id: 3,
          title: 'FTISLAND演唱會2024台北站',
          date: '2024-02-18',
        },
        {
          id: 4,
          title: '理想混蛋【奇異點 BESTRANGE】演唱會 高雄場',
          date: '2024-01-27',
        },
        {
          id: 5,
          title: '溫蒂漫步 Wendy Wander 2024 Tour “Midnight Wandering 午夜漫遊“',
          date: '2024-01-27',
        },
      ],
      artists: [
        {
          id: 1,
          name: 'Tom Jones',
        },
        {
          id: 2,
          name: 'Apink',
        },
        {
          id: 3,
          name: 'FTIsland',
        },
        {
          id: 4,
          name: '理想混蛋',
        },
        {
          id: 5,
          name: '溫蒂漫步',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.badge {
  border: 2px solid gray;
  padding: 5px 20px;
  margin: 5px;
  &:hover {
    background-color: #d29bf1;
    color: black;
    cursor: pointer;
    border: 2px solid transparent;
    transform: translateX(-3px) translateY(-3px);
  }
}
</style>
