import * as AppAuth from 'expo-app-auth';
import { Block, Button, Text } from 'galio-framework';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');
const spotifyConfig: AppAuth.OAuthProps = {
  issuer: 'https://accounts.spotify.com',
  scopes: [
    'user-read-playback-state',
    'user-read-email',
    'playlist-read-collaborative',
    'user-modify-playback-state',
    'user-read-private',
    'playlist-modify-public',
    'user-top-read',
    'user-read-currently-playing',
    'playlist-read-private',
    'user-follow-read',
    'user-read-recently-played',
    'playlist-modify-private',
    'user-library-read',
  ],
  clientId: process.env.SPOTIFY_CLIENT_ID,
  redirectUrl: AppAuth.getDefaultOAuthRedirect(),
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: process.env.REDIRECT_URL,
  },
};
const SignIn = () => {
  async function handleSignIn() {
    console.info(spotifyConfig);
    try {
      const authState = await AppAuth.authAsync(spotifyConfig);
      console.info(authState);
    } catch (error) {
      console.error(error);
    }
  }

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
            onPress={handleSignIn}
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
