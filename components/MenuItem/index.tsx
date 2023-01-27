import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import items from "./items";

export default function MenuItem() {
  return (
    <>
      <View style={styles.menuItems}>
        {items.map(item=>(
            
            <TouchableOpacity key={item.id}>
          <View style={styles.menuRow}>
            <FontAwesomeIcon color="white" size={24} icon={item.icon} />

            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{item.title}</Text>
            {item.subTitle&&(
  <Text style={styles.menuSubText}>{item.subTitle}</Text>
            )}
            </View>
            <FontAwesomeIcon color="#4D4D4E" size={24} icon={faChevronRight} />
          </View>
        </TouchableOpacity>
     
        ))}
        
        
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    textTransform: "uppercase",
  },
  menuTextBox: {
    flexGrow: 1,
  },
  menuSubText:{
color:"grey",
fontSize: 14,
marginLeft: 15,
  },

  arrowIcon: {},
});
