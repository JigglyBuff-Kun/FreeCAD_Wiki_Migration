---
title: Std AbstandMessen
---

:::caution
Dieser Befehl ist veraltet und wird in1.0 und neuernicht mehr zur Verfügung stehen.Stattdessen kannStd Messenverwendet werden.
:::

|                                                                                                       |
| ----------------------------------------------------------------------------------------------------- |
| Std AbstandMessen                                                                                     |
| Menüeintrag                                                                                           |
| Werkzeuge → Abstand messen                                                                            |
| Arbeitsbereich                                                                                        |
| Alle                                                                                                  |
| Standardtastenkürzel                                                                                  |
| _Keiner_                                                                                              |
| Eingeführt in Version                                                                                 |
| -                                                                                                     |
| Siehe auch                                                                                            |
| [Std Messen](/Std_Measure/de "Std Measure/de"), [Draft Maß](/Draft_Dimension/de "Draft Dimension/de") |
|                                                                                                       |

## Beschreibung

Das Werkzeug **Std AbstendMessen** erstellt ein Distance-Objekt, das den Abstand zwischen zwei Punkten misst und anzeigt.

## Anwendung

1. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Std_MeasureDistance.svg) Std Abstand messen drücken.
   - Den Menüeintrag **Werkzeuge → ![](/src/assets/images/Std_MeasureDistance.svg) Abstand messen** auswählen.
2. Den ersten Messpunkt irgendwo auf einem Objekt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
3. Den zweiten Messpunkt irgendwo auf einem Objekt in der3D-Ansicht auswählen.
4. Die Auswahlreihenfolge der Punkte kann die Lage der Maßlinie beeinflussen.
5. Wahlweise kann die Lage der Maßlinie umgekehrt werden, indem die Ansicht-Eigenschaft**Mirror** des Distance-Objekts geändert wird.

## Hinweise

- Das Fangwerkzeug des Arbeitsbereichs [Draft](/Draft_Workbench/de "Draft Workbench/de") kann nicht mit diesem Werkzeug zusammen verwendet werden.
- Um einer Zeichnung Maße hinzuzufügen, werden die Bemaßungswerkzeuge des Arbeitsbereichs [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de") verwendet.
- Für umfangreichere Messwerkzeuge kann der [externe Arbeitsbereich](/External_workbenches/de "External workbenches/de") ![](/src/assets/images/Manipulator_workbench_icon.svg) [Manipulatorverwendet](/Manipulator_Workbench/de "Manipulator Workbench/de") werden.

## Eigenschaften

### Daten

Basis

- Daten-Eigenschaft**Label**: Standardmäßig enthält das Label den gemessenen Abstand, aber dieser Abstand wird nicht aktualisiert, wenn P1 oder P2 später geändert wird.

Measurement

- Daten-Eigenschaft**P1**: Der erste Punkt der Messung.
- Daten-Eigenschaft**P2**: Der zweite Punkt der Messung.
- Daten-Eigenschaft**Distance**: Der gemessene Abstand zwischen P1 und P2 (schreibgeschützt) .

### Ansicht

Basis

- Ansicht-Eigenschaft**Dist Factor**: Dieser Faktor, mit dem gemessenen Abstand multipliziert, bestimmt den Abstand der Maßlinie.
- Ansicht-Eigenschaft**Font Size**: Die Schrifthöhe (Zeilenabstand in Pixeln).
- Ansicht-Eigenschaft**Mirror**: Wenn auf `true` gesetzt, wird die Lage der Maßlinie relativ zu P1 and P2 umgedreht.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_MeasureDistance/de&oldid=1442305>"
