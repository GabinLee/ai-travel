import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#191f28", "#596E8E"]}
      style={styles.background}
    >
      <StatusBar style="light" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.mainTitle}>AI로 시작하는 여행</Text>
          <Text style={styles.subTitle}>나만의 특별한 여정을 발견하세요</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>랜덤 추천</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>내 주변 여행지 찾기</Text>
            </TouchableOpacity>
          </View>

          <Link href="/travel/SearchPlace"
            style={{marginHorizontal: "auto"}}
          >
            <View style={styles.buttonSearch}>
              <Ionicons name="search-outline" size={20} color="#fff" />
              <Text style={styles.buttonSearchText}>어떤 여행을 찾아드릴까요?</Text>
            </View>
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 137,
    paddingBottom: 37,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 38,
    color: "#fff",
    textAlign: "center",
  },
  subTitle: {
    marginTop: 2,
    fontSize: 20,
    lineHeight: 28,
    color: "rgb(209, 213, 219)",
    textAlign: "center",
  },
  buttonGroup: {
    marginTop: "auto",
    marginBottom: 37,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 6,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
  },
  buttonSearch: {
    width: 342,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 28,
  },
  buttonSearchText: {
    color: "#fff",
    marginLeft: 4,
  },
})
