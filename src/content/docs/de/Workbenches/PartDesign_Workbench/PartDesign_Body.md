---
title: PartDesign Körper
---
|  |
| --- |
| PartDesign Körper |
| Menüeintrag |
| Part Design → Körper erstellen |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [Std Part](/Std_Part/de "Std Part/de"), [Formelemente bearbeiten](/Feature_editing/de "Feature editing/de") |
|  |

## Beschreibung

Ein PartDesign-Körper ist das Basiselement, um mit dem Arbeitsbereich [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") Festkörper zu erstellen. Er kann [Skizzen](/Sketch/de "Sketch/de"), [Bezugsobjekte](/Datum/de "Datum/de") und [PartDesign-Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") enthalten, die bei der Erstellung eines [einzelnen, zusammenhängenden Festkörpers](#Einzelner_zusammenhängender_Festkörper) helfen.

Der Körper stellt ein **Ursprung**-Objekt (Origin-Objekt) bereit, das lokale X-, Y- und Z-Achsen sowie Standardebenen beinhaltet. Diese Elemente können als Referenzen verwendet werden, um daran [Skizzen](/Sketch/de "Sketch/de") und [Grundelemente](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de") zu befestigen.

Ein ![](/images/PartDesign_Body.svg) PartDesign-Körper darf nicht mit einem ![](/images/Std_Part.svg) [Std Part](/Std_Part/de "Std Part/de") verwechselt werden. Das erste ist ein besonderes Objekt aus dem Arbeitsbereich ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), zum Erstellen [einzelner, zusammenhängender Festkörper](#Einzelner_zusammenhängender_Festkörper) aus [PartDesign-Formelementen](/PartDesign_Feature/de "PartDesign Feature/de"). Das [Std Part](/Std_Part/de "Std Part/de") ist ein gruppierendes Objekt, zum Erstellen von [Baugruppen](/Assembly/de "Assembly/de"); es wird nicht zum Modellieren von Objekten verwendet, sondern um unterschiedliche Objekte im Raum anzuordnen. Mehrere Körper und andere [Std Parts](/Std_Part/de "Std Part/de") können innerhalb von [Std Parts](/Std_Part/de "Std Part/de") positioniert werden, um eine komplexe Baugruppe zu erstellen.

![](/images/PartDesign_Body_tree.png) ![](/images/PartDesign_Body_example.png)

Links: die Baumansicht, die die Formelemente zeigt, die aufeinanderfolgend die endgültige Form des Objekts erstellen. Rechts: das endgültige Objekt, das in der [3D-Ansicht](/3D_view/de "3D view/de") sichtbar ist.

## Anwendung

Wenn kein vorhergehender Körper ausgewählt ist:

1. Die Schaltfläche ![](/images/PartDesign_Body.svg) Körper erstellen drücken. Es wird ein leerer Körper erstellt und automatisch *[aktiviert](#Aktiver_Status)*.
2. Jetzt kann die Schaltfläche ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") gedrückt werden, um eine [Skizze](/Sketch/de "Sketch/de") im Körper zu erstellen, die mit ![](/images/PartDesign_Pad.svg) [Block](/PartDesign_Pad/de "PartDesign Pad/de") verwendet werden kann.
3. Alternativ ein Grundelement aus den [PartDesign-Formelementen](/PartDesign_Feature/de "PartDesign Feature/de") hinzufügen, zum Beispiel einen ![](/images/PartDesign_AdditiveBox.svg) [Quader](/PartDesign_AdditiveBox/de "PartDesign AdditiveBox/de").

Wenn ein Festkörperobjekt ausgewählt ist:

1. Die Schaltfläche ![](/images/PartDesign_Body.svg) Körper erstellen drücken. Es wird ein neuer Körper erstellt, der ein einzelnes **BaseFeature**-Objekt enthält. Dieses Basis-Formelement ist eine einfache Referenz auf ein anderes Objekt, das zuvor erstellt oder in das Dokument importiert wurde. Siehe [Basis-Formelement](#Basis-Formelement) für weitere Informationen. Es darf kein vorhandener Körper oder ein [PartDesign-Formelement](/PartDesign_Feature/de "PartDesign Feature/de") ausgewählt sein, wenn ![](/images/PartDesign_Body.svg) Körper erstellen gedrückt wird.

### Hinweise

* Wenn noch kein Körper existiert, während ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") gedrückt wird, wird automatisch ein neuer Körper erstellt. Wenn bereits ein Körper existiert, muss er vor der Verwendung von ![](/images/PartDesign_NewSketch.svg) [Skizze erstellen](/PartDesign_NewSketch/de "PartDesign NewSketch/de") aktiviert werden.
* Den Körper in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken oder in seinem Kontextmenü (Rechtsklick) **Aktiver Körper** auswählen, um den Körper zu aktivieren bzw. zu deaktivieren. Wenn ein anderer Körper aktiv ist, wird er deaktiviert. Siehe [Aktiver Status](#Aktiver_Status) für weitere Informationen.

## Eigenschaften

Ein PartDesign-Körper (Klasse `PartDesign::Body`) wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet. (`Part::Feature` Klasse), daher besitzt er auch alle Eigenschaften des letzteren.

Zusätzlich zu den unter [Part-Formelement](/Part_Feature/de "Part Feature/de") beschriebenen Eigenschaften besitzt der PartDesign-Körper im [Eigenschafteneditor](/Property_editor/de "Property editor/de") die folgenden Eigenschaften.

### Daten

Basis

* Daten-Eigenschaft**Tip**: Das [PartDesign-Formelement](/PartDesign_Feature/de "PartDesign Feature/de"), das als "Arbeitsposition" (Tip) festgelegt ist, normalerweise das letzte im Körper erzeugte Formelement. Die Arbeitsposition markiert die endgültige Form des Körpers, die in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt wird, wenn die Ansicht-Eigenschaft**Display Mode Body** auf `Tip` gesetzt ist. Siehe [Arbeitsposition - Tip](#Tip) für weitere Informationen.
* Daten-Eigenschaft**Base Feature**: Eine externe Form, die als das erste [PartDesign-Formelement](/PartDesign_Feature/de "PartDesign Feature/de") im Körper verwendet wird. Sie wird normalerweise beim Ziehen eines Festkörpers in einen leeren Körper eingesetzt. Wenn kein Festkörper auf diese Weise importiert wird, ist diese Eigenschaft leer. Siehe [Basis-Formelement](#Base_Feature) für weitere Informationen.
* Daten-Eigenschaft**Placement**: Die Position des Objekts in der [3D-Ansicht](/3D_view/de "3D view/de"). Die Positionierung wird durch einen `Basis`-Punkt (Ortsvektor) und eine `Drehung` (Achse und Winkel) definiert. Siehe [Positionierung](/Placement/de "Placement/de").
* Daten-Eigenschaft**Group**: Eine Liste der [PartDesign-Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") in dem Körper.

#### Ausgeblendete Daten-Eigenschaften

* Daten-Eigenschaft**Origin** (`Link`): Das [App-Origin](/App_OriginGroupExtension/de "App OriginGroupExtension/de")-Objekt, das der Positionsbezug (Ursprung) für alle Elemente ist, die in der Daten-Eigenschaft**Group** aufgelistet sind.
* Daten-Eigenschaft**\_ Group Touched** (`Bool`): Gibt an, ob die Gruppe bearbeitet wurde oder nicht.

Auch die ausgeblendeten Eigenschaften sind unter [Part-Formelement](/Part_Feature/de "Part Feature/de") beschrieben.

### Ansicht

Basis

* Ansicht-Eigenschaft**Display Mode Body** (`Enumeration`): Stellt den besonderen Anzeigemodus für Körper auf eine der beiden folgenden Arten ein.
  + `Through` (Standardwert) stellt alle Objekte innerhalb des Körpers dar, das sind [Skizzen](/Sketch/de "Sketch/de"), [PartDesign-Formelemente](/PartDesign_Feature/de "PartDesign Feature/de"), Bezugsobjekte usw. Dieser Modus ermöglicht die Darstellung von Teiloperationen, die innerhalb des Körpers durchgeführt werden, und ist deshalb der empfohlene Modus für das Hinzufügen und Bearbeiten von Formelementen. Das entsprechende Formelement auswählen und die Ansicht-Eigenschaft**Visibility** (Sichtbarkeit) auf `true` setzen bzw. die Leertaste drücken.
  + `Tip` stellt nur die endgültige Form des Körpers dar, die durch die Eigenschaft Daten-Eigenschaft**Tip** festgelegt ist. Alles andere, einschließlich [Skizzen](/Sketch/de "Sketch/de"), [PartDesign-Formelemente](/PartDesign_Feature/de "PartDesign Feature/de"), Bezüge usw. wird nicht angezeigt, auch wenn sie in der [Baumansicht](/Tree_view/de "Tree view/de") sichtbar sind. Dieser Modus wird empfohlen, wenn der Körper nicht weiter bearbeitet werden muss und so eine unveränderliche Form angezeigt werden soll. Dieser Modus wird auch empfohlen, wenn die Unterelemente (Knoten, Kanten und Flächen) der endgültigen Form ausgewählt werden sollen, um sie mit den Werkzeugen anderer Arbeitsbereiche zu verwenden.

## Körper-Konzept

### Einzelner zusammenhängender Festkörper

Ein PartDesign Körper ist dazu gedacht, einen einzelnen, zusammenhängenden Festkörper zu modellieren. Die Bedeutung von "zusammenhängend" ist, dass ein Element in einem Stück hergestellt wird, ohne bewegliche Teile oder nicht verbundene Körper. Beispiele für zusammenhängende Festkörper sind solche, die aus einem einzigen Stück Rohmaterial durch Gießen, Schneiden oder Fräsen hergestellt werden. Zum Beispiel bestehen eine Mutter, eine Unterlegscheibe und ein Bolzen jeweils aus einem einzigen massiven Stück Stahl ohne bewegliche Teile, so dass jedes Bauteil in einem PartDesign-Körper modelliert werden kann. Objekte, die durch Verschweißen zweier Bauteile erzeugt werden, können auch in einem einzigen Körper modelliert werden, solange die Schweißverbindung nicht dazu gedacht ist, auseinanderzubrechen.

Sobald diese zusammenhängenden Festkörper in irgendeiner Art von Anordnung zusammengesetzt sind, werden sie zu einer "Baugruppe". In einer Baugruppe werden die Objekte nicht miteinander vereinigt, sondern sie werden einfach "gestapelt" oder nebeneinander positioniert und bleiben eigenständige Bauteile.

![](/images/PartDesign_Body_contiguous_separate.png) ![](/images/PartDesign_Body_contiguous_assembly.png)

Links: drei einzelne, zusammenhängende Festkörper, die jeweils durch einen PartDesign-Körper modelliert werden. Rechts: die einzelnen Körper, die zu einer Baugruppe zusammengefügt werden.

### Formelementbearbeitung

Ein PartDesign Körper soll funktionieren, indem ein erster Festkörper entweder aus einer [Skizze](/Sketch/de "Sketch/de") oder aus einer [Grundform](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de") erstellt und dann durch ["Formelemente"](/PartDesign_Feature/de "PartDesign Feature/de") geändert wird, um Material zur vorherigen Form hinzuzufügen oder zu entfernen.
Für eine vollständige Erklärung gehe zu [Formelementbearbeitung](/Feature_editing/de "Feature editing/de").

Ein PartDesign Körper führt eine automatische [Verschmelzung](/Part_Fuse/de "Part Fuse/de") (Vereinigung) der festen Elemente in seinem Inneren aus .
Das bedeutet, dass (1) Teilkörper sich beim Erstellen berühren sollten und (2) getrennte Körper nicht erlaubt sind.

![](/images/PartDesign_Body_two_intersection.png) ![](/images/PartDesign_Body_two_fusion.png)

Links: zwei einzelne Festkörper, die sich gegenseitig schneiden. Rechts: ein einzelner PartDesign Körper mit zwei  [Additive Formelemente](/PartDesign_Feature/de "PartDesign Feature/de"); sie werden automatisch miteinander verschmolzen, so dass sie, anstatt sich zu schneiden, einen einzelnen, zusammenhängenden Festkörper bilden.

![](/images/PartDesign_Body_non-contiguous.png)

Links: zwei getrennte Festkörper; dies ist kein gültiger PartDesign Körper. Rechts: zwei sich berührende Festkörper; dies ergibt einen gültigen PartDesign Körper. Das neuere [Formelement](/PartDesign_Feature/de "PartDesign Feature/de") sollte immer das vorherige Formelement berühren oder schneiden, so dass es mit diesem verschmolzen wird und zu einem einzigen zusammenhängenden Festkörper wird.

*Hinweis:* andere CAD Programme wie Catia erlauben zusammenhängende Körper im gleichen " Körper". Ab v0.19 erlaubt FreeCAD dies nicht mehr. Es gab Diskussionen im [FreeCAD Forum](https://forum.freecadweb.org/index.php) über die Aufhebung dieser Einschränkung, aber es wurde noch keine konkrete Entscheidung getroffen. Wenn Du mehr wissen möchtest oder andere Standpunkte vertreten möchtest, diskutiere bitte im [Forum](https://forum.freecadweb.org/index.php).

## Ausführliche Erläuterung der Eigenschaften

### Aktiver Status

Ein geöffnetes Dokument kann mehrere Körper enthalten. Um ein neues Formelement zu einem bestimmten Körper hinzuzufügen, muss es *aktiv* gemacht werden. Ein aktiver Körper wird in der [Baumansicht](/Tree_view/de "Tree view/de") mit der Hintergrundfarbe angezeigt, die durch den Wert **aktiver Behälter** im [Einstellungseditor](/Preferences_Editor#Colors/de "Preferences Editor") angegeben wird. (standardmäßig hellblau). Ein aktiver Körper wird ebenfalls fett dargestellt.

Um einen Körper zu aktivieren oder zu deaktivieren:

* Doppelklicke auf ihn in der [Baumansicht](/Tree_view/de "Tree view/de"), oder
* Öffne das Kontextmenü (Rechtsklick) und wähle **Aktiven Körper umschalten**.

Beim Aktivieren eines Körpers wird automatisch in den [PartDesign Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de") umgeschaltet. Es kann jeweils nur ein Körper zu einer Zeit aktiv sein.

![](/images/PartDesign_Body_active.png)

Dokument mit zwei PartDesign Körpern, von denen der zweite aktiv ist.

### Ursprung

Der Ursprung besteht aus den drei Standardachsen (X, Y, Z) und drei Standardebenen (XY, XZ und YZ). An diese Elemente können bei der Erstellung [Skizzen](/Sketch/de "Sketch/de") und andere Objekte angebunden werden.

1. Erstelle den Körper.
2. Wenn der Körper in der [Baumansicht](/Tree_view/de "Tree view/de") ausgewählt ist, drücke ![](/images/PartDesign_NewSketch.svg) [Neue Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de"); das [Aufgaben Paneel](/Task_panel/de "Task panel/de") wird geöffnet, um die Auswahl einer der Ebenen zu ermöglichen.
3. Wenn der Körper nicht ausgewählt ist, wähle stattdessen den Ursprung und mache ihn in der [3D Ansicht](/3D_view/de "3D view/de") sichtbar, indem Du die Space Leiste in der Tastatur drückst. Erweitere auch das Ursprungsobjekt, um die Achsen und Ebenen zu sehen.
4. Wähle eine der Ebenen aus, entweder in der [Baumansicht](/Tree_view/de "Tree view/de") oder in der [3D Ansicht](/3D_view/de "3D view/de"), und drücke dann ![](/images/PartDesign_NewSketch.svg) [Neue Skizze](/PartDesign_NewSketch/de "PartDesign NewSketch/de"). Die Skizze wird auf der gewählten Ebene erstellt.

Das gleiche Verfahren kann bei der Erzeugung von Hilfsbezugsgeometrie wie [PartDesign Linien](/PartDesign_Line/de "PartDesign Line/de"), [PartDesign Ebenen](/PartDesign_Plane/de "PartDesign Plane/de") und [PartDesign KoordinatenSysteme](/PartDesign_CoordinateSystem/de "PartDesign CoordinateSystem/de") verwendet werden.

*Hinweis:* der Ursprung ist ein [App-Origin](/App_OriginGroupExtension/de "App OriginGroupExtension/de")-Objekt der Klasse `App::Origin`, während die Achsen und Ebenen Objekte vom Typ `App::Line` bzw. `App::Plane` sind. Jedes dieser Elemente kann mit der Leertaste einzeln ein- und ausgeblendet werden; dies ist nützlich, um bei der Erstellung anderer Objekte die richtige Referenz zu wählen.

*Hinweis 2:* alle Elemente innerhalb des Körpers werden auf den Ursprung des Körpers referenziert, was bedeutet, dass der Körper in Bezug auf das globale Koordinatensystem bewegt und gedreht werden kann, ohne die Platzierung der Elemente innerhalb des Körpers zu beeinflussen.

![](/images/PartDesign_Body_Origin_tree.png) ![](/images/PartDesign_Body_Origin_view.png)

Links: Ursprung eines PartDesign-Körpers in der [Baumansicht](/Tree_view/de "Tree view/de"). Rechts: Darstellung der Elemente des Ursprungs in der [3D Ansicht](/3D_view/de "3D view/de").

### Basis Formelement

Das Basis Formelement ist das erste [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") im Körper, wenn der Körper auf einer anderen Festkörperform basiert. Dieser Festkörper kann von einem beliebigen Arbeitsbereich erzeugt oder aus einer externen Datei, z.B. einer STEP Datei, importiert werden.

![](/images/PartDesign_Body_BaseFeature_tree.png)

PartDesign Körper, jeder von ihnen mit einem einzelnen Basis Formelement, die von zuvor erzeugten Festkörpern übernommen werden.

Um das Basis Formelement zu erzeugen:

1. Wähle eine Festkörperform außerhalb eines beliebigen Körpers aus und
2. drücke ![](/images/PartDesign_Body.svg) Körper; dies erzeugt einen neuen Körper mit einem einzelnen Basis Formelement.

*Note:* Du kannst keinen vorhandenen Körper oder eines seiner [Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") auswählen, wenn Du ![](/images/PartDesign_Body.svg) Körper drückst.

Wenn du bereits einen Körper hast, kannst du das Basis Formelement auf diese Weise erzeugen:

* Wähle in der [Baumansicht](/Tree_view/de "Tree view/de") ein Objekt aus und ziehe es innerhalb des Körpers, oder
* Im [Eigenschaftseditor](/Property_editor/de "Property editor/de") bearbeite den Wert von Daten-Eigenschaft**Basis Formelement**, indem Du die Ellipse ... drückst und ein Objekt aus der Liste auswählst. In diesem Fall kannst Du einen vorhandenen Körper als Basis Formelement auswählen.

*Hinweis:* Ziehen und Ablegen funktioniert nur bei Körpern, die noch kein Basis Formelement haben.

*Hinweis 2:* Wenn der Körper bereits mehrere Formelemente hat, wird das Basis Formelement beim Ziehen und Ablegen des externen Festkörpers am Anfang der Liste der Formelemente erzeugt, d. h. es wird am Anfang der Daten-Eigenschaft**Gruppe** Eigenschaft hinzugefügt.

Das Basis Formelement ist vollkommen optional; es ist nur dann vorhanden, wenn ein Objekt von außerhalb des Körpers einbezogen wird. Wenn kein externer Festkörper enthalten ist, kannst Du Deine Form trotzdem mit [Skizzen](/Sketch/de "Sketch/de"), [Polster](/PartDesign_Pad/de "PartDesign Pad/de"), [GrundObjekte](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de") und anderen [PartDesign Formelementen](/PartDesign_Feature/de "PartDesign Feature/de") erstellen. In diesem Fall bleibt die Eigenschaft Daten-Eigenschaft**Basis Formelement** leer.

![](/images/PartDesign_Body_BaseFeature_Tip.svg)

Links: Bauteilkonstruktionskörper mit einem Basis Formelement, das von einem externen Festkörperobjekt übernommen wird, und viele nachfolgende [PartDesign Formelemente](/PartDesign_Feature/de "PartDesign Feature/de") obenauf. Rechts: Körper, der kein explizites Basis Formelement hat.

*Hinweis:* Wenn ein anderer PartDesign-Körper als BaseFeature ausgewählt wird, muss er eine Gestalt haben. Wenn er leer ist (ohne Objekte, BaseFeature,...), wird dies zu einem Fehler führen.

### Spitze

Die Spitze ist das [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de"), das außerhalb des Körpers freiliegt; d.h. wenn ein anderes Werkzeug aus einem beliebigen Arbeitsbereich (z.B. ![](/images/Part_SimpleCopy.svg) [Part EinfacheKopie](/Part_SimpleCopy/de "Part SimpleCopy/de") oder ![](/images/Part_Cut.svg) [Part Schnitt](/Part_Cut/de "Part Cut/de")) die Form des Körpers verwenden muss, wird es die Form der Spitze verwenden. Anders ausgedrückt, die Spitze ist die endgültige Darstellung des Körpers, als ob die parametrische Historie nicht existieren würde.

![](/images/PartDesign_Body_Tip_final.svg)

Links: PartDesign Körper mit vollständiger parametrischer Historie inklusive Zwischenformelementen. Rechts: Die Spitze ist die endgültige Form, die aus dem Körper exportiert werden kann, wobei die Historie des Modells weggelassen wird.

Die Spitze wird automatisch auf das zuletzt im Körper erzeugte Formelement gesetzt. Er kann jedoch auch auf jedes der Zwischen Formelemente gesetzt werden, indem Du das Kontextmenü [Baumansicht](/Tree_view/de "Tree view/de") öffnest (Rechtsklick) und **![](/images/PartDesign_MoveTip.svg) [Setze Spitze](/PartDesign_MoveTip "PartDesign MoveTip")**, wählst, oder durch Ändern des Körperwertes Daten**Spitze** im [Eigenschaftseditor](/Property_editor/de "Property editor/de").

Das Ändern der Spitze in der Tat rollt seine Geschichte zurück, wodurch es möglich wird, Funktionen hinzuzufügen, die früher hätten hinzugefügt werden sollen. Außerdem wird es einer anderen Form externen Werkzeugen ausgesetzt.

In der [Baumansicht](/Tree_view/de "Tree view/de") wird die Spitze des Körpers durch das [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") erkannt, das eine Symbol Überlagerung hat, das aus einem weißen Pfeil innerhalb eines grünen Kreises besteht.

![](/images/PartDesign_Body_Tip_tree.png)

Zwei PartDesign Körper, jeder von ihnen mit [PartDesign Formelementen](/PartDesign_Feature/de "PartDesign Feature/de"). Die Spitze ist das letzte Formelement in ihnen und wird mit einem Überlagerungssymbol markiert.

### Wechselwirkung mit anderen Arbeitsbereichen

Standardmäßig sind [PartDesign Funktionen](/PartDesign_Feature/de "PartDesign Feature/de") in einem Körper auswählbar, da dies zur Bearbeitung und zum Hinzufügen weiterer Eigenschaften mit Werkzeugen des Arbeitsbereichs [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") erforderlich ist. Die Auswahl einzelner Funktionen zur Verwendung mit Werkzeugen anderer Arbeitsbereiche, wie [Part](/Part_Workbench/de "Part Workbench/de") oder [Draft](/Draft_Workbench/de "Draft Workbench/de") wird jedoch nicht empfohlen, da die Ergebnisse unerwartet sein können. Wenn dies gemacht wird, kann in der [Berichtsansicht](/Report_view/de "Report view/de") ein Fehler angezeigt werden: *Links go out of the allowed scope* (Verknüpfungen liegen außerhalb des erlaubten Bereiches).

Daher sollte bei Wechselwirkungen mit anderen Arbeitsbereichen in der [Baumansicht](/Tree_view/de "Tree view/de") nur der Körper selbst ausgewählt werden. In Fällen, in denen es notwendig ist, bestimmte Unterelemente des Körpers (Knoten, Kanten und Flächen) auszuwählen, sollte die Eigenschaft Ansicht-Eigenschaft**Ansichtsmodus Körper** des Körpers auf `Spitze` umgeschaltet werden. Wenn dieser Modus aktiviert ist, ist der Zugriff auf Objekte unter dem Körper ([Formelemente](/PartDesign_Feature/de "PartDesign Feature/de"), Bezugspunkte, [Skizzen](/Sketch/de "Sketch/de")) deaktiviert, und alles außer der Körpereigenschaft [Spitze](/PartDesign_Body#Tip/de "PartDesign Body") wird in der [3D-Ansicht](/3D_view/de "3D view/de") ausgeblendet.

Sobald die Unterelemente mit anderen Arbeitsbereichen verwendet wurden, kann Ansicht-Eigenschaft**Anzeige Modus Körper** auf `Durch` zurückgesetzt werden.

![](/images/PartDesign_Body_Tip_Display_mode.svg)

Links: wenn "Anzeigemodus Körper" auf `Durch` gesetzt ist, ist es möglich, Operationen mit den einzelnen [PartDesign Formelementen](/PartDesign_Feature/de "PartDesign Feature/de") auszuwählen und durchzuführen; dies wird im Allgemeinen nicht empfohlen. Rechts: Wenn "Anzeigemodus Körper" auf `Spitze` gesetzt ist, werden alle am Körper vorgenommenen Auswahlen und Operationen an der Spitze ausgeführt, wobei sichergestellt wird, dass nur die endgültige Form des Körpers freigelegt wird.

### Sichtbarkeitsmanagement

Die Sichtbarkeit des Körpers hat Vorrang vor der Sichtbarkeit seiner Elemente. Ist der Körper unsichtbar, sind alle Elemente unsichtbar. Ist dieser sichtbar kann immer nur ein Formelement sichtbar sein. Durch anklicken und die Leertaste schaltet man die Sichtbarkeit an oder aus.

Mehrfache [Skizzen](/Sketch/de "Sketch/de") können gleichzeitig sichtbar sein, aber nur ein [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") (Festkörper Ergebnis) kann gleichzeitig sichtbar sein. Durch Auswahl eines ausgeblendeten Formelementes und Drücken der Space in der Tastatur wird es sichtbar und das zuvor sichtbare Formelement automatisch ausgeblendet.

![](/images/PartDesign_Body_Visibility.png)

PartDesign Körper: Mehrfache [Skizzen](/Sketch/de "Sketch/de") können gleichzeitig sichtbar sein, aber nur ein Festkörper [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") kann gleichzeitig sichtbar sein, unabhängig davon, ob es sich um die Spitze handelt oder nicht.

### Anfügung

[PartDesign Formelemente](/PartDesign_Feature/de "PartDesign Feature/de"), genau wie [Ebene Objekte](/Part_Part2DObject/de "Part Part2DObject/de"), können an unterschiedliche Ebenen angehängt werden, normalerweise an die Standardebenen, die durch die [Ursprung](/PartDesign_Body#Origin/de "PartDesign Body") des Körpers definiert sind, oder an benutzerdefinierte [PartDesign Ebenen](/PartDesign_Plane/de "PartDesign Plane/de").

[Skizzen](/Sketch/de "Sketch/de") werden normalerweise bei ihrer Erstellung an eine Ebene angehängt. Auf ähnliche Weise können auch [Grundformelemente](/PartDesign_CompPrimitiveAdditive/de "PartDesign CompPrimitiveAdditive/de") angehängt werden. Das Anhängen dieser Objekte an eine Ebene ermöglicht es, sie innerhalb des Körpers zu bewegen, indem ihre Eigenschaft Daten-Eigenschaft**Anfügung Versatz** geändert wird. Weitere Informationen zu den Anfügemodi findest Du unter [Part Anhang bearbeiten](/Part_EditAttachment/de "Part EditAttachment/de").

Ein [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de"), das nicht angehängt ist, wird mit einem roten Überlagerungssymbol neben seinem Symbol in der [Baumansicht](/Tree_view/de "Tree view/de") angezeigt.

![](/images/PartDesign_Body_Feature_attachment.png)

PartDesign Körper: [PartDesign Formelement](/PartDesign_Feature/de "PartDesign Feature/de") die nicht an eine Ebene oder ein Koordinatensystem gebunden sind, werden mit einem Überlagerungssymbol neben ihrem Symbol in der [Baumansicht](/Tree_view/de "Tree view/de") angezeigt.

## Vererbung

Ein [PartDesign Körper](/PartDesign_Body "PartDesign Body") ist formell eine Instanz der Klasse `PartDesign::Body`, deren Elternteil die [Part Formelement](/Part_Feature "Part Feature") (`Part::Feature` Klasse) ist
durch die Zwischenklasse Part::BodyBase und wird um eine Origin-Erweiterung erweitert.

![](/images/FreeCAD_core_objects.svg)

Vereinfachtes Diagramm der Beziehungen zwischen den Kernobjekten im Programm. Die `PartDesign::Körper` Objekte werden zum Aufbau parametrischer 3D-Körper verwendet und sind somit vom Basisobjekt `Part::Formelement` abgeleitet.

und haben einen Ursprung, um die Positionierung von Formen die darin verwendet werden zu steuern.

## Skripten

*Siehe auch:* [FreeCAD Skripten Grundlagen](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de"), und [gesKriptete Objekte](/Scripted_objects/de "Scripted objects/de").

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de") für allgemeine Informationen zum Hinzufügen von Objekten zu einem Dokument.

Ein PartDesign Körper wird mit der Methode `addObject()` des Dokuments erstellt. Sobald ein Körper existiert, können [PartDesign Formelemente](/PartDesign_Feature "PartDesign Feature") mit der `addObject()`- oder der `addObjects()`-Methode dieses Körpers hinzugefügt werden.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj.Label = "Custom label"

feat1 = App.ActiveDocument.addObject("PartDesign::AdditiveBox", "Box")
feat2 = App.ActiveDocument.addObject("PartDesign::AdditiveCylinder", "Cylinder")

obj.addObjects([feat1, feat2])
App.ActiveDocument.recompute()

```

In einem Dokument, das viele Körper hat, kann der [Aktive Status](#Aktiv_status) mit der Methode `setzeAktivesObjekt` der AktiveAnsicht gesetzt werden. Das erste Argument ist die feste Zeichenkette `"pdbody"`, und das zweite Argument ist das Körperobjekt, das aktiviert werden soll.

```
import FreeCAD as App
import FreeCADGui as Gui

doc = App.newDocument()
obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("PartDesign::Body", "Body")

Gui.ActiveDocument.ActiveView.setActiveObject("pdbody", obj1)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Body/de&oldid=1558977>"