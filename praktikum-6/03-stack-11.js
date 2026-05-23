// 1. Struktur Node untuk Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 2. Class LinkedList sebagai penyimpanan internal (Komposisi)
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Menambahkan data di depan (Head) -> O(1)
  prepend(data) {
    const newNode = new Node(data);
    if (this.head !== null) {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  // Menghapus data di depan (Head) -> O(1)
  deleteHead() {
    if (!this.head) return null;

    const deletedData = this.head.data;
    this.head = this.head.next;
    this.length--;
    return deletedData;
  }

  // Mengambil data di head tanpa menghapusnya -> O(1)
  getHead() {
    return this.head ? this.head.data : null;
  }
}

// 3. Class Stack menggunakan LinkedList (Komposisi, bukan extends)
class Stack {
  constructor() {
    // Menggunakan instance LinkedList sebagai properti internal
    this.storage = new LinkedList();
  }

  // Menambahkan elemen ke dalam stack -> O(1)
  push(data) {
    this.storage.prepend(data);
  }

  // Mengambil dan menghapus elemen teratas dari stack -> O(1)
  pop() {
    if (this.isEmpty()) {
      return "Stack Kosong";
    }
    return this.storage.deleteHead();
  }

  // Melihat elemen teratas tanpa menghapusnya -> O(1)
  peek() {
    if (this.isEmpty()) {
      return "Stack Kosong";
    }
    return this.storage.getHead();
  }

  // Memeriksa apakah stack kosong -> O(1)
  isEmpty() {
    return this.storage.length === 0;
  }

  // Mengembalikan ukuran/jumlah elemen stack -> O(1)
  size() {
    return this.storage.length;
  }

  // Menampilkan seluruh elemen stack
  print() {
    if (this.isEmpty()) {
      console.log("(Stack Kosong)");
      return;
    }

    let current = this.storage.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// =================================================================
// 5. Demonstrasi Simulasi Undo/Redo Sederhana
// =================================================================

const undoStack = new Stack();
const redoStack = new Stack(); // Tambahan untuk simulasi redo yang ideal

// Array aksi (simulasi mengetik dokumen)
const daftarAksi = [
  "Ketik kata pertama: 'Halo'",
  "Ketik kata kedua: 'Dunia'",
  "Format teks: 'Bold'",
  "Tambah gambar: 'logo.png'",
];

console.log("=== MEMULAI AKSI (PUSH KE STACK) ===");
daftarAksi.forEach((aksi) => {
  console.log(`Melakukan aksi: [ ${aksi} ]`);
  undoStack.push(aksi);
});

console.log("\nStatus Stack Saat Ini (Top ke Bottom):");
undoStack.print();
console.log(`Ukuran Stack: ${undoStack.size()}\n`);

console.log("=== SIMULASI UNDO BEBERAPA KALI (POP) ===");

// Undo 1
let undo1 = undoStack.pop();
console.log(`[Undo dijalankan] -> Membatalkan: "${undo1}"`);
redoStack.push(undo1); // simpan ke redo stack

// Undo 2
let undo2 = undoStack.pop();
console.log(`[Undo dijalankan] -> Membatalkan: "${undo2}"`);
redoStack.push(undo2);

console.log("\nStatus Stack Setelah 2x Undo:");
undoStack.print();
console.log(`Elemen teratas saat ini (Peek): ${undoStack.peek()}`);
console.log(`Ukuran Stack Sekarang: ${undoStack.size()}\n`);

// Tambahan: Simulasi Redo (Mengembalikan aksi yang di-undo)
console.log("=== SIMULASI REDO (MENGEMBALIKAN AKSI) ===");
if (!redoStack.isEmpty()) {
  let redoAksi = redoStack.pop();
  undoStack.push(redoAksi);
  console.log(`[Redo dijalankan] -> Mengembalikan: "${redoAksi}"`);
}

console.log("\nStatus Akhir Stack:");
undoStack.print();
