document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmiForm");
  const resultDiv = document.getElementById("bmiResult");

  if (!form || !resultDiv) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseFloat(document.getElementById("age").value);
    const sex = document.querySelector("input[name='sex']:checked").value;
    const activity = parseFloat(document.getElementById("activity").value);

    if (!height || !weight || !age) {
      show("Please fill in height, weight and age.", false);
      return;
    }

    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);

    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    // Mifflin-St Jeor BMR estimate
    let bmr;
    if (sex === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenance = Math.round(bmr * activity);

    const message = `
      Your BMI is <strong>${bmi.toFixed(1)}</strong> (${category}).<br>
      Estimated daily maintenance calories: <strong>${maintenance}</strong> kcal.
    `;

    show(message, true);
  });

  function show(msg, success) {
    resultDiv.innerHTML = msg;
    resultDiv.style.borderColor = success ? "#2ecc71" : "#e74c3c";
  }
});
