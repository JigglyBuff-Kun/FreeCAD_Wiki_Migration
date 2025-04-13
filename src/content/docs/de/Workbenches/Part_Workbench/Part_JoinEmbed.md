---
title: Part Einbetten
---

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Einbetten                                                                                                                                                                                                                                     |
| Menüeintrag                                                                                                                                                                                                                                        |
| Part → Verbinden → Objekt einbetten                                                                                                                                                                                                                |
| Arbeitsbereich                                                                                                                                                                                                                                     |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                                                     |
| Standardtastenkürzel                                                                                                                                                                                                                               |
| _Keiner_                                                                                                                                                                                                                                           |
| Eingeführt in Version                                                                                                                                                                                                                              |
| 0.16                                                                                                                                                                                                                                               |
| Siehe auch                                                                                                                                                                                                                                         |
| [Part Verbinden](/Part_JoinConnect/de "Part JoinConnect/de"), [Part Ausschneiden](/Part_JoinCutout/de "Part JoinCutout/de"), [Part BoolescheVerknüpfung](/Part_Boolean/de "Part Boolean/de"), [Part Dicke](/Part_Thickness/de "Part Thickness/de") |
|                                                                                                                                                                                                                                                    |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Part_JoinEmbed.svg) **Part Einbetten** Bettet einen Hohlkörper (z.B. ein Rohr) in einen anderen Hohlkörper ein.

![](/src/assets/images/JoinFeatures_Embed.png)

## Anwendung

1. Zuerst das Basisobjekt auswählen, dann das Objekt zum Einbetten. Die Reihenfolge der Auswahl ist wichtig. Es reicht aus, nur eine Teilform jedes Objekts (z.B. Flächen) auszuwählen.
2. Es gibt mehrere Möglichkeiten, das Werkzeug aufzurufen:
   - Die Schaltflächen ![](/src/assets/images/Part_JoinEmbed.svg) Objekt einbetten drücken.
   - Den Menüeintrag **Part → Verbinden → ![](/src/assets/images/Part_JoinEmbed.svg) Objekt einbetten** auswählen.
3. Ein JoinFeature-Objekt wird erstellt, dessen Modus auf 'Embed' eingestellt ist. Die originalen Objekte werden ausgeblendet und das Ergebnis des Einbettens wird in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt.

## Eigenschaften

Basis

- Daten**Base**: Reference to base object (the one the other object is to be embedded into). The object should be a single solid.
- Daten**Tool**: Reference to tool object (the object to be embedded). The object can be a single solid, or a [valid compound](/Part_Compound "Part Compound") of solids.
- Daten**Mode**: The mode of operation, equals 'Embed' (Changing that will transform the tool into another Part_JoinXXX). The value of 'bypass' can be used to temporarily disable the long computations (a compound of Base and Tool will be created, which is a fast operation).
- Daten**Refine**: Sets whether to apply [Refine](/Part_RefineShape "Part RefineShape") operation or not, to the final shape. The default value is determined by a 'Automatically refine shape after boolean operation' checkbox in PartDesign preferences. When Mode property is 'bypass', Refine is ignored (never applied).

## Beispiel

1. Erstelle ein Rohr durch anwenden einer [Dicke](/Part_Thickness/de "Part Thickness/de") auf einen [Zylinder](/Part_Cylinder/de "Part Cylinder/de"):  
   ![](/src/assets/images/JoinFeatures_Example_step1.png)
2. Erstelle ein weiteres Rohr mit kleinerem Durchmesser und [positioniere](/Placement/de "Placement/de") es so, dass es die Wand des ersten Rohres durchstößt:  
   ![](/src/assets/images/JoinFeatures_Example_step2.png)
3. Wähle das erste Rohr, dass das zweite (die Reihenfolge der Auswahl ist wichtig), und klicke die 'Objekt einbetten'-Option aus den Verbinden-Werkzeugen in der Werkzeugleiste.  
   ![](/src/assets/images/JoinFeatures_Example_step3_Embed.png)
4. Benutze ein Querschnitt-Werkzeug ([Std Schnittebene](/Std_ToggleClipPlane/de "Std ToggleClipPlane/de"), [Arch Schnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de"), [Arch SchneideEbene](/Arch_CutPlane/de "Arch CutPlane/de")), um Schnitte darzustellen. Auf dem folgenden Bild wurde Arch Schnittebene benutzt.  
   ![](/src/assets/images/JoinFeatures_Example_step4_Embed.png)

## Algorithmus

Die Algorithmen hinter den Verbindungswerkzeugen sind ziemlich einfach und es ist wichtig, sie zu verstehen, um die Werkzeuge richtig einzusetzen.

1. Basisobjekt ist [boolesches Schneiden](/Part_Cut/de "Part Cut/de") mit einem Tool-Objekt. Die entstandene Form ist ein Satz ([Verbund](/Part_Compound/de "Part Compound/de")) von nicht überschneidenden Volumenkörpern (typischerweise zwei).

2. Der entstandene Verbund ist gefiltert: nur der größte Volumenkörper bleibt übrig.

3. Dieser größte Volumenkörper wird [verschmolzen](/Part_Fuse/de "Part Fuse/de") mit dem Werkzeug-Objekt.

4. Falls Daten**Refine** den Wert `True` hat, ist die entstandene Form [verfeinert](/Part_RefineShape/de "Part RefineShape/de").

![](/src/assets/images/JoinFeatures-Algo-Embed.png)

### Hinweise

- Falls das Objekt nach Schritt 1 ein Stück bliebt, ist das Ergebnis des Ausschnitts äquivalent zu [booleschem Schneiden](/Part_Cut/de "Part Cut/de") der Basis mit dem Werkzeug.
- Das Werkzeug wird nun unerwartete Ergebnisse liefern, falls ein Verbund als Basis dient. Dies könnte sich in der Zukunft ändern.
- Weil das größte Objekt durch Volumenvergleich der Teile festgelegt wird, kann das Werkzeug nur mit Volumenkörpern arbeiten. Da

Because the largest piece is determined by comparing volumes of pieces, the tool can only work with solids. Dies könnte sich in der Zukunft ändern.

## Skripten

Die Verbinden-Werkzeuge können in [macros/de](/Macros/de "Macros/de") und von der Python-Konsole aus mit der folgenden Funktion verwendet werden:

```
JoinFeatures.makePartJoinFeature(name = 'Embed', mode = 'Embed')

```

- Creates an empty Embed feature (or other Join feature, depending on mode passed). The properties Base and Tool must be assigned explicitly, afterwards.
- Returns the newly created object.

Beispiel:

```
import JoinFeatures
j = JoinFeatures.makePartJoinFeature(name = 'Embed', mode = 'Embed' )
j.Base = FreeCADGui.Selection.getSelection()[0]
j.Tool = FreeCADGui.Selection.getSelection()[1]

```

Das Werkzeug selbst ist in Python implementiert, siehe /Mod/Part/JoinFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/JoinFeatures.py)) innerhalb des FreeCAD-Installationsverzeichnisses.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinEmbed/de&oldid=1497113>"
