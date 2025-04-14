---
title: Part Spiegeln
---

|                                                |
| ---------------------------------------------- |
| Part Spiegeln                                  |
| Menüeintrag                                    |
| Part → Spiegelung...                           |
| Arbeitsbereich                                 |
| [Part](/Part_Workbench/de "Part Workbench/de") |
| Standardtastenkürzel                           |
| _Keiner_                                       |
| Eingeführt in Version                          |
| -                                              |
| Siehe auch                                     |
| _Keiner_                                       |
|                                                |

## Beschreibung

**Part Spiegeln** erzeugt ein neues Objekt (Abbild), das eine Spiegelung des ursprünglichen Objekts (Quelle) ist. Das Abbildobjekt wird hinter einer Spiegelebene erzeugt. Die Spiegelebene kann eine Standardebene (**XY**, **YZ** oder **XZ**) oder ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")), unter Verwendung eines Referenzobjekts, eine beliebige Ebene sein.

Ein Beispiel:

![](/images/PARTMirrorBeforev11.png)

Vorher

![](/images/PARTMirrorAfterv11.png)

Nach dem Spiegeln über die YZ-Ebene

## Anwendung

![](/images/PartMirroring_Scr1.png)

1. Wahlweise ein oder mehrere Quellobjekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Mirror.svg) Spiegelung... drücken.
   - Den Menüeintrag **Part → ![](/images/Part_Mirror.svg) Spiegelung...** auswählen.
3. Wurde noch kein Objekt ausgewählt oder soll die Auswahl geändert werden: Ein oder mehrere Objekte in der Liste **Formen** auswählen.
4. Eine der folgenden Möglichkeiten auswählen:
   - Eine vorgegebene **Spiegelebene** in der Ausklappliste auswählen.
   - [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ein Referenzobjekt in der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. Das Referenzobjekt kann eine beliebige ebene Fläche oder kreisförmige Kante sein.
5. Die Schaltfläche OK drücken.
6. Für jedes Quellobjekt wird ein eigenes Part-Mirror-Objekt erstellt.

Wenn die Beschriftung der Auswahlschaltfläche Auswählen anzeigt, ist der Referenz-Auswahlmodus aktiv und es ist eine Auswahlsperre aktiv, die die Auswahl von nicht unterstützten Referenzobjekten verhindert. Die Schaltfläche anklicken, um die Auswahlsperre auszuschalten; die Beschriftung wechselt zu Referenz auswählen.

Die Spiegelebene wird durch eine Daten-Eigenschaft**Normal** (Richtung der Normale) und eine Daten-Eigenschaft**Base** (Grundposition) festgelegt. Wenn die Daten-Eigenschaft**Mirror Plane** (Spiegelebene) ein Referenzobjekt enthält, werden diese Eigenschaften auf schreibgeschützt geändert, da sie dann auf diesem Objekt basierend berechnet werden. Die Ebene ist unendlich, auch wenn das referenzobjekt nicht unendlich ist.

Ein Referenzobjekt kann eine ebene Fläche sein, wie eine Fläche eines [Part-Würfels](/Part_Box/de "Part Box/de"), eine kreisförmige Kante, eine [Bezugsebene](/PartDesign_Plane/de "PartDesign Plane/de"), eine [Ursprungsebene](/App_OriginGroupExtension/de "App OriginGroupExtension/de") eines [Std-Part](/Std_Part/de "Std Part/de")-Containers oder irgendein Objekt mit einer einzelnen ebenen Fläche oder einer einzelnen kreisförmigen Kante. Es werden auch [Link-Objekte](/App_Link/de "App Link/de") unterstützt. Man beachte, dass B-Spline-Oberflächen, wie [Regelflächen](/Part_RuledSurface/de "Part RuledSurface/de") oder [Loftflächen](/Part_Loft/de "Part Loft/de") nicht unterstützt werden.

## Optionen

Wenn eine Standardebene anstelle eines Referenzobjekts ausgewählt wurde, können die Eingabefelder unter **Basispunkt** verwendet werden, um die Spiegelebene parallel zu verschieben. Nur eins der **X-** , **Y-** oder **Z-** Eingabefelder ist für eine vorgegebene Standardebene wirksam.

| Standardebene | Basispunkt-Feld | Auswirkung                                           |
| ------------- | --------------- | ---------------------------------------------------- |
| **XY**        | **Z**           | Verschiebt die Spiegelebene entlang der **Z**-Achse. |
| **XY**        | **X**, **Y**    | Keine Auswirkung.                                    |
| **XZ**        | **Y**           | Verschiebt die Spiegelebene entlang der **Y**-Achse. |
| **XZ**        | **X**, **Z**    | Keine Auswirkung.                                    |
| **YZ**        | **X**           | Verschiebt die Spiegelebene entlang der **X**-Achse. |
| **YZ**        | **Y**, **Z**    | Keine Auswirkung.                                    |

## Hinweise

- [App Link](/App_Link "App Link")-Objekte, die mit geeigneten Objektarten verknüpft sind und [App Part](/App_Part "App Part")-Container, die geeignete sichtbare Objekte enthalten, können auch als Quellobjekte verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
- Nach der Auswahl einer Standard-Spiegel können die Daten-Eigenschaft**Normal** und Daten-Eigenschaft**Base** des Part-Mirror-Objekts auf beliebige Werte geändert werden. So ist man auch ohne ein Referenzobjekt nicht auf die Standardebenen eingeschränkt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Mirror/de&oldid=1404102>"
