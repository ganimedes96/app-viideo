
import { Dimensions, Pressable, TouchableOpacity, View , Text, Platform} from "react-native";
import {Video} from 'expo-av'
import { useEffect, useRef, useState } from "react";
import {Ionicons} from '@expo/vector-icons';


export function FeedItem({data, currentVisibleItem}: any) {
  const video = useRef(null)
  const [status, setStatus] = useState<any>({})
  const {height: screenHeight} = Dimensions.get("screen")

  const handlePlay = () => {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
  }

  useEffect(() => {
    if(data?.id === currentVisibleItem?.id) {
      video.current?.playAsync()
    } else {
      video.current?.pauseAsync()
    }
  }, [currentVisibleItem])

 return (
    <Pressable onPress={handlePlay}>
      <View 
        className={`absolute z-10 bottom-[120px] right-6 gap-2 `}>
        <TouchableOpacity  >
          <Ionicons name="heart" size={35} color="#fff"/>
          <Text className="text-white text-center">30.9k</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={35} color="#fff"/>
          <Text className="text-white text-center">30</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark" size={35} color="#fff"/>
        </TouchableOpacity>
      </View>
      <Video
        ref={video}
        style={{
          width: '100%',
          height: screenHeight
        }}
        
        shouldPlay={false}
        isMuted={false}
        isLooping
        source={{uri: data?.video}}
        resizeMode="cover"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        
      />
    </Pressable>
  )
}