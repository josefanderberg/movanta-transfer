// Mock data and localStorage helpers for the Movanta app prototype.
// No backend — everything below is local, fake, and for demo purposes only.

export type VehicleType = "Bil" | "Transportbil" | "Motorcykel" | "Båt" | "Jetski" | "Husbil" | "Moped" | "Släpvagn" | "Annat";
export type Transmission = "Automat" | "Manuell";
export type Fuel = "Bensin" | "Diesel" | "El" | "Laddhybrid" | "Hybrid";
export type InsuranceOption = "Skydd" | "Inget";
export type ListingIdentityType = "Privat" | "Företag";

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  type: VehicleType;
  transmission: Transmission;
  fuel: Fuel;
  seats: number;
  pricePerDay: number;
  rating: number;
  reviews: number;
  distanceKm: number;
  verified: boolean;
  available: boolean;
  color: string;
  location: string;
  owner: { name: string; memberSince: string; rating: number; trips: number; business: boolean };
  description: string;
  features: string[];
  rules: string[];
  insurance: string;
  // Optional — only set for user-created listings (see listings.ts). The 12
  // curated mock vehicles render their usual gradient + icon thumbnail when
  // this is absent, so nothing about the existing fleet changes.
  photos?: string[];
  // Optional — a real geocoded position for a user-created listing's pickup
  // address. When absent, the map falls back to a deterministic placeholder
  // jitter around the vehicle's named area, same as the curated fleet.
  coord?: { lat: number; lng: number };
  // Optional — platform-wide minimum is 1 year; the 12 curated vehicles use
  // the default (1) when this is absent.
  minLicenseYears?: number;
  insuranceOption?: InsuranceOption;
  identityType?: ListingIdentityType;
  // Optional — the user id of the owner for a user-created listing. Absent
  // for the 12 curated mock vehicles, which have no real owner account to
  // send a booking request to.
  ownerId?: string;
  // Optional — a user-created listing's configured start-of-availability
  // date (YYYY-MM-DD). Lets the UI tell "not booked yet, just scheduled to
  // open later" apart from "booked" instead of labelling both the same way.
  availableFrom?: string;
  // Optional — the owner's weekly rate (see pricing.ts grossRevenueForPeriod).
  // Absent for the curated mock fleet and for listings where the owner left
  // it blank, in which case bookings fall back to pricePerDay × nights.
  pricePerWeek?: number;
  // The following are captured once by the owner during listing creation
  // (see listings.ts) rather than per-booking. `photos` above already holds
  // the public exterior+interior gallery; these four categories are private
  // documentation only ever shown to a renter after their booking is
  // confirmed (see BookingRoom.tsx) — absent for the curated mock fleet.
  mileage?: number;
  conditionPhotos?: string[];
  damagePhotos?: string[];
  includedItemsPhotos?: string[];
  documentPhotos?: string[];
};

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    type: "Bil",
    transmission: "Automat",
    fuel: "El",
    seats: 5,
    pricePerDay: 690,
    rating: 4.9,
    reviews: 58,
    distanceKm: 0.8,
    verified: true,
    available: true,
    color: "#5B8DEF",
    location: "Centrum, Växjö",
    owner: { name: "Erik Lindqvist", memberSince: "2023", rating: 4.9, trips: 112, business: false },
    description:
      "Elegant elbil med lång räckvidd, perfekt för både stadskörning och längre resor. Autopilot och premiumljud ingår.",
    features: ["Autopilot", "Snabbladdning", "Panoramatak", "Backkamera", "Apple CarPlay", "Klimatanläggning"],
    rules: ["Rökning ej tillåten", "Husdjur i transportbur", "Återlämnas med minst 50% laddning", "Max 30 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 4 500 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v2",
    brand: "Volvo",
    model: "XC60",
    year: 2022,
    type: "Bil",
    transmission: "Automat",
    fuel: "Diesel",
    seats: 5,
    pricePerDay: 590,
    rating: 4.8,
    reviews: 41,
    distanceKm: 1.4,
    verified: true,
    available: true,
    color: "#6E7B8B",
    location: "Öster, Växjö",
    owner: { name: "Sara Bergström", memberSince: "2022", rating: 4.8, trips: 76, business: false },
    description: "Rymlig och trygg SUV med gott om utrymme för familjen eller lasten. Välskött och nyservad.",
    features: ["Dragkrok", "Värmare i sätena", "360° kamera", "Adaptiv farthållare", "Skidlucka"],
    rules: ["Rökning ej tillåten", "Husdjur tillåtet", "Återlämnas tankad", "Max 25 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 5 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v3",
    brand: "Volkswagen",
    model: "Golf",
    year: 2021,
    type: "Bil",
    transmission: "Manuell",
    fuel: "Bensin",
    seats: 5,
    pricePerDay: 390,
    rating: 4.6,
    reviews: 33,
    distanceKm: 2.1,
    verified: true,
    available: true,
    color: "#4FB286",
    location: "Väster, Växjö",
    owner: { name: "Johan Åström", memberSince: "2021", rating: 4.7, trips: 94, business: false },
    description: "Pigg och bränslesnål halvkombi som är perfekt för vardagskörning och kortare resor i stan.",
    features: ["Bluetooth", "Farthållare", "Parkeringssensorer", "USB-uttag"],
    rules: ["Rökning ej tillåten", "Ej husdjur", "Återlämnas tankad", "Max 20 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 4 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v4",
    brand: "Mercedes-Benz",
    model: "Vito",
    year: 2022,
    type: "Transportbil",
    transmission: "Automat",
    fuel: "Diesel",
    seats: 3,
    pricePerDay: 850,
    rating: 4.7,
    reviews: 19,
    distanceKm: 3.6,
    verified: true,
    available: false,
    color: "#8C8C94",
    location: "Teleborg, Växjö",
    owner: { name: "Fleet Partner AB", memberSince: "2020", rating: 4.7, trips: 340, business: true },
    description: "Rymlig transportbil för flytt och transport av gods. Stor lastvolym och lätt att köra.",
    features: ["Lastvolym 6,6 m³", "Bakre skjutdörrar", "Backkamera", "Släpvagnskrok"],
    rules: ["Rökning ej tillåten", "Ej husdjur", "Lastvikt max 900 kg", "Återlämnas rengjord"],
    insurance: "Fullständigt skydd med självrisk 6 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v5",
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    type: "Bil",
    transmission: "Automat",
    fuel: "Hybrid",
    seats: 5,
    pricePerDay: 450,
    rating: 4.9,
    reviews: 47,
    distanceKm: 1.1,
    verified: true,
    available: true,
    color: "#D1785A",
    location: "Hovshaga, Växjö",
    owner: { name: "Maria Nilsson", memberSince: "2023", rating: 5.0, trips: 61, business: false },
    description: "Bränslesnål hybrid som är smidig i stan och trivsam på motorvägen. Låg förbrukning, hög komfort.",
    features: ["Hybriddrift", "Adaptiv farthållare", "Lane assist", "Trådlös laddning"],
    rules: ["Rökning ej tillåten", "Husdjur i transportbur", "Återlämnas tankad", "Max 25 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 4 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v6",
    brand: "BMW",
    model: "3-serie",
    year: 2022,
    type: "Bil",
    transmission: "Automat",
    fuel: "Bensin",
    seats: 5,
    pricePerDay: 620,
    rating: 4.8,
    reviews: 29,
    distanceKm: 2.8,
    verified: true,
    available: true,
    color: "#4E6E9E",
    location: "Dalbo, Växjö",
    owner: { name: "Anders Söderberg", memberSince: "2021", rating: 4.8, trips: 88, business: false },
    description: "Sportig sedan med utmärkt köregenskaper. Perfekt för dig som vill köra med lite extra känsla.",
    features: ["Sportstolar", "Head-up display", "Harman Kardon-ljud", "Parkeringsassistent"],
    rules: ["Rökning ej tillåten", "Ej husdjur", "Återlämnas tankad", "Max 20 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 5 500 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v7",
    brand: "Ford",
    model: "Transit",
    year: 2021,
    type: "Transportbil",
    transmission: "Manuell",
    fuel: "Diesel",
    seats: 3,
    pricePerDay: 790,
    rating: 4.5,
    reviews: 22,
    distanceKm: 4.2,
    verified: true,
    available: true,
    color: "#C99A3B",
    location: "Teleborg, Växjö",
    owner: { name: "Fleet Partner AB", memberSince: "2020", rating: 4.6, trips: 340, business: true },
    description: "Robust och pålitlig transportbil som klarar tunga jobb. Bra val för flytt, renovering eller frakt.",
    features: ["Lastvolym 7,5 m³", "Släpvagnskrok", "Backvarnare", "Delningsbart lastutrymme"],
    rules: ["Rökning ej tillåten", "Ej husdjur", "Lastvikt max 1100 kg", "Återlämnas rengjord"],
    insurance: "Fullständigt skydd med självrisk 6 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v8",
    brand: "Kia",
    model: "EV6",
    year: 2023,
    type: "Bil",
    transmission: "Automat",
    fuel: "El",
    seats: 5,
    pricePerDay: 650,
    rating: 4.9,
    reviews: 36,
    distanceKm: 1.9,
    verified: true,
    available: true,
    color: "#6FC2C0",
    location: "Sandsbro, Växjö",
    owner: { name: "Linnea Karlsson", memberSince: "2023", rating: 4.9, trips: 44, business: false },
    description: "Futuristisk elbil med snabb laddning och rymlig kupé. Ett utmärkt val för både vardag och äventyr.",
    features: ["Snabbladdning 350kW", "Digital instrumentpanel", "Vegan-interiör", "V2L-uttag"],
    rules: ["Rökning ej tillåten", "Husdjur i transportbur", "Återlämnas med minst 50% laddning", "Max 30 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 4 500 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v9",
    brand: "BMW",
    model: "R 1250 GS",
    year: 2023,
    type: "Motorcykel",
    transmission: "Manuell",
    fuel: "Bensin",
    seats: 2,
    pricePerDay: 490,
    rating: 4.9,
    reviews: 24,
    distanceKm: 1.6,
    verified: true,
    available: true,
    color: "#8C8C94",
    location: "Hovshaga, Växjö",
    owner: { name: "Fredrik Nordin", memberSince: "2022", rating: 4.9, trips: 52, business: false },
    description: "Kraftfull äventyrsmotorcykel som passar lika bra i stan som på långfärd. Väl underhållen och lättkörd.",
    features: ["ABS", "Färddator", "Värmehandtag", "Topplåda"],
    rules: ["Rökning ej tillåten", "Giltigt A-körkort krävs", "Återlämnas tankad", "Max 25 mil/dag"],
    insurance: "Fullständigt skydd med självrisk 5 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v10",
    brand: "Bayliner",
    model: "VR5",
    year: 2022,
    type: "Båt",
    transmission: "Automat",
    fuel: "Bensin",
    seats: 6,
    pricePerDay: 1290,
    rating: 4.8,
    reviews: 15,
    distanceKm: 3.1,
    verified: true,
    available: true,
    color: "#4E6E9E",
    location: "Sandsbro, Växjö",
    owner: { name: "Karin Eklund", memberSince: "2021", rating: 4.8, trips: 38, business: false },
    description: "Snabb och stabil motorbåt för dagsturer i skärgården. Enkel att hantera även för dig med mindre båtvana.",
    features: ["Sittbrunnsdyna", "Ekolod", "Badstege", "Kylbox"],
    rules: ["Rökning ej tillåten", "Förarbevis krävs", "Max 8 personer ombord", "Återlämnas rengjord"],
    insurance: "Fullständigt skydd med självrisk 7 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v11",
    brand: "Sea-Doo",
    model: "Spark",
    year: 2023,
    type: "Jetski",
    transmission: "Automat",
    fuel: "Bensin",
    seats: 2,
    pricePerDay: 690,
    rating: 4.7,
    reviews: 31,
    distanceKm: 2.4,
    verified: true,
    available: true,
    color: "#6FC2C0",
    location: "Centrum, Växjö",
    owner: { name: "Oskar Lund", memberSince: "2023", rating: 4.7, trips: 67, business: false },
    description: "Lättkörd och smidig jetski som passar både nybörjare och erfarna. Levereras med flytväst.",
    features: ["Flytväst ingår", "Förvaringsfack", "Halkfritt däck"],
    rules: ["Rökning ej tillåten", "Förarbevis krävs", "Minst 18 år", "Återlämnas tankad"],
    insurance: "Fullständigt skydd med självrisk 6 000 kr ingår i varje bokning via Movanta Skydd.",
  },
  {
    id: "v12",
    brand: "Adria",
    model: "Matrix",
    year: 2021,
    type: "Husbil",
    transmission: "Manuell",
    fuel: "Diesel",
    seats: 4,
    pricePerDay: 990,
    rating: 4.8,
    reviews: 27,
    distanceKm: 4.0,
    verified: true,
    available: true,
    color: "#D1785A",
    location: "Dalbo, Växjö",
    owner: { name: "Fleet Partner AB", memberSince: "2020", rating: 4.7, trips: 340, business: true },
    description: "Rymlig husbil för hela familjen, komplett med kök, sovplatser och våtutrymme. Redo för semesteräventyret.",
    features: ["Kök med kylskåp", "4 sovplatser", "Markis", "Solpanel"],
    rules: ["Rökning ej tillåten", "Husdjur tillåtet", "Max 200 mil/vecka", "Återlämnas tömd och rengjord"],
    insurance: "Fullständigt skydd med självrisk 6 500 kr ingår i varje bokning via Movanta Skydd.",
  },
];

export type Company = {
  name: string;
  orgNumber: string;
  description: string;
  verified: boolean;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  createdAt: string;
  verified: boolean;
  licenseStatus: "Verifierat" | "Väntar" | "Saknas";
  // Years the user has personally held a driving licence — used to check
  // eligibility against a listing's minimum requirement at booking time.
  licenseYears?: number;
  // A single company profile the user can optionally publish listings under.
  // Simplified on purpose: this prototype has no multi-user org accounts, so
  // "authorisation" is just "you created this company under your own login."
  company?: Company;
  // Absent for regular accounts. "admin" unlocks the driving-licence
  // verification dashboard — not a real auth system, just a client-side flag
  // on this prototype's one User table.
  role?: "admin";
};

// A user's submission of driving-licence photos for an admin to review.
// licenseStatus on User is the current headline state; this is the append-
// only history of submissions behind it (so a rejection can be resubmitted
// without losing the record of the earlier attempt).
export type VerificationRequestStatus = "pending" | "approved" | "rejected";

export type VerificationRequest = {
  id: string;
  userId: string;
  // Always exactly [front, back] — both are required to submit.
  photos: [string, string];
  licenseYears?: number;
  status: VerificationRequestStatus;
  submittedAt: string;
  reviewedAt?: string;
};

// An owner's submission of a newly-published (or re-published) listing for
// admin review. Same append-only-history shape as VerificationRequest, but
// with no photos of its own — the admin reviews the listing's existing
// photos/details directly (see listings.ts Listing), not a separate upload.
export type ListingReviewRequestStatus = "pending" | "approved" | "rejected";

export type ListingReviewRequest = {
  id: string;
  listingId: string;
  ownerId: string;
  status: ListingReviewRequestStatus;
  submittedAt: string;
  reviewedAt?: string;
};

export type Booking = {
  id: string;
  bookingNumber: string;
  userId: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  pickupTime: string;
  returnTime: string;
  driverPhone: string;
  rentalPrice: number;
  serviceFee: number;
  protectionFee: number;
  totalPrice: number;
  // "Väntar" = a request has been sent to the vehicle's owner and is
  // awaiting their approval — only used for user-created listings, which
  // have a real owner account to request from. Curated mock vehicles have
  // no owner and skip straight to "Kommande".
  status: "Väntar" | "Kommande" | "Aktiv" | "Avslutad" | "Avbokad";
  createdAt: string;
  // Owner user id to request approval from — set only when the booked
  // vehicle is a user-created listing (see listings.ts ownerId).
  ownerId?: string;
  // Prototype e-signature: each side signs independently once the booking
  // is confirmed. The chat only unlocks once both are set.
  renterSignedAt?: string | null;
  ownerSignedAt?: string | null;
  // Owner-submitted pre-handover documentation of the vehicle's condition
  // for this specific rental (see BookingRoom.tsx) — distinct from the
  // per-listing documentation captured once at listing creation.
  conditionReport?: ConditionReport;
  // Frozen rental-agreement PDF (data:application/pdf;base64,...), generated
  // exactly once — the moment the second signature lands (see AppShell.tsx
  // signContract) — and never regenerated afterward. Both parties, and later
  // booking history, always see this identical document.
  contractPdf?: string;
  // Set by the owner's "mark rental as completed" action once the rental
  // period has ended and both signatures are present.
  completedAt?: string;
};

export type ConditionReport = {
  photos: string[];
  mileage: number | null;
  notes: string;
  submittedAt: string;
};

export type Message = {
  id: string;
  bookingId: string;
  senderId: string;
  text: string;
  createdAt: string;
};

const USERS_KEY = "movanta_users";
const BOOKINGS_KEY = "movanta_bookings";
const MESSAGES_KEY = "movanta_messages";
const VERIFICATIONS_KEY = "movanta_verifications";
const LISTING_REVIEWS_KEY = "movanta_listing_reviews";
const SESSION_KEY = "movanta_session";
const SEEDED_KEY = "movanta_seeded";

// Wipes every account, listing, booking, message and review request — the
// whole prototype database. Clearing SEEDED_KEY means the demo accounts
// (Alex, Test Renter, Admin, Sofia) are reseeded fresh on the next load.
// "movanta_listings" is listings.ts's own key, referenced by string here
// rather than importing that module, since listings.ts already imports
// from this file and a reverse import would be circular.
export function resetAllData() {
  if (typeof window === "undefined") return;
  [USERS_KEY, BOOKINGS_KEY, MESSAGES_KEY, VERIFICATIONS_KEY, LISTING_REVIEWS_KEY, SESSION_KEY, SEEDED_KEY, "movanta_listings"].forEach((key) =>
    window.localStorage.removeItem(key)
  );
}

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function uid(prefix = "id"): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

// Local calendar date as YYYY-MM-DD. Deliberately NOT `new
// Date().toISOString().slice(0, 10)` — toISOString() converts to UTC first,
// which is a day behind the user's actual calendar date for part of the day
// in any timezone ahead of UTC (e.g. Sweden, UTC+1/+2). Every date-only
// comparison (listing availability windows, booking date pickers) needs to
// agree with what the user typed into a plain <input type="date">, which is
// always local — so this is the one function that should be used for "today"
// wherever a listing/booking date gets compared against "now."
export function localTodayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function bookingNumber(): string {
  return `MVT-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function formatSEK(n: number): string {
  return new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(Math.round(n)) + " kr";
}

export function getUsers(): User[] {
  return read<User[]>(USERS_KEY, []);
}

export function saveUsers(users: User[]) {
  write(USERS_KEY, users);
}

// Reconciles date-driven lifecycle on every read: a confirmed booking
// ("Kommande") becomes "Aktiv" once its start date arrives. This is the only
// automatic transition — "Avslutad" is always a deliberate owner action (see
// AppShell.tsx completeBooking), since "the customer has been served" is a
// real-world event, not something a date alone can assert. Persists the
// upgrade (if any) so every caller — there are many raw getBookings() call
// sites — benefits without duplicating this logic.
export function getBookings(): Booking[] {
  const all = read<Booking[]>(BOOKINGS_KEY, []);
  const today = localTodayISO();
  let changed = false;
  const reconciled = all.map((b) => {
    if (b.status === "Kommande" && today >= b.startDate) {
      changed = true;
      return { ...b, status: "Aktiv" as const };
    }
    return b;
  });
  if (changed) write(BOOKINGS_KEY, reconciled);
  return reconciled;
}

// Fails soft (like listings.ts saveListings) instead of throwing: bookings
// now carry a contract PDF data URL, a large-enough payload that a
// QuotaExceededError is a realistic outcome on a device with many past
// rentals, and callers (signContract, completeBooking) need to show a
// storage-full toast rather than crash mid-signature.
export function saveBookings(bookings: Booking[]): boolean {
  if (typeof window === "undefined") return false;
  try {
    window.localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return true;
  } catch {
    return false;
  }
}

export function addBooking(booking: Booking) {
  const all = getBookings();
  all.unshift(booking);
  saveBookings(all);
}

export function getMessages(): Message[] {
  return read<Message[]>(MESSAGES_KEY, []);
}

export function saveMessages(messages: Message[]) {
  write(MESSAGES_KEY, messages);
}

export function getMessagesByBooking(bookingId: string): Message[] {
  return getMessages()
    .filter((m) => m.bookingId === bookingId)
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));
}

export function addMessage(message: Message) {
  const all = getMessages();
  all.push(message);
  saveMessages(all);
}

export function getVerificationRequests(): VerificationRequest[] {
  return read<VerificationRequest[]>(VERIFICATIONS_KEY, []);
}

export function saveVerificationRequests(requests: VerificationRequest[]) {
  write(VERIFICATIONS_KEY, requests);
}

export function addVerificationRequest(request: VerificationRequest) {
  const all = getVerificationRequests();
  all.unshift(request);
  saveVerificationRequests(all);
}

export function updateVerificationRequest(id: string, patch: Partial<VerificationRequest>) {
  const all = getVerificationRequests();
  const idx = all.findIndex((r) => r.id === id);
  if (idx === -1) return;
  all[idx] = { ...all[idx], ...patch };
  saveVerificationRequests(all);
}

export function getListingReviewRequests(): ListingReviewRequest[] {
  return read<ListingReviewRequest[]>(LISTING_REVIEWS_KEY, []);
}

export function saveListingReviewRequests(requests: ListingReviewRequest[]) {
  write(LISTING_REVIEWS_KEY, requests);
}

export function addListingReviewRequest(request: ListingReviewRequest) {
  const all = getListingReviewRequests();
  all.unshift(request);
  saveListingReviewRequests(all);
}

export function updateListingReviewRequest(id: string, patch: Partial<ListingReviewRequest>) {
  const all = getListingReviewRequests();
  const idx = all.findIndex((r) => r.id === id);
  if (idx === -1) return;
  all[idx] = { ...all[idx], ...patch };
  saveListingReviewRequests(all);
}

export function getSession(): { userId: string } | null {
  if (typeof window === "undefined") return null;
  const local = window.localStorage.getItem(SESSION_KEY);
  if (local) return JSON.parse(local);
  const session = window.sessionStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
}

export function setSession(userId: string, remember: boolean) {
  const payload = JSON.stringify({ userId });
  if (remember) {
    window.localStorage.setItem(SESSION_KEY, payload);
    window.sessionStorage.removeItem(SESSION_KEY);
  } else {
    window.sessionStorage.setItem(SESSION_KEY, payload);
    window.localStorage.removeItem(SESSION_KEY);
  }
}

export function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
  window.sessionStorage.removeItem(SESSION_KEY);
}

export function seedDemoData() {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(SEEDED_KEY)) return;

  const demoUser: User = {
    id: "demo_user",
    firstName: "Alex",
    lastName: "Demo",
    email: "demo@movanta.se",
    phone: "070-123 45 67",
    password: "demo1234",
    createdAt: "2025-11-02T10:00:00.000Z",
    verified: true,
    // No account is pre-verified anymore — every user, including the seed
    // accounts, has to submit driving-licence photos and get admin approval
    // before they can book.
    licenseStatus: "Saknas",
    licenseYears: 5,
  };
  // A second permanent account so a booking/listing flow between two real
  // users can be tested by logging out and back in within the same browser
  // — no separate profile or Incognito window (and its isolated storage)
  // required.
  const testRenterUser: User = {
    id: "test_renter_user",
    firstName: "Test",
    lastName: "Renter",
    email: "test.renter@movanta.se",
    phone: "070-000 00 01",
    password: "test1234",
    createdAt: "2025-11-02T10:00:00.000Z",
    verified: true,
    licenseStatus: "Saknas",
    licenseYears: 3,
  };
  // Dev/admin account: reviews driving-licence verification requests from
  // the admin dashboard. Not gated behind licence verification itself.
  const adminUser: User = {
    id: "admin_user",
    firstName: "Admin",
    lastName: "Movanta",
    email: "admin@movanta.se",
    phone: "",
    password: "admin1234",
    createdAt: "2025-11-02T10:00:00.000Z",
    verified: true,
    licenseStatus: "Verifierat",
    licenseYears: 10,
    role: "admin",
  };
  // A brand-new account with a licence submission already sitting in the
  // queue, so the admin dashboard has something to review without first
  // registering a throwaway account and uploading photos by hand.
  const pendingApplicantUser: User = {
    id: "pending_license_user",
    firstName: "Sofia",
    lastName: "Ny",
    email: "ny.medlem@movanta.se",
    phone: "070-555 66 77",
    password: "ny12345",
    createdAt: "2026-08-01T09:00:00.000Z",
    verified: false,
    licenseStatus: "Väntar",
    licenseYears: 2,
  };
  saveUsers([demoUser, testRenterUser, adminUser, pendingApplicantUser]);

  const placeholderLicensePhoto = (label: string) =>
    `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200"><rect width="100%" height="100%" fill="#2a2a2e"/><text x="50%" y="50%" font-family="sans-serif" font-size="16" text-anchor="middle" fill="#ddd">${label}</text></svg>`
    )}`;
  saveVerificationRequests([
    {
      id: uid("ver"),
      userId: "pending_license_user",
      photos: [placeholderLicensePhoto("Körkort fram (mock)"), placeholderLicensePhoto("Körkort bak (mock)")],
      licenseYears: 2,
      status: "pending",
      submittedAt: "2026-08-02T14:00:00.000Z",
    },
  ]);

  const demoBookings: Booking[] = [
    {
      id: uid("bk"),
      bookingNumber: bookingNumber(),
      userId: "demo_user",
      vehicleId: "v1",
      startDate: "2026-08-10",
      endDate: "2026-08-12",
      pickupTime: "10:00",
      returnTime: "18:00",
      driverPhone: "070-123 45 67",
      rentalPrice: 1380,
      serviceFee: 99,
      protectionFee: 149,
      totalPrice: 1628,
      status: "Kommande",
      createdAt: "2026-07-28T09:00:00.000Z",
    },
    {
      id: uid("bk"),
      bookingNumber: bookingNumber(),
      userId: "demo_user",
      vehicleId: "v5",
      startDate: "2026-06-14",
      endDate: "2026-06-16",
      pickupTime: "09:00",
      returnTime: "17:00",
      driverPhone: "070-123 45 67",
      rentalPrice: 900,
      serviceFee: 79,
      protectionFee: 129,
      totalPrice: 1108,
      status: "Avslutad",
      createdAt: "2026-06-01T09:00:00.000Z",
    },
  ];
  saveBookings(demoBookings);
  window.localStorage.setItem(SEEDED_KEY, "1");
}
