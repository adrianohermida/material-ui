/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEMPLATE_IMAGE_URL?: string;
  // Adicione outras variáveis de ambiente conforme necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
