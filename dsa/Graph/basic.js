// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// };

// const depthFirstPrint = (graph, source) => {
//   console.log(source);

//   for (let neighbour of graph[source]) {
//     depthFirstPrint(graph, neighbour);
//   }
// };
// const graph = {
//   a: ["c", "b"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };

// depthFirstPrint(graph, "a");

// const breadthFirstPrint = (graph, source) => {
//   const queue = [source];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     console.log(current);

//     for (let neighbour of graph[current]) {
//       queue.push(neighbour);
//     }
//   }
// };

// const graph = {
//   a: ["c", "b"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };

// breadthFirstPrint(graph, "a");

// Creating graph dynamically

// const graph = {};

// function addNode(node) {
//   if (!graph[node]) {
//     graph[node] = [];
//   }
// }

// function addEdge(node1, node2) {
//   if (!graph[node1]) {
//     addNode(node1);
//   }

//   if (!graph[node2]) {
//     addNode(node2);
//   }
//   graph[node1].push(node2);
// }

// addNode("a");
// addNode("b");
// addNode("c");
// addNode("d");
// addNode("e");
// addNode("f");

// addEdge("a", "c");
// addEdge("a", "b");
// addEdge("b", "d");
// addEdge("c", "e");
// addEdge("d", "f");

// console.log(graph)

// const hasPath = (graph, source, destination) => {
//   if (source === destination) return true;

//   for (let neighbour of graph[source]) {
//     if (hasPath(graph, neighbour, destination)) {
//       return true;
//     }
//   }
//   return false;
// };

// const graph = {
//   a: ["c", "b"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };
// const output = hasPath(graph, "a", "e");
// console.log(output);

// const hasPath = (graph, src, dst)=>{
//     const queue = [src];

//     while(queue.length){
//         const current = queue.shift();
//         if(current === dst) return true;

//         for(let neighbour of graph[current]){
//             queue.push(neighbour);
//         }
//     }
//     return false;
// }

// const output = hasPath(graph, 'a', 'e');
// console.log(output)

// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;

//     if (!graph[a]) graph[a] = [];
//     if (!graph[b]) graph[b] = [];

//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// buildGraph(edges);

// const undirectedGraph = (edges, NodeA, NodeB) => {
//   const graph = buildGraph(edges);
//   return hasPath(graph, NodeA, NodeB, new Set());
// };

// function hasPath(graph, src, dst, visited) {
//   if (src === dst) return true;

//   if (visited.has(src)) return false;
//   visited.add(src);

//   for (let neighbour of graph[src]) {
//     if (hasPath(graph, neighbour, dst, visited)) return true;
//   }
//   return false;
// }

// const output = undirectedGraph(edges, "j", "o");
// console.log(output)

// const connectedComponentsCount = (graph) => {
//   const visited = new Set();
//   let count = 0;
//   for (let node in graph) {
//     if (explore(graph, node, visited)) {
//       count++;
//     }
//   }
//   return count;
// };

// function explore(graph, current, visited) {
//   if (visited.has(String(current))) return false;
//   visited.add(String(current));

//   for (let neighbour of graph[current]) {
//     explore(graph, neighbour, visited);
//   }

//   return true;
// }
// const graph = {
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2],
// };

// const output = connectedComponentsCount(graph);
// console.log(output)

// const largestComponent = (graph) => {
//   const visited = new Set();
//   let largest = 0;
//   for (let node in graph) {
//     let size = exploreSize(graph, node, visited);
//     if (size > largest) largest = size;
//   }
//   return largest;
// };

// function exploreSize(graph, current, visited) {
//   if (visited.has(current)) return 0;
//   visited.add(current);

//   let size = 1;
//   for (let neighbour of graph[current]) {
//     size += exploreSize(graph, neighbour, visited);
//   }
//   return size;
// }

// const graph = {
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2],
// };

// const output = largestComponent(graph);
// console.log(output)

// const shortestPath = (edges, NodeA, NodeB) => {
//   const graph = buildGraph(edges);
//   const queue = [[NodeA, 0]];
//   const visited = new Set([NodeA]);
//   while (queue.length) {
//     const [node, distance] = queue.shift();

//     if (node === NodeB) return distance;

//     for (let neighbour of graph[node]) {
//       if (!visited.has(neighbour)) {
//         visited.add(neighbour);
//         queue.push([neighbour, distance + 1]);
//       }
//     }
//   }
// };

// function explorePath(graph, src, dst) {}

// const edges = [
//   ["w", "x"],
//   ["x", "y"],
//   ["z", "y"],
//   ["z", "v"],
//   ["w", "v"],
// ];

// const output = shortestPath(edges, "w", "z");
// console.log(output)

// function buildGraph(edges) {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;

//     if (!graph[a]) graph[a] = [];
//     if (!graph[b]) graph[b] = [];

//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// }

// const isIslandCount = (grid) => {
//   const visited = new Set();
//   let count = 0;
//   const rows = grid.length;
//   const cols = grid[0].length;

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (explore(grid, r, c, visited)) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// function explore(grid, r, c, visited) {
//   const rowInbounds = 0 <= r && r < grid.length;
//   const colInbounds = 0 <= c && c < grid[0].length;

