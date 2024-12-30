import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  styles?: {};
  btnList: string[];
  selectedBtn?: (e:string) => void;
  btnType: "badge" | "close";
  onPressClose?: () => void;
  // onClickBtn: () => void
}

export default function ButtonList(props: ButtonProps) {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    if(props.selectedBtn !== undefined) {
      props.selectedBtn(selectedItem);
    }
  }, [selectedItem])

  return (
    <View style={[styles.container]}>
      {props.btnList.map((btnItem, index) => (
        <TouchableOpacity style={styles.listItem} key={btnItem}
          onPress={() => setSelectedItem(btnItem)}
        >
          <Text style={styles.listItemText}>{btnItem}</Text>
          {props.btnType === "close" && (
            <TouchableOpacity style={{}}
              onPress={props.onPressClose}
            >
              <Ionicons name="close" size={18} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap:"wrap",
    columnGap: 4,
    rowGap: 4,
    paddingHorizontal: 16,
  },
  listItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgb(229, 231, 235)",
    backgroundColor: "#fff",
    flexDirection: "row",
    rowGap: 2,
    alignItems: "center"
  },
  listItemText: {
    color: "rgb(17, 24, 39)",
    lineHeight: 20,
    fontSize: 15
  },
})