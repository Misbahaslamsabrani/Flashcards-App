import React from 'react';
import { StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation';
import Deck from '../ReusableComponents/Deck';
import AddCard from '../ReusableComponents/AddCard';
import Decks from "../Decks"
const StackNavigation = createStackNavigator(
    {   'Decks': {
        screen: Decks,
        navigationOptions: {
            header: null
        }
    },
        Deck: {
            screen: Deck,
            navigationOptions: {
                title: "Deck"
            }
        },
        'Add Card': {
            screen: AddCard,
            navigationOptions: {
                title: "Add Card",
                headerBackImage: () => <Entypo name='back' size={30} color="blue" />,
            }
        },
    },
);

const styles = StyleSheet.create({
    button: {
        width: 120,
        margin: 20,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
    }
})
export default StackNavigation;