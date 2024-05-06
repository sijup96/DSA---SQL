class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex, [...this.adjacencyList[vertex]]);
    }
  }
  deleteEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  deleteVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    for (let adjancyVertex of this.adjacencyList[vertex]) {
      this.deleteEdge(vertex, adjancyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  BFS(startVertex) {
    let visited = new Set();
    let queue = [startVertex];
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        console.log(currentVertex);

        for (let neighbor of this.adjacencyList[currentVertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
  DFS(startVertex) {
    const visited = new Set();
    const dfsTraversal = (vertex) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
        for (let neighbor of this.adjacencyList[vertex]) {
          dfsTraversal(neighbor);
        }
      }
    };
    dfsTraversal(startVertex);
  }
 
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("D", "C");

graph.display();

console.log("*************************");
graph.deleteEdge("A", "B");
graph.display();

console.log("*************************");
// graph.deleteVertex("D");
graph.display();
console.log("*************************");
graph.BFS("D");
console.log("*************************");
graph.DFS("D");
console.log("*************************");
