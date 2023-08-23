//JavaScript code
////////
let pYears = document.querySelector("#yr");
let pMonths = document.querySelector("#mth");
let pDays = document.querySelector("#dy");

const divYear = document.querySelector("#textyear");
const divMonth = document.querySelector("#textmonth");
const divDay = document.querySelector("#textday");

let errorY = document.querySelector("#erroryear");
let errorM = document.querySelector("#errormonth");
let errorD = document.querySelector("#errorday");

let year = document.querySelector("#year");
let month = document.querySelector("#month");
let day = document.querySelector("#day");

const form = document.querySelector("#form");
const button1 = document.querySelector("#btn-1");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const birthDay = +day.value;
  const birthMonth = +month.value;
  const birthYear = +year.value;

  const leapYear = birthYear % 4 === 0;
  /*
    const leapYear =
    (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0;
*/
  //divYear.style.color = "black";
  //divDay.style.color = "black";
  //divMonth.style.color = "black";

  //---------------------------------------------------------------------------------------//

  if (birthYear == "") {
    divYear.style.color = "red";
    divMonth.style.color = "red";
    divDay.style.color = "red";
    errorY.textContent = "This field is required";
    errorY.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    button1.classList.add("relative", "top-5");
  } else if (birthYear >= new Date().getFullYear()) {
    divYear.style.color = "red";
    divMonth.style.color = "red";
    divDay.style.color = "red";
    errorY.textContent = "Must be a valid year";
    errorY.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    button1.classList.add("relative", "top-5");
  } else {
    errorY.textContent = "";
    divYear.style.color = "";
    divMonth.style.color = "";
    divDay.style.color = "";
    errorY.style.color = "";
    day.style.borderColor = "";
    day.style.outlineColor = "";
    month.style.borderColor = "";
    month.style.outlineColor = "";
    year.style.borderColor = "";
    year.style.outlineColor = "";
    button1.classList.remove("relative", "top-5");
  }

  //------------------------------------------------------------------------------------------//

  if (birthDay == "" || day.value === "") {
    divMonth.style.color = "red";
    divDay.style.color = "red";
    divYear.style.color = "red";
    errorD.textContent = "This field is required";
    errorD.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    button1.classList.add("relative", "top-5");
  } else if (birthDay < 1 || birthDay > 31) {
    divDay.style.color = "red";
    divMonth.style.color = "red";
    divYear.style.color = "red";
    errorD.textContent = "Must be a valid day";
    errorD.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    button1.classList.add("relative", "top-5");
  } else {
    errorD.textContent = "";
    divDay.style.color = "";
    divMonth.style.color = "";
    divYear.style.color = "";
    errorD.style.color = "";
    day.style.borderColor = "";
    day.style.outlineColor = "";
    month.style.borderColor = "";
    month.style.outlineColor = "";
    year.style.borderColor = "";
    year.style.outlineColor = "";
    button1.classList.remove("relative", "top-5");
  }

  //--------------------------------------------------------------------------------------------//

  if (birthMonth == "") {
    divMonth.style.color = "red";
    divYear.style.color = "red";
    divDay.style.color = "red";
    errorM.textContent = "This field is required";
    errorM.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    button1.classList.add("relative", "top-5");
  } else if (birthMonth < 1 || birthMonth > 12) {
    divMonth.style.color = "red";
    divYear.style.color = "red";
    divDay.style.color = "red";
    errorM.textContent = "Must be a valid month";
    errorM.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    button1.classList.add("relative", "top-5");
  } else if (
    (birthDay > 29 && birthMonth === 2 && leapYear) ||
    (birthDay > 28 && birthMonth === 2 && !leapYear)
  ) {
    divDay.style.color = "red";
    divMonth.style.color = "red";
    divYear.style.color = "red";
    errorD.textContent = "Must be a valid date";
    errorM.textContent = "";
    errorD.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    errorM.style.color = "red";
    button1.classList.add("relative", "top-5");
  } else if (birthDay > 30 && [4, 6, 9, 11].includes(birthMonth)) {
    // April, June, September, November
    divMonth.style.color = "red";
    divDay.style.color = "red";
    divYear.style.color = "red";
    errorD.textContent = "Must be a valid date";
    errorM.textContent = "";
    errorD.style.color = "red";
    day.style.borderColor = "red";
    day.style.outlineColor = "red";
    month.style.borderColor = "red";
    month.style.outlineColor = "red";
    year.style.borderColor = "red";
    year.style.outlineColor = "red";
    errorM.style.color = "red";
    button1.classList.add("relative", "top-5");
  } else {
    errorD.textContent = "";
    errorM.textContent = "";
    divMonth.style.color = "";
    divDay.style.color = "";
    divYear.style.color = "";
    errorD.style.color = "";
    day.style.borderColor = "";
    day.style.outlineColor = "";
    month.style.borderColor = "";
    month.style.outlineColor = "";
    year.style.borderColor = "";
    year.style.outlineColor = "";
    errorM.style.color = "";
    button1.classList.remove("relative", "top-5");
  }

  if (
    errorD.textContent === "" &&
    errorM.textContent === "" &&
    errorY.textContent === ""
  ) {
    const completeDate = new Date(birthYear, birthMonth - 1, birthDay);
    const currentDate = new Date();

    const difference = currentDate - completeDate;

    const age = new Date(difference);
    const years = age.getUTCFullYear() - 1970;
    const months = age.getUTCMonth();
    const days = age.getUTCDate() - 1;

    pYears.textContent = years;
    pMonths.textContent = months;
    pDays.textContent = days;
  }
});
