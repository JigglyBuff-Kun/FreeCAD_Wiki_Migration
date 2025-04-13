---
title: Draft AutoGruppieren
---
|  |
| --- |
| Draft AutoGruppieren |
| Menüeintrag |
| *Keiner* |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Draft Layer](/Draft_Layer/de "Draft Layer/de"), [Std Gruppe](/Std_Group/de "Std Group/de") |
|  |

## Beschreibung

Der Befehl **Draft AutoGruppieren** ändert die aktive [Draft-Ebene](/Draft_Layer/de "Draft Layer/de") oder [wahlweise](#Einstellungen) die aktive [Std Gruppe](/Std_Group/de "Std Group/de") bzw. gruppenartige [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekte. Neue [Draft-](/Draft_Workbench/de "Draft Workbench/de") und [BIM](/BIM_Workbench/de "BIM Workbench/de")-Objekte werden automatisch auf dieser Ebene bzw. in dieser Gruppe eingefügt.

Dieser Befehl war ursprünglich für Gruppen gedacht, daher sein Name, wurde aber in FreeCAD-Version 0.19 überarbeitet, als ein Ebenen-System eingeführt wurde. Da der Umgang mit Ebenen jetzt die Standardaufgabe des Befehls ist, liegt der Fokus im weiteren Verlauf dieser Seite hauptsächlich auf Ebenen.

![](/images/Draft_Tray_Menu.png)

Das Ebenen-Menü in der Draft-Ablage (Abbildung for Version 1.1 aktualisiert)

## Anwendung

1. Wahlweise die Ebene auswählen, die in der [Baumansicht](/Tree_view/de "Tree view/de") aktiviert werden soll.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_tray_button_layer.png) in der [Draft Ablage](/Draft_Tray/de "Draft Tray/de") drücken. Diese Schaltfläche kann anders aussehen. Wenn es eine aktive Ebene gibt, zeigt sie den Namen der Ebene an und ein Ebenensymbol mit der Linien- und Flächenfarbe der Ebene.
   * Wenn eine Ebene ausgewählt wurde: Die Menüoption **![](/images/Button_right.svg) Diese Ebene aktivieren** im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
3. Wenn noch keine Ebene ausgewählt wurde, wird das Ebenen-Menü geöffnet. Eine der folgenden Möglichkeiten auswählen:
   * **![](/images/Button_invalid.svg) Kein** auswählen, um ohne eine aktive Ebene zu arbeiten.
   * Eine vorhandene Ebene auswählen, um sie zu aktivieren.
   * **![](/images/Draft_NewLayer.svg) Neue Ebene...** auswählen, um eine neue Ebene zu erstellen:
     1. Das Dialogfenster **Neue Ebene erstellen** wird geöffnet. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
     2. Einen **Ebenennamen** eingeben.
     3. Die Schaltfläche OK drücken.
     4. Die neue Ebene wird aktiviert. [eingeführt in 1.1](/Release_notes_1.1/de "Release notes 1.1/de")
4. Wenn die aktive Ebene geändert wurde, wird die Schaltfläche in der [Draft Ablage](/Draft_Tray "Draft Tray") aktualisiert.

## Hinweise

* Eine neue [Ebene](/Draft_Layer/de "Draft Layer/de") kann auch erstellt werden, indem mit der rechten Maustaste auf den Ebenen-Container in der [Baumansicht](/Tree_view/de "Tree view/de") geklickt und im Kontextmenü die Option **![](/images/Draft_NewLayer.svg) Neue Ebene hinzufügen** ausgewählt wird.
* Wenn der [Konstruktionsmodus](/Draft_ToggleConstructionMode/de "Draft ToggleConstructionMode/de") eingeschaltet ist, wird die aktive [Ebene](/Draft_Layer/de "Draft Layer/de") ignoriert.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Dieser Befehl kann optional auch Gruppen verarbeiten: **Bearbeiten → Einstellungen... → Draft → Allgemein → Gruppen in Ebenenliste einbeziehen**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Ist der Arbeitsbereich [Draft](/Draft_Workbench/de "Draft Workbench/de") aktiv, hat das FreeCADGui-Objekt eine Eigenschaft `draftToolBar`. Dieses `draftToolBar`-Objekt hat eine Eigenschaft `autogroup`, die den Namen der aktiven Autogruppe enthält oder `None` ist, wenn keine Autogruppe aktiv ist.
Um die aktive Autogruppe zu ändern, wird die Methode `setAutoGroup` des `draftToolBar`-Objekts verwendet. Um Objekte in die aktive Autogruppe aufzunehmen, wird die Methode `autogroup` des Draft-Moduls verwendet.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

layer = Draft.make_layer()
Gui.draftToolBar.setAutoGroup(layer.Name)

Draft.autogroup(polygon1)
Draft.autogroup(polygon2)
Draft.autogroup(polygon3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_AutoGroup/de&oldid=1550778>"