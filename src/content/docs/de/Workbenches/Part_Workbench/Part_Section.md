---
title: Part Schnittkurve
---

|                                                                     |
| ------------------------------------------------------------------- |
| Part Schnittkurve                                                   |
| Menüeintrag                                                         |
| Formteil → Schnittkurve                                             |
| Arbeitsbereich                                                      |
| [Part](/Part_Workbench/de "Part Workbench/de")                      |
| Standardtastenkürzel                                                |
| _Keiner_                                                            |
| Eingeführt in Version                                               |
| -                                                                   |
| Siehe auch                                                          |
| [Part Querschnitte](/Part_CrossSections/de "Part CrossSections/de") |
|                                                                     |

## Beschreibung

Der Befehl ![](/images/f/f7/Part_Section.svg) **Part Schnittkurve** erstellt Drahtgeometrien (Linienzüge) an den Schnittkanten zweier Objekte. Das Ergebnis ist vollständig parametrisch.

- Der Schnitt zweier Festkörper oder Flächen resultiert in einer oder mehreren Schnittlinien.
- Der Schnitt zweier Linien oder einer Linie mit einem Festkörper oder einer Fläche resultiert in einem oder mehreren Punkten.

![](/images/PartSection1_it.png)

Ein Würfel mit einem Zylinder geschnitten

## Anwendung

1. Zwei Objekte Auswählen.
2. Das erste Objekt wird zur Daten-Eigenschaft**Basis** des Schnitts, aber die Auswahlreihenfolge hat keinen Einfluss auf das Ergebnis.
3. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/f/f7/Part_Section.svg) Schnittkurve drücken.
   - Den Menüeintrag **Part → ![](/images/f/f7/Part_Section.svg) Schnittkurve** auswählen.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein PartDesign-Section-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Base

- Daten**Base** (`Link`): Link to the first object.
- Daten**Tool** (`Link`): Link to the second object.

Boolean

- Daten (hidden)**History** (`ShapeHistory`): "Shape history".
- Daten**Refine** (`Bool`): "Refine shape (clean up redundant edges) after this boolean operation". The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Section

- Daten**Approximation** (`Bool`): Approximate the output edges.

## Verknüpfungen

Zum Erzeugen von Querschnitten mit Schnittebenen siehe ![](/images/Part_CrossSections.svg) [Querschnitte](/Part_CrossSections/de "Part CrossSections/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Section/de&oldid=1247160>"
