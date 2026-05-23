class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log(" Index di luar batas!");
      return;
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  delete(data) {
    if (!this.head) return false;
    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
  search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === data) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  print() {
    if (!this.head) {
      console.log(" [List kosong]");
      return;
    }
    let result = "";
    let current = this.head;
    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;
      current = current.next;
    }
    console.log("", result, ` (size: ${this.size})`);
  }

  reserve() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  // 1. getAt(index) - Kembalikan data di posisi index, null jika tidak valid. Big O: O(n)
  getAt(index) {
    if (index < 0 || index >= this.size || !this.head) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  // 2. deleteAt(index) - Hapus node di posisi index. Big O: O(n)
  deleteAt(index) {
    if (index < 0 || index >= this.size || !this.head) {
      return null;
    }

    let deletedNodeData;
5
    // Kasus 1: Hapus elemen pertama (index 0)
    if (index === 0) {
      deletedNodeData = this.head.data;
      this.head = this.head.next;
    } else {
      // Kasus 2: Hapus elemen di tengah atau akhir
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      deletedNodeData = current.next.data;
      current.next = current.next.next;
    }

    this.size--;
    return deletedNodeData;
  }

  // 3. indexOf(data) - Mirip search, tapi kembalikan -1 jika tidak ketemu
  indexOf(data) {
    // Karena method search() bawaan Anda sudah mengembalikan index atau -1,
    // kita bisa langsung memanggilnya (reuse code).
    return this.search(data);
  }

  // 4. isEmpty() - Kembalikan true jika list kosong
  isEmpty() {
    return this.size === 0;
  }

  // 5. clear() - Hapus semua node
  clear() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();
console.log("=== Append ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();

console.log("\n=== Prepend ===");
ll.prepend(5);
ll.print();

console.log("\n=== Insert di indeks 2 ===");
ll.insertAt(15, 2);
ll.print();

console.log("\n=== Search ===");
console.log(" Indeks nilai 20:", ll.search(20));
console.log(" Indeks nilai 99:", ll.search(99));

console.log("\n=== Delete 20 ===");
ll.delete(20);
ll.print();

console.log("\n=== Reserve ===");
ll.reserve();
ll.print();

//KODE PENGUJIAN METHOD LATIHAN
const testLL = new LinkedList();

// Uji method lama
ll.append(10);
ll.append(20);

// Uji 5 method baru yang baru saja Anda buat
console.log(ll.isEmpty()); // Menguji isEmpty
console.log(ll.getAt(1)); // Menguji getAt
ll.deleteAt(0); // Menguji deleteAt
console.log(ll.indexOf(20)); // Menguji indexOf
ll.clear(); // Menguji clear
