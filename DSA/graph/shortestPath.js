class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    shortestPath(graph, start, end) {
        const queue = [[start, 0]];
        const visited = new Set([start]);
        while (queue.length > 0) {
          const [node, distance] = queue.shift();
          if (node === end) return distance;
          for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push([neighbor, distance + 1]);
            }
          }
        }
        return -1;
      }
}

const graph = new Graph();
const mewGraph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };
  console.log(graph.shortestPath(mewGraph, "A", "F"));
  