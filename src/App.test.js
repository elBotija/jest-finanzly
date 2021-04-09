import React from 'react'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

configure({ adapter: new Adapter() })

describe('APP', () => {
  it('Interactua con nuestro store', () => {
    const prevent = jest.fn()
    const reducer = jest.fn().mockReturnValue({
      finanzas: [{ desc: 'lalala', cant: 150 }]
    })
    const store = createStore(reducer)
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(wrapper.text().includes('lalala')).toBe(true)
    wrapper.find('input').at(0).simulate('change', { target: { value: 'lele' } })
    wrapper.find('input').at(1).simulate('change', { target: { value: '200' } })
    wrapper.find('form').simulate('submit', { preventDefault: prevent })
    wrapper.find('button').at(2).simulate('click')
    const [a, ...rest] = reducer.mock.calls
    console.log(rest)
    expect(rest).toEqual([
      [
        { finanzas: [{ desc: 'lalala', cant: 150 }] },
        { type: 'AGREGAR', payload: { cant: 200, desc: 'lele' } }
      ],
      [
        { finanzas: [{ desc: 'lalala', cant: 150 }] },
        {type: 'ELIMINAR', index:0}
      ]
    ])
    console.log(wrapper.text())
  })
})