import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Finanzas from './Finanzas';

configure({ adapter: new Adapter() })

describe('Finanzas', () => {
  it('eliminar finanza onClick', () => {
    const finanzas = [
      {desc: 'Finanza1', cant: 100},
      {desc: 'Finanza2', cant: 80}
    ]
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(<Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza}/>)
    const buttons = wrapper.find('button');
    expect(buttons.length).toEqual(2);
    buttons.at(0).simulate('click');
    expect(eliminarFinanza.mock.calls).toEqual([[0]])
    const res = wrapper.find('button').length
    expect(res).toBe(2)

    console.log(wrapper.text().includes('Finanza1'))
    const res2 = wrapper.text().includes('Finanza1') && wrapper.text().includes('Finanza2')
    expect(res2).toEqual(true)
  })
})