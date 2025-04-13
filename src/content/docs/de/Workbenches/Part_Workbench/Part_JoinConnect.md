---
title: Part Verbinden
---

|                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Verbinden                                                                                                                                                                                                                            |
| Menüeintrag                                                                                                                                                                                                                               |
| Formteil → Verbinden → Objekte verbinden                                                                                                                                                                                                  |
| Arbeitsbereich                                                                                                                                                                                                                            |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                                                                                                                                            |
| Standardtastenkürzel                                                                                                                                                                                                                      |
| _Keiner_                                                                                                                                                                                                                                  |
| Eingeführt in Version                                                                                                                                                                                                                     |
| 0.16                                                                                                                                                                                                                                      |
| Siehe auch                                                                                                                                                                                                                                |
| [Part Einbetten](/Part_JoinEmbed/de "Part JoinEmbed/de"), [Part Ausschneiden](/Part_JoinCutout "Part JoinCutout"), [Part Boolesche Operationen](/Part_Boolean/de "Part Boolean/de"), [Part Dicke](/Part_Thickness/de "Part Thickness/de") |
|                                                                                                                                                                                                                                           |

## Beschreibung

Das Werkzeug ![](/src/assets/images/Part_JoinConnect.svg) **Part Verbinden** verbindet die Innenbereiche von zwei Hohlkörpern (z.B. Rohre). Es kann auch Schalenobjekte und Drähte verbinden.

![](/src/assets/images/JoinFeatures_Connect.png)

## Anwendung

1. Die zu verbindenden Objekte auswählen. Die Reihenfolge der Auswahl ist nicht wichtig, da die Wirkung des Werkzeugs symmetrisch ist. Es genügt, von jedem Objekt eine Teilform (z.B. Flächen) auszuwählen. Es kann auch ein Verbund ausgewählt werden, der alle zu verbindenden Formen enthält, z.B. eine [Draft RechtwinkligeAnordnung](/Draft_OrthoArray/de "Draft OrthoArray/de").
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/src/assets/images/Part_JoinConnect.svg) Objekte verbinden drücken.
   - Den Menüeintrag **Part → Verbinden → ![](/src/assets/images/Part_JoinConnect.svg) Objekte verbinden** auswählen.
3. Ein parametrisches Connect-Objekt wird erstellt. Die originalen Objekte werden ausgeblendet und das Ergebnis des Verbindens wird in der [3D-Ansicht](/3D_view/de "3D view/de") angezeigt.

## Eigenschaften

Connect

