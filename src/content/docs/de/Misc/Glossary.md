---
title: Glossar
---
Diese Seite ist ein Glossar mit allgemeinen FreeCAD-Begriffen und Definitionen.

Zu Buchstaben springen: [0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

## 0-9

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

[3D-Ansicht](/3D_view/de "3D view/de")
:   Die 3D-Ansicht ist eine Komponente der FreeCAD-[Oberfläche](/Interface/de "Interface/de"). Sie zeigt eine 3D-Darstellung des Modells.

## A

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Arc > Kreisbogen
:   Ein Teil oder Segment eines Kreises

App
:   Die FreeCAD-App-Schicht.

[Arch](/Arch_Workbench/de "Arch Workbench/de") > Arbeitsbereich Arch
:   Arch ist die Abkürzung für Architektur (hier eher im Sinne von Bauwesen) und Name des alten [Arbeitsbereichs](#Workbench).Dieser Arbeitsbereich wurde durch den Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") ersetzt ([eingeführt in 1.0](/Release_notes_1.0/de "Release notes 1.0/de")).

Assembly > [Zusammenbau](/Assembly/de "Assembly/de")
:   1.  Ein Satz von [Bauteilen](#Part) , die definierte Positionen in Bezug zueinander haben (Baugruppe).
:   2.  Ein [Arbeitsbereich](#Workbench), der die Erstellung von Baugruppen ermöglichen soll.
    FreeCAD beinhaltet derzeit keinen solchen eingebundenen Arbeitsbereich, aber es gibt mehrere [externe Arbeitsbereiche](/External_workbenches/de "External workbenches/de") für Zusammenbauten (Baugruppen).

Axes > Achsen
:   Mehrzahl von [Achse](#Axis)

Axis > Achse
:   Eine imaginäre Linie duch den Ursprung des Arbeitsbereichs. Es gibt drei zueinander senkrecht stehende Achsen. Sie haben die drei üblichen Namen X, Y und Z. X verläuft horizontal, Y verläuft vertikal und Z verläuft senkrecht zum Zeichnungsblatt bzw. Bildschirm.

## B

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Backtrace
:   Ausgabe eines Fehlersuchprogramms, das die Reihe von Anweisungen anzeigt, die FreeCAD befolgt hat, bevor ein Problem auftrat.

Bezier Curve > [Bézierkurve](https://de.wikipedia.org/wiki/B%C3%A9zierkurve)
:   Eine Art parametrischer Kurven.

[BIM](/BIM_Workbench/de "BIM Workbench/de")
:   Eine Abkürzung für [Building Information Modelling](https://en.wikipedia.org/wiki/Building_information_modeling). Der Arbeitsbereich [BIM](/BIM_Workbench/de "BIM Workbench/de") ermöglicht einen BIM-Arbeitsablauf in FreeCAD.

Blueprint > Blaupause
:   Ein alter Begriff aus der Zeit, als technische Zeichnungen von Hand auf Transparentpapier angefertigt wurden. Eine Blaupause war eine hell auf blauem Hintergrund erscheinende Kopie des Originals.

Body > Körper
:   Der Typ eines Containers des Arbeitsbereichs [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), der die Abfolge von Operationen, ([Skizzen](#Sketch), Hilfsgeometrien sowie [Formelementen](#Feature)) zusammenfasst, die einen einzelnen zusammenhängenden Körper erzeugen (eingeführt in FreeCAD v0.17).

Boolean Logic > [Boolesche Logik](https://de.wikipedia.org/wiki/Boolesche_Funktion)
:   Eine Methode der Datenverarbeitung, die die Operanden Und, Oder und Nicht (And, Or und Not) verwendet

Boolean Operation > Boolesche Verknüpfung
:   Verwendung der Booleschen Funktionen Vereinigung ([Fuse](#Fuse)), Differenz ([Cut](#Cut)), und Schnitt (Intersection)

Boolean Operations check (BOPcheck) > BOP-Prüfung
:   Eine Einstellung, die dem Werkzeug "Geometrie überprüfen" in den Arbeitsbereichen Part und OpenSCAD erlaubt, auch Geometrien zu überprüfen, die mit
    [boolescher Logik](#Boolean_Logic) erstellt wurden. Sie ist standardmäßig deaktiviert, aber der Benutzer kann die BOP-Prüfung aktivieren, um mit dem Werkzeug "Geometrie überprüfen" eine höhere Genauigkeit zu erreichen, was allerdings zu längeren Laufzeiten dieser Prüfung führt. Seit FreeCAD 0.19 wird die BOP-Prüfung einfach unter Einstellung im Aufgaben-Bereich von "Geometrie überprüfen" aktiviert.

brep > Datei-Format \*.brep
:   ist das ursprüngliche Dateiformat von [Open CASCADE](#Open_CASCADE) und wird von einigen Anwendungen verwendet. (Auch) FreeCAD kann Dateien im Format \*.brep speichern.

Boundary representation (B-rep) > Begrenzungsflächen-Repräsentation
:   Repräsentation eines Körpers durch seine ihn begrenzenden Flächen (siehe [Boundary Representation](https://de.wikipedia.org/wiki/Boundary_Representation)), eine von zwei Arten von 3D-Modellen, die FreeCAD unterstützt (die andere ist die [Netz](#Mesh)-Darstellung).

BSpline > B-Spline
:   Eine Art der parametrischen Kurven, siehe [Spline](https://de.wikipedia.org/wiki/Spline).

## C

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Callout > Hinweis(text)
:   Textzeichenfolge, die mit einer (Hinweis-)Linie verbunden ist, die auf ein Objekt in einer [Zeichnung](#Drawing) zeigt.

Chamfer > Anfasen, Fase
:   1.  Anfasen ist das Bearbeiten einer Kante unter einem bestimmten Winkel, um sie zu entschärfen.
:   2.  Die Fase ist das Ergebnis des Anfasens.

Clipping Plane > Beschnittebene
:   Die Beschnittebene wird verwendet, um ein Modell in der 3D-Ansicht zu beschneiden. Sie ist nur eine Darstellungshilfe und beschneidet das Modell nicht wirklich.

Clone > Klon
:   Eine Kopie eines Objekts, die parametrisch bleibt. Wird das Originalobjekt geändert, ändern sich auch der/die Klon(e), um die am Originalobjekt vorgenommenen Änderungen darzustellen.

Coin
:   Auch [Coin3D](https://www.coin3d.org) genannt, ist eine von FreeCAD für 3D-Repräsentationen gebrauchte Drittanbieter-Bibliothek.

COLLADA
:   Ein Datenaustauschformat für [Polygonnetz](#Mesh)-Modelle. Dateiendung ist \*.dae.

Command > [Befehl](/Command/de "Command/de")
:   Eine Aktion, die aus der [Benutzeroberfläche](#GUI/de) heraus ausgelöst wird, wenn ein Symbol in der Werkzeugleiste angeklickt oder ein Tastenkürzel über die Tastatur oder ein Kommando in der Python-Konsole eingegeben wurde.

Compound > Verbund
:   Gruppiert Objekte, ohne sie zu vereinigen, wie es eine [Boolesche Vereinigung](#Boolean_Operation) tun würde.

CompSolid
:   Ein Set von [Festkörpern](#Solid) die über ihre [Flächen](#Face) verbunden sind. CompSolid-Objekte werden im Arbeitsbereich [FEM](#FEM) benötigt, wenn mehr als ein Material in einem FEM-Netzes verwendet wird.

Constraint > Randbedingung
:   Eine Festlegung der geometrischen Beziehung zwischen Grundelementen in einer [Skizze](#Sketch). Wenn eine Randbedingung einen numerischen Wert hat, wird sie als maßliche Randbedingung bezeichnet (z.B. hat eine Randbedingung Abstand einen numerischen Wert - die Länge einer imaginären Linie, die zwei Punkte verbindet). Eine Randbedingung ohne numerischen Wert (z.B. die Randbedingung Horizontal festlegen), wird als geometrische Randbedingung bezeichnet.

[Constructive\_Solid\_Geometry](https://de.wikipedia.org/wiki/Constructive_Solid_Geometry) (CSG) > Konstruktive-Festkörper-Geometrie
:   Name der Modellierungsmethode zur Erstellung von Formen aus geometrischen Grundkörpern ([Primitiven](#Primitive)) durch Anwendung boolescher Funktionen ([Boolesche Verknüpfungen](#Boolean_Operation)).

Coordinate > Koordinate
:   Koordinaten im 3D-Raum enthalten drei Zahlenwert zur Beschreibung der Position eines Objekts in einem [kartesischen Koordinatensystem](https://de.wikipedia.org/wiki/Kartesisches_Koordinatensystem).

Coplanar > Komplanar
:   Auf derselben Ebene liegend (auch koplanar)

CSG
:   Abkürzung für [Constructive Solid Geometry](#Constructive_Solid_Geometry) (Konstruktive-Festkörper-Geometrie).

Cut
:   1.  Differenz bilden. Anwenden der [Booleschen Verknüpfung](#Boolean_Operation) Differenz zwischen Formen.
:   2.  Cut-Objekt. Ergebnis der booleschen Verknüpfung [Part Differenz](/Part_Cut/de "Part Cut/de") des [Arbeitsbereichs](#Workbench) [Part](/Part_Workbench/de "Part Workbench/de").

## D

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

DAG
:   Siehe [Directed Acyclic Graph.](#Directed_Acyclic_Graph)

Degrees Of Freedom (DOF) > Freiheitsgrade
:   Die Anzahl von Möglichkeiten einer Geometrie in einer [Skizze](#Sketch) ihre Lage zu verändern. Haben wir z.B. eine Skizze, die einen Punkt enthält und auf diesen Punkt werden keine [Randbedingungen](#Constraint) angewendet, besitzt der Punkt zwei (nicht bestimmte) [Freiheitsgrade](#DOF), da er sich sowohl vertikal als auch horizontal frei bewegen kann. Dem entsprechend besitzt eine Skizze, die nur einen nicht bestimmten Kreis (ohne Randbedingungen) enthält, drei [Freiheitsgrade](#DOF), da sich der Kreis horizontal und vertikal bewegen kann und zusätzlich der Radius nicht festgelegt ist. Bewährte Praxis ist, einer Skizze so lange weitere Randbedingungen hinzuzufügen, bis keine (nicht bestimmten) [Freiheitsgrade](#DOF) mehr übrig sind, die Skizze also [vollständig bestimmt](#Fully_Constrained) ist.

Dependency Graph > Abhängigkeitsdiagramm
:   Ein von FreeCAD unabhängiges Werkzeug, das benutzt wird, um die Abhängigkeiten der Konstruktionsobjekte im FreeCAD-Dokument untereinander grafisch darzustellen. Weitere Informationen finden sich auf der Wiki-Seite [Std Abhängigkeitsdiagramm](/Std_DependencyGraph/de "Std DependencyGraph/de").

Difference -> Differenz
:   1.  Das Ergebnis oder der Rest einer Subtraktion.
:   2.  Eine [Boolesche Verknüpfung](#Boolean_operation) im Arbeitsbereich Part, um eine Geometrie von einer anderen abzuziehen. Das Ergebnis ist ein [Cut](#Cut)-Objekt.

Directed Acyclic Graph (abgekürzt als "DAG")
:   Eine Art von [Abhängigkeitsdiagramm](#Dependency_Graph) in der alle Beziehungen der Objekte in linearer Weise ohne zyklische Abhängigkeiten aufeinander aufbauen. Beim Verfolgen eines DAGs gibt es keinen Weg von einem Objekt A zu irgendeinen anderen Objekt und dann wieder zurück zum selben Objekt. In FreeCAD muss der Graph eines Modells immer ein "DAG" sein.

DOF
:   [Freiheitsgrade](#Degrees_Of_Freedom)

[Draft](/Draft_Workbench/de "Draft Workbench/de")
:   1.  Ein FreeCAD-[Arbeitsbereich](#Workbench) für hauptsächlich 2-dimensionales Arbeiten.
:   2.  Formschräge (-Winkel) an einer Gussform, die das Entnehmen des fertigen Artikels ermöglicht. Siehe [PartDesign Formschräge](/PartDesign_Draft/de "PartDesign Draft/de").

Drawing > Zeichnung
:   Beschreibt die Darstellung von Geometrie durch zweidimensionale Ansichten. Wird als Kopie auch [Blaupause](#Blueprint) genannt.

## E

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Edge > Kante
:   1.  Ein Segment, das zwei [Knoten](#Vertices/de) verbindet. Dieses Segment kann eine gerade Linie oder eine Kurve sein. Der CAD-Kernel definiert es als: Eindimensionale Form, die einer Kurve entspricht und an jedem Ende durch einen Knoten begrenzt ist. Ein geschlossener Kreis hat dafür nur einen Knoten, an dem er beginnt und endet. Siehe [["Open CASCADE Technology"| Profil: Definieren der Topologie](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)].
:   2.  Die gemeinsame Linie (Randkurve) zweier Flächen. Sie kann gekrümmt oder gerade sein.

Element
:   Ein Geometrielement des Sketchers, wie z.B. ein Punkt, ein Liniensegment, ein Bogen, ein Kreis usw.

Expression > Ausdruck
:   1.  Ein allgemeiner Begriff in den Bereichen Mathematik und Programmierung.
:   2.  In FreeCAD werden [Ausdrücke](/Expressions/de "Expressions/de") zum Berechnen von Werten verwendet. Sie können auf Objekteigenschaften referenzieren oder diese steuern. Sie werden in [Kalkulationstabellen](/Spreadsheet_Workbench/de "Spreadsheet Workbench/de") verwendet und zum Steuern parametrischer Modelle.

Extrude > Extrudieren
:   Ein allgemeiner Begriff für die Ausdehnung eines 2D-Objekts in die 3. Dimension entlang einer Richtung. Siehe auch [Block](#Pad/de).

## F

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Face > Fläche
:   Ein 2-dimensinales topologisches Konstrukt. Ein Würfel hat z.B. 6 Flächen. Eine Fläche kann gekrümmt sein, wie im Falle einer Kugel, die in FreeCAD (nur) eine Fläche hat. Der CAD-Kernel definiert die Fläche als: Teil einer Oberfläche, die durch einen geschlossenen [Linienzug](#Wire) eingegrenzt ist. Siehe [<https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3>

Facet > Facette
:   Wird oft zum Beschreiben der ebenen Flächen auf einem [Netz](#Mesh) verwendet.

FC > FC
:   Kurzform von FreeCAD.

FCStd
:   FreeCADs eigenes Dateiformat. Dateierweiterung \*.fcstd, \*.FCStd

Feature > Formelement
:   Ein Schritt in der Entwicklung eines 3D-Bauteils im Arbeitsablauf des [Arbeitsbereichs](#Workbench) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"). Beispiele sind [Block](#Pad), [Tasche](#Pocket), [Nut](#Groove), [Verrundung](#Fillet), usw. Bei der Erstellung eines Modells im [Arbeitsbereich](#Workbench) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), übernimmt jedes neue Formelement (Feature) die [Form](#Shape) des Schrittes zuvor und fügt etwas hinzu oder entfernt etwas. Somit ist ein Formelement „Tasche“ nicht nur die hinzugefügte Öffnung selbst, sondern das gesamte Bauteil einschließlich der hinzugefügten Tasche.

[FEM](/FEM_Workbench/de "FEM Workbench/de")
:   [Finite-Element-Methode](https://en.wikipedia.org/wiki/Finite_element_method), ein [Arbeitsbereich](#Workbench) zum Lösen von technischen und mathematisch physikalischen Problemen im Zusammenhang mit Einzelteilen, Baugruppen und Strukturen.

Fillet > Rundung
:   Eine Aus- bzw. Abrundung an einer Kante für einen fertigbearbeiteten Eindruck oder zum Brechen scharfer Kanten. Siehe [Part Verrundung](/Part_Fillet/de "Part Fillet/de") und [PartDesign Verrundung](/PartDesign_Fillet/de "PartDesign Fillet/de").

Fork > Verzweigen
:   Siehe [Forked Model](#Forked_Model).

Forked Model > verzweigtes Modell
:   eine Modellierungsmethode, meist unbeabsichtigt und nicht korrekt in FreeCAD, die zwei oder mehr Versionen eines Modell von einem vorhergehenden Objekt erstellt. (Nicht zu verwechseln mit absichtlicher Aktionen wie Anordnung (Array), Klonen (Duplikat), Polare Anordnung u.a.)

Frenet > Frenet
:   Wird ein Profil entlang eines 3D-Pfades ausgetagen, steuert der Frenet-Parameter de Ausrichtung des Profils, während es sich entlang des Pfads bewegt. Ist Frenet auf true gesetzt, werden die Profile mit Hilfe der Orthonormalbasis (Frenet-Frame) (Tangente, Binormale, Normale) des Pfades ausgerichtet. Ist Frenet auf false gesetzt, wird die Drehung des Profils nicht eingeschränkt. Siehe auch [Frenetsche Formeln, Orthonormalbasis](https://de.wikipedia.org/wiki/Frenetsche_Formeln#Übersicht) und [Frenet frame](https://en.wikipedia.org/wiki/Differentiable_curve#Frenet_frame) (engl.)

[FreeType](http://www.freetype.org) > eine Software-Bibliothek
:   eine frei verfügbare Software-Bibliothek zum Extrahieren von Informationen aus Schriftdateien (font definition files).

[Frustum](http://en.wikipedia.org/wiki/Frustum) > Pyramidenstumpf, Kegelstumpf
:   ein zwischen zwei parallelen Schnitten befindlicher Teil eines Körpers; Der Begriff wird auch in der Computervisualisierung zur Bezeichnung des, auf dem Bildschirm dargestellten, sichtbaren Bereiches des 3D-Raumes benutzt (["viewing frustum"](http://en.wikipedia.org/wiki/Viewing_frustum)). Nur Elemente zwischen den beiden Ebenen werden dargestellt. Dies führt in FreeCAD manchmal dazu, dass Objekte nicht oder nur angeschnitten dargestellt werden. Abhilfe schafft der Klick auf "Inhalt auf Bildschirmgröße einpassen".

Fully Constrained > vollständig bestimmt, Freiheitsgrad f = 0
:   Hat im [Sketcher](#Sketcher) eine [Skizze](#Sketch) keine (nicht bestimmten) [Freiheitsgrade](#Degrees_Of_Freedom), bezeichnet man die Skizze als "vollständig bestimmt" durch die verwendeten [Randbedingungen](#Constraint).

Fuse > Vereinigen
:   Ein häufig verwendeter Begriff in FreeCAD, der sich auf die [boolesche Vereinigung](#Boolean_Operation) von Formen bezieht

## G

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

GDB oder gdb
:   [**G**NU Project **D**e**B**ugger](https://www.gnu.org/software/gdb/), das Standard-Debuggingprogramm unter Linux und anderen 'nix Betriebssystemen um einen [[Stacktrace](https://de.wikipedia.org/wiki/Stacktrace%7C)] zu erhalten (siehe auch [backtrace](#Backtrace)). Der Stacktrace erlaubt Rückschlüsse darauf, welcher Programmteil für ein Problem verantwortlich ist. "gdb" (ohne die Anführungszeichen) ist auch der Aufrufname des GDB-Programms. Ein Beispiel wie der GDB mit FreeCAD genutzt werden kann, findet sich hier: [this forum post](http://forum.freecadweb.org/viewtopic.php?t=7052#p56918)

Geometric modeling kernel
:   Auch CAD-Kernel genannt. Eine Sammlung von komplexen Softwarebibliotheken, mit denen die 3D-Geometrien erzeugt werden. Alle geometrischen Operationen mit den 3D-Objekten (extrudieren, boolesche Verknüpfungen, Fasen und Rundungen an Kanten usw.) sind vom CAD-Kernel abhängig.

Git
:   [verteilte Versionsverwaltung von Dateien](https://de.wikipedia.org/wiki/Git) die von FreeCAD zur Bereitstellung und Verwaltung des Programmcodes benutzt wird.

[Group](/Std_Group/de "Std Group/de") > Gruppe
:   wird zur Organisation der Objekte in der [Baumansicht](#Tree_view/de) verwendet.

GUI > graphische Benutzeroberfläche
:   **G**raphical **U**ser **I**nterface. Ermöglicht dem Benutzer FreeCAD über graphische Symbole und den Mauszeiger zu steuern.

## H

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Half\_Space > [Halbraum](https://de.wikipedia.org/wiki/Halbraum)
:   Wenn eine Ebene komplett den dreidimensionalen Euklidischen Raum teilt, erhält man zwei Halbräume.

## I

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

IGES
:   Ein Dateiformat für den Austausch von Produkt-Datenmodellen. Dateierweiterungen sind \*.iges, \*.igs. Siehe auch [STEP](#STEP).

[Intersection](http://en.wikipedia.org/wiki/Intersection) > [Schnittmenge](https://de.wikipedia.org/wiki/Menge_(Mathematik)#Durchschnitt_(Schnittmenge,_Schnitt))
:   Der Teil, den zwei oder mehr geometrische Einheiten gemeinsam besitzen. Beispielsweise ist die Schnittmenge von zwei sich schneidenden Geraden ein Punkt.

## J

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

JT
:   Ein proprietäres 3D-Datenformat, entwickelt von Siemens PLM-Software. FreeCAD unterstützt JT-Dateien momentan nicht.

## K

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Kernel
:   Siehe [Geometric modeling kernel](#Geometric_modeling_kernel).

KML
:   Keyhole Markup Language - eine XML-basierte Auszeichnungssprache zur Beschreibung von Geodaten, dievon Google Earth verwendet wird. FreeCAD unterstützt KML derzeit nicht.

## L

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Label > Benennung
:   1.  Label ist eine vom Benutzer festgelegte Eigenschaft zur Benennung eines Objekts; es dient zur Verbesserung der Verständlichkeit der [Baumansicht](#Tree_view).
:   2.  Ein beschreibender Text auf einer Zeichnung, (siehe auch [Draft Label](/Draft_Label "Draft Label")).
:   Vergleiche mit der Eigenschaft[Name](#Name).

Line > Linie
:   Wird meist als Synonym für eine [Strecke](#Line_Segment) (line segment) verwendet. Im Sketcher wird Linie manchmal im Sinne einer unendlichen geraden Linie (einer Gerade) verwendet.

Line Segment > Strecke
:   Eine gerade Verbindungslinie zwischen zwei [Punkten](#Point).

Lock > Sperren
:   Die Kombi-Bedingung [Sperren](/Sketcher_ConstrainLock/de "Sketcher ConstrainLock/de") im Sketcher, die gleichzeitig die Randbedingungen Horizontal festlegen und Vertikal festlegen für einen Punkt festlegt.

[Loft](http://en.wikipedia.org/wiki/Loft_%283D%29) > Ausformung
:   Eine topologische Form, die durch das Verbinden von einer Reihe von aufeinanderfolgenden Profilen mit einer Oberfläche erzeugt wird. Dies ist ähnlich dem Prozess der Herstellung von mit Gewebe überzogenen Flugzeugen oder Booten. Auch die Funktion in FreeCAD zur Erstellung einer solchen Form wird so genannt.

## M

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Macro > Makro
:   Eine gespeicherte Folge von FreeCAD-Anweisungen in der Skriptsprache Python. Es können entweder die Benutzeraktionen aufgezeichnet werden und als Makro gespeichert werden, oder das Makro wird vom Benutzer geschrieben.

Manifold > Mannigfaltigkeit
:   Ein mathematischer Begriff, der im Zusammenhang mit FreeCAD meint, dass eine [geometrische Figur](#Shape) ein perfekt abgeschlossenes Volumen einschließt. Ein mehr geläufiges Synonym ist "wasserdicht". Um einen Körper aus einer [Hülle](#Shell) zu generieren, muss diese eine Mannigfaltigkeit sein.

Mantis
:   Der Name des vom FreeCAD-Projekt benutzten [Fehlerverfolgungssystems](#Tracker).

Mesh > Netz
:   Eine Art von Objekt, die von FreeCAD importiert oder generiert werden kann. Für mehr Details siehe [[[1]](https://de.wikipedia.org/wiki/Polygonnetz)].

Model > Modell
:   Auch 3D-Modell genannt. Es ist die Computer-Repräsentation eines dreidimensionalen [Teils](#Part) oder einer [Baugruppe](#Assembly).

[MultiTransform](/PartDesign_MultiTransform "PartDesign MultiTransform")
:   Steht für eine multiple Transformation. Ein [Feature](#Feature) des [PartDesign-Arbeitsbereiches](/PartDesign_Workbench/de "PartDesign Workbench/de"), der eine Serie von gleichen Transformationen (linear oder zirkuläres Muster oder gespiegelt) auf eine ausgewähltes Feature anwendet.

## N

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Name
:   Ein eindeutiger Bezeichner für ein Objekt eines FreeCAD-Dokuments. Der Name kann nicht mehr geändert werden, nachdem er einmal vom Programm vergeben wurde. Siehe auch [Label](#Label).

Non-manifold > nicht-vielfältig bzw. nicht-mannigfaltig
:   Nicht-mannigfaltige Topologie, auch Null-Wandstärke genannt, tritt auf, wenn zwei individuelle Festkörper an einem theoretischen Knotenpunkt bzw. einer theoretischen Kante verbunden sind. Es handelt sich dabei um eine nicht unterstützte Art von Formen (die von FreeCAD nicht immer erkannt wird), die vermieden werden sollte, da sie in nachfolgenden Schritten und beim Export Probleme bereiten kann.

Null Shape
:   Eine [Form](#Shape)-Eigenschaft, die durch das erzeugende Programm oder Makro nicht korrekt initialisiert wurde. Dies ist normalerweise ein Fehlerzustand.

## O

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

OCC
:   Abkürzung für [Open CASCADE](#Open_CASCADE). Bevor der Code frei verfügbar gestellt wurde, wurde er gewöhnlich CAS.CADE genannt (abgekürzt von Computer Aided Software for Computer Aided Design and Engineering).

OCE
:   **O**pen CASCADE **C**ommunity **E**dition. Ein Projekt, das das offizielle [Open CASCADE](#Open_CASCADE) mit Korrekturen, Verbesserungen und experimentellem Code von Benutzern zur Verfügung stellte. FreeCAD arbeitet sowohl mit OCC als auch mit OCE.

OCCT
:   Open CASCADE Technology. Siehe [OCC](#OCC).

[Open CASCADE](http://www.opencascade.org)
:   Der [Geometriemodellierungskernel](#Geometric_modeling_kernel) (Softwarebibliothek), die FreeCAD zugrunde liegt. Auch [OCC](#OCC) oder [OCCT](#OCCT) (für Open CASCADE Technology) genannt. Siehe auch [OCE](#OCE).

[OpenSCAD](http://www.openscad.org/)
:   1.  Der Name eines rein skriptbasierten CAD-Programms.
:   2.  Ein [Arbeitsbereich](#Workbench/de) in FreeCAD. Der [Arbeitsbereich](#Workbench/de) [OpenSCAD](/OpenSCAD_Workbench/de "OpenSCAD Workbench/de") stellt eine Schnittstelle für den Import/Export von \*.scad und \*.csg Modellen zur Verfügung, sowie einige Dienstprogramme.

Origin -> Koordinatenursprung
:   Das Zentrum eines Koordinatensystems. Alle Achsen starten von hier in entweder positiver oder negative Richtung. Ähnlich wie der Blick ins All mit der Erde als „Ursprung“.

Orthographic -> orthogonal
:   Siehe [Orthogonalprojektion](https://de.wikipedia.org/wiki/Orthogonalprojektion) und [Normalprojektion](https://de.wikipedia.org/wiki/Normalprojektion).

## P

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Pad > Block
:   Eine Erweiterung einer [Skizze](#Sketch) in die Richtung der Normale zur Skizzenebene. Dabei wird aus der zweidimensionalen Skizze ein dreidimensionales Objekt erzeugt. Siehe auch [Extrusion](#Extrude).

Part > Bauteil
:   1.  Ein FreeCAD-[Arbeitsbereich](#Workbench). Wird hauptsächlich für einen der [Konstruktive Festkörpergeometrie](https://de.wikipedia.org/wiki/Constructive_Solid_Geometry) entsprechenden Arbeitsablauf verwendet. Siehe Arbeitsbereich [Part](/Part_Workbench "Part Workbench").
:   2.  Ein FreeCAD-Python-Modul mit direkter Schnittstell zu [OCC](#OCC). Siehe [Part skripten](/Part_scripting/de "Part scripting/de").
:   3.  Ein Container, der alle Arten von FreeCAD-Objekten gruppiert und eine [Positionierung](#Placement) besitzt. Siehe [Std Part](/Std_Part/de "Std Part/de")
:   4.  Ein einteiliger Festkörper. Die Komponente auf der untersten Ebene in einem Zusammenbau.

PartDesignNext
:   Der Spitzname aus den Foren, um den [PartDesign-Arbeitsbereich](/PartDesign_Workbench/de "PartDesign Workbench/de"), der sich in der FreeCAD Version 0.17 von der Version v0.16 und früher durch weitgehende Änderungen der Arbeitsweise geändert hat, von dem ursprünglichen PartDesign zu unterscheiden.

PD
:   Abkürzung von [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de"), einem [Arbeitsbereich](#Workbench) von FreeCAD.

PDN
:   Abkürzung von [PartDesignNext](#PartDesignNext).

Perspective > Perspektive
:   [Perspective projection](http://en.wikipedia.org/wiki/Graphical_projection#Perspective)

[Pivy](http://pypi.python.org/pypi/Pivy)
:   Eine Software-Bibliothek, die es Python erlaubt <#Coin> zu benutzen.

Placement > Platzierung
:   Eine Zusammenstellung von Eigenschaften eines Objekt, das seine Koordinaten und die Orientierung im Raum definiert. Siehe [Platzierung](/Placement/de "Placement/de").

Planar > eben
:   Die Eigenschaft einer Geometrie, bei der alle Elemente in derselben Ebene liegen.

Plane > Ebene
:   1.  Eine flache, zweidimensionale Fläche, die sich bis ins Unendliche erstreckt.
:   2.  Ein grundlegendes zweidimensionales Objekt, das in dem Arbeitsbereich Part erstellt werden kann. Dort ist die Ebene jedoch mit Begrenzungen versehen.

Plot
:   1.  > Plot: Ein veraltetes Synonym für eine technische Zeichnung, die mit einem Stift-Plotter erstellt wurde. Siehe [Plotter](https://en.wikipedia.org/wiki/Plotter) (engl.)
:   2.  > Lageplan: Kurz für Plot-Plan. Siehe [Site plan](https://en.wikipedia.org/wiki/Site_plan) (engl.)
:   3.  > Diagramm: Graphische Darstellung von Daten. Siehe [Plot (graphics)](https://en.wikipedia.org/wiki/Plot_(graphics)) (engl.)

Pocket
:   defn=Ein [skizzenbasiertes](#Sketch) [Formelement](#Feature) das Material von einem Festkörper entfernt.

Point > Punkt
:   Eine Bezeichnung für einen Ort im 3D-Arbeitsraum. Ein “Punkt” hat keine Ausdehnung. Er hat eine Ausdehnung auf dem Bildschirm, gewöhnlich durch ein Pixel dargestellt, so dass der Punkt sichtbar ist. Siehe auch [Vertex](#Vertex).

Polygon mesh
:   See [Polygonal\_mesh](http://en.wikipedia.org/wiki/Polygonal_mesh)

Polyline > Linienzug
:   Eine Bezeichung für eine Reihe miteinander verbundener Kanten aus Geraden und Bögen.

POV-Ray
:   [POV-Ray](http://en.wikipedia.org/wiki/POV-Ray) Ein Programm zum Erzeugen von photorealistischen Bilder aus dreidimensionalen Szenen.

PPA
:   Eine Abkürzung für **P**ersonal **P**ackage **A**rchive. Es ist eine Art von Software-Repositorium exklusiv für das Ubuntu-Linux-Betriebssystem. Das FreeCAD-Projekt stellt sowohl die neueste freigegebene Version sowie Entwicklerversionen durch zwei PPA-Repositories zur Verfügung. Aktualisierungen werden über das Paketverwaltungssystem des Betriebssystems durchgeführt.

Primitive > Grundkörper
:   Eine grundlegende Form, die bei der Kontruktion von Modellen benutzt wird. Einige 2D-Körper sind: Punkt, Linie, Polygon, Kreis, Ellipse, Spirale, Helix. 3D-Körper: Quader, Zylinder, Kegel, Torus, Kugel, Ellipsoid, Prisma.

[PySide](http://www.pyside.org)
:   Eine frei verfügbare Sofware-Bibliothek, die es Python erlaubt, QT zu nutzen.

[Python](http://www.python.org)
:   Eine Programmiersprache, die sowohl bei der Entwicklung von FreeCAD als auch in benutzergeschriebenen [Makros](#Macro) oder Skripten verwendet wird.

## Q

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

[Qt](http://qt-project.org)
:   Eine plattformübergreifende Bibliothek zur Erstellung von grafischen Benutzeroberflächen.

## R

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Raytracing
:   [Raytracing](https://de.wikipedia.org/wiki/Raytracing) Ein Verfahren um aus einer dreidimensionalen Szene durch Verfolgen von Lichtstrahlen ein Bild zu generieren.

Revolve -> Drehen
:   Ein Werkzeug aus dem [Arbeitsbereich](#Workbench) [Part](/Part_Workbench/de "Part Workbench/de"). Siehe [Part Drehen](/Part_Revolve/de "Part Revolve/de").

Robot -> Roboter
:   [Industrieroboter](https://de.wikipedia.org/wiki/Industrieroboter) Sowie ein Arbeitsbereich in FreeCAD zur Simulation eines Industrieroboters.

Rotate -> Rotation
:   Die Aktion bei der ein Objekt um eine Achse gedreht wird, um seine Orientierung im Raum zu ändern.

## S

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Section -> Schnitt
:   Schnitt durch einen Körper, siehe auch [[2]](https://de.wikipedia.org/wiki/Schnitt_(Darstellung)). FreeCAD enthält Werkzeuge um Schnitte als geometrische Objekte, als auch um Schnitte zur Dokumentation in Zeichnungen zu erstellen.

Self Intersection
:   Ein Zustand, bei dem sich zum Beispiel eine Kurve mit sich selber schneidet (wie '8','&'). Dies kann der Geometrie-Kernel nicht verarbeiten und verursacht im allgemeinen einen Fehlerzustand.

Shape > Form
:   Generische Bezeichnung, die in FreeCAD für die meisten Elemente benutzt wird. (Ausser für [meshes](#Mesh)) Der Begriff kann am ehesten mit geometrische Figur übersetzt werden. [[3]](https://de.wikipedia.org/wiki/Geometrische_Figur) In einem FreeCAD-Objekt enthält das Shape die geometrische Form.

Shell -> Hülle
:   Hülle aus zwei oder mehr miteinander verbundenen [Flächen](#Face). Eine vollkommen geschlossene Hülle ([manifold](#Manifold)) kann in einen soliden Körper umgewandelt werden.

Sketch -> Skizze
:   Eine zweidimensionale Skizze auf einer Ebene oder auf einer ebenen [Fläche](#Face). In FreeCAD ist eine Skizze immer ein zweidimensionales Objekt irgendwo im dreidimensionalen Raum.

[Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de")
:   Ein [Arbeitsbereich](#Workbench) um zweidimensionale Konturen aus (Linien-) [Elementen](#Element) und [Randbedingungen](#Constraint) zu erstellen.

Sketcher Solver
:   FreeCADs interner Mechanismus, der Abhängigkeiten zwischen und die Effekte des Hinzufügens, Entfernens und Veränderns auf die Geometrien aller Skizzen berechnet. Der Sketcher-Solver berechet auch die Anordnung aller Geometrien in allen Skizzen, damit sie korrekt dargestellt werden können

Smooth Line
:   Eine Linie auf der Zeichnung, die den Übergang zwischen zwei tangentialen Flächen anzeigt, wie bei einem Übergang einer ebenen Fläche zu einer Verrundung. Auch "Tangentenkante" genannt. Siehe [Drawing View](/Drawing_View#Modify_an_existing_view "Drawing View")

Solid -> Festkörper
:   Teil des 3D-Raums, der durch eine [Hülle](#Shell) eingegrenzt wird. Ein Festkörper besitzt ein Volumen und weitere Eigenschaften, die Objekte mit einer Masse aufweisen.

Solver
:   See [Sketcher Solver](#Sketcher_Solver).

Stable
:   Der Spitzname der zuletzt veröffentlichten offiziellen Version von FreeCAD. Dies ist oft die Version, die von anderen Quellen als dem FreeCAD-Projekt zur Verfügung gestellt wird. Vergleiche mit [Unstable](#Unstable).

STL
:   *STereoLithography*, auch bekannt als *Standard Tessellation Language.* Ein [Mesh](#Mesh)-Dateiformat, das nur die Oberfläche eines 3D-Objektes definiert. Die Dateierweiterung ist \*.stl

STEP
:   Ein Dateiformat nach ISO-Norm (ISO 10303) für den Auschtausch von 3D-Daten und Produktinformationen. Es ersetzt weitgehend [IGES](#IGES). Dateinamenserweiterungen sind \*.step, \*.stp.

SVG
:   [[4]](https://de.wikipedia.org/wiki/Scalable_Vector_Graphics). Ein Dateiformat für Vektorgrafik.

Sweep -> Austragung
:   Eine 3D-Form, die aus mindestens einer Profilkurve, die entlang einer Leitkurve (Pfad) geführt wird. Im allgemeinen bezeichnet der Begriff sowohl das Werkzeug als auch die entstandene Form. Siehe auch [[5]](http://de.wikipedia.org/wiki/Sweep_(Grafik)) (deutsch) [Solid modeling](http://en.wikipedia.org/wiki/Solid_modeling#Sweeping) (englisch)

## T

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Task panel -> Aufgaben-Bereich
:   Ein Bedienfeld in FreeCAD, das die spezifischen Möglichkeiten für die aktuell anstehende Aufgabe anzeigt. Es kann die verfügbaren Werkzeuge in dem gerade offenen [Arbeitsbereich](#Workbench) anzeigen oder die einzustellenden Werte und Optionen für den gerade aktiven [Befehl](#Command) zeigen.

Tasks tab -> Registerkarte Aufgaben
:   Siehe [Aufgaben-Bereich](#Tasks_panel).

Tessellation -> Parkettierung
:   Die Parkettierung einer Oberfläche ist das Pflastern dieser Oberfläche mit einer oder mehreren Arten von geometrischen Kacheln ohne Überlappungen und ohne Lücken. In FreeCAD wird dies benötigt, um die geometrischen Formen in der 3D-Ansicht darzustellen. Die Größe der Kacheln relativ zu den Abmessungen der geometrischen Formen kann in den Einstellungen angepast werden, um eine glattere Darstellung von gekrümmten Oberfläche auf Kosten der Berechnungszeit erhalten. Siehe auch [Voreinstellungseditor](/Preferences_Editor/de "Preferences Editor/de").

Thickness
:   1.  -> Wandstärke: Ein Maß für die Dicke einer Form (Abstand paralleler Flächen).
:   2.  -> Dicke: Ein Werkzeug des Arbeitsbereichs [Part](/Part_Workbench/de "Part Workbench/de"), zum Aushöhlen eines [Festkörpers](#Solid) unter Einhaltung einer festgelegten konstanten Wandstärke. (Aufdicken)

Toggle -> Umschalter
:   Eine Einstellmöglichkeit, die einen von zwei Werten annehmen kann, zum Beispiel `true` oder `false` und Aus oder An.

Topological Naming
:   Ein Schema, bei dem einer erzeugten Kante oder Fläche eine dauerhafter Name erteilt wird. Intern identifiziert FreeCAD die Kanten (edge) und Flächen (face) eines Volumenkörpers durch Nummerierung: Edge1, Edge2, Face1, Face2, usw. Das Problem ist, das diese Namen eher zufällig vergeben werden und dass sie sich ändern, wenn der Körper so geändert wird, dass sich die Zahl der Kanten oder Flächen ändert. Zum Beispiel kann sich ein Element, das mit der Fläche Nr. 2 verbunden ist, nach der Änderung des Modells mit einer völlig anderen Fläche verbunden sein, die jetzt die Flächennummer 2 bekommen hat. Dies wirkt sich für den Benutzer als Fehler aus, da er ein unerwünschtes Ergebnis erhält. Bis zur Version 0.20 von FreeCAD wurde eine brauchbare topologische Benennung mit dauerhaften Namen noch nicht implementiert, so dass sich bei einer Modifizierung eines Objektes, bei der sich die Anzahl von Kanten oder Flächen ändert, auch die Namen der Kanten und Flächen ändern können.

Torus
:   Ein (geometrischer) Grundkörper.

Tracker
:   Kurzform für das Fehlerverfolgungssystem, die webbasierte Software zur Verwaltung der gemeldeten Fehler und Verbesserungswünsche. Siehe auch [Mantis](#Mantis).

[Tree view](/Tree_view/de "Tree view/de") -> Baumansicht
:   Die Baumansicht ist ein Bestandteil von FreeCADs [Oberfläche](/Interface/de "Interface/de"). Sie kann als eigenständiges [GUI](#GUI)-Element oder als Teil der [Combo-Ansicht](/Combo_view/de "Combo view/de") angezeigt werden. Sie enthält eine Darstellung der Dokumentstruktur.

## U

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Union -> Vereinigung
:   Ein Werkzeug des [Arbeitsbereichs](#Workbench) [Part](/Part_Workbench/de "Part Workbench/de"), das die [boolesche Verknüpfung](#Boolean_Operation) Vereinigung mit den ausgewählten Körpern durchführt.

Unstable
:   Der Spitzname für die aktuelle Entwicklungsversion der FreeCAD-Software. Diese Version enthält viele aktuelle Änderungen der Entwickler. Normalerweise funktioniert sie ohne Fehler und liefert keine falschen Ergebnisse, wurde aber noch nicht gründlich getestet.

Upgrade > [Hochstufen](/Draft_Upgrade/de "Draft Upgrade/de")
:   Ein Werkzeug des [Arbeitsbereichs](#Workbench) [Draft](/Draft_Workbench/de "Draft Workbench/de").

## V

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Vector > Vektor
:   Eine Größe mit einer Richtung. Oft grafisch als Pfeil in 2 oder 3 Dimensionen dargestellt. Zum Beispiel sind "fünfzig Schritte nach Norden", "9,8 m/s^2 nach unten" und "(3, 5 und 6) Einheiten in der X-, Y- und Z-Richtung" alles Vektoren. In FreeCAD werden sie am häufigsten als geordnete Paare (x, y) oder geordnete Tripel (x, y, z) angegeben.

Vertex > Knoten
:   Ein einzelner [Punkt](#Point) im Raum oder die Ecke einer [Form](#shape), wo [Kanten](#Edge) aufeinander treffen. OCCT (Open CASCADE Technology) definiert ihn als nulldimensionale [Form](#shape), die einem Punkt in der Geometrie entspricht. Siehe [OCCT Profile: Defining the topology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)
    (engl.)

Vertices > Vertizes
:   Plural von [Vertex](#Vertex)

Viewprovider
:   Allgemeine Schnittstelle für alle visuellen Dinge in FreeCAD. Ein ViewProvider generiert und bearbeitet alles rund um die Visualisierung und Präsentation von Objekten, vom FreeCAD-[App-Layer](#App) bis zum Anwender. Diese Klasse und ihre Nachkommen müssen für alle Objektarten implementiert werden, um sie in der [3D-Ansicht](#3DView) und [Baumansicht](#TreeView) anzuzeigen.

## W

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

WB
:   Abkürzung für [Workbench](#Workbench) (Arbeitsbereich).

Wire > Linienzug
:   1.  Eine Folge von [Knoten](#Vertex) (Vertizes), die durch [Kanten](#Edge) (Edges) verbundenen sind. Der Begriff wird in diesem Sinne hauptsächlich von [[Open CASCADE Technology](https://dev.opencascade.org/doc/overview/html/occt__tutorial.html#OCCT_TUTORIAL_SUB2_3)] verwendet und daher auch innerhalb von FreeCAD.
:   2.  Ein Befehl des [Arbeitsbereichs](#Workbench) [Draft](/Draft_Workbench/de "Draft Workbench/de") (Draft Linienzug), der einen parametrischen Linienzug erstellt.

Workbench > Arbeitsbereich
:   Ein [Arbeitsbereich](/Workbenches/de "Workbenches/de"), auch als Modul bezeichnet, gruppiert einen Satz von Werkzeugen für eine bestimmte Aufgabe.

## X

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

X
:   Bezieht sich im Allgemeinen auf die 2D- oder 3D-X-[Achse](#Achse).

## Y

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Y
:   Bezieht sich im Allgemeinen auf die 2D- oder 3D-Y-[Achse](#Achse).

## Z

[0-9](#0-9) [A](#A) [B](#B) [C](#C) [D](#D) [E](#E) [F](#F) [G](#G) [H](#H) [I](#I) [J](#J) [K](#K) [L](#L) [M](#M) [N](#N) [O](#O) [P](#P) [Q](#Q) [R](#R) [S](#S) [T](#T) [U](#U) [V](#V) [W](#W) [X](#X) [Y](#Y) [Z](#Z) [(Top)](#top)

Z
:   Bezieht sich im Allgemeinen auf die 2D- oder 3D-Z-[Achse](#Achse).

Retrieved from "<http://wiki.freecad.org/index.php?title=Glossary/de&oldid=1484022>"