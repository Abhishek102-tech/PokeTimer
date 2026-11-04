const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeElement = document.querySelector('.time');
  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
}
updateClock();

setInterval(updateClock, 1000);

document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;


const timeStamps = [];
const timeStampsHolder = document.querySelector('.timestamps');

document.querySelector('.timestamp-addr').addEventListener('click', () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeStamps.push(`${hours}:${minutes}:${seconds}`);
  timeStampsHolder.innerHTML = timeStamps.map((stamp) => `<div class="timestamp">${stamp}</div>`).join('');
});

