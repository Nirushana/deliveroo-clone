import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanityClient";
import AntDesign from "@expo/vector-icons/AntDesign";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}
      >
        <View className="flex-row items-center space-x-2 mb-3">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1 font-semibold">{name}</Text>
            <Text className="text-gray-500 mb-2">{description}</Text>
            <Text className="text-gray-500">£{price}</Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={26} color="#00CCBB" />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={26} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
