chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only process if the tab has finished loading and it's not already your phishing page.
  if (changeInfo.status === 'complete' && tab.url && !tab.url.includes("localhost:5000/phishy")) {
    fetch('http://localhost:5000/detect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: tab.url })
    })
      .then(response => response.json())
      .then(data => {
        if (data.redirect) {
          // Construct the full redirect URL
          let fullRedirectUrl = 'http://localhost:5000' + data.redirect;
          console.log("Redirecting current tab to:", fullRedirectUrl);
          // Update the current tab with the dynamic page URL
          chrome.tabs.update(tabId, { url: fullRedirectUrl });
        } else {
          console.log('Site is safe:', data);
        }
      })
      .catch(error => console.error('Error during phishing detection:', error));
  }
});

// let checkedUrls = new Set(); // Store URLs already checked

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete' && tab.url) {
//     if (tab.url === "chrome://newtab/" || tab.url.startsWith("chrome://") || tab.url.startsWith("about:blank")) {
//       return;
//     }

//     // Avoid duplicate requests for the same URL
//     if (checkedUrls.has(tab.url)) {
//       return;
//     }
//     checkedUrls.add(tab.url); // Mark URL as checked

//     fetch('http://localhost:5000/detect', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ url: tab.url })
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.isPhishing) {
//           chrome.notifications.create('', {
//             type: 'basic',
//             iconUrl: 'icons/warning.png',
//             title: 'Phishing Alert!',
//             message: `Warning: ${tab.url} appears to be a phishing site.`
//           });
//         }
//       })
//       .catch(error => console.error('Error during phishing detection:', error));
//   }
// });
