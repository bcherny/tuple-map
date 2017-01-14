import test from 'ava'
import { TupleMap } from './'

test('#clear', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  map.set(2, 3, 4)
  t.is(map.size, 2)
  map.clear()
  t.is(map.size, 0)
})

test('#delete', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  map.set(2, 3, 4)
  t.is(map.size, 2)
  map.delete(1, 2)
  t.is(map.size, 1)
})

test('#forEach', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  map.set(2, 3, 4)
  map.forEach((v, [l]) => t.is(v, l === 1 ? 3 : 4))
})

test('#get', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  map.set(2, 3, 4)
  t.is(map.get(1, 2), 3)
  t.is(map.get(2, 3), 4)
})

test('#has', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  t.is(map.has(1, 2), true)
  t.is(map.has(1, 3), false)
})

test('#set', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  t.is(map.get(1, 2), 3)
  map.set(1, 2, 4)
  t.is(map.get(1, 2), 4)
})

test('iterating', t => {
  const map = new TupleMap
  map.set(1, 2, 3)
  map.set(2, 3, 4)
  for (let [[l], v] of map) {
    t.is(v, l === 1 ? 3 : 4)
  }
})
