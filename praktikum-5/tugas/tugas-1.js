/**
 * TUGAS 1: ANALISIS DAN REFACTOR
 * File: tugas/tugas-1.js
 */

// --- 1. Fungsi A: Intersection ---
// O(n^2) - Nested loop
function intersectionLambat(arr1, arr2) {
  // Time: O(n*m), Space: O(min(n,m))
  let hasil = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !hasil.includes(arr1[i])) {
      hasil.push(arr1[i]);
    }
  }
  return hasil;
}

// O(n) - Menggunakan Set
function intersectionCepat(arr1, arr2) {
  // Time: O(n+m), Space: O(n)
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter((item) => set1.has(item)))];
}

// --- 2. Fungsi B: Kelompok Anagram ---
function kelompokAnagram(strs) {
  // Time: O(n * k log k), Space: O(n * k) di mana k = panjang kata
  const map = {};
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (!map[sorted]) map[sorted] = [];
    map[sorted].push(str);
  }
  return Object.values(map);
}

// --- 3. Fungsi C: Triplets (a + b = c^2) ---
// O(n^3) - Triple loop
function cekTripletLambat(arr) {
  // Time: O(n^3), Space: O(1)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== j && j !== k && i !== k && arr[i] + arr[j] === arr[k] ** 2) {
          return true;
        }
      }
    }
  }
  return false;
}

// O(n^2) - Menggunakan Set
function cekTripletCepat(arr) {
  // Time: O(n^2), Space: O(n)
  const set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (set.has(Math.sqrt(arr[i] + arr[j]))) return true;
    }
  }
  return false;
}

// --- FUNGSI PENGUKUR WAKTU (BENCHMARK) ---
function benchmark(nama, fn, data) {
  const start = performance.now();
  fn(data);
  const end = performance.now();
  console.log(`${nama} selesai dalam: ${(end - start).toFixed(4)} ms`);
}

// Contoh Pengujian
const dataBesar = Array.from({ length: 5000 }, (_, i) => i);
console.log("--- Pengujian Performa ---");
benchmark(
  "Intersection Cepat",
  () => intersectionCepat(dataBesar, dataBesar),
  null,
);
benchmark(
  "Anagram",
  () => kelompokAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]),
  null,
);
benchmark("Triplet Cepat", () => cekTripletCepat(dataBesar), null);
