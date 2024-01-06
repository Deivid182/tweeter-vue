<script setup>
import { HomeIcon, HashtagIcon, BellIcon, UserIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserCircleIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline"

const { defaultTransition } = useTailwindConfig();
</script>
<template>
  <div class="h-screen flex flex-col">
    <NuxtLink
      :class="defaultTransition"
      class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20"
      to="/"
    >
      <div class="w-8 h-8 flex items-center justify-center">
        <LogoTweeter />
      </div>
    </NuxtLink>
    <div class="mt-2 space-y-4">
      <SidebarLeftTab>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name>Explore </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>Bookmarks </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>Notifications </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name>Messages </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <UserCircleIcon />
        </template>
        <template v-slot:name>Profile </template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template v-slot:name>More </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>
