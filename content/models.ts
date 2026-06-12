export type ModelPart = {
  name: string;
  file: string;
};

export type ModelLink = {
  label: string;
  url: string;
};

export type ModelComponent = {
  label: string;
  /** Optional external link (e.g. product page) */
  url?: string;
  /** Optional image shown instead of/alongside the link (path under /public) */
  image?: string;
};

export type ModelEntry = {
  slug: string;
  title: string;
  description: string;
  /** Optional preview image shown on the gallery card (path under /public) */
  image?: string;
  parts: ModelPart[];
  tags: string[];
  printSettings?: {
    material?: string;
    layerHeight?: string;
    infill?: string;
    walls?: string;
    topBottomLayers?: string;
    supports?: string;
  };
  /** Freeform build notes shown as bullet points */
  notes?: string[];
  /** Hardware / components used in the build, with links or images */
  components?: ModelComponent[];
  /** Credit for any external/downloaded part of the design */
  credit?: {
    text: string;
    link?: ModelLink;
  };
};

export const models: ModelEntry[] = [
  {
    slug: "yerbero",
    title: "Yerbero (Mate Yerba Container)",
    description:
      "A multi-part yerbero for Argentinian mate — a sealed container that stores yerba with a built-in sugar dispenser and filter. Designed in Autodesk Inventor (V2.0).",
    image: "/models/yerbero/preview.png",
    parts: [
      { name: "Body", file: "/models/yerbero/Cuerpo.stl" },
      { name: "Body (Smooth)", file: "/models/yerbero/CuerpoLiso.stl" },
      { name: "Bottom Lid", file: "/models/yerbero/TapaInferior.stl" },
      { name: "Sugar Container", file: "/models/yerbero/Azucarero.stl" },
      { name: "Sugar Container Lid", file: "/models/yerbero/TapaAzucarero.stl" },
      { name: "Filter", file: "/models/yerbero/Filtro.stl" },
      { name: "Plug", file: "/models/yerbero/Taponcito.stl" },
    ],
    tags: ["mate", "household", "inventor", "multi-part"],
    printSettings: {
      material: "PLA / PETG",
      layerHeight: "0.2mm",
      infill: "15-20%",
    },
  },
  {
    slug: "rc-supra-chassis",
    title: "RC Supra Chassis",
    description:
      "A custom-made 1/10 RC chassis, fully designed in Autodesk Inventor by me. It features servo-actuated steering and suspension, double-wishbone arms, motor and drivetrain mounts, hubs, axles, and a working brake assembly with discs and calipers. 44 printable parts — start with the complete assembly to see how everything fits together.",
    image: "/models/rc-supra-chassis/preview.png",
    parts: [
      { name: "Complete Assembly", file: "/models/rc-supra-chassis/complete-assembly.stl" },
      { name: "Chassis 1", file: "/models/rc-supra-chassis/chassis-1.stl" },
      { name: "Front Chassis", file: "/models/rc-supra-chassis/front-chassis.stl" },
      { name: "Lower Front Arm", file: "/models/rc-supra-chassis/lower-front-arm.stl" },
      { name: "Upper Front Arm (Right)", file: "/models/rc-supra-chassis/upper-front-arm-right.stl" },
      { name: "Upper Front Arm (Left)", file: "/models/rc-supra-chassis/upper-front-arm-left.stl" },
      { name: "Upper Front Arm Mount (Right)", file: "/models/rc-supra-chassis/upper-front-arm-mount-right.stl" },
      { name: "Upper Front Arm Mount (Left)", file: "/models/rc-supra-chassis/upper-front-arm-mount-left.stl" },
      { name: "Upper Front Arm Tripod", file: "/models/rc-supra-chassis/upper-front-arm-tripod.stl" },
      { name: "Arm Mount (Right)", file: "/models/rc-supra-chassis/arm-mount-right.stl" },
      { name: "Upper Arm", file: "/models/rc-supra-chassis/upper-arm.stl" },
      { name: "Upper Arm (Individual)", file: "/models/rc-supra-chassis/upper-arm-individual.stl" },
      { name: "Lower Arm", file: "/models/rc-supra-chassis/lower-arm.stl" },
      { name: "Lower Arm (Individual)", file: "/models/rc-supra-chassis/lower-arm-individual.stl" },
      { name: "Steering Arm", file: "/models/rc-supra-chassis/steering-arm.stl" },
      { name: "Central Steering Arm", file: "/models/rc-supra-chassis/central-steering-arm.stl" },
      { name: "Steering Tripod", file: "/models/rc-supra-chassis/steering-tripod.stl" },
      { name: "Tripod", file: "/models/rc-supra-chassis/tripod.stl" },
      { name: "Steering Servo Mount (Front)", file: "/models/rc-supra-chassis/steering-servo-mount-front.stl" },
      { name: "Steering Servo Mount (Rear)", file: "/models/rc-supra-chassis/steering-servo-mount-rear.stl" },
      { name: "Rear Servo Mount", file: "/models/rc-supra-chassis/rear-servo-mount.stl" },
      { name: "Suspension Servo Mount (Front Right)", file: "/models/rc-supra-chassis/suspension-servo-mount-front-right.stl" },
      { name: "Suspension Servo Mount (Front Left)", file: "/models/rc-supra-chassis/suspension-servo-mount-front-left.stl" },
      { name: "Rear Central Mount", file: "/models/rc-supra-chassis/rear-central-mount.stl" },
      { name: "Rear Support (Right)", file: "/models/rc-supra-chassis/rear-support-right.stl" },
      { name: "Rear Support (Left)", file: "/models/rc-supra-chassis/rear-support-left.stl" },
      { name: "Rear Mount (Right)", file: "/models/rc-supra-chassis/rear-mount-right.stl" },
      { name: "Motor Mount", file: "/models/rc-supra-chassis/motor-mount.stl" },
      { name: "Motor Support", file: "/models/rc-supra-chassis/motor-support.stl" },
      { name: "Motor Mount Cover", file: "/models/rc-supra-chassis/motor-mount-cover.stl" },
      { name: "Motor Clamp", file: "/models/rc-supra-chassis/motor-clamp.stl" },
      { name: "Motor Gear", file: "/models/rc-supra-chassis/motor-gear.stl" },
      { name: "Pinion", file: "/models/rc-supra-chassis/pinion.stl" },
      { name: "Central Shaft", file: "/models/rc-supra-chassis/central-shaft.stl" },
      { name: "Central Axle Clamp", file: "/models/rc-supra-chassis/central-axle-clamp.stl" },
      { name: "Axle Shaft", file: "/models/rc-supra-chassis/axle-shaft.stl" },
      { name: "Upper Axle Mount", file: "/models/rc-supra-chassis/upper-axle-mount.stl" },
      { name: "Wheel Hub", file: "/models/rc-supra-chassis/wheel-hub.stl" },
      { name: "Hub Carrier (Upright)", file: "/models/rc-supra-chassis/hub-carrier.stl" },
      { name: "Disc Holder with Bearing", file: "/models/rc-supra-chassis/disc-holder-with-bearing.stl" },
      { name: "Bearing Holder (Right)", file: "/models/rc-supra-chassis/bearing-holder-right.stl" },
      { name: "Bearing Holder (Front Left)", file: "/models/rc-supra-chassis/bearing-holder-front-left.stl" },
      { name: "Brake Discs", file: "/models/rc-supra-chassis/brake-discs.stl" },
      { name: "Brake Caliper", file: "/models/rc-supra-chassis/brake-caliper.stl" },
    ],
    tags: ["rc-car", "automotive", "inventor", "multi-part"],
    printSettings: {
      material: "ABS (recommended for strength)",
      layerHeight: "0.2mm",
      infill: "50% or higher",
      walls: "3 wall lines",
      topBottomLayers: "6 top / 4 bottom layers",
      supports: "Required on some parts",
    },
    notes: [
      "Printed and tested on a Creality Ender 3 Pro.",
      "Assembled with small screws and nuts.",
      "Designed around standard skate bearings.",
      "Wheels are not included — I downloaded them and lost track of the source.",
    ],
    components: [
      {
        label: "Suspension servos — 90g mini servo",
        image: "/models/rc-supra-chassis/hardware/mini-servo-90g.png",
      },
      {
        label: "Steering servo — MG996R (180°)",
        image: "/models/rc-supra-chassis/hardware/mg996r-servo-180.png",
      },
      {
        label: "Normal skate bearings (8x22x7mm)",
        image: "/models/rc-supra-chassis/hardware/skate-bearings.png",
      },
      {
        label: "TT gear motor (Arduino DC motor)",
        image: "/models/rc-supra-chassis/hardware/tt-gear-motor.png",
      },
    ],
    credit: {
      text: "The Supra body shell (not part of this chassis design) was downloaded from Thingiverse.",
      link: {
        label: "Supra body on Thingiverse",
        url: "https://www.thingiverse.com/thing:4069801",
      },
    },
  },
  {
    slug: "hub-centric-rings",
    title: "Hub Centric Rings (Toyota 86)",
    description:
      "Wheel hub centric rings for the Toyota 86 / GR86, designed in Autodesk Inventor. They adapt the 57.1mm hub bore to wheels with a larger center bore for a precise, vibration-free fit. Two sizes included.",
    image: "/models/hub-centric-rings/preview.png",
    parts: [
      { name: "57.1mm → 72.5mm", file: "/models/hub-centric-rings/hub-ring-57-1-to-72-5.stl" },
      { name: "57.1mm → 66.4mm", file: "/models/hub-centric-rings/hub-ring-57-1-to-66-4.stl" },
    ],
    tags: ["automotive", "gr86", "wheels", "inventor"],
    printSettings: {
      material: "PETG / ABS",
      layerHeight: "0.2mm",
      infill: "100%",
    },
  },
];
