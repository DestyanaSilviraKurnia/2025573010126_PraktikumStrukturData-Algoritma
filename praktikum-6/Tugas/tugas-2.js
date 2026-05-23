// 1. Definisikan class Node dasar untuk Singly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Helper function untuk mengubah Array menjadi Linked List (mempermudah pengujian)
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function untuk mencetak Linked List ke dalam teks yang mudah dibaca
function printLinkedList(head) {
  if (!head) return "null";
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  return `[${result.join(" -> ")}]`;
}

// =================================================================
// 2. Fungsi palindromLL(head)
// =================================================================
function palindromLL(head) {
  if (!head) return true;

  // Sesuai hint: konversi struktur data Linked List ke bentuk array dahulu
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }

  // Gunakan teknik two-pointer untuk mengecek kesamaan dari ujung ke ujung array
  let left = 0;
  let right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) {
      return false; // Bukan palindrom
    }
    left++;
    right--;
  }
  return true; // Valid palindrom
}

// =================================================================
// 3. Fungsi hapusNDariAkhir(head, n)
// =================================================================
function hapusNDariAkhir(head, n) {
  // Sesuai hint: memanfaatkan pendekatan algoritma two-pointer (fast & slow)
  let dummy = new Node(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  // Gerakkan pointer 'fast' maju sebanyak n + 1 langkah ke depan terlebih dahulu
  for (let i = 0; i <= n; i++) {
    if (fast === null) return head; // n melebihi panjang list
    fast = fast.next;
  }

  // Gerakkan kedua pointer bersamaan sampai pointer 'fast' menyentuh batas null (ujung akhir)
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Pointer 'slow' sekarang berada tepat di posisi SEBELUM node yang ingin dibuang
  slow.next = slow.next.next;

  return dummy.next; // Mengembalikan head yang baru
}

// =================================================================
// 4. Fungsi tengahLinkedList(head)
// =================================================================
function tengahLinkedList(head) {
  // Sesuai hint: menggunakan teknik tortoise & hare (fast & slow pointer)
  let slow = head;
  let fast = head;

  // Pointer 'fast' bergerak 2x lebih cepat daripada pointer 'slow'
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Saat 'fast' sampai di ujung, posisi 'slow' otomatis tepat berada di titik tengah.
  // Jika jumlah elemen genap, pola ini secara default mengembalikan node tengah kedua.
  return slow;
}

// =================================================================
// 5. Uji Semua Fungsi Dengan Minimal 3 Kasus Berbeda
// =================================================================

console.log("=========================================");
console.log("PENGUJIAN FUNGSI 1: palindromLL(head)");
console.log("=========================================");

const p1 = arrayToLinkedList([1, 2, 3, 2, 1]);
console.log(`Kasus 1: ${printLinkedList(p1)} -> Hasil: ${palindromLL(p1)}`); // Expected: true

const p2 = arrayToLinkedList(["r", "a", "d", "a", "r"]);
console.log(`Kasus 2: ${printLinkedList(p2)} -> Hasil: ${palindromLL(p2)}`); // Expected: true

const p3 = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(`Kasus 3: ${printLinkedList(p3)} -> Hasil: ${palindromLL(p3)}`); // Expected: false

console.log("\n=========================================");
console.log("PENGUJIAN FUNGSI 2: hapusNDariAkhir(head, n)");
console.log("=========================================");

let h1 = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(`Kasus 1 (Sebelum): ${printLinkedList(h1)}, n=2`);
h1 = hapusNDariAkhir(h1, 2);
console.log(`Kasus 1 (Sesudah): ${printLinkedList(h1)}`); // Expected: [1 -> 2 -> 3 -> 5]

let h2 = arrayToLinkedList([10, 20, 30]);
console.log(`Kasus 2 (Sebelum): ${printLinkedList(h2)}, n=3 (Hapus head)`);
h2 = hapusNDariAkhir(h2, 3);
console.log(`Kasus 2 (Sesudah): ${printLinkedList(h2)}`); // Expected: [20 -> 30]

let h3 = arrayToLinkedList([100]);
console.log(`Kasus 3 (Sebelum): ${printLinkedList(h3)}, n=1`);
h3 = hapusNDariAkhir(h3, 1);
console.log(`Kasus 3 (Sesudah): ${printLinkedList(h3)}`); // Expected: null

console.log("\n=========================================");
console.log("PENGUJIAN FUNGSI 3: tengahLinkedList(head)");
console.log("=========================================");

const t1 = arrayToLinkedList([1, 2, 3, 4, 5]);
const mid1 = tengahLinkedList(t1);
console.log(
  `Kasus 1 (Ganjil): ${printLinkedList(t1)} -> Tengah: ${mid1 ? mid1.data : null}`,
);
// Expected: 3

const t2 = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
const mid2 = tengahLinkedList(t2);
console.log(
  `Kasus 2 (Genap) : ${printLinkedList(t2)} -> Tengah Kedua: ${mid2 ? mid2.data : null}`,
);
// Expected: 4

const t3 = arrayToLinkedList([10, 20]);
const mid3 = tengahLinkedList(t3);
console.log(
  `Kasus 3 (Minimal): ${printLinkedList(t3)} -> Tengah Kedua: ${mid3 ? mid3.data : null}`,
);
