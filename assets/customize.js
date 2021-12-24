document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (link === null || link.tagName !== 'A') return;
  if (link.hostname === location.hostname) return;
  event.preventDefault();
  event.stopPropagation();
  open(link.href);
});

document.querySelectorAll('a[data-email]').forEach((element) => {
  element.href = atob(element.dataset.email);
  delete element.dataset.email;
});
