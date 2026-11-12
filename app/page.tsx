import { content } from "@/content";
import type { HomeComponent } from "@/type";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { FAQ } from "./components/faq";
import { Hero } from "./components/hero";
import { LandingMain } from "./components/landing-main";
import { Navbar } from "./components/navbar";
import { ScrollRevealInit } from "./components/scroll-reveal";
import { Services } from "./components/services";
import { SiteFooter } from "./components/site-footer";
import { Testimonials } from "./components/testimonials";
import { Topbar } from "./components/topbar";
import { WhyChooseUs } from "./components/why-choose-us";

const { contact, templateComponents, sections } = content.Lapcore;
const { shared, pages } = templateComponents["template-1"];
const services = pages.home.components.find((entry) => entry.key === "Services");
const serviceOptions = sections.Services.variants[services?.component ?? "LapcoreServices1"]
  .items.map(({ title }) => title);

function LandingSection({ entry }: { entry: HomeComponent }) {
  switch (entry.key) {
    case "Banner":
      return <Hero data={sections.Banner.variants[entry.component]} />;
    case "About":
      return <About data={sections.About.variants[entry.component]} />;
    case "Services":
      return <Services data={sections.Services.variants[entry.component]} />;
    case "WhyChooseUs":
      return <WhyChooseUs data={sections.WhyChooseUs.variants[entry.component]} />;
    case "Testimonial":
      return <Testimonials data={sections.Testimonial.variants[entry.component]} />;
    case "FAQ":
      return <FAQ data={sections.FAQ.variants[entry.component]} />;
    case "Contact":
      return <Contact data={sections.Contact.variants[entry.component]} contact={contact} serviceOptions={serviceOptions} />;
  }
}

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Topbar data={sections.Topbar.variants[shared.Topbar]} contact={contact} />
      <Navbar data={sections.Header.variants[shared.Header]} />
      <LandingMain>
        {pages.home.components.map((entry) => <LandingSection key={entry.key} entry={entry} />)}
      </LandingMain>
      <SiteFooter data={sections.Footer.variants[shared.Footer]} contact={contact} />
    </>
  );
}
