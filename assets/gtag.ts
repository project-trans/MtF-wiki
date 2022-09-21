export {};

declare global {
  interface Window {
    dataLayer: IArguments[];
  }
}

const IDENTIFY = "G-N24RP9JT2Q";

self.dataLayer = self.dataLayer || [];

gtag("js", new Date());
gtag("config", IDENTIFY);
restoreClientID();

loadScript("https://www.googletagmanager.com/gtag/js?id=" + IDENTIFY);

function gtag(method: string, ...params: unknown[]): void {
  self.dataLayer.push(arguments);
}

function restoreClientID() {
  const KEY = "GA:CLIENT-ID";
  const clientId = sessionStorage.getItem(KEY);
  if (clientId) {
    gtag("set", "client_id", clientId);
  } else {
    gtag("get", IDENTIFY, "client_id", (client_id: string) => {
      sessionStorage.setItem(KEY, client_id);
    });
  }
}

function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const element = document.createElement("script");
    element.src = src;
    element.async = true;
    element.defer = true;
    element.addEventListener("load", resolve);
    element.addEventListener("error", reject);
    document.head.appendChild(element);
  });
}
