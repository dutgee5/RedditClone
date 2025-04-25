import { Slot, Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from '@clerk/clerk-expo/token-cache'


export default function RootLayout() {
  // Bu dosya, uygulamanın kök düzeyindeki bileşenidir.
  // Uygulamanın genel düzenini ve yönlendirmesini tanımlar.
  // Expo Router, bu dosyayı kullanarak uygulamanın kök düzeyindeki bileşenini oluşturur.
  // Örneğin, uygulamanın genel stilini ve yönlendirmesini burada tanımlayabilirsiniz.
  // veya daha derin bahsetmek gerekirse tüm ekranlarda kullanılacak olan bileşenleri burada tanımlayabilirsiniz.
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  );
}
