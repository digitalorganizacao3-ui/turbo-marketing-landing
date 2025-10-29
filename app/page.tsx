"use client"

import type { ReactNode } from "react"

import {
  ArrowRight,
  Bolt,
  Target,
  BarChart3,
  Clock,
  CheckCircle2,
  Shield,
  Users,
  MessageCircle,
  ChevronDown,
} from "lucide-react"

export default function TurboMarketingLanding() {
  const WHATSAPP_LINK =
    "https://wa.me/553131814712?text=Oi%21%20Vim%20do%20site%20da%20Turbo%20Marketing.%20Quero%20conversar%20sobre%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago%20para%20o%20meu%20neg%C3%B3cio%20e%20conhecer%20op%C3%A7%C3%B5es%20e%20valores.%20Pode%20me%20chamar%3F" // link com mensagem pré-preenchida // +55 31 3181-4712 // <-- seu link
  const EMAIL = "contato@agenciamarketingturbo.com"
  const CNPJ = "57.583.642/0001-88"

  const plans = [
    {
      name: "Starter",
      desc: "Validação: setup + 1 canal + 1 ciclo de testes/semana",
      price: "R$ 1.990/mês",
      features: ["Setup inicial", "1 canal (Meta ou Google)", "Relatórios semanais"],
    },
    {
      name: "Growth",
      desc: "Aceleração: 2 canais + criativos contínuos + reunião quinzenal",
      price: "R$ 3.990/mês",
      features: ["Meta + Google/YouTube", "Teste contínuo de criativos", "Reunião quinzenal"],
    },
    {
      name: "Scale",
      desc: "Escala: multicanais + roadmap trimestral + reunião semanal",
      price: "R$ 7.990/mês",
      features: ["Multicanais", "Roadmap trimestral", "Reunião semanal"],
    },
  ]

  const faqs = [
    {
      q: "Qual contrato mínimo?",
      a: "Recomendamos 3 meses para um ciclo completo de hipóteses, testes e consolidação de aprendizados.",
    },
    {
      q: "Quem produz os criativos?",
      a: "Podemos produzir internamente, trabalhar com seu time ou parceiros — alinhamos no onboarding.",
    },
    {
      q: "Investimento de mídia recomendado?",
      a: "Indicamos uma faixa mínima mensal para acelerar aprendizados; ajustamos ao seu mercado e meta.",
    },
    {
      q: "Quais canais vocês gerem?",
      a: "Meta Ads, Google/YouTube Ads e integrações (Tag Manager, GA4, Looker/Data Studio).",
    },
    {
      q: "Quando vejo resultados?",
      a: "Hipóteses iniciais em 7 dias, sprints semanais com relatórios e próximos passos claros.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/70 bg-[#0B1220]/90 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#0EA5E9] text-[#0B1220] font-bold">
              TM
            </div>
            <span className="font-semibold tracking-tight">Turbo Marketing</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#cases" className="hover:text-white">
              Cases
            </a>
            <a href="#solucoes" className="hover:text-white">
              Soluções
            </a>
            <a href="#processo" className="hover:text-white">
              Processo
            </a>
            <a href="#planos" className="hover:text-white">
              Planos
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </nav>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center gap-2 rounded-xl bg-[#A3E635] px-3 py-2 text-sm font-semibold text-[#0B1220] shadow hover:opacity-90"
          >
            Fale no WhatsApp <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Bolt className="w-4 h-4 text-[#A3E635]" /> Tráfego que performa
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Venda mais investindo <span className="text-[#A3E635]">menos</span> em tráfego pago
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              Gestão orientada por dados para escalar com margem, clareza e previsibilidade — sem dor de cabeça.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0EA5E9] px-4 py-2 font-semibold text-[#0B1220] shadow hover:opacity-90"
              >
                Conheça nosso método <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-2 rounded-xl bg-[#A3E635] px-4 py-2 font-semibold text-[#0B1220] shadow hover:opacity-90"
              >
                Fale no WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "+120 clientes", sub: "atendidos" },
                { label: "NPS 89", sub: "satisfação" },
                { label: "ROAS 3.4", sub: "média (amostra)" },
              ].map((i, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-bold">{i.label}</div>
                  <div className="text-xs text-white/70">{i.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6">
              <div className="grid grid-cols-2 gap-4">
                <MetricCard icon={<BarChart3 className="w-5 h-5" />} title="+212%" subtitle="Receita em 60d" />
                <MetricCard icon={<Target className="w-5 h-5" />} title="-37%" subtitle="CPL" />
                <MetricCard icon={<Clock className="w-5 h-5" />} title="7 dias" subtitle="Onboarding" />
                <MetricCard icon={<Users className="w-5 h-5" />} title="+64%" subtitle="Leads qualificados" />
              </div>
              <p className="mt-4 text-xs text-white/70">*Métricas ilustrativas — substitua pelos seus números reais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Cases de sucesso</h2>
          <p className="mt-2 text-white/80 max-w-2xl">
            Resultados reais com estratégia certa, execução consistente e foco em ROAS.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <CaseCard title="E-commerce Ferramentas" kpis={["+212% receita/60d", "ROAS 3.4", "CPL -37%"]} />
            <CaseCard title="Serviços Locais" kpis={["+64% leads qualificados", "CPA -28%", "90 dias"]} />
            <CaseCard title="Infoprodutor" kpis={["LTV +31%/120d", "CAC -22%", "Escala previsível"]} />
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solucoes" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Soluções Modulares</h2>
          <p className="mt-2 text-white/80 max-w-2xl">
            Desenhamos o módulo certo para cada fase: validação, aceleração e escala.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#0EA5E9]" />
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                </div>
                <p className="mt-2 text-white/80">{p.desc}</p>
                <div className="mt-4 text-2xl font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A3E635]" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A3E635] px-4 py-2 font-semibold text-[#0B1220] shadow hover:opacity-90"
                >
                  Falar sobre {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight" id="metodo">
            Sprint de Otimização
          </h2>
          <p className="mt-2 text-white/80 max-w-2xl">
            Ciclos semanais e metas claras — processo simples, repetível e mensurável.
          </p>
          <div className="mt-8 grid md:grid-cols-5 gap-4">
            {[
              { label: "Brief", icon: <Users className="w-4 h-4" /> },
              { label: "Hipóteses", icon: <Target className="w-4 h-4" /> },
              { label: "Testes", icon: <Bolt className="w-4 h-4" /> },
              { label: "Relatório", icon: <BarChart3 className="w-4 h-4" /> },
              { label: "Ação", icon: <ArrowRight className="w-4 h-4" /> },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/70">{s.icon}</span> {s.label}
                </div>
                {i < 4 && <ArrowRight className="w-4 h-4 text-white/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVAS / PARA QUEM */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Por que a Turbo Marketing</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#A3E635]" /> +120 clientes atendidos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#A3E635]" /> Garantia em contrato (mediante alinhamento)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#A3E635]" /> Time humanizado e obsessão por dados
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Para quem atendemos</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/80">
              {["Infoprodutores", "E-commerce", "Negócios locais", "Prestadores de serviço"].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
            {faqs.map((f, i) => (
              <details key={i} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className="transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-white/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Descubra como vender mais investindo menos
            </h2>
            <p className="mt-2 text-white/80">Receba uma análise inicial em até 48h. Preencha o formulário abaixo.</p>
            <form
              action="https://formsubmit.co/contato@agenciamarketingturbo.com"
              method="POST"
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* FormSubmit.co configuration */}
              <input type="hidden" name="_subject" value="Novo lead – Turbo Marketing" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="/obrigado" />

              <input
                name="nome"
                placeholder="Nome"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
              <input
                name="empresa"
                placeholder="Empresa"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
              <input
                name="whatsapp"
                placeholder="WhatsApp"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />
              <input
                name="email"
                placeholder="E-mail"
                type="email"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              />

              <select
                name="faturamento"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] md:col-span-2"
              >
                <option>Faturamento mensal (faixa)</option>
                <option>Até R$ 50 mil</option>
                <option>R$ 50–200 mil</option>
                <option>R$ 200 mil–1 mi</option>
                <option>Acima de R$ 1 mi</option>
              </select>
              <select
                name="objetivo"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              >
                <option>Objetivo principal</option>
                <option>Mais vendas</option>
                <option>Mais leads</option>
                <option>Reduzir CPA</option>
                <option>Escalar com ROAS</option>
              </select>
              <select
                name="canal"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
              >
                <option>Canal de interesse</option>
                <option>Meta Ads</option>
                <option>Google/YouTube Ads</option>
                <option>Ambos</option>
              </select>
              <textarea
                name="mensagem"
                className="rounded-xl bg-[#0B1220] border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] md:col-span-2"
                rows={4}
                placeholder="Fale sobre seu momento e meta"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A3E635] px-5 py-3 font-semibold text-[#0B1220] shadow hover:opacity-90"
              >
                Quero minha análise gratuita (48h)
              </button>
              <p className="md:col-span-2 text-xs text-white/60">
                Ao enviar, você concorda com nossa Política de Privacidade e contato por WhatsApp/e-mail.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#0EA5E9] text-[#0B1220] font-bold">
              TM
            </div>
            <div>
              <div className="font-semibold">Turbo Marketing</div>
              <div className="text-xs text-white/70">
                CNPJ: {CNPJ} • {EMAIL}
              </div>
            </div>
          </div>
          <div className="text-xs text-white/60">© 2025 Turbo Marketing. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

function MetricCard({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode
  title: string
  subtitle: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-2 text-sm text-white/70">{icon} Indicador</div>
      <div className="mt-2 text-2xl font-bold">{title}</div>
      <div className="text-xs text-white/70">{subtitle}</div>
    </div>
  )
}

function CaseCard({ title, kpis }: { title: string; kpis: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-[#0EA5E9]" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {kpis.map((k, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#A3E635]" /> {k}
          </li>
        ))}
      </ul>
      <a
        href="#form"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0EA5E9] px-4 py-2 font-semibold text-[#0B1220] shadow hover:opacity-90"
      >
        Quero algo assim <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}
