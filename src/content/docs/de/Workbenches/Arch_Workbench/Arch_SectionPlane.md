---
title: Arch Schnittebene
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Schnittebene |
| Menüeintrag |
| Anmerkung → Schnittebene |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| S P |
| Eingeführt in Version |
| - |
| Siehe auch |
| [Draft Form2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de") |
|  |

## Beschreibung

Das Werkzeug **Arch Schnittebene** platziert im aktuellen Dokument eine Schnittebene "Ding", die eine Schnitt- oder Ansichtsebene definiert. Das "Ding" wird entsprechend der aktuellen [Entwurf Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") positioniert und kann durch Verschieben und Drehen verschoben und neu ausgerichtet werden, bis es die 2D-Ansicht beschreibt, die du erhalten möchtest. Das Objekt Schnittebene berücksichtigt nur einen bestimmten Satz von Objekten. Objekte, die beim Erstellen einer Schnittebene ausgewählt werden, werden automatisch zu diesem Satz hinzugefügt. Andere Objekte können später mit den Werkzeugen [Arch Komponente hinzufügen](/Arch_Add/de "Arch Add/de") und [Arch Komponente entfernen](/Arch_Remove/de "Arch Remove/de") hinzugefügt oder daraus entfernt werden oder durch Doppelklicken auf die Schnittebene in der Baumansicht.

Die Schnittebene allein wird keine Ansicht der gesetzten Objekte erzeugen. Dazu musst du eine [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de") erzeugen, um eine Ansicht auf einer [TechDraw StandardSeite](/TechDraw_Workbench/de "TechDraw Workbench/de") zu erzeugen.

![](/images/Arch_SectionPlane_example.jpg)

## Anwendung

1. Wahlweise die [Draft-Arbeitsebene](/Draft_SelectPlane/de "Draft SelectPlane/de") so ausrichten, dass sie die Ebene widerspiegelt, auf der die Schnittebene platziert werden soll.
2. Die Objekte auswählen, die in der Schnittansicht enthalten sein sollen.
3. Die Schaltfläche ![](/images/Arch_SectionPlane.svg) [Schnittebene](/Arch_SectionPlane "Arch SectionPlane") drücken oder Tastaturkürzel S dann P.
4. Die Schnittebene in die richtige Position [verschieben](/Draft_Move/de "Draft Move/de") und [drehen](/Draft_Rotate/de "Draft Rotate/de"), falls erforderlich.
5. Die Schnittebene auswählen, falls sie nicht bereits ausgewählt ist.
6. Entweder [Draft Form2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de") oder [TechDraw ArchAnsicht](/TechDraw_ArchView/de "TechDraw ArchView/de") verwenden, um eine Ansicht zu erstellen.

## Optionen

* Das Schnittebenenobjekt berücksichtigt nur eine bestimmte Menge von Objekten, nicht alle Objekte des Dokuments. Objekte können einem Schnittebenenobjekt mit den Werkzeugen [Arch Hinzufügen](/Arch_Add/de "Arch Add/de") und [Arch Entfernen](/Arch_Remove/de "Arch Remove/de") hinzugefügt oder entfernt werden oder durch Doppelklicken auf die Schnittebene in der Baumansicht, Auswählen von Objekten entweder in der Liste oder in der 3D-Szene und Drücken der Schaltflächen **hinzufügen** oder **entfernen**.

* Wenn ein Schnittebenenobjekt ausgewählt ist, verwende das Werkzeug [Draft Form2DAnsicht](/Draft_Shape2DView/de "Draft Shape2DView/de"), um ein Formobjekt zu erstellen, das die Schnittansicht im Dokument darstellt.

![](/images/Arch_Section_example2.jpg)

* Eine [TechDraw Arch-Ansicht](/TechDraw_ArchView/de "TechDraw ArchView/de") erstellen.

![](/images/Arch_Section_example3.jpg)

* Die Schnittebene kann auch verwendet werden, um die gesamte 3D Ansicht zu zeigen, die von einer unendlichen Ebene geschnitten wird. Dies ist nur visuell und hat keinen Einfluss auf die Geometrie der geschnittenen Objekte.

![](/images/Arch_SectionPlane_CutView.jpg)

## Eigenschaften

* Daten-Eigenschaft**Nur Festkörper**: Wenn dies True ist, werden nicht-feste Objekte in der Einstellung nicht berücksichtigt.
* Ansicht-Eigenschaft**Anzeige Länge**: Die Länge des Schnittebenen-Gizmos in der 3D-Ansicht. Hat keinen Einfluss auf die resultierende Ansicht
* Ansicht-Eigenschaft**Anzeige Höhe**: Die Höhe des Schnittebenen-Gizmos in der 3D-Ansicht. Hat keinen Einfluss auf die resultierende Ansicht
* Ansicht-Eigenschaft**Pfeilgröße**: Die Größe der Pfeile des Schnittebenen-Gizmos in der 3D-Ansicht. Hat keinen Einfluss auf die resultierende Ansicht
* Ansicht-Eigenschaft**Schnittansicht**: Wenn dies `true` ist, wird die gesamte 3D-Ansicht an der Stelle dieser Schnittebene geschnitten.
* Ansicht-Eigenschaft**Clipansicht**: Wenn dies `true` ist, wird die Ansicht auf die Anzeigehöhe und -länge der Schnittebene zugeschnitten. Dadurch wird die Schnittebene effektiv zu einer orthografischen Kamera, wodurch das Sichtfeld begrenzt wird.

![](/images/Arch_SectionPlane_ClipView.png)

Die Arch Schnittebene mit der Option Clip Ansicht verhält sich wie eine Kamera und begrenzt das Sichtfeld.

## Kleine Verbesserungen

* Manuelles Hinzufügen einer Eigenschaft namens **RotateSolidRender** des Typs **App::PropertyAngle** zu den **Ansicht**-Eigenschaften der Schnittebene (ein Rechtsklick in die Ansicht-Eigenschaften → Ausgeblendete anzeigen und ein weiterer Rechtsklick → Eigenschaft hinzufügen) ermöglicht, das Render-Objekt zu drehen, wenn der Festkörper-Modus benutzt wird. Dies ist sinnvoll, wenn eine gerenderte Ansicht bspw. sowohl Arch- als auch Draft-Elemente enthält und die Arch-Elemente im Verhältnis zu den Draft-Elementen gedreht sind.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug SchnittEbene kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit den folgenden Funktionen verwendet werden:

```
Section = makeSectionPlane(objectslist=None, name="Section")

```

* Erzeugt ein `Schnitt` Objekt aus `Objektliste`, die eine Liste von Objekten ist.

Beispiel:

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 0, 0)
baseline = Draft.makeLine(p1, p2)
baseline2 = Draft.makeLine(p1, -1*p2)

Wall1 = Arch.makeWall(baseline, length=None, width=150, height=2000)
Wall2 = Arch.makeWall(baseline2, length=None, width=150, height=1800)
Structure = Arch.makeStructure(length=1000, width=1000, height=200)
FreeCAD.ActiveDocument.recompute()

BuildingPart = Arch.makeBuildingPart([Wall1, Wall2])

Floor = Arch.makeFloor([BuildingPart])
Building = Arch.makeBuilding([Floor, Structure])
Site = Arch.makeSite(Building)
FreeCAD.ActiveDocument.recompute()

Section1 = Arch.makeSectionPlane([Wall1, Wall2])
Section2 = Arch.makeSectionPlane([Structure])
Section3 = Arch.makeSectionPlane([Site])
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_SectionPlane/de&oldid=1560886>"