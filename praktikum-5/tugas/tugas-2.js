/**
 * TUGAS 2: VISUALISASI PERTUMBUHAN BIG O
 */

// 3. O(1)
function fn_01(n) {
  return n + 1;
}

// 4. O(n)
function fn_0n(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
}

// 5. O(n log n)
function fn_0nLogn(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }
  return count;
}

// 6. O(n^2)
function fn_0n2(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  return count;
}

// 2. Fungsi benchmarkSemua
function benchmarkSemua(ukuranData) {
  console.log("n\t | O(1) | O(n) | O(n log n) | O(n^2)");
  console.log("--------------------------------------------------");

  for (let n of ukuranData) {
    const results = [];

    const fns = [fn_01, fn_0n, fn_0nLogn, fn_0n2];

    for (let fn of fns) {
      const start = performance.now();
      fn(n);
      const end = performance.now();
      results.push((end - start).toFixed(4));
    }

    console.log(`${n}\t | ${results.join("\t| ")}`);
  }
}

// 7. Panggilan
benchmarkSemua([100, 500, 1000, 5000, 10000]);

/**
 * 8. OBSERVASI:
 * - O(1): Waktu eksekusi sangat stabil dan hampir tidak berubah meski n meningkat.
 * - O(n): Waktu meningkat secara linier (sebanding dengan n).
 * - O(n log n): Waktu meningkat sedikit lebih cepat dari linier.
 * - O(n^2): Waktu meningkat secara drastis (kuadratik). Saat n=10.000,
 * perbedaannya dengan fungsi lain akan sangat terlihat jelas.
 * * Kesimpulan: Hasil observasi KONSISTEN dengan teori Big O, di mana
 * fungsi dengan kompleksitas lebih tinggi akan jauh lebih lambat
 * saat n bertambah besar.
 */
