<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="container max-w-5xl mx-auto px-4 my-2">
    <form
      class="shadow-md rounded px-8 pt-6 pb-8 border border-gray-300"
      :class="`${bgColor}`"
    >
      <div class="mb-6">
        <label v-if="label" class="block text-gray-700 text-sm font-bold mb-2">
          {{ label }}
        </label>
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="notes"
          type="text"
          :placeholder="props.placeholder"
          ref="textareaRef"
          v-autofocus
        />
      </div>
      <div class="flex items-center gap-4">
        <slot name="buttons" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "../../directives/vAutofocus";

const textareaRef = ref(null);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "bg-white",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(["update:modelValue"]);

const focusTextarea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
