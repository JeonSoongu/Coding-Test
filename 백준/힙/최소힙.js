const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  swap(parIdx, curIdx) {
    [this.heap[parIdx], this.heap[curIdx]] = [
      this.heap[curIdx],
      this.heap[parIdx],
    ];
  }
  insert(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  delete() {
    if (this.heap.length <= 1) return 0;

    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[curIdx] > this.heap[leftIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[curIdx] > this.heap[leftIdx] ||
      this.heap[curIdx] > this.heap[rightIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}

const heap = new MinHeap();
let extracts = "";
for (let i = 1; i < input.length; i++) {
  if (input[i] > 0) {
    heap.insert(input[i]);
  } else {
    extracts += heap.delete() + "\n";
  }
}

console.log(extracts);
