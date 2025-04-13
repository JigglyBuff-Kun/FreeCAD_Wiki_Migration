---
title: Curves Rohrschale
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| Curves Rohrschale |
| Menüeintrag |
| Surfaces → Pipeshell |
| Arbeitsbereich |
| [Curves](/Curves_Workbench/de "Curves Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug ![](/images/Curves_Pipeshell.svg) Curves Rohrschale erstellt eine Rohrschale (PipeShell-Objekt). Dieses Werkzeug ist Teil des [externen Arbeitsbereichs](/External_workbenches/de "External workbenches/de") [Curves](/Curves_Workbench/de "Curves Workbench/de").

## Anwendung

1. Zum Arbeitsbereich ![](/images/Curves_workbench_icon.svg) [Curves](/Curves_Workbench/de "Curves Workbench/de") wechseln (muss mit dem ![](/images/Std_AddonMgr.svg) [Addon-Manager](/Std_AddonMgr/de "Std AddonMgr/de") installiert werden, wenn noch nicht geschehen)
2. Die Kante in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, die als Leitkurve (Sweep-Path) verwendet wird.
3. Eine oder mehrere benötigte Rohrschalenprofile (Profile-Objekte) in der [Baumansicht](/Tree_view/de "Tree view/de") auswählen.
4. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Curves_Pipeshell.svg) Pipeshell In der Symbolleiste drücken.
   * Den Menüeintrag **Surfaces → Pipeshell** auswählen.
5. Die `Pipeshell`-Parameter an die geforderten Randbedingungen anpassen.

## Eigenschaften

### Daten

Basis

* Daten**Placement**: [Placement](/Placement "Placement") is the location and orientation of an object in space.
* Daten**Label**: User name of the object in the [Tree view](/Tree_view "Tree view").

Main

* Daten**Mode**: Default is *Frenet*. Mode is used to select the sweeping algorithm. Choices: Frenet, DiscreteTrihedron, FixedTrihetron, Binormal, ShapeSupport, AuxiliarySpine.
* Daten**Output**: Default is *Surface*. Output determines the shape of the object. Choices: Surface, Sections, Lofted Sections.
* Daten**Profile**: List of the used profiles.
* Daten**Spine**:

Mode

* Daten**Auxiliary**:
* Daten**Contact**:
* Daten**Corrected**:
* Daten**Direction**:
* Daten**Equi Curvi**:
* Daten**Location**:
* Daten**Support**:

Settings

* Daten**Max Degree**:
* Daten**Max Segments**:
* Daten**Samples**:
* Daten**Solid**: Default is *False*
* Daten**Tol3d**: Default is *0.00*.
* Daten**Tol Ang**: Default is *0.00*.
* Daten**Tol Bound**: Default is *0.00*.

## Hinweise

* *Pipeshell* erfordert ein Drahtobjekt als Leitkurve (Sweep-Path), und mindestens ein Rohrschalenprofil (Pipeshell-*Profile*).
* Die beiden Werkzeuge *Rohrschale* und *Rohrschalenprofil* arbeiten zusammen, wie ein "erweitertes" Austragungswerkzeug (Sweep-Tool).

## Einschränkungen

## Skripten

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Pipeshell/de&oldid=1551291>"