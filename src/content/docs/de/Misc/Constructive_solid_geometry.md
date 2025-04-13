---
title: Konstruktive Festkörpergeometrie
---
## Einleitung

[Konstruktive Festkörpergeometrie](https://de.wikipedia.org/wiki/Constructive_Solid_Geometry) (engl.: Constructive Solid Geometry) (**CSG**) ist ein Modellierungskonzept, das in vielen herkömmlichen CAD-Systemen verwendet wird. Es besteht im Wesentlichen darin, einfache Festkörperobjekte zu verwenden und mit ihnen boolesche Operationen wie Vereinigung (Verschmelzen), Differenz (Abziehen) und Schnitt (gemeinsamen Inhalt (Schnittmenge) ermitteln) durchzuführen, um eine endgültige Form zu erstellen.

In FreeCAD wird diese Methode hauptsächlich mit dem ![](/images/Workbench_Part.svg) [Arbeitsbereich Part](/Part_Workbench/de "Part Workbench/de") verwendet, der die Möglichkeit hat, einfache Grundkörper (Primitive) wie ![](/images/Part_Box.svg)[Würfel](/Part_Box/de "Part Box/de"), ![](/images/Part_Cylinder.svg)[Zylinder](/Part_Cylinder/de "Part Cylinder/de") und ![](/images/Part_Sphere.svg)[Kugel](/Part_Sphere/de "Part Sphere/de") zu erstellen und miteinander zu vereinigen, oder sie von anderen Objekten abzuziehen, mit Werkzeugen wie ![](/images/Part_Cut.svg) [Part Differenz](/Part_Cut/de "Part Cut/de").

![](/images/Part_Constructive_Solid_Geometry_workflow.svg)

Arbeitsablauf zur konstruktiven Festkörpergeometrie (CSG); eine beliebige Anzahl von Operationen kann mit Grundkörpern (Festkörper-Primitive) durchgeführt werden, um andere Festkörperobjekte zu erzeugen und diese dann zu vereinigen oder abzuziehen, bis die endgültige Form erstellt ist.

Der Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") verwendet einen moderneren Ansatz als einfaches CSG; diese Methode heißt [Bearbeitung mit Formelementen](/Feature_editing/de "Feature editing/de"), was bedeutet, dass ein Basisfestkörper erstellt wird und dann aufeinanderfolgende parametrische Umwandlungen hinzugefügt werden, um den endgültigen Körper zu erhalten.

*Anmerkung:* Ein [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"), der mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erstellt wurde, kann auch in einer boolschen Operation mit anderen Objekten verwendet werden.

## Beispiel

![](/images/Part_CGS_workflow_example.svg)

Beispiel für den Arbeitsablauf zur konstruktiven Festkörpergeometrie (CSG): Einfache Teile werden zusammengefügt (Vereinigung); das Schnittobjekt (das gemeinsame Volumen) zweier anderer einfacher Teile wird berechnet (Schnitt); die Differenz der beiden vorherigen Formen wird gebildet.

## Tutorien

Die Seite [Tutorien](/Tutorials/de "Tutorials/de") stellt einige Beispiele zur Erstellung von Festkörpern mit dem Arbeitsbereich
![](/images/Workbench_Part.svg) [Part](/Part_Workbench/de "Part Workbench/de") bereit, die die **CSG**-Methode verwenden.

* [Herkömmliche Modellierung, die CSG-Methode](/Manual:Traditional_modeling,_the_CSG_way/de "Manual:Traditional modeling, the CSG way/de")
* [Whiffleball Tutorium](/Whiffle_Ball_tutorial/de "Whiffle Ball tutorial/de")
* [Grundlegendes Modellierungstutorial](/Basic_modeling_tutorial/de "Basic modeling tutorial/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Constructive_solid_geometry/de&oldid=1332533>"