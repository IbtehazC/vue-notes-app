<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef" label="Add New Note">
      <template #buttons>
        <button
          @click.prevent="addNote"
          class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuid } from "uuid";
import { useNotesStore } from "@/stores/notesStore";

import Note from "@/components/Notes/Note.vue";
import AddEditNote from "../components/Notes/AddEditNote.vue";

const storeNotes = useNotesStore();
const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  let id = uuid();
  storeNotes.addNote(id, newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
</script>
