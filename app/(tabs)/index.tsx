import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function foryou(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen(){
    return <View>
        <Text>Hi from Home Page</Text>
    </View>
}
function SettingsScreen(){
    return <View>
        <Text>Hi from SettingsScreen Page</Text>
    </View>
}