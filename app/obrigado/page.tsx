"use client"

import { useEffect } from "react"

export default function Obrigado() {
  useEffect(() => {
    // Dispara o evento de conversão do Google Ads
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17673336111/gJDFCOyyzbUkEK_qputB",
        value: 1.0,
        currency: "BRL",
      })
    }

    const t = setTimeout(() => {
      window.location.href =
        "https://wa.me/553131814712?text=Oi%21%20Vim%20do%20site%20da%20Turbo%20Marketing.%20Quero%20conversar%20sobre%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago%20para%20o%20meu%20neg%C3%B3cio%20e%20conhecer%20op%C3%A7%C3%B5es%20e%20valores.%20Pode%20me%20chamar%3F"
    }, 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1220] text-white p-8">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Obrigado! ✅</h1>
        <p className="mt-2 text-white/80">Recebemos suas informações. Em instantes vamos te chamar no WhatsApp.</p>
        <a
          href="https://wa.me/553131814712?text=Oi%21%20Vim%20do%20site%20da%20Turbo%20Marketing.%20Quero%20conversar%20sobre%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago%20para%20o%20meu%20neg%C3%B3cio%20e%20conhecer%20op%C3%A7%C3%B5es%20e%20valores.%20Pode%20me%20chamar%3F"
          className="inline-block mt-6 rounded-xl bg-[#A3E635] px-5 py-3 font-semibold text-[#0B1220]"
        >
          Abrir WhatsApp agora
        </a>
      </div>
    </main>
  )
}
