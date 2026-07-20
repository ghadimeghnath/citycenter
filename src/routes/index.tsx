import React from 'react'
import { Coffee, Clock, MapPin, Phone, Instagram, Facebook, Leaf, Croissant, Cake, Navigation, ShoppingBag, Star, MessageCircle, Quote } from 'lucide-react'
import heroImg from '/assets/hero.webp'
import coffeeImg from '/assets/img-1.webp'
import pastriesImg from '/assets/img-2.webp'
import baristaImg from '/assets/img-4.webp'
import { useMenu } from '@/lib/menu'

const PHONE_NUMBER = '088888 86166'
const PHONE_TEL = '+918888886166'
const WHATSAPP_URL = 'https://wa.me/918888886166'
const SWIGGY_URL = 'https://www.swiggy.com/'
const ZOMATO_URL = 'https://www.zomato.com/'
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=City+Centre+Cafe+Primavera+G+22+Ferreira+Garden+Gogol+Madgaon+Goa+403601'
const MAP_EMBED_URL = 'https://www.google.com/maps?q=Primavera+G+22+Ferreira+Garden+Gogol+Madgaon+Goa+403601&output=embed'

const testimonials = [
  { name: 'Ananya S.', rating: 5, text: 'Best coffee in Madgaon, hands down. The flat white is exactly how it should be — silky, balanced, no bitterness.' },
  { name: 'Rohan D.', rating: 5, text: 'My morning ritual. Fresh croissants, friendly staff, and the wifi actually works. Genuinely feels like a neighbourhood cafe.' },
  { name: 'Priya K.', rating: 4, text: 'Loved the prawn balchão croissant — such a clever Goan twist. Pastries sell out fast, come early on weekends.' },
]

