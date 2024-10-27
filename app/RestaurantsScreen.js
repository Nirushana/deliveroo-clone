import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { urlFor } from "../sanityClient";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

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

  const parsedDishes = dishes ? JSON.parse(dishes) : null;

  return (
    <>
    <BasketIcon />
    <SafeAreaView>
      <ScrollView>
        <StatusBar style="dark-content" />
        <View className="relative">
          <Image
            source={{ uri: urlFor(parsedImgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-8 left-5 p-2 bg-gray-100 rounded-full"
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
                  <Text>{rating}</Text> · {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 mt-1">
                <SimpleLineIcons
                  name="location-pin"
                  size={18}
                  color="gray"
                  opacity={0.4}
                />
                <Text className="text-xs text-gray-500 w-56">
                  Nearby · {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <AntDesign name="questioncircleo" size={24} color="#00CCBB" />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <AntDesign name="right" size={18} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-gray-200 pb-36">
          <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>

          {/* Dishes */}

          {parsedDishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

export default RestaurantsScreen;
