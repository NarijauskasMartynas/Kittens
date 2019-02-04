import { AsyncStorage } from 'react-native';
const initialState = {
    kittens: [],
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SUCCESS': {
            var kitten = { name: action.name, image: action.image, description: action.description }
            return {
                ...state,
                kittens: [...state.kittens, kitten]
            }
        }
        case 'LOAD': {
            return {
                ...state,
                kittens: action.kittens
            }
        }

        default:
            return state;
    }
}