---
title: PartDesign KeilHinzufügen
---
|  |
| --- |
| PartDesign KeilHinzufügen |
| Menüeintrag |
| Part Design → Grundkörper hinzufügen → Keil |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign AuswahlGrundkörperHinzufügen](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de"), [PartDesign KeilAbziehen](/PartDesign_SubtractiveWedge/de "PartDesign SubtractiveWedge/de") |
|  |

## Beschreibung

Fügt einen Keil-Grundkörper in den aktiven Körper (Body-Objekt) als Basisformelement ein oder vereinigt ihn mit den bereits vorhandenen Formelementen.

![](/images/PartDesign_AdditiveWedge_example.png)

## Anwendung

1. Die Schaltfläche ![](/images/PartDesign_AdditiveWedge.svg) **Keil** drücken. **Hinweis**: Der Keil ist Teil eines Symbolmenüs mit der Bezeichnung *Grundkörper hinzufügen*. Nach dem Start von FreeCAD wird der Quader in der Werkzeugleiste angezeigt. Um zur Schaltfläche Keil zu gelangen, den Abwärtspfeil neben dem sichtbaren Symbol anklicken und Keil im Menü auswählen.
2. Parameter des Grundkörpers und [Befestigung](/Part_EditAttachment/de "Part EditAttachment/de") festlegen.
3. OK klicken.
4. Ein Ellipsoid-Objekt (Formelement) erscheint unter dem aktiven Körper (in der Baumansicht).

## Optionen

Der Keil kann nach der Erstellung auf zwei Arten bearbeitet werden:

* Durch Doppelklick in der Baumstruktur oder durch Rechtsklick und Auswahl von **Grundkörper bearbeiten** im Kontextmenü. Dies öffnet den Dialog „Parameter des Grundkörpers“ im Aufgabenbereich.
* Mit Hilfe des [Eigenschafteneditors](/Property_editor/de "Property editor/de").

## Eigenschaften

Wenn die voreingestellte Positionierung verwendet wird, entsprechen die Eingaben folgenden Eigenschaften:

* Daten-Eigenschaft**X min/max** : Ausdehnung der Grundfläche in X-Richtung
* Daten-Eigenschaft**Y min/max**: Ausdehnung von Grund- bis Deckelfläche in Y-Richtung
* Daten-Eigenschaft**Z min/max** : Ausdehnung der Grundfläche in Z-Richtung
* Daten-Eigenschaft**X2 min/max** : Ausdehnung der Deckelfläche in X-Richtung
* Daten-Eigenschaft**Z2 min/max** : Ausdehnung der Deckelfläche in Z-Richtung

## Pyramiden

Keile können zur Erstellung von Pyramiden verwendet werden, wenn die Daten-Eigenschaft**X2 min/max** und die Daten**Z2 min/max** beide so gesetzt werden, dass min = max.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_AdditiveWedge/de&oldid=1218683>"