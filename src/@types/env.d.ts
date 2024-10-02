/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API: 'https://jsonplaceholder.typicode.com/'
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
