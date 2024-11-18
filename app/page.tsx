'use client';
import React from 'react';

import { Flex, View, Text } from '@aws-amplify/ui-react';
import { VERSION as AMPLIFY_VERSION } from './version-aws-amplify'
import { VERSION as AMPLIFY_UI_VERSION } from './version-aws-amplify-ui-react-storage'
import { managedAuthAdapter } from "./managedAuthAdapter";

import { componentsDefault, createStorageBrowser } from "@aws-amplify/ui-react-storage/browser";
import { SignIn, SignOutButton } from "./managed-auth/routed/components";

import '@aws-amplify/ui-react-storage/storage-browser-styles.css';
import '@aws-amplify/ui-react-storage/styles.css';

const { StorageBrowser } = createStorageBrowser({
  config: managedAuthAdapter,
  components: componentsDefault
});

function App() {
  const [showSignIn, setShowSignIn] = React.useState(false);

  return (
    <Flex
      direction="column"
      width="100vw"
      height="100vh"
      overflow="hidden"
      padding="xl"
    >
      <Text>aws-amplify: {AMPLIFY_VERSION}</Text>
      <Text>ui-react-storage: {AMPLIFY_UI_VERSION}</Text>
      {!showSignIn ? (
        <SignIn onSignIn={() => setShowSignIn(true)} />
      ) : (
        <>
          <SignOutButton onSignOut={() => setShowSignIn(false)} />
          <View flex="1" overflow="hidden">
              <StorageBrowser
                displayText={{ LocationsView: { title: 'Home - Managed Auth' } }}
              />
            </View>
        </>
      )}
    </Flex>
  )
}

export default App;
