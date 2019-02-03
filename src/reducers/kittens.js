
  const initialState = {
    kittens: [],
    isLoading: true,
    error: false
  }
  export default function reducer(state = initialState, action) {
  switch (action.type) {
      case 'SUCCESS':{
       var kitten = {name: action.name, image: action.image, description: action.description}
        return{
          ...state,
          isLoading: false,
          kittens: [...state.kittens, kitten]
        }
      }
    
      default:
          return state;
  }
}