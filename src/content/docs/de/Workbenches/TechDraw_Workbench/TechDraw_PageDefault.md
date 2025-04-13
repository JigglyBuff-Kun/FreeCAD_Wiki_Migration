---
title: TechDraw Standardseite
---

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| TechDraw Standardseite                                                                                                                              |
| Menüeintrag                                                                                                                                         |
| TechDraw → Page → Neues Zeichnungsblatt aus der Standardvorlage erstellen                                                                           |
| Arbeitsbereich                                                                                                                                      |
| [TechDraw](/TechDraw_Workbench/de "TechDraw Workbench/de")                                                                                          |
| Standardtastenkürzel                                                                                                                                |
| _Keiner_                                                                                                                                            |
| Eingeführt in Version                                                                                                                               |
| -                                                                                                                                                   |
| Siehe auch                                                                                                                                          |
| [TechDraw Seitenvorlage](/TechDraw_PageTemplate/de "TechDraw PageTemplate/de"), [TechDraw Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de") |
|                                                                                                                                                     |

## Beschreibung

Das Werkzeug **TechDraw Standardseite** erstellt ein neues Page-Objekt (Zeichnungsblatt) unter Verwendung der in den [TechDraw-Einstellungen](/TechDraw_Preferences/de "TechDraw Preferences/de") festgelegten Standardvorlage.

![](/src/assets/images/A4_LandscapeTD.svg)

Eine Vorlage, die mit TechDraw geliefert wird: A4_LandscapeTD.svg

## Anwendung

1. Ein aktives Dokument muss vorhanden sein.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/TechDraw_PageDefault.svg) Neues Zeichnungsblatt aus der Standardvorlage erstellen drücken.
   - Den Menüeintrag **TechDraw → Page → ![](/src/assets/images/TechDraw_PageDefault.svg) Neues Zeichnungsblatt aus der Standardvorlage erstellen** auswählen.

## Hinweise

- Wenn das Zeichnungsblatt mit »nicht aktuell halten« markiert ist, ob durch seine Daten-Eigenschaft**Keep Updated**, die Menüoption **Toggle Keep Updated** im Kontextmenü seines Fensters, (die Menüoption **Automatisches Aktualisieren umschalten** in seinem Kontextmenü in der Baumansicht), oder durch den entsprechend gesetzten Wert unter Einstellungen, wird es Änderungen des 3D-Modells ignorieren. Dies kann zu ungewöhnlichen Darstellungen führen (fehlende Geometrien, fehlende Maßzahlen usw.). Diese werden korrigiert, sobald die Seite mit dem Werkzeug [Seite neu zeichnen](/TechDraw_RedrawPage/de "TechDraw RedrawPage/de") aktualisiert wird. Die Zeichnung wird mit diesem Symbol ![](/src/assets/images/TechDraw_Tree_Page_Unsync.png) in der [Baumansicht](/Tree_view/de "Tree view/de") angezeigt, solange die Aktualisierung ausgesetzt ist. Diese Einstellung beeinflusst auch den Startprozess. Wenn eine Seite mit »nicht aktuell halten« markiert ist, wird sie beim Programmstart nicht dargestellt.

Wenn in der Konfigurationsdatei `user.cfg` keine Standardvorlage angegeben ist, wird das Werkzeug folgendes versuchen:

: ```
$INSTALL_DIR/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

: wobei `$INSTALL_DIR` das Verzeichnis ist, in welchem FreeCAD installiert wurde. Das kann z.B. so aussehen:

: ```
/usr/share/freecad/Mod/TechDraw/Templates/A4_LandscapeTD.svg

    ```

## Eigenschaften

### Daten

Basis

- Daten-Eigenschaft**Projection Type**: Standardprojektionsart (erster oder dritter Winkel) dieser Seite.

Page properties

- Daten-Eigenschaft**Projektionstyp**: Standard Projektionstyp (erster oder dritter Winkel) für diese Seite.
- Daten-Eigenschaft**Aktualisiert halten**: Falls false, wird die Seite nicht mit Änderungen am 3D Modell aktualisiert. Nützlich für komplizierte/langsame Zeichnungen. Siehe Anmerkungen.
- Daten-Eigenschaft**Vorlage**: Ein Verweis auf das [Vorlagen](/TechDraw_Templates/de "TechDraw Templates/de")-Objekt dieser Seite.
- Daten-Eigenschaft**Ansichten**: Eine Liste von Verweisen auf die Ansichten auf dieser Seite.
- Daten-Eigenschaft**Maßstab**: Standardmaßstab für Ansichten auf dieser Seite.
- Daten-Eigenschaft**Next Balloon Index**: Autonummerierung für Balloons.

### Ansicht

Grid

- Ansicht-Eigenschaft**Show Grid**: Zeigt ein Raster über dieser Seite an.
- Ansicht-Eigenschaft**Grid Spacing**: Abstand zwischen den Rasterlinien.

## Skripten

Siehe [TechDraw Seitenvorlage](/TechDraw_PageTemplate/de#Skripten "TechDraw PageTemplate/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_PageDefault/de&oldid=1486582>"
