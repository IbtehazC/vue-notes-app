import { defineStore } from "pinia";

export const useNotesStore = defineStore("notesStore", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officia possimus culpa beatae facilis? Quo iusto deleniti repellendus, aut saepe in ratione necessitatibus odit a veritatis porro molestias tempora officia.",
        },
        {
          id: "id2",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officia possimus culpa beatae facilis? Quo iusto deleniti repellendus, aut saepe in ratione necessitatibus odit a veritatis porro molestias tempora officia.",
        },
        {
          id: "id3",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci officia possimus culpa beatae facilis? Quo iusto deleniti repellendus, aut saepe in ratione necessitatibus odit a veritatis porro molestias tempora officia.",
        },
      ],
    };
  },
  actions: {
    addNote(id, newNote) {
      console.log(newNote);
      let note = {
        id,
        content: newNote,
      };
      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
