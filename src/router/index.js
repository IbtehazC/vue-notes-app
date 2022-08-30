import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewEditNotes from "@/views/ViewEditNotes.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNotes,
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStats,
    },
    {
      path: "/edit/:id",
      name: "edit-note",
      component: ViewEditNotes,
    },
  ],
});

export default router;
