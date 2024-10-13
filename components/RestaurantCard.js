import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {urlFor}  from "../sanityClient";
import { router } from "expo-router";

const RestaurantCard = ({
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
}) => {

  return (
    <TouchableOpacity className="bg-white rounded-lg mr-3 shadow-md" onPress={() =>router.navigate({pathname:'./RestaurantsScreen', params: {id, imgUrl: JSON.stringify(imgUrl), title, rating, genre, address, short_description, dishes, long, lat}})}>
      <Image
        source={{ uri: urlFor(imgUrl).url(), }}
        className="h-40 w-64 rounded object-cover"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Ionicons name="star" size={18} color="green" opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 mt-1">
          <SimpleLineIcons
            name="location-pin"
            size={18}
            color="gray"
            opacity={0.4}
          />
          <Text className="text-xs text-gray-500 w-48">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
