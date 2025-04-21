import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    // package.json'da main alanında belirtilen dosya çalıştırılır.
    // Bu dosya çalıştırıldığında, Expo Router otomatik olarak bu dosyayı kullanır.
  return (
    <View>
      <Link href="about">Hello Expo Router</Link>
    </View>
  );
}
