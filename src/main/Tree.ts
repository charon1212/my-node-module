/**
 * 根付き木
 */
export class MyTree<T>{
  private root_: MyNode<T> | undefined;
  get root() { return this.root_; }
  constructor(root?: T) { this.root_ = root && new MyNode<T>({ value: root }); }
  setRoot(root: T) { this.root_ = new MyNode<T>({ value: root }); }
}

export class MyNode<T>{
  public readonly parent: MyNode<T> | undefined;
  public readonly children: MyNode<T>[] = [];
  public value: T;
  constructor({ value, parent }: { value: T, parent?: MyNode<T> }) {
    this.value = value;
    this.parent = parent;
  }

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
}
