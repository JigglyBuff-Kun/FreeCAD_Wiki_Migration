---
title: Arch Profil
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Profil |
| Menüeintrag |
| 3D/BIM → Generic 3D tools → Profil |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.19 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **ArchProfil** erstellt ein parametrisches 2D-Profil-Objekt. Dieses Objekt kann dann als Basis für verschiedene andere Werkzeuge verwendet werden, die Extrusionen durchführen, wie [Arch Rahmen](/Arch_Frame/de "Arch Frame/de"), [Arch\_Vorhangfassade](/Arch_CurtainWall/de "Arch CurtainWall/de") oder [Part Extrudieren](/Part_Extrude/de "Part Extrude/de").

Siehe die [Liste von verfügbaren Voreinstellungen](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv).

Das Werḱzeug Profil ist auch im Werkzeug [Arch Struktur](/Arch_Structure "Arch Structure") integriert; alle voreingestellten Profile sind auch dort verfügbar.

## Anwendung

1. Die Schaltfläche ![](/images/Arch_Profile.svg) Profil drücken.
2. Eine Voreinstellung im Aufgaben-Bereich des Werkzeugs auswählen.
3. Einen Punkt in der [3D-Ansicht](/3D_view/de "3D view/de") auswählen, um das Profil zu positionieren.

## Eigenschaften

### Daten

* Daten-Eigenschaft**Height**: Die (Gesamt)-Höhe des Profils
* Daten-Eigenschaft**Width**: Die (Gesamt)-Breite des Profils
* Daten-Eigenschaft**Diameter**: Der Durchmesser des Profils (nur Rundprofile)
* Daten-Eigenschaft**Thickness**: Die Wandstärke des Rohrprofils (nur runde und rechteckige Hohlprofile)
* Daten-Eigenschaft**Web Thickness**: (Stregbreite) Die Wandstärke des Profilsteges (nur H- und I-Profile)
* Daten-Eigenschaft**Flange Thickness**: (Flanschstärke) Die Wandstärke der Profilflansche (nur H- und I-Profile)

## Benutzerdefinierte Profile hinzufügen

Eine zusätzliche CSV-Datei kann durch den Benutzer erstellt werden, die selbsterstellte Profile (Umrisse) enthält. Sie muss profiles.csv heißen und hier gespeichert sein:

```
$FREECAD_USER_DIR/BIM/

```

Der Wert für `$FREECAD_USER_DIR` kann über die [Python-Konsole](/Python_console/de "Python console/de") ermittelt werden:

```
FreeCAD.getUserAppDataDir()

```

Der Inhalt deiner profiles.csv-Datei muss den gleichen Regeln wie die Datei [profiles.csv](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/Presets/profiles.csv) im Quell-Code entsprechen.

Die CSV-Datei muss eine Zeile für jedes verfügbare Profil enthalten, formatiert wie folgt:

* Für C-Profile: Kategorie, Name, Profilklasse, Durchmesser, Wandstärke
* Für H-, U- und T-Profile: Kategorie, Name, Profilklasse, Breite, Höhe, Stegbreite, Flanschstärke
* Für L-Profile: Kategorie, Name, Profilklasse, Breite, Höhe, Wandstärke
* Für R-Profile: Kategorie, Name, Profilklasse, Breite, Höhe
* Für RH-Profile: Kategorie, Name, Profilklasse, Breite, Höhe, Wandstärke

Alle Abmessungen müssen in Millimetern angegeben werden. Mögliche Profilklassen sind:

* C: Kreisförmiges Rohr
* H: [H- oder I-Profil](https://de.wikipedia.org/wiki/Profilstahl)
* R: Rechteckig
* RH: Rechteckig hohl
* U: U-Profil
* L: L-Profil
* T: T-Profil

Es können zusätzliche Profiltypen erstellt werden, aber zuerst muss in [ArchProfile.py](https://github.com/FreeCAD/FreeCAD/blob/main/src/Mod/BIM/ArchProfile.py) eine entsprechende Klasse definiert werden.

## Skripten

Das Profil-Werkzeug kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
profile = makeProfile(profile_list)

```

wobei `profile_list` die verschiedenen Elemente einer Liste in der CSV-Datei enthält.

Beispiel:

```
import Arch
Arch.makeProfile([0, 'REC', 'REC100x100', 'R', 100, 100])

```

wobei das erste Element der Liste eine Bestellnummer (order number) ist, die bisher nicht verwendet wird.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Profile/de&oldid=1482630>"