import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  position: Array<number>;
}

function Circle(props: Props) {
  const {} = props;

  return (
    <View
      style={[
        styles.circle,
        {top: props.position[0], left: props.position[1]},
      ]}></View>
  );
}
const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#A4DA2F',
    position: 'absolute',
  },
});

export default Circle;
