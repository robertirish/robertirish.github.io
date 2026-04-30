# Paragon (King of Tone style) — stock reference vs. warmer build

This document is for **PedalPCB Paragon**–style builds. **Stock values** are taken from the official parts list in [PedalPCB Paragon documentation](https://docs.pedalpcb.com/project/Paragon.pdf) (revised 11/9/21). It does **not** include DIP-switch mods, relay clipping swaps, or other **switch-based** modifications—only resistor types (carbon film / carbon composition) and capacitor value/material choices aimed at a slightly **warmer** character.

**Google Drive:** The linked build resources folder could not be imported automatically here. If your PDFs (e.g. Paragon Mods Tutorial) list different “warm” values, treat those as overrides—this sheet stays aligned with the Paragon BOM plus common non-switch tonal tweaks.

---

## How to use this

1. **Stock column:** Order these if you want the documented stock Paragon/KoT-clone baseline (metal film + listed cap types is typical).
2. **Warmer build column:** Substitutions that tend toward a rounder, less clinical sound (subjective; socket film caps if you like to experiment).
3. **Swap back:** Keep one full set of **stock-value** parts on hand (especially caps and R3/R17) so you can return to the baseline without reordering.

**Gain options:** R3 and R17 are **1 kΩ standard** and **100 kΩ “high gain”** per the official BOM. Pick one set per channel; that is not a “switch mod,” it is the normal dual-option resistor pair.

---

## Resistors (1/4 W)

| Ref   | Stock value | Stock type (typical build) | Warmer build | Qty | Notes |
|-------|-------------|-----------------------------|--------------|-----|--------|
| R1    | 1 MΩ        | Metal film                  | **Carbon film** | 1 | |
| R2    | 1 MΩ        | Metal film                  | **Carbon film** | 1 | |
| R3    | 1 kΩ or 100 kΩ | Metal film             | **Carbon film** (same value as stock choice) | 1 | 100 kΩ = higher gain option |
| R4    | 33 kΩ       | Metal film                  | **Carbon film** | 1 | |
| R5    | 27 kΩ       | Metal film                  | **Carbon film** | 1 | |
| R6    | 10 kΩ       | Metal film                  | **Carbon comp** (or carbon film if comps unavailable) | 1 | Often called out in KoT-style discussions for the first gain stage |
| R7    | 220 kΩ      | Metal film                  | **Carbon film** | 1 | |
| R8    | 6.8 kΩ      | Metal film                  | **Carbon film** | 1 | |
| R9    | 1 kΩ        | Metal film                  | **Carbon comp** (or carbon film) | 1 | |
| R10   | 6.8 kΩ      | Metal film                  | **Carbon comp** (or carbon film) | 1 | |
| R11   | 1 MΩ        | Metal film                  | **Carbon film** | 1 | |
| R12   | 47 kΩ       | Metal film                  | **Carbon film** | 1 | |
| R13   | 47 kΩ       | Metal film                  | **Carbon film** | 1 | |
| R14   | 4.7 kΩ      | Metal film                  | **Carbon film** | 1 | |
| R15   | 1 MΩ        | Metal film                  | **Carbon film** | 1 | |
| R16   | 1 MΩ        | Metal film                  | **Carbon film** | 1 | |
| R17   | 1 kΩ or 100 kΩ | Metal film             | **Carbon film** (same value as stock choice) | 1 | Pair with R3 choice |
| R18   | 33 kΩ       | Metal film                  | **Carbon film** | 1 | |
| R19   | 27 kΩ       | Metal film                  | **Carbon film** | 1 | |
| R20   | 10 kΩ       | Metal film                  | **Carbon comp** (or carbon film) | 1 | Mirrors R6 on channel 2 |
| R21   | 220 kΩ      | Metal film                  | **Carbon film** | 1 | |
| R22   | 6.8 kΩ      | Metal film                  | **Carbon film** | 1 | |
| R23   | 1 kΩ        | Metal film                  | **Carbon comp** (or carbon film) | 1 | |
| R24   | 6.8 kΩ      | Metal film                  | **Carbon comp** (or carbon film) | 1 | |
| R25   | 1 MΩ        | Metal film                  | **Carbon film** | 1 | |
| R26   | 4.7 kΩ      | Metal film                  | **Carbon film** | 1 | |

### Resistor shopping summary (warmer build)

- **Carbon composition:** R6, R9, R10, R20, R23, R24 — **6×** total (three positions × two identical channels).
- **Carbon film:** All remaining resistor positions (**20×**), using your chosen R3/R17 values (order **two** of whichever standard vs. high-gain values you will solder).

To **keep stock values for A/B swaps**, add **one extra** R3 and R17 in the *other* value (e.g. if you build 1 kΩ, keep two 100 kΩ for experiments).

---

## Capacitors

Sizes follow Paragon PCB silkscreen / BOM (e.g. 7.2 × 2.5 mm box film where specified).

| Ref   | Stock value | Stock type (BOM) | Warmer-build suggestion | Qty | Notes |
|-------|-------------|------------------|-------------------------|-----|--------|
| C1    | 22 nF       | Film             | **22 nF polypropylene (PP) box film** — or try **27 nF / 33 nF** film for slightly fuller low end | 1 | Larger input cap passes more bass (warmer/heavier); **keep 22 nF** for stock voicing |
| C2    | 100 pF      | Ceramic          | **100 pF C0G/NP0 ceramic or film** — or **82 pF / 68 pF** to soften extreme highs in the feedback network | 1 | Smaller pF here can gently darken the stage (subtle) |
| C3    | 10 nF       | Film             | **10 nF film** (PP or PET); optional **4.7 nF–10 nF** if you want less low-mid push in that node | 1 | Prefer stock 10 nF first |
| C4    | 10 nF       | Film             | Same as C3 | 1 | |
| C5    | 100 nF      | Film             | **100 nF film**; optional **220 nF** only if you confirm PCB intent (some builders use larger for slightly softer HF) | 1 | When unsure, **match stock 100 nF** |
| C6    | 10 nF       | Film             | Same as C3 | 1 | |
| C7    | 10 nF       | Film             | Same as C3 | 1 | |
| C8    | 1 µF        | Film             | **1 µF film** stock — for **warmer / fuller low end** try **2.2 µF film** (same voltage rating, fits footprint) | 1 | Classic “coupling cap bump” |
| C9    | 1 µF        | Electrolytic     | **Same value (1 µF)** — audio-grade **low-ESR** if you want refinement without changing voicing | 1 | Same µF = stock EQ point |
| C10   | 10 µF       | Electrolytic     | **10 µF** — audio-grade optional | 1 | Match polarity to PCB |
| C11   | 100 µF      | Electrolytic     | **100 µF** — audio-grade optional | 1 | Power reservoir |
| C12   | 22 nF       | Film             | Match **C1** choice for symmetry between channels | 1 | |
| C13   | 100 pF      | Ceramic          | Match **C2** | 1 | |
| C14   | 10 nF       | Film             | Match **C3** | 1 | |
| C15   | 10 nF       | Film             | Match **C3** | 1 | |
| C16   | 100 nF      | Film             | Match **C5** | 1 | |
| C17   | 10 nF       | Film             | Match **C3** | 1 | |
| C18   | 10 nF       | Film             | Match **C3** | 1 | |
| C19   | 1 µF        | Film             | Match **C8** | 1 | |
| C20   | 1 µF        | Electrolytic     | Match **C9** | 1 | |
| C21   | 10 µF       | Electrolytic     | Match **C10** | 1 | |
| C22   | 10 µF       | Electrolytic     | Match **C10/C21** | 1 | |

### Keeping “original spec” caps for swaps

Order **at least one full stock set**: C1/C12 **22 nF** film, C2/C13 **100 pF** ceramic (or C0G), all **10 nF / 100 nF / 1 µF** films per BOM, and electrolytics at **1 µF / 10 µF / 100 µF** as listed. For warm experiments, add the alternate films (**2.2 µF** for C8/C19 if desired; optional **27–33 nF** for inputs; optional **82–68 pF** for C2/C13).

---

## Non-resistor/cap parts (unchanged)

Per Paragon BOM: **IC1–IC2** JRC4580D, **IC3** TC1044SCPA, diodes as listed (MA856, 1S1588, 1N5817), **VOL1–2** A100K, **TONE1–2** B25K, **DRIVE1–2** B100K, **PRES1–2** 50k trim (3362P-style), **DIP** switch, **9-pin header**, enclosure/hardware as build doc.

If you are **not** using switch mods, you can still populate the stock DIP per instructions or leave positions per your preference—the warm bill of materials above does not rely on it.

---

## Order checklist by “cart” (example split)

| Cart | Contents |
|------|----------|
| **Stock reference** | Full stock-value resistor set (metal film OK) + full stock-value cap set for rollback |
| **Carbon film** | All positions marked carbon film in the table (quantities by value from the 26 rows) |
| **Carbon comp** | R6, R9, R10, R20, R23, R24 (6 pieces; match wattage/voltage to your supplier’s 1/4 W parts) |
| **Warm film caps** | PP/PET films for C1, C3–C8, C12–C19 per warmer column + optional 2.2 µF for C8/C19 |
| **Electrolytics** | C9–C11, C20–C22 — same values; upgrade tier optional |

Derive exact **per-value counts** for Tayda (or any vendor) by sorting the **Value** column in the resistor table; duplicates are listed explicitly per reference designator.

---

## Disclaimer

Capacitor “warmth” and carbon composition vs. film are **subjective** and interact with your guitar, amp, and clipping options. Use sockets or spare boards for expensive experiments. Always verify **polarity** on electrolytics and **match the physical footprint** (especially 5 mm vs. 2.5 mm pitch box films) to your PCB revision.