- Daten-Eigenschaft**Objects**: Liste der zu verbindenden Objekte. Im Allgemeinen werden mindestens zwei Objekte benötigt, aber ein einziger Verbund, der die zu verbindenden Formen enthält, reicht ebenfalls aus. (seit FreeCAD v0.17.8053 wird diese Eigenschaft nicht mehr im [Eigenschafteneditor](/Property_editor/de "Property editor/de") angezeigt und kann nur über [Python](#Skripten) aufgerufen werden).
- Daten-Eigenschaft**Refine**: Legt fest, ob die Operation [FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") auf die endgültige Form angewendet werden soll oder nicht. Der Standardwert wird durch ein Kontrollkästchen 'Form nach boolescher Operation automatisch aufbereiten' in den [PartDesign Einstellungen](/index.php?title=PartDesign_Preferences/&action=edit&redlink=1 "PartDesign Preferences/ (page does not exist)") bestimmt.
- Daten-Eigenschaft**Tolerance**: "Unschärfe" Wert. Dies ist eine zusätzliche Toleranz, die bei der Suche nach Schnittmengen zusätzlich zu den in den Eingangsformen gespeicherten Toleranzen anzuwenden ist.

## Beispiel

1. Erstelle ein Rohr, indem Du [Dicke](/Part_Thickness/de "Part Thickness/de") auf einen [Zylinder](/Part_Cylinder/de "Part Cylinder/de") anwendest:  
   ![](/src/assets/images/JoinFeatures_Example_step1.png)
2. Erstelle ein weiteres Rohr mit kleinerem Durchmesser und platziere es so, dass es die Wand des ersten Rohres durchdringt:  
   ![](/src/assets/images/JoinFeatures_Example_step2.png)
3. Wähle das erste Rohr und das zweite Rohr aus und klicke auf die Option "Objekte verbinden" in der Symbolleiste der Verbindungswerkzeuge.  
   ![](/src/assets/images/JoinFeatures_Example_step3_Connect.png)
4. Verwende ein Querschnittswerkzeug ([Ausschnittebene](/Std_ToggleClipPlane/de "Std ToggleClipPlane/de"), [Arch Abschnittebene](/Arch_SectionPlane/de "Arch SectionPlane/de"), [Arch Schneideebene](/Arch_CutPlane/de "Arch CutPlane/de")), um Einbauten freizulegen. Auf dem Bild unten wird die Bogenschnittebene verwendet.  
   ![](/src/assets/images/JoinFeatures_Example_step4_Connect.png)

## Algorithmus

Die Algorithmen hinter den Fügewerkzeugen sind recht einfach, und es ist wichtig, sie zu verstehen, um die Werkzeuge richtig zu verwenden. Insbesondere der Algorithmus von Verbinden ist etwas komplexer als andere, aber es genügt im Allgemeinen, ihn als symmetrische Variante des Einbetten-[Algorithmus](/Part_JoinEmbed/de#Algorithms "Part JoinEmbed/de") zu betrachten.

1. Jedes Objekt wird durch Überschneidungen mit anderen Objekten in Stücke zerlegt. (siehe [Part BoolescheFragmente](/Part_BooleanFragments/de "Part BooleanFragments/de"))

2. Von den Teilen eines Objekts wird nur das größte beibehalten; alle anderen werden entfernt.

3. Überschneidungselemente, die mindestens zwei Objekte berühren, werden dem Ergebnis hinzugefügt. Anschließend werden die Teile miteinander verbunden, um das Ergebnis von Verbinden zu bilden.

### Hinweise

- Wenn bei Schritt 1 jedes Objekt in einem Stück verbleibt, entspricht das Ergebnis von Verbinden dem von [Vereinigen](/Part_Union/de "Part Union/de") von Objekten.
- Jetzt werden alle gelieferten Verbindungen vor dem Anschluss zerlegt. Das bedeutet, dass selbstverschneidende Verbindungen, die für alle anderen booleschen Operationen ungültig sind, für Verbinden gültig sind. (Dies kann in Zukunft geändert werden.)
- Das "größte" Stück ist dasjenige mit der größten Masse. Das heißt, für Festkörper werden Volumen verglichen; für Hüllen und Flächen werden Flächen verglichen, usw.
- Seit FreeCAD v0.17.8053 und wenn die OCC-Version 6.9.0 und höher ist, ist Verbinden fast so schnell wie alle anderen booleschen Operationen. Bei älteren Versionen ist Verbinden etwa 5 mal langsamer als ein normaler boolescher Vorgang und funktioniert nur bei Festkörpern.

## Skripten

Die Fügewerkzeuge können in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit folgender Funktion verwendet werden:

```
BOPTools.JoinFeatures.makeConnect(name)

```

- Erstellt eine leere Verbindungsfunktion. Die Eigenschaft 'Objekte' muss anschließend explizit zugewiesen werden.
- Liefert das neu erstellte Objekt.

Verbinden kann auch auf einfache Formen angewendet werden, ohne dass ein Dokumentenobjekt benötigt wird:

```
Part.BOPTools.JoinAPI.connect(list_of_shapes, tolerance = 0.0)

```

Dies kann nützlich sein, um benutzerdefinierte Python Skriptfunktionen zu erstellen.

Beispiel:

```
import Part
j = Part.BOPTools.JoinFeatures.makeConnect(name= 'Connect')
j.Objects = FreeCADGui.Selection.getSelection()

```

Das Werkzeug selbst ist in Python implementiert, siehe /Mod/Part/BOPTools/JoinFeatures.py ([GitHub link](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Part/BOPTools/JoinFeatures.py)) innerhalb des FreeCAD-Installationsverzeichnisses.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_JoinConnect/de&oldid=1497077>"
