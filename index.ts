/**
 * ES6 Map where keys are n-tuples
 *
 * TODO: make this n-ary
 * TODO: add tests
 * TODO: add entries, keys, values
 */
export class TupleMap<T, U, V> {
  private state = new Map<[T, U], V>();
  *[Symbol.iterator]() {
    for (const _ of this.state) {
      yield _
    }
  }
  [Symbol.toStringTag]() {
    return '[object TupleMap]'
  }
  clear(): void {
    this.state.clear()
  }
  delete(left: T, right: U): boolean {
    if (this.has(left, right)) {
      return this.state.delete(this.getKey(left, right)!)
    }
    return false
  }
  forEach(cb: (value: V, index: [T, U], map: Map<[T, U], V>) => void, thisArg?: any): void {
    this.state.forEach((v, [l, r]) => cb.call(thisArg || this, v, [l, r], this))
  }
  get(left: T, right: U): V | undefined {
    const key = this.getKey(left, right)
    return key ? this.state.get(key) : undefined
  }
  has(left: T, right: U): boolean {
    return Boolean(this.getKey(left, right))
  }
  set(left: T, right: U, value: V): this {
    if (this.has(left, right)) {
      this.delete(left, right)
    }
    this.state.set([left, right], value)
    return this
  }
  get size(): number {
    return this.state.size
  }
  private getKey(left: T, right: U): [T, U] | undefined {
    // TODO: compile to ES6 and use for-of instead
    const entry = Array
      .from(this.state.entries())
      .find(([k]) => k[0] === left && k[1] === right)
    return entry ? entry[0] : undefined
  }
}
