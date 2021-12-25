document.querySelectorAll('a[href]').forEach((link) => {
  if (!/^https?:$/.test(link.protocol)) return;
  if (link.hostname === location.hostname) return;
  link.target = '_blank';
});

document.querySelectorAll('a[data-email]').forEach((element) => {
  element.href = atob(element.dataset.email);
  delete element.dataset.email;
});
