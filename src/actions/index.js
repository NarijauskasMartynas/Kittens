import { ImageEditor, ImageStore } from 'react-native';
const url = 'http://placekitten.com/g/200/300'
const cropData = {
    offset: { x: 0, y: 0 },
    size: { width: 200, height: 300 }
}

export default function getImagesFromApi(name, description) {
    return (dispatch) => {
        ImageEditor.cropImage(url, cropData, (imageURI) => {
            ImageStore.getBase64ForTag(imageURI, (base64Data) => {
                dispatch(getImagesSuccess(base64Data, name, description));
            }, (reason) => console.log(reason))
        }, (reason) => console.error(reason))
    }
}

export function loadStoreFromStorage(kittens) {
    return (dispatch) => {
        dispatch(loadStore(kittens))
    }
}

function loadStore(kittens) {
    return {
        type: 'LOAD',
        kittens
    }
}

function getImagesSuccess(image, name, description) {
    return {
        type: 'SUCCESS',
        image,
        name,
        description,
    }
}
