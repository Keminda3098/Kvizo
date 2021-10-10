import React from 'react';
import { Image, Button, Text } from 'react-native';
import { NetworkConsumer } from 'react-native-offline';

const offline = () => (
    <View>
      <Image src="foo.com" />
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
            <Button title="Download image" onPress={downloadImage} />
          ) : (
            <Text>Downloading images is disabled since you are offline</Text>
          )
        }
      </NetworkConsumer>
    </View>
)