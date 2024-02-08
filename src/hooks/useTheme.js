import { ref } from 'vue';
export default function () {
  const isDark = ref(true);
  const theme = ref('');
  const root = document.querySelector(':root');

  const toggleTheme = (toChangeTheme) => {
    theme.value = toChangeTheme;
    // console.log(`目前主題是${theme.value}`);
    //   const isDark = root?.classList.contains('dark');

    root.className = '';
    if (isDark.value) root?.classList.add('dark');
    if (theme.value === 'theme-default') {
      return;
    }
    root?.classList.add(theme.value);
  };
  const toggleDarkTheme = (state) => {
    // document.documentElement.classList.remove("dark");
    // localStorage.theme = "light" && this.toggleDarkMode();
    // theme.value = theme.value === 'light' ? 'dark' : 'light';
    isDark.value = state;
    isDark.value ? root.classList.add('dark') : root.classList.remove('dark');
  };

  return { toggleDarkTheme, toggleTheme };
}
