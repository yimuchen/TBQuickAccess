browser.spacesToolbar.addButton("Mattermost", {
  title: "Mattermost",
  defaultIcons: "mattermost.svg",
  url: "https://mattermost.web.cern.ch/",
});

browser.spacesToolbar.addButton("Messenger", {
  title: "Messenger",
  defaultIcons: "messenger.svg",
  url: "https://www.messenger.com/",
});

browser.spacesToolbar.addButton("Whatsapp", {
  title: "Whatsapp",
  defaultIcons: "whatsapp.svg",
  url: "https://web.whatsapp.com/",
});

/* Addition settings to have Whatsapp recognize thunderbird browser */
browser.webRequest.onBeforeSendHeaders.addListener(
  function (e) {
    e.requestHeaders.forEach((header) => {
      if (header.name.toLowerCase() === "user-agent") {
        header.value =
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/122.0";
      }
    });
    return { requestHeaders: e.requestHeaders };
  },
  { urls: ["https://web.whatsapp.com/*"] },
  ["blocking", "requestHeaders"],
);
