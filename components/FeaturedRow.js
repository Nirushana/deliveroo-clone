import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import RestaurantCard from "./RestaurantCard";
import SanityClient from "../sanityClient";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ..., 
          dish[]->, 
          type->{
            name
          }
        },
      }[0]`,
      { id }
    ).then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="pt-4"
      >
        {/* Restaurants */}
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.location?.lng}
            lat={restaurant.location?.lat}
          />
        ))}
        {/* <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! sushi"
          rating={4.5}
          genre="Comedy"
          address="123 Main St"
          short_description="Yo! Yo! Yo! Yo!"
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! sushi"
          rating={4.5}
          genre="Comedy"
          address="123 Main St"
          short_description="Yo! Yo! Yo! Yo!"
          dishes={[]}
          long={0}
          lat={0}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
