import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';

configure({ adapter: new Adapter() })

describe('Dashboard', () => {
  it('Valor', () => {
    const wrapper = shallow(<Dashboard valor={200}/>)
    const res = wrapper.find('strong').text().includes('200');
    expect(res).toBe(true)
  })
})