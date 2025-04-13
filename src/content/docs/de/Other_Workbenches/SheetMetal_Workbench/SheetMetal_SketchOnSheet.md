---
title: SheetMetal SkizzeAufBlech
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| SheetMetal SkizzeAufBlech |
| Menüeintrag |
| SheetMetal → Sketch On Sheet metal |
| Arbeitsbereich |
| [Blech (SheetMetal)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel |
| M S |
| Eingeführt in Version |
| - |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Der Befehl ![](/images/SheetMetal_SketchOnSheet.svg) SheetMetal SkizzeAufBlech erzeugt Ausschnitte entlang der abgekanteten Wände eines Blechobjektes. Für das Lochbild wird eine ![](/images/Workbench_Sketcher.svg) [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") verwendet.

Im Gegensatz zu dem Befehl ![](/images/PartDesign_Pocket.svg) [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de"), wo Löcher entlang der Skizzennormalen (lokale Z-Achse) ausgeschnitten werden, verhält sich dieses Werkzeug, als ob es das Blechobjekt abwickeln, die Löcher ausschneiden und letztlich die Abwicklung rückgängig machen würde.

## Anwendung

1. Eine **ebene Fläche** auswählen
2. Eine komplanare ![](/images/Workbench_Sketcher.svg) [Skizze](/Sketcher_Workbench/de "Sketcher Workbench/de") (d.h. eine auf derselben Ebene liegende) als **Lochbild** zur Auswahl hinzufügen (vorzugsweise in der [Baumansicht](/Tree_view/de "Tree view/de")).
3. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   * Die Schaltfläche ![](/images/SheetMetal_SketchOnSheet.svg) Skizze auf Blech drücken.
   * Den Menüeintrag **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Skizze auf Blech** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **SheetMetal → ![](/images/SheetMetal_SketchOnSheet.svg) Skizze auf Blech** im Kontextmenü auswählen.
   * Das Tastaturkürzel M dann S.
4. Ein **SketchOnSheet**-Objekt wird erstellt und enthält Löcher, die auf der ausgewählten Fläche beginnen und dem gekanteten Flächernverlauf folgen.
5. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

## Hinweis

* Die Skizze kann mehr als nur eine Kontur enthalten.
* Jede Kontur muss die ebene Fläche wenigstens berühren, andernfalls würde sie gar kein Loch ausschneiden.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein SheetMetal-SketchOnSheet-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet oder, wenn es sich in einem [PartDesign-Körper](/PartDesign_Body/de "PartDesign Body/de") befindet, von einem [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de")
und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Parameters

* Daten-Eigenschaft**Sketch** (`Link`): "Sketch on Sheetmetal". Verknüpfung zum Lochbild bzw. zur Ausschnittskizze.
* Daten-Eigenschaft**base Object** (`LinkSub`): "Base Object". Verknüpfung zur ebenen Fläche, auf der der Ausschnitt beginnt.
* Daten-Eigenschaft**kfactor** (`FloatConstraint`): "--wrong naming in english original!--". Standardwert: `0,50`.

## Beispiel

![](/images/SheetMetal_SketchOnSheet-05.png)

Ein einfaches Dingens

### Vorbereitung

Dieses Dingens besteht aus einem Blechprofil mit hinzugefügten Löchern.   
Es müssen also eine Skizze für das Blech und eine für das Lochbild vorbereitet werden.   
Eine gerade Linie der ersten Skizze muss komplanar zu der anderen Skizzenebene sein,   
dies ergibt die Fläche und die komplanare Skizze, die in den weiteren Schritten benutzt werden.

![](/images/SheetMetal_SketchOnSheet-01.png)

Nur eine Kontur und ein Lochbild

## Arbeitsablauf

1. Ein gekantetes Blechobjekt erstellen
   1. Die Skizze für die **Kontur** auswählen   
       ![](/images/SheetMetal_SketchOnSheet-02.png)
   2. Die Schaltfläche ![](/images/SheetMetal_AddBase.svg) [Basisprofil erstellen](/SheetMetal_AddBase/de "SheetMetal AddBase/de") auswählen   
       oder das Tastenkürzel C dann B verwenden   
       ![](/images/SheetMetal_SketchOnSheet-03.png)
2. Ein paar Löcher ausschneiden
   1. Die **ebene Fläche** auswählen
   2. Die Skizze mit dem **Lochbild** auswählen   
       ![](/images/SheetMetal_SketchOnSheet-04.png)
   3. Die Schaltfläche ![](/images/SheetMetal_SketchOnSheet.svg) Skizze auf Blech auswählen   
       oder das Tastenkürzel M then S verwenden   
       ![](/images/SheetMetal_SketchOnSheet-05.png)   
         
       Fertig!
3. Einige Hinweise
   1. Man sollte prüfen, ob die Materialstärke des gekanteten Objekts in die richtige Richtung aufgebaut wurde.   
       ![](/images/SheetMetal_SketchOnSheet-06.png)   
         
       Die gelbe Kontur sollte auf der oberen Fläche der Bodenkante liegen (wie dargestellt).   
       Um die Richtung umzukehren, muss der Wert der Eigenschaft **Bend Side** geändert werden (Outside <-> Inside).
   2. **Lochkonturen**, die die verwendete ebene Fläche nicht berühren werden keine Löcher in das gekantete Objekt schneiden.   
       ![](/images/SheetMetal_SketchOnSheet-07.png)   
       Das untere Rechteck berührt die besagte Fläche gerade eben noch und erzeugt einen Ausschnitt, während die obere Langlochkontur dieses nicht macht.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_SketchOnSheet/de&oldid=1544924>"