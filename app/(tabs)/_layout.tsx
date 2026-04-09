import { Stack } from 'expo-router';
import React from 'react';
import { ApolloProvider } from "@apollo/client/react";
import client from "../../scripts/apollo";


export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
