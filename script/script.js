const bill = document.querySelector("#bill");
const percBtn = document.querySelectorAll(".perc_btn");
const custom = document.querySelector("#custom");
const people = document.querySelector("#people");
const tipTot = document.querySelector("#total_tip");
const tipPers = document.querySelector("#tip_per_person");
const reset = document.querySelector("#reset");
const prs_err = document.querySelector("#err_prs");
const err_bill = document.querySelector("#err_bill");

function calcTip() {
  const amount = Number(bill.value);
  const tipTotal = (amount * varTipPercentage) / 100;
  tipTot.innerHTML = `$${tipTotal.toFixed(2)}`;

  const pers = Number(people.value);
  if (pers !== 0) {
    const perPerson = (amount + tipTotal) / pers;
    tipPers.innerHTML = `$${perPerson.toFixed(2)}`;
  } else {
    prs_err.classList.add("active");
    people.classList.add("active");
    tipPers.innerHTML = "Err";
  }
}

percBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    varTipPercentage = Number(btn.dataset["percentage"]);
    if (bill.value > 0) {
      calcTip();
    } else {
      err_bill.classList.add("active");
      bill.classList.add("active");
    }
  });
});

custom.addEventListener("input", () => {
  varTipPercentage = Number(custom.value);
  calcTip();
});

reset.addEventListener("click", () => {
  tipTot.innerHTML = "$0";
  tipPers.innerHTML = "$0";
  bill.value = "";
  people.value = 1;
  custom.value = "";
  prs_err.classList.remove("active");
  people.classList.remove("active");
  err_bill.classList.remove("active");
  bill.classList.remove("active");
});
