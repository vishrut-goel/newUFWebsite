export interface MaterialGrade {
  id: string;
  type: 'Ductile / SG Iron' | 'Gray Iron';
  isGrade: string;
  astmGrade: string;
  enGrade: string;
  tensileStrength: string;
  yieldStrength: string;
  elongation: string;
  hardness: string;
  microstructure: string;
  typicalApplications: string[];
  keyProperties: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Foundry' | 'Machining Shop' | 'Quality Lab';
  description: string;
  specs: { label: string; value: string }[];
  equipmentList: string[];
}

export interface PortfolioItem {
  id: string;
  name: string;
  category: 'Tractor & Agri' | 'Hydraulics & Valves' | 'Bearing Housings' | 'Heavy Machinery';
  materialGrade: string;
  weightRange: string;
  machiningPrecision: string;
  description: string;
  surfaceFinish: string;
}

export interface ManagementMember {
  name: string;
  role: string;
  experience: string;
  qualification: string;
  bio: string;
}

export const COMPANY_INFO = {
  name: "Uttam Foundries & Ispat Pvt. Ltd.",
  legacyName: "Formerly Bharat Iron & Brass Foundry (Est. 1964)",
  tagline: "High Precision Gray & Ductile Iron Castings with In-House Machining",
  certified: "ISO 9001:2015 Certified",
  location: "Phase II, Industrial Area, Ambala, Haryana, India",
  plantArea: "30,000 Sq. Meters Land Area",
  foundedYear: "1964",
  founder: "Mr. Sudershan Kumar Goel",
  phone: "+91 98960 XXXXX",
  salesEmail: "sales@uttambharat.com",
  rfqEmail: "rfq@uttambharat.com",
  whatsApp: "https://wa.me/919896000000",
  monthlyTonnage: "400 Tonnes / Month",
  cncCount: "32+ CNC, VMC & HMC Machines",
  weightEnvelope: "0.5 kg to 150 kg",
  machiningTolerance: "±0.01 mm",
  solarCapacity: "100 KW Solar Installation",
};

export const DRONE_VIDEO_INFO = {
  title: "Virtual Aerial Tour of Our Ambala Facility",
  subtitle: "Take a walkthrough of our 30,000 sq. meter plant, induction furnaces, automated molding line, and 32+ machine shop.",
  placeholderNote: "[DRONE VIDEO PLACEHOLDER: Insert your aerial MP4 video URL or YouTube embed link here]",
  videoSrc: "", // Client can put video URL here e.g. "/assets/videos/drone-tour.mp4"
  timestamps: [
    { time: "0:05", title: "Aerial Plant & Stockyard Overview (30,000 m²)" },
    { time: "0:22", title: "Induction Furnace & Melting Bay" },
    { time: "0:40", title: "Automated Matchplate Molding Line" },
    { time: "0:58", title: "32+ CNC, VMC & HMC Machining Shop" },
    { time: "1:20", title: "Quality Testing & CMM Metrology Lab" }
  ]
};

export const COMPANY_HISTORY = {
  title: "Our Journey Since 1964",
  quote: "High reliability in the product, achieved through good quality control, earned us a reputation as a reliable casting source.",
  text1: "The group was established in 1964 by our founder, Mr. Sudershan Kumar Goel, starting in a modest 200 sq. meter area as Bharat Iron & Brass Foundry (now merged into Uttam Foundries & Ispat Pvt. Ltd.). Today, our facility spans over 30,000 sq. meters in Ambala, Haryana.",
  text2: "Our early work focused on municipal castings, sluice valves, and agricultural implements. In 1977, we began supplying castings to tractor manufacturers. Our focus on raw material quality and process consistency led major OEMs—such as Punjab Tractors (now Mahindra & Mahindra), Eicher Tractors (now TAFE Group), and International Tractors Ltd (Sonalika)—to rely on us for their casting requirements.",
  text3: "To serve our customers better with fully finished components, we established an in-house CNC machine shop in 2000. Today, our foundry operates a fully automated molding line producing around 400 tonnes monthly, while our machine shop is equipped with 32+ CNC machines, VMCs, HMCs, and a 3D CMM inspection facility."
};

