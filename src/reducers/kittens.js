import { AsyncStorage } from 'react-native';
const initialState = {
    kittens: [],
    isLoading: true,
    error: false
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SUCCESS': {
            var kitten = { name: action.name, image: action.image, description: action.description }
            var stringifiedArray = JSON.stringify(state.kittens);
            AsyncStorage.setItem('@kittens', stringifiedArray);
            return {
                ...state,
                isLoading: false,
                kittens: [...state.kittens, kitten]
            }
        }
        case 'LOAD': {
            return {
                ...state,
                isLoading: false,
                kittens: action.kittens
            }
        }

        default:
            return state;
    }
}