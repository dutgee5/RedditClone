import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AutLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    <Redirect href={"/"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ title: "Sign In" }} />
      <Stack.Screen name="signUp" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
