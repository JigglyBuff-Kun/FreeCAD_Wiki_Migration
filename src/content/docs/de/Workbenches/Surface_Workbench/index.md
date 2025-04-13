---
title: Arbeitsbereich Surface
---

![](/src/assets/images/Workbench_Surface.svg)

Symbol des Arbeitsbereichs Surface

## Einleitung

Der Arbeitsbereich ![](/src/assets/images/Workbench_Surface.svg)Suface enthält Werkzeuge zum Erstellen und Ändern einfacher [NURBS-Oberflächen](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline).
Diese Werkzeuge haben eine ähnliche Funktionalität wie das Werkzeug ![](/src/assets/images/Part_Builder.svg) [Part Formgenerator](/Part_Builder/de "Part Builder/de") wenn die **Fläche aus Kanten** Option verwendet wird. Im Gegensatz zu diesem Werkzeug sind die Werkzeuge des Arbeitsbereichs Surface jedoch parametrisch und bieten zusätzliche Optionen. In dieser Hinsicht ähneln die Werkzeuge in diesem Arbeitsbereich solchen wie ![](/src/assets/images/PartDesign_AdditiveLoft.svg) [PartDesign Ausformung](/PartDesign_AdditiveLoft/de "PartDesign AdditiveLoft/de") und ![](/src/assets/images/PartDesign_AdditivePipe.svg) [PartDesign Rohr](/PartDesign_AdditivePipe/de "PartDesign AdditivePipe/de").

Einige der enthaltenen Funktionen sind:

- Flächen aus Randkurven erstellen.
- Krümmungsstetigkeit zu benachbarten Flächen festlegen.
- Oberflächen durch zusätzliche Kurven und Knotenpunkte abstimmen.
- Flächen verlängern.
- Ein Netz kann als Vorlage verwendet werden, um Spline-Kurven auf seiner Oberfläche zu erstellen.

![](/src/assets/images/Surface_example.png)

## Anwendung

Der Arbeitsbereich Surface bezweckt, Flächen mit Formen zu erstellen, die mit den Standardwerkzeugen anderer Arbeitsbereiche nicht möglich sind.

![](/src/assets/images/Toy_Duck.png)

Oberfläche, aus Skizzen erstellt, die auf Bezugsebenen angeordnet sind, mit den Werkzeugen des Arbeitsbereichs [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de")

Der Arbeitsbereich Surface ist an die anderen Arbeitsbereichen von FreeCAD angepasst. Das obige Beispiel wurde im Arbeitsbereich ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") aus ![](/src/assets/images/Sketcher_NewSketch.svg) [Skizzen](/Sketch/de "Sketch/de") erstellt, die auf ![](/src/assets/images/PartDesign_Plane.svg) [PartDesign Bezugsebenen](/PartDesign_Plane/de "PartDesign Plane/de") angelegt wurden. Die Konstruktion kann voll parametrisch sein, wenn alle Bezugsebenen und Skizzen entsprechend definiert sind. In den meisten Fällen reicht es aus eine geschlossenen Skizze zu zeichnen, um die Kontur einer Fläche festzulegen und dann verschiedene Möglichkeiten zur weiteren Formanpassung zu nutzen.

Die generierte Oberfläche kann nicht mehr innerhalb eines ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Körpers](/PartDesign_Body/de "PartDesign Body/de") abgelegt werden. Jedoch kann ein ![](/src/assets/images/Std_Part.svg) [Std Part](/Std_Part/de "Std Part/de") die generierte Oberfläche enthalten, zusammen mit dem zugehörigen ![](/src/assets/images/PartDesign_Body.svg) [PartDesign Körper](/PartDesign_Body/de "PartDesign Body/de"), der die Bezugsebenen und Skizzen enthält. Das nicht-parametrische Werkzeug ![](/src/assets/images/Part_Builder.svg) [Part Formgenerator](/Part_Builder/de "Part Builder/de") kann dann verwendet werden, um einen [Hüllkörper](/Glossary/de#Shell "Glossary/de") und schließlich einen [Festkörper](/Glossary/de#Solid "Glossary/de") zu erstellen.

## Werkzeuge

- ![](/src/assets/images/Surface_Filling.svg) [Füllfläche](/Surface_Filling/de "Surface Filling/de"): Erstellt eine Füllfläche aus einer Reihe von Randkurven.

- ![](/src/assets/images/Surface_GeomFillSurface.svg) [GeomFüllflächen](/Surface_GeomFillSurface/de "Surface GeomFillSurface/de"): Erstellt eine Füllfläche aus zwei, drei oder vier Randkurven.

- ![](/src/assets/images/Surface_Sections.svg) [Querschnitte](/Surface_Sections/de "Surface Sections/de"): Erstellt eine Oberfläche über Kanten, die die Querschnitte der Oberfläche repräsentieren.

- ![](/src/assets/images/Surface_ExtendFace.svg) [FlächeErweitern](/Surface_ExtendFace/de "Surface ExtendFace/de"): Extrapoliert die Oberfläche an den Rändern mit ihren lokalen U- und V-Parametern.

- ![](/src/assets/images/Surface_CurveOnMesh.svg) [KurveAufNetz](/Surface_CurveOnMesh/de "Surface CurveOnMesh/de"): Erstellt angenäherte Spline-Abschnitte auf einem ausgewählten [Netz](/Mesh_Workbench/de "Mesh Workbench/de").

- ![](/src/assets/images/Surface_BlendCurve.svg) [Übergangskurve](/Surface_BlendCurve/de "Surface BlendCurve/de"): Erstellt eine Bezier-Kurve zwischen zwei Kanten mit der gewünschten Stetigkeit.

Retrieved from "<http://wiki.freecad.org/index.php?title=Surface_Workbench/de&oldid=1493003>"
