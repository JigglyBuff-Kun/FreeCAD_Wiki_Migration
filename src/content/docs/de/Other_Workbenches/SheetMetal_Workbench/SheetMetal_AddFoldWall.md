---
title: SheetMetal Abkanten
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                          |
| ------------------------------------------------------------------------ |
| SheetMetal Abkanten                                                      |
| Menüeintrag                                                              |
| SheetMetal → Fold a Wall                                                 |
| Arbeitsbereich                                                           |
| [Blech (SheetMetal)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel                                                     |
| C F                                                                      |
| Eingeführt in Version                                                    |
| -                                                                        |
| Siehe auch                                                               |
| _Keiner_                                                                 |
|                                                                          |

## Beschreibung

Der Befehl ![](/images/SheetMetal_AddFoldWall.svg) Abkanten kantet eine Blechplatte (Platine) entlang einer gewählten Linie mit einem vorgegebenen Radius ab.

Er kann mit einer zuvor zugeschnittenen Platine verwendet werden, um

- eine perforierte Biegezone zu erzeugen.
- ebene Abschnitte innerhalb der Biegezone und darüber hinausgehend zu erzeugen wie z.B. Zapfen oder Laschen. (erfordert Lücken in der Biegelinie)

![](/images/SheetMetal_AddFoldWall-13.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

Vorab beschnittene Platine und Biegelinie mit zwei Lücken → perforierte Biegezone mit einigen weiterhin ebenen Geometrien

## Anwendung

1. Die Fläche auswählen, die abgekantet werden soll.
2. Die Ctrl-Taste (bzw. die Command-Taste für macOS) drücken und halten.
3. Eine komplanare ![](/images/Workbench_Sketcher.svg) [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") auswählen (d.h. eine auf derselben Ebene liegende) für die (Abschnitte der) **Biegelinie** (vorzugsweise aus der [Baumansicht](/Tree_view/de "Tree view/de")).
4. Die Ctrl-Taste (bzw. die Command-Taste für macOS) loslassen.
5. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/SheetMetal_AddFoldWall.svg) Abkanten drücken.
   - Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_AddFoldWall.svg) Abkanten** auswählen.
   - Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_AddFoldWall.svg) Abkanten** im Kontextmenü auswählen.
   - Das Tastaturkürzel C dann F.
6. Ein **Fold**-Objekt wird erstell und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften für das Abkanten an einer Skizzenlinie** wird geöffnet.
7. Wahlweise die Schaltfläche Basisobjekt drücken, um eine andere Fläche auszuwählen.
8. Wahlweise die Schaltfläche Biegelinie drücken, um eine andere Skizze auszuwählen.
9. Wahlweise die Parameter im Aufgaben-Fenster anpassen.
10. Die Schaltfläche OK drücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
11. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

![](/images/SheetMetal_AddFoldWall-15.png) ![](/images/Button_right.svg)
![](/images/SheetMetal_AddFoldWall-14.png)

Biegelinie(n) in der Mitter der Perforation liegend → Damit die Biegung gleichfalls zentriert bleibt, muss die Daten-Eigenschaft**Position** auf `middle` gesetzt werden

### Aufgaben-Fenster

Ein Aufgaben-Fenster wurde in Version 0.5.00 eingeführt

Ein vorhandenes Fold-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken, um das Aufgaben-Fenster erneut zu öffnen und die Parameter zu bearbeiten.

![](/images/SheetMetal_AddFoldWall-Task.png)

- Base Object: Verknüpft eine andere Skizze mit der Eigenschaft **base Object**.
- Bend Line: Verknüpft eine andere Skizze mit der Eigenschaft **Bend Line**.
- **Flip Direction**: Schaltet die Eigenschaft **Invert Bend** um.
- **Unbend**: Schaltet die Eigenschaft **Unfold** um.
- **Bend Radius**: Eingabe für die Eigenschaft **radius**.
- **Bend Angle**: Eingabe für die Eigenschaft **angle**.

### Hinweise

- Die Biegelinienskizze muss **komplanar** zu der ausgewählten Fläche sein.

- Die Biegelinienabschnitte müssen zueinander kollinear sein.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-Fold-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

- Daten-Eigenschaft**Bend Line** (`Link`): "Bend Reference Line List". Verknüpfung zu den Biegelinienobjekten.
- Daten-Eigenschaft**Position** (`Enumeration`): "Bend Line Position". Lage der Biegelinie.

  : `intersection of planes` (Schnittlinie der Ebene, introduced in version 0.4.12), `forward` (standard), `middle`, `backward`.

- Daten-Eigenschaft**angle** (`Angle`): "Bend Angle". Biegewinkel. Standardwinkel: `90,00°`.
- Daten-Eigenschaft**base Object** (`LinkSub`): "Base Object". Basisobjekt. Verknüpfung zu der ebenen Fläche, die gekantet wird.
- Daten-Eigenschaft**invert** (`Bool`): "Invert Bend Direction". Biegerichtung umkehren. Standardwert: `false`
- Daten-Eigenschaft**invertbend** (`Bool`): "Invert Solid Bend Direction". Abzukantende Seite wechseln. Standardwert: `false`

  : `true` tauscht die Seite neben der Biegelinie, die gekantet wird.

