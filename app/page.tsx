import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Info } from "@/components/info"
import { Menu } from "@/components/menu"
import { Franchise } from "@/components/franchise"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Info />
      <Menu />
      <Franchise />
      <Location />
      <Footer />
    </main>
  )
}
