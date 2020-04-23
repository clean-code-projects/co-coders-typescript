import { hello } from '.'

test('hello', () => {
  expect(hello()).toEqual('Hello, world!')
})
