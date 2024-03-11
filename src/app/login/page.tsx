"use client";

import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { oauthSignIn } from "../../utils/oauth";

export default function LoginPage() {
  useEffect(() => {
    oauthSignIn();
  }, []);

  return <Spinner />;
}
