import React from 'react';
import { Pressable } from 'react-native';
import MyText from './MyText.jsx';
import style from '../styles/Components.js';

export default function MyButton(props) {
    const { title = 'Default' } = props;

    return (
        <Pressable style={[style.button, props.style]} onPress={props.onPress}>
            <MyText style={style.buttonFont}>{title}</MyText>
        </Pressable>
    );
}