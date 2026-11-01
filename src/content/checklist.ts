/**
 * Cleaning checklist copied cell-by-cell from the comparison tables on the
 * current website (allfresh512.com), which mark each task with a check, an X
 * or "Add On". "none" means the original cell was empty (not listed).
 */
export type Mark = "yes" | "no" | "addon" | "none";

export type ChecklistRow = {
  task: string;
  /** Standard Clean, Deep Clean, Move In / Out */
  marks: [Mark, Mark, Mark];
};

export const checklistColumns = ["Standard Clean", "Deep Clean", "Move In / Out"] as const;

export const checklist: { area: string; rows: ChecklistRow[] }[] = [
  {
    area: "Kitchen",
    rows: [
      { task: "Remove Cobwebs", marks: ["no","yes","yes"] },
      { task: "Dust Light Fixtures", marks: ["yes","yes","yes"] },
      { task: "Dust Blinds/Shutters, windowsills & window frames", marks: ["yes","yes","yes"] },
      { task: "Dust Ceiling Fans", marks: ["yes","yes","yes"] },
      { task: "Clean & dry sink & soap dish", marks: ["yes","yes","yes"] },
      { task: "Clean Countertops & Back Splash", marks: ["yes","yes","yes"] },
      { task: "Clean Microwave (Inside & Outside)", marks: ["yes","yes","yes"] },
      { task: "Clean stove burners, clean stovetop, front & control panels", marks: ["yes","yes","yes"] },
      { task: "Clean Appliance Exteriors", marks: ["yes","yes","yes"] },
      { task: "Wipe down surfaces", marks: ["yes","yes","yes"] },
      { task: "Empty garbage and replace the bag", marks: ["yes","yes","yes"] },
      { task: "Vacuum / Sweep / Mop Floors", marks: ["yes","yes","yes"] },
      { task: "Clean all light switches & doorknobs", marks: ["no","yes","yes"] },
      { task: "Wipe Down and Disinfect Cabinets", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Blinds", marks: ["no","yes","yes"] },
      { task: "Clean Window Ledges", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Baseboards", marks: ["no","yes","yes"] },
      { task: "Clean Doors & Frames", marks: ["no","yes","yes"] },
      { task: "Clean Inside Cabinets, Pantry, & Drawers", marks: ["no","no","yes"] },
      { task: "Clean Hood Range", marks: ["no","yes","yes"] },
      { task: "Clean Inside Oven", marks: ["addon","addon","yes"] },
      { task: "Clean Inside Refrigerator", marks: ["addon","addon","yes"] },
    ],
  },
  {
    area: "Bathrooms",
    rows: [
      { task: "Remove Cobwebs", marks: ["no","yes","yes"] },
      { task: "Dust Light Fixtures", marks: ["yes","yes","yes"] },
      { task: "Dust Blinds/Shutters, windowsills & window frames", marks: ["yes","yes","yes"] },
      { task: "Dust & tidy knick-knacks, personal items, & hand towels", marks: ["yes","yes","yes"] },
      { task: "Clean Shower/Tub", marks: ["yes","yes","yes"] },
      { task: "Clean & dry sink, counters, & soap dish", marks: ["yes","yes","yes"] },
      { task: "Clean, buff all mirrors & glass", marks: ["yes","yes","yes"] },
      { task: "Clean Inside and Out of Toilet/Surrounding Areas", marks: ["yes","yes","yes"] },
      { task: "Vacuum / Sweep / Mop Floors", marks: ["yes","yes","yes"] },
      { task: "Empty garbage and replace the bag", marks: ["yes","yes","yes"] },
      { task: "Clean all light switches & doorknobs", marks: ["no","yes","yes"] },
      { task: "Wipe down and Disinfect Cabinets", marks: ["no","yes","yes"] },
      { task: "Clean Ceiling Fans/Vents", marks: ["no","yes","yes"] },
      { task: "Clean Light Fixtures", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Blinds", marks: ["no","yes","yes"] },
      { task: "Clean Window Ledges", marks: ["no","yes","yes"] },
      { task: "Clean Doors & Frames", marks: ["no","no","yes"] },
      { task: "Clean Inside Cabinets & Drawers", marks: ["no","no","yes"] },
      { task: "Clean Inside Oven", marks: ["addon","addon","yes"] },
    ],
  },
  {
    area: "Bedrooms",
    rows: [
      { task: "Remove Cobwebs", marks: ["no","yes","yes"] },
      { task: "Dust Light Fixtures", marks: ["yes","yes","yes"] },
      { task: "Dust Blinds/Shutters, windowsills & window frames", marks: ["yes","yes","yes"] },
      { task: "Dust & tidy knick-knacks & personal items", marks: ["yes","yes","none"] },
      { task: "Dust Ceiling Fans", marks: ["yes","yes","yes"] },
      { task: "Dust furniture, lamps, lampshades & hanging lights", marks: ["yes","yes","yes"] },
      { task: "Tidy area(s), fold blankets, arrange pillows, etc.", marks: ["yes","yes","yes"] },
      { task: "Clean Mirrors", marks: ["yes","yes","yes"] },
      { task: "Empty garbage and replace the bag", marks: ["yes","yes","yes"] },
      { task: "Make bed(s)", marks: ["yes","yes","none"] },
      { task: "Vacuum / Sweep / Mop Floors", marks: ["yes","yes","yes"] },
      { task: "Clean all light switches & doorknobs", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Baseboards", marks: ["no","yes","yes"] },
      { task: "Clean Light Fixtures", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Blinds", marks: ["no","yes","yes"] },
      { task: "Clean Window Ledges", marks: ["no","yes","yes"] },
      { task: "Wipe Down Furniture", marks: ["no","yes","none"] },
      { task: "Vacuum Furniture", marks: ["no","yes","none"] },
      { task: "Clean Doors & Frames", marks: ["no","no","yes"] },
      { task: "Clean Inside Cabinets & Drawers", marks: ["no","no","yes"] },
      { task: "Clean Inside Oven", marks: ["addon","addon","yes"] },
    ],
  },
  {
    area: "Common Areas",
    rows: [
      { task: "Remove Cobwebs", marks: ["no","yes","yes"] },
      { task: "Dust Light Fixtures", marks: ["yes","yes","yes"] },
      { task: "Dust Blinds/Shutters, windowsills & window frames", marks: ["yes","yes","yes"] },
      { task: "Dust & tidy knick-knacks & personal items", marks: ["yes","yes","none"] },
      { task: "Dust Ceiling Fans", marks: ["yes","yes","yes"] },
      { task: "Dust furniture, lamps, lampshades & hanging lights", marks: ["yes","yes","yes"] },
      { task: "Tidy area(s), fold blankets, arrange pillows, etc.", marks: ["yes","yes","yes"] },
      { task: "Clean Mirrors", marks: ["yes","yes","yes"] },
      { task: "Empty garbage and replace the bag", marks: ["yes","yes","yes"] },
      { task: "Vacuum / Sweep / Mop Floors", marks: ["yes","yes","yes"] },
      { task: "Clean all light switches & doorknobs", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Baseboards", marks: ["no","yes","yes"] },
      { task: "Clean Light Fixtures", marks: ["no","yes","yes"] },
      { task: "Wet Wipe Blinds", marks: ["no","yes","yes"] },
      { task: "Clean Window Ledges", marks: ["no","yes","yes"] },
      { task: "Wipe Down Furniture", marks: ["no","yes","none"] },
      { task: "Vacuum Furniture", marks: ["no","yes","none"] },
      { task: "Clean Doors & Frames", marks: ["no","no","yes"] },
      { task: "Clean Inside Cabinets & Drawers", marks: ["no","no","yes"] },
      { task: "Sweep Out Garage", marks: ["no","no","yes"] },
      { task: "Clean Inside Oven", marks: ["addon","addon","yes"] },
    ],
  },
];
