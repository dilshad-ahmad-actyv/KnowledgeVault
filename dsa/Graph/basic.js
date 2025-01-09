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


const minIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const size = exploreSize(grid, r, c, visited);
      console.log("size", size);
      if (size > 0 && min > size) min = size;
    }
  }

  return min;
};

function exploreSize(grid, r, c, visited) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === "W") return 0;

  const position = r + "," + c;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);

  return size;
}
const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const output = minIsland(grid);
console.log(output);