import { ReactNode } from 'react';
import { StyleProp, ViewStyle, View } from 'react-native';


type SkeletonFrameViewProps = {
  styleContainer: StyleProp<ViewStyle>;
  styleItem: StyleProp<ViewStyle>;
  quantity: number;
  children: ReactNode;
}

export function SkeletonFrameView(props: SkeletonFrameViewProps) {

  return (
    <View style={props.styleContainer}>
      {new Array(props.quantity).fill("").map((_, idx) => (
        <View key={idx} style={props.styleItem}>{props.children}</View>
      ))}
    </View>
  );
}