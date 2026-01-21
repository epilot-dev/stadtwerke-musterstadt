/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PASS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
