import {ImageEditor, ImageStore} from 'react-native';
const url = 'http://placekitten.com/g/200/300'
const cropData = {
  offset:{x:0,y:0}, 
  size:{width:300, height:200}
}

export default function getImagesFromApi(name){
  return(dispatch) => {
    ImageEditor.cropImage(url, cropData, (imageURI) => {
      ImageStore.getBase64ForTag(imageURI, (base64Data) => {
          dispatch(getImagesSuccess(base64Data, name));
      }, (reason) => console.log(reason))
 }, (reason) => console.error(reason))
  }
}

function getImagesSuccess(image, name){
  return{
    type:'SUCCESS',
    image,
    name
  }
}
