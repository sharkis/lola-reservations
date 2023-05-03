import React, { useMemo, useReducer } from "react";
import { initialState, reducer } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, ResDate, ResArea, ResCustomer, ResSize } from "./screens";
import { StoreContext } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storeContext = useMemo(() => ({
    dispatch,
    state,
  }));

  return (
    <StoreContext.Provider value={storeContext}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Lola Rose" }}
          />
          <Stack.Screen
            name="ResDate"
            component={ResDate}
            options={{ title: "Date/Time" }}
          />
          <Stack.Screen
            name="ResArea"
            component={ResArea}
            options={{ title: "Area" }}
          />
          <Stack.Screen
            name="ResSize"
            component={ResSize}
            options={{ title: "Size" }}
          />
          <Stack.Screen
            name="ResCustomer"
            component={ResCustomer}
            options={{ title: "Customer Info" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreContext.Provider>
  );
}