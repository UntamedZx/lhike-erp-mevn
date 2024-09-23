import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref('light'); // default theme

  const setTheme = (theme) => {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return { currentTheme, setTheme };
});