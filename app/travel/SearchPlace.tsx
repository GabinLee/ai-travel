import { useEffect, useState } from "react";
import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import SearchBarItem from "@/components/common/SearchBar";
import ButtonList from "@/components/common/ButtonList";
import ColoredTextItem from "@/components/common/ColoredText";
import { StatusBar } from "expo-status-bar";
import { HeaderItem } from "@/components/common/HeaderItem";

const { height: DEVICE_HEIGHT} = Dimensions.get('screen');

export default function SearchPlaceView() {
  const navigation = useNavigation();

  const [screenHeight, setScreenHeight] = useState(0);
  const [searchType, setSearchType] = useState("place");
  
  const [selectedKeyword1, setSelectedKeyword1] = useState("");
  const [selectedKeyword2, setSelectedKeyword2] = useState("");

  const [searchKeyword1, setSearchKeyword1] = useState("");
  const [searchKeyword2, setSearchKeyword2] = useState("");

  const [searchList1, setSearchList1] = useState<string[]>([]);
  const [searchList2, setSearchList2] = useState<string[]>([]);

  const search1DataList: string[] = ["부산1", "부산2", "부산3", "울산1", "울산2", "제주도1", "제주도2", "서울", "인천", "경주", "포항", "속초", "강릉", "동해", "여수", "목포", "전주", "순천", "태안"]
  const search2DataList: string[] = ["아이와 가기 좋은 곳", "아이와 먹기 좋은 맛집", "아이와 함께할 수 있는 아늑한 호텔", "데이트하기 좋은 장소", "데이트하기 좋은  맛집", "연인과 함께 가기 좋은 호텔", "가족과 가는 맛집"]

  const modalOffsetFromTop = DEVICE_HEIGHT - screenHeight;
  
  useEffect(() => {
    if(searchKeyword1 === "") {
      setSearchList1([]);
    } else {
      const debounce = setTimeout(() => {
        setSearchList1(searchFilter(search1DataList, searchKeyword1));
      }, 200);
  
      return () => {
        clearTimeout(debounce);
      };
    }
  }, [searchKeyword1]);

  useEffect(() => {
    if(searchKeyword2 === "") {
      setSearchList2([]);
    } else {
      const debounce = setTimeout(() => {
        setSearchList2(searchFilter(search2DataList, searchKeyword2));
      }, 200);
  
      return () => {
        clearTimeout(debounce);
      };
    }
  }, [searchKeyword2]);

  const searchFilter = (list:string[], text:string) => {
    return list.filter((v) => v.includes(text));
  }

  const selectedKeyword1Btn = (keyword:string) => {
    setSelectedKeyword1(keyword);
  }
  
  return (
    <SafeAreaView style={styles.container}
      onLayout={(event) => {
        setScreenHeight(event.nativeEvent.layout.height);
      }}
    >
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={{flex: 1, paddingTop: 8, paddingBottom: 10}}
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
        keyboardVerticalOffset={modalOffsetFromTop + 10}
      >
        <HeaderItem
          title="여행지 찾기"
          leftBtnIcon="close"
          onPressLeftBtn={() => navigation.goBack()}
        />
        
        <SearchBarItem
          placeholderText="어디로 떠나고 싶으신가요?"
          searchText={searchKeyword1}
          onChangeText={setSearchKeyword1}
          keyword={selectedKeyword1}
        />

        {selectedKeyword1 !== "" && (
          <SearchBarItem
            placeholderText="어떤 여행을 하고 싶으신가요?"
            searchText={searchKeyword2}
            onChangeText={setSearchKeyword2}
            keyword={selectedKeyword2}
          />
        )}

        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          {(searchKeyword1 === "" && selectedKeyword1 === "") && (
            <>
              <View style={{marginTop: 15}}>
                <Text style={styles.listTitle}>이런 곳은 어떠세요?</Text>
                <ButtonList
                  btnList={["부산", "도쿄", "파리"]}
                  selectedBtn={selectedKeyword1Btn}
                  btnType="badge"
                />
              </View>

              <View style={{marginTop: 20}}>
                <Text style={styles.listTitle}>어디로 갈 지 망설여지시나요?</Text>
                <ButtonList
                  btnList={["내 주변 여행지 찾기", "랜덤 추천"]}
                  btnType="badge"
                />
              </View>
            </>
          )}
          {(searchKeyword1 !== "" && selectedKeyword1 === "") && (
            <View style={{paddingTop: 10, paddingHorizontal: 20, rowGap: 20}}>
              {searchList1.map((item1) => (
                <TouchableOpacity key={item1}
                  style={{flexDirection: "row", alignItems: "center"}}
                  onPress={() => {
                    setSearchKeyword1("");
                    setSelectedKeyword1(item1);
                  }}
                >
                  <View style={{ width: 32, height: 32, marginRight: 15, borderRadius: 4, backgroundColor: "rgb(243, 244, 246)", alignItems: "center", justifyContent: "center"}}><Ionicons name="location" size={20} color="rgb(156, 163, 175)" /></View>
                  <Text style={{fontSize: 15, flex: 1}}>{item1}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {(selectedKeyword1 !== "" && searchKeyword2 === "") && (
            <View style={{paddingTop: 10}}>
              <ButtonList
                btnList={[`${selectedKeyword1} 맛집`, `${selectedKeyword1} 산책하기 좋은 곳`, `${selectedKeyword1} 트렌드`, `${selectedKeyword1} 라멘`, `${selectedKeyword1} 야경`]}
                btnType="badge"
                styles={{marginTop: 10}}
              />
            </View>
          )}
          {(selectedKeyword1 !== "" && searchKeyword2 !== "") && (
            <View style={{paddingTop: 10, paddingHorizontal: 20, rowGap: 10}}>
              {searchList2.map((item2) => (
                <TouchableOpacity key={item2}
                  style={{height: 32, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}
                >
                  <ColoredTextItem
                    item={item2}
                    searchQuery={searchKeyword2}
                  />
                  <Ionicons name="arrow-up-outline" size={16} color="#000" style={{transform: "rotate(45deg)"}} />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
        
        {(searchKeyword1 === "" && selectedKeyword1 === "") && (
          <View style={{...styles.bottomBtns, width: 365, marginHorizontal: "auto", borderRadius: 20, backgroundColor: "#f3f4f6"}}>
            <TouchableOpacity
              style={{...styles.btnSearchType, backgroundColor: searchType === "place" ? "rgb(16, 185, 129)" : "transparent"}}
              onPress={() => setSearchType("place")}
            >
              <Text style={{color: searchType === "place" ? "#fff" : ""}}>장소로 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.btnSearchType, backgroundColor: searchType === "theme" ? "rgb(16, 185, 129)" : "transparent"}}
              onPress={() => setSearchType("theme")}
            >
              <Text style={{color: searchType === "theme" ? "#fff" : ""}}>테마로 찾기</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {selectedKeyword1 !== "" && (
          <View style={{...styles.bottomBtns, marginHorizontal: 14, justifyContent: "space-between"}}>
            <TouchableOpacity
              style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 10}}
              onPress={() => {
                setSelectedKeyword1("");
                setSearchKeyword1("");
                setSearchKeyword2("");
              }}
            >
              <Text>초기화</Text>
            </TouchableOpacity>
            <Link replace href="/travel/SearchResult" style={{height: 40}}>
              <View
                style={{height: "100%", flexDirection: "row", alignItems: "center", columnGap: 2, backgroundColor: "#10B981", borderRadius: 8, paddingVertical: 9, paddingHorizontal: 10 }}
              >
                <Text style={{color: "#fff", fontSize: 15}}>건너뛰기</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
              </View>
            </Link>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 8,
  },
  listTitle: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: 16,
    lineHeight: 22,
  },

  bottomBtns: {
    height: 40,
    flexDirection: "row"
  },
  btnSearchType: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
})