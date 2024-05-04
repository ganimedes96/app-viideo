import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { FeedItem } from '../../components/FeedItem';
import { useRef, useState } from 'react';




export default function Home() {
  const feedItems = [ 
    {
      id: '1', 
      video: 'https://i.imgur.com/OANdtVJ.mp4',
      name: '@sujeitoprogramador',
      description: 'Criando o ShortDev do zero com RN',
     },
    {
      id: '2', 
      video: 'https://i.imgur.com/QcuZQbG.mp4',
      name: '@ganimedes',
      description: 'test',
     },
    {
      id: '3', 
      video: 'https://i.imgur.com/xKv5pE3.mp4',
      name: '@ganimedes',
      description: 'test',
     },
     {
      id: '4',
      video: 'https://i.imgur.com/ZhnW4PL.mp4',
      name: '@ganimedes',
      description: 'test',
     }
  ]
  const [showItem, setShowItem] = useState(feedItems[0])

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  })

  const {height: screenHeight} = Dimensions.get('screen')
  return (
    <View className="flex-1  bg-black">
      <FlatList
        data={feedItems}
        renderItem={({item}) => <FeedItem data={item} 
        currentVisibleItem={showItem}
        />}
        onViewableItemsChanged={onViewRef.current}
        snapToAlignment='center'
        snapToInterval={screenHeight}
        scrollEventThrottle={200}
        decelerationRate={"fast"}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100
        }}
      />
    </View>
  );
}
