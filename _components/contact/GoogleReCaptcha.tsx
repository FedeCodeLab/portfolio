"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

export const GoogleReCaptcha = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      container={{
        element: "div",
        parameters: { badge: "bottomleft" },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
