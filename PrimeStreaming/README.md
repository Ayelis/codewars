# Problem: Prime Streaming PG-13
	Difficulty: 3
	Date Completed: 2025/04/07

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/5519a584a73e70fa570005f5)

## 🛠 **Class Usage**  
### **Class:** `Primes`  
*A lightning-fast, memory-efficient infinite prime generator in JavaScript.*  

#### **Method:** `stream()`  
Generates primes indefinitely using an **incremental Sieve of Eratosthenes**.  

### **Inputs:**  
- *None* (Pure generator—no arguments required).  

### **Returns:**  
- A **generator** (`function*`) that yields prime numbers in ascending order:  
  ```javascript
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...
  ```

### **Examples:**  
1. **Get the first 10 primes:**  
   ```javascript
   const primes = Primes.stream();
   console.log([...Array(10)].map(() => primes.next().value));
   // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
   ```

2. **Stream until a condition is met (e.g., primes < 100):**  
   ```javascript
   for (const p of Primes.stream()) {
     if (p >= 100) break;
     console.log(p); // Logs primes 2 to 97
   }
   ```

3. **Generate 1 million primes (no memory leaks!):**  
   ```javascript
   let count = 0;
   for (const p of Primes.stream()) {
     if (++count >= 1_000_000) break;
     // Process prime `p` here
   }
   ```

## ⚙ **Technical Details**  
### **Algorithm:**  
- **Incremental Sieve of Eratosthenes**  
  - Dynamically tracks composites using a `Map`.  
  - Skips even numbers (except 2) for efficiency.  

### **Performance:**  
- **Time:** ~3-5 seconds for 1M primes (Node.js/V8).  
- **Memory:** O(√n) space (stores only necessary composites).  

### **Optimizations:**  
- **No hardcoded primes** → Fully algorithmic.  
- **Lazy evaluation** → No upper limit.  

---

## 🚀 **Advanced Use Cases**  
### **Need Speed?**  
1. **Web Workers:**  
   ```javascript
   // Offload prime generation to avoid blocking the main thread.
   const worker = new Worker('primes-worker.js');
   worker.postMessage({ action: 'stream', limit: 1e6 });
   ```

2. **Wheel Factorization (Skip multiples of 2, 3, 5):**  
   *(Ask for the optimized version!)*  

---

## 📜 **License**  
Public Domain (Use freely!).  

---

### 🔍 **Want More?**  
- **Segmented Sieve** (for bounded ranges) → Ask!  
- **Miller-Rabin Test** (probabilistic, for huge primes) → Ask!  
