import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image, FlatList, ActivityIndicator, TouchableOpacity, NetInfo, Alert, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import getImagesFromApi from '../../actions';

class KittenList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            kittens: [],
            kittensBackup: [],
            imagesAmount: 0,
            hasStarted: false,
            connectionInfo: ''
        }

        this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);
    }

    handleFirstConnectivityChange(connectionInfo) {
        this.setState({
            connectionInfo: connectionInfo.type
        })
    }

    componentDidMount() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({
                connectionInfo: connectionInfo.type
            })
        })
        // On application startup all images should be tetrieved from API and each kitten should be assigned with randomly retrived..
        //   for (var i = 0; i < 100; i++) {
        //     this.props.getImages(namesArray[Math.floor(Math.random() * namesArray.length)] + ' the cat', description);
        //   }
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            'connectionChange',
            handleFirstConnectivityChange,
        );
    }

    handleFilterClick(imagesAmount) {
        if (this.state.connectionInfo == 'wifi') {
            AsyncStorage.getItem('@kittens').then((value) => {
                if (value && value.length) {
                    let kittens = JSON.parse(value);
                    this.props.loadFromStorage(kittens);
                }
                })
            alert('No internet!');
            return;
        }
        //bonus task allow user to specify count of items to retrieve
        this.setState({
            imagesAmount: imagesAmount,
            isLoading: true,
            hasStarted: true
        })
        if (this.props.kittens && this.props.kittens.length <= imagesAmount) {
            console.log('pateko');
            var needToGet = imagesAmount - this.props.kittens.length;
            for (var i = 0; i < needToGet; i++) {
                this.props.getImages(namesArray[Math.floor(Math.random() * namesArray.length)] + ' the cat', description);
            }
        }
        console.log(this.props.kittens);

    }

    renderItem = ({ item }) => {
        const uris = 'data:image/png;base64,' + item.image;
        return (
            <TouchableOpacity style={{ borderWidth: 1, flex: 1, flexDirection: 'column', justifyContent: 'center' }}
                onPress={() => this.props.navigation.navigate('Profile', { kitten: item })}>
                <Image style={{ width: 300, height: 200, margin: 5 }}
                    source={{ uri: uris }}
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderImages() {
        if (this.props.isLoading && this.state.hasStarted) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            return (
                <FlatList
                    data={this.props.kittens.slice(0, this.state.imagesAmount)}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 50 }}>
                    <Button title='20' onPress={() => this.handleFilterClick(20)} />
                    <Button title='50' onPress={() => this.handleFilterClick(50)} />
                    <Button title='100' onPress={() => this.handleFilterClick(100)} />
                </View>
                {this.renderImages()}
            </View>
        )
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

function mapDispatchToProps(dispatch) {
    return {
        getImages: (name, description) => dispatch(getImagesFromApi(name, description)),
        loadFromStorage: (kittens) => dispatch(loadStoreFromStorage(kittens))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KittenList);

const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

const namesArray = [
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