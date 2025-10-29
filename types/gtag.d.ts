declare global {
  interface Window {
    dataLayer: any[]
    gtag: (command: "event" | "config" | "js", targetOrAction: string | Date, params?: Record<string, any>) => void
  }
}

export {}
