<template>
  <div
    class="container max-w-5xl mt-4 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg"
  >
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="py-3 px-6">Stat</th>
          <th scope="col" class="py-3 px-6">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-50">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
          >
            Number of Notes
          </th>
          <td class="py-4 px-6">{{ notesStore.totalNotesCount }}</td>
        </tr>
        <tr class="bg-white border-b hover:bg-gray-50">
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
          >
            Number of Characters (all notes)
          </th>
          <td class="py-4 px-6">{{ notesStore.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="How is tour experience with notes app???"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { useNotesStore } from "../stores/notesStore";
import { vAutofocus } from "../directives/vAutofocus";

const notesStore = useNotesStore();
</script>
