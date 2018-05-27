// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-mixed-operators */
/* eslint-disable class-methods-use-this */

class Vertex {
  constructor(value) {
    this.value = value;
    this.inEdges = [];
    this.outEdges = [];
    this.isVisited = false;
  }

  pushToInEdges(value) {
    this.inEdges.push(value);
  }

  pushToOutEdges(value) {
    this.outEdges.push(value);
  }
}

class Graph {
  constructor() {
    this.vertices = {};
    this.stack = [];
  }

  addEdge(fromV, toV) {
    if (!this.vertices[fromV]) this.initVertex(fromV);
    if (!this.vertices[toV]) this.initVertex(toV);

    this.vertices[fromV].pushToOutEdges(this.vertices[toV]);
    this.vertices[toV].pushToInEdges(this.vertices[fromV]);
  }

  initVertex(value) {
    this.vertices[value] = new Vertex(value);
  }

  topologicalSort() {
    Object.keys(this.vertices).forEach((value) => {
      if (this.isTopLevel(value)) {
        const { outEdges } = this.vertices[value];
        this.sortUtil(outEdges);
        this.addToStack(Number(value));
      }
    });

    return this.stack;
  }

  sortUtil(outEdges) {
    outEdges.forEach((vertex) => {
      if (this.hasOutEdges(vertex)) {
        this.sortUtil(vertex.outEdges);
      }

      if (vertex.isVisited) return;

      vertex.isVisited = true;
      this.addToStack(vertex.value);
    });
  }

  isTopLevel(value) {
    return this.vertices[value].inEdges.length === 0;
  }

  hasOutEdges({ outEdges }) {
    return outEdges.length !== 0;
  }

  addToStack(value) {
    this.stack.push(value);
  }
}

module.exports = { Graph, Vertex };
