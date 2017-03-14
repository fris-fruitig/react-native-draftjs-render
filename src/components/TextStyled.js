// @flow

import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

type TextStyledPropsType = {
 text: string,
 type: string,
 onPress?: Function,
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    textDecorationLine: 'underline',
  },
});

const TextStyled = (props: TextStyledPropsType): any =>
  <Text style={styles[props.type]} onPress={props.onPress}>{props.text}</Text>;

TextStyled.propTypes = {
  text: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
};

TextStyled.defaultProps = {
  text: '',
  onPress: (): any => null,
};

export default TextStyled;