export const MANAGEMENT_TEAM: ManagementMember[] = [
  {
    name: "Mr. Sudershan Kumar Goel",
    role: "Chairman & Managing Director",
    qualification: "M.A. in Economics",
    experience: "58+ Years Experience",
    bio: "Founded the group in 1964 and built Uttam Foundries into a trusted partner for India's leading tractor and engineering OEMs."
  },
  {
    name: "Mr. Vikas Goel",
    role: "Director Technical",
    qualification: "B.E. Mechanical Engineering",
    experience: "35+ Years Experience",
    bio: "Manages technical operations, metallurgical quality, induction melting, and sand plant automation."
  },
  {
    name: "Mr. Vishal Goel",
    role: "Director Commercial",
    qualification: "MBA in Marketing",
    experience: "30+ Years Experience",
    bio: "Leads commercial relations, OEM account management, procurement, and customer support."
  },
  {
    name: "Mrs. Shalu Goel",
    role: "Director",
    qualification: "Management",
    experience: "Corporate Management",
    bio: "Oversees corporate governance and plant administrative welfare."
  },
  {
    name: "Mrs. Vandana Goel",
    role: "Director",
    qualification: "Management",
    experience: "Corporate Management",
    bio: "Supports commercial planning and organizational development."
  }
];

export const CLIENT_LOGOS = [
  { name: "Mahindra & Mahindra Pvt. Ltd.", label: "Mahindra Tractors" },
  { name: "TMTL (TAFE Group / Eicher)", label: "Eicher Tractors" },
  { name: "International Tractors Ltd.", label: "Sonalika Tractors" },
  { name: "Osaw Udyog", label: "Garud Implements" }
];

export const CORE_STATS = [
  { value: "59+ Years", label: "Established 1964", desc: "Longstanding manufacturing experience" },
  { value: "400 Tonnes", label: "Monthly Casting Capacity", desc: "Automated matchplate molding line" },
  { value: "32+ CNCs", label: "CNC, VMC & HMC Shop", desc: "Equipped with 3D CMM inspection" },
  { value: "30,000 m²", label: "Facility Area", desc: "Industrial Area Phase II, Ambala" }
];

