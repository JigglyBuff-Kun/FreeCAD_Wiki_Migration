---
title: Part Ausschneiden
---

|                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Ausschneiden                                                                                                                                                                                                                             |
| Menüeintrag                                                                                                                                                                                                                                   |
| Formteil → Verbinden → Für Objekt ausschneiden                                                                                                                                                                                                |
| Arbeitsbereich                                                                                                                                                                                                                                |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                                                |
| Standardtastenkürzel                                                                                                                                                                                                                          |
| _Keiner_                                                                                                                                                                                                                                      |
| Eingeführt in Version                                                                                                                                                                                                                         |
| 0.16                                                                                                                                                                                                                                          |
| Siehe auch                                                                                                                                                                                                                                    |
| [Part Verbinden](/Part_JoinConnect/de "Part JoinConnect/de"), [Part Einbetten](/Part_JoinEmbed/de "Part JoinEmbed/de"), [Part BoolescheVerknüpfung](/Part_Boolean/de "Part Boolean/de"), [Part Dicke](/Part_Thickness/de "Part Thickness/de") |
|                                                                                                                                                                                                                                               |

## Beschreibung

Das Werkzeug ![](/images/Part_JoinCutout.svg) **Part Ausschneiden** erstellt einen Ausschnitt in einem Hohlkörper (z.B. einem Rohr), in den ein anderer Hohlkörper passt.

![](/images/JoinFeatures_Cutout.png)

## Anwendung

1. Zuerst das Basisobjekt auswählen, dann das Objekt zum Einbetten. Die Reihenfolge der Auswahl ist wichtig. Es reicht aus, nur eine Teilform jedes Objekts (z.B. Flächen) auszuwählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltflächen ![](/images/Part_JoinCutout.svg) Für Objekt ausschneiden drücken.
   - Den Menüeintrag **Part → Verbinden → ![](/images/Part_JoinCutout.svg) Für Objekt ausschneiden** auswählen.
3. Ein JoinFeature-Objekt wird erstellt, dessen Modus auf 'Embed' eingestellt ist. Die originalen Objekte werden ausgeblendet und das Ergebnis des Einbettens wird in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt.

## Eigenschaften

Basis

- Daten**Base**: Reference to base object (the one to make the cutout in). The object should be a single solid.
- Daten**Tool**: Reference to tool object (the object that is to fit into the cutout). The object can be a single solid, or a [valid compound](/Part_Compound "Part Compound") of solids.
- Daten**Mode**: The mode of operation, equals 'Cutout' (Changing that will transform the tool into another Part_JoinXXX). The value of 'bypass' can be used to temporarily disable the long computations (a compound of Base and Tool will be created, which is a fast operation).
- Daten**Refine**: Sets whether to apply [Refine](/Part_RefineShape "Part RefineShape") operation or not, to the final shape. The default value is determined by a 'Automatically refine shape after boolean operation' checkbox in PartDesign preferences. When Mode property is 'bypass', Refine is ignored (never applied).

## Beispiel

1. Create a pipe by applying [thickness](/Part_Thickness "Part Thickness") to a [cylinder](/Part_Cylinder "Part Cylinder"):  
   ![](/images/JoinFeatures_Example_step1.png)
2. Create another, smaller diameter pipe, and [place](/Placement "Placement") it so that it pierces the wall of the first pipe:  
   ![](/images/JoinFeatures_Example_step2.png)
3. Select the first pipe, then the second pipe (order of selection is important), and click the 'Cutout for object' option from the Join tools dropdown toolbar button.  
   ![](/images/JoinFeatures_Example_step3_Cutout.png)

## Algorithmus

Die Algorithmen hinter den Verbindungswerkzeugen sind ziemlich einfach und es ist wichtig, sie zu verstehen, um die Werkzeuge richtig einzusetzen.

1. Basisobjekt ist [boolesches Schneiden](/Part_Cut/de "Part Cut/de") mit einem Tool-Objekt. Die entstandene Form ist ein Satz ([Verbund](/Part_Compound/de "Part Compound/de")) von nicht überschneidenden Volumenkörpern (typischerweise zwei).

2. Der entstandene Verbund ist gefiltert: nur der größte Volumenkörper bleibt übrig.

3. Falls Daten**Refine** den Wert `True` hat, ist die entstandene Form [verfeinert](/Part_RefineShape/de "Part RefineShape/de").

![](/images/JoinFeatures-Algo-Cutout.png)

### Hinweise

- Falls das Objekt nach Schritt 1 ein Stück bliebt, ist das Ergebnis des Ausschnitts äquivalent zu [booleschem Schneiden](/Part_Cut/de "Part Cut/de") der Basis mit dem Werkzeug.
- Das Werkzeug wird nun unerwartete Ergebnisse liefern, falls ein Verbund als Basis dient. Dies könnte sich in der Zukunft ändern.
- Weil das größte Objekt durch Volumenvergleich der Teile festgelegt wird, kann das Werkzeug nur mit Volumenkörpern arbeiten. Da

Because the largest piece is determined by comparing volumes of pieces, the tool can only work with solids. Dies könnte sich in der Zukunft ändern.

## Skripten

Die Verbinden-Werkzeuge können in [macros/de](/Macros/de "Macros/de") und von der Python-Konsole aus mit der folgenden Funktion verwendet werden:

```
JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout')

```

- Creates an empty Cutout feature (or other Join feature, depending on mode passed). The properties Base and Tool must be assigned explicitly, afterwards.
- Returns the newly created object.

Beispiel:

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Cutout', mode = 'Cutout' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

Das Werkzeug selbst ist in Python implementiert, siehe /Mod/Part/JoinFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/JoinFeatures.py)) innerhalb des FreeCAD-Installationsverzeichnisses.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinCutout/de&oldid=1497121>"
