# 📈 Big O Notation: A Guide to Algorithm Complexity  

Big O Notation is a mathematical concept used in computer science to describe the performance or complexity of an algorithm. It measures how an algorithm's runtime or space requirements grow relative to the size of the input.  

---

## 🔍 Why Big O Matters  

Understanding Big O helps developers:  
- Write efficient code.  
- Compare different algorithms for the same problem.  
- Optimize runtime and memory usage in their applications.  

---

## 🚀 Common Big O Notations  

### 1. **O(1) - Constant Time**
The runtime does not depend on the size of the input.  
- **Example**: Accessing an array element by index.
```javascript
function getFirstElement(arr) {
    return arr[0]; // Always takes the same amount of time.
}


### 2. O(log n) - Logarithmic Time
The runtime grows logarithmically as the input size increases.

Example: Binary search in a sorted array.

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

### 3. O(n) - Linear Time
The runtime grows linearly with the input size.

Example: Iterating through an array.
javascript
Copy code
function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}




### 4. O(n log n) - Linearithmic Time
Common in algorithms that involve sorting.

Example: Merge sort, Quick sort.
javascript
Copy code
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}



### 5. O(n²) - Quadratic Time
The runtime grows quadratically with the input size.

Example: Nested loops for comparing all pairs.
javascript
Copy code
function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}



### 6. O(2ⁿ) - Exponential Time
The runtime doubles with each additional input size.

Example: Recursive Fibonacci calculation.
javascript
Copy code
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}



### 7. O(n!) - Factorial Time
The runtime grows factorially with input size.

Example: Generating all permutations of a string.
javascript
Copy code
function permutations(str) {
    if (str.length <= 1) return [str];
    const perms = [];
    for (let i = 0; i < str.length; i++) {
        const rest = str.slice(0, i) + str.slice(i + 1);
        for (let perm of permutations(rest)) {
            perms.push(str[i] + perm);
        }
    }
    return perms;
}



📊 Growth Rates Comparison
Big O Notation	Name	Example Use Case
O(1)	Constant	Accessing an array
O(log n)	Logarithmic	Binary search
O(n)	Linear	Single loop iteration
O(n log n)	Linearithmic	Efficient sorting
O(n²)	Quadratic	Nested loops
O(2ⁿ)	Exponential	Recursive branching
O(n!)	Factorial	Permutations


