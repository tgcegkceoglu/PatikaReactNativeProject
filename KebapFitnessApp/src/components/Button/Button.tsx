import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { ButtonProps } from './Button.types';
import styles from './Button.style';


const Button:React.FC<ButtonProps> = ({text,onPress}) => {
    return (
        <TouchableOpacity style ={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;
