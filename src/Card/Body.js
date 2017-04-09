import React, {Component, PropTypes} from "react";
import "react-native";

import { StyleSheet, View } from 'react-primitives';

export default class Body extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { theme, children } = this.props;

        return (
            <View style={ styles.container }>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16
    }
});
