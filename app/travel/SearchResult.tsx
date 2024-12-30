import { SafeAreaView, ScrollView, Text, StyleSheet, ActivityIndicator, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, useNavigation } from "expo-router";
import { HeaderItem } from "@/components/common/HeaderItem";
import { SearchResultSkeleton } from "@/components/common/SearchResultSkeleton";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { PlaceInfoList } from "@/components/common/PlaceInfoList";
import SearchBarItem from "@/components/common/SearchBar";
import ButtonList from "@/components/common/ButtonList";


export default function SearchResultPage() {
  const navigation = useNavigation();

  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
      <StatusBar style="dark" />
      <HeaderItem
        leftBtnIcon="chevron-back"
        onPressLeftBtn={() => navigation.goBack()}
      />

      <ScrollView>
        <Text style={styles.pageTitle}>부산 아이와 가기 좋은 곳</Text>

        {load && (
          <>
            <View style={{marginTop: 18, marginBottom: 19, rowGap: 4}}>
              <View style={styles.row}>
                <Ionicons name="checkmark-circle" size={20} color="#10B981" />
                <Text style={{color: "#6C6C6C", lineHeight: 22}}>좋은 장소를 찾았어요</Text>
              </View>
              <View style={styles.row}>
                <ActivityIndicator size="small" color="#D1D5DB" />
                <Text style={{color: "#6C6C6C", lineHeight: 22}}>AI가 찾아보고 있어요</Text>
              </View>
            </View>

            <SearchResultSkeleton />
          </>
        )}
        
        {!load && (
          <>
            <Text style={{color: "#6C6C6C", marginHorizontal: 22, marginTop: 4}}>부산에는 볼거리가 참 많아요</Text>
            <PlaceInfoList listTitle="가볼만한 곳" quantity={3} />
            <PlaceInfoList listTitle="맛집" quantity={3} />
            <PlaceInfoList listTitle="숙소" quantity={3} />

            <Text style={{
              marginHorizontal: 20,
              marginTop: 80,
              marginBottom: 10,
              fontSize: 20,
              fontWeight: 700,
              color: "#111"
            }}>더 찾아보기</Text>

            <ButtonList
              btnList={["레이블1", "레이블2", "레이블3"]}
              btnType="close"
            />
            
            <Link href="/travel/SearchPlace" style={{ marginTop: 28, marginHorizontal: 16, marginBottom: 20}}>
              <View style={{width: "100%", height: 48, paddingHorizontal: 12, flexDirection: "row", alignItems: "center", columnGap: 4, borderRadius: 12, borderColor: "#D1D5DB", borderWidth: 1, backgroundColor: "#F2F4F6"}}>
                <Ionicons name="location" size={20} color={"#111827"} />
                <Text>다시 검색하기</Text>
              </View>
            </Link>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    marginTop: 22,
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: 700,
    color: "#111"
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 20,
    columnGap: 4
  }
})