/// <reference types="vite/client" />

declare interface Window {
  showDirectoryPicker(): Promise<{ name: string, kind: 'directory' }>;
  showOpenFilePicker(): Promise<[{ name: string, kind: 'file' }]>;
}