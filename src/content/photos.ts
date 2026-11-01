/** Team photos in /public/images/photos (900x1600, optimized WebP). */
export type Photo = { src: string; width: number; height: number; alt: string };

const p = (name: string, alt: string, width = 900, height = 1600): Photo => ({
  src: `/images/photos/${name}.webp`,
  width,
  height,
  alt,
});

/** Landscape card photos are 960x640. */
const land = (name: string, alt: string) => p(name, alt, 960, 640);

export const photos = {
  kitchen: p(
    "cleaner-kitchen-counter",
    "Cleaner in an All Fresh uniform wiping a kitchen counter with a cloth, spray bottle beside her",
  ),
  dusting: p(
    "cleaner-dusting-living-room",
    "Cleaner in an All Fresh uniform dusting a wooden sideboard in a bright living room",
  ),
  bathroom: p(
    "cleaner-bathroom-shower",
    "Cleaner in an All Fresh uniform wiping a glass shower door in a bathroom",
  ),
  vacuum: p(
    "cleaner-vacuuming-floor",
    "Cleaner in an All Fresh uniform vacuuming the floor of a bright living room",
  ),
  mop: p(
    "cleaner-mopping-floor",
    "Cleaner in an All Fresh uniform mopping a living room floor",
  ),
  vacuumRoom: land(
    "cleaner-vacuuming-rug",
    "Cleaner in an All Fresh uniform vacuuming a rug in a bright living room",
  ),
  office: land(
    "cleaner-mopping-office",
    "Cleaner in an All Fresh uniform and gloves mopping the floor of a modern open-plan office",
  ),
  cabinets: land(
    "cleaner-cabinets-empty-home",
    "Cleaner in an All Fresh uniform and gloves wiping inside a kitchen cabinet in an empty home with moving boxes on the counter",
  ),
  kitchenGloves: land(
    "cleaner-kitchen-gloves",
    "Cleaner in an All Fresh uniform and gloves wiping a kitchen counter",
  ),
  sideTable: land(
    "cleaner-side-table",
    "Cleaner in an All Fresh uniform and gloves wiping a wooden side table in a living room",
  ),
  bedroom: land(
    "cleaner-bedroom-pillows",
    "Cleaner in an All Fresh uniform arranging pillows on a made bed in a bedroom",
  ),
} as const;

export type PhotoKey = keyof typeof photos;
