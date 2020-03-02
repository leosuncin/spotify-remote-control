import { Block, Button, Text } from 'galio-framework';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');
const SignIn: React.FC = () => {
  return (
    <Block flex center>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1541296481353-b1eb3a4e0309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80' }}
        style={styles.background}
      >
        <Block flex space="evenly" middle>
          <Text h1 bold color="#d8e6e7">Welcome</Text>
          <Button
            round
            iconFamily="FontAwesome"
            icon="spotify"
            size="large"
            color="success"
          >
            Sign in
          </Button>
        </Block>
      </ImageBackground>
    </Block>
  );
};
const styles = StyleSheet.create({
  background: { height, width },
});

export default SignIn;
