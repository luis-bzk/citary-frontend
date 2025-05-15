export function applyTheme(darkMode: boolean) {
  const html = document.documentElement;
  console.log({ html });
  if (darkMode) {
    html.classList.add('dark');
    html.classList.remove('light');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
  }
}
