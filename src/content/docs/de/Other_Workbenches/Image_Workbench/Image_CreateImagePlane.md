---
title: Image BildebeneErstellen
---
|  |
| --- |
| Image BildebeneErstellen |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Image (Bild)](/Image_Workbench/de "Image Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Image Öffnen](/Image_Open/de "Image Open/de"), [Image BildebeneSkalieren](/Image_Scaling/de "Image Scaling/de") |
|  |

## Beschreibung

Das Werkzeug BildebeneErstellen importiert ein [Bitmap](/Bitmap/de "Bitmap/de") Bild und platziert es auf einer XY-, YZ- oder XZ-Ebene.

## Anwendung

1. Schaltfläche ![](/images/Image_CreateImagePlane.svg) Bildebene erstellen drücken.
2. Das gewünschte Bild aus dem eigenen System auswählen.
3. Die Ebene auswählen, auf der das Bild platziert werden soll, einen Versatzwert angeben und OK drücken.

Das entstandene ImagePlane-Objekt verwendet das Verhältnis von 1 Pixel zu 1 mm; damit das Bild gut dargestellt wird, sollte es eine ausreichend hohe Auflösung haben.

Beim Import des Bildes sollte man möglichst einen Versatz von `-0.1 mm` hinzufügen, um das Bild leicht hinter der Arbeitsebene zu platzieren; dies erleichtert das Nachzeichnen (Darüberzeichnen) des Bildes mit den Werkzeugen der Arbeitsbereiche [Draft](/Draft_Workbench/de "Draft Workbench/de") oder [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de").

Wenn das Bild nicht schon zu Beginn ein Versatz erhält, kann seine Position immer noch im [Eigenschafteneditor](/Property_editor/de "Property editor/de") angepasst werden.

## Eigenschaften

Basis

* Daten-Eigenschaft**Position**: gibt die Koordinaten des Basispunkts der Bildebene an.
* Daten-Eigenschaft**Winkel**: gibt den Drehwinkel der Bildebene an.
* Daten-Eigenschaft**Achse**: gibt die für den Drehwinkel verwendete Achse an.

Image Plane

* Daten-Eigenschaft**Image File**: gibt das Bild an, das für diese Ebene verwendet werden soll.
* Daten-Eigenschaft**XSize**: gibt die Breite der Bildebene an.
* Daten-Eigenschaft**YSize**: gibt die Höhe der Bildebene an.

Retrieved from "<http://wiki.freecad.org/index.php?title=Image_CreateImagePlane/de&oldid=1098822>"