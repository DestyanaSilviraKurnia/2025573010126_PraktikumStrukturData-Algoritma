// 02-queue-ll.js — Queue berbasis Linked List
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null; // depan antrian (dequeue dari sini)
    this.tail = null; // belakang antrian (enqueue ke sini)
    this.size = 0;
  }
  enqueue(data) {
    // tambah ke BELAKANG — O(1)
    const node = new Node(data);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  dequeue() {
    // hapus dari DEPAN — O(1)
    if (this.isEmpty()) return null;
    const val = this.head.data;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // queue jadi kosong
    this.size--;
    return val;
  }
  front() {
    return this.head ? this.head.data : null;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    let s = "FRONT → ",
      cur = this.head;
    while (cur) {
      s += `[${cur.data}] `;
      cur = cur.next;
    }
    console.log(" ", s.trim(), "← BACK");
  }
}

// ── Aplikasi: BFS pada Grid ─────────────────────────
// BFS (Breadth-First Search): jelajah graph/grid level per level
// Gunakan Queue: masukkan tetangga, proses berurutan
function bfsGrid(grid, startR, startC) {
  const rows = grid.length,
    cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue = new Queue();
  const arah = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // kanan,kiri,bawah,atas
  queue.enqueue([startR, startC]);
  visited[startR][startC] = true;
  let level = 0;
  while (!queue.isEmpty()) {
    const levelSize = queue.size;
    process.stdout.write(` Level ${level}: `);
    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue.dequeue();
      process.stdout.write(`(${r},${c}) `);
      for (const [dr, dc] of arah) {
        const nr = r + dr,
          nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          !visited[nr][nc] &&
          grid[nr][nc] !== "#"
        ) {
          visited[nr][nc] = true;
          queue.enqueue([nr, nc]);
        }
      }
    }
    console.log("");
    level++;
  }
}
console.log("=== Queue Demonstrasi ===");
const q = new Queue();
["Pelanggan-A", "Pelanggan-B", "Pelanggan-C"].forEach((p) => q.enqueue(p));
q.print();

console.log(" Dilayani:", q.dequeue());
q.enqueue("Pelanggan-D");
q.print();
console.log("\n=== BFS pada Grid (. = bisa jalan, # = tembok) ===");
const grid = [
  [".", ".", ".", "#", "."],
  [".", "#", ".", "#", "."],
  [".", "#", ".", ".", "."],
  [".", ".", "#", ".", "."],
];
bfsGrid(grid, 0, 0);
