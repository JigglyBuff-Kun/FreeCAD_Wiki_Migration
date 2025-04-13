---
title: PartDesign Ausformung
---
|  |
| --- |
| PartDesign AusformungHinzufügen |
| Menüeintrag |
| Part Design → Objekte hinzufügen → Ausformung |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign RohrHinzufügen](/PartDesign_AdditivePipe/de "PartDesign AdditivePipe/de"), [PartDesign AusformungAbziehen](/PartDesign_SubtractiveLoft/de "PartDesign SubtractiveLoft/de") |
|  |

## Beschreibung

**Additive Ausformung** erzeugt einen Festkörper im aktiven Körper, indem er einen Übergang zwischen zwei oder mehreren Skizzen (auch Querschnitte genannt) herstellt. Wenn der Körper bereits Elemente enthält, wird die additive Ausformung mit diesen zusammengeführt.

![](/images/PartDesign_AddLoft_example.png)

Links: Querschnitte (A), (B) und (C). Rechts: Die erstellte Ausformung

## Anwendung

### Dialogbasierter Arbeitsablauf

1. Die Schaltfläche (additive) ![](/images/PartDesign_AdditiveLoft.svg) Ausformung drücken.
2. Im Dialogfeld **Element auswählen** eine Skizze auswählen, die als Basisprofilobjekt verwendet werden soll, und auf OK klicken.
   * Alternativ kann entweder eine einzelne Skizze oder die Fläche eines 3D-Objekts ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")) ausgewählt werden, bevor auf die Schaltfläche Ausformung geklickt wird.
3. Unter **Ausformungsparameter** die Schaltfläche Schnitt hinzufügen drücken.
4. Die nächste Skizze in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen. Diesen Vorgang wiederholen, um weitere Skizzen in der Reihenfolge auszuwählen, in der sie eingefügt werden sollen. (Die Schnittreihenfolge kann irgendwann später im Dialogfeld der Ausformung geändert werden, indem die Schnitte in der Liste an die gewünschte Position gezogen werden.)
5. Wenn nötig Optionen festlegen und auf OK klicken.

### Auswahlbasierter Arbeitsablauf

1. Mehrere Skizzen auswählen. Dabei ist es wichtig, in welcher Reihenfolge sie ausgewählt werden:
   * Die zuerst ausgewählte Skizze wird im nächsten Schritt zum Basis-Profilobjekt.
   * Die nach der ersten ausgewählten Skizzen werden zu den Ausformungs(quer)schnitten. Auch hier ist die Reihenfolge der Auswahl wichtig: Die als zweite ausgewählte Skizze wird zum ersten Ausformungsschnitt, die als dritte ausgewählte zum zweiten Schnitt und so weiter. (Die Schnittreihenfolge kann irgendwann später im Dialogfeld der Ausformung geändert werden, indem die Schnitte in der Liste an die gewünschte Position gezogen werden.)
   * Der erste oder der letzte Schnitt kann auch eine Fläche eines 3D-Objekts sein. ([eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de"))
2. Die Schaltfläche ![](/images/PartDesign_AdditiveLoft.svg) Ausformung drücken.
3. Wenn nötig Optionen festlegen und auf die Schaltfläche OK klicken.

## Optionen

* **Regelfläche**: erstellt gerade Übergänge zwischen Querschnitten. Wird nicht auf eine Ausformung mit zwei Querschnitten angewendet. Wenn nicht angekreuzt, werden die Übergänge glatt sein.
* **Geschlossen**: erstellt einen Übergang vom letzten zum ersten Querschnitt, wodurch ein Ring entsteht. [eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")

## Eigenschaften

* Daten-Eigenschaft**Label**: Bezeichnung, die der Operation gegeben wurde, diese Benennung kann nach Belieben geändert werden.
* Daten-Eigenschaft**Sections**: Listet die verwendeten Profilschnitte auf.
* Daten-Eigenschaft**Ruled**: siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Geschlossen**: siehe [Optionen](#Optionen).
* Daten-Eigenschaft**Refine**: true oder false. Wenn auf true gesetzt, befreit den Festkörper von übriggebliebenen Kanten, die von den Formelementen hinterlassen wurden. Siehe [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") für weitere Einzelheiten.
* Daten**Profile**: das Basis-Profilobjekt der Ausformung.
* Daten-Eigenschaft**Midplane**: nicht anwendbar.
* Daten-Eigenschaft**Reversed**: nicht anwendbar.
* Daten**Up To Face**: nicht anwendbar.
* Daten**Allow Multi Face**: nicht anwendbar.

## Hinweise

* Um die Form der Ausformung besser kontrollieren zu können, wird empfohlen, dass alle Querschnitte die gleiche Anzahl von Segmenten haben. Zum Beispiel kann für eine Ausformung zwischen einem Rechteck und einem Kreis der Kreis in 4 zusammenhängende Bögen aufgeteilt werden.
* Die Ausformung kann mit einem einzelnen Knotenpunkt ([vertex](/Glossary#V "Glossary")) einer Skizze oder eines Körpers beginnen oder enden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")
* Ein Knotenpunkt kann nur entweder Start- oder Endpunkt einer Ausformung sein. Andernfalls würde der Ausformungskörper aus zwei an der spitze verbundenen Festkörpern bestehen. Dies würde gegen die Definition eines 3D-Objekts des CAD-Kernels verstoßen.
* Ein Querschnitt kann nicht auf derselben Ebene liegen wie der unmittelbar vorhergehende.
* Wenn die Skizze eine innere Geometrie hat, d. h. die Ausformung soll Löcher haben, dann sollte die Reihenfolge, in der die Skizzengeometrie erstellt wird, für alle Schnitte gleich sein: Entweder beginnen alle Schnitte mit der inneren Geometrie oder sie beginnen alle mit der äußeren. Andernfalls kann ein ungültiger Ausformung erzeugt werden, bei dem sich Innen- und Außenwände kreuzen.
* Es ist nicht möglich, unzusammenhängende oder sich kreuzende Konturen zu verwenden.
* Einige Fehler-Modi färben das Bauteil schwarz.

## Verweise

* [Part Ausformung Technische Details](/Part_Loft_Technical_Details/de "Part Loft Technical Details/de") erläutert wie eine [Part Ausformung](/Part_Loft/de "Part Loft/de") erstellt wird; der größte Teil des Inhalts gilt auch für die (additive) PartDesign Ausformung.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveLoft/de&oldid=1296479>"