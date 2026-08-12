// English display text for the app's data model, whose underlying values are
// Swedish literals (VehicleType, Transmission, Fuel, Booking.status,
// User.licenseStatus). We translate the LABEL shown to the user, not the
// stored value — filtering/state logic keeps using the original Swedish
// literals everywhere, so nothing about booking/filter behavior changes.
import type { Vehicle, VehicleType, Transmission, Fuel, Booking, User } from "./data";
import type { Lang } from "@/lib/i18n";

export function typeLabel(type: VehicleType, lang: Lang): string {
  if (lang === "sv") return type;
  const map: Record<VehicleType, string> = {
    Bil: "Car",
    Transportbil: "Van",
    Motorcykel: "Motorcycle",
    Båt: "Boat",
    Jetski: "Jet Ski",
    Husbil: "Camper/RV",
    Moped: "Moped",
    Släpvagn: "Trailer",
    Annat: "Other",
  };
  return map[type];
}

export function transmissionLabel(value: Transmission, lang: Lang): string {
  if (lang === "sv") return value;
  return value === "Automat" ? "Automatic" : "Manual";
}

export function fuelLabel(value: Fuel, lang: Lang): string {
  if (lang === "sv") return value;
  const map: Record<Fuel, string> = { Bensin: "Petrol", Diesel: "Diesel", El: "Electric", Laddhybrid: "Plug-in hybrid", Hybrid: "Hybrid" };
  return map[value];
}

export function statusLabel(status: Booking["status"], lang: Lang): string {
  if (lang === "sv") return status === "Väntar" ? "Väntar på godkännande" : status;
  const map: Record<Booking["status"], string> = {
    Väntar: "Pending approval",
    Kommande: "Upcoming",
    Aktiv: "Active",
    Avslutad: "Completed",
    Avbokad: "Cancelled",
  };
  return map[status];
}

export function licenseLabel(status: User["licenseStatus"], lang: Lang): string {
  if (lang === "sv") return status;
  const map: Record<User["licenseStatus"], string> = {
    Verifierat: "Verified",
    Väntar: "Pending",
    Saknas: "Missing",
  };
  return map[status];
}

type VehicleText = { description: string; features: string[]; rules: string[]; insurance: string };

const englishVehicleText: Record<string, VehicleText> = {
  v1: {
    description:
      "Elegant electric car with long range, perfect for both city driving and longer trips. Autopilot and premium audio included.",
    features: ["Autopilot", "Fast charging", "Panoramic roof", "Rear camera", "Apple CarPlay", "Climate control"],
    rules: ["No smoking", "Pets in a carrier", "Return with at least 50% charge", "Max 300 km/day"],
    insurance: "Full protection with a 4,500 kr deductible is included in every booking via Movanta Skydd.",
  },
  v2: {
    description: "Spacious and safe SUV with plenty of room for the family or cargo. Well maintained and recently serviced.",
    features: ["Tow bar", "Heated seats", "360° camera", "Adaptive cruise control", "Ski hatch"],
    rules: ["No smoking", "Pets allowed", "Return with a full tank", "Max 250 km/day"],
    insurance: "Full protection with a 5,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v3: {
    description: "Peppy and fuel-efficient hatchback, perfect for everyday driving and shorter trips around town.",
    features: ["Bluetooth", "Cruise control", "Parking sensors", "USB port"],
    rules: ["No smoking", "No pets", "Return with a full tank", "Max 200 km/day"],
    insurance: "Full protection with a 4,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v4: {
    description: "Spacious van for moving and transporting goods. Large load volume and easy to drive.",
    features: ["6.6 m³ load volume", "Rear sliding doors", "Rear camera", "Tow hitch"],
    rules: ["No smoking", "No pets", "Max load 900 kg", "Return cleaned"],
    insurance: "Full protection with a 6,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v5: {
    description: "Fuel-efficient hybrid that's nimble in town and comfortable on the motorway. Low consumption, high comfort.",
    features: ["Hybrid drive", "Adaptive cruise control", "Lane assist", "Wireless charging"],
    rules: ["No smoking", "Pets in a carrier", "Return with a full tank", "Max 250 km/day"],
    insurance: "Full protection with a 4,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v6: {
    description: "Sporty sedan with excellent handling. Perfect if you want to drive with a bit of extra feel.",
    features: ["Sport seats", "Head-up display", "Harman Kardon audio", "Parking assist"],
    rules: ["No smoking", "No pets", "Return with a full tank", "Max 200 km/day"],
    insurance: "Full protection with a 5,500 kr deductible is included in every booking via Movanta Skydd.",
  },
  v7: {
    description: "Robust and reliable van that handles heavy jobs. A good choice for moving, renovation, or freight.",
    features: ["7.5 m³ load volume", "Tow hitch", "Reversing alarm", "Partitionable load space"],
    rules: ["No smoking", "No pets", "Max load 1,100 kg", "Return cleaned"],
    insurance: "Full protection with a 6,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v8: {
    description: "Futuristic electric car with fast charging and a spacious cabin. An excellent choice for everyday life and adventure alike.",
    features: ["350kW fast charging", "Digital instrument cluster", "Vegan interior", "V2L outlet"],
    rules: ["No smoking", "Pets in a carrier", "Return with at least 50% charge", "Max 300 km/day"],
    insurance: "Full protection with a 4,500 kr deductible is included in every booking via Movanta Skydd.",
  },
  v9: {
    description: "Powerful adventure motorcycle equally at home in the city or on a long tour. Well maintained and easy to ride.",
    features: ["ABS", "Trip computer", "Heated grips", "Top case"],
    rules: ["No smoking", "Valid A licence required", "Return with a full tank", "Max 250 km/day"],
    insurance: "Full protection with a 5,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v10: {
    description: "Fast and stable motorboat for day trips in the archipelago. Easy to handle even with limited boating experience.",
    features: ["Cockpit cushion", "Fish finder", "Swim ladder", "Cool box"],
    rules: ["No smoking", "Boating licence required", "Max 8 people on board", "Return cleaned"],
    insurance: "Full protection with a 7,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v11: {
    description: "Easy-to-ride and nimble jet ski suited to beginners and experienced riders alike. Delivered with a life jacket.",
    features: ["Life jacket included", "Storage compartment", "Non-slip deck"],
    rules: ["No smoking", "Boating licence required", "Minimum age 18", "Return with a full tank"],
    insurance: "Full protection with a 6,000 kr deductible is included in every booking via Movanta Skydd.",
  },
  v12: {
    description: "Spacious motorhome for the whole family, complete with kitchen, sleeping berths, and a wet room. Ready for the holiday adventure.",
    features: ["Kitchen with fridge", "4 sleeping berths", "Awning", "Solar panel"],
    rules: ["No smoking", "Pets allowed", "Max 2,000 km/week", "Return emptied and cleaned"],
    insurance: "Full protection with a 6,500 kr deductible is included in every booking via Movanta Skydd.",
  },
};

export function localizeVehicle<V extends Vehicle>(vehicle: V, lang: Lang): V {
  if (lang === "sv") return vehicle;
  const text = englishVehicleText[vehicle.id];
  if (!text) return vehicle;
  return { ...vehicle, ...text };
}
