import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  // Bu dosya, uygulamanın kök düzeyindeki bileşenidir.
  // Uygulamanın genel düzenini ve yönlendirmesini tanımlar.
  // Expo Router, bu dosyayı kullanarak uygulamanın kök düzeyindeki bileşenini oluşturur.
  // Örneğin, uygulamanın genel stilini ve yönlendirmesini burada tanımlayabilirsiniz.
  // veya daha derin bahsetmek gerekirse tüm ekranlarda kullanılacak olan bileşenleri burada tanımlayabilirsiniz.
  return (
    <Slot /> // Slot bileşeni, yönlendirme için bir yer tutucudur
  );
}
