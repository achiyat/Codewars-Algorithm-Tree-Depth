const isPlainObject = (value) => value?.constructor === Object;

const recordDepth = (tree, depth = 0) => {
  if (!isPlainObject(tree)) return null;

  tree.depth = depth;
  for (const key in tree) {
    recordDepth(tree[key], depth + 1);
  }
  return tree;
};

const tree = { a: 1, b: 2, c: { d: { e: 3 } } };
console.log(recordDepth(tree));
// Output:
// { a: 1, b: 2, c: { d: { e: 3, depth: 2 }, depth: 1 }, depth: 0 }
