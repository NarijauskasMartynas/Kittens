import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { connect } from 'react-redux';
import getImagesFromApi from '../../actions';

class KittenList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      kittens: [],
      name: null,
    }
    let isLoading = true;
  }

  componentDidMount() {
    for(var i = 0; i<20; i++){
    this.props.getImages(namesArray[Math.floor(Math.random()*namesArray.length)] + ' the cat');
    }
    this.isLoading = false;

  }

  render() {
  //  const uris = 'data:image/png;base64,' + this.props.kittens[0].img;
    if (this.isLoading) {
      return(
      <View style={styles.container}>
        <Text> loadinas </Text>
      </View>)
    }
    else {
      console.log(this.props.kittens);
      return (
        <View style={styles.container}>
          <Text > {this.props.name} </Text>
        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    kittens: state.kittens.kittens,
    isLoading: state.kittens.isLoading,
  }
}

function mapDispatchToProps (dispatch) {
  return{
  getImages:(name) => dispatch(getImagesFromApi(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KittenList);


const namesArray =[
		"An",
		"Alfr",
		"Alvi",
    "Ari",
    "Pukis",
		"Arinbjorn",
		"Arngeir",
		"Arngrim",
		"Arnfinn",
		"Asgeirr",
		"Askell",
		"Asvald",
		"Bard",
		"Baror",
		"Bersi",
		"Borkr",
		"Bjarni",
		"Bjorn",
		"Brand",
		"Brandr",
		"Cairn",
		"Canute",
		"Dar",
		"Einarr",
		"Eirik",
		"Egill",
		"Engli",
		"Eyvindr",
		"Erik",
		"Eyvind",
		"Finnr",
		"Floki",
		"Fromund",
		"Geirmundr",
		"Geirr",
		"Geri",
		"Gisli",
		"Gizzur",
		"Gjafvaldr",
		"Glumr",
		"Gorm",
		"Grmir",
		"Gunnarr",
		"Guomundr",
		"Hak",
		"Halbjorn",
		"Halfdan",
		"Hallvard",
		"Hamal",
		"Hamundr",
		"Harald",
		"Harek",
		"Hedinn",
		"Helgi",
		"Henrik",
		"Herbjorn",
		"Herjolfr",
		"Hildir",
		"Hogni",
		"Hrani",
		"Ivarr",
		"Hrolf",
		"Jimmy",
		"Jon",
		"Jorund",
		"Kalf",
		"Ketil",
		"Kheldar",
		"Klaengr",
		"Knut",
		"Kolbeinn",
		"Kolli",
		"Kollr",
		"Lambi",
		"Magnus",
		"Moldof",
		"Mursi",
		"Njall",
		"Oddr",
		"Olaf",
		"Orlyg",
		"Ormr",
		"Ornolf",
		"Osvald",
		"Ozurr",
		"Poror",
		"Prondir",
		"Ragi",
		"Ragnvald",
		"Refr",
		"Runolf",
		"Saemund",
		"Siegfried",
		"Sigmundr",
		"Sigurd",
		"Sigvat",
		"Skeggi",
		"Skomlr",
		"Slode",
		"Snorri",
		"Sokkolf",
		"Solvi",
		"Surt",
		"Sven",
		"Thangbrand",
		"Thjodoft",
		"Thorod",
		"Thorgest",
		"Thorvald",
		"Thrain",
		"Throst",
		"Torfi",
		"Torix",
		"Tryfing",
		"Ulf",
		"Valgaror",
		"Vali",
		"Vifil",
		"Vigfus",
		"Vika",
		"Waltheof"
]