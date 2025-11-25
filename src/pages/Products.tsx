import React, { useMemo, useState } from "react";
import {
  Truck,
  Zap,
  Wrench,
  Shield,
  Compass,
  Hammer,
  Package,
} from "lucide-react";

import { motion } from "framer-motion";
import { ShoppingCart, FileText } from "lucide-react";
import { useSearchParams } from "react-router-dom";

/* ------------ 1. TYPES & DATA ------------ */

interface Product {
  id: number;
  category: string;
  subCategory?: string;
  title: string;
  description: string;
  specs: string[];
  imagePlaceholder: string;
}

const PRODUCT_DATA: Product[] = [
  /* ---------- HOSES & CONNECTORS ---------- */
  {
    id: 101,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Hydraulic Hose",
    description: `
Specialized hoses designed to convey hydraulic fluid under high pressure within hydraulic systems. 
Available as skive and non-skive types, with pressure ratings from low to extra high. These hoses 
use single to six-wire braid reinforcements, ensuring leak-proof operation under harsh environmental 
and mechanical stresses in heavy machinery, oilfield equipment, and industrial hydraulics.
    `.trim(),
    specs: [
      "Type: Skive and Non-Skive",
      "Pressure ratings: Low to extra-high (single to six-wire braid)",
      "Applications: Heavy machinery, oilfield equipment, industrial hydraulics",
      "Key benefit: Leak-proof operation under harsh conditions",
    ],
    imagePlaceholder: "/images/HydraulicHose.jpeg",
  },
  {
    id: 102,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Industrial Rubber Hoses",
    description: `
Industrial rubber hoses are flexible, durable tubes designed for fluid and gas transfer in demanding 
conditions. They offer excellent wear, abrasion, chemical, and temperature resistance, making them 
suitable for diverse industrial needs.
    `.trim(),
    specs: [
      "Oil Suction Hoses: Resistant to petroleum products; designed for fuel suction and delivery.",
      "Water Suction Hoses: Reinforced for vacuum use in irrigation and construction.",
      "Bulk/Cement Hoses: Heavy-duty abrasion-resistant hoses for dry bulk materials.",
      "Steam Hoses: Heat-resistant, for safe steam transfer under high temperatures.",
      "Chemical Hoses: Corrosion-resistant for acids, solvents, and chemicals.",
      "Air & Water Hoses: Flexible hoses for general air and water conveyance.",
    ],
    imagePlaceholder: "/images/IndustrialRubberHoses.jpeg",
  },
  {
    id: 103,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Hammer Unions",
    description: `
Heavy-duty couplings used for high-pressure fluid transfer. They allow rapid and secure connection 
or disconnection of pipes and hoses, and are widely used in drilling, well servicing, and pipelines. 
Hammer unions are engineered to withstand extreme pressures and harsh oilfield conditions, 
providing reliable performance in demanding drilling operations. These precision-manufactured 
couplings feature tapered seals and reinforced bodies to prevent leakage during high-pressure 
fluid transfer.
    `.trim(),
    specs: [
      "Function: Rapid, secure connection/disconnection of pipes and hoses",
      "Application: Drilling, well servicing, high-pressure pipelines",
      "Design: Precision-manufactured with tapered seals and reinforced bodies",
      "Key benefit: Withstands extreme pressures and harsh oilfield conditions",
    ],
    imagePlaceholder: "images/HammerUnions.jpeg",
  },
  {
    id: 104,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Swivel Joints",
    description: `
Rotating mechanical components providing 360-degree rotation between connected parts to prevent 
hose twisting or kinking. Critical in dynamic or rotating equipment to maintain fluid flow integrity. 
Swivel joints are precision-engineered with bearing-supported designs that enable smooth rotation 
under load while maintaining leak-proof fluid transfer. These specialized fittings accommodate 
multiple connection types and pressure ratings, providing versatility across diverse oilfield and 
marine applications.
    `.trim(),
    specs: [
      "Function: 360° rotation to prevent hose twisting or kinking",
      "Design: Bearing-supported for smooth rotation under load",
      "Performance: Maintains leak-proof fluid transfer",
      "Applications: Dynamic equipment, oilfield, and marine systems",
    ],
    imagePlaceholder: "/images/SwivelJoints.jpeg",
  },
  {
    id: 105,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Trelleborg France Industrial & Composite Hoses",
    description: `
Premium-quality hoses manufactured in France by Trelleborg, featuring composite construction for 
exceptional strength, flexibility, and chemical resistance. Made from advanced rubber compounds 
(NR, EPDM, NBR, Silicone, HNBR, Viton) reinforced with synthetic fibres (rayon, polyester, aramid) 
and steel wire for high pressure and abrasion resistance. Custom engineered to meet specific needs 
and comply with ISO and PED certifications, these hoses excel in chemical processing, fuel transfer, 
abrasive handling, and offshore applications.
    `.trim(),
    specs: [
      "Materials: NR, EPDM, NBR, Silicone, HNBR, Viton",
      "Reinforcement: Synthetic fibres (rayon, polyester, aramid) and steel wire",
      "Certifications: ISO and PED compliant",
      "Applications: Chemical processing, fuel transfer, abrasive media, offshore operations",
    ],
    imagePlaceholder:
      "/images/TrelleborgFranceIndustrial&CompositeHoses.jpeg",
  },
  {
    id: 106,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Ring Joint Gaskets (Windlass License)",
    description: `
Manufactured under API 16A certification using metals like soft iron, low carbon steel, and stainless 
steel (304/316/324), these gaskets are engineered to withstand high pressure and corrosive 
environments. They provide precise, durable sealing in ring groove flanges, essential for oilfields, 
refineries, and critical pipeline connections.
    `.trim(),
    specs: [
      "Certification: API 16A (Windlass license)",
      "Materials: Soft iron, low carbon steel, stainless steel 304/316/324",
      "Function: Precise, durable sealing in ring groove flanges",
      "Applications: Oilfields, refineries, critical pipeline connections",
    ],
    imagePlaceholder: "/images/RingJointGaskets(Windlass License).jpeg",
  },
  {
    id: 107,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Heavy Duty PVC Hose",
    description: `
Reinforced polyvinyl chloride hoses offering excellent abrasion, chemical, and environmental 
resistance. Suitable for applications involving water transfer, chemical handling, and other 
industrial fluid conveyance needs. These hoses withstand pressures from 5–20 bar and are ideal 
for construction, irrigation, and industrial processing. They provide cost-effective solutions with 
excellent UV and weather resistance across diverse environments.
    `.trim(),
    specs: [
      "Pressure range: Approx. 5–20 bar (application-dependent)",
      "Properties: Abrasion, chemical, and weather-resistant",
      "Applications: Water transfer, chemical handling, industrial processing, irrigation",
      "Benefits: Cost-effective with strong UV and environmental resistance",
    ],
    imagePlaceholder: "/images/HeavyDutyPVC Hose.jpeg",
  },
  {
    id: 108,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Yarn Thread",
    description: `
High-tenacity polyester yarn fusion-adhered inside and outside of hose construction with soft PVC 
compound, providing pressure resistance and durability between inner tubing and outer covers. 
Used for sealing and securing pipe joints to ensure leak-proof assemblies in gas, plumbing, and 
industrial piping systems. Yarn thread creates tight, impermeable seals that withstand pressure 
cycling and vibration. Essential for natural gas lines, hydraulic connections, and marine piping 
assemblies.
    `.trim(),
    specs: [
      "Material: High-tenacity polyester yarn with soft PVC compound",
      "Function: Sealing and securing pipe joints for leak-proof assemblies",
      "Performance: Withstands pressure cycling and vibration",
      "Applications: Gas lines, hydraulic connections, marine piping systems",
    ],
    imagePlaceholder: "/images/YarnThread.jpeg",
  },
  {
    id: 109,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Rotary Drilling Hoses",
    description: `
Rotary drilling hoses are heavy-duty, flexible hoses used in oil and gas drilling applications to 
transfer high-pressure drilling fluids between the drilling rig's standpipe and rotary swivel. They 
typically feature an inner tube made of synthetic rubber (mainly NBR), resistant to abrasion, oil, and 
corrosion. Multiple layers of high-tensile steel wire reinforcement provide strength and flexibility 
under high pressure. The outer cover, often chloroprene rubber, protects against abrasion, weather, 
ozone, and sunlight. These hoses operate reliably across temperatures from –30°C to +82°C, making 
them suitable for tough drilling environments and fluid types in oilfield operations.
    `.trim(),
    specs: [
      "Inner tube: Synthetic rubber (mainly NBR), abrasion and oil-resistant",
      "Reinforcement: Multiple layers of high-tensile steel wire",
      "Outer cover: Chloroprene rubber for weather, ozone, and abrasion resistance",
      "Temperature range: Approx. –30°C to +82°C",
      "Application: High-pressure drilling fluid transfer in oilfield operations",
    ],
    imagePlaceholder: "/images/RotaryDrillingHoses.jpeg",
  },
  {
    id: 110,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Hose Fittings and Adaptors",
    description: `
Hose fittings and adaptors are essential components used to securely connect hoses to equipment, 
pipes, or other hoses, ensuring leak-proof and pressure-resistant joints. Fittings typically connect 
hoses to main system parts like pumps, valves, or cylinders, allowing fluid flow and directional 
changes. Adaptors link components with different thread types or sizes, bridging incompatibilities. 
Common types include ferrules, BSP, NPT, JIC, and ORFS fittings available in straight, elbow, banjo, 
and swivel designs. These precision-engineered connectors maintain system integrity under high 
pressure and harsh conditions, and are essential for reliable performance across industrial hydraulics, 
drilling operations, and marine fluid transfer systems.
    `.trim(),
    specs: [
      "Ferrule for R2A hose skive type",
      "Ferrule for 4SH R13, R15 hoses",
      "BSP Female 60° Cone",
      "45° BSP Female Cone",
      "90° BSP Female 60° Cone",
      "BSP Female Parallel 60° Cone",
      "BSP Male Flat Seat",
      "BSP Female 60° Cone with O-Ring",
      "45° BSP Female 60° Cone with O-Ring",
      "90° BSP Female 60° Cone with O-Ring",
      "BSP Female 60° Cone Double Hexagonal",
      "BSP Male Tapered",
      "BSP Female Flat Face",
      "BSP 90° Compact Elbow",
      "BSP Female 60° Inverted Cone – JIS",
      "BSP Banjo",
      "BSP Bolt for Banjo",
      "NPT Male",
      "NPT Female Swivel",
      "JIC Female 74° Cone",
      "JIC Female 74° Cone Seat Double Hex",
      "45° JIC Female 74° Cone",
      "90° JIC Female 74° Cone",
      "JIC Male 74° Cone",
      "Face Seal Female Fitting (ORFS)",
      "Face Seal Female 45° Fitting (ORFS)",
      "Face Seal Female 90° Fitting (ORFS)",
      "Metric Female 24° Cone DIN 3865 L & S with O-Ring",
      "45° Metric Female 24° Cone DIN 3865 L & S with O-Ring",
      "90° Metric Female 24° Cone DIN 3865 L & S with O-Ring",
    ],
    imagePlaceholder: "/images/HoseFittingsandAdaptors.jpeg",
  },
  {
    id: 111,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Hydraulic Tube Couplings and Ermeto Fittings",
    description: `
Hydraulic tube couplings and Ermeto fittings are precision-engineered connectors used to securely 
join hydraulic tubes, ensuring leak-free, high-pressure fluid transfer in hydraulic systems. Common 
fittings such as equal unions, equal elbows, and equal tees allow for versatile pipeline configurations: 
equal unions connect tubes in a straight line, equal elbows provide a 90° directional change, and 
equal tees enable fluid branching. These fittings are typically constructed from durable metals and 
conform to standards like ISO and SAE to guarantee compatibility and reliability in industrial and 
mobile hydraulic applications.
    `.trim(),
    specs: [
      "Types: Equal unions, equal elbows, equal tees and more",
      "Function: Leak-free joining of hydraulic tubes under high pressure",
      "Standards: Typically conform to ISO and SAE requirements",
      "Applications: Industrial and mobile hydraulic systems",
    ],
    imagePlaceholder:
      "/images/HydraulicTubeCouplingsandErmetoFittings.jpeg",
  },
  {
    id: 112,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Stainless Steel Fittings",
    description: `
Stainless steel fittings come in a wide range of sizes to suit various hydraulic and industrial 
applications, typically ranging from 1/8 inch to over 2 inches in diameter. Made from corrosion-
resistant 304 and 316 stainless steel, these fittings withstand high pressures (up to approximately 
10,000–20,000 PSI) and extreme temperatures, ensuring durability and reliability. Common types 
include JIC 37° cone, NPT, BSP, ORFS, and metric fittings offered in straight, elbow, tee, and 
adapter configurations. Their precise sizing and robust design make them ideal for harsh environments 
such as marine, chemical processing, and oil & gas industries.
    `.trim(),
    specs: [
      "Material: Stainless steel 304 and 316",
      "Size range: Approx. 1/8\" to 2\"+",
      "Pressure capability: Up to around 10,000–20,000 PSI (application-dependent)",
      "Types: JIC 37° cone, NPT, BSP, ORFS, metric",
      "Configurations: Straight, elbow, tee, adapter",
      "Applications: Marine, chemical processing, oil & gas",
    ],
    imagePlaceholder: "/images/StainlessSteelFittings.jpeg",
  },
  {
    id: 113,
    category: "Hoses & Connectors",
    subCategory: "Hoses & Connectors",
    title: "Aluminium, Stainless Steel, and Brass Camlock Fittings",
    description: `
Aluminium, stainless steel, and brass camlock fittings are durable and versatile connectors commonly 
used for water, oil suction, and discharge hoses. Aluminium camlocks are lightweight and 
corrosion-resistant, ideal for general fluid transfer. Stainless steel camlocks offer superior strength 
and excellent corrosion resistance, perfect for high-pressure or sanitary applications. Brass camlocks 
combine durability with good corrosion resistance, suitable for hydraulic and petroleum industry use. 
Available in various sizes, these camlocks ensure secure, quick-connect coupling solutions for a wide 
range of industrial and commercial fluid handling needs.
    `.trim(),
    specs: [
      "Materials: Aluminium, stainless steel, brass",
      "Function: Quick-connect couplings for hoses",
      "Applications: Water, oil suction, discharge, industrial fluid handling",
      "Benefits: Lightweight (aluminium), high strength and sanitary (stainless), durable and compatible (brass)",
    ],
    imagePlaceholder:
      "/images/AluminiumStainlessSteelandBrassCamlockFittings.jpeg",
  },

  /* ---------- FASTENERS ---------- */
  {
    id: 201,
    category: "Fasteners", // ✅ make it show under Fasteners
    subCategory: "Fasteners",
   
    title: "Bolts, Nuts, Washers & Locknuts",
    description: `
A wide range of industrial fasteners including bolts (UNC, LN key bolts) and nuts made from stainless 
steel (304, 316) and mild steel. Washers are available in various types such as flat washers for load 
distribution, lock washers to prevent loosening from vibration, and specialty washers like split lock 
and tooth lock washers. Locknuts provide additional security by resisting loosening under torque or 
vibration. These fasteners are designed to meet industrial standards, ensuring durability, strength, and 
reliable fastening in construction, manufacturing, and maintenance applications.
    `.trim(),
    specs: [
      "Bolts: UNC, LN key bolts and others",
      "Materials: Stainless steel 304/316, mild steel",
      "Washers: Flat, lock, split lock, tooth lock types",
      "Locknuts: Added security against loosening from vibration and torque",
      "Applications: Construction, manufacturing, industrial maintenance",
    ],
    imagePlaceholder: "/images/BoltsNutsWashers&Locknuts.jpeg",
  },

  /* ---------- TOOLS: WRENCHES & SPANNERS ---------- */
  {
    id: 301,
    category: "Tools",
    subCategory: "Wrenches & Spanners",
    title: "Spanner",
    description: `
A wrench used for tightening or loosening nuts and bolts, available in various fixed sizes for industrial 
and maintenance work. Spanners provide secure grip and precise torque control for fastener 
operations across construction, manufacturing, and oilfield applications. Available in open-end, 
closed-end (box), and combination configurations to meet specific wrench hole diameters and 
fastening requirements. These precision tools are essential for equipment assembly, maintenance 
operations, and emergency repairs in demanding industrial environments.
    `.trim(),
    specs: [
      "Configuration: Open-end, box (closed-end), and combination spanners",
      "Function: Tightening and loosening nuts and bolts",
      "Applications: Construction, manufacturing, oilfield maintenance",
      "Key benefit: Secure grip and precise torque control",
    ],
    imagePlaceholder: "/images/Spanner.jpeg",
  },
  {
    id: 302,
    category: "Tools",
    subCategory: "Wrenches & Spanners",
    title: "Adjustable Spanner",
    description: `
Versatile wrench with a movable jaw, allowing it to fit multiple sizes of nuts and bolts—ideal for on-site 
repairs. The adjustable worm mechanism provides reliable grip across a wide range of sizes, 
reducing the need to carry multiple fixed-size wrenches. Essential for maintenance technicians and 
field repairs where equipment specifications vary. This space-saving tool combines the functionality 
of multiple spanners in a single, portable instrument for maximum workplace efficiency.
    `.trim(),
    specs: [
      "Feature: Movable jaw with worm mechanism for size adjustment",
      "Benefit: Replaces multiple fixed-size wrenches",
      "Applications: On-site repairs and maintenance with varying fastener sizes",
      "Advantage: Space-saving and highly versatile tool",
    ],
    imagePlaceholder: "/images/AdjustableSpanner.jpeg",
  },
  {
    id: 303,
    category: "Tools",
    subCategory: "Wrenches & Spanners",
    title: "Tubular Spanner",
    description: `
Cylinder-shaped wrench for tightening or loosening bolts and nuts in recessed or hard-to-reach areas. 
Tubular spanners provide excellent leverage and access to confined spaces where standard wrenches 
cannot fit. Common in machinery assembly, equipment maintenance, and precision work requiring 
access to deeply recessed fasteners. These specialized tools are indispensable in automotive, 
industrial machinery, and oilfield equipment maintenance operations.
    `.trim(),
    specs: [
      "Design: Cylindrical tube form for recessed fasteners",
      "Benefit: Excellent leverage and reach in confined spaces",
      "Applications: Automotive, machinery assembly, oilfield equipment maintenance",
    ],
    imagePlaceholder: "/images/TubularSpanner.jpeg",
  },

  /* ---------- TOOLS: CUTTING & SHEARING ---------- */
  {
    id: 304,
    category: "Tools",
    subCategory: "Cutting & Shearing Tools",
    title: "Hand Saw",
    description: `
Manual cutting tool for wood, plastic, or metal, essential for construction, plumbing, and fabrication 
tasks. Hand saws feature sharp-toothed blades designed for specific materials with fine teeth and 
hardened blades for clean, accurate cuts. Metal-cutting saws provide precision cutting in equipment 
assembly and maintenance operations across industrial applications. These versatile tools are 
indispensable for site work where powered cutting equipment is impractical or unavailable.
    `.trim(),
    specs: [
      "Function: Manual cutting of wood, plastic, and metals (depending on blade)",
      "Features: Sharp-toothed, hardened blades for clean cuts",
      "Applications: Construction, plumbing, fabrication, maintenance work",
    ],
    imagePlaceholder: "/images/HandSaw.jpeg",
  },
  {
    id: 305,
    category: "Tools",
    subCategory: "Cutting & Shearing Tools",
    title: "Nippers",
    description: `
Cutting tool for trimming wires and cables, frequently used in electrical installations and repair tasks. 
Nippers provide clean cuts through electrical wire, communications cable, and similar materials with 
precision. Spring-loaded handles return to open position for continuous cutting operations without 
hand fatigue. Essential for electricians, technicians, and maintenance workers requiring safe, 
accurate wire cutting in confined spaces.
    `.trim(),
    specs: [
      "Use: Trimming wires, cables, and similar materials",
      "Feature: Spring-loaded handles for reduced fatigue",
      "Applications: Electrical installation, repairs, confined spaces",
    ],
    imagePlaceholder: "/images/Nippers.jpeg",
  },
  {
    id: 306,
    category: "Tools",
    subCategory: "Cutting & Shearing Tools",
    title: "Knife",
    description: `
Sharp-edged hand tool for cutting materials such as rope, tubing, and packaging in industrial 
environments. Industrial knives feature replaceable blades and comfortable handles for extended use 
and operational efficiency. Essential for opening sealed packages, cutting hoses, and preparing 
materials for assembly in manufacturing and construction. The sharp, durable blade maintains 
cutting performance through extended use in demanding workplace conditions.
    `.trim(),
    specs: [
      "Function: Cutting rope, tubing, packaging, and more",
      "Feature: Replaceable blades and ergonomic handles",
      "Applications: Manufacturing, construction, industrial sites",
    ],
    imagePlaceholder: "/images/knife.jpeg",
  },
  {
    id: 307,
    category: "Tools",
    subCategory: "Cutting & Shearing Tools",
    title: "Side Cutter",
    description: `
Specialized pliers with cutting edges for cutting wires, pins, and small metal components cleanly and 
precisely. Side cutters (diagonal cutters) provide precise cuts close to surfaces or in confined spaces 
where other tools cannot reach. Hardened cutting edges maintain sharpness through extended use 
across electrical, mechanical, and industrial applications. Ideal for electronics assembly, precision 
maintenance, and detailed fabrication work requiring controlled cutting force.
    `.trim(),
    specs: [
      "Design: Diagonal cutting edges for close, precise cuts",
      "Applications: Electrical, mechanical, industrial, electronics assembly",
      "Benefit: Hardened edges for long-term sharpness",
    ],
    imagePlaceholder: "/images/SideCutter.jpeg",
  },
  {
    id: 308,
    category: "Tools",
    subCategory: "Cutting & Shearing Tools",
    title: "Bolt Cutter",
    description: `
Heavy-duty tool for cutting through thick chains, padlocks, bolts, and metal bars in demanding 
industrial conditions. Bolt cutters feature long handles for mechanical advantage and cutting edges 
designed for maximum cutting force without user strain. Essential for site security, equipment 
disassembly, and emergency response situations requiring rapid access or material removal. 
High-quality construction ensures reliable performance in oilfield, marine, and industrial maintenance 
operations.
    `.trim(),
    specs: [
      "Function: Cutting chains, padlocks, bolts, and metal bars",
      "Feature: Long handles for superior leverage",
      "Applications: Security, emergency response, industrial maintenance",
    ],
    imagePlaceholder: "/images/BoltCutter.jpeg",
  },
  {
    id: 309,
    category: "Tools",
    subCategory: "Cutting & Shearing Tools",
    title: "Aviation Snip",
    description: `
Heavy-duty shears designed to cut through metal sheets, including steel, aluminium, and wire mesh 
with precision. Aviation snips come in right-cut, left-cut, and straight-cut configurations for directional 
cutting flexibility and operator comfort. The compound leverage design reduces cutting effort while 
maintaining control and precision in fabrication and assembly work. Essential tools for sheet metal 
workers, HVAC technicians, and fabrication specialists in industrial and construction environments.
    `.trim(),
    specs: [
      "Materials cut: Steel, aluminium, wire mesh",
      "Configurations: Right-cut, left-cut, and straight-cut",
      "Design: Compound leverage for reduced effort and better control",
      "Applications: Sheet metal, HVAC, fabrication, construction",
    ],
    imagePlaceholder: "/images/AviationSnip.jpeg",
  },

  /* ---------- TOOLS: GRIPPING & CLAMPING ---------- */
  {
    id: 310,
    category: "Tools",
    subCategory: "Gripping & Clamping Tools",
    title: "Pliers",
    description: `
Gripping and bending tool for wires, pipes, and small components, used in electrical, plumbing, and 
mechanical work. Standard pliers feature serrated jaws for secure grip on round and flat surfaces 
across diverse applications. Multiple plier types include needle-nose, tongue-and-groove, and 
slip-joint variations for specialized tasks.
    `.trim(),
    specs: [
      "Function: Gripping, bending, and holding components",
      "Jaw: Serrated for secure grip on round and flat surfaces",
      "Types: Needle-nose, tongue-and-groove, slip-joint, and more",
      "Applications: Electrical, plumbing, mechanical work",
    ],
    imagePlaceholder: "/images/pliers.jpg",
  },
  {
    id: 311,
    category: "Tools",
    subCategory: "Gripping & Clamping Tools",
    title: "Vise Grip",
    description: `
Locking pliers with an adjustable jaw, providing strong grip for clamping, turning, or holding materials 
securely in place. Vise grips feature a locking mechanism that maintains pressure until manually 
released, freeing hands for other operations. An adjustable screw allows customization for different 
material thicknesses and clamping requirements.
    `.trim(),
    specs: [
      "Type: Locking pliers with adjustable jaw",
      "Feature: Locking mechanism holds material without hand pressure",
      "Benefit: Adjustable screw for various material thicknesses",
    ],
    imagePlaceholder: "/images/ViseGrip.jpeg",
  },
  {
    id: 312,
    category: "Tools",
    subCategory: "Gripping & Clamping Tools",
    title: "C-Clamp",
    description: `
Adjustable clamp used for securing workpieces to a bench or holding objects in place during assembly 
and repair operations. C-clamps feature threaded screws for gradual, controlled clamping force 
without damaging materials or work surfaces. Available in various throat depths and clamping 
capacities from light-duty to heavy-duty applications.
    `.trim(),
    specs: [
      "Function: Securing workpieces during assembly and repair",
      "Feature: Threaded screw for controlled clamping force",
      "Range: Light-duty to heavy-duty sizes and throat depths",
    ],
    imagePlaceholder: "/images/C-Clamp.jpeg",
  },

  /* ---------- TOOLS: FASTENING & ASSEMBLY ---------- */
  {
    id: 313,
    category: "Tools",
    subCategory: "Fastening & Assembly Tools",
    title: "Screw Driver Set",
    description: `
Collection of screwdrivers featuring different heads (flat, Phillips, Torx) for driving and removing 
screws in a range of applications. Multi-piece sets provide versatility across various screw head types 
and sizes. Essential for equipment assembly, maintenance, and repair work across industrial and 
oilfield operations.
    `.trim(),
    specs: [
      "Heads: Flat, Phillips, Torx, and others",
      "Benefit: Multi-size, multi-head versatility in one set",
      "Applications: Assembly, maintenance, and repair operations",
    ],
    imagePlaceholder: "/images/ScrewDriverSet.jpeg",
  },
  {
    id: 314,
    category: "Tools",
    subCategory: "Fastening & Assembly Tools",
    title: "Rivet Gun",
    description: `
Manual or pneumatic tool for installing rivets, often used in sheet metal assembly and repairs. 
Hand rivet guns apply leverage to deform rivet shafts, creating permanent mechanical connections. 
Pneumatic versions increase productivity in high-volume assembly operations and fabrication shops.
    `.trim(),
    specs: [
      "Types: Manual and pneumatic rivet guns",
      "Function: Install rivets for permanent mechanical joints",
      "Applications: Sheet metal assembly, repair, fabrication",
    ],
    imagePlaceholder: "/images/RivetGun.jpg",
  },
  {
    id: 315,
    category: "Tools",
    subCategory: "Fastening & Assembly Tools",
    title: "Hand Rivet Tool",
    description: `
Hand-operated tool for fastening rivets where power tools are not available or needed. Manual hand 
rivets provide precise control over rivet installation without requiring compressed air lines. Ideal for 
field repairs, remote locations, and applications requiring controlled rivet placement.
    `.trim(),
    specs: [
      "Type: Manual hand rivet tool",
      "Benefit: Precise rivet placement without power tools",
      "Applications: Field repairs, remote locations, low-volume work",
    ],
    imagePlaceholder: "/images/HandRivetTool.jpeg",
  },

  /* ---------- TOOLS: MARKING, MEASURING & LAYOUT ---------- */
  {
    id: 316,
    category: "Tools",
    subCategory: "Marking, Measuring & Layout Tools",
    title: "Chalk Line Set",
    description: `
Tool for marking straight lines on surfaces with chalk, aiding in layout and alignment for building and 
installation. Snap mechanisms create crisp, straight markings on concrete, wood, and other surfaces. 
Essential for construction layout, alignment verification, and marking cut lines in fabrication work.
    `.trim(),
    specs: [
      "Function: Marking straight reference lines with chalk",
      "Applications: Building layout, installation, fabrication",
      "Benefit: Quick, accurate alignment markings on various surfaces",
    ],
    imagePlaceholder: "/images/ChalkLineSet.jpeg",
  },
  {
    id: 317,
    category: "Tools",
    subCategory: "Marking, Measuring & Layout Tools",
    title: "Spirit Levels",
    description: `
Precision tool with a liquid-filled vial, used to ensure lines and surfaces are perfectly horizontal or 
vertical. Spirit levels come in various lengths (24\", 48\", 72\") for different applications and work 
requirements. Magnetic versions allow mounting on metal surfaces for hands-free operation in 
industrial settings.
    `.trim(),
    specs: [
      "Function: Checking horizontal and vertical alignment",
      "Sizes: Typical lengths include 24\", 48\", 72\" and more",
      "Options: Magnetic models for hands-free use on metal surfaces",
    ],
    imagePlaceholder: "/images/SpiritLevels.jpeg",
  },
  {
    id: 318,
    category: "Tools",
    subCategory: "Marking, Measuring & Layout Tools",
    title: "Right Angle / Try Square",
    description: `
Measuring and marking tool used to check or create accurate corners and angles in carpentry and 
metalwork. Try squares feature 90-degree angle checks and can mark cutting lines on materials. 
Precision-machined edges ensure accurate measurements and layout work in fabrication operations.
    `.trim(),
    specs: [
      "Function: Checking and marking 90° corners and angles",
      "Applications: Carpentry, metalwork, fabrication layout",
      "Benefit: Precision-machined edges for accurate marking",
    ],
    imagePlaceholder: "/images/RightAngleTrySquare.jpeg",
  },

  /* ---------- TOOLS: FINISHING & SMOOTHING ---------- */
  {
    id: 319,
    category: "Tools",
    subCategory: "Finishing & Smoothing Tools",
    title: "Files Set",
    description: `
Multiple files with varied shapes and grades for smoothing and finishing metal, plastic, or wood 
surfaces. File sets typically include flat, round, triangular, and needle-point files for different 
applications. Different grades (coarse, medium, fine) accommodate various material removal 
requirements.
    `.trim(),
    specs: [
      "Shapes: Flat, round, triangular, needle-point and others",
      "Grades: Coarse, medium, fine for controlled material removal",
      "Applications: Deburring, smoothing, and finishing surfaces",
    ],
    imagePlaceholder: "/images/Files Set.jpeg",
  },
  {
    id: 320,
    category: "Tools",
    subCategory: "Finishing & Smoothing Tools",
    title: "Hand Planer",
    description: `
Manual tool used to shave and smooth wood surfaces, ensuring a clean and even finish for carpentry 
projects. Hand planes feature adjustable blade depth for controlled material removal without surface 
damage. Essential for final fitting of wooden components and achieving smooth surfaces in 
construction work.
    `.trim(),
    specs: [
      "Function: Shaving and smoothing wood surfaces",
      "Feature: Adjustable blade depth for controlled removal",
      "Applications: Carpentry, construction, fine finishing work",
    ],
    imagePlaceholder: "/images/HandPlaner.jpeg",
  },

  /* ---------- SAFETY ITEMS: FOOTWEAR ---------- */
  {
    id: 401,
    category: "Safety Items",
    subCategory: "Footwear",
    title: "Safety Shoes",
    description: `
Engineered with steel toe caps and slip-resistant soles to protect feet from heavy impacts, punctures, 
and hazardous spills in industrial and oilfield environments. Safety shoes combine protective 
features with comfort for all-day workplace use. Reinforced arches and shock-absorbing midsoles 
reduce fatigue during extended standing and walking.
    `.trim(),
    specs: [
      "Protection: Steel toe caps and slip-resistant soles",
      "Features: Reinforced arches, shock-absorbing midsoles",
      "Applications: Industrial and oilfield environments",
      "Benefit: Comfort for extended work shifts",
    ],
    imagePlaceholder: "/images/SafetyShoes.jpeg",
  },
  {
    id: 402,
    category: "Safety Items",
    subCategory: "Footwear",
    title: "Apprentice Black Shoes",
    description: `
Comfortable, basic protection shoes for apprentices and general workers, designed for daily industrial 
use. These entry-level safety shoes provide essential foot protection while maintaining affordability. 
Suitable for training programs and temporary workers in industrial settings.
    `.trim(),
    specs: [
      "Type: Entry-level safety footwear",
      "Use: Apprentices and general industrial workers",
      "Benefit: Affordable protection for daily use",
    ],
    imagePlaceholder: "/images/ApprenticeBlackShoes.jpeg",
  },
  {
    id: 403,
    category: "Safety Items",
    subCategory: "Footwear",
    title: "Rigger Brown Shoes",
    description: `
Heavy-duty boots providing ankle support, water resistance, and insulation for rigorous field and 
offshore operations. Rigger boots feature reinforced ankle areas for stability on uneven surfaces. 
Thermal insulation maintains foot comfort in cold offshore and marine conditions.
    `.trim(),
    specs: [
      "Features: Ankle support, water resistance, thermal insulation",
      "Applications: Offshore, marine, and rugged field operations",
      "Benefit: Stability and comfort on uneven, cold environments",
    ],
    imagePlaceholder: "/images/RiggerBrownShoes.jpeg",
  },
  {
    id: 404,
    category: "Safety Items",
    subCategory: "Footwear",
    title: "Gum Boots",
    description: `
Waterproof rubber boots that shield feet and lower legs in wet, muddy, or chemical-prone conditions. 
Gum boots provide complete lower-leg protection against water, mud, and minor chemical splashes. 
Lightweight construction reduces fatigue during extended wear in wet environments.
    `.trim(),
    specs: [
      "Material: Waterproof rubber or PVC",
      "Protection: Lower-leg coverage from water, mud, light chemicals",
      "Benefit: Lightweight design for extended wear",
    ],
    imagePlaceholder: "/images/GumBoots.jpeg",
  },

  /* ---------- SAFETY ITEMS: EYE & FACE ---------- */
  {
    id: 405,
    category: "Safety Items",
    subCategory: "Eye & Face Protection",
    title: "Ventilator Blue Mirror Goggles",
    description: `
Safety goggles with anti-glare blue mirror lenses, protecting eyes from intense light, sparks, dust, and 
debris—ideal for outdoor and welding work. Blue mirror coatings reduce eye strain from bright light 
while providing high UV protection. Ventilation channels prevent lens fogging during extended use in 
hot conditions.
    `.trim(),
    specs: [
      "Lens: Blue mirror, anti-glare, UV-protective",
      "Function: Protects against light, sparks, dust, and debris",
      "Feature: Ventilation channels to minimize fogging",
      "Applications: Outdoor work, welding, bright environments",
    ],
    imagePlaceholder: "/images/VentilatorBlueMirrorGoggles.jpeg",
  },

  /* ---------- SAFETY ITEMS: HAND PROTECTION ---------- */
  {
    id: 406,
    category: "Safety Items",
    subCategory: "Hand Protection",
    title: "Performance 1 Gloves",
    description: `
Durable gloves offering reliable grip and protection for a variety of industrial tasks and general 
handling. These multi-purpose gloves balance protection with dexterity for precision work. Synthetic 
materials provide abrasion resistance and machine washability for cost-effectiveness.
    `.trim(),
    specs: [
      "Use: General industrial handling and light protection",
      "Benefit: Balanced protection and dexterity",
      "Feature: Abrasion-resistant, often machine washable",
    ],
    imagePlaceholder: "/images/Performance1Gloves.jpeg",
  },
  {
    id: 407,
    category: "Safety Items",
    subCategory: "Hand Protection",
    title: "Surgical Gloves",
    description: `
Disposable, medical-grade gloves ensuring hygiene and protection against contaminants in sensitive 
work areas. Latex-free options accommodate allergies and skin sensitivities. Available in powder-free 
formulations for cleaner handling in food and pharmaceutical applications.
    `.trim(),
    specs: [
      "Type: Disposable, medical-grade gloves",
      "Options: Latex-free and powder-free variants",
      "Applications: Healthcare, food handling, pharmaceutical environments",
    ],
    imagePlaceholder: "/images/SurgicalGloves.jpeg",
  },
  {
    id: 408,
    category: "Safety Items",
    subCategory: "Hand Protection",
    title: "Leather Gloves",
    description: `
Resistant, rugged gloves providing protection against abrasions and heat for handling tools and rough 
materials. Natural leather develops a protective patina with use, enhancing durability. Heat-resistant 
properties make these gloves suitable for welding and high-temperature work.
    `.trim(),
    specs: [
      "Material: Heavy-duty natural leather",
      "Protection: Abrasion and moderate heat resistance",
      "Applications: Welding, metalwork, rough material handling",
    ],
    imagePlaceholder: "/images/LeatherGloves.jpeg",
  },
  {
    id: 409,
    category: "Safety Items",
    subCategory: "Hand Protection",
    title: "Rubber Gloves",
    description: `
Chemical and water-resistant gloves for safe handling of hazardous substances. Nitrile and rubber 
compounds provide resistance to oils, acids, and other chemicals. Double-lined construction extends 
durability for extended chemical exposure.
    `.trim(),
    specs: [
      "Material: Rubber or nitrile compounds",
      "Protection: Oils, acids, and various chemicals",
      "Feature: Double-lined or heavy-duty construction for longevity",
    ],
    imagePlaceholder: "/images/RubberGloves.jpeg",
  },
  {
    id: 410,
    category: "Safety Items",
    subCategory: "Hand Protection",
    title: "Dotted Gloves",
    description: `
Work gloves with dotted grip surfaces to prevent slipping when handling objects. Rubber dots on 
cotton or polyester backing provide secure grip on wet and dry surfaces. Cost-effective solution for 
general handling and assembly work across industries.
    `.trim(),
    specs: [
      "Design: Rubber or PVC dots on fabric backing",
      "Benefit: Enhanced grip on wet and dry surfaces",
      "Applications: General handling, assembly, warehouse tasks",
    ],
    imagePlaceholder: "/images/DottedGloves.jpeg",
  },
  {
    id: 411,
    category: "Safety Items",
    subCategory: "Hand Protection",
    title: "Welding Gloves",
    description: `
Heat-resistant leather gloves specially designed for welding and metalworking operations. Multiple 
layers of leather and reinforcement provide insulation against sparks and molten metal. Extended 
cuffs protect wrists and forearms from heat and sparks during extended welding.
    `.trim(),
    specs: [
      "Material: Multi-layered heat-resistant leather",
      "Protection: Sparks, heat, and molten metal",
      "Feature: Extended cuffs for wrist and forearm safety",
    ],
    imagePlaceholder: "/images/WeldingGloves.jpeg",
  },

  /* ---------- SAFETY ITEMS: BODY PROTECTION ---------- */
  {
    id: 412,
    category: "Safety Items",
    subCategory: "Body Protection",
    title: "Coverall",
    description: `
Full-body suits providing comprehensive protection from hazardous substances, dust, sparks, and 
chemicals. Breathable fabric maintains comfort during extended wear in harsh conditions. Multiple 
closure options accommodate different work environments and equipment configurations.
    `.trim(),
    specs: [
      "Protection: Dust, light chemicals, sparks, and contaminants",
      "Design: Full-body coverage with secure closures",
      "Benefit: Breathable, comfortable for extended shifts",
    ],
    imagePlaceholder: "/images/Coverall.jpeg",
  },
  {
    id: 413,
    category: "Safety Items",
    subCategory: "Body Protection",
    title: "Safety Jackets",
    description: `
High-visibility jackets made from fluorescent fabric with reflective strips for safe working in low-light 
or busy environments. EN 471 compliance ensures visibility from long distances in darkness. Essential 
for highway work, traffic management, and night operations across industrial sites.
    `.trim(),
    specs: [
      "Standard: Typically EN 471 compliant (high-visibility)",
      "Features: Fluorescent fabric with reflective strips",
      "Applications: Roadwork, traffic control, night operations",
    ],
    imagePlaceholder: "/images/SafetyJackets.png",
  },
  {
    id: 414,
    category: "Safety Items",
    subCategory: "Body Protection",
    title: "Full Body Harness",
    description: `
Certified fall protection harness used when working at heights to prevent injuries from falls. 
Multi-point attachment distributes fall impact across the body safely. Comfortable padding and 
adjustable straps accommodate various body sizes and equipment configurations.
    `.trim(),
    specs: [
      "Function: Fall protection for work at height",
      "Design: Multi-point attachment and load distribution",
      "Features: Padding and adjustable straps for comfort and fit",
    ],
    imagePlaceholder: "/images/FullBodyHarness.jpeg",
  },

  /* ---------- SAFETY ITEMS: WARNING & SAFETY GEAR ---------- */
  {
    id: 415,
    category: "Safety Items",
    subCategory: "Warning & Safety Gear",
    title: "Warning Tape",
    description: `
High-visibility tape for marking hazardous zones and maintaining site safety with clear demarcation. 
Yellow and black striped patterns provide universal hazard identification across all environments. 
Water-resistant adhesive maintains marking in outdoor conditions and harsh weather.
    `.trim(),
    specs: [
      "Function: Marking hazardous or restricted areas",
      "Design: High-visibility colors (often yellow/black stripes)",
      "Feature: Water-resistant adhesive for outdoor durability",
    ],
    imagePlaceholder: "/images/WarningTape.jpeg",
  },
  {
    id: 416,
    category: "Safety Items",
    subCategory: "Warning & Safety Gear",
    title: "Safety Nets",
    description: `
Mesh nets that prevent workers and tools from falling at elevated job sites. Professional-grade netting 
meets international fall protection standards. Heavy-duty construction withstands impact and 
extended UV exposure in outdoor applications.
    `.trim(),
    specs: [
      "Function: Fall arrest and debris containment",
      "Standard: Typically compliant with recognized fall-protection norms",
      "Use: Elevated work sites, construction, industrial maintenance",
    ],
    imagePlaceholder: "/images/SafetyNets.jpeg",
  },
  {
    id: 417,
    category: "Safety Items",
    subCategory: "Warning & Safety Gear",
    title: "Safety Helmet",
    description: `
Hard hats that protect the head from falling objects, impacts, and certain electrical hazards. 
Certified helmets provide comprehensive head protection across industrial environments. Suspension 
systems absorb impact energy and distribute load across the head safely.
    `.trim(),
    specs: [
      "Function: Protection from falling objects and impacts",
      "Features: Internal suspension system, optional chin strap",
      "Applications: Construction, industrial, and maintenance sites",
    ],
    imagePlaceholder: "/images/SafetyHelmet.jpeg",
  },
  {
    id: 418,
    category: "Safety Items",
    subCategory: "Warning & Safety Gear",
    title: "Dust Mask",
    description: `
Respiratory masks filtering out dust and airborne particles for safe breathing during industrial work. 
Appropriate filters remove particulates and some chemical vapors effectively. Comfortable fit and 
adjustable straps accommodate extended use in dusty environments.
    `.trim(),
    specs: [
      "Function: Filtration of dust and airborne particles",
      "Feature: Adjustable straps and shaped face seal",
      "Applications: Construction, sanding, industrial dust environments",
    ],
    imagePlaceholder: "/images/DustMask.jpeg",
  },
  {
    id: 419,
    category: "Safety Items",
    subCategory: "Warning & Safety Gear",
    title: "Traffic Cone",
    description: `
Bright, durable cones for delineating traffic and work areas, helping prevent accidents and ensuring 
orderly movement. High-visibility orange color ensures visibility during day and night operations. 
Reflective stripes enhance nighttime visibility and improve site safety.
    `.trim(),
    specs: [
      "Color: High-visibility orange with reflective bands",
      "Function: Marking lanes, hazards, and work zones",
      "Applications: Roadworks, parking management, industrial yards",
    ],
    imagePlaceholder: "/images/TrafficCone.jpeg",
  },

  /* ---------- RIGGING EQUIPMENT ---------- */
  {
    id: 501,
    category: "Rigging Equipment",
    subCategory: "Lifting & Rigging Equipment",
    title: "Nylon Sling",
    description: `
Strong synthetic slings used for lifting and transporting heavy materials safely in marine and industrial 
settings. Nylon provides a high strength-to-weight ratio and resistance to UV degradation. Multiple 
configurations (endless, looped, tagged) accommodate various rigging scenarios and load 
requirements.
    `.trim(),
    specs: [
      "Material: High-strength synthetic nylon",
      "Features: Lightweight, UV-resistant, flexible",
      "Configurations: Endless, looped, tagged, and more",
      "Applications: Marine and industrial lifting operations",
    ],
    imagePlaceholder: "/images/NylonSling.jpeg",
  },
];

/* ------------ 2. ICON MAP ------------ */

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Hoses & Connectors": Truck,
  "Fittings & Adaptors": Zap,
  Tools: Wrench,
  Fasteners: Hammer,
  "Safety Items": Shield,
  "Rigging Equipment": Compass,
};

/* ------------ 3. PRODUCT CARD (GRID + RELATED) ------------ */

const ProductCard: React.FC<{
  product: Product;
  onClick: () => void;
  isRelated?: boolean;
}> = ({ product, onClick, isRelated = false }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: isRelated ? 1.02 : 1.05,
        boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.1)",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-200 
        transition-all duration-300 ease-in-out
        ${
          isRelated
            ? "hover:shadow-xl"
            : "hover:shadow-orange-200 hover:border-[#F97A1E]/70" 
        }`}
    >
      {/* Image */}
      <div
        className={`w-full flex items-center justify-center bg-gray-50 p-4 ${
          isRelated ? "h-32" : "h-44 rounded-t-2xl"
        }`}
      >
        <img
          src={product.imagePlaceholder}
          alt={product.title}
          className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-3 pb-4 pt-3 text-center">
        <h3
          className={`font-semibold text-slate-900 mb-2 line-clamp-2 transition-colors duration-200 ${
            isRelated ? "text-sm" : "text-base hover:text-orange-600"
          }`}
        >
          {product.title}
        </h3>

        {!isRelated && (
          <button
            className="
              inline-flex items-center justify-center
              mt-1 text-xs font-bold
              rounded-full px-5 py-2.5
              border border-[#F97A1E]
              text-[#F97A1E]
              bg-white
              hover:bg-[#F97A1E] hover:text-slate-900 
              hover:shadow-lg hover:shadow-[#F97A1E]/40 
              transition-all duration-200 ease-out
              active:scale-95
            "
          >
            View Details
          </button>
        )}
      </div>
    </motion.div>
  );
};

/* ------------ 4. MAIN PAGE ------------ */

type TabKey = "description" | "additional" | "reviews";

const ProductsPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string>(
    "Hoses & Connectors"
  );
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>("description");
  const productDetailsRef = React.useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

  // ✅ When a product is selected (from grid, sidebar, or related)
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveCategory(product.category);
    setActiveSubCategory(product.subCategory ?? null);
    setActiveTab("description");

    // Save selection to localStorage
    localStorage.setItem("selectedProductId", String(product.id));

    setTimeout(() => {
      productDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  // ✅ Restore selection from URL (?id=...) or last viewed (localStorage)
  React.useEffect(() => {
    const urlId = searchParams.get("id");
    const storedId = localStorage.getItem("selectedProductId");

    const finalId = urlId ?? storedId;
    if (!finalId) return;

    const product = PRODUCT_DATA.find((p) => String(p.id) === finalId);
    if (!product) return;

    setSelectedProduct(product);
    setActiveCategory(product.category);
    setActiveSubCategory(product.subCategory ?? null);
    setActiveTab("description");

    setTimeout(() => {
      productDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  }, [searchParams]);

  // Build category -> subcategories map
  const categoryData = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    PRODUCT_DATA.forEach((p) => {
      if (!map[p.category]) {
        map[p.category] = new Set();
      }
      if (p.subCategory) {
        map[p.category].add(p.subCategory);
      }
    });
    return map;
  }, []);

  const categoryOrder = useMemo(
    () => [
      "Hoses & Connectors",
      "Fittings & Adaptors",
      "Tools",
      "Fasteners",
      "Safety Items",
      "Rigging Equipment",
    ],
    []
  );

  const allCategories = useMemo(
    () =>
      categoryOrder.filter((c) => Object.keys(categoryData).includes(c)) ||
      Object.keys(categoryData),
    [categoryData, categoryOrder]
  );

  const filteredProducts = useMemo(() => {
    return PRODUCT_DATA.filter((product) => {
      const matchCategory = product.category === activeCategory;
      const matchSub = activeSubCategory
        ? product.subCategory === activeSubCategory
        : true;

      const matchesSearch = searchQuery.trim()
        ? (
            product.title.toLowerCase() +
            product.description.toLowerCase() +
            product.specs.join(" ").toLowerCase()
          ).includes(searchQuery.toLowerCase())
        : true;

      return matchCategory && matchSub && matchesSearch;
    });
  }, [activeCategory, activeSubCategory, searchQuery]);

  const topProducts = useMemo(() => PRODUCT_DATA.slice(0, 4), []);

  const getMockFilters = (category: string) => {
    if (category.includes("Hoses")) {
      return (
        <div className="p-4 bg-white rounded-xl space-y-3 mt-4 text-sm border border-slate-200 shadow-inner">
          <p className="font-bold text-slate-800 border-b border-gray-200 pb-2">
            Refine by Specs
          </p>
          <select className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#F97A1E] transition-all">
            <option>Pressure Rating (All)</option>
            <option>Up to 5,000 PSI</option>
            <option>5,000 - 10,000 PSI</option>
            <option>Extreme High (10k+)</option>
          </select>
          <select className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#F97A1E] transition-all">
            <option>Material (All)</option>
            <option>NBR Rubber</option>
            <option>Viton</option>
            <option>Stainless Steel Wire</option>
          </select>
        </div>
      );
    }
    return (
      <div className="p-4 bg-white rounded-xl space-y-2 mt-4 text-xs text-slate-500 border border-slate-200 shadow-inner">
        <p className="font-bold text-slate-800">
          No smart filters for this category.
        </p>
        <p>Use the search bar above for model numbers.</p>
      </div>
    );
  };

  const relatedProducts = selectedProduct
    ? PRODUCT_DATA.filter(
        (p) =>
          p.category === selectedProduct.category && p.id !== selectedProduct.id
      ).slice(0, 4)
    : [];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSelectedProduct(null);
    const subs = Array.from(categoryData[category] || []);
    if (subs.length > 0) {
      setActiveSubCategory(subs[0]);
    } else {
      setActiveSubCategory(null);
    }
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSubCategoryClick = (category: string, sub: string) => {
    setActiveCategory(category);
    setActiveSubCategory(sub);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-slate-900 font-sans antialiased">
      {/* 🧲 FUTURISTIC INDUSTRIAL HERO SECTION */}
      <section className="relative bg-[#081A2C] text-white overflow-hidden py-28">
        {/* Animated Blueprint Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 animate-grid-move"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#0e2236 1px,transparent 1px),linear-gradient(#0e2236 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>

        {/* Spotlight Glow Center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,174,23,0.18),transparent_70%)]"></div>

        {/* Oil Droplet Motion */}
        <div className="absolute top-[-20px] left-1/2 w-2 h-2 rounded-full bg-[#FBAE17] animate-oil-drop"></div>

  {/* 🟡 Oil Droplet Motion */}
  <div className="absolute top-[-20px] left-1/2 w-2 h-2 rounded-full bg-[#F97A1E] animate-oil-drop"></div>

  {/* Glow Nodes */}
  <div className="absolute top-10 left-20 w-4 h-4 bg-[#F97A1E] rounded-full blur-md animate-pulse"></div>
  <div className="absolute bottom-16 right-28 w-5 h-5 bg-[#F97A1E] rounded-full blur-lg animate-ping"></div>
  <div className="absolute top-1/3 right-10 w-3 h-3 bg-[#F97A1E]/80 rounded-full animate-bounce"></div>

  {/* Floating Icons */}
  <div className="absolute left-12 top-1/2 -translate-y-1/2 animate-float-slow">
    <Truck size={42} className="text-[#F97A1E]/80" />
  </div>
  <div className="absolute right-16 top-1/3 animate-float">
    <Wrench size={40} className="text-[#F97A1E]/70" />
  </div>
  <div className="absolute left-1/3 bottom-10 animate-float-reverse">
    <Shield size={38} className="text-[#F97A1E]/60" />
  </div>

  {/* MAIN CONTENT */}
  <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
    <p className="text-xs uppercase tracking-[0.35em] text-[#F97A1E] mb-4">
      Industrial Grade Products
    </p>

    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight">
      Products <span className="text-[#F97A1E]">FOR INDUSTRY</span>
    </h1>

    <p className="text-base sm:text-lg text-gray-300 mb-10">
      Premium Marine & Oilfield Components Built for Performance and Safety.
    </p>

    {/* Search */}
    <div className="max-w-lg mx-auto">
<input
  type="text"
  placeholder="Search by product name, model #, or spec..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="w-full py-4 px-6 rounded-full bg-[#111A2B] border border-[#F97A1E]/40 text-sm
  placeholder-gray-400 focus:ring-4 focus:ring-[#F97A1E]/40 focus:outline-none
  text-white transition"
            />
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
@keyframes gridShift {
  0% { background-position: 0 0; }
  100% { background-position: 48px 48px; }
}
.animate-grid-move {
  animation: gridShift 40s linear infinite;
}

@keyframes oilDrop {
  0% { transform: translate(-50%, -20px) scale(0.5); opacity: 0; }
  30% { opacity: 1; }
  100% { transform: translate(-50%, 120vh) scale(1); opacity: 0; }
}
.animate-oil-drop {
  animation: oilDrop 6s ease-in infinite;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
@keyframes float-reverse {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(14px); }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.animate-float-reverse {
  animation: float-reverse 5.5s ease-in-out infinite;
}
.animate-float-slow {
  animation: float 7s ease-in-out infinite;
}
`}</style>

      {/* MAIN CONTENT */}
{/* MAIN CONTENT */}
<main className="py-16 relative">
  <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-10">

    {/* Mobile Filter Button */}
    <div className="lg:hidden">
      <button
        onClick={() => setSidebarOpen(true)}
        className="bg-[#FF7A00] text-white px-4 py-2 rounded-lg mb-4 shadow-md sticky top-[120px] z-[25]"
      >
        ☰ Filters
      </button>
    </div>

    {/* Mobile Backdrop Overlay */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black/50 z-[30] lg:hidden"
        onClick={() => setSidebarOpen(false)}
      ></div>
    )}

    {/* SIDEBAR */}
    <aside
      className={`
        bg-white p-6 rounded-2xl shadow-xl border border-gray-200 h-fit transition-all duration-300

        /* Mobile Slide-in */
        ${sidebarOpen ? "fixed top-[120px] left-0 w-64 z-[40]" : "hidden"}

        /* Desktop Always Visible */
        lg:block lg:sticky lg:top-[120px] lg:w-1/4
      `}
    >
      {/* Close Button Only Mobile */}
      <div className="lg:hidden flex justify-end mb-3">
        <button onClick={() => setSidebarOpen(false)} className="text-slate-700 text-lg">
          ✕
        </button>
      </div>

      <h2 className="text-lg font-extrabold text-slate-900 mb-4 border-b border-slate-200 pb-3">
        Product Categories
      </h2>

      <nav className="space-y-2 mb-4">
        {allCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category] || Package;
          const isActive = activeCategory === category;
          const hasSub = categoryData[category]?.size > 0;
          const expanded = expandedCategories[category] || isActive;

          return (
            <div key={category}>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm transition-all
                  ${isActive
                    ? "bg-[#F97A1E] text-white font-bold shadow-lg shadow-[#F97A1E]/40"
                    : "text-slate-700 hover:bg-gray-100 hover:text-slate-900"
                  }`}
              >
                <span className="flex items-center">
                  <Icon className="w-5 h-5 mr-3" />
                  {category}
                </span>
                {hasSub && (
                  <span className="ml-2 text-xs">{expanded ? "−" : "+"}</span>
                )}
              </button>

              {hasSub && expanded && (
                <div className="mt-1 mb-2 ml-6 space-y-1">
                  {[...categoryData[category]].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleSubCategoryClick(category, sub)}
                      className={`w-full text-left text-xs px-3 py-1.5 rounded-lg transition-all
                        ${
                          activeCategory === category && activeSubCategory === sub
                            ? "bg-orange-100 text-orange-700 font-semibold"
                            : "text-slate-600 hover:bg-gray-100 hover:text-slate-900"
                        }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {getMockFilters(activeCategory)}

      {/* Popular Items */}
      <div className="mt-8 border-t border-slate-200 pt-5">
        <h3 className="text-sm font-bold text-slate-900 mb-4">Popular Items</h3>
        <div className="space-y-4">
          {topProducts.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setSidebarOpen(false);
                setSelectedProduct(p);
              }}
              className="flex items-center w-full text-left text-xs text-slate-700 hover:text-orange-600 transition"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mr-3 overflow-hidden shadow-sm">
                <img src={p.imagePlaceholder} className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex-1">
                <p className="line-clamp-2 font-medium">{p.title}</p>
                <p className="text-gray-400 text-[10px] mt-0.5">{p.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>




          {/* RIGHT SIDE: LIST OR DETAILS */}
          <section className="lg:w-3/4 w-full">

            {!selectedProduct ? (
              <>
                {/* ---------- GRID VIEW ---------- */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                      {activeCategory}
                      {activeSubCategory && (
                        <>
                          <span className="text-base font-normal text-slate-500">
                            {" "}
                            / {activeSubCategory}
                          </span>
                        </>
                      )}{" "}
                      <span className="text-base font-normal text-slate-500">
                        ({filteredProducts.length} items)
                      </span>
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => handleProductSelect(product)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="bg-white border border-gray-200 p-12 rounded-xl text-center text-slate-500 mt-10 shadow-lg">
                    <p className="text-xl font-bold">
                      No products found in this category.
                    </p>
                    <p className="mt-3 text-base">
                      Try selecting a different category or refining your
                      search.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* ---------- DETAILS VIEW ---------- */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mb-6 flex items-center text-sm text-orange-600 font-medium hover:text-orange-800 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Back to {activeCategory}
                  {activeSubCategory ? ` / ${activeSubCategory}` : ""}
                </button>

{/* Main info card */}
<div
  ref={productDetailsRef}
  className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-gray-200 p-10 flex flex-col lg:flex-row gap-12 items-start"
>
  {/* Left: Image */}
  <div className="lg:w-1/2 flex items-center justify-center">
    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-inner w-full flex items-center justify-center min-h-[350px]">
      <img
        src={selectedProduct.imagePlaceholder}
        alt={selectedProduct.title}
        className="max-h-[300px] w-auto object-contain transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Right: Product Info */}
  <div className="lg:w-1/2 flex flex-col justify-center space-y-4">

    {/* Breadcrumb */}
    <p className="text-xs uppercase tracking-[0.18em] text-orange-600 font-bold">
      {selectedProduct.category}
      {selectedProduct.subCategory ? ` / ${selectedProduct.subCategory}` : ""}
    </p>

    {/* Title */}
    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
      {selectedProduct.title}
    </h2>

    {/* Short Description + CTA */}
    <p className="text-sm text-slate-600 mb-2 line-clamp-3">
      {selectedProduct.description}
    </p>

    <button
      onClick={() => {
        document.getElementById("product-description-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition underline underline-offset-4 w-fit"
    >
      Read more →
    </button>

  </div>
</div>



                {/* Tabs section */}
{/* Tabs section */}
<div
  id="product-description-section"
  className="bg-white rounded-2xl shadow-xl border border-gray-200 mt-10"
>
  {/* Tab headers */}
  <div className="border-b border-gray-200 flex text-sm font-bold overflow-x-auto">
    {(["description", "additional"] as TabKey[]).map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`
          px-6 py-4 border-r border-gray-200 uppercase tracking-wide transition-all duration-200 whitespace-nowrap
          ${
            activeTab === tab
              ? "text-[#F97A1E] border-b-2 border-b-orange-600 -mb-px bg-gray-50 font-extrabold"
              : "text-slate-600 bg-white hover:bg-gray-50"
          }
        `}
                      >
                        {tab === "description" && "Description"}
                        {tab === "additional" && "Specifications"}
                      </button>
                    ))}
                  </div>

                  {/* Tab content */}
                  <div className="p-8 text-base text-slate-700">
                    {activeTab === "description" && (
                      <p className="leading-relaxed whitespace-pre-line">
                        {selectedProduct.description}
                      </p>
                    )}

    {activeTab === "additional" && (
      <div className="space-y-4">
        <p className="font-extrabold text-lg text-slate-900 mb-2">
          Detailed Technical Specifications
        </p>
        {selectedProduct.specs.length === 0 ? (
          <p className="text-sm text-slate-500">
            No additional specifications available for this product.
          </p>
        ) : (
          <ul className="list-disc list-inside space-y-2 pl-4">
            {selectedProduct.specs.map((s) => (
              <li key={s} className="text-slate-600">
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
  </div>
</div>


                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-extrabold mb-6 text-slate-900">
                      Complementary Products
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {relatedProducts.map((p) => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          isRelated={true}
                          onClick={() => handleProductSelect(p)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
