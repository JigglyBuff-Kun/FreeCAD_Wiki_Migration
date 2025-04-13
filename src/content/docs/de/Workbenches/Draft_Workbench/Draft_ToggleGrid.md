---
title: Draft RasterUmschalten
---
|  |
| --- |
| Draft RasterUmschalten |
| Menüeintrag |
| Dienstprogramme → Raster umschalten Einrasten → Raster umschalten |
| Arbeitsbereich |
| [Draft](/Draft_Workbench/de "Draft Workbench/de"), [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| G R |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft EinrastenAufRaster](/Draft_Snap_Grid/de "Draft Snap Grid/de"), [Draft EbeneAuswählen](/Draft_SelectPlane/de "Draft SelectPlane/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Draft_ToggleGrid.svg) **Draft RasterUmschalten** schaltet die Sichtbarkeit des Rasters ein bzw. aus.

[eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de"): Jede [3D-Ansicht](/3D_view "3D view") hat ihr eigenes Raster, das jeweils ständig sichtbar, nur sichtbar während der Ausführung eines Befehls oder unsichtbar ist. Die Ausgangseinstellung der Sichtbarkeit hängt von den [Einstellungen](#Einstellungen) ab.

## Anwendung

1. Der Befehl kann verwendet werden, während ein anderer Befehl aktiv ist.
2. Es gibt mehrere Möglichkeiten den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Draft_ToggleGrid.svg) Raster umschalten in der Symbolleiste Draft-Einrasten drücken.
   * [Draft](/Draft_Workbench/de "Draft Workbench/de"): Die Schaltfläche ![](/images/Draft_ToggleGrid.svg) Raster umschalten im [Draft-Widget Einrasten](/Draft_snap_widget/de "Draft snap widget/de") drücken.
   * Draft: Den Menüeintrag **Dienstprogramme → ![](/images/Draft_ToggleGrid.svg) Raster umschalten** auswählen oder die Menüoption im Kontextmenü der [Baumansicht](/Tree_view/de "Tree view/de") oder der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * [BIM](/BIM_Workbench "BIM Workbench"): Den Menüeintrag **Einrasten → ![](/images/Draft_ToggleGrid.svg) Raster umschalten** auswählen oder die Menüoption im Kontextmenü der [3D-Ansicht](/3D_view/de "3D view/de") auswählen.
   * Das Tastaturkürzel G then R. Dieses Tastaturkürzel kann nur verwendet werden, wenn ein anderer Befehl aktiv ist.
3. Die Sichtbarkeit des Rasters, das zur aktuellen 3D-Ansicht gehört, wurde geändert:
   * Wenn kein anderer Befehl aktiv ist:
     + War das Raster unsichtbar, ist es jetzt ständig sichtbar.
     + War das Raster sichtbar, ist es jetzt nicht mehr ständig sichtbar, aber die Sichtbarkeit des Raster während der Ausführung eines Befehls bleibt unverändert.
   * Wenn eine anderer Befehl aktiv ist:
     + War das Raster unsichtbar, ist es jetzt nur während der Ausführung eines Befehls sichtbar.
     + War das Raster unsichtbar, ist es jetzt nicht mehr während der Ausführung eines Befehls sichtbar und auch nicht mehr ständig sichtbar.

## Einstellungen

Siehe auch: [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de") und [Draft Einstellungen](/Draft_Preferences/de "Draft Preferences/de").

* Es stehen mehrere Rastereigenschaften zur Verfügung: **Bearbeiten → Einstellungen... → Draft → Raster und Einrasten**.
* Um das Raster zu behalten, wenn man zu anderen Arbeitsbereichen wechselt, siehe [Fine-Tuning](/Fine-tuning/de#Draft_Workbench "Fine-tuning/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_ToggleGrid/de&oldid=1475359>"