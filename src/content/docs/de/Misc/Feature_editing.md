---
title: Formelemente bearbeiten
---
## Einleitung

Diese Seite erklärt den Arbeitsablauf "Feature-Editing" des Arbeitsbereichs ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de").

## Körper

Die Arbeit in PartDesign erfordert zunächst das Erstellen eines ![](/images/PartDesign_Body.svg) **[Körpers](/PartDesign_Body/de "PartDesign Body/de")**. Der PartDesign-Körper (Body-Objekt) ist ein Behälter, der einen einzelnen zusammenhängenden Festkörper enthalten soll. Wird ein Körper erstellt, werden ihm automatisch ein Ursprung (Origin-Objekt) und ein lokales Koordinatensystem, das die Standard-Bezugsebenen (XY, XZ, YZ) und die Achsen (X, Y, Z) enthält, hinzugefügt. Der Festkörper wird durch hinzufügen von Formelementen aufgebaut. Jedes [Formelement](/PartDesign_Feature/de "PartDesign Feature/de") ist kumulativ und fügt dem vorhergehenden Formelement etwas hinzu oder zieht etwas davon ab.

![](/images/PartDesign_Feature_example.png)

Feature-Editing angewendet. Von links nach rechts:  
Körper mit einem Formelement [Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de").  
Körper mit den Formelementen Quader und [Fase](/PartDesign_Chamfer/de "PartDesign Chamfer/de").  
Körper mit den Formelementen Quader, Fase und [Vertiefung](/PartDesign_Pocket/de "PartDesign Pocket/de").

Ein Dokument kann mehrere Körper enthalten, aber nur einer kann aktiv sein. Neue Formelemente werden dem aktiven Körper hinzugefügt. Ein Körper kann durch Doppelklick in der [Baumansicht](/Tree_view/de "Tree view/de") aktiviert bzw. deaktiviert werden. Der aktive Körper wird in der Baumansicht farblich hervorgehoben.

![](/images/PartDesign_Body_tree.png)

### Was ist ein zusammenhängender Festkörper?

Ein einzelner zusammenhängender Festkörper ist ein Objekt wie ein Gussteil oder etwas, das maschinell aus einem einzigen Metallblock herausgearbeitet wurde. Wenn das Objekt Nägel, Schrauben oder Kleber enthält, ist es kein einzelner zusammenhängenden Festkörper. Ein praktisches Beispiel ist ein Holzstuhl, der aus mehreren Körpern zusammengestellt wird, mit einem für jede seiner Unterkomponenten (Beine, Latten, Sitz usw.).

In FreeCAD-Version 1.0 wurde eine experimentelle Eigenschaft eingeführt, die Körper ermöglicht, die nicht zusammenhängend sind. Dies kann auch in den [Einstellungen](/PartDesign_Preferences/de#Allgemein "PartDesign Preferences/de") als Standardeinstellung für neu erstellte Körper vorgegeben werden. Dies ist nicht dafür gedacht, um einen Holzstuhl, wie in dem vorherigen Beispiel, aufzubauen. Sie soll Formelemente ermöglichen, die (vorerst) nicht verbundene Festkörper ergeben, die durch später folgende Formelemente zu einem zusammenhängenden verbunden werden.

Wenn ein Modell mehrere Körper benötigt, wie der Holzstuhl, kann der uninverselle ![](/images/Std_Part.svg) [Part-Container](/Std_Part/de "Std Part/de") verwendet werden, um sie zu gruppieren und das Ganze als Einheit zu bewegen.

### Sichtbarkeit der Körperelemente

Standardmäßig präsentiert ein Körper (Body-Objekt) sein neuestes Formelement nach außen. Dieses Formelement ist die "Spitze" (von engl. tip) des Körpers. Diese "Spitze" markiert auch die Stelle, an der neue Formelemente hinzugefügt werden. Es ist möglich, die "Spitze" auf ein Formelement in der Mitte des Körpers zu versetzen, um dort neue Objekte einzufügen (Formelemente, Skizzen oder Bezugselemente). Wird eine neues Formelement in den Baum eingefügt, wird das vorherige ausgeblendet und das neue Formelement wird zur "Spitze".

:   (In der Baumansicht wird die "Spitze" mit dem passenderen Begriff Arbeitsposition bezeichnet, da sie die Position kennzeichnet an der weitergearbeitet wird, also neue Formelemente an- bzw. eingefügt werden)

Es kann immer nur ein Formelement zur Zeit sichtbar sein. Es ist möglich, die Sichtbarkeit eines beliebigen Formelements im Körper [umzuschalten](/Std_ToggleVisibility/de "Std ToggleVisibility/de"), indem man es in der Baumansicht markiert und die Leertaste drückt, wodurch man sich in der Verlaufsgeschichte des Körpers zurück bewegt. Man beachte, dass das Ändern der Sichtbarkeit die Arbeitsposition des Körpers nicht verändert.

### Objekte verschieben und neu ordnen

Die Formelemente eines Körpers können anders angeordnet werden oder sie können in einen anderen Körper zu verschoben werden. Das Formelement auswählen und mit einem Rechtsklick darauf ein Kontextmenü öffnen, das beide Optionen enthält. Die Operation kann abgebrochen werden, wenn das Objekt Abhängigkeiten im Quellkörper aufweist, z.B. wenn es an einer Fläche befestigt ist. Um eine Skizze in einen anderen Körper zu verschieben, sollte sie keine Verknüpfungen zu externer Geometrie enthalten.

![](/images/PartDesign_workflow.svg)

Schematische Darstellung des PartDesign-Arbeitsablaufes.

## Bezugsgeometrie

Die Bezugsgeometrie besteht aus benutzerdefinierten Ebenen, Linien, Punkten oder extern verknüpften Formen. Sie können zur Verwendung als Referenz für Skizzen und Formelemente erstellt werden. Es gibt viele Möglichkeiten zum [Befestigen](/Part_EditAttachment/de "Part EditAttachment/de") von Bezugsobjekten.

In FreeCAD sind Bezugsebenen sinnvoll, wenn Skizzen in ungewöhnlichen Ausrichtungen positioniert werden, d.h. auf gegenüber den Hauptachsen versetze oder gedrehte Ebenen. Da Skizzen aber auch in ungewöhnlichen Ausrichtungen positioniert werden können und dieselben Befestigungsmöglichkeiten besitzen, wie Bezugsebenen, ist es oft nicht nötig, Bezugsebenen zu verwenden. Bezugsebenen sind am sinnvollsten, wenn es mehrere Skizzen mit derselben ungewöhnlichen Ausrichtung gibt. Wird die Ausrichtung der Bezugsebene angepasst, werden auch alle zugehörigen Skizzen sowie mit ihnen erstellte Formelemente entsprechend ausgerichtet.

Obwohl die FreeCAD-Version 1.0 schon Code enthält, der das [Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") abmildert, ist es immer noch am besten, Skizzen und Bezugsebenen an den Basisebenen des Ursprung-Objekts eines Körpers zu befestigen, wann immer es möglich ist. Das Referenzieren auf erzeugte Geometrie (Geometrie, die das Ergebnis eines Vorgangs zur Erstellung eines Formelements ist, z.B. ein Block oder eine Vertiefung) kann weiterhin weniger stabile Modelle ergeben. Siehe [Ratschläge zum Erstellen stabiler Modelle](#Ratschläge_zum_Erstellen_stabiler_Modelle) weiter unten.

## Ratschläge zur Erstellung stabiler Modelle

Die Idee der parametrischen Modellierung beinhaltet, dass die Werte bestimmter Parameter verändert werden können und die nachfolgenden Schritte den neuen Werten entsprechend geändert werden. Bei schwerwiegenden Änderungen kann das Modell jedoch aufgrund des [Problem der topologischen Benennung](/Topological_naming_problem/de "Topological naming problem/de") brechen. Der Bruch kann minimiert werden, wenn die folgenden Konstruktionsprinzipien berücksichtigt werden:

* Es sollte vermieden werden, Skizzen und eigene Bezugselementen an generierte Geometrie, d.h. jede Fläche, Kante oder Knoten des Festkörpers des Modells, anzuhängen. Stattdessen sollten sie an Hauptebenen oder -achsen befestigt werden. Skizzen oder Bezugselemente, die an diese Hauptebenen oder -achsen befestigt werden, werden nicht unerwartet an andere Referenzen befestigt; falls nötig, Befestigungsversatzwerte anpassen.
* Eine "Hauptskizze" (Master-Sketch) verwenden. Da eine Hauptskizze vor dem Rest des Modells angelegt wird, kann sie sich nur auf die Hauptebenen oder -achsen beziehen.
  + Eine Hauptskizze sollte so einfach wie möglich sein und grundlegende geometrische Elemente des Modells enthalten.
  + Elemente der Hauptskizze können beim Modellieren nachfolgender Formelemente referenziert werden.
  + Eine Hauptskizze kann die erste Skizze im Körper sein oder sich gänzlich außerhalb des Körpers befinden. Im ersten Fall kann sie direkt als externe Geometrie referenziert werden, im anderen Fall über einen ![](/images/PartDesign_ShapeBinder.svg) [Formbinder](/PartDesign_ShapeBinder/de "PartDesign ShapeBinder/de") or ![](/images/PartDesign_SubShapeBinder.svg) [Teilformbinder](/PartDesign_SubShapeBinder/de "PartDesign SubShapeBinder/de").
* FormBinder nicht aus generierter Geometrie erstellen. Nicht vergessen, dass (Teil-)Formbinder ein Problem darstellen können, wenn Geometrie aus der Skizze, auf der sie basieren, gelöscht wird.
* Es sollte immer zuerst versucht werden, auf eine Skizze oder auf Skizzenelemente zu referenzieren, anstatt auf generierte Geometrie. Ist man gezwungen auf generierte Geometrie zu referenzieren, sollte das erste Formelement verwendet werden, das das benötigte Element enthält. Änderungen durch spätere Schritte werden das Modell dann nicht zerstören.
* *Modifikationen* wie Verrundungen und Fasen so spät wie möglich im Modellbaum einsetzen.

## Anleitungen

Die Seite [Tutorien](/Tutorials/de "Tutorials/de") enthält einige Beispiele für die Anwendung der Feature-Editing-Methode des Arbeitsbereichs [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de").

* [Erstellen eines einfachen Teils mit PartDesign](/Creating_a_simple_part_with_PartDesign/de "Creating a simple part with PartDesign/de")
* [Grundlegende PartDesign-Anleitung 0.19](/Basic_Part_Design_Tutorial_019/de "Basic Part Design Tutorial 019/de")
* [Basic Attachment Tutorial](/Basic_Attachment_Tutorial/de "Basic Attachment Tutorial/de")

## Verwandtes

* [Konstruktive Festkörpergeometrie](/Constructive_solid_geometry/de "Constructive solid geometry/de")

Retrieved from "<http://wiki.freecad.org/index.php?title=Feature_editing/de&oldid=1512189>"