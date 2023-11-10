const advices = [
  {
    advice:
      "Don't make assumptions. If you don't know the situation fully, you can't offer an informed opinion.",
    id: 1,
  },
  {
    advice:
      "Be patient and persistent. Life is not so much what you accomplish as what you overcome. ",
    id: 2,
  },
  {
    advice:
      "Luck comes from hard work. Luck happens when hard work and timing and talent intersect.",
    id: 3,
  },
  {
    advice:
      "Be your best at all times. You never know what the future will bring, so always make the best use of the present.",
    id: 4,
  },
  {
    advice:
      "Don't try to impress everyone. The unhappiest people are those who care the most about what other people think.",
    id: 5,
  },
  {
    advice:
      " Listen to learn. Learn how to listen. You can't learn anything when you're talking.",
    id: 6,
  },
  {
    advice:
      "Life's good, but it's not fair. The delusion that life's supposed to be fair is the source of much unhappiness.",
    id: 7,
  },
];

const h2 = document.querySelector("h2");
const adviceNum = document.querySelector("span");
const button = document.querySelector(".button-holder");

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * advices.length);
  h2.textContent = advices[random].advice;
  adviceNum.textContent = advices[random].id;
  /* for (let i = 0; i < advices.length; i++) {
    h2.textContent = advices[i].advice;
    adviceNum.textContent = advices[i].id;
  } */
});
