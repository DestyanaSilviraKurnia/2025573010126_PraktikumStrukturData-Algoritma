//Untuk mengukur perbedaan performa algoritma secara empiris

//Fungsi untuk ukur waktu eksekusi
function ukurWaktu(label, fn) {
  const mulai = Date.now();
  fn();
  const selesai = Date.now();
  console.log(`${label}: ${selesai - mulai} ms`);
}
const N = 100_000; // ukuran data nya ada 100k

// Algoritmanya A: O(n) — loop untuk satu kali
function jumlahkanLinear(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}

// Algoritmanya B: O(1) — ini rumus matematika
function jumlahkanRumus(n) {
  return (n * (n + 1)) / 2;
}

// Algoritmanya C: O(n2) ini loop bersarang
function cariPasangan(arr) {
  const pasangan = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) pasangan.push([arr[i], arr[j]]);
    }
  }
  return pasangan;
}
const data = Array.from({ length: 5000 }, (_, i) => i);

console.log("=== Perbandingan Waktu Eksekusi ===");
ukurWaktu("0(1) jumlahkanRumus ", () => jumlahkanRumus(N));
ukurWaktu("0(n) jumlahkanLinear ", () => jumlahkanLinear(N));
ukurWaktu("0(n2) cariPasangan ", () => cariPasangan(data));

console.log("\nHasil sama?", jumlahkanLinear(100) === jumlahkanRumus(100));
