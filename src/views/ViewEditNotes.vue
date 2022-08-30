<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="bg-blue-400"
      placeholder="Edit note"
      label="Edit Notes"
    >
      <template #buttons>
        <buttons
          @click="handleSaveClicked"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded hover:cursor-pointer"
        >
          Save
        </buttons>
        <button
          @click="$router.back()"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        >
          Cancel
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useNotesStore } from "../stores/notesStore";

import AddEditNote from "../components/Notes/AddEditNote.vue";
import router from "../router";
const notesStore = useNotesStore();

const noteContent = ref("");

const route = useRoute();

noteContent.value = notesStore.getNoteContent(route.params.id);

const handleSaveClicked = () => {
  notesStore.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
