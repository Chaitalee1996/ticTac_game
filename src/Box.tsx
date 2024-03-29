import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
// import { Entypo } from '@expo/vector-icons';

export default function Box({ no, boxInfo, chance, winner }) {

    const { isXChance, setIsXChance } = chance;
    const { boxes, setBoxes } = boxInfo;
    const player = isXChance ? 'X' : 'O';

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (boxes[no] === null && winner === null) {
                    setBoxes((prevBoxInfo) => {
                        prevBoxInfo[no] = player
                        return prevBoxInfo;
                    });
                    setIsXChance((prevState) => !prevState)
                }
            }}
        >
            {boxes[no] !== null ?
                <View style={styles.boxView}>
                    {boxes[no] === 'X' ?
                        <Entypo name="cross" size={68} color="brown" />
                        // <Text>X</Text>
                        :
                        <Entypo name="circle" size={60} color="purple" />
                        // <Text>O</Text>
                    }
                </View>
                : <View style={styles.boxView}></View>
            }
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    boxView: {
        minWidth: 110,
        minHeight: 110,
        borderWidth: 2,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }
})