---
title: FEM CalculiX Freiträger 3D
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Tutorium                                                                    |
| Thema                                                                       |
| Finite-Elemente-Analyse                                                     |
| Niveau                                                                      |
| Beginner                                                                    |
| Zeit zum Abschluss                                                          |
| 10 minutes                                                                  |
| Autoren                                                                     |
| [Bernd](http://www.freecadweb.org/wiki/index.php?title=User:Berndhahnebach) |
| FreeCAD-Version                                                             |
| 0.16.6377 or above                                                          |
| Beispieldateien                                                             |
| _None_                                                                      |
| Siehe auch                                                                  |
| _None_                                                                      |
|                                                                             |

## Einleitung

Dieses Beispiel soll zeigen, wie eine einfache Finite Elemente Analyse (**FEA**) in FreeCAD's [Arbeitsbereich FEM](/FEM_Workbench/de "FEM Workbench/de") im FreeCAD Interface aussieht und wie die Ergebnisse visualisiert werden können. Es wird gezeigt, wie man eine FEA auslöst und wie man den Lastwert und die Lastrichtung ändert. Da die Beispieldatei mit jeder FreeCAD-Installation mitgeliefert wird, ist sie außerdem ein nützlicher und einfacher Test, um festzustellen, ob die FEM-Workbench richtig eingerichtet ist.

![](/images/FEM_example01_pic10.png)

## Voraussetzungen

- Eine kompatible Version von FreeCAD, die in der Übersicht des Tutorials angegeben ist.

  : Verwenden Sie den **Help → About FreeCAD**, um die installierte Version von FreeCAD zu sehen.

- Für das Laden der Beispieldatei, das Betrachten des Netzes und der Geometrie sowie für die Visualisierung der Ergebnisse wird keine externe Software benötigt.
- Für die Durchführung der FEA muss die Solver-Software CalculiX auf Ihrem Computer installiert sein. Wahrscheinlich ist der Solver bereits zusammen mit FreeCAD installiert worden. Falls der Solver CalculiX nicht installiert ist, siehe [FEM Installation](/FEM_Install/de "FEM Install/de").

## Beispieldatei vorbereiten

### Beispieldatei laden

- FreeCAD starten.
- Ist der Arbeitsbereich Start nicht aktiviert, sollte er geladen und die Startseite geöffnet werden.
- Das Beispiel "FemCalculixCantilever3D.FcStd" öffnen.

![](/images/FEM_example01_pic11.png)

### Analyse-Container aktivieren

- Um mit einer Analyse arbeiten zu können, muss diese aktiviert sein.
- In der [Baumansicht](/Tree_view/de "Tree view/de"), Doppelklick auf den ![](/images/FEM_Analysis.svg) Analyse,
- oder Rechtsklick auf das ![](/images/FEM_Analysis.svg) Analyse und wählen Sie Analyse aktivieren.

![](/images/FEM_example01_pic12.png)

### Der Analyse-Container und seine Objekte

- Wenn die Analyse aktiviert ist, wechselt FreeCAD selbst die aktuelle Workbench auf FEM.
- Es werden mindestens 5 Objekte benötigt, um eine statische mechanische Analyse durchzuführen.

* ![](/images/FEM_Analysis.svg) Analyse-Container

1. ![](/images/FEM_SolverCalculixCxxtools.svg) ein Solver
2. ![](/images/FEM_MaterialSolid.svg) ein Material
3. ![](/images/FEM_MaterialSolid.svg) eine feste Randbedingung
4. ![](/images/FEM_ConstraintForce.svg) eine Kraftbelastung
5. ![](/images/FEM_FEMMesh.svg) ein FEM-Netz

- In diesem Beispiel sind auch die Ergebnisse ![](/images/FEM_ResultShow.svg) bereits enthalten.

### Ergebnisse darstellen

1. Vergewissern Sie sich, dass die Analyse aktiviert ist.
2. Vergewissern Sie sich, dass die Analyse noch das Ergebnisobjekt enthält, wenn nicht, laden Sie einfach die Beispieldatei neu.
3. Doppelklicken Sie auf das Ergebnisobjekt ![](/images/FEM_ResultShow.svg), oder wählen Sie es aus und klicken Sie auf die ![](/images/FEM_ResultShow.svg) Schaltfläche [Ergebnis anzeigen](/FEM_ResultShow/de "FEM ResultShow/de") in der FEM-Symbolleiste.
4. Wählen Sie im Aufgabenfenster `z-Verschiebung`. Es zeigt `-86.93 mm` in negativer z-Richtung. Dies ist sinnvoll, da die Kraft auch in negativer z-Richtung wirkt.
5. Aktivieren Sie das Kontrollkästchen neben dem unteren Schieberegler der Verschiebungsanzeige.
6. Mit dem Schieberegler kann das Netz verändert werden, um die Verformung auf vereinfachte Weise zu betrachten.
7. Wählen Sie zwischen den verschiedenen Ergebnistypen, um alle in der GUI verfügbaren Ergebnistypen anzuzeigen.

![](/images/FEM_example01_pic13.png)

### Ergebnisse entfernen

1. Stellen Sie sicher, dass die Analyse aktiviert ist.
2. Um die Ergebnisse zu entfernen: Wählen Sie in der Symbolleiste die Schaltfläche ![](/images/FEM_ResultsPurge.svg) Schaltfläche [FEM-Netz löschen](/FEM_ResultsPurge/de "FEM ResultsPurge/de").

### Die FEA durchführen

- In der [Baumansicht](/Tree_view/de "Tree view/de") doppelklicken Sie auf das Solverobjekt ![](/images/FEM_SolverCalculixCxxtools.svg).
- Stellen Sie sicher, dass im [Aufgabenbereich](/Task_panel/de "Task panel/de") des Solverobjekts die statische Analyse ausgewählt ist.
- Klicken Sie auf Schreibe .inp Datei im gleichen Aufgabenfenster. Beobachten Sie das Log-Fenster, bis es "write completed" ausgibt.
- Klicken Sie auf Run CalculiX. Da dies eine sehr kleine Analyse ist, sollte die Ausführung weniger als eine Sekunde dauern.
- Im Textfenster sollte in grüner Schrift "CalculiX done without error!" und in der nächsten Zeile "loading result sets ..." stehen.
- Sie haben gerade Ihre erste FEA in FreeCAD beendet, wenn keine Fehlermeldung erscheint.
- Klicken Sie auf Schließen im Aufgabenfenster.
- Ein neues Ergebnisobjekt sollte erstellt werden. Sie wissen bereits, wie Sie die Ergebnisse visualisieren können.
- Wenn Sie beim Auslösen der Analyse eine Fehlermeldung no solver binary oder ähnliches erhalten, überprüfen Sie [FEM Installation](/FEM_Install/de "FEM Install/de").

![](/images/FEM_example01_pic14.png)

### FEA auf die schnelle Art durchführen

- Wählen Sie in der Baumansicht das Solverobjekt ![](/images/FEM_SolverCalculixCxxtools.svg) der Analyse ![](/images/FEM_Analysis.svg).
- Klicken Sie in der Icon-Symbolleiste auf ![](/images/FEM_SolverRun.svg) [Solver starten](/FEM_SolverRun/de "FEM SolverRun/de").
- Die Calculix-Eingabedatei wird geschrieben, CalculiX wird gestartet und das Ergebnisobjekt sollte erstellt werden.

### Lastrichtung und Lastwert ändern

- In der [Baumansicht](/Tree_view/de "Tree view/de") erweitern Sie ![](/images/FEM_ResultShow.svg) CCX_Results und wählen Sie das ![](/images/FEM_MeshResult.svg) ResultMesh-Objekt und drücken Sie die Space-Taste.
  - **Ergebnis:** Die Sichtbarkeit des FEM-Netzes wird ausgeschaltet. Das geometrische Modell ist weiterhin sichtbar.
- In der [Baumansicht](/Tree_view/de "Tree view/de") doppelklicken Sie auf das ![](/images/FEM_ConstraintForce.svg) FEMConstraintForce-Objekt, um dessen [Aufgabenbereich](/Task_panel/de "Task panel/de") zu öffnen.
- Im Aufgabenfenster ändern Sie den Lastwert auf **500000000 N = 500 MN** (**Hinweis:** Krafteinheit im Aufgabenfenster muss in N sein)
- Klicken Sie auf dem geometrischen Modell auf eine der langen Kanten in x-Richtung.
- Klicken Sie auf die Schaltfläche Richtung.
  - **Ergebnis:** Die roten Pfeile, die die Kraft darstellen, ändern ihre Richtung in x-Richtung. Sie zeigen die Richtung der Kraft an.
- Da auf die Box eine Zugkraft wirken soll, muss die Umkehrung der Richtung durch Anklicken ausgelöst werden.
- Die roten Pfeile der Kraft ändern ihre Richtung.
- Klicken Sie auf OK im Aufgabenfenster.

![](/images/FEM_example01_pic15.png)

- Sie wissen bereits, wie man eine Analyse auslöst und wie man die Ergebnisse visualisiert.
- Die Verformung in x-Richtung sollte 18,95 mm betragen.

![](/images/FEM_example01_pic16.png)

## Wie geht es weiter?

- Wir sind nun mit dem grundlegenden Arbeitsablauf für die [Arbeitsbereich FEM](/FEM_Workbench/de "FEM Workbench/de") fertig.
- Sie sind nun bereit, das zweite [FEM-Tutorial](/FEM_tutorial/de "FEM tutorial/de") zu bearbeiten.
- Wir werden den CalculiX-Kragarm selbst erzeugen und die Ergebnisse mit der Balkentheorie vergleichen.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX_Cantilever_3D/de&oldid=1481481>"
