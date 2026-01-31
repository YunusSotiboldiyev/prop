"use client";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Providers({ children }) {
  return (
    <ClerkProvider>


      {children}
    </ClerkProvider>
  );
}
