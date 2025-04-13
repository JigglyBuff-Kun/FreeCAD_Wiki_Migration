---
title: FEM NachbereitungFilterSchnittebene
---
|  |
| --- |
| FEM NachbereitungFilterSchnittebene |
| Menüeintrag |
| Ergebnisse → Funktion Schnitt-Filter |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM NachbereitungFilterVonErgebnis](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de"), [FEM NachbereitungFunktionenErstellen](/FEM_PostCreateFunctions/de "FEM PostCreateFunctions/de"), [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Zeigt die Ergebnisse auf einer Fläche die entweder durch eine Kugel, eine Ebene, einen Zylinder oder Würfel erzeugt wird.

![](/images/FEM_Function-Cut-Filter-Example.png)

Ein Filter Schnittfunktion mit einer Kugel als Schnittfunktion.  
Die ursprüngliche Pipeline ist das halbtransparente Objekt.

## Anwendung

1. Eine zuvor erstellte [Ergebnis-Pipeline](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_PostFilterCutFunction.svg) Funktion Schnitt-Filter drücken.
   * Den Menüeintrag **Ergebnisse → ![](/images/FEM_PostFilterCutFunction.svg) Funktion Schnitt-Filter** auswählen.
3. Die **Anzeigeoptionen** wie bei der [Ergebnis-Pipeline](/FEM_PostPipelineFromResult/de "FEM PostPipelineFromResult/de") anpassen. Möglicherweise muss die Pipeline ausgeblendet werden, um die Wirkung des Filters in der Vorschau zu sehen.
4. Eine der folgenden Möglichkeiten ausführen:
   * Wenn noch keine [Filterfunktion](/FEM_PostCreateFunctions/de "FEM PostCreateFunctions/de") festgelegt ist, die Schaltfläche ![](/images/List-add.svg) Erstellen drücken und die Funktion **![](/images/FEM_PostCreateFunctionPlane.svg) Ebene** oder **![](/images/FEM_PostCreateFunctionSphere.svg) Kugel** auswählen.
   * Eine vorhandene Filterfunktion aus der Liste auswählen. Bei Bedarf die Schnittparameter anpassen, um sicherzustellen, dass sie das Modell schneidet. Man beachte, dass geänderte Schnittparameter auch die Parameter der verwendeten Filterfunktion ändern.
5. Die Ergebnisse werden auf der Oberfläche der Filterfunktion angezeigt.
6. Die Schaltfläche OK anklicken, um den Befehl zu beenden.

**Hinweis**: Ein **Feld** kann nur gesetzt werden, wenn eine Filterfunktion existiert und mit ![](/images/FEM_PostApplyChanges.svg) [Änderungen anwenden](/FEM_PostApplyChanges/de "FEM PostApplyChanges/de") bestätigt wurde. Alternativ kann der Filterdialog erneut geöffnet werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostFilterCutFunction/de&oldid=1570155>"