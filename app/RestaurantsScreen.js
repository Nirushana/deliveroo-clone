import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { urlFor } from "../sanityClient";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const RestaurantsScreen = () => {
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = useLocalSearchParams();

  const parsedImgUrl = imgUrl ? JSON.parse(imgUrl) : null;
  return (
    <ScrollView>
      <StatusBar style="dark-content" />
      <View className="relative">
        <Image
          source={{ uri: urlFor(parsedImgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-3 left-5 p-2 bg-gray-100 rounded-full"
        >
          <AntDesign name="arrowleft" size={18} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <AntDesign name="star" size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text>{rating}</Text>· {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1 mt-1">
              <SimpleLineIcons
                name="location-pin"
                size={18}
                color="gray"
                opacity={0.4}
              />
              <Text className="text-xs text-gray-500 w-48">
                Nearby · {address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity
          className="flex-row items-center space-x-2 p-4 border-y border-gray-300"
        >
          <AntDesign name="questioncircleo" size={24} color="#00CCBB" />
          <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
          <AntDesign name="right" size={18} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantsScreen;