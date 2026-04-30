# Import these Paragon “warmer” parts into distributor carts

This folder has **machine-readable BOMs** you upload to each site’s BOM / quick-order tool. The agent **cannot** log into your accounts or click “Add to cart” for you; use the files below in your browser.

## Mouser

1. Sign in at [mouser.com](https://www.mouser.com) → **Services & Tools** → **BOM Tool** → **Import a new BOM**.
2. Upload `mouser-bom-paragon-warmer.csv` (or copy-paste columns).
3. Map **Manufacturer Part Number** and **Quantity**; set **Customer Part Number** if you want labels on bags.
4. **Delete or zero** lines you do not need: e.g. use **either** `CF14JT1K00` **or** `CF14JT100K` for R3/R17 (or keep both for a swap kit). Set optional `MKS4D032202C00JSSD` to quantity **2** only if you want 2.2 µF warmer coupling caps.
5. Resolve any **no match** lines (obsolete diodes, trimmer, pots — see below).

## Digi-Key

1. [myLists](https://www.digikey.com/en/mylists) / BOM import (or bulk add by manufacturer part number).
2. Upload `digikey-bom-paragon-warmer.csv` (same content as Mouser file; Digi-Key accepts Manufacturer Part Number + quantity).

## Tayda Electronics

Tayda uses **SKU** codes (e.g. `A-2328`), not universal MPN import. There is no reliable public API here; their site also blocks automated scraping.

1. Open `tayda-quick-order-template.csv` — it lists **quantities and descriptions** with an empty **Tayda_SKU** column.
2. Search each part on [taydaelectronics.com](https://www.taydaelectronics.com) (or use your **Paragon_Labels_Tayda.pdf** from Drive) and fill in the SKU column.
3. Use Tayda’s **Quick order** page: paste pairs of **SKU** and **qty** (format shown on their site — often one pair per line).

## Parts to add manually (all sites)

The CSVs intentionally focus on **resistors, caps, ICs, and diodes**. You still need from the [Paragon parts list](https://docs.pedalpcb.com/project/Paragon.pdf):

| Item | Notes |
|------|--------|
| **VOL1, VOL2** | A100K 16 mm right-angle PCB pots |
| **TONE1, TONE2** | B25K 16 mm RA PCB pots |
| **DRIVE1, DRIVE2** | B100K 16 mm RA PCB pots |
| **PRES1, PRES2** | 50k trimmer, 3362P-style per BOM |
| **DIP** | 4-position DIP switch |
| **PIN HEADER** | 9-pin 2.54 mm male header |
| **Enclosure / hardware** | 1590BB per drill template |
| **LEDs / jacks / DC jack / wire** | Per build guide |

Search each distributor for **Alpha** or **TTI/Bourns** 16 mm RA pots that match the Paragon footprint (pin spacing matters).

## Verify before checkout

- **CF14JT*** and **RC07GF*** — confirm Stackpole still active; alternates are usually offered at checkout.
- **MA856** — may be scarce; use substitutions recommended by PedalPCB / your tracing notes.
- **Film cap dimensions** — Paragon BOM calls out box sizes (e.g. 7.2 × 2.5 mm); substitute **same lead spacing** (typically **5 mm** for small films).
- **Optional 2.2 µF** — only if you want the warmer C8/C19 mod; check **height** on the board.

## Stock-only rollback kit

Order **metal film** (e.g. MFR-25 series) at **same values** and **stock film/ceramic values** from the main `paragon-warm-parts-bom.md` if you want A/B comparison parts.
