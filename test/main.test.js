import React from 'react'
import App from '../src/App'

describe('App Main', () => {
  const wrapper = shallow(<App />)

  it('tautology', () => {
    expect(true).toBe(true)
  });
});
