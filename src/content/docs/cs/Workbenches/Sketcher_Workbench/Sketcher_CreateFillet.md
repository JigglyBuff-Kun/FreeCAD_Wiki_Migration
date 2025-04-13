---
title: Skicář Zaoblení
---
|  |
| --- |
| Skicář Zaoblení |
| Umístění Menu |
| Náčrt → Skicář Konstrukce → Vytvořit zaoblení |
| Pracovní stoly |
| [Skicář](/Sketcher_Workbench/cs "Sketcher Workbench/cs") |
| Výchozí zástupce |
| F |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Tento nástroj vytvoří zaoblení mezi dvěma přímkami, které se spojí v bodě. Aktivuje se tento nástroj a potom se vyberou obě přímky nebo se klikne na rohový bod.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): If two straight edges connected by a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") are filleted or chamfered, the corner point can optionally be preserved. The tool then adds a [Point object](/Sketcher_CreatePoint "Sketcher CreatePoint") that has a [Point on object constraint](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") with both edges. Constraints connected to the corner point are transferred to the new point object.

![](/images/SketcherCreateFilletExample.png)

## Použití

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

* Vyberte vrchol, kde se dotýkají dvě přímky nebo klikněte na dvě dotýkající se přímky. Vzdálenost mezi kliknutím a vrcholem určuje poloměr zaoblení.
* Stisknutí klávesy Esc nebo kliknutí pravým tlačítkem myši přeruší nebo ukončí funkci nástroje.

## Notes

* The construction geometry arc of a chamfer is not visible outside the sketch. It cannot be deleted without breaking the geometry of the chamfer.
* Some ([conic](/Sketcher_Workbench#Sketcher_CompCreateConic "Sketcher Workbench")) curves may need to be [trimmed](/Sketcher_Trimming "Sketcher Trimming") before they can be filleted.
* The fillet radius depends on the selection method. If a [Coincident constraint](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") connecting two straight edges is selected, the fillet radius is derived from the length of the shortest edge. If two edges are selected the radius is the distance from the first clicked point to the (extended) intersection of the edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateFillet/cs&oldid=1413872>"