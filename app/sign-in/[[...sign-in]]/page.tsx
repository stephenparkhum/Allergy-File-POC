import { SignIn } from "@clerk/nextjs";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack
      height={"100vh"}
      flexDirection={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <SignIn />
    </Stack>
  );
}
