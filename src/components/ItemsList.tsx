import React from "react";
import { InstitutionType } from "../data/Institutions";
import Card from "./Card";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

interface ItemsListProps {
  title: string;
  items: InstitutionType[];
  isSearch: boolean;
}

function ItemsList({ title, items, isSearch }: ItemsListProps) {
  function renderInstitutionItem({ item, index }: { item: InstitutionType; index: number; }) {
    return (
      <Card
        key={index}
        title={item.title}
        imageSource={item?.image}
        subtitle={item?.subtitle}
        description={item?.description}
      />
    );
  }

  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>
          {title}
        </Text>
      
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={renderInstitutionItem}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
}

export default React.memo(ItemsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    paddingBottom: 24, // Added paddingTop for spacing
  },
});
