export type IconName =
  | "Users"
  | "ShieldCheck"
  | "Laptop"
  | "BatteryCharging"
  | "Cpu"
  | "Keyboard"
  | "HardDrive"
  | "AppWindow"
  | "Fan"
  | "LaptopUp"
  | "Timer"
  | "Headphones"
  | "Phone"
  | "Mail"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube";

export type SectionId =
  | "home"
  | "about"
  | "services"
  | "why-choose-us"
  | "testimonials"
  | "faq"
  | "contact";

export type SectionLink = `#${SectionId}`;

export type NavigationLink = {
  name: string;
  href: SectionLink;
  active?: boolean;
};

type SectionHeading = {
  id: SectionId;
  cursiveText: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
};

type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export type BusinessContact = {
  address: string;
  phone: string;
  email: string;
};

type ContactMethod = { title: string } & (
  | { icon: "Phone"; method: "phone" }
  | { icon: "Mail"; method: "email" }
);

export type RepairField = {
  name: "name" | "phone" | "email" | "date" | "device" | "service" | "message";
  label: string;
  type: "text" | "tel" | "email" | "date" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

export type SectionData = {
  Topbar: {
    locationLabel: string;
  };
  Header: {
    logo: string;
    logoAlt: string;
    logoHref: SectionLink;
    navigationLabel: string;
    mobileNavigationLabel: string;
    menuLabel: string;
    links: NavigationLink[];
    button: string;
    buttonHref: SectionLink;
  };
  Banner: {
    id: "home";
    banners: string[];
    brand: string;
    cursiveText: string;
    heading: string;
    headingPart2: string;
    features: string[];
    buttonText: string;
    buttonHref: SectionLink;
  };
  About: SectionHeading & {
    mainImage: string;
    imageAlt: string;
    features: Feature[];
  };
  Services: SectionHeading & {
    items: Feature[];
  };
  WhyChooseUs: SectionHeading & {
    image1: string;
    imageAlt: string;
    features: Feature[];
  };
  Testimonial: SectionHeading & {
    carouselLabels: {
      region: string;
      roleDescription: string;
      previous: string;
      next: string;
      select: string;
      position: string;
      rating: string;
    };
    items: {
      image: string;
      name: string;
      title: string;
      quote: string;
      rating: number;
    }[];
  };
  FAQ: SectionHeading & {
    image: string;
    imageAlt: string;
    items: { question: string; answer: string }[];
  };
  Contact: SectionHeading & {
    backgroundImage: string;
    infoCards: ContactMethod[];
    form: {
      title: string;
      description: string;
      fields: RepairField[];
      submit: string;
      requiredMark: string;
      draftMessage: string;
      draftLinkLabel: string;
    };
  };
  Footer: {
    logo: string;
    logoAlt: string;
    logoHref: SectionLink;
    description: string;
    quickLinksTitle: string;
    quickLinks: NavigationLink[];
    contactTitle: string;
    socialTitle: string;
    social: {
      name: string;
      icon: "facebook" | "instagram" | "linkedin" | "youtube";
    }[];
    bottomBar: { copyright: string };
  };
};

type SharedSection = "Topbar" | "Header" | "Footer";
type HomeSection = Exclude<keyof SectionData, SharedSection>;
type VariantName<Key extends keyof SectionData> = `Lapcore${Key}1`;

export type HomeComponent = {
  [Key in HomeSection]: { key: Key; component: VariantName<Key> };
}[HomeSection];

export type LapcoreContent = {
  Lapcore: {
    contact: BusinessContact;
    metadata: { title: string; description: string; icon: string; language: string };
    templateComponents: {
      "template-1": {
        shared: { [Key in SharedSection]: VariantName<Key> };
        pages: { home: { components: HomeComponent[] } };
      };
    };
    sections: {
      [Key in keyof SectionData]: {
        variants: Record<VariantName<Key>, SectionData[Key]>;
      };
    };
  };
};
