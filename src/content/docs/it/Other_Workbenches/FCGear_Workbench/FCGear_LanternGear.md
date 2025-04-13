---
title: FCGear Ingranaggio a lanterna
---

|                                                      |
| ---------------------------------------------------- |
| Ingranaggio a lanterna                               |
| Posizione nel menu                                   |
| FCGear → Create a Lantern gear                       |
| Ambiente                                             |
| [FCGear](/FCGear_Workbench/it "FCGear Workbench/it") |
| Avvio veloce                                         |
| None                                                 |
| Introdotto nella versione                            |
| v0.16                                                |
| Vedere anche                                         |
| _Nessuno_                                            |
|                                                      |

## Descrizione

La dentatura dell'ingranaggio a lanterna è una forma speciale di dentatura cicloidale in cui il cerchio di rotolamento e il cerchio primitivo hanno la stessa dimensione. Inoltre, in un cambio i denti della ruota più grande sono sostituiti da cilindri. La piccola ruota è dotata di un ingranaggio cicloide. Ciò si traduce in un ingranaggio unilaterale. Gli ingranaggi delle lanterne possono essere solo dentati diritti.

Poiché la loro costruzione è molto semplice, sono tra le più antiche forme di ingranaggi. Gli ingranaggi delle lanterne vengono utilizzati quando sono richiesti rapporti di trasmissione elevati, ad esempio negli ingranaggi dei mulini o gru per la movimentazione del legname.

L'ingranaggio a lanterna combinato con una catena a rulli rappresenta un'alternativa economica e robusta alle trasmissioni a pignone e cremagliera. Muovendo la catena tesa tangenzialmente lungo la ruota dentata, il movimento lineare della catena viene convertito in un movimento rotatorio della ruota. Viceversa, il movimento lineare della catena può essere ottenuto anche dal moto rotatorio della ruota dentata (moto o bicicletta).

![](/images/Lantern-Gear_example.png)

Above: Lantern gear

## Usage

1. Switch to the ![](/images/FCGear_workbench_icon.svg) [FCGear Workbench](/FCGear_Workbench "FCGear Workbench").
2. There are several ways to invoke the command:
   - Press the ![](/images/FCGear_LanternGear.svg) [Lantern Gear](/FCGear_LanternGear "FCGear LanternGear") button in the toolbar.
   - Select the **Gear → ![](/images/FCGear_LanternGear.svg) Lantern Gear** option from the menu.
3. Change the gear parameter to the required conditions (see [Properties](#Properties)).

## Properties

### Data

An FCGear LanternGear object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

accuracy

- Dati**num_profiles** (`Integer`): Default is `10`. The value normally does not need to be changed.

base

- Dati**bolt_radius** (`Length`): Default is `1 mm`. Diameter of the cylinder on the rotating disc which functions as a second "gear wheel".
- Dati**height** (`Length`): Default is `5 mm`. Value of the gear width.
- Dati**module** (`Length`): Default is `1 mm`. Module is the ratio of the reference diameter of the gear divided by the number of teeth (see [Notes](#Notes)).

gear_parameter

- Dati**teeth** (`Integer`): Default is `15`. Number of teeth.

tolerance

- Dati**head** (`Float`): Default is `0`.

version

- Dati**version** (`String`):

## Notes

- _module_: Using ISO (International Organization for Standardization) guidelines, Module size is designated as the unit representing gear tooth-sizes. Module (m): m = 1 (p = 3.1416), m = 2 (p = 6.2832), m = 4 (p = 12.566). If you multiply Module by Pi, you can obtain Pitch (p). Pitch is the distance between corresponding points on adjacent teeth.

## Useful formulas

- _addendum diameter_ = _module_ \* _(teeth +2)_
- _pitch diameter_ = _module_ \* _teeth_
- _axle base_ = *pitch diameter (lantern gear 1 + 2)* : 2

Retrieved from "<http://wiki.freecad.org/index.php?title=FCGear_LanternGear/it&oldid=1207942>"
