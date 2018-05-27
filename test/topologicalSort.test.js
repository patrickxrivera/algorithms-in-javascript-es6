/* eslint-disable no-undef */

const { Graph, Vertex } = require('../src/topologicalSort.js');

describe('Topological Sort', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add edges', () => {
    graph.addEdge(5, 2);
    graph.addEdge(5, 0);
    expect(graph.vertices[5].inEdges.length).toBe(0);
    expect(graph.vertices[5].outEdges.length).toBe(2);
    expect(graph.vertices[5].outEdges[0].value).toEqual(2);
    expect(graph.vertices[5].outEdges[1].value).toEqual(0);
    expect(graph.vertices[2].inEdges.length).toBe(1);
    expect(graph.vertices[2].outEdges.length).toBe(0);
    expect(graph.vertices[2].inEdges[0].value).toBe(5);
  });

  it('should set isVisited instance variable to false by default', () => {
    const v = new Vertex(3);
    expect(v.isVisited).toBe(false);
  });

  it('should perform topological sort on the graph', () => {
    graph.addEdge(5, 2);
    graph.addEdge(5, 0);
    graph.addEdge(2, 3);
    graph.addEdge(3, 1);
    graph.addEdge(4, 1);
    graph.addEdge(4, 0);
    expect(graph.topologicalSort()).toEqual([1, 0, 4, 3, 2, 5]);
  });
});
