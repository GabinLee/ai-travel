import { StyleSheet, View } from 'react-native';
import { SkeletonFrameView } from './SkeletonFrameView';

export function SearchResultSkeleton() {

  return (
    <SkeletonFrameView
      quantity={3}
      styleContainer={{marginHorizontal: 8, paddingVertical: 8, paddingHorizontal: 8, rowGap: 24}}
      styleItem={{flexDirection: "row", columnGap: 4}}
    >
      <View style={styles.box}>
        <View style={styles.img} />
        <View style={styles.txt} />
      </View>
      <View style={styles.box}>
        <View style={styles.img} />
        <View style={styles.txt} />
      </View>
    </SkeletonFrameView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    rowGap: 8,
  },
  img: {
    height: 125,
    borderRadius: 8,
    backgroundColor: "#F2F4F6"
  },
  txt: {
    width: 72,
    height: 12,
    borderRadius: 4,
    backgroundColor: "#F2F4F6",
    marginVertical: 2,
    marginHorizontal: 4
  }
})
