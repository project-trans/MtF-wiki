document.querySelectorAll('a[href^="mailto:"]').forEach((element) => {
  element.href = atob(element.href.replace(/^mailto:/, ''));
});
