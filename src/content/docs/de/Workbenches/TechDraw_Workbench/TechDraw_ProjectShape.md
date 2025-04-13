---
title: TechDraw FormProjizieren
---

|                                                                     |
| ------------------------------------------------------------------- |
| TechDraw FormProjizieren                                            |
| Menüeintrag                                                         |
| TechDraw → TechDraw Ansichten → Form projizieren...                 |
| Arbeitsbereich                                                      |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")          |
| Standardtastenkürzel                                                |
| _Keiner_                                                            |
| Eingeführt in Version                                               |
| 0.20                                                                |
| Siehe auch                                                          |
| [Draft Form2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de") |
|                                                                     |

## Beschreibung

Das Werkzeug **TechDraw FormProjizieren** erzeugt Projektionen von Formen. Die Projektionen werden in der [3D-Ansicht](/3D_view/de "3D view/de") erzeugt und nicht auf einem [TechDraw-Zeichnungsblatt](/TechDraw_PageDefault/de "TechDraw PageDefault/de").

![](/src/assets/images/ProjectShape1_it.png)

## Anwendung

1. Wahlweise die [3D-Ansicht](/3D_view/de "3D view/de") drehen. Die Objekte werden auf eine Ebene parallel zum Bildschirm projiziert d.h. entlang der Blickrichtung der Kamera der 3D-Ansicht, die standardmäßig als Daten-Eigenschaft**Direction** verwendet wird.
2. Ein oder mehrere Objekte auswählen. Für jedes Objekt wird eine eigene Projektion erzeugt.
3. Es gibt mehrere Möglichkeiten das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_ProjectShape.svg) Form projizieren... drücken.
   - Den Menüeintrag **TechDraw → TechDraw Views → ![](/src/assets/images/TechDraw_ProjectShape.svg) Form projizieren...** auswählen.
4. Das Dialogfeld **Formen projizieren** wird geöffnet. Siehe [Eigenschaften](#Eigenschaften).
5. Die gewünschten Optionen einstellen.
6. Die gewählten Optionen sollten nicht zu einer leeren Projektion führen, weil das einen Fehler verursacht. Bei einem Objekt mit scharfen Kanten, wie etwa [Part Würfel](/Part_Box/de "Part Box/de"), muss die Option **Sichtbare scharfe Kanten** und/oder **Verdeckte scharfe Kanten** ausgewählt werden.
7. Die Schaltfläche OK drücken.
8. Die Projektion wird auf der XY-Ebene dargestellt.
9. Wahlweise die Daten-Eigenschaft**Placement** und/oder Daten-Eigenschaft**Direction** der Projektion ändern.

## Eigenschaften

Die Projektion wird von einem [Part Feature](/Part_Feature "Part Feature") abgeleitet und erbt alle Eigenschaften. Sie hat zusätzlich folgende Eigenschaften:

### Daten

Projection

- Daten**Source** (`Link`): Die zu projizierende Form.
- Daten**Direction** (`Vector`): Die Richtung der Projektion. Das ist der Normalvektor auf die Projektionsfläche.
- Daten**VCompound** (`Bool`): Wenn `true`, dann werden sichtbare scharfe Kanten gezeigt. Beispiel: alle Kanten einer [Part Box](/Part_Box "Part Box").
- Daten**Rg1 Line VCompound** (`Bool`): Wenn `true`, dann werden sichtbare glatte Kanten gezeigt. Beispiel: die Kanten zwischen einer Rundung und den benachbarten Flächen.
- Daten**Rg NLine VCompound** (`Bool`): Wenn `true`, dann werden sichtbare Nähte gezeigt. Beispiel: die Naht einer 360° zylindrischen Fläche.
- Daten**Out Line VCompound** (`Bool`): Wenn `true`, dann werden sichtbare Konturen (die nicht scharf sind) gezeigt. Beispiel: die Seitenansicht eines [Part Cylinder](/Part_Cylinder "Part Cylinder") hat zwei solche Kanten.
- Daten**Iso Line VCompound** (`Bool`): Wenn `true`, dann werden sichtbare Isoparameter gezeigt. Dies funktioniert derzeit nicht.
- Daten**HCompound** (`Bool`): Wenn `true`, dann werden unsichtbare scharfe Kanten gezeigt.
- Daten**Rg1 Line HCompound** (`Bool`): Wenn `true`, dann werden unsichtbare glatte Kanten gezeigt.
- Daten**Rg NLine HCompound** (`Bool`): Wenn `true`, dann werden unsichtbare Nähte gezeigt.
- Daten**Out Line HCompound** (`Bool`): Wenn `true`, dann werden unsichtbare Konturen gezeigt.
- Daten**Iso Line HCompound** (`Bool`): Wenn `true`, dann werden unsichtbare Isoparameter gezeigt. Dies funktioniert derzeit nicht.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectShape/de&oldid=1490185>"
