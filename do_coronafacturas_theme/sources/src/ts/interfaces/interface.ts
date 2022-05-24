// Interfaces

declare global {
  interface Window {
      dataLayer: any,
      drupalSettings: any
  }
}

export interface FloatBoxState {
    isVisibleFloatBox:boolean
}

export interface SoundState {
  isPlayed:boolean
}
