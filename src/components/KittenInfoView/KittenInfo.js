import React, { Component } from "react";
import { Text, View, Image } from "react-native";
class KittenInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            kittens: [],
            name: null,
        }
    }


    render() {
        const kitten = this.props.navigation.getParam('kitten')
        const uris = 'data:image/png;base64,' + kitten.image;

        return (

            <View>
                <Image style={{ width: '100%', height: 300, marginBottom: 5 }}
                    source={{ uri: uris }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {kitten.name} </Text>
                <Text> {kitten.description} </Text>
            </View>
        )
    }
}
export default KittenInfo;