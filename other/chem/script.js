function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

document.getElementById('confettiBtn').addEventListener('click', function() {
  setTimeout(() => {
  const script = document.createElement('script');
  script.src = 'https://app.embed.im/confetti.js';
  document.body.appendChild(script);
  }, 300);
});

function reloadThing(){
  location.reload()
}

