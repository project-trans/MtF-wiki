/* modify from https://github.com/Alex-D/Cookies-EU-banner/

The MIT License (MIT)

Copyright (c) 2015 Alexandre Demode

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

// jshint ignore:line
(function (root, factory, undefined) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    // root is window
    root.CookiesEuBanner = factory();
  }
})(window, function () {
  "use strict";

  var CookiesEuBanner,
    document = window.document;

  CookiesEuBanner = function (
    launchFunction,
    waitAccept,
    useLocalStorage,
    undefined
  ) {
    if (!(this instanceof CookiesEuBanner)) {
      return new CookiesEuBanner(launchFunction);
    }

    this.cookieTimeout = 2592000000; // 1 month in milliseconds
    this.bots = /bot|crawler|spider|crawling/i;
    this.cookieName = "hasConsent";
    this.trackingCookiesNames = [
      "__utma",
      "__utmb",
      "__utmc",
      "__utmt",
      "__utmv",
      "__utmz",
      "_ga",
      "_gat",
      "_gid",
    ];
    this.launchFunction = launchFunction;
    this.waitAccept = waitAccept || false;
    this.useLocalStorage = useLocalStorage || false;
    this.init();
  };

  CookiesEuBanner.prototype = {
    init: function () {
      // Detect if the visitor is a bot or not
      // Prevent for search engine take the cookie alert message as main content of the page
      var isBot = this.bots.test(navigator.userAgent);

      // Check if DoNotTrack is activated
      var dnt = null; //navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack;
      var isToTrack =
        dnt !== null && dnt !== undefined
          ? dnt && dnt !== "yes" && dnt !== 1 && dnt !== "1"
          : true;

      var isShow = null;

      // Do nothing if it is a bot
      // If DoNotTrack is activated, do nothing too
      if (isBot || !isToTrack || this.hasConsent() === false) {
        isShow = false;
      }

      // User has already consent to use cookies to tracking
      if (isShow === null && this.hasConsent() === true) {
        // Launch user custom function
        this.launchFunction();
        isShow = false;
      } else {
        isShow = true;
      }

      // If it's not a bot, no DoNotTrack and not already accept, so show banner
      this.showBanner(isShow);

      if (!this.waitAccept) {
        // Accept cookies by default for the next page
        this.setConsent(true);
      }
    },

    /*
     * Show banner at the top of the page
     */
    showBanner: function (isShow) {
      var _this = this,
        getElementById = document.getElementById.bind(document),
        banner = getElementById("cookies-eu-banner"),
        rejectButton = getElementById("cookies-eu-reject"),
        acceptButton = getElementById("cookies-eu-accept"),
        moreLink = getElementById("cookies-eu-more"),
        waitRemove =
          banner.dataset.waitRemove === undefined
            ? 0
            : parseInt(banner.dataset.waitRemove),
        // Variables for minification optimization
        addClickListener = this.addClickListener,
        removeBanner = _this.removeBanner.bind(_this, waitRemove);

      banner.className = isShow
        ? "cookies-eu-banner-fixed"
        : "cookies-eu-banner-remove";

      if (rejectButton) rejectButton.style.visibility = isShow ? "visible" : "hidden";
      if (acceptButton) acceptButton.style.visibility = isShow ? "visible" : "hidden";
      banner.style.display = "block";

      if (acceptButton) {
        addClickListener(acceptButton, function () {
          removeBanner();
          _this.setConsent(true);
          _this.launchFunction();
        });
      }

      if (rejectButton) {
        addClickListener(rejectButton, function () {
          removeBanner();
          _this.setConsent(false);

          // Delete existing tracking cookies
          _this.trackingCookiesNames.map(_this.deleteCookie);
        });
      }
    },

    setWithExpiry: function (key, value, ttl) {
      const now = Date.now();
      const item = {
        value: value,
        expiry: now + ttl,
      };
      localStorage.setItem(key, JSON.stringify(item));
    },

    getWithExpiry: function (key) {
      const itemStr = localStorage.getItem(key);

      if (!itemStr) {
        return null;
      }

      const item = JSON.parse(itemStr);
      const now = Date.now();

      if (now > item.expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return item.value;
    },

    /*
     * Set consent cookie or localStorage
     */
    setConsent: function (consent) {
      if (this.useLocalStorage) {
        return this.setWithExpiry(this.cookieName, consent, this.cookieTimeout);
      }

      this.setCookie(this.cookieName, consent);
    },

    /*
     * Check if user already consent
     */
    hasConsent: function () {
      var cookieName = this.cookieName;
      if (this.useLocalStorage) {
        return this.getWithExpiry(cookieName);
      }
      var isCookieSetTo = function (value) {
        return document.cookie.indexOf(cookieName + "=" + value) > -1;
      };

      if (isCookieSetTo("true")) {
        return true;
      } else if (isCookieSetTo("false")) {
        return false;
      }

      return null;
    },

    /*
     * Create/update cookie
     */
    setCookie: function (name, value) {
      var date = new Date();
      date.setTime(date.getTime() + this.cookieTimeout);

      document.cookie =
        name +
        "=" +
        value +
        ";expires=" +
        date.toGMTString() +
        ";path=/" +
        ";secure;SameSite=Lax";
    },

    /*
     * Delete cookie by changing expire
     */
    deleteCookie: function (name) {
      var hostname = document.location.hostname.replace(/^www\./, ""),
        commonSuffix = "; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";

      document.cookie = name + "=; domain=." + hostname + commonSuffix;
      document.cookie = name + "=" + commonSuffix;
    },

    addClickListener: function (DOMElement, callback) {
      if (DOMElement.attachEvent) {
        // For IE 8 and earlier versions
        return DOMElement.attachEvent("onclick", callback);
      }

      // For all major browsers, except IE 8 and earlier
      DOMElement.addEventListener("click", callback);
    },

    /*
     * Delays removal of banner allowing developers
     * to specify their own transition effects
     */
    removeBanner: function (wait) {
      var getElementById = document.getElementById.bind(document);
      var banner = getElementById("cookies-eu-banner");
      setTimeout(function () {
        if (banner && banner.parentNode) {
          banner.className = "cookies-eu-banner-removed";

          var rejectButton = getElementById("cookies-eu-reject");
          var acceptButton = getElementById("cookies-eu-accept");
          if (rejectButton) rejectButton.style.visibility = "hidden";
          if (acceptButton) acceptButton.style.visibility = "hidden";
        }
      }, wait);
    },
  };

  return CookiesEuBanner;
});

window.document.addEventListener("DOMContentLoaded", function () {
  const banner = window.document.createElement("div");
  banner.id = "cookies-eu-banner";
  banner.style.display = "none";

  const langCode = window.location.pathname.split("/")[1].toLowerCase(); // 获取路径的第一部分
  let contentText = null;
  let button1 = null;
  let button2 = null;
  if (langCode === "zh-cn") {
    contentText =
      "MtF.Wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。";
    button1 = "免责声明";
    button2 = "知道了";
  } else if (langCode === "zh-hant") {
    contentText =
      "MtF.Wiki 的內容僅供參考，可能存在過時或不準確的信息，請謹慎甄別。";
    button1 = "免責聲明";
    button2 = "知道了";
  }
  if (contentText != null) {
    banner.innerHTML = `
    ${contentText}
    <a href="/zh-cn/about/disclaimer/" id="cookies-eu-more">${button1}</a>
    <button id="cookies-eu-accept">${button2}</button>
`;

    // 将横幅添加到页面 body 的末尾
    window.document.body.appendChild(banner);

    new CookiesEuBanner(function () {}, true, true);
  }
});
