const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target")); // +counter.getAttribute("data-target") -> to number
    const c = Number(counter.innerText);

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 2);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
