import React from "react";
import { StyleSheet, View, Text, SafeAreaView,ImageBackground } from "react-native";
import { Button } from "./Button/Button";
import { useNavigation } from "@react-navigation/native";
import MainNavigator from "../../MainNavigator";

export default function Start() {

  function onPressButton(screen) {
    navigator.navigate(screen);
  }
  return (
    <SafeAreaView style={{ flex: 1 }} egdes={['left', 'right']} >
      <ImageBackground source={require('./src/assets/fundoR.jpg')} resizeMode="cover" style={styles.image}>
        <Text
        style={{
          textAlign: "center",
          fontSize: 44,
          marginTop: 44,
          fontWeight: "bold",
          color: "white",
        }}
      >
        ROBLOX

      </Text>
      <View style={styles.container}>
          <Button
            variant="outline"
            style={{ marginBottom: 10 }}
            onPress={onPressButton("SingnUp")}
            title="Sing Up"
          />

          <Button
            style={{ marginBottom: 0 }}
            iconName="shoppingcart"
            variant="blackFriday"
            onPress={onPressButton("Login")}
            title="Log In"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});