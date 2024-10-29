// #region anchor
(() => {
  window.addEventListener("hashchange", onHashChange, { capture: true });
  document.addEventListener("DOMContentLoaded", onHashChange);
  document.addEventListener("click", onLinkClick, { capture: true });

  function onHashChange() {
    if (!location.hash) return;
    const navbar = document.querySelector(".navbar__wrapper");
    const element = document.querySelector(decodeURIComponent(location.hash));
    const rect = element.getBoundingClientRect();
    const marginTop = Number.parseInt(getComputedStyle(element).marginTop, 10);
    scrollTo({
      top: rect.top + scrollY - marginTop - navbar.clientHeight,
      behavior: "smooth",
    });
  }

  function onLinkClick(event) {
    const target = event.target;
    if (target.tagName !== "A") return;
    if (!target.classList.contains("anchor")) return;
    event.preventDefault();
    event.stopPropagation();
    history.replaceState(undefined, document.title, target.href);
    onHashChange();
  }
})();
// #endregion

document.querySelectorAll("a[href]").forEach((link) => {
  if (!/^https?:$/.test(link.protocol)) return;
  if (link.hostname === location.hostname) return;
  link.target = "_blank";
});

document.querySelectorAll("a[data-email]").forEach((element) => {
  element.href = atob(element.dataset.email);
  delete element.dataset.email;
});

// #region weixin media platform qrcode

document.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName !== "A") return;
    if (event.target.hostname !== "open.weixin.qq.com") return;
    event.preventDefault();
    event.stopPropagation();
    const qrcode = document.createElement("img");
    qrcode.src = event.target.href;
    qrcode.width = 430;
    qrcode.height = 430;
    swal(event.target.title, { content: qrcode });
  },
  { capture: true }
);

// #endregion

// #region hidden photo

document.addEventListener(
  "click",
  (event) => {
    // if (!event.target.classList.contains("mask")) return;
    const photo = event.target.closest(".hidden-photo");
    if (!photo) return;
    photo.classList.toggle("show");
  },
  { capture: true }
);

// #endregion

document.querySelectorAll("table").forEach((table) => {
  if (table.hasAttribute("merge")) tableMerge(table.rows);
});

function tableMerge(rows) {
  const refs = new Map();
  // Merge cells in a *column* first.
  for (let cellIndex = 0; cellIndex < rows[0].cells.length; cellIndex++) {
    for (let rowIndex = 1; rowIndex < rows.length; rowIndex++) {
      const cell = rows[rowIndex].cells[cellIndex];
      const prevCell = rows[rowIndex - 1].cells[cellIndex];
      if (cell.innerHTML !== prevCell.innerHTML) continue;
      const mergedTo = refs.get(prevCell) || prevCell;
      refs.set(cell, mergedTo);
      mergedTo.rowSpan += cell.rowSpan;
      cell.hidden = true;
    }
  }
  // Merge cells in a *row* then.
  for (const row of rows) {
    for (let cellIndex = 1; cellIndex < row.cells.length; cellIndex++) {
      const cell = row.cells[cellIndex];
      const prevCell = row.cells[cellIndex - 1];
      if (refs.has(cell) || refs.has(prevCell)) continue;
      if (cell.innerHTML !== prevCell.innerHTML) continue;
      const mergedTo = refs.get(prevCell) || prevCell;
      if (cell.rowSpan !== mergedTo.rowSpan) continue;
      mergedTo.colSpan += cell.colSpan;
      refs.set(cell, mergedTo);
      cell.hidden = true;
    }
  }
  for (const cell of refs.keys()) {
    cell.remove();
  }
  refs.clear();
}

// #turn grey on 20th november
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  if (today.getMonth() === 10 && today.getDate() === 20) {
    document.body.classList.add("memorial");
  }
});
