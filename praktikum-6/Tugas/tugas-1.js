// 2. Implementasikan class Node dengan dua pointer: next dan prev
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // Pointer ke node setelahnya
    this.prev = null; // Pointer ke node sebelumnya
  }
}

// Class DoublyLinkedList dengan properti head dan tail
class DoublyLinkedList {
  constructor() {
    this.head = null;
    // 4. Tambahkan property tail di class untuk akses O(1) ke node terakhir
    this.tail = null;
    this.length = 0;
  }

  // 3. Method append: Menambahkan node di akhir list
  // 5. Bukti append adalah O(1) karena menggunakan pointer tail langsung tanpa perulangan
  // 6. Komentar Big O: O(1)
  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Hubungkan tail lama dengan node baru secara dua arah
      this.tail.next = newNode;
      newNode.prev = this.tail;
      // Geser penanda tail ke node yang baru
      this.tail = newNode;
    }
    this.length++;
  }

  // 3. Method prepend: Menambahkan node di awal list
  // 6. Komentar Big O: O(1)
  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Hubungkan head lama dengan node baru secara dua arah
      newNode.next = this.head;
      this.head.prev = newNode;
      // Geser penanda head ke node yang baru
      this.head = newNode;
    }
    this.length++;
  }

  // 3. Method insertAt: Menyisipkan node pada indeks tertentu
  // 6. Komentar Big O: O(n) - karena harus mencari lokasi indeks posisi tujuan
  insertAt(index, data) {
    if (index < 0 || index > this.length) {
      console.log("Indeks di luar jangkauan");
      return false;
    }

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    if (index === this.length) {
      this.append(data);
      return true;
    }

    const newNode = new Node(data);
    let current = this.head;

    // Iterasi mencari node tepat sebelum posisi penyisipan
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    let targetNext = current.next;

    // Hubungkan newNode di antara current dan targetNext
    current.next = newNode;
    newNode.prev = current;
    newNode.next = targetNext;
    if (targetNext) {
      targetNext.prev = newNode;
    }

    this.length++;
    return true;
  }

  // 3. Method delete: Menghapus node berdasarkan nilainya
  // 6. Komentar Big O: O(n) - dalam skenario terburuk harus mencari nilai di sepanjang list
  delete(data) {
    if (this.head === null) return null;

    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        // Jika node yang dihapus adalah head
        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null; // List menjadi kosong
          }
        }
        // Jika node yang dihapus adalah tail
        else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        }
        // Jika node berada di tengah-tengah
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.length--;
        return current.data; // Mengembalikan data yang berhasil dihapus
      }
      current = current.next;
    }
    return null; // Nilai tidak ditemukan
  }

  // 3. Method reverse: Membalikkan arah susunan Doubly Linked List
  // 6. Komentar Big O: O(n) - karena harus membalik pointer di setiap node
  reverse() {
    if (this.head === null) return;

    let current = this.head;
    let temp = null;

    // Tukar pointer next dan prev untuk setiap node
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev; // Pindah ke node selanjutnya (menggunakan pointer prev yang lama)
    }

    // Tukar posisi head dan tail untuk list
    if (temp !== null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }

  // 3. Method print: Menampilkan list dari depan ke belakang, dan sebaliknya menggunakan tail
  // 6. Komentar Big O: O(n) - karena mencetak seluruh isi list dari ujung ke ujung
  print() {
    if (this.head === null) {
      console.log("List Kosong");
      return;
    }

    // Cetak dari Depan ke Belakang (Menggunakan Head)
    let currentForward = this.head;
    let forwardResult = "Dari Depan  : null <- ";
    while (currentForward !== null) {
      forwardResult += currentForward.data;
      if (currentForward.next !== null) forwardResult += " <=> ";
      currentForward = currentForward.next;
    }
    forwardResult += " -> null";
    console.log(forwardResult);

    // Cetak dari Belakang ke Depan (Menggunakan Tail)
    let currentBackward = this.tail;
    let backwardResult = "Dari Belakang: null <- ";
    while (currentBackward !== null) {
      backwardResult += currentBackward.data;
      if (currentBackward.prev !== null) backwardResult += " <=> ";
      currentBackward = currentBackward.prev;
    }
    backwardResult += " -> null";
    console.log(backwardResult);
  }
}

// =================================================================
// PROGRAM PENGUJIAN (DEMO)
// =================================================================

const list = new DoublyLinkedList();

console.log("--- Pengujian Append dan Prepend ---");
list.append("B");
list.append("C");
list.prepend("A"); // Menambahkan di awal
list.print();

console.log("\n--- Pengujian InsertAt ---");
list.insertAt(2, "X"); // Menyisipkan 'X' di indeks 2
list.print();

console.log("\n--- Pengujian Delete ---");
list.delete("X"); // Menghapus nilai 'X'
list.print();

console.log("\n--- Pengujian Reverse ---");
list.reverse(); // Membalikkan list
list.print();
