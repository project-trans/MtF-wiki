document.querySelectorAll("a[href]").forEach((link) => {
  if (!/^https?:$/.test(link.protocol)) return;
  if (link.hostname === location.hostname) return;
  link.target = "_blank";
});

document.querySelectorAll("a[data-email]").forEach((element) => {
  element.href = atob(element.dataset.email);
  delete element.dataset.email;
});

document.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName !== "A") return
    if (event.target.hostname !== "open.weixin.qq.com") return
    event.preventDefault();
    event.stopPropagation();
    const qrcode = document.createElement("img");
    qrcode.src = event.target.href;
    qrcode.width = 430;
    qrcode.height = 430;
    swal(event.target.title, { content: qrcode })
  },
  { capture: true },
);

function showHiddenPhoto(elem) {
  elem.classList.add('show');
}
