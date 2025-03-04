const digitalClock = document.querySelector("#clock-placeholder");

const refreshClock = () => {
  const date = new Date();
  digitalClock.innerHTML = date.toLocaleTimeString();
};

refreshClock();

setInterval(() => {
  refreshClock();
}, 1000);