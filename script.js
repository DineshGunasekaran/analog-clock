const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function setTime() {
  const todayDate = new Date();
  // console.log(todayDate)

  const getSecond = todayDate.getSeconds();
  const getMinute = todayDate.getMinutes();
  const getHour = todayDate.getHours();

  const secondDeg = ((getSecond / 60) * 360);
  const minuteDeg = ((getMinute / 60) * 360);
  const hourDeg = ((getHour / 12) * 360);

  // Update time
  second.style.transform = `rotate(${secondDeg}deg)`
  minute.style.transform = `rotate(${minuteDeg}deg)`
  hour.style.transform = `rotate(${hourDeg}deg)`
}


setInterval( setTime, 1000);