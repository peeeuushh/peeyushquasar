const routes = [
  {
    path: "/peeyush",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/my_profile.vue") }],
  },
  {
    path: "/peeyush",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "education_background",
        component: () => import("pages/education_background.vue"),
      },
    ],
  },
  {
    path: "/peeyush",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Technical_skills",
        component: () => import("pages/Technical_skills.vue"),
      },
    ],
  },
  {
    path: "/peeyush",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Hobbies_interest",
        component: () => import("pages/Hobbies_interest.vue"),
      },
    ],
  },
  {
    path: "/peeyush",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Contact_info",
        component: () => import("pages/Contact_info.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