export default function Index() {
  const menu = useMenu()
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Coffee className="h-4 w-4" />
            </span>
            <span className="font-display text-xl leading-none">City Centre Cafe</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#menu" className="transition hover:text-foreground">Menu</a>
            <a href="#story" className="transition hover:text-foreground">Our Story</a>
            <a href="#order" className="transition hover:text-foreground">Order</a>
            <a href="#visit" className="transition hover:text-foreground">Visit</a>
          </nav>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground uppercase transition hover:bg-primary/90"
          >
            <Phone className="h-3.5 w-3.5" />
            Call now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen items-end overflow-hidden pt-24">
        <img src={heroImg} alt="Warm interior of City Centre Cafe with Edison bulbs and wooden tables" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:pb-24">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/80">
            <span className="h-px w-10 bg-copper" />
            Madgaon · Goa · Est. 2019
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-cream text-balance md:text-7xl lg:text-8xl">A quiet corner in the heart of the city, poured one cup at a time.</h1>
          <p className="mt-6 max-w-xl text-base text-cream/80 md:text-lg">Specialty coffee, fresh bakes, and slow mornings — served every day from a small kitchen in the middle of Madgaon.</p>
          <div className="mt-8 flex items-center gap-2 text-sm text-cream/90">
            <div className="flex items-center gap-1 text-copper">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-copper" />)}</div>
            <span className="font-medium">4.2</span>
            <span className="text-cream/60">· 65+ Google reviews</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-medium text-espresso transition hover:brightness-110"><Phone className="h-4 w-4" />Call now — {PHONE_NUMBER}</a>
            <a href="#menu" className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10">See the menu</a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10"><Navigation className="h-4 w-4" />Get directions</a>
          </div>
        </div>
      </section>

      {/* Marquee-ish strip */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-xs uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" /> Ethically sourced</span>
          <span className="flex items-center gap-2"><Coffee className="h-4 w-4 text-primary" /> House roasted</span>
          <span className="flex items-center gap-2"><Croissant className="h-4 w-4 text-primary" /> Baked daily</span>
          <span className="flex items-center gap-2"><Cake className="h-4 w-4 text-primary" /> Goan flavours</span>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img
              src={baristaImg}
              alt="Barista pouring milk into a latte at City Centre Cafe"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-lg border border-border bg-card px-6 py-4 shadow-lg md:block">
              <p className="font-display text-3xl text-primary">7 yrs</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Serving Madgaon</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our story</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A love letter to slow mornings and good coffee.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                City Centre Cafe began as a small counter beside a bookshop — three tables, one machine, and a lot of conversation. Today, we still keep it small on purpose.
              </p>
              <p>
                Our beans are sourced from single-estate farms in Chikmagalur and roasted in-house every week. Our bread is proofed overnight. Nothing is rushed, because you shouldn't be either.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-2xl">12+</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Coffee origins</p>
              </div>
              <div>
                <p className="font-display text-2xl">Daily</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Fresh bakes</p>
              </div>
              <div>
                <p className="font-display text-2xl">100%</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">In-house roast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-secondary/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">The menu</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
                Simple things, done properly.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Updated weekly with what's in season. Ask our team about today's single origin and specials.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {Object.entries(menu).map(([category, items]) => (
              <div key={category}>
                <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
                  <h3 className="font-display text-2xl text-primary">{category}</h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">All day</span>
                </div>
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-4">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="whitespace-nowrap font-display text-lg text-foreground">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Inside the cafe</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Warmth in every detail.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
          <img src={coffeeImg} alt="Cappuccino with latte art and a fresh croissant" width={1200} height={1200} loading="lazy" className="col-span-3 row-span-2 aspect-square w-full rounded-lg object-cover md:aspect-auto md:h-full" />
          <img src={pastriesImg} alt="Freshly baked pastries on wooden board" width={1200} height={1400} loading="lazy" className="col-span-3 aspect-[4/3] w-full rounded-lg object-cover" />
          <img src={heroImg} alt="Cafe interior with warm lighting" width={1600} height={1200} loading="lazy" className="col-span-3 aspect-[4/3] w-full rounded-lg object-cover" />
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Loved by locals</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              4.2 stars, 65+ reviews, and one very loyal morning crowd.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex text-copper">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-copper" />)}</div>
            <span>on Google</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-lg border border-border bg-card p-8 shadow-sm">
              <Quote className="absolute right-6 top-6 h-6 w-6 text-primary/20" />
              <div className="flex text-copper">{[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-copper" />)}</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>



      {/* Order Online */}
      <section id="order" className="bg-secondary/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Order online</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Prefer the cafe at home?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our full menu is available for delivery across Madgaon and nearby areas via Swiggy and Zomato. Fresh bakes packed the moment your order comes in.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href={SWIGGY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#FC8019] text-white">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl">Order on Swiggy</p>
                  <p className="text-sm text-muted-foreground">30–45 min delivery · Live tracking</p>
                </div>
              </div>
              <span className="text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">Open →</span>
            </a>
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E23744] text-white">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl">Order on Zomato</p>
                  <p className="text-sm text-muted-foreground">Contactless delivery · Offers daily</p>
                </div>
              </div>
              <span className="text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">Open →</span>
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Minimum order ₹150. Delivery fees and timings set by the partner app.</p>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-espresso py-24 text-cream md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-copper">Visit us</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Come sit awhile. We've saved you a table.</h2>
            <p className="mt-6 max-w-md text-cream/70">Tucked inside Ferreira Garden in Gogol, just off the City Centre in Madgaon. Walk-ins welcome; small groups can reserve ahead.</p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-copper" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-cream/50">Address</p>
                  <p className="mt-1">Primavera, G 22, Ferreira Garden,<br />Phase 3, Gogol, Madgaon, Goa 403601</p>
                  <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full border border-copper/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-copper transition hover:bg-copper hover:text-espresso">
                    <Navigation className="h-3.5 w-3.5" />
                    Get directions
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-copper" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-cream/50">Opening hours</p>
                  <dl className="mt-2 space-y-1 text-sm">
                    {[
                      ["Monday", "8:00 am – 9:00 pm"],
                      ["Tuesday", "8:00 am – 9:00 pm"],
                      ["Wednesday", "8:00 am – 9:00 pm"],
                      ["Thursday", "8:00 am – 9:00 pm"],
                      ["Friday", "8:00 am – 9:00 pm"],
                      ["Saturday", "8:00 am – 9:00 pm"],
                      ["Sunday", "8:00 am – 9:00 pm"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-1">
                        <dt className="text-cream/70">{day}</dt>
                        <dd className="whitespace-nowrap text-cream">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-copper" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-cream/50">Call or WhatsApp</p>
                  <p className="mt-1">{PHONE_NUMBER}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-copper px-4 py-2 text-xs font-medium uppercase tracking-widest text-espresso transition hover:brightness-110">
                      <Phone className="h-3.5 w-3.5" /> Call now
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-copper/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-copper transition hover:bg-copper hover:text-espresso">
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-3">
              <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 transition hover:bg-cream/10"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 transition hover:bg-cream/10"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
          <form className="rounded-lg border border-cream/15 bg-cream/5 p-8 backdrop-blur">
            <h3 className="font-display text-2xl">Reserve a table</h3>
            <p className="mt-1 text-sm text-cream/60">We'll confirm within the hour.</p>
            <div className="mt-6 grid gap-4">
              <label className="text-xs uppercase tracking-widest text-cream/60">
                Name
                <input type="text" className="mt-2 w-full rounded-md border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none" placeholder="Your name" />
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-xs uppercase tracking-widest text-cream/60">
                  Date
                  <input type="date" className="mt-2 w-full rounded-md border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream focus:border-copper focus:outline-none" />
                </label>
                <label className="text-xs uppercase tracking-widest text-cream/60">
                  Guests
                  <input type="number" min={1} defaultValue={2} className="mt-2 w-full rounded-md border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream focus:border-copper focus:outline-none" />
                </label>
              </div>
              <label className="text-xs uppercase tracking-widest text-cream/60">
                Phone
                <input type="tel" className="mt-2 w-full rounded-md border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-copper focus:outline-none" placeholder="+91" />
              </label>
              <button type="button" className="mt-2 rounded-full bg-copper px-6 py-3 text-sm font-medium text-espresso transition hover:brightness-110">Request reservation</button>
            </div>
          </form>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6">
          <div className="overflow-hidden rounded-lg border border-cream/15 shadow-2xl">
            <iframe
              title="City Centre Cafe location map"
              src={MAP_EMBED_URL}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full border-0 md:h-[460px]"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground"><Coffee className="h-3.5 w-3.5" /></span>
            <span className="font-display text-lg text-foreground">City Centre Cafe</span>
          </div>
          <p>© {new Date().getFullYear()} City Centre Cafe, Madgaon. All rights reserved. · <a href="/admin/menu" className="underline-offset-4 hover:text-foreground hover:underline">Edit menu</a></p>
        </div>
      </footer>
    </div>
  )
}
