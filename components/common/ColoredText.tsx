import { useState, useEffect } from "react";
import { Text } from "react-native";

type ColoredTextProps = {
  searchQuery: string,
  item: string,
}

export default function ColoredTextItem(props: ColoredTextProps) {
  const [textArr, setTextArr] = useState<any[]>([]);
  const re = new RegExp(`(${props.searchQuery})`);
  
  useEffect(() => {
    setTextArr(
      props.item.split(re).map((text) => {
        if(text === props.searchQuery) {
          return <Text style={{color: "#10B981"}}>{text}</Text>
        }
        return text;
      })
    );
  }, [])

  return (
    <Text>{textArr}</Text>
  );
}