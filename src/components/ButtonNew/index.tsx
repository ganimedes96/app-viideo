import { Text, View } from 'react-native';
import {Entypo} from '@expo/vector-icons';


export default function ButtomNew({size}) {
  return (
    <View className="rounded bg-sky-400 p-2 px-4">
      <Entypo name="plus" size={size} color="black" />
    </View>
  );
}
