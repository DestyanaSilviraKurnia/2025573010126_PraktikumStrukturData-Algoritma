const beratBadan = 68;
const tinggiBadan = 1.72;

const bmi = beratBadan / (tinggiBadan * tinggiBadan);

const bmiFixed = bmi.toFixed(2);

let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal(ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
} else {
    kategori = "Obesitas (Obese)";
} 
console.log(`Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmiFixed} | Kategori: ${kategori}`);