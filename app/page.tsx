'use client';
import React from "react";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";

import { Button, withAuthenticator, Text, View, Flex } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react-storage/styles.css";
import "@aws-amplify/ui-react-storage/storage-browser-styles.css";

import config from "../amplify_outputs.json";
import { StorageBrowser } from "@aws-amplify/ui-react-storage";

import { VERSION as AMPLIFY_VERSION } from './version-aws-amplify'
import { VERSION as AMPLIFY_UI_VERSION } from './version-aws-amplify-ui-react-storage'


Amplify.configure(config);

function Example() {
  return (
    <Flex
      direction="column"
      width="100vw"
      height="100vh"
      overflow="hidden"
      padding="xl"
    >
      <Flex>      <Button
        marginBlockEnd="xl"
        alignSelf="flex-start"
        size="small"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </Button>
        <Text>aws-amplify: {AMPLIFY_VERSION}</Text>
        <Text>ui-react-storage: {AMPLIFY_UI_VERSION}</Text></Flex>

      <View flex="1" overflow="hidden">

      <StorageBrowser />
      </View>
    </Flex>
  );
}

export default withAuthenticator(Example);