export const MATERIAL_GRADES: MaterialGrade[] = [
  {
    id: "sg-400-15",
    type: "Ductile / SG Iron",
    isGrade: "SG 400/15",
    astmGrade: "A536 65-45-12",
    enGrade: "EN-GJS-400-15",
    tensileStrength: "400 MPa min",
    yieldStrength: "250 MPa min",
    elongation: "15% min",
    hardness: "130 - 180 BHN",
    microstructure: "Ferritic Matrix (Nodularity > 85%)",
    typicalApplications: ["Hydraulic Valve Bodies", "Tractor Suspension Brackets", "Pipe Fittings", "Bearing Housings"],
    keyProperties: ["High Ductility & Impact Resistance", "Good Machinability", "Pressure Tightness"]
  },
  {
    id: "sg-500-7",
    type: "Ductile / SG Iron",
    isGrade: "SG 500/7",
    astmGrade: "A536 70-50-05",
    enGrade: "EN-GJS-500-7",
    tensileStrength: "500 MPa min",
    yieldStrength: "320 MPa min",
    elongation: "7% min",
    hardness: "170 - 230 BHN",
    microstructure: "Ferritic-Pearlitic Matrix",
    typicalApplications: ["Tractor Rear Axle Hubs", "Crankshafts", "Hydraulic Manifolds", "Gearboxes"],
    keyProperties: ["Balanced Strength & Toughness", "Wear Resistance", "High Load Bearing"]
  },
  {
    id: "sg-600-3",
    type: "Ductile / SG Iron",
    isGrade: "SG 600/3",
    astmGrade: "A536 80-55-06",
    enGrade: "EN-GJS-600-3",
    tensileStrength: "600 MPa min",
    yieldStrength: "370 MPa min",
    elongation: "3% min",
    hardness: "190 - 270 BHN",
    microstructure: "Pearlitic Matrix",
    typicalApplications: ["Heavy Duty Gears", "Camshafts", "Track Rollers", "High Pressure Pump Housings"],
    keyProperties: ["High Tensile Strength", "Superior Wear Resistance", "Fatigue Resistance"]
  },
  {
    id: "fg-200",
    type: "Gray Iron",
    isGrade: "FG 200",
    astmGrade: "A48 Class 30",
    enGrade: "EN-GJL-200",
    tensileStrength: "200 MPa min",
    yieldStrength: "N/A",
    elongation: "< 0.8%",
    hardness: "160 - 220 BHN",
    microstructure: "Fine Flake Graphite Type A",
    typicalApplications: ["Pump Housings", "Machine Tool Bases", "Compressor Frames", "Brake Drums"],
    keyProperties: ["Thermal Conductivity", "Vibration Damping", "Easy Machinability"]
  },
  {
    id: "fg-260",
    type: "Gray Iron",
    isGrade: "FG 260",
    astmGrade: "A48 Class 35",
    enGrade: "EN-GJL-250",
    tensileStrength: "260 MPa min",
    yieldStrength: "N/A",
    elongation: "< 0.8%",
    hardness: "180 - 240 BHN",
    microstructure: "Pearlitic Matrix with Type A Flakes",
    typicalApplications: ["Engine Blocks", "Gear Housings", "Flanged Pipe Adapters", "Brake Discs"],
    keyProperties: ["High Structural Rigidity", "Thermal Fatigue Resistance", "Pressure Tightness"]
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "foundry-melting",
    title: "Foundry & Melting Plant",
    subtitle: "450 KW 500 KG dual crucible induction furnace with Rhino sand plant",
    category: "Foundry",
    description: "Our foundry section features a 450 KW 500 KG dual crucible induction furnace, automatic mold movement lines, Rhino high-pressure molding, and a 500 KG intensive sand mixer with online RTC unit.",
    specs: [
      { label: "Induction Furnace", value: "450 KW / 500 KG Dual Crucible" },
      { label: "Molding Equipment", value: "Rhino High-Pressure & CT3 Jolt Squeeze" },
      { label: "Sand Preparation", value: "500 KG Intensive Mixer with Online RTC Unit" },
      { label: "Core Shop", value: "Shell & Cold Box Core Shooters" }
    ],
    equipmentList: [
      "450 KW 500 KG Dual Crucible Induction Furnace",
      "2 Automatic Mold Movement Lines",
      "CT3 Jolt Squeeze Molding Set",
      "Rhino High Pressure Molding Machine",
      "500 KG Intensive Sand Mixer with RTC",
      "Triple Hangar 500kg Shot Blaster",
      "625 KW & 125 KW Backup Gen-Sets",
      "100 KW Solar Panel Installation"
    ]
  },
  {
    id: "cnc-machining",
    title: "Machine Shop (32+ CNCs)",
    subtitle: "CNC turning centers, 4-axis VMCs, HMCs & dedicated SPMs",
    category: "Machining Shop",
    description: "Established in 2000, our machine shop has 14 CNC turning centers, 14 VMCs (including 4th axis rotary), 4 HMCs, radial drills, and custom hydraulic fixtures for fully finished parts.",
    specs: [
      { label: "CNC Turning Centers", value: "14 Units (A28 & A26 Spindles)" },
      { label: "VMC Milling", value: "14 Units (up to 700x570 with 4th Axis)" },
      { label: "HMC Machining", value: "4 Units (500x500 & 410x410 Table)" },
      { label: "Machining Tolerance", value: "±0.01 mm High Precision" }
    ],
    equipmentList: [
      "14 CNC Turning Centers",
      "14 Vertical Machining Centers (VMC)",
      "4 Horizontal Machining Centers (HMC)",
      "Battery of Special Purpose Machines (SPMs)",
      "Radial Drilling Machines",
      "Custom Hydraulic Machining Fixtures"
    ]
  },
  {
    id: "quality-lab",
    title: "Testing & Quality Assurance Lab",
    subtitle: "22-element spectrometer, metallographic lab & 3D CMM",
    category: "Quality Lab",
    description: "Equipped with a 22-element optical emission spectrometer, inverted metallurgical microscope, 3D CMM, UTM, and sand testing laboratory to verify chemistry, microstructure, and dimensions.",
    specs: [
      { label: "Spectrometer", value: "22-Element Optical Emission Spectrometer" },
      { label: "3D CMM", value: "500 x 600 x 800 mm Measuring Envelope" },
      { label: "Physical Testing", value: "UTM, Brinell & Rockwell Hardness Testers" },
      { label: "Sand Testing", value: "Sieve Shaker, Permeability & Moisture Tester" }
    ],
    equipmentList: [
      "22-Element Spectrometer",
      "3D Coordinate Measuring Machine (CMM)",
      "Universal Testing Machine (UTM)",
      "Portable & Inverted Metallurgical Microscopes",
      "Brinell & Rockwell Hardness Testers",
      "Air Gauge Units & Surface Roughness Testers",
      "Full Sand Testing Lab"
    ]
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    name: "Tractor Rear Axle Hub & Flange",
    category: "Tractor & Agri",
    materialGrade: "ASTM A536 70-50-05 / SG 500/7",
    weightRange: "24.0 kg",
    machiningPrecision: "±0.01 mm splined bore",
    description: "Heavy-duty wheel hub cast for tractor OEMs, engineered to withstand high torque and heavy loads with induction-hardened bearing seats.",
    surfaceFinish: "Anti-Rust Oil Coated"
  },
  {
    id: "p2",
    name: "Hydraulic Control Valve Body",
    category: "Hydraulics & Valves",
    materialGrade: "ASTM A536 65-45-12 / SG 400/15",
    weightRange: "4.5 kg",
    machiningPrecision: "±0.008 mm bore concentricity",
    description: "Internal spool bores cast using shell cores and precision honed to prevent oil leakage under hydraulic pressure.",
    surfaceFinish: "Phosphated & Oiled"
  },
  {
    id: "p3",
    name: "Bearing Housing & Pedestal",
    category: "Bearing Housings",
    materialGrade: "ASTM A48 Class 35 / FG 260",
    weightRange: "14.5 kg",
    machiningPrecision: "±0.010 mm bearing bore",
    description: "Gray iron bearing pedestal cast for agricultural implement drives and industrial machinery.",
    surfaceFinish: "Red Oxide Primer"
  },
  {
    id: "p4",
    name: "Tractor Engine Front Timing Cover",
    category: "Tractor & Agri",
    materialGrade: "ASTM A48 Class 30 / FG 200",
    weightRange: "18.2 kg",
    machiningPrecision: "±0.012 mm gasket face flatness",
    description: "CNC milled front engine cover designed for tight sealing and structural rigidity.",
    surfaceFinish: "Machined & Rust Coating"
  },
  {
    id: "p5",
    name: "Centrifugal Pump Volute Casing",
    category: "Hydraulics & Valves",
    materialGrade: "ASTM A536 70-50-05 / SG 500/7",
    weightRange: "28.5 kg",
    machiningPrecision: "±0.010 mm flange face",
    description: "Pressure tested pump casing with smooth internal fluid passages for maximum pump efficiency.",
    surfaceFinish: "Shot Blasted & Primer"
  },
  {
    id: "p6",
    name: "Rotavator Gearbox Housing",
    category: "Heavy Machinery",
    materialGrade: "ASTM A536 80-55-06 / SG 600/3",
    weightRange: "35.0 kg",
    machiningPrecision: "±0.015 mm gear shaft center",
    description: "Ductile iron gearbox housing cast to absorb heavy shock loads in farm implements.",
    surfaceFinish: "Black Powder Coated"
  }
];

