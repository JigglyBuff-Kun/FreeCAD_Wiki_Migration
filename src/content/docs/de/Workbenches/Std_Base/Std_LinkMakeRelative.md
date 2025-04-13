---
title: Std UnterverknüpfungErstellen
---

|                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std UnterverknüpfungErstellen                                                                                                                      |
| Menüeintrag                                                                                                                                        |
| Kein                                                                                                                                               |
| Arbeitsbereich                                                                                                                                     |
| Alle                                                                                                                                               |
| Standardtastenkürzel                                                                                                                               |
| _Keiner_                                                                                                                                           |
| Eingeführt in Version                                                                                                                              |
| 0.19                                                                                                                                               |
| Siehe auch                                                                                                                                         |
| [Std Part](/Std_Part/de "Std Part/de"), [Std Gruppe](/Std_Group/de "Std Group/de"), [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de") |
|                                                                                                                                                    |

## Beschreibung

![](/src/assets/images/Std_LinkMakeRelative.svg) Std UnterverknüpfungErstellen erstellt ein [App Link](/App_Link "App Link")-Objekt (`App::Link` class), so wie ![](/src/assets/images/Std_LinkMake.svg) [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de"), wird aber in erster Linie auf ausgewählte Unterelemente angewendet und setzt die Daten-Eigenschaft**Link Transform** auf `true`.

## Anwendung

Mit Auswahl:

1. Ein Unterelement in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, d.h. ein Knoten, eine Kante oder eine Fläche auswählen oder irgendeine Kombination aus diesen. Die Unterelemente müssen zu einem einzigen Objekt gehören.
2. Die Schaltfläche ![](/src/assets/images/Std_LinkMakeRelative.svg) UnterverknüpfungErstellen drücken. Das erstellte Objekt besitzt das gleiche Symbol, wie das Originalobjekt, das aber mit zwei Pfeilen überlagert ist, die darauf hinweisen, dass es sich um eine Unterverknüpfung handelt.

Ohne Auswahl:

- Wenn kein Objekt ausgewählt wurde, macht dieser Befehl nichts.
- Wenn ein Objekt nur in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt wurde, aber kein Unterelement in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt wurde, macht dieser Befehl auch nichts.

![](/src/assets/images/Std_Link_tree_sublink_example.png) ![](/src/assets/images/Std_Link_sublink_example.png)

Originaler Körper und drei Verknüpfungen, die von seinen Unterelementen erstellt wurden, inklusive Kanten und Flächen.

## Eigenschaften

Diese Anwendung erstellt eine neue [Anwendung Verknüpfung](/App_Link/de "App Link/de"). Seine Eigenschaften sind in ![](/src/assets/images/Std_LinkMake.svg) [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de") beschrieben.

Vor allem Daten**Link Transform** ist auf `true` gesetzt. Damit wird Daten**Placement** versteckt und an dessen statt steuert Daten**Link Placement** die Position der Verknüpfung, bezogen auf die Position Daten**Linked Object**.

## Skripten

Zu allgemeinen Informationen, siehe [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de").

Die Anwendung Link wurde mit der `addObject()`-Methode des Dokumentes erstellt. Um eine relative Verknüpfung zu erstellen, wird seine `setLink`-Methode verwendet, um das Quellobjekt und eines oder mehrerer seiner Unterelemente aufzunehmen. Dann wird das `LinkTransform`-Attribut auf `True` gesetzt.

```
import FreeCAD as App

doc = App.newDocument()
body = App.ActiveDocument.addObject("Part::Box", "Box")

obj = App.ActiveDocument.addObject("App::Link", "Link")
obj.setLink(body, '', ['Edge1', 'Edge6', 'Edge7', 'Edge10', 'Face2', 'Face3'])
obj.LinkTransform = True
obj.LinkPlacement.Base = App.Vector(20, 20, 0)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkMakeRelative/de&oldid=1282003>"
