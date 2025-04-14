---
title: Mesh Schnittkonturen
---

|                                                                          |
| ------------------------------------------------------------------------ |
| Mesh Schnittkonturen                                                     |
| Menüeintrag                                                              |
| Netze → Schneiden → Schnitte...                                          |
| Arbeitsbereich                                                           |
| [Mesh](/Mesh_Workbench/de "Mesh Workbench/de")                           |
| Standardtastenkürzel                                                     |
| _Keiner_                                                                 |
| Eingeführt in Version                                                    |
| 0.19                                                                     |
| Siehe auch                                                               |
| [Mesh SchnittMitEbene](/Mesh_SectionByPlane/de "Mesh SectionByPlane/de") |
|                                                                          |

## Beschreibung

Der Befehl **Mesh Schnittkonturen** erstellt mehrere Schnittkonturen auf Netzobjekten. Die Schnittkonturen werden parallel zu einer der globale Hauptebenen (XY, XZ oder YZ) angelegt. Für jeden Satz von Schnittkonturen wird ein einzelnes [Part Formelement](/Part_Feature/de "Part Feature/de") erstellt.

## Anwendung

1. Ein oder mehrere Netzobjekte auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   - Die Schaltfläche ![](/images/Mesh_CrossSections.svg) Schnitte... drücken.
   - Den Menüeintrag **Vetze → Schneiden → ![](/images/Mesh_CrossSections.svg) Schnitte...** auswählen.
3. Der Aufgaben-Bereich **Schnitte** twird geöffnet.
4. Die Ebenen, die verwendet werden, um die Schnittkonturen zu erstellen, werden in der [3D-Ansicht](/3D_view/de "3D view/de") ausgewählt; sie werden entsprechend der Eingaben im Aufgaben-Bereich aktualisiert.
5. Die **Führungsebene** (Bezugsebene) auswählen:
   - **XY**
   - **XZ**
   - **YZ**
6. Die **Position** (Abstand) von der Bezugsebene festlegen. Der voreingestellte Abstand basiert auf dem Mittelpunkt des Begrenzungsrahmens des ausgewählten Netzobjekts. Die Auswahl einer anderen **Führungsebene** oder das Umschalten der Checkbox **Schnitte** setzt die **Positon** auf die Vorgabewerte zurück.
7. Wahlweise die Checkbox **Schnitte** aktivieren, um mehrere Schnittkonturen zu erstellen:
   - **Beidseitig**: Wenn aktiviert, werden Schnittkonturen auf beiden Seiten der Bezugsebene erstellt.
   - **Anzahl**: die Anzahl der Schnittkonturen.
   - **Entfernung**: Der Abstand zwischen den Schnittkonturen. Der Vorgabewert basiert auf den Abmaßen des Begrenzungsrahmens, der Option **Beidseitig** und dem Wert **Anzahl**. Das Ändern des Wertes **Anzahl** setzt den Wert **Entfernung** zurück auf diesen Vorgabewert. Das Ändern des Wertes **Beidseiteg** berechnet die **Entfernung** neu (`*2.0` oder `*0.5`). Achtung, das Eingabefeld kann ausgegraut sein, aber der Wert kann trotzdem angepasst werden.
   - Wahlweise Checkbox **Kanten verbinden, wenn die Distanz kleiner ist als** aktivieren und einen Wert festlegen.
8. Die Schaltfläche Anwenden drücken, um einen Satz Schnittkonturen zu erstellen.
9. Wahlweise eine oder mehrere Einstellungen anpassen und weitere Schnittkonturen zu erstellen.
10. Die Schaltfläche OK oder die Schaltfläche Abbrechen drücken, um den Aufgaben-Bereich zu schließen und den Befehl abzuschließen.

## Eigenschaften

Siehe [Part Formelement](/Part_Feature/de "Part Feature/de").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_CrossSections/de&oldid=1341725>"