export const METROLOGY_LAB = [
  {
    id: "m1",
    name: "Chemical Composition Testing",
    category: "Spectrometer Lab",
    equipment: "22-Element Spectrometer",
    testFunction: "Verifies chemical composition (C, Si, Mn, P, S, Mg, etc.) for every heat prior to pouring.",
    standardCompliance: "ISO 945 / ASTM E1999"
  },
  {
    id: "m2",
    name: "Metallographic & Microstructure Lab",
    category: "Microstructure Lab",
    equipment: "Inverted Metallurgical Microscope",
    testFunction: "Evaluates nodule count, nodularity percentage (>85%), and graphite flake structure.",
    standardCompliance: "ASTM A247 / ISO 945-1"
  },
  {
    id: "m3",
    name: "Physical & Mechanical Testing",
    category: "Mechanical Lab",
    equipment: "UTM & Hardness Testers",
    testFunction: "Measures Tensile Strength, Yield Strength, % Elongation, and Hardness (BHN/Rockwell).",
    standardCompliance: "ASTM E8 / ISO 6892"
  },
  {
    id: "m4",
    name: "Dimensional Metrology & CMM",
    category: "CMM Metrology Lab",
    equipment: "3D CMM & Air Gauges",
    testFunction: "Verifies geometric dimensions, tolerances, bore concentricity, and surface roughness.",
    standardCompliance: "ISO 1101 / ASME Y14.5"
  }
];

export const CONTENT_CHECKLIST = [
  {
    category: "High-Resolution Plant Visuals & Drone Media",
    items: [
      "Record 4K aerial drone flythrough over the 30,000 m² Ambala facility & raw material yard",
      "Capture induction furnace molten metal pouring clips",
      "Shoot close-ups of 32+ CNC turning centers and 4-axis VMCs in operation",
      "Take clean studio photography of finished tractor axle hubs, valve bodies, and pump volutes",
      "Photograph the 3D CMM inspection lab and 22-element spectrometer"
    ]
  },
  {
    category: "Technical Specs & Material Data",
    items: [
      "Gather exact min/max casting weight ranges (0.5 kg to 150 kg)",
      "Confirm material grade certifications (IS 1865 / ASTM A536 / EN 1563)",
      "Verify CNC machining tolerance envelope (±0.01 mm)",
      "Compile client reference list (Mahindra, TMTL/Eicher, Sonalika)"
    ]
  }
];

