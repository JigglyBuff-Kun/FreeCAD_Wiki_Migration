---
title: BIM IfcEigenschaften
---
|  |
| --- |
| BIM IfcEigenschaften |
| Menüeintrag |
| Manage → Manage IFC properties... |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der **IFC properties manager** ermöglicht die IFC-Eigenschaften eines ausgewählten Objekts, vieler ausgewählter Objekte oder aller Objekte des Dokuments zu bearbeiten. IFC-Eigenschaften sind Informationen, die an einzelne Objekte angehängt sind. Sie können nur an [BIM-Objekte](/BIM_Workbench/de "BIM Workbench/de") angehängt werden, daher muss jedes Nicht-BIM-Objekt zunächst mit dem Werkzeug [Komponente](/Arch_Component/de "Arch Component/de") in ein BIM-Objekt umgewandelt werden, bevor es IFC-Eigenschaften enthalten kann.

![](/images/BIM_ifcproperties_screenshot.png)

IFC-Properties-Manager

IFC Eigenschaften können benutzerdefiniert sein, d. h., du kannst einen eigenen Namen und einen eigenen Wert für sie definieren, oder sie folgen einem voreingestellten Schema, das durch den IFC Standard definiert ist. Diese Eigenschaften sind in **Eigenschaftssätzen** definiert und werden in der Regel für die gängigsten IFC Typen zur Verfügung gestellt. Zum Beispiel ist der Eigenschaftssatz **Pset\_BeamCommon** für Träger vorgesehen. Vordefinierte Eigenschaftssätze enthalten in der Regel übliche Eigenschaften, die das IFC Schema für einen bestimmten Typ definiert hat. So enthält z. B. der Eigenschaftssatz *Pset\_WallCommon*, der an Wände angehängt werden soll, Eigenschaften, die definieren, ob die Wand tragend ist oder außen bzw. innen liegt.

Du kannst deine eigenen Eigenschaften und Eigenschaftssätze erstellen und sie jedem Objekt zuweisen. Es gibt im IFC Schema keine Vorgabe, vordefinierte Psets für gängige Typen hinzuzufügen, und auch keine Begrenzung für das Hinzufügen eigener Eigenschaften. Dies ist eine Entscheidung, die den Benutzern überlassen wird. Normalerweise werden diese Dinge bei der Arbeit im Team zusammen mit anderen BIM Anforderungen entschieden, um sicherzustellen, dass alle produzierten BIM Modelle die gleichen Anforderungen erfüllen.

### Eigene Eigenschaftssätze definieren

Die vorhandenen vorgefertigten Zusammenstellungen von Eigenschaften werden in FreeCADs Quellenverzeichnis gespeichert, das man findet, wenn man folgendes in die [Python-Konsole](/Python_console/de "Python console/de") eingibt:

```
FreeCAD.getResourceDir()

```

Die vordefinierten Property-Sets befinden sich in /Mod/BIM/Presets/pset\_definitions.csv.

In der CSV-Datei steht jede Zeile für einen anderen Satz Eigenschaften, beginnend mit dem Namen des Satzes und einer beliebigen Anzahl von Name;Typ-Paaren, die einen Namen für die Eigenschaft und ihre Art festlegen. Zum Beispiel:

```
Pset_FreeCAD;Name;IfcLabel;Version;IfcReal

```

Dies würde eine Zusammenstellung von Eigenschafen unter dem Namen "FreeCAD" definieren (das Präfix "Pset\_" ist nicht obligatorisch, aber üblich), die zwei Eigenschaften enthält: eine namens "Name", die ein IfcLabel (ein Text) ist, und eine andere namens "Version", die ein IfcReal (ein numerischer Wert mit Dezimalstellen) ist.

Man kann eine benutzerdefinierte csv-Datei mit einem eigenen Satz Eigenschaften hinzufügen. Diese Datei muss CustomPsets.csv genannt werden und in $USERAPPDATA/BIM abgelegt werden.

Der Ordner $USERAPPDATA hängt von der eigenen Plattform bzw. dem eigenen Betriebssystem ab.

* Unter Windows ist es normalerweise: %APPDATA%/FreeCAD
* Unter Linux ist es normalerweise: $HOME/.FreeCAD
* Unter macOS ist es normalerweise: $HOME/Library/Preferences/FreeCAD

Er kann auch durch Eingabe des Folgenden in der Python-Konsole gefunden werden:

```
FreeCAD.getUserAppDataDir()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_IfcProperties/de&oldid=1520004>"