---
title: Draft ArbeitsebenenProxy
---
|  |
| --- |
| Draft ArbeitsebenenProxy |
| Menüeintrag |
| Dienstprogramme → Arbeitsebenen-Proxy erstellen Werkzeuge → Arbeitsebenen-Proxy erstellen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_WorkingPlaneProxy.svg) **Draft ArbeitsebenenProxy** erstellt einen Stellvertreter der Arbeitsebene, um die aktuelle [Draft Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") zu sichern. Ein Arbeitsebenen-Proxy kann zum schnellen wiederherstellen einer Arbeitsebene verwendet werden. Kameraposition und Sichtbarkeit der Objekte in der [3D-Ansicht](/3D_view/de "3D view/de") werden auch im Arbeitsebenen-Proxy gespeichert und können, [wahlweise](#Eigenschaften), auch wiederhergestellt werden.

![](/images/Draft_WPProxy_example.png)

Drei Proxies der Bearbeitungsebene mit unterschiedlichen Ausrichtungen und Versätzen

## Anwendung

1. Wahlweise die [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") wechseln.
2. Wahlweise die [3D-Ansicht](/3D_view/de "3D view/de") wechseln.
3. Wahlweise die Sichtbarkeit von Objekten im Dokument ändern.
4. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_WorkingPlaneProxy.svg) Arbeitsebenen-Proxy erstellen drücken.
   * Draft: Den Menüeintrag **Dienstprogramme → ![](/images/Draft_WorkingPlaneProxy.svg) Arbeitsebenen-Proxy erstellen** auswählen oder die Menüoption im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * [BIM](/BIM_Workbench/de "BIM Workbench/de"): Den Menüeintrag **Werkzeuge → ![](/images/Draft_WorkingPlaneProxy.svg) Arbeitsebenen-Proxy erstellen** auswählen.
5. Ein Arbeitsebenen-Proxy wird erstellt.
6. Zum Ausrichten einer [Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") an einem Arbeitsebenen-Proxy klickt man doppelt auf den Arbeitsebenen-Proxy in der [Baumansicht](/Tree_view/de "Tree view/de") oder verwendet ihn mit dem Befehl [Draft EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de").

## Kontextmenü

Für ein Draft Arbeitsebenen-Proxy sind diese zusätzlichen Optionen im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") vorhanden:

* **![](/images/Draft_SelectPlane.svg) Schreibe Kamera-Position**: aktualisiert die Ansicht-Eigenschaft**View Data** des Arbeitsebenen-Proxys mit den aktuellen Kameraeinstellungen der [3D-Ansicht](/3D_view/de "3D view/de").
* **![](/images/Draft_SelectPlane.svg) Schreibe Objekt-Status**: aktualisiert die Ansicht-Eigenschaft**Visibility Map** des Arbeitsebenen-Proxys mit den aktuellen Sichtbarkeiten der Objekte im Dokument.

## Hinweise

* Arbeitsebenen-Proxies können [verschoben](/Draft_Move/de "Draft Move/de") und [gedreht](/Draft_Rotate/de "Draft Rotate/de") werden, wie jedes andere Objekt auch. Mit aktiviertem ![](/images/Draft_Snap_Center.svg) [Draft MittelpunktEinrasten](/Draft_Snap_Center/de "Draft Snap Center/de") wird auf dem Punkt seiner Daten-Eigenschaft**Placement** eingerastet.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Draft ArbeitsebenenProxy wird von einem [App FeaturePython](/App_FeaturePython "App FeaturePython")-Objekt abgeleitet und erbt alle seine Eigenschaften. Außerdem besitzt es die folgenden zusätzlichen Eigenschaften:

### Daten

Basis

* Daten-Eigenschaft**Placement** (`Placement`): Legt die Position der Arbeitsebene in der [3D-Ansicht](/3D_view/de "3D view/de") fest. Siehe [Positionierung](/Placement/de "Placement/de").
* Daten-Eigenschaft (versteckt)**Shape** (`Shape`): Legt die Form des Arbeitsebenen-Proxys fest.

### Ansicht

Basis

* Ansicht**Line Color** (`Color`): specifies the color of all elements of the working plane proxy.
* Ansicht**Line Width** (`Float`): specifies the line width of the axes and arrow symbols.
* Ansicht**Restore State** (`Bool`): specifies if the Ansicht**Visibility Map** is restored when the [working plane](/Draft_SelectPlane "Draft SelectPlane") is aligned with the working plane proxy.
* Ansicht**Restore View** (`Bool`): specifies if the Ansicht**View Data** is restored when the [working plane](/Draft_SelectPlane "Draft SelectPlane") is aligned with the working plane proxy.
* Ansicht**Transparency** (`Percent`): specifies the transparency of the face of the working plane proxy.
* Ansicht**View Data** (`FloatList`): specifies the camera position and settings.
* Ansicht (Hidden)**Visibility Map** (`Map`): specifies the visibility state of objects.

Draft

* Ansicht**Arrow Size** (`Length`): specifies the size of the arrow symbols displayed at the tip of the three axes.
* Ansicht**Display Size** (`Length`): specifies the length and width of the working plane proxy.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Zum Erstellen eines Draft Arbeitsebenen-Proxys verwendet man die Methode `make_workingplaneproxy` des Draft-Moduls.

Ist der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") aktiv, besitzt FreeCADs Anwendungsobjekt (application object) eine Eigenschaft `DraftWorkingPlane`, die die aktuelle Arbeitsebene speichert. Die Positionierung `Placement` aus der Methode `getPlacement` des `DraftWorkingPlane`-Objekts kann zur Erstellung eines ausgerichteten Arbeitsebenen-Proxys verwendet werden. Die Positionierung `Placement` kann wiederum zu erneuten Ausrichten der Arbeitsebene verwendet werden.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

workplane = App.DraftWorkingPlane
place = workplane.getPlacement()

proxy = Draft.make_workingplaneproxy(place)
proxy.ViewObject.DisplaySize = 3000
proxy.ViewObject.ArrowSize = 200

axis2 = App.Vector(1, 1, 1)
point2 = App.Vector(3000, 0, 0)
place2 = App.Placement(point2, App.Rotation(axis2, 90))

proxy2 = Draft.make_workingplaneproxy(place2)
proxy2.ViewObject.DisplaySize = 3000
proxy2.ViewObject.ArrowSize = 200

workplane.setFromPlacement(proxy2.Placement, rebase=True)
Gui.Snapper.setGrid()

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WorkingPlaneProxy/de&oldid=1541383>"