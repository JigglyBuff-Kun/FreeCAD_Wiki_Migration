---
title: FreeCAD und Polygonnetz Import
---
## Nach dem Import

Nach dem Import ist das Modell (für FreeCAD) nur eine Baugruppe von Flächen. Du möchtest das Modell vielleicht in eine Form konvertieren, die FreeCAD erkennt und die in FreeCAD geändert werden kann.

Um dies zu tun:

1. Zum Arbeitsbereich ![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") wechseln.
2. Das Netz auswählen und den Menüeintrag **Part → [Form aus Netz erstellen](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de")** auswählen oder die Schaltfläche ![](/images/Part_ShapeFromMesh.svg) [Form aus Netz erstellen](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de") drücken.
3. Im Dialog OK anklicken.
4. Die neu erstellte Form auswählen.
5. Den Menüeintrag **Part → [In Festkörper umwandeln](/Part_MakeSolid/de "Part MakeSolid/de")** auswählen.
6. Den neu erstellten Festkörper auswählen.
7. Den Menüeintrag **Part → Kopie erstellen → [Form aufbereiten](/Part_RefineShape/de "Part RefineShape/de")** oder die Schaltfläche ![](/images/Part_RefineShape.svg) [Form aufbereiten](/Part_RefineShape/de "Part RefineShape/de") drücken.

**Hinweis**: Der letzte Schritt ist nicht notwendig, aber er reinigt den Festkörper von den meisten seiner Restkanten auf ebenen und zylindrischen Oberflächen.

## Fehler

### "cannot convert because shape is not a shell"

Nun, deine Schale scheint Fehler zu haben, vielleicht ist sie nicht geschlossen (hat Löcher). Da die Möglichkeiten des Arbeitsbereichs Mesh (Netz) in FreeCAD derzeit etwas eingeschränkt sind, solltest du vielleicht versuchen, dein Modell mit Software von Drittanbietern zu untersuchen und zu reparieren. Danach kannst du versuchen, dein Modell erneut zu importieren und zu konvertieren.

## Drittanbieterprogramme

* [MeshLab](https://www.meshlab.net/)
  + Lizenz: Open Source (GPL V2)
  + Läuft unter Windows 32/64 bit, Linux und macOS
* [Meshmixer](https://meshmixer.com/)
  + Lizenz: Freeware
  + Läuft unter Windows 64-bit

## Anleitungen

* [Import aus STL oder OBJ](/Import_from_STL_or_OBJ/de "Import from STL or OBJ/de")
* [Export nach STL oder OBJ](/Export_to_STL_or_OBJ/de "Export to STL or OBJ/de")

## Verwandt

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCAD_and_Mesh_Import/de&oldid=1454369>"