---
title: Part FormAufbereiten
---

|                                                |
| ---------------------------------------------- |
| Part FormAufbereiten                           |
| Menüeintrag                                    |
| Part → Kopie erstellen → Form aufbereiten      |
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

Der Befehl ![](/src/assets/images/Part_RefineShape.svg) **Part FormAufbereiten** erstellt aus ausgewählten Objekten parametrische Kopien mit einer aufbereiteten Form. Er entfernt unnötige Kanten auf ebenen und zylindrischen Flächen.

![](/src/assets/images/PartRefineShape_it.png)

Original mit 11 Flächen (links) und aufbereitete Kopie mit 7 Flächen (rechts).

## Anwendung

1. Ein oder mehrere Objekte auswählen.
2. Den Menüeintrag **Part → Kopie erstellen → ![](/src/assets/images/Part_RefineShape.svg) Form aufbereiten** auswählen.
3. Für jedes Objekt wird eine bereinigte parametrische Kopie erstellt.
4. Das Originalobjekt wird ausgeblendet.

## Hinweise

- Dieser Befehl kann als letzter Schritt in einem herkömmlichen Arbeitsablauf für [konstruktive Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de") eingesetzt werden.
- Es kann helfen, das Modell zu bereinigen, bevor andere Formelemente wie z.B. eine [Part-Verrundung](/Part_Fillet/de "Part Fillet/de") eingesetzt werden.
- Ein Objekt zu bereinigen kann 3D-Drucker davor bewahren, unerwünschte Kanten zu drucken, sobald das Objekt in ein Netzformat exportiert wird.
- Dieser Befehl kann auch nach der Umwandlung eines Netzes in eine Form ([Part FormAusNetz](/Part_ShapeFromMesh/de "Part ShapeFromMesh/de")) verwendet werden.
- Standardmäßig erstellt dieser Befehl parametrische (verknüpfte) Kopien. Es gibt [Feinabstimmung](/Fine-tuning/de "Fine-tuning/de")-Parameter zum Ändern dieser nicht parametrischen Kopien. Weitere Informationen über das Verhalten von parametrischem bzw. nicht parametrischem Kopieren kann man hier finden: [Forum-Post](https://forum.freecad.org/viewtopic.php?t=42993).
- Einige interessante Informationen darüber, was mit Positionierungen passiert und wie man mit Python auf sie zugreift, findet man in diesem [Forum-Post](https://forum.freecad.org/viewtopic.php?t=77568#p675456).

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part RefineShape-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgende zusätzliche Eigenschaft:

### Daten

Refine

- Daten**Source** (`Link`): Gibt die verknüpfte Ausgangsform an.

## Skripten

Der Python-Befehl zum Aufbereiten einer Form lautet wie folgt:

```
shape.removeSplitter()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_RefineShape/de&oldid=1471973>"
