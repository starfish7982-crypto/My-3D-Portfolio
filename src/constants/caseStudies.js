import { estate, threads } from "../assets/icons";

const CURIE_DIAGRAM_BASE =
  "https://raw.githubusercontent.com/starfish7982-crypto/Ackuretta/main/Projects/CURIE/UI/UX/UX/Diagram";

const CURIE_UI_BASE =
  "https://raw.githubusercontent.com/starfish7982-crypto/Ackuretta/main/Projects/CURIE/UI/UX/UI";

const CURIE_BITMAP_BASE = `${CURIE_UI_BASE}/Photoshop%20Bitmap`;

const CURIE_PROJECT_BASE =
  "https://raw.githubusercontent.com/starfish7982-crypto/Ackuretta/main/Projects/CURIE";

export const caseStudies = [
  {
    slug: "book-haven",
    name: "Book Haven",
    subtitle: "Bookstore E-Commerce IA & Wireframes",
    emphasis: "Information Architecture · Navigation Flow · UX Fundamentals",
    theme: "btn-back-blue",
    iconUrl: estate,
    tags: ["Information Architecture", "Wireframing", "User Flows", "Figma"],
    meta: "Personal project · UX Design",
    excerpt:
      "A conceptual bookstore e-commerce project focused on structuring content, defining navigation, and mapping discovery-to-checkout flows before visual polish.",
    overview:
      "Book Haven is a fictional online bookstore I designed to practice core UX fundamentals — information architecture, navigation flow, and wireframing. The goal was clarity and findability: helping users discover books across categories without getting lost, and completing checkout with confidence on both mobile and desktop.",
    challenge: [
      "Users need to discover books across categories without cognitive overload",
      "Checkout must feel simple, trustworthy, and consistent across devices",
      "Mobile and desktop should share the same mental model with responsive layouts",
    ],
    role: "UX Designer (solo) — sitemap, user flows, low-fi and hi-fi wireframes",
    process: [
      {
        title: "Research & Assumptions",
        description:
          "Defined two primary user modes: the casual browser exploring categories, and the intent-driven buyer searching for a specific title. These jobs-to-be-done shaped navigation priorities.",
      },
      {
        title: "Information Architecture",
        description:
          "Mapped a flat category structure with persistent global navigation — Home, Categories, Search, Cart, and Account — keeping any book within two clicks.",
        highlights: [
          "Primary nav: Home · Categories · Search · Cart · Account",
          "Secondary nav: About · Help · Order tracking",
          "Max 2 clicks from homepage to any product",
        ],
      },
      {
        title: "Navigation Flow",
        description:
          "Designed the core happy path from discovery through purchase, with clear exit points and a persistent cart indicator to reduce mid-browse anxiety.",
        highlights: [
          "Home → Category → Product Detail → Cart → Checkout → Confirmation",
          "Guest checkout path with optional account creation",
          "Search accessible from every screen via persistent header",
        ],
      },
      {
        title: "Wireframes",
        description:
          "Built responsive wireframes for key screens — homepage, product listing, product detail, cart, and checkout — prioritizing hierarchy, CTAs, and empty states over visual decoration.",
      },
    ],
    decisions: [
      {
        title: "Flat category structure",
        description: "Limited nesting depth so browsers and searchers both reach products quickly.",
      },
      {
        title: "Persistent cart indicator",
        description: "Visible cart state across all pages reduces abandonment during multi-item browsing.",
      },
      {
        title: "Progressive checkout",
        description: "Guest path first, account optional — lowering friction for first-time buyers.",
      },
    ],
    outcomes: [
      "Completed a full IA → wireframe pipeline from sitemap through checkout",
      "Strengthened navigation-first thinking before applying visual design",
      "Built separate mobile and desktop prototypes to validate responsive parity",
    ],
    prototypes: [
      {
        label: "Mobile Wireframe Prototype",
        url: "https://www.figma.com/proto/GDKfSAfFCFMq07wNGuUKSI/Mobile-Book-Haven-Bookstore?node-id=1034169-91&t=FZ9xytZE53De8Jmm-1",
      },
      {
        label: "Desktop Wireframe Prototype",
        url: "https://www.figma.com/proto/zvIDgdbSRfICoyZsbbrRYc/Desktop-Book-Haven-Bookstore?node-id=1036251-2622&t=FZ9xytZE53De8Jmm-1",
      },
    ],
    github:
      "https://github.com/starfish7982-crypto/Book-Haven-Bookstore-Wireframe",
    nextStudy: "curie",
    nextStudyLabel: "CURIE — where design meets hardware constraints",
  },
  {
    slug: "curie",
    name: "CURIE",
    subtitle: "3D Curing Oven Interface",
    emphasis: "Product UI · Hardware-Software Integration · Engineering Logic",
    theme: "btn-back-green",
    iconUrl: threads,
    tags: [
      "Product Design",
      "Hardware UI",
      "Figma",
      "Angular/TypeScript",
      "Embedded Touchscreen",
    ],
    meta: "Ackuretta · Software Engineer & UX Designer · 2018–2021",
    excerpt:
      "End-to-end interface design for a professional 3D curing oven used in dental clinics — balancing premium UI with embedded hardware constraints and real-time device states.",
    overview:
      "CURIE is a professional 3D curing oven used in dental clinics worldwide. I owned the interface from wireframes through production — balancing a premium, approachable UI with strict technical requirements: real-time device state, multilingual workflows, firmware synchronization, and embedded touch-screen constraints.",
    challenge: [
      "Dental technicians work in high-stress, time-sensitive environments and need status at a glance",
      "The embedded touchscreen is extremely small — every pixel, touch target, and label must earn its place",
      "Complex 3D printing and curing data was difficult to read and act on quickly",
      "Every screen had to map to hardware state machines engineers could implement and QA could test",
    ],
    role: "End-to-end UX design (Figma, Adobe XD, Axure) and frontend implementation (TypeScript, Angular, RxJS) with PM, firmware, and QA teams",
    metrics: [
      { value: "40%", label: "Reduction in clinic setup time" },
      { value: "$500K", label: "Estimated cost savings" },
      { value: "1,000+", label: "Production devices deployed" },
      { value: "99.9%", label: "System availability" },
    ],
    process: [
      {
        title: "Discovery",
        description:
          "Shadowed dental technician workflows and gathered requirements from product managers and firmware engineers to understand cure cycles, material selection, and error recovery paths.",
      },
      {
        title: "IA & System Flow",
        description:
          "Mapped device states — idle, material selection, curing, error, update — into a system flow chart that aligned design screens with engineering logic.",
        image: `${CURIE_DIAGRAM_BASE}/System%20Flow%20Chart.png`,
        imageAlt: "CURIE system flow chart mapping device states to UI screens",
      },
      {
        title: "Prototyping",
        description:
          "Built interactive prototypes in Axure and Figma to validate hardware-software interactions before firmware commits, reducing rework across five engineering teams.",
      },
      {
        title: "Visual Design & Implementation",
        description:
          "Designed high-fidelity UI with custom assets for desktop, tablet, and embedded touchscreens — then implemented with RxJS state streams for real-time hardware feedback.",
      },
      {
        title: "Iteration in Production",
        description:
          "Refined multilingual UI workflows and dashboard clarity based on field feedback, cutting user operation time by 30% and improving production transparency by 25%.",
      },
    ],
    designEngineering: [
      {
        design: "Wireframes and interactive prototypes for stakeholder alignment",
        engineering: "State-driven UI mapped to device idle, curing, and error modes",
      },
      {
        design: "Bitmap UI assets sized to exact embedded screen dimensions",
        engineering: "Photoshop bitmap pipeline exported for firmware rendering on small displays",
      },
      {
        design: "Visual hierarchy for status-at-a-glance in clinic environments",
        engineering: "RxJS streams for real-time hardware feedback and concurrency",
      },
      {
        design: "Touch targets sized for gloved use on a compact touchscreen",
        engineering: "Multilingual string architecture across 1,000+ deployed devices",
      },
      {
        design: "Typography scaled for legibility at native device resolution",
        engineering: "99.9% availability with automated test suites for regression prevention",
      },
    ],
    deviceConstraint: {
      title: "Designing for a Small Embedded Screen",
      description:
        "Unlike web or mobile apps, CURIE's UI renders on a fixed-size embedded touchscreen baked into the curing oven. I designed directly in Photoshop bitmap format at native device resolution — every screen, icon, and label optimized for a compact display used by technicians wearing gloves in clinical lighting.",
      images: [
        {
          title: "CURIE on Device",
          description: "Production curing oven with embedded touchscreen interface",
          image: `${CURIE_BITMAP_BASE}/Oven-Pic.png`,
        },
        {
          title: "Bitmap Screen Spec",
          description: "Native screen dimensions and safe-zone constraints for UI layout",
          image: `${CURIE_BITMAP_BASE}/Photoshop%20Bitmap%20Spec.png`,
        },
        {
          title: "Production UI Bitmap",
          description: "Final bitmap UI as rendered on the embedded display",
          image: `${CURIE_BITMAP_BASE}/Photoshop%20Bitmap.png`,
        },
      ],
      typography: [
        {
          title: "Large Text (Primary Actions)",
          image: `${CURIE_BITMAP_BASE}/Photoshop%20Text(Big).png`,
        },
        {
          title: "Small Text (Secondary Labels)",
          image: `${CURIE_BITMAP_BASE}/Photoshop%20Text(Small).png`,
        },
      ],
      uiRepo: "https://github.com/starfish7982-crypto/Ackuretta/tree/main/Projects/CURIE/UI/UX/UI",
    },
    productSpec: {
      title: "Shipped Product & Company Specifications",
      description:
        "CURIE shipped as a commercial dental product. The interface I designed became part of Ackuretta's official product documentation and technical specifications.",
      productImage: `${CURIE_PROJECT_BASE}/CURIE.jpeg`,
      productImageAlt: "Ackuretta CURIE 3D curing oven product",
      documents: [
        {
          label: "Technical Specifications Sheet",
          url: "https://github.com/starfish7982-crypto/Ackuretta/blob/main/Projects/CURIE/CURIE_Technical%20Specifications%20Sheet.pdf",
        },
        {
          label: "User Manual",
          url: "https://github.com/starfish7982-crypto/Ackuretta/blob/main/Projects/CURIE/CURIE%20User%20Manual.pdf",
        },
        {
          label: "Product Flyer",
          url: "https://github.com/starfish7982-crypto/Ackuretta/blob/main/Projects/CURIE/Global_Digital_CURIE_Flyer.pdf",
        },
      ],
      projectFolder: "https://github.com/starfish7982-crypto/Ackuretta/tree/main/Projects/CURIE",
    },
    productionUI: [
      {
        title: "Start Screen",
        description: "Native-resolution bitmap entry point on the embedded display",
        image: `${CURIE_UI_BASE}/Started%20Page.png`,
      },
      {
        title: "Material Library",
        description: "Compact material browsing optimized for small touch targets",
        image: `${CURIE_UI_BASE}/Material%20Libaray.png`,
      },
      {
        title: "Cure Countdown",
        description: "Active curing state with large, legible countdown typography",
        image: `${CURIE_UI_BASE}/Complete%20Countdown%20Common%20Materials%20List.png`,
      },
      {
        title: "Parameter Testing",
        description: "Engineering-grade controls within tight screen real estate",
        image: `${CURIE_UI_BASE}/Material%20Parameter%20Customized%20Testing.png`,
      },
    ],
    gallery: [
      {
        title: "Start Screen",
        description: "Entry point with clear device status and primary actions",
        image: `${CURIE_DIAGRAM_BASE}/Started%20Page.png`,
      },
      {
        title: "Material Library",
        description: "Organized material selection with brand and parameter browsing",
        image: `${CURIE_DIAGRAM_BASE}/Material%20Library.png`,
      },
      {
        title: "Cure Cycle In Progress",
        description: "Countdown and progress state during active curing",
        image: `${CURIE_DIAGRAM_BASE}/Complet%20Countdown%20Test.png`,
      },
      {
        title: "Parameter Customization",
        description: "Complex material testing workflow with engineering-grade controls",
        image: `${CURIE_DIAGRAM_BASE}/Material%20Parameter%20Customized%20Testing.png`,
      },
      {
        title: "Empty State",
        description: "Guided recovery when no commonly used materials exist",
        image: `${CURIE_DIAGRAM_BASE}/Empty-No%20Commonly%20Used%20Materials.png`,
      },
      {
        title: "System Settings",
        description: "Device configuration aligned with firmware capabilities",
        image: `${CURIE_DIAGRAM_BASE}/System%20Setting.png`,
      },
    ],
    reflection:
      "CURIE taught me that the best hardware UI isn't just beautiful — every screen maps to a system state engineers can implement, test, and ship. That's why I design with implementation constraints in mind, and why I still engineer.",
    github:
      "https://github.com/starfish7982-crypto/Ackuretta/tree/main/Projects/CURIE/UI/UX/UX/Diagram",
    githubUI:
      "https://github.com/starfish7982-crypto/Ackuretta/tree/main/Projects/CURIE/UI/UX/UI",
    nextStudy: "book-haven",
    nextStudyLabel: "Book Haven — foundational IA & wireframing",
  },
];

export const getCaseStudyBySlug = (slug) =>
  caseStudies.find((study) => study.slug === slug);
