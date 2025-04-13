---
title: Objekte kopieren
---
## Übersicht

Wie viele andere Computerprogramme hat auch FreeCAD die Möglichkeit, Objekte auszuschneiden, zu kopieren und einzufügen.[Dokument](/Document_structure/de "Document structure/de")-Objekte können innerhalb eines Dokuments oder zwischen Dokumenten frei kopiert werden, durch verwenden der Befehle ![](/images/Std_Copy.svg) [Std Kopieren](/Std_Copy "Std Copy"), ![](/images/Std_Paste.svg) [Std Einfügen](/Std_Paste "Std Paste") und [Std AuswahlDuplizieren](/Std_DuplicateSelection "Std DuplicateSelection").

![](/images/Copy_past_duplicate.png)

Bitte beachten, dass die kopiert und eingefügten Objekte nicht vom Original abhängig sind. Werden abhängige Klone gebraucht, sollte ![](/images/Draft_Clone.svg) [Draft Klon](/Draft_Clone/de "Draft Clone/de") oder ![](/images/PartDesign_Clone.svg) [PartDesign Klon](/PartDesign_Clone/de "PartDesign Clone/de") verwendet werden. Wird weder einen abhängiger Klon noch ein parametrisches Abbild gebraucht, kann auch ![](/images/Part_SimpleCopy.svg) [Part Einfache Kopie](/Part_SimpleCopy/de "Part SimpleCopy/de") verwendet werden. Für in Mustern angeordnete Klone siehe Abschnitt [Andere Methoden](#Andere_Methoden) auf dieser Seite.

## Verknüpfte Objekte kopieren

Wenn ein zu kopierendes Objekt Verweise auf Objekte besitzt, die nicht in der Auswahl sind, fragt FreeCAD, ob die nicht ausgewählten Objekte in den Kopiervorgang einbezogen werden sollen.

## Eingefügte Objekte finden und positionieren

Nach einem Kopier- und Einfügevorgang ist es möglicherweise nicht offensichtlich, wo sich die neuen Objekte inder [3D-Ansicht](/3D_view/de "3D view/de") befinden. Das liegt daran, dass die neuen Objekte die gleiche Eigenschaft [Placement](/Placement/de "Placement/de") besitzen, wie ihre Originale. Die Eigenschaft Sichtbarkeit umgeschaltet (Leertaste), um die Originale auszublenden und dann die Kopien auf ihre richtige Position zu bewegen, z.B. mit ![](/images/Std_TransformManip.svg) [Std Bewegen](/Std_TransformManip/de "Std TransformManip/de") oder ![](/images/Std_Placement.svg) [Std Positionierung](/Std_Placement/de "Std Placement/de").

## Andere Methoden

Wie bei den meisten Dingen in FreeCAD gibt es viele Möglichkeiten, eine Kopie zu erstellen. Für weitere Ideen siehe unter:

* PartDesign: [Spiegeln](/PartDesign_Mirrored/de "PartDesign Mirrored/de"), [Lineares Muster](/PartDesign_LinearPattern/de "PartDesign LinearPattern/de"), [Radiales Muster](/PartDesign_PolarPattern/de "PartDesign PolarPattern/de"), [Mehrfach-Transformation erstellen](/PartDesign_MultiTransform/de "PartDesign MultiTransform/de")
* Part: [Spiegelung](/Part_Mirror/de "Part Mirror/de"), [Einfache Kopie erstellen](/Part_SimpleCopy/de "Part SimpleCopy/de")
* Draft: [Versetzen](/Draft_Offset/de "Draft Offset/de"), [Skalieren](/Draft_Scale/de "Draft Scale/de"), [AnordnungRechtwinklig](/Draft_OrthoArray/de "Draft OrthoArray/de"), [PfadAnordnen](/Draft_PathArray/de "Draft PathArray/de"), [Klonen](/Draft_Clone/de "Draft Clone/de"), [Spiegeln](/Draft_Mirror/de "Draft Mirror/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Copying_Objects/de&oldid=1207216>"