$ = require 'jquery'
Velocity = require 'velocity-animate'

# Some code under test
plus = (a, b) ->
  a + b
describe "plus", ->
  it "should work", ->
    expect(plus(1, 2)).toBe 3

  return