import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanityClient";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
    ).then((data) => {
      setFeaturedCategories(data)
    })
  }, []);

  return (
    <SafeAreaView className="bg-gray-100 pt-5">
      
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-9 w-9 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <AntDesign name="down" size={16} color="#00CCBB" />
          </Text>
        </View>
        <AntDesign name="user" size={36} color="#00CCBB" />
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-2 flex-1 p-3 items-center bg-gray-200 rounded-lg">
          <AntDesign name="search1" size={20} color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <MaterialCommunityIcons
          name="tune-vertical"
          size={24}
          color="#00CCBB"
        />
      </View>

      {/* Categories */}

      <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 150 }}>
        <Categories />
      

      {/* Featured Row */}

      {featuredCategories?.map(category => (
        <FeaturedRow
          key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
          restaurants={category.restaurants}
        />
      ))}
  
      {/* Tasty Discounts */}
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
