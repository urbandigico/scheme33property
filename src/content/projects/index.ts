export type Project = {
  slug: string;
  name: string;
  type: string;
  location: string;
  image: string;
  caption: string;
  label: string;
  intro: string;
  description: string;
  amenities: string[];
  gallery: { image: string; label: string }[];
  source: string;
  map: string;
};
const asset = (name: string) => `/images/projects/${name}.webp`;
export const projects: Project[] = [
  {
    slug: "farhan-residency",
    name: "Farhan Residency",
    type: "Apartments",
    location: "PIA Housing Society, Scheme 33",
    image: asset("farhan-hero"),
    caption: "Architectural visualization",
    label: "Featured development",
    intro: "A little more room for the life you love.",
    description:
      "Discover 3-room apartments in PIA Housing Society, with everyday essentials and shared spaces designed around family life.",
    amenities: [
      "3-room apartments",
      "Rooftop gym",
      "Standby generator",
      "CCTV surveillance",
      "Intercom services",
      "Lift access",
      "Fire safety system",
      "Society park & masjid",
    ],
    gallery: [
      { image: asset("farhan-hero"), label: "Architectural visualization" },
      { image: asset("farhan-exterior"), label: "Project presentation" },
      { image: asset("farhan-plan-a"), label: "Type A floor plan" },
      { image: asset("farhan-plan-a1"), label: "Type A1 floor plan" },
      { image: asset("farhan-location"), label: "Location plan" },
    ],
    source: "https://mfkbuilder.com/farhan-residency/",
    map: "https://www.google.com/maps?q=24.981045,67.147590",
  },
  {
    slug: "mfk-signature-villas",
    name: "MFK Signature Villas",
    type: "Villas",
    location: "Main Maymar Avenue, Scheme 33",
    image: asset("villas-cover"),
    caption: "Site & sales office",
    label: "Explore the development",
    intro: "Your own space. Your next chapter.",
    description:
      "Explore a villa community on Main Maymar Avenue, with considered layouts, gated premises, and an emphasis on comfortable family living.",
    amenities: [
      "Gated premises",
      "Family-focused layouts",
      "Optimized ventilation",
      "Community living",
    ],
    gallery: [
      { image: asset("villas-cover"), label: "Site & sales office" },
      {
        image: asset("villas-progress"),
        label: "Entrance — published site photograph",
      },
      {
        image: asset("villas-progress-2"),
        label: "Published construction photograph",
      },
      { image: asset("villas-plan"), label: "Villa specifications" },
      { image: asset("villas-amenities"), label: "Features & amenities" },
      { image: asset("villas-location"), label: "Location presentation" },
    ],
    source: "https://mfkbuilder.com/mfk-villas/",
    map: "https://www.google.com/maps/search/?api=1&query=MFK+Signature+Villas+Main+Maymar+Avenue+Scheme+33+Karachi",
  },
];
