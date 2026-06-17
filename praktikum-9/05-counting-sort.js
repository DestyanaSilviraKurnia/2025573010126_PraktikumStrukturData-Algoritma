// 05-counting-sort.js — Non-comparison sort O(n+k)
function countingSort(arr, maxVal) {
  const count = new Array(maxVal + 1).fill(0);
  const output = new Array(arr.length);
  // Hitung kemunculan setiap nilai
  for (const x of arr) count[x]++;
  // Kumulatif: count[i] = jumlah elemen <= i
  for (let i = 1; i <= maxVal; i++) count[i] += count[i - 1];
  // Bangun output dari kanan ke kiri (agar stabil)
  for (let i = arr.length - 1; i >= 0; i--) {
    output[--count[arr[i]]] = arr[i];
  }
  return output;
}
const nilai = [4, 2, 2, 8, 3, 3, 1, 7, 3, 5];
console.log("Input :", nilai);
console.log("Sorted :", countingSort(nilai, 9));
// Benchmark: Counting Sort vs Quick Sort untuk data integer kecil
const N = 1_000_000;
const data = Array.from({ length: N }, () => Math.floor(Math.random() * 1000));
console.log("\n=== Benchmark n=1,000,000 ===");
let t = Date.now();
countingSort([...data], 999);
console.log("Counting Sort O(n) :", Date.now() - t, "ms");
t = Date.now();
[...data].sort((a, b) => a - b);
console.log("Array.sort (Timsort) :", Date.now() - t, "ms");
