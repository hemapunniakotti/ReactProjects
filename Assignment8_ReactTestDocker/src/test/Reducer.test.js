import reducer from '../reducers';

describe('Reducer', () => {
  it('should return the initial state', () => {
      expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify(
          {
            courses:{},
            enquiries:{}
          }
      ))
  })

  it('reducer test for GET_ENQUIRIES',() => {
      let state ={
        courses:[],
        
        enquiries:{}
      }
      state = reducer(state, {
          action: "GET_ENQUIRIES"
      })
      expect(state).toEqual({
        courses:[],
        
        enquiries:{}
      })
  })

  it('reducer test for GET_COURSES',() => {
    let state ={
        courses:[],
        enquiries:{}
    }
    state = reducer(state, {
        action: "GET_COURSES"
    })
    expect(state).toEqual({
        courses:[],
        
        enquiries:{}
    })
})
})
