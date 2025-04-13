---
title: Draft EbeneAuswählen
---
|  |
| --- |
| Draft EbeneAuswählen |
| Menüeintrag |
| Dienstprogramme → Ebene wählen |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| Draft: W P |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft ArbeitsebenenProxy](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_SelectPlane.svg) **Draft EbeneAuswählen** legt die aktuelle Arbeitsebene fest. Dies ist die Ebene in der [3D-Ansicht](/3D_view/de "3D view/de"), auf der neue [Draft](/Draft_Workbench "Draft Workbench")-Objekte erstellt werden. Eine Arbeitsebene kann auf einer oder mehreren [Voreinstellungen](#Anwendung_mit_Voreinstellungen) basieren oder auf einer Auswahl. Die Auswahl kann vor dem Aufruf des Befehls erfolgen ([Vorauswahl](#Anwendung_mit_Vorauswahl)) oder danach ([nachträgliche Auswahl](#Anwendung_mit_nahträglicher_Auswahl)).

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Zu jeder 3D-Ansicht wird eine eigene Arbeitebene gespeichert.

Die Schaltfläche ![](/images/Draft_tray_button_plane.png) im [Draft Tray](/Draft_Tray "Draft Tray") ändert sich abhängig von der aktuellen Arbeitsebene. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Ist die Arbeitsebene nicht auf **Auto** gesetzt, wird der Benennung der Schaltfläche ein Stern (**\***) vorangestellt, wenn der Ursprung der Arbeitsebene nicht dem globalen Ursprung entspricht.

![](/images/WorkingPlane_example.png)

Formen die auf unterschiedlichen Arbeitsebenen erstellt wurden

## Anwendung mit Vorauswahl

1. Eine der folgenden Möglichkeiten ausführen:
   * Ein einzelnes Objekt auswählen. Die folgenden Objekte werden unterstützt:
     + [Draft ArbeitsebenenProxies](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de"): Die Ansicht-Eigenschaft**View Data** (die Kameraposition) und die Ansicht-Eigenschaft**Visibility Map** (die gespeicherten Sichtbarkeitseinstellungen von Objekten) des Arbeitseben-Proxys werden ebenfalls wiederhergestellt.
     + [Arch Achsen](/Arch_Axis/de "Arch Axis/de") ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"))
     + [Arch Achsensysteme](/Arch_AxisSystem/de "Arch AxisSystem/de") ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"))
     + [Arch Gebäudeteile](/Arch_BuildingPart/de "Arch BuildingPart/de")
     + [Arch Schnittebenen](/Arch_SectionPlane/de "Arch SectionPlane/de")
     + [Std Teile](/Std_Part/de "Std Part/de"): Sollen nicht nur die angeklickten Subelemente ausgewählt werden, wird empfohlen Std-Teile in der [Baumansicht](/Tree_view/de "Tree view/de") auszuwählen.
     + Nicht-Festkörper-Objekte, die aus einer einzelnen ebenen Fläche oder einer einzelnen gekrümmten Kante bestehen oder ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")) die mindestens drei Knoten enthalten.
     + Festkörper-Objekte oder Objekte ohne eine Form, die eine Daten-Eigenschaft**Placement** besitzen. ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"))
   * Ein oder mehrere Unterelemente auswählen. Zur Wahl stehen:
     + Eine ebene Fläche.
     + Eine gekrümmte Kante.
     + Drei Knotenpunkte.
     + Eine Kante und ein Knoten oder zwei Kanten. Die Knoten müssen zusammen eine Ebene definieren. ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"))
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_tray_button_plane.png) im [Draft Tray](/Draft_Tray/de "Draft Tray/de") drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Den Menüeintrag **Dienstprogramme → ![](/images/Draft_SelectPlane.svg) Ebene wählen** auswählen oder die Menüoption im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Draft: Das Tastaturkürzel W dann P.
3. Die Arbeitsebene und die Schaltfläche in der [Draft Tray](/Draft_Tray/de "Draft Tray/de") werden aktualisiert.

## Anwendung mit nachträglicher Auswahl

1. Den Befehl aufrufen, wie oben beschrieben.
2. Der Aufgaben-Bereich **Arbeitsebene einrichten** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Eine der folgenden Möglichkeiten ausführen:
   * Ein einzelnes Objekt auswählen. Siehe den [vorherigen Absatz](#Anwendung_mit_Vorauswahl).
   * Ein oder mehrere Unterelemente auswählen. Siehe den [vorherigen Absatz](#Anwendung_mit_Vorauswahl).
4. An eine beliebige Stelle in der [3D-Ansicht](/3D_view/de "3D view/de") klicken, um die Auswahl zu bestätigen und den Befehl zu beenden.
5. Die Arbeitsebene und die Schaltfläche im [Draft Tray](/Draft_Tray/de "Draft Tray/de") werden aktualisiert.

## Anwendung mit Voreinstellungen

1. Den Befehl aufrufen, wie oben beschrieben.
2. Der Aufgaben-Bereich **Arbeitsebene einrichten** wird geöffnet. Siehe [Optionen](#Optionen) für weitere Informationen.
3. Eine der Schaltflächen drücken, um den Befehl zu beenden.
4. Die Arbeitsebene und die Schaltfläche im [Draft Tray](/Draft_Tray/de "Draft Tray/de") werden aktualisiert.

## Optionen

* Die Schaltfläche ![](/images/View-top.svg) Oben (XY) drücken, um die Arbeitsebene zur XY-Ebene des globalen Koordinatensystems auszurichten.
* Die Schaltfläche ![](/images/View-front.svg) Front (XZ) drücken, um die Arbeitsebene zur XZ-Ebene des globalen Koordinatensystems auszurichten.
* Die Schaltfläche ![](/images/View-right.svg) Seite (YZ) drücken, um die Arbeitsebene zur YZ-Ebene des globalen Koordinatensystems auszurichten.
* Die Schaltfläche ![](/images/View-isometric.svg) Zur Ansicht ausrichten drücken, um die Arbeitsebene zur aktuellen [3D-Ansicht](/3D_view/de "3D view/de") auszurichten. Ist die Checkbox **Ebene in Ansicht zentrieren** nicht aktiviert, ist der Ursprung der Arbeitsebene deckungsgleich mit dem Ursprung des globalen Koordinatensystems, andernfalls ist er deckungsgleich mit der Mitte der aktuellen [3D-Ansicht](/3D_view/de "3D view/de").
* Die Schaltfläche ![](/images/View-axonometric.svg) Automatisch drücken, um die Arbeitsebene auf **Auto** zu setzen. Eine auf **Auto** gesetzte Arbeitsebene wird automatisch zur aktuellen [3D-Ansicht](/3D_view/de "3D view/de") ausgerichtet, wann immer ein Draft- oder [BIM](/BIM_Workbench/de "BIM Workbench/de")-Befehl gestartet wird, der eine Punkteingabe erfordert. Dies ist entspricht dem Drücken der Schaltfläche ![](/images/View-isometric.svg) Zur Ansicht ausrichten, bevor der Befehl verwendet wird. Außerdem richtet sich die Arbeitsebene zu ebenen Flächen aus, die vor dem Start des Befehls ausgewählt wurden, oder wenn während der Ausführung des Befehls Punkte auf ebenen Flächen ausgewählt werden.
* **Versetzen** legt den senkrechten Abstand zwischen der berechneten Ebene und der tatsächlichen Arbeitsebene fest.
* Die Checkbox **Center plane on view** aktivieren, um den Ursprung der Arbeitsebene auf den Mittelpunkt der aktuellen [3D-Ansicht](/3D_view/de "3D view/de") zu setzen. Diese Option kann in Kombination mit der Schaltfläche ![](/images/View-isometric.svg) Zur Ansicht ausrichten nützlich sein.
* Einen Knoten in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen und die Schaltfläche ![](/images/Draft_Move.svg) Move working plane drücken, um die die Arbeitsebene so zu versetzen, dass ihr Ursprung auf dem ausgewählten Knoten liegt.
* Die Schaltfläche **Rasterfarbe** ermöglicht die Farbe des Rasters schnell zu ändern. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* **Rasterabstand** legt den Abstand zwischen den Rasterlinien fest.
* Der Wert **Hauptlinien alle** legt fest, wo Hauptrasterlinien gezeichnet werden. Hauptrasterlinien sind geringfügig dicker, als untergeordnete Rasterlinen. Ist z.B. der Rasterabstand `0.5 m` und es gibt eine Hauptlinie alle `10` Kästchen, treten die Hauptlinien alle `5 m` auf.
* Der Wert **Grid size** legt die Anzahl der Kästchen in X- und Y-Richtung des Rasters fest.
* Der **Einrast-Radius** ist der maximale Abstand, den [Draft EinrastenAufRaster](/Draft_Snap_Grid/de "Draft Snap Grid/de") berücksichtigt, um die Schnittstellen der Rasterlinien zu finden.
* Die Schaltfläche ![](/images/View-fullscreen.svg) Ansicht zentrieren drücken, um die [3D-Ansicht](/3D_view/de "3D view/de") zur aktuellen Arbeitsebene auszurichten.
* Die Schaltfläche ![](/images/Sel-back.svg) Vorherige drücken, um die Arbeitsebene auf ihre vorherige Position zurückzusetzen.
* Die Schaltfläche Next ![](/images/Sel-forward.svg) drücken, um die Arbeitsebene auf ihre nachfolgende Position zu setzen. [eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")
* Esc oder die Schaltfläche Close drücken, um den Befehl abzubrechen.

## Hinweise

* Es kann sinnvoll sein, die [3D-Ansicht](/3D_view/de "3D view/de") zur ausgewählten Arbeitsebene auszurichten. Beispielsweise stellt man nach dem setzen der Arbeitsebene auf Front auch für die Ansicht auf die [Vorderansicht](/Std_ViewFront "Std ViewFront") um.
* Das Raster kann mit dem Befehl [Raster ein-/ausblenden](/Draft_ToggleGrid/de "Draft ToggleGrid/de") umgeschaltet werden.
* Durch Doppelklicken auf [Draft Arbeitsebenen-Proxies](/Draft_WorkingPlaneProxy/de "Draft WorkingPlaneProxy/de") in der [Baumansicht](/Tree_view/de "Tree view/de") kann schnell zwischen Arbeitsebenen gewechselt werden.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Die Rastereinstellungen im Aufgaben-Bereich und auch einige andere Rastereinstellungen stehen als Voreinstellungen zur Verfügung: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten**.
* Der Einrastradius kann auch "on-the-fly" geändert werden (see [Draft Einrasten](/Draft_Snap/de#Einstellungen "Draft Snap/de")) oder durch **Werkzeuge → Parameter bearbeiten... → BaseApp → Preferences → Mod → Draft → snapRange**.

## Skripten

Siehe auch: [Autogenerierte API-Dokumentation](https://freecad.github.io/SourceDoc/) und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")

Das Modul WorkingPlane (Arbeitsebene) enthält zwei Klassen zur Erstellung von Arbeitsebenen (working plane objects): Die Klasse `PlaneBase` und die Klasse `PlaneGui`. Die zweite Klasse ist von der ersten abgeleitet. Objekte der Klasse `PlaneGui` arbeiten mit der GUI (Schaltfläche im [Draft Tray](/Draft_Tray/de "Draft Tray/de")), der [3D-Ansicht](/3D_view "3D view") und dem [Raster](/Draft_Snap_Grid/de "Draft Snap Grid/de") zusammen. `PlaneBase`-Objekte tun dies nicht.

Die Methode `get_working_plane()` der Arbeitsebene wird verwendet, um eine Instanz der Klasse `PlaneGui` zu erhalten, die mit der 3D-Ansicht verknüpft ist. Die Methode gibt entweder die vorhandene Arbeitsebene zurück, die mit der Ansicht verknüpft ist, oder erstellt eine neue Arbeitsebene, fallls erforderlich.

```
import FreeCAD as App
import WorkingPlane

wp = WorkingPlane.get_working_plane()

origin = App.Vector(0, 0, 0)
normal = App.Vector(1, 1, 1).normalize()
offset = 17
wp.align_to_point_and_axis(origin, normal, offset)

point = App.Vector(10, 15, 2)
projection = wp.project_point(point)
print(projection)

```

Die Klasse `PlaneBase` kann verwendet werden, um Arbeitsebenen unabhängig von der GUI zuerstellen:

```
import WorkingPlane

wp = WorkingPlane.PlaneBase()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_SelectPlane/de&oldid=1519002>"