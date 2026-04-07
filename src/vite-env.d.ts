/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_API_URL: string;
  readonly VITE_CHAT_URL: string;
  /** Set to "true" to show the "Falar com o Terpafy Grow" CTA buttons site-wide */
  readonly VITE_SHOW_CHAT_BUTTON: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