- Daten-Eigenschaft**kfactor** (`FloatConstraint`): "Neutral Axis Position". Lage der neutralen Faser. Standardwert: `0,50`.
- Daten-Eigenschaft**radius** (`Length`): "Bend Radius". Biegeradius. Standardwert: `1,00 mm`.
- Daten-Eigenschaft**unfold** (`Bool`): "Unfold Bend". Abwickeln. Standardwert: `false`

## Beispiel

![](/images/SheetMetal_AddFoldWall-01.png)

Ein einfacher Klipp

### Vorbereitung

Dieser Klipp wird aus einer Platine hergestellt, die dreimal abgekantet wird, d.h. es müssen vier Skizzen vorbereitet werden:

: - Eine für den Platinenzuschnitt
: - Eine für die Kantung an der Vorderkante
: - Eine für die Kantung nach oben
: - Eine für die Kantung nach unten

Der einfachste Weg, um sicherzustellen, dass eine Fläche der Platine (Rohling) und alle Biegelinien komplanar sind, ist das Erstellen aller Skizzen auf derselben Ebene - der X-Y-Ebene in diesem Falle.

Die Biegelinien könnten mit einem anderen Werkzeug erstellt werden, aber hey, wir haben einen ![](/images/Workbench_Sketcher.svg) [Sketcher](/Sketcher_Workbench "Sketcher Workbench")!

![](/images/SheetMetal_AddFoldWall-21.png)
![](/images/SheetMetal_AddFoldWall-20.png)

Skizzen auf ihrer gemeinsamen Ebene und ihre Darstellung im Konstruktionsbaum

## Arbeitsablauf

1. Eine Platine erzeugen

   1. Die Skizze für den Platinenzuschnitt auswählen
   2. Schaltfläche ![](/images/SheetMetal_AddBase.svg)[Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") drücken  
       oder das Tastenkürzel C dann B benutzen  
       ![](/images/SheetMetal_AddFoldWall-02.png) ![](/images/SheetMetal_AddFoldWall-03.png)

      (Die Platine ist in Z-Richtung aufgedickt und muss daher jedes Mal umgedreht werden,  
       um die Unterseite auszuwählen, die auf der Skizzenebene liegt)

2. Abkanten der Vorderkante
   1. **Unterseite** der Platine auswählen
   2. Die **Skizze** namens **_Tip Fold line_** auswählen (vorzugsweise aus der Baumansicht)  
      (und nicht die Steuerung- bzw. Befehlstaste vergessen)
   3. Schaltfläche ![](/images/SheetMetal_AddFoldWall.svg) Abkanten drücken  
      oder das Tastenkürzel C dann F benutzen  
      ![](/images/SheetMetal_AddFoldWall-10.png) ![](/images/SheetMetal_AddFoldWall-04.png) ![](/images/SheetMetal_AddFoldWall-05.png)
   4. Die Kante sollte 90° nach unten zeigen, d.h. einige werte des Eigenschaftenfensters müssen geändert werden z.B.:
      - Der Wert des _Biegewinkels_ **angle** auf 60°
      - Der Wert für _Biegerichtung umkehren_ **invert** auf true für eine Kantung nach oben
3. Abkanten nach unten
   1. **Unterseite** der Platine auswählen
   2. Die **Skizze** namens **_Down-Fold line_** auswählen (vorzugsweise aus der Baumansicht)
   3. Schaltfläche ![](/images/SheetMetal_AddFoldWall.svg) Abkanten drücken  
      oder das Tastenkürzel C dann F benutzen  
      ![](/images/SheetMetal_AddFoldWall-11.png) ![](/images/SheetMetal_AddFoldWall-06.png) ![](/images/SheetMetal_AddFoldWall-07.png)
   4. Den Wert des _Biegewinkels_ **angle** auf 92° setzen
   5. Wenn die falsche Seite des Teiles bewegt wurde, den Wert für _Abzukantende Seite wechseln_ **invertbend** auf true setzen
4. Abkanten nach oben
   1. **Unterseite** der Platine auswählen
   2. Die **Skizze** namens **_Up-Fold line_** auswählen (vorzugsweise aus der Baumansicht)
   3. Schaltfläche ![](/images/SheetMetal_AddFoldWall.svg) Abkanten drücken  
      oder das Tastenkürzel C dann F benutzen  
      ![](/images/SheetMetal_AddFoldWall-12.png) ![](/images/SheetMetal_AddFoldWall-08.png) ![](/images/SheetMetal_AddFoldWall-09.png)
   4. Den Wert des _Biegewinkels_ **angle** auf 80° setzen
   5. Wenn die Kantung nach unten ausgeführt wurde, Wert für _Biegerichtung umkehren_ **invert** auf true setzen
   6. Falls nötig, den Wert für _Abzukantende Seite wechseln_ **invertbend** auf true setzen

Fertig!

Achtung!: Im wirklichen Leben muss die Kantung nach oben vor der Kantung nach unten erfolgen. Nur die virtuelle CAD-Welt erlaubt es, durch feste Werkstoffe hindurch zu biegen. Auf diesem Weg ändert sich die Lage des feststehenden Bereiches nicht.  
Alle Skizzen liegen auf derselben Ebene, um Skizzen, die bewegten Flächen zugeordnet sind, zu vermeiden.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_AddFoldWall/de&oldid=1545512>"
