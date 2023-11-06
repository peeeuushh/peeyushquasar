<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> My Profile </q-toolbar-title>
        <!--
        <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Know About Me </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Profile",
    // caption: "",
    icon: "account_circle",
    link: "http://localhost:8081/#/peeyush",
  },
  {
    title: "Education Background",
    // caption: "",
    icon: "school",
    link: "http://localhost:8081/#/peeyush/education_background",
  },
  {
    title: "Technical Skills",
    // caption: "",
    icon: "school",
    link: "http://localhost:8081/#/peeyush/Technical_skills",
  },
  {
    title: "Hobbies & Interests",
    // caption: "github.com/quasarframework",
    icon: "favorite",
    link: "http://localhost:8081/#/peeyush/Hobbies_interest",
  },
  {
    title: "Contact Information",
    // caption: "@quasarframework",
    icon: "account_circle",
    link: "http://localhost:8081/#/peeyush/Contact_info",
  },
  {
    title: "LinkedIn",
    // caption: "chat.quasar.de",
    icon: "public",
    link: "https://www.linkedin.com/in/peeyush-yadav-33910b1bb/",
  },
  {
    title: "Github",
    // caption: "forum.quasar.dev",
    icon: "code",
    link: "https://github.com/peeeuushh",
  },

  // {
  //   title: "Facebook",
  //   caption: "@QuasarFramework",
  //   icon: "public",
  //   link: "https://facebook.quasar.dev",
  // },
  // {
  //   title: "Quasar Awesome",
  //   caption: "Community Quasar projects",
  //   icon: "favorite",
  //   link: "https://awesome.quasar.dev",
  // },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
