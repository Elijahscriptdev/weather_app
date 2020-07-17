const toggleBtn = () => {
  const btn = document.querySelector('.celsius');
  btn.textContent = 'Change to Fahrenheit';
  const toggle = () => {
    const val = document.querySelector('.temp');
    if (btn.classList.contains('celsius')) {
      val.textContent = `${Math.floor(((val.value - 273.15) * 9) / 5 + 32)} °F`;
      btn.textContent = 'Change to Celsius';
      btn.classList.remove('celsius');
      btn.classList.add('fahrenheit');
    } else {
      val.textContent = `${Math.floor(val.value + -273.15)} °C`;
      btn.textContent = 'Change to Fahrenheit';
      btn.classList.add('celsius');
      btn.classList.remove('fahrenheit');
      btn.classList.add('celsius');
    }
  };
  btn.addEventListener('click', () => {
    toggle();
  });
};
export default toggleBtn;