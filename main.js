let pointsBtnObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      let node = mutation.addedNodes.item(0).firstChild;
      if (node && JSON.stringify(node.outerHTML).includes('Claim Bonus')) {
        node.click();
        console.log('click');
      } else {
        console.log('no click');
      }
    }
  });
});

let interval;
let initialize = () => {
  let iteration = 0;
  interval = setInterval(() => {
    if (iteration <= 5) {
      // let btnContainer = document.getElementsByClassName('kxrhnx')[0];
      let btnContainer = document.getElementsByClassName('liFGiB')[0];
      if (btnContainer) {
        let btn = document.querySelector('[aria-label="Claim Bonus"]');
        if (btn) btn.click();
        pointsBtnObserver.observe(btnContainer, { childList: true, subtree: true });
        console.log('initialized');
        iteration = 0;
        clearInterval(interval);
      } else {
        iteration++;
      }
    } else {
      iteration = 0;
      clearInterval(interval);
      interval = undefined;
    }
    console.log('interval =', iteration);
  }, 5000);
}

let currentURL = location.href;
window.onclick = function () {
  if (location.href.includes('twitch.tv') && currentURL !== location.href) {
    currentURL = location.href;
    if (interval) {
      clearInterval(interval);
      interval = undefined;
    }
    initialize();
  }
}

initialize();
