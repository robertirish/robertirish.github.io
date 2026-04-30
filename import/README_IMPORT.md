# Paragon import files (PedalPCB build doc)

Source: [Paragon parts list (PDF)](https://docs.pedalpcb.com/project/Paragon.pdf) — **metal film 1/4 W resistors**, film box caps per footprint notes, 100 pF **ceramic** (C2, C13), radial **electrolytics** (25 V min, 5 mm), JRC/NJM **4580** ×2, **TC1044** ×1, diodes as listed.

The agent **cannot** add items to your live shopping carts. Upload these CSVs in your browser to each distributor’s **BOM / myLists** tool.

## Files (build doc = default)

| File | Use |
|------|-----|
| **`mouser-bom-paragon-builddoc.csv`** | Mouser BOM Tool: map **Manufacturer Part Number** + **Quantity**. |
| **`digikey-bom-paragon-builddoc.csv`** | Digi-Key myLists / BOM import. |
| **`tayda-quick-order-template.csv`** | One line per part: fill **Tayda_SKU** from [taydaelectronics.com](https://www.taydaelectronics.com) or **Paragon_Labels_Tayda.pdf**; paste into Tayda quick order. |

## R3 / R17 — standard vs high gain (BOM note)

- **Standard gain:** R3 and R17 = **1 kΩ** → you need **4×** 1 kΩ total (R3, R17, R9, R23).
- **High-gain option:** R3 and R17 = **100 kΩ** → order **2×** 100 kΩ **and** **2×** 1 kΩ (for R9 and R23 only).

The build-doc CSVs include **4×** `MFR-25FTE52-1K` **and** **2×** `MFR-25FTE52-100K`. For **one** build, **delete or set qty to 0** for the pair you do not need (either drop two of the 1 kΩ lines if using 100 kΩ for R3/R17, or drop the 100 kΩ line if using 1 kΩ for R3/R17).

## Manual lines (same as PDF page 2)

After import, add **pots, trimmers, DIP, header, enclosure, jacks, LED, wire** per the same PDF:

- VOL1 / VOL2 — **A100K** 16 mm RA PCB  
- TONE1 / TONE2 — **B25K** 16 mm RA PCB  
- DRIVE1 / DRIVE2 — **B100K** 16 mm RA PCB  
- PRES1 / PRES2 — **50 kΩ** trim (3362P-type per BOM)  
- DIP — **4-position** DIP switch  
- PIN HEADER — **9-pin** 2.54 mm male  

Match **footprint / pinout** to your Paragon PCB revision.

## Verify at checkout

- **Manufacturer Part Numbers** resolve in the BOM tool (substitute equivalent metal film / WIMA / Nichicon if a line is EOL).
- **MA856** — confirm stock; use PedalPCB community subs if needed.
- **Film box sizes** — BOM lists sizes such as 7.2 × 2.5 mm; pick caps with matching **lead spacing** for your board.

## Optional: warmer carbon film / comp BOM

For the alternate “warmer” resistor types (carbon film / comp) and optional cap tweaks, see **`paragon-warm-parts-bom.md`** and the secondary files **`mouser-bom-paragon-warmer.csv`** / earlier warmer digikey export if still present — those are **not** the stock build doc.
