// =========================================================================
// Implementasi Stack Menggunakan Array (Sebagai Data Structure Dasar)
// =========================================================================
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// =========================================================================
// 2. Implementasi Class MinStack (Sesuai Soal No. 2 & 3)
// =========================================================================
class MinStack {
  constructor() {
    // No. 3: Menggunakan dua Stack terpisah
    this.dataStack = new Stack(); // Stack untuk menyimpan data biasa
    this.minStack = new Stack(); // Stack khusus menyimpan nilai minimum saat ini
  }

  /**
   * Menambahkan elemen ke dalam stack.
   * Big O: O(1) - Karena operasi push pada stack utama maupun minStack
   * hanya memasukkan data ke baris paling atas tanpa looping.
   */
  push(val) {
    this.dataStack.push(val);

    // Jika minStack kosong ATAU nilai baru lebih kecil/sama dengan nilai minimum saat ini
    if (this.minStack.isEmpty() || val <= this.minStack.peek()) {
      this.minStack.push(val);
    }
    console.log(`Push(${val}) ke dalam Stack.`);
  }

  /**
   * Menghapus elemen teratas dari stack.
   * Big O: O(1) - Hanya menghapus elemen paling atas (top) menggunakan operasi pop biasa.
   */
  pop() {
    if (this.dataStack.isEmpty()) {
      console.log("Stack kosong, tidak bisa melakukan pop().");
      return null;
    }

    const removedValue = this.dataStack.pop();

    // Jika nilai yang dihapus sama dengan nilai minimum saat ini di minStack,
    // maka nilai tersebut juga harus dihapus dari minStack.
    if (removedValue === this.minStack.peek()) {
      this.minStack.pop();
    }

    console.log(`Pop() dilakukan. Elemen ${removedValue} keluar.`);
    return removedValue;
  }

  /**
   * Melihat elemen teratas dari stack utama tanpa menghapusnya.
   * Big O: O(1) - Hanya melihat indeks terakhir.
   */
  top() {
    return this.dataStack.peek();
  }

  /**
   * Mengembalikan elemen terkecil saat ini.
   * Big O: O(1) - Sesuai spesifikasi Soal No. 2. Kita langsung melihat
   * elemen teratas dari minStack tanpa melakukan pencarian/looping (O(n)).
   */
  getMin() {
    if (this.minStack.isEmpty()) {
      return null;
    }
    return this.minStack.peek();
  }
}

// =========================================================================
// 4. Pengujian Sistem (Sesuai Jalur Pengujian Soal No. 4)
// =========================================================================
const minStack = new MinStack();

console.log("=== MEMULAI PENGUJIAN MIN STACK ===");

// Uji: push(5), push(3), push(7), push(2)
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

// getMin() -> Harus mengembalikan 2
console.log(`-> getMin() saat ini = ${minStack.getMin()} (Ekspektasi: 2)`);

// pop() -> Mengeluarkan angka 2
minStack.pop();

// getMin() -> Harus mengembalikan 3 (karena 2 sudah dihapus)
console.log(`-> getMin() saat ini = ${minStack.getMin()} (Ekspektasi: 3)`);

// pop() -> Mengeluarkan angka 7
minStack.pop();

// getMin() -> Harus tetap mengembalikan 3
console.log(`-> getMin() saat ini = ${minStack.getMin()} (Ekspektasi: 3)`);

console.log("===================================");
