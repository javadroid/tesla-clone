import { faCog, faFan, faKey, faLock, faToolbox, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Text, Image,StyleSheet, View, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import MenuItem from "../MenuItem";

export default function CarItem() {
  const [locked, setlocked] = useState(false)
  return (
    <>    
      <View style={styles.carContainer}>
        
      <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.backgroundImage}/>
        <View style={styles.header}>

          <TouchableOpacity>
          <FontAwesomeIcon color="white" size={24} icon={faCog} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mobile</Text>
          <TouchableOpacity>
          <FontAwesomeIcon color="white" size={24} icon={faToolbox} />
          </TouchableOpacity>
        </View>
        <View style={styles.batterySection}>
            <Image style={styles.batteryImage} source={require("../../assets/battery.png")} />
            <Text style={styles.batteryText}> 150 mi</Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusTest} > Parked</Text>
        </View>
        <ScrollView>
          <View style={styles.controls}>
            <View style={styles.controlsButton}>
              <TouchableOpacity>
                <FontAwesomeIcon color="white" size={24} icon={faFan} />
              </TouchableOpacity>
            </View>
            <View style={styles.controlsButton}>
              <TouchableOpacity>
                <FontAwesomeIcon color="white" size={24} icon={faKey} />
              </TouchableOpacity>
            </View>
            <View style={styles.controlsButton}>
              <TouchableOpacity onPress={()=>setlocked(!locked)}>
                <FontAwesomeIcon color="white" size={24} icon={locked? faLock: faUnlock} />
              </TouchableOpacity>
            </View>
          </View>
          <MenuItem/>
          </ScrollView>
      </View>
    {/* </ImageBackground> */}
    </>
  );
}
const styles = StyleSheet.create({
  controls:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:175,
    
  },
  controlsButton:{
    borderWidth:1,
    borderColor: 'white',
    borderRadius: 50,
    padding:18,
    marginLeft:25,
  },

  carContainer: {
    //   flex: 1,

    width: "100%",
    height: "100%",
    // display: "flex",
  },
  header: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position:"absolute",
  },
  batterySection:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  batteryImage:{
    height:26,
    width:70,
    marginRight:12,
  },
  batteryText:{
    color: "white",
    fontSize: 35,
    fontWeight:"bold",
    

  },
  status:{
   
alignItems:"center",
  },
  statusTest:{
  color: "white",
  fontSize:20,
  fontWeight:"bold",
  }
});
