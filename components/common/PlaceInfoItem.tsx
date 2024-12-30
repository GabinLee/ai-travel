import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';


type PlaceInfoItemProps = {
  // styleContainer: StyleProp<ViewStyle>;
  // styleItem: StyleProp<ViewStyle>;
  // quantity: number;
  // children: ReactNode;
}

export function PlaceInfoItem(props: PlaceInfoItemProps) {
  const [keep, setKeep] = useState(false);

  return (
    <View style={{
      flexDirection: "row",
      columnGap: 20,
    }}>
      <View style={{ position: "relative" }}>
        <Image source={require('../../assets/images/test.jpg')}
          style={{
            width: 117,
            height: 117,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => setKeep(!keep)}
          style={{
            width: 36,
            height: 36,
            paddingVertical: 8,
            paddingHorizontal: 8,
            position: "absolute",
            right: 0
          }}
        >
          {keep ?
            <Ionicons name='bookmark' size={20} color={"#111827"} />
          :
            <Ionicons name='bookmark-outline' size={20} color={"#111827"} />
          }
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, marginRight: 12, marginTop: 8}}>
        <Text style={{ color: "#111", fontWeight: 600 }}>F1963 문화공간</Text>
        <Text style={{ color: "#111", fontSize: 13, marginTop: 4 }}>부산시 수영구</Text>
        <View style={{flexDirection: "row", columnGap: 4, marginTop: 4}}>
          <Text style={styles.tagItem}>#요즘유행</Text>
          <Text style={styles.tagItem}>#아이와가기좋은</Text>
        </View>
        <Text style={{color: "#6C6C6C", lineHeight: 20, marginTop: 2}}>AI가 추천한 이유 AI가 추천한 이유 AI가 추천한 이유</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tagItem: {
    color: "#FF7171",
    lineHeight: 22
  }
})