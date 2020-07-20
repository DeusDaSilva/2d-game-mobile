import {GameEngine} from 'react-native-game-engine';
import React, {useRef} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import Circle from './src/elements/Circle';

const App = () => {
  const gameEngineRef = useRef<GameEngine>(null);
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <GameEngine
            ref={gameEngineRef}
            entities={{
              1: {position: [40, 40], renderer: Circle}, //-- Notice that each entity has a unique id (required)
              2: {position: [60, 60], renderer: Circle}, //-- and a renderer property (optional). If no renderer
              3: {position: [80, 80], renderer: Circle}, //-- is supplied with the entity - it won't get displayed.
              4: {position: [100, 100], renderer: Circle},
              5: {position: [120, 120], renderer: Circle},
            }}>
            <StatusBar hidden={true}></StatusBar>
          </GameEngine>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
