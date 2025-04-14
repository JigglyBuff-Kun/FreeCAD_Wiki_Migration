---
title: Part Ausformung
---

|                                                   |
| ------------------------------------------------- |
| Part Ausformung                                   |
| Menüeintrag                                       |
| Formteil → Ausformung...                          |
| Arbeitsbereich                                    |
| [Part](/Part_Workbench/de "Part Workbench/de")    |
| Standardtastenkürzel                              |
| _Keiner_                                          |
| Eingeführt in Version                             |
| 0.13                                              |
| Siehe auch                                        |
| [Part Austragung](/Part_Sweep/de "Part Sweep/de") |
|                                                   |

## Beschreibung

Der Befel ![](/images/Part_Loft.svg) [Part Loft](/Part_Loft "Part Loft") erstellt eine Fläche, ein Schalenobjekt oder eine Festkörper-Form aus zwei oder mehr Profilen (Querschnitten).

![](/images/Part_Loft_solid_ruled_from3profiles_example_FreeCAD_0_13.jpg)

Loft-Objekt über drei Profile, zwei [Part Kreisen](/Part_Circle "Part Circle") und einer [Part Ellipse](/Part_Ellipse/de "Part Ellipse/de"). Die Eigenschaften Solid und Ruled sind auf "True" gesetzt.

## Anwendung

1. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Part_Loft.svg) Ausformung... drücken.
   - Den Menüeintrag **Part → ![](/images/Part_Loft.svg) Ausformung...** auswählen.
2. Der [Aufgaben-Bereich](/Task_panel/de "Task panel/de") Ausformung (Loft) wird geöffnet.
3. In der linken Liste _Verfügbare Profiles_ das erste Profil auswählen und es dann mit dem Pfeil nach rechts in die rechte Liste _Ausgewählte Profile_ verschieben.
4. Den letzten Schritt wiederholen für das zweite Profil und nochmals für jedes weitere Profil, wenn mehr als zwei Profile verwendet werden sollen.
5. Wahlweise die Pfeile nach oben und nach unten drücken, um die Reihenfolge der Profile zu ändern.
6. Die Optionen [Festkörper](#Data), [Regelfläche](#Data) und [Geschlossen](#Data) festlegen.
7. OK drücken.

### Akzeptierte Geometrie

**Profile** können ein Punkt (Knoten), eine Linie (Kante), ein Kantenzug oder eine Fläche sein. Kanten und Kantenzüge können entweder offen oder geschlossen sein. Es gibt verschiedene [Einschränkungen](#Einschränkungen), siehe unten.

- [App-Link](/App_Link/de "App Link/de")-Objekte, die auf geeignete Objektarten verweisen und [App-Part](/App_Part/de "App Part/de")-Container, die geeignete sichtbare Objekte enthalten, können auch als Profile verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Optionen

#### Festkörper erstellen

Wenn "Festkörper erstellen" auf "wahr" gesetzt ist, erstellt FreeCAD einen Festkörper, vorausgesetzt, dass die Profile geschlossen sind; wenn auf "falsch" gesetzt, erzeugt FreeCAD stets eine Fläche oder eine Hülle, sowohl aus offenen als auch aus geschlossenen Profilen.

#### Regelfläche

Wenn "Regelfläche" auf "wahr" gesetzt ist, erstellt FreeCAD eine Fläche, eine Hülle oder einen Festkörper aus [Regelflächen.](https://de.wikipedia.org/wiki/Regelfl%C3%A4che)

#### Geschlossen

Wenn "Close" "true" ist, versucht FreeCAD, das letzte Profil mit dem ersten Profil zu verbinden, um eine geschlossene Figur zu erzeugen.

Weitere Informationen, wie Profile miteinander verbunden werden, befinden sich auf der Seite [Part Ausformung Technische Details](/Part_Loft_Technical_Details/de "Part Loft Technical Details/de").

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Ein Part-Loft-Objekt wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Außerdem hat es die folgenden zusätzlichen Eigenschaften:

### Daten

Loft

- Daten-Eigenschaft**Sections** (`LinkList`): Listet die verwendeten Querschnitte.
- Daten-Eigenschaft**Solid** (`Bool`): False (Standardwert). True bewirkt, dass ein Festkörper (Solid) erstellt wird.
- Daten-Eigenschaft**Ruled** (`Bool`): False (Standardwert). True bewirkt, dass eine Regelfläche erstellt wird.
- Daten-Eigenschaft**Closed** (`Bool`): False (Standardwert). True bewirkt, dass ein geschlossenes Loft-Objekt erstellt wird, durch Verbinden des letzten Profils mit dem ersten.
- Daten-Eigenschaft**Max Degree** (`IntegerConstraint`): Größtmöglicher Grad.

## Einschränkungen

Ein Part-Loft-Objekt hat dieselben Einschränkungen, wie ein [Part-Sweep-Objekt](/Part_Sweep/de#Einschränkungen "Part Sweep/de").

### Geschlossene Loft-Objekte

- Die Ergebnisse eines geschlossenen Loft-Objekts sind nicht immer wie erwartet, das Loft-Objekt kann Verdrehungen oder Knicke entwickeln. Das Austragen von Loft-Objekten reagiert sehr empfindlich auf die Positionierung der Profile und die Komplexität der Kurven, die erforderlich sind, um die zusammengehörigen Knoten in allen Profilen zu verbinden.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Loft/de&oldid=1438820>"
