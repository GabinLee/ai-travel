import { StyleSheet, Image, Platform, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function MypagePage() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Text>내 정보</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // headerImage: {
  //   color: '#808080',
  //   bottom: -90,
  //   left: -35,
  //   position: 'absolute',
  // },
  // titleContainer: {
  //   flexDirection: 'row',
  //   gap: 8,
  // },
});
