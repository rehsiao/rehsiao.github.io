// init controller
let Words = [
  "WEB DESIGNER",
  "UX Designer at google.",
  "cofounder of brasa@UCSD.",
  "multicultural UX.",
];
let span_trad = document.querySelector(".typing");

const LoadTypeWrite = (e) => {
  let count = 0;
  let TotalCount = Words.length;
  let CurrentWord = 0;
  let reverse = false;
  setInterval(() => {
    console.log(Words[count]);
    let SmallArea = document.querySelector("main .presentation small");
    if (Words[count] == "cofounder of brasa@UCSD.") {
      SmallArea.innerHTML = `<small>I<span>'</span>m the</small>`;
    } else if (Words[count] == "multicultural UX.") {
      SmallArea.innerHTML = `<small>I design for a</small>`;
    } else {
      SmallArea.innerHTML = `<small>I<span>'</span>m a</small>`;
    }

    if (!reverse) {
      span_trad.innerHTML += `<span>${Words[count][CurrentWord]}</span>`;
      CurrentWord++;
    }

    if (CurrentWord == Words[count].length + 1) {
      reverse = true;
      let TotalSpans = document.querySelectorAll(".span_trad span");
      let TotalSpanLength = TotalSpans.length;

      if (TotalSpanLength > 0) TotalSpans[TotalSpanLength - 1].remove();
      if (TotalSpanLength == 0) {
        CurrentWord = 0;
        count++;
        span_trad.innerHTML = "";
        reverse = false;
      }
    }
    if (count == TotalCount) {
      count = 0;
    }
  }, 200);
};
LoadTypeWrite();
