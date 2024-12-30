import { Ionicons } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { PlaceInfoItem } from './PlaceInfoItem';


type PlaceInfoListProps = {
  // styleContainer: StyleProp<ViewStyle>;
  // styleItem: StyleProp<ViewStyle>;
  // quantity: number;
  // children: ReactNode;
  listTitle: string;
  quantity: number;
}

export function PlaceInfoList(props: PlaceInfoListProps) {

  return (
    <View>
      <Text style={{
        marginHorizontal: 20,
        marginTop: 36,
        marginBottom: 22,
        fontSize: 18,
        fontWeight: 700,
      }}>{props.listTitle}</Text>

      <View style={{rowGap: 12, marginHorizontal: 18}}>
        {new Array(props.quantity).fill("").map((_, idx) => (
          <PlaceInfoItem key={idx} />
        ))}
      </View>
    </View>
  );
}