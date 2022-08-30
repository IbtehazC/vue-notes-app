<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container max-w-5xl mx-auto px-4 my-2">
    <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
      <div class="flex items-baseline"></div>
      <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
        {{ note.title }}
      </h4>
      <div class="mt-1">
        {{ note.content }}
        <div class="text-right">
          <small class="text-gray-400">{{ characterLength }}</small>
        </div>
      </div>
      <div class="flex justify-between mt-4 gap-4">
        <RouterLink
          :to="`/edit/${note.id}`"
          class="w-full hover:text-gray-700 text-gray-500 font-semibold py-2 px-4"
        >
          Edit
        </RouterLink>
        <button
          @click.prevent="modals.deleteNote = !modals.deleteNote"
          class="w-full hover:text-gray-700 text-gray-500 font-semibold py-2 px-4"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  <ModalDeleteNote v-if="modals.deleteNote" :note="note" />
</template>

<script setup>
import { computed, reactive } from "vue";
import { useNotesStore } from "../../stores/notesStore";

import ModalDeleteNote from "./ModalDeleteNote.vue";

// eslint-disable-next-line no-unused-vars
const notesStore = useNotesStore();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  let description = props.note.content.length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

const modals = reactive({
  deleteNote: false,
});
</script>
