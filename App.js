import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewsScreen from "./Screen/News";
import DetailScreen from "./Screen/Detail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen
          name="NewsComponent"
          component={NewsScreen}
          options={{ title: "News" }}
        />
        <Stack.Screen name="News" title="News" component={NewsScreen} />
        <Stack.Screen name="Detail" title="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
