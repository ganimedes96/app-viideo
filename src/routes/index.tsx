import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home';
import Inbox from '../screens/inbox';
import Search from '../screens/search';
import Profile from '../screens/profile';
import New from '../screens/new';
import {Ionicons} from '@expo/vector-icons';
import ButtomNew from '../components/ButtonNew';

const Tab = createBottomTabNavigator();


export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0
        },
        tabBarActiveTintColor: '#fff', 
      }}
    >
      
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({focused,color, size}) => {
            if(focused) {
              return <Ionicons name="home" size={size} color={color} />
            }
            return <Ionicons name="home-outline" color={color} size={size} />
          }
          
        }}  
      />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarIcon: ({focused,color, size}) => {
            if(focused) {
              return <Ionicons name="search" size={size} color={color} />
            }
            return <Ionicons name="search-outline" color={color} size={size} />
          }
          
        }}
      />
      <Tab.Screen 
        name="New" 
        component={New} 
        options={{
          tabBarIcon: ({size}) => {
            return <ButtomNew size={size} />
          }
        }}  
      />
      <Tab.Screen 
        name="Inbox" 
        component={Inbox} 
        options={{
          tabBarIcon: ({focused,color, size}) => {
            if(focused) {
              return <Ionicons name="chatbox" size={size} color={color} />
            }
            return <Ionicons name="chatbox-outline" color={color} size={size} />
          }
          
        }}  
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({focused,color, size}) => {
            if(focused) {
              return <Ionicons name="person" size={size} color={color} />
            }
            return <Ionicons name="person-outline" color={color} size={size} />
          }
          
        }}  
      />
    </Tab.Navigator>
  )
}