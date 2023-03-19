/**
 * 根付き木
 */
export class MyTree<T>{
  private root_: MyNode<T> | undefined;
  get root() { return this.root_; }
  constructor(root?: T) { this.root_ = root && new MyNode<T>({ value: root }); }
  clone(): MyTree<T> { return MyTree.createFromRootNode(this.root_); }
  static createFromRootNode<T>(root?: MyNode<T>) {
    const newTree = new MyTree<T>();
    newTree.root_ = root;
    return newTree;
  }
  setRoot(root: T) { this.root_ = new MyNode<T>({ value: root }); }

  /** 深さ優先探索 */
  dfs(proc: (value: T) => unknown) { this.dbfs(proc, (arr) => arr.pop()); }
  /** 幅優先探索 */
  bfs(proc: (value: T) => unknown) { this.dbfs(proc, (arr) => arr.shift()); }
  /**
   * BFSとDFSの実装が似ているため共通化。違うのは記憶配列から要素を取得する部分だけ。
   * popを指定すれば深さ優先探索、shiftを指定すれば幅優先探索。
   */
  private dbfs(proc: (value: T) => unknown, getter: (arr: MyNode<T>[]) => MyNode<T> | undefined) {
    if (!this.root_) return;
    const arr = [this.root_];
    while (true) {
      const top = getter(arr);
      if (!top) break;
      proc(top.value);
      arr.push(...top.children);
    }
  }

}

export class MyNode<T>{
  public readonly parent: MyNode<T> | undefined;
  public readonly children: MyNode<T>[];
  public value: T;
  constructor({ value, parent, children }: { value: T, parent?: MyNode<T>, children?: MyNode<T>[] }) {
    this.value = value;
    this.parent = parent;
    this.children = children || [];
  }
  clone() { return new MyNode<T>({ value: this.value, parent: this.parent, children: this.children }); }
  subTree() { return MyTree.createFromRootNode(this); }

  /** root要素か判定する。 */
  get isRoot() {
    return this.parent === undefined;
  }

  /**
   * 子供を追加する。
   * @returns 子要素を返却する。
   */
  addChild(value: T) {
    const child = new MyNode<T>({ value, parent: this });
    this.children.push(child);
    return child;
  }
  /**
   * 根の要素からのNodeのリストを取得する。
   * @returns MyNodeの配列。最初の要素は根で、最後の要素はthisを示す。
   */
  getPath(): MyNode<T>[] {
    const arr: MyNode<T>[] = [];
    let n: MyNode<T> | undefined = this;
    while (n) {
      arr.push(n);
      n = n.parent;
    }
    return arr.reverse();
  }

  log(toStr: (value: T) => string, indent: string = '  ', separator: string = '\n'): string {
    return this.log_(toStr, indent, separator).join(separator);
  }
  private log_(toStr: (value: T) => string, indent: string = '  ', separator: string = '\n'): string[] {
    const o = this.children.map((child) => child.log_(toStr, indent, separator)).reduce((p, c) => [...p, ...c], []).map((v) => `${indent}${v}`);
    return [`${toStr(this.value)}`, ...o];
  }
}
