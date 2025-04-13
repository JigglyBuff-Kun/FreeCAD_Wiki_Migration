---
title: PartDesign Clonă
---
|  |
| --- |
| PartDesign Clone |
| poziția meniului |
| Part Design → Create a clone |
| Ateliere |
| [PartDesign](/PartDesign_Workbench/ro "PartDesign Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| 0.17 |
| A se vedea, de asemenea, |
| [Draft Clone](/Draft_Clone/ro "Draft Clone/ro") |
|  |

## Descriere

**PartDesign Clone** creează o copie legată a unui obiect selectat. Cele mai multe tipuri de obiecte sunt acceptate, atâta timp cât sunt solide singulare. Utilizarea principală a Clonei PartDesign este de a folosi un obiect creat într-un alt Atelier de lucru pentru o funcție [PartDesign Boolean](/PartDesign_Boolean "PartDesign Boolean") . Poate fi pur și simplu utilizat pentru a crea copii corelate.

![Clone of the inner gear while being translated in 3D space as an independent object](/images/Clone.png)

Clone of the inner gear while being translated in 3D space as an independent object

## Cum se folosește

1. In arborescența Model, selectați obiectul de clonat.
2. Apăsați butonul ![](/images/PartDesign_Clone.png) **Create a clone**.

## Proprietăți

* Date**Base Feature**: definește obiectul origina pe care se bazează clona. Pentru a în locuit, apăsați butonul ... pentru a obține o listă a obiectelor disponibile.
* Date**Placement**: definește orientarea și poziția clonei ăn spașiul 3D. A se vedea[Placement](/Placement "Placement").
* Date**Label**: numele/eticheta dată obiectului Clonă. Poate fi schimbat dacă vă este necesar.

## Limite

* Numai un singur obiect poate fi folosit pentru o clona PartDesign.
* Sunt acceptate numai obiectele care constau dintr-un singur solid. Prin urmare, [compounds](/Glossary#Compound "Glossary") like [Part container](/Std_Part "Std Part"), [Part Compound](/Part_Compound/ro "Part Compound/ro") or [Draft Array](/Draft_Array "Draft Array") are not supported.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Clone/ro&oldid=1424802>"