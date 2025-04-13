---
title: Arch ToggleIfcBrepFlag
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                |
| ---------------------------------------------- |
| Arch ToggleIfcBrepFlag                         |
| poziția meniului                               |
| Arch → Utilities → Toggle Ifc Brep flag        |
| Ateliere                                       |
| [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură                                     |
| _Nici unul_                                    |
| Prezentat în versiune                          |
| -                                              |
| A se vedea, de asemenea,                       |
| _Nici unul_                                    |
|                                                |

## Descriere

Acest instrument permite / dezactivează funcția IfcBrep a unui obiect Arch selectat (valoarea implicită este întotdeauna dezactivată). Dacă indicatorul/steagul este activat la exportul obiectului în format IFC, obiectul va fi exportat ca IfcFacetedBrep, chiar dacă este posibil un export de nivel superior, cum ar fi IfcExtrudedAreaSolid sau IfcBooleanResult. Deși obiectele IfcFacetedBrep sunt mai grele și mai puțin editabile (pierd informații de geometrie cum ar fi istoricul de modelare), ele sunt mai puțin predispuse la erori. În unele cazuri, setarea acestui indicator rezolvă probleme cu obiectele care nu sunt exportate corect atunci când acest indicator nu este setat.

## Cum se folosește

1. Selectați un obiect Arch
2. Selectați meniul pe traseul Arch → Utilities → ![](/images/Arch_ToggleIfcBrepFlag.png) [Toggle IfcBrepFlag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/ro&oldid=1433455>"
