const start = document.getElementById("start");
const end = document.getElementById("end");
const submit = document.querySelector(".submit-btn");
const results = document.getElementById("results");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const startVal = start.value;
  const endVal = end.value;
  try {
    const { data } = await axios.get("/api/stars", {
      params: {
        start: startVal,
        end: endVal,
      },
    });
    const listItems = data.data.map((item) => {
      const { title, count, link } = item;
      return `<li><a href=${link} target="blank">${title}</a> ${count}</li>`;
    });
    results.innerHTML = `<ol>${listItems.join("")}</ol>`;
  } catch (err) {
    console.log(`Error: ${err}`);
  }
});
