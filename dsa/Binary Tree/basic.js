// Features
// 1. At most two children per node
// 2. exactly one root node
// 3. exactly one path b/w root node and any node
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//        a
//      /   \
//     b     c
//   /   \    \
// d      e    f

// Depth First Search - Iterative solution

// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const stack = [root];
//   const result = [];

//   while (stack.length) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

// const output = depthFirstValues(a);
// console.log(output);

// const depthFirstValues = (root) => {
//   if (!root) return [];
//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);
//   return [root.val, ...leftValues, ...rightValues];
// };

// console.log(depthFirstValues(a));

// BreadthFristSearch

// const breadthFirstValues = (root)=>{
//   const values = [];
//   const queue = [root];

//   while (queue.length) {
//     const current = queue.shift();
//     values.push(current.val);

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return values;
// }

// console.log(breadthFirstValues(a));

// const treeIncludes = (root, target) => {
//   if(!root) return false;
//   const queue = [root];

//   while(queue.length){
//     const current = queue.shift();
//     if(current.val === target)return true;

//     if(current.right) queue.push(current.right);
//     if(current.left) queue.push(current.left);
//   }
//   return false;
// };

// const output = treeIncludes(a, "Z");
// console.log(output)

// const treeIncludes = (root, target) => {
//   if(!root) return false;
//   if(root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// const output = treeIncludes(a, "E");
// console.log(output)

// const treeSum = (root, sum) => {
//   if (!root) return sum;
//   const stack = [root];

//   while (stack.length) {
//     const current = stack.pop();
//     sum += current.val;

//     if (current.left) stack.push(current.left);
//     if (current.right) stack.push(current.right);
//   }
//   return sum;
// };

// const output = treeSum(a, 0);
// console.log(output);

// const treeSum = (root, sum) => {
//   if (!root) return 0;

//   return root.val + treeSum(root.left, sum) + treeSum(root.right, sum);
// };

// const output = treeSum(a, 0);
// console.log(output);

// const treeMinValue = (root, min) => {
//   if (!root) return null;
//   const queue = [root];

//   while (queue.length) {
//     const current = queue.shift();
//     if (current.val < min) min = current.val;

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }
//   return min;
// };

// const output = treeMinValue(a, Infinity);
// console.log(output);

// const treeMinValue = (root, min) => {
//   if (!root) return min;
//   return Math.min(
//     root.val,
//     treeMinValue(root.left, min),
//     treeMinValue(root.right, min)
//   );
// };

// const output = treeMinValue(a, Infinity);
// console.log(output);

const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.val;
  const maxChildVal = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  return root.val + maxChildVal;
};

const output = maxPathSum(a);
console.log(output);