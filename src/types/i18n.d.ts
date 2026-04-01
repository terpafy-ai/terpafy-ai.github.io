import "i18next";
import type pt from "../i18n/locales/pt.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof pt;
    };
  }
}
