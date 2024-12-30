import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


type HeaderItemProps = {
  title?: string;
  leftBtnIcon?: keyof typeof Ionicons.glyphMap;
  onPressLeftBtn?: () => void;
}

export function HeaderItem(props: HeaderItemProps) {

  return (
    <View style={styles.container}>
      {props.leftBtnIcon && (
        <TouchableOpacity style={styles.leftBtn}
          onPress={props.onPressLeftBtn}
        >
          <Ionicons name={props.leftBtnIcon} size={24}  />
        </TouchableOpacity>
      )}
      <Text style={{fontSize: 18}}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 56,
  },

  leftBtn: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 8,
  },
})
