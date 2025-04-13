---
title: Zusammenbau
---
## Einleitung

In FreeCAD wird das Wort "Zusammenbau" normalerweise verwendet, um sich auf ein [3D Modell](/Model/de "Model/de") zu beziehen, das aus mehreren unterscheidbaren Teilen besteht, die auf irgendeine Art und Weise zusammengesetzt werden, um ein funktionales Objekt (eine Baugruppe) zu schaffen, so wie Produkte im echten Leben hergestellt werden.

Zum Beispiel sind eine Schraube, eine Beilagscheibe und eine Mutter drei separate Körper, die zusammengesetzt eine Baugruppe bilden.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

Links: drei einzelne beieinander liegende Teile, die mit [PartDesign Körper](/PartDesign_Body "PartDesign Body") erstellt wurden. Rechts: die einzelnen Teile zu einer Einheit in [Std Part](/Std_Part "Std Part") zusammengestellt.

## Anwendung

### Manueller Zusammenbau

Im Allgemeinen werden keine speziellen Werkzeuge benötigt, um Baugruppen zusammenzubauen, es müssen nur viele verschiedene [Körper](/Body/de "Body/de") in irgendeiner Weise angeordnet haben.

Um die Körper wie gewünscht zu positionieren, gibt es folgende Mölichkeiten:

* Das Werkzeug [Std TransformManip](/Std_TransformManip/de "Std TransformManip/de") verwenden,
* Den Dialog ![](/images/Std_Placement.svg) [Std Positionierung](/Std_Placement/de "Std Placement/de") verwenden
* Die Eigenschaft [Platzierung](/Placement/de "Placement/de") direkt im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

Es kann einer der [externen Pseudo-Zusammenbau-Arbeitsbereiche](/External_workbenches/de "External workbenches/de") wie Lattice2, Manipulator, Part-o-magic oder WorkFeature verwendet werden, um Schnittpunkte zu ermitteln, Abstände zu messen und Objekte auf die gewünschte Weise zu verteilen.

Im Prinzip wurde das ![](/images/Std_Part.svg) [Std Part](/Std_Part/de "Std Part/de")-Objekt so ausgelegt, dass es als Grundbaustein für die Erstellung von Baugruppen dient. Dieses Objekt wird verwendet, um mehrere [Körper](/Body/de "Body/de") zu gruppieren und sie zusammen als eine Einheit, d.h. als Unterbaugruppe, zu bewegen. Anschließend kann diese Unterbaugruppe neben oder innerhalb anderer Unterbaugruppen platziert werden, um die endgültige Baugruppe zu erstellen.

### Zusammenbau mit Randbedingungen

Es kann auch der enthaltene Arbeitsbereich [Assembly](/Assembly_Workbench/de "Assembly Workbench/de") verwendet werden oder entsprechende Addons wie
![](/images/A2p_workbench.svg) [A2plus](/A2plus_Workbench/de "A2plus Workbench/de"), ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench/de "Assembly3 Workbench/de") oder
![](/images/Assembly4_workbench_icon.svg) [Assembly4](/Assembly4_Workbench/de "Assembly4 Workbench/de").
Bitte beachten, dass [Assembly2](/Assembly2_Workbench/de "Assembly2 Workbench/de") nicht gepflegt wird und daher für neue Modelle nicht zu empfehlen ist.

Die Arbeitsbereiche zum Erstellen von Baugruppen verwenden Randbedingungen und Ausdrücke, um Beziehungen zwischen den Objekten in einem Modell festzulegen und so die Objekte mathematisch an ihren Platz zu binden, z. B. "diese Fläche sollte an dieser anderen Fläche haften", "dieser Zylinder sollte konzentrisch zu diesem Kreis sein", "dieser Punkt sollte dieser Kante folgen", usw.

Dies ist eine erweiterte Anwendung der Software, die normalerweise für komplexemechanischen Systeme eingesetzt wird. Wenn ein [Modell](/Model/de "Model/de") nicht sehr komplex ist, ist die Verwendung eines Arbeitsbereichs zum Erstellen von Baugruppen möglicherweise nicht nötig.

## Hinweise

* Seit FreeCAD 1.0 gibt es einen offiziellen Arbeitsbereich [Assembly](/Assembly_Workbench/de "Assembly Workbench/de"), der standardmäßig im System enthalten ist.

* Bitte beachten, dass Arbeitsbereiche zum Erstellen von Baugruppen im Allgemeinen nicht miteinander kompatibel sind. Wird eine Baugruppe mit einem dieser Arbeitsbereiche erstellt, sollte man bei diesem bleiben und keinen anderen Arbeitsbereich für die Arbeit an demselben Dokument verwenden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly/de&oldid=1492887>"