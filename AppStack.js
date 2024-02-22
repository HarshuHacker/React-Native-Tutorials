import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#6a51ae" },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#e8e4f3" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            headerStyle: { backgroundColor: "#3a51ae" },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu Pressed")}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: "Guest",
          }}
          // options={({ route }) => ({
          //   title: "About " + route.params.name,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
