import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Instagram, Mail, MapPin, CheckCircle2, ChevronRight } from "lucide-react";

const ACCENT = "#65A9FF";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function NutritionLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div aria-hidden className="h-8 w-8 rounded-xl" style={{ backgroundColor: ACCENT }} />
            <span className="font-semibold">Ana Paula Arpine – Nutricionista</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#programas" className="hover:underline">Programas</a>
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
          <Button asChild className="rounded-2xl" style={{ backgroundColor: ACCENT }}>
            <a href="#contato">Agendar consulta</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Nutrição prática e personalizada para a sua saúde
            </h1>
            <p className="text-lg text-slate-600">
              Atendimento presencial e online, com foco em saúde, bem-estar e qualidade de vida. Também trabalho com o Desafio de 21 Dias para quem busca motivação extra e resultados rápidos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl" style={{ backgroundColor: ACCENT }}>
                <a href="#contato" className="flex items-center gap-2">
                  Começar agora <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" asChild size="lg" className="rounded-2xl">
                <a href="#programas">Ver programas</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} className="aspect-[4/3] rounded-3xl shadow-xl bg-white p-6 grid place-items-center">
            <div className="text-center">
              <div className="h-14 w-14 mx-auto mb-4 rounded-2xl" style={{ backgroundColor: ACCENT }} />
              <p className="mt-3 text-sm text-slate-500">Sua saúde com atendimento humanizado, onde você estiver.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-12">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-8">
          Serviços
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Atendimento Presencial e Online", text: "Flexibilidade, comodidade e qualidade no atendimento, seja na clínica ou por videochamada." },
            { title: "Desafio de 21 Dias", text: "Programa motivador para adotar hábitos saudáveis e alcançar resultados em pouco tempo." },
            { title: "Nutrição Clínica", text: "Planos personalizados para emagrecimento, ganho de massa, gestantes, idosos e tratamento de patologias." },
          ].map((f, i) => (
            <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <Card className="rounded-3xl">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mim</h2>
            <p className="text-slate-600 leading-relaxed">
              Sou nutricionista (CRN/16077), formada em 2021 pela Faculdade Farol. Ofereço atendimento personalizado, presencial e online, com acompanhamento contínuo e humanizado. Meu objetivo é orientar escolhas alimentares e transformar hábitos para resultados duradouros.
            </p>
            <ul className="mt-4 space-y-2 text-slate-600 text-sm">
              <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Atendimento online prático e seguro</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Planos alimentares adaptados à sua rotina</li>
              <li className="flex gap-2 items-start"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Programas como o Desafio de 21 Dias</li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-3xl bg-white shadow-xl grid place-items-center p-6">
            <div className="text-center">
              <div className="h-14 w-14 mx-auto mb-3 rounded-2xl" style={{ backgroundColor: ACCENT }} />
              <p className="text-sm text-slate-500">Área reservada para sua foto</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-4 pb-12">
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="grid md:grid-cols-2 p-8 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Agende sua consulta</h3>
              <p className="text-slate-600">Cuide da sua saúde com conforto, segurança e resultados reais. Atendimento presencial e online.</p>
              <div className="flex gap-3 mt-4 flex-wrap">
                <Button asChild className="rounded-2xl" style={{ backgroundColor: ACCENT }}>
                  <a href="https://wa.me/5569993354442" target="_blank" rel="noreferrer" className="flex items-center gap-2"><Phone className="h-4 w-4" /> WhatsApp</a>
                </Button>
                <Button variant="secondary" asChild className="rounded-2xl">
                  <a href="https://instagram.com/anapaulaarpine.nutri" target="_blank" rel="noreferrer" className="flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</a>
                </Button>
                <Button variant="outline" asChild className="rounded-2xl">
                  <a href="mailto:paulaarpinenutri@gmail.com" className="flex items-center gap-2"><Mail className="h-4 w-4" /> E-mail</a>
                </Button>
              </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Santa Luzia do Oeste – RO</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> (69) 99335-4442</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> paulaarpinenutri@gmail.com</div>
              <div className="flex items-center gap-2">CRN/16077</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ana Paula Arpine – Todos os direitos reservados
      </footer>
    </div>
  );
}
