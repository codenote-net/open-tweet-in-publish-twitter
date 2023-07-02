chrome.action.onClicked.addListener(async (tab) => {
  const url = `https://publish.twitter.com/?query=${encodeURIComponent(tab.url)}&widget=Tweet`;
  chrome.tabs.create({ url: url });
});
