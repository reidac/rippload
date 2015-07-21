// Ripploader.

// State variables.
currentTab = 0
currentBmk = 0
bkms = 0



function newtab(tb) {
  currentTab = tb.id;
};

function loadcheck(tabID, info) {
  if ((tabID == currentTab) && ( info.status == "complete")) {
    loadNext();
  }
};

function loadNext() {
  if ( currentBmk!=bkms.length ) {
    var newsite = (bkms[currentBmk]).url;
    chrome.tabs.create( { url: newsite, 
                        active: false } , newtab );
    currentBmk = currentBmk+1;
  }
};

function buildBkms(bkchildren) {
  bkms = bkchildren;
  loadNext();
};

function loader(bkarray) {
  // Just grab the first one.
  bkms = chrome.bookmarks.getChildren(bkarray[0].id, buildBkms);
};

function start() {
  chrome.bookmarks.search( { title: "Ripples" }, loader );
};

function gonogo(arg) {
  if (arg.restart) {
    currentTab = 0;
    currentBmk = 0;
    bksm = 0;
  };
  start();
};

//chrome.browserAction.onClicked.addListener(start);
chrome.tabs.onUpdated.addListener(loadcheck);
chrome.runtime.onMessage.addListener(gonogo);
