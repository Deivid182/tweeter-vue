<script setup>
//provitional data
const whatsHappening = ref([
  { title: "SpaceX", count: "2.4k Tweets" },
  { title: "NFT", count: "1.4k Tweets" },
  { title: "#CodingIsFun", count: "3.4k Tweets" },
]);

const whosToFollow = ref([
  {
    name: "Elon Musk",
    username: "@elonmusk",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "John Doe",
    username: "@johndoe",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Dave Chen",
    username: "@davechen",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <SidebarRightPreviewCard title="What's happening">
        <SidebarRightPreviewCardItem
          v-for="item in whatsHappening"
          :key="item.title"
        >
          <div>
            <h2 class="font-bold text-gray-800 dark:text-primary">
              {{ item.title }}
            </h2>
            <p class="text-sm text-gray-800 dark:text-primary">
              {{ item.count }}
            </p>
          </div>
        </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
    </div>
    <div>
      <SidebarRightPreviewCard title="Who to follow">
        <SidebarRightPreviewCardItem
          v-for="item in whosToFollow"
          :key="item.name"
        >
          <div class="flex justify-between p-2">
            <div class="flex gap-3">
              <NuxtImg :src="item.image" alt="profile image" width="40" height="40" class="rounded-full object-contain"/>
              <div class="">
                <h4 class="font-bold text-gray-800 dark:text-primary">{{ item.name }}</h4>
                <p class="text-sm text-gray-800 dark:text-primary">
                  {{ item.username }}
                </p>
              </div>
            </div>
            <div class="flex flex-col mt-auto">
              <button type="button" class="bg-gray-100 text-sm leading-none font-semibold hover:bg-gray-300 text-gray-800 rounded-full px-4 py-2">
                Follow
              </button>
            </div>
          </div>
        </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>
    </div>
  </div>
</template>