//   if (!rowInbounds || !colInbounds) return false;

//   if (grid[r][c] === "W") return false;

//   const position = r + "," + c;
//   if (visited.has(position)) return false;
//   visited.add(position);

//   explore(grid, r - 1, c, visited);
//   explore(grid, r + 1, c, visited);
//   explore(grid, r, c - 1, visited);
//   explore(grid, r, c + 1, visited);

//   return true;
// }

// const grid = [
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "L", "W"],
//   ["W", "W", "L", "L", "W"],
//   ["L", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "W"],
// ];

// const output = isIslandCount(grid);
// console.log(output)

// const minIsland = (grid) => {
//   const visited = new Set();
//   let min = Infinity;
//   const rows = grid.length;
//   const cols = grid[0].length;

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       const size = exploreSize(grid, r, c, visited);
//       console.log("size", size);
//       if (size > 0 && min > size) min = size;
//     }
//   }

//   return min;
// };

// function exploreSize(grid, r, c, visited) {
//   const rowInbounds = 0 <= r && r < grid.length;
//   const colInbounds = 0 <= c && c < grid[0].length;

//   if (!rowInbounds || !colInbounds) return 0;

//   if (grid[r][c] === "W") return 0;

//   const position = r + "," + c;
//   if (visited.has(position)) return 0;
//   visited.add(position);

//   let size = 1;
//   size += exploreSize(grid, r - 1, c, visited);
//   size += exploreSize(grid, r + 1, c, visited);
//   size += exploreSize(grid, r, c - 1, visited);
//   size += exploreSize(grid, r, c + 1, visited);

//   return size;
// }
// const grid = [
//   ["W", "L", "W", "W", "W"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "L", "W"],
//   ["W", "W", "L", "L", "W"],
//   ["L", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "W"],
// ];

// const output = minIsland(grid);
// console.log(output);

// function depthFirstPrintGraph(graph, source) {
//   const stack = [source];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);

//     for (let neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// }

// const breadthFristPrint = (graph, source) => {
//   const queue = [source];
//   const output = [];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     output.push(current);

//     for (let neighbour of graph[current]) {
//       queue.push(neighbour);
//     }
//   }
//   return output;
// };

// function depthFirstPrintGraph(graph, source) {
//   console.log(source);

//   for (let neighbour of graph[source]) {
//     depthFirstPrintGraph(graph, neighbour);
//   }
// }
// const graph = {
//   a: ["b", "c"],
//   c: ["e"],
//   e: [],
//   b: ["d"],
//   d: ["f"],
//   f: [],
// };

// const source = "a";
// depthFirstPrintGraph(graph, source);
// // const result = breadthFristPrint(graph, source);
// // console.log(result);

// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;
//   console.log(graph, src, dst);

//   for (let neighbour of graph[src]) {
//     if (hasPath(graph, neighbour, dst) === true) return true;
//   }

//   return false;
// };

// const hasPath = (graph, src, dst) => {
//   const queue = [src];
//   if (src === dst) return true;

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (current === dst) return true;

//     for (let neighbour of graph[current]) {
//       queue.push(neighbour);
//     }
//   }
//   return false;
// };
// const graph = {
//   f: ["g", "i"],
//   g: ["h"],
//   i: ["g"],
//   i: ["k"],
//   j: ["i"],
//   h: [],
//   k: [],
// };
// const source = "f";
// const destination = "k";
// const result = hasPath(graph, source, destination);
// console.log(result);

// ==========================Undirected Graph====================

// const undirectedGraph = (edges, source, destination) => {
//   const graph = buildGraph(edges);
//   return hasPath(graph, source, destination, new Set());
// };

// const edges = [
//   ["i", "j"],
//   ["i", "k"],
//   ["k", "m"],
//   ["k", "l"],
//   ["n", "o"],
//   // ["g"]
// ];

// const source = "j";
// const destination = "n";
// const result = undirectedGraph(edges, source, destination);
// console.log(result);

// function buildGraph(edges) {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!a || !b) {
//       if (a) graph[a] = [];
//       if (b) graph[b] = [];
//     } else {
//       if (!graph[a]) graph[a] = [];
//       if (!graph[b]) graph[b] = [];

//       graph[a].push(b);
//       graph[b].push(a);
//     }
//   }
//   return graph;
// }

// function hasPath(graph, src, dst, visited) {
//   if (src === dst) return true;
//   if (visited.has(src)) return false;

//   visited.add(src);

//   for (let neighbour of graph[src]) {
//     if (hasPath(graph, neighbour, dst, visited) === true) return true;
//   }
//   return false;
// }

// const connectedComponentsCount = (graph) => {
//   let count = 0;
//   const visited = new Set();
//   for (let node in graph) {
//     if (explore(graph, node, visited) === true) {
//       count++;
//     }
//   }
//   return count;
// };

