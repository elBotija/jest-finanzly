import reducer, { agregar, eliminar } from './finanzas'

describe('Finanzas Duck', () => {
  describe('Action creators', () => {
    it('agregar', () => {
      const res = agregar(1)
      expect(res).toEqual({type: 'AGREGAR',payload: 1})
    })

    it('eliminar', () => {
      const res = eliminar(1);
      expect(res).toEqual({type: 'ELIMINAR', index: 1})
    })
  })
  describe('reducer', () => {
    it('AGREGAR', () => {
      const res = reducer([1], {type: 'AGREGAR', payload: 2})
      expect(res).toEqual([1,2]);
    })
 
    it('ELIMINAR', () => {
      const res = reducer([1,2,3], {type: 'ELIMINAR', index: 1})
      expect(res).toEqual([1,3]);
    })
    
    it('DEFAULT', () => {
      const res = reducer([1,2],{type: ''})
      expect(res).toEqual([1,2]);
    })
  })

})