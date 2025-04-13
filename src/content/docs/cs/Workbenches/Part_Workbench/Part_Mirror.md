---
title: Díl Zrcadlení
---
|  |
| --- |
| Díl Zrcadlení |
| Umístění Menu |
| Díl -> Zrcadlení |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs"), Kompletace |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

## Úvod

'Zrcadlit objekt' - Tento nástroj vytváří nový objekt, který je odrazem (obrazem) původního objektu (zdroje). Obraz objektu je vytvořen za rovinou zrcadlení. Rovina zrcadlení může být standardní rovina (**XY**, **YZ**, or **XZ**) nebo jakákoliv rovina paralení ke standardní rovině.

Příklad:

![](/images/PARTMirrorBeforev11.png)

Before

![](/images/PARTMirrorAfterv11.png)

After mirrored through YZ plane

## Použití

![](/images/PartMirroring_Scr1.png)

Ze seznamu vyberte zdrojový objekt.
Vyberte standardní **Mirror plane** z rozbalovacího seznamu.

When the select button label says Selecting you are in reference selection mode and there is a selection gate in effect, which disallows the selection of unsupported reference objects. Click the button to toggle the selection gate off, the button label then changes to Select reference.

The mirror plane is defined by a Údaje**Normal** (direction) and a Údaje**Base** (position). When the Údaje**Mirror Plane** property contains a reference object these properties are made read-only as they are then computed based on that object. The plane is infinite even if the reference object is not.

A reference object can be a planar face, such as the face of a [Part Box](/Part_Box "Part Box"), a circular edge, a [Datum Plane](/PartDesign_Plane "PartDesign Plane"), an [origin plane](/App_OriginGroupExtension "App OriginGroupExtension") of a [Std Part](/Std_Part "Std Part") container, or any object with a single planar face or single circular edge. There is also support for [Links](/App_Link "App Link"). Note, however, that B-spline surfaces, such as [ruled surfaces](/Part_RuledSurface "Part RuledSurface") or [loft faces](/Part_Loft "Part Loft") are not supported.

## Options

## Volby

Políčka **Základní bod** mohou být použity pro posunutí roviny zrcadlení vzhledem ke standardní rovině zdrcadlení. Pouze jedno z políček **X**, **Y**, nebo **Z** je platné pro danou standardní rovinu.

| Standardní rovina | Základní políčko | Vliv |
| --- | --- | --- |
| **XY** | **Z** | Posune rovinu zrcadlení podle osy Z. |
| **XY** | **X**, **Y** | Žádný vliv. |
| **XZ** | **Y** | Posune rovinu zrcadlení podle osy Y. |
| **XZ** | **X**, **Z** | Žádný vliv. |
| **YZ** | **X** | Posune rovinu zrcadlení podle osy X. |
| **YZ** | **Y**, **Z** | Žádný vliv. |

## Notes

## Omezení

* Jiné roviny zrcadlení (např. to co nejsou paralelní se standardními rovinami) nejsou podporovány (k verzi FC 0.13).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Mirror/cs&oldid=1336366>"