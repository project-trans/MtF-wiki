document.querySelectorAll('a[data-href]').forEach((element) => {
  element.href = atob(element.dataset.href);
  delete element.dataset.href;
})

