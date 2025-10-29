"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

export const GoogleReCaptcha = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.RECAPTCHA_SITE_KEY!}>
      {children}
    </GoogleReCaptchaProvider>
  );
};
