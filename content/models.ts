export type ModelPart = {
  name: string;
  file: string;
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
      "A fully 3D-printed RC car chassis designed in Autodesk Inventor — featuring servo-actuated steering and suspension, motor mounts, drivetrain supports, and front suspension arms. 22 printable parts.",
    image: "/models/rc-supra-chassis/preview.png",
    parts: [
      { name: "Front Chassis", file: "/models/rc-supra-chassis/front-chassis.stl" },
      { name: "Lower Front Arm", file: "/models/rc-supra-chassis/lower-front-arm.stl" },
      { name: "Upper Front Arm (Right)", file: "/models/rc-supra-chassis/upper-front-arm-right.stl" },
      { name: "Upper Front Arm (Left)", file: "/models/rc-supra-chassis/upper-front-arm-left.stl" },
      { name: "Upper Front Arm Mount (Right)", file: "/models/rc-supra-chassis/upper-front-arm-mount-right.stl" },
      { name: "Upper Front Arm Mount (Left)", file: "/models/rc-supra-chassis/upper-front-arm-mount-left.stl" },
      { name: "Upper Front Arm Tripod", file: "/models/rc-supra-chassis/upper-front-arm-tripod.stl" },
      { name: "Arm Mount (Right)", file: "/models/rc-supra-chassis/arm-mount-right.stl" },
      { name: "Rear Mount (Right)", file: "/models/rc-supra-chassis/rear-mount-right.stl" },
      { name: "Steering Arm", file: "/models/rc-supra-chassis/steering-arm.stl" },
      { name: "Central Steering Arm", file: "/models/rc-supra-chassis/central-steering-arm.stl" },
      { name: "Steering Tripod", file: "/models/rc-supra-chassis/steering-tripod.stl" },
      { name: "Steering Servo Mount (Front)", file: "/models/rc-supra-chassis/steering-servo-mount-front.stl" },
      { name: "Steering Servo Mount (Rear)", file: "/models/rc-supra-chassis/steering-servo-mount-rear.stl" },
      { name: "Suspension Servo Mount (Front Right)", file: "/models/rc-supra-chassis/suspension-servo-mount-front-right.stl" },
      { name: "Suspension Servo Mount (Front Left)", file: "/models/rc-supra-chassis/suspension-servo-mount-front-left.stl" },
      { name: "Motor Mount", file: "/models/rc-supra-chassis/motor-mount.stl" },
      { name: "Motor Clamp", file: "/models/rc-supra-chassis/motor-clamp.stl" },
      { name: "Pinion", file: "/models/rc-supra-chassis/pinion.stl" },
      { name: "Disc Holder with Bearing", file: "/models/rc-supra-chassis/disc-holder-with-bearing.stl" },
      { name: "Bearing Holder (Right)", file: "/models/rc-supra-chassis/bearing-holder-right.stl" },
      { name: "Bearing Holder (Front Left)", file: "/models/rc-supra-chassis/bearing-holder-front-left.stl" },
    ],
    tags: ["rc-car", "automotive", "inventor", "multi-part"],
    printSettings: {
      material: "PLA / PETG",
      layerHeight: "0.2mm",
      infill: "20-40%",
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