// const graph = {
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2],
//   9: [],
//   100: [],
// };

// const result = connectedComponentsCount(graph);
// console.log(result);

// function explore(graph, node, visited) {
//   if (visited.has(String(node))) return false;
//   visited.add(String(node));

//   for (let neighbour of graph[node]) {
//     explore(graph, neighbour, visited);
//   }

//   return true;
// }

// function largestComponent(graph) {
//   const visited = new Set();

//   let max = -Infinity;
//   for (let node in graph) {
//     const size = exploreSize(graph, node, visited);
//     if (size > max) max = size;
//   }
//   return max;
// }

// function exploreSize(graph, node, visited, count = 1) {
//   if (visited.has(String(node))) return 0;
//   visited.add(String(node));

//   for (let neighbour of graph[node]) {
//     count += exploreSize(graph, neighbour, visited);
//   }

//   return count;
// }

// const graph = {
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2],
//   9: [],
//   100: [],
// };

// const result = largestComponent(graph);
// console.log(result);

// const shortestPath = (edges, node, target) => {
//   const graph = buildGraph(edges);
//   const visited = new Set([node]);
//   const queue = [[node, 0]];

//   while (queue.length > 0) {
//     const [node, distance] = queue.shift();

//     if (node === target) return distance;

//     for (let neighbour of graph[node]) {
//       if (!visited.has(neighbour)) {
//         visited.add(neighbour);
//         queue.push([neighbour, distance + 1]);
//       }
//     }
//   }
//   return -1;
// };

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!graph[a]) graph[a] = [];
//     if (!graph[b]) graph[b] = [];

//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const edges = [
//   ["w", "x"],
//   ["x", "y"],
//   ["z", "y"],
//   ["z", "v"],
//   ["w", "v"],
// ];

// const source = "w";
// const target = "s";

// const shortest = shortestPath(edges, source, target);
// console.log(shortest);

// const a = "a";
// const b = "b";

// console.log(a < b);

// const str = "dil129";

// for (let i = 0; i < str.length; i++) {
//   const isLowerAlpha = str[i] >= "a" && str[i] <= "z";
//   const isNumeric = str[i] >= "0" && str[i] <= "9";
//   console.log(str[i], isLowerAlpha, isNumeric);
// }

// function isFourDigitNumber(str) {
//   if (str.length !== 4) return false;

//   for (let i = 0; i < 4; i++) {
//     const char = str[i];
//     if (char < "0" || char > "9") return false;
//   }
//   return true;
// }

// const result = isFourDigitNumber("o001");
// console.log(result);

// const islandCount = (grid) => {
//   const visited = new Set();
//   const rLen = grid.length;
//   const cLen = grid[0].length;
//   let count = 0;

//   for (let r = 0; r < rLen; r++) {
//     for (let c = 0; c < cLen; c++) {
//       const isIsland = exploreIsland(grid, r, c, rLen, cLen, visited);
//       if (isIsland === true) count++;
//     }
//   }

//   return count;
// };

// function exploreIsland(grid, r, c, rLen, cLen, visited) {
//   const inboundRow = 0 <= r && r < rLen;
//   const inboundCol = 0 <= c && c < cLen;

//   if (!inboundRow || !inboundCol) return false;
//   if (grid[r][c] === "W") return false;

//   let position = r + "," + c;
//   if (visited.has(position)) return false;
//   visited.add(position);

//   exploreIsland(grid, r - 1, c, rLen, cLen, visited);
//   exploreIsland(grid, r + 1, c, rLen, cLen, visited);
//   exploreIsland(grid, r, c - 1, rLen, cLen, visited);
//   exploreIsland(grid, r, c + 1, rLen, cLen, visited);

//   return true;
// }

// const grid = [
//   ["W", "W", "W", "W", "W", "W"],
//   ["W", "L", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "L", "W"],
//   ["W", "W", "W", "L", "L", "W"],
//   ["W", "W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W", "W"],
//   ["W", "L", "W", "W", "L", "L"],
//   ["W", "W", "W", "W", "L", "L"],
// ];

// const result = islandCount(grid);
// console.log(result);

const minIsLand = (grid) => {
  let minSize = Infinity;
  const visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let size = exploreSize(grid, i, j, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize === Infinity ? "No Island" : minSize;
};

function exploreSize(grid, r, c, visited) {
  const inBoundRow = r >= 0 && r < grid.length;
  const inBoundCol = c >= 0 && c < grid[0].length;
  if (!inBoundRow || !inBoundCol) return 0;

  if (grid[r][c] === "W") return 0;

  let position = r + "," + c;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r, c + 1, visited);
  size += exploreSize(grid, r, c - 1, visited);
  return size;
}

const grid = [
  ["W", "W", "L", "L", "W", "W"],
  ["W", "W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L", "W"],
  ["W", "W", "W", "L", "W", "W"],
  ["W", "W", "L", "L", "W", "W"],
  ["W", "L", "W", "L", "W", "W"],
  ["W", "L", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "W", "W"],
];

const result = minIsLand(grid);
console.log(result);
