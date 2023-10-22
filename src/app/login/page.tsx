"use client";

import { Button } from "@nextui-org/button";
import { oauthSignIn } from "../../utils/oauth";

export default function LoginPage() {
  return (
    <Button size="lg" onClick={oauthSignIn}>
      로그인
    </Button>
  );
}
