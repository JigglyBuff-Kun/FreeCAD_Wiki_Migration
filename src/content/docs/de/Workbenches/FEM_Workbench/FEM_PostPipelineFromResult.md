---
title: FEM NachbearbeitungPipelineVonErgebnis
---
|  |
| --- |
| FEM PostPipelineFromResult |
| Menüeintrag |
| Ergebnisse → Nachbearbeitungs-Pipeline aus Ergebnis |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [FEM ErgebnisAnzeigen](/FEM_ResultShow/de "FEM ResultShow/de"), [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

ResultPipeline ist ein Ergebnisobjekt, das eine neue grafische Darstellung von FEM-Analyse-Ergebnissen des analysierten Teils erstellt. Es fügt eine Farbskala und einige Darstellungsoptionen hinzu.

## Anwendung

1. Ein Ergebnisobjekt auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/FEM_PostPipelineFromResult.svg) Nachbearbeitungs-Pipeline aus Ergebnis drücken.
   * Den Menüeintrag **Ergebnisse → ![](/images/FEM_PostPipelineFromResult.svg) Nachbearbeitungs-Pipeline aus Ergebnis** auswählen.
3. Ein neues Objekt namens "Pipeline" wird zur Analyse hinzugefügt.
4. Ein Doppelklick auf das neue Pipeline-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") und einen Anzeigemodus sowie das Ergebnisfeld auswählen. Für den Modus `Oberfläche` und das Feld `Von Mises Spannung` sieht die Pipeline zum Beispiel so aus:

![](/images/Pipeline.PNG)

Wenn kein Modell im grafischen Bereich zusehen ist, aktiviere die Hintergrundbeleuchtung **FreeCad → Einstellungen → Anzeige → 3D-Ansicht → Rendern → Farbe der Hintergrundbeleuchtung**.

Wenn ein vom [SI](https://en.wikipedia.org/wiki/International_System_of_Units) abgeleitetes FreeCAD [Einheiten System](/Preferences_Editor#Units "Preferences Editor") verwendet wird, basieren auch die Werte der Ausgabeskala auf SI-Einheiten. Das bedeutet, dass die Verschiebung in Meter, die Spannung in Pascal und die Temperatur in Kelvin angegeben wird.

## Eigenschaften

### Dialog Fenster

Dieses Pipeline-Dialogfenster hat die folgenden Einstellungen:

* **Modus**: Darstellungsmöglichkeiten für das Ergebnisnetz
  + **Outline**: Ein Quader dessen Flächen auf den äußersten Punkten vom Netz liegt.
  + **Nodes**: Die Knoten vom Netz.
  + **Surface**: Dies ist die Standardeinstellung und zeigt die Oberfläche.
  + **Surface with Edges**: Wie **Sureface**, aber mit den Maschenumrisskanten und den Verbindungslinien der Oberflächenknoten.
  + **Wireframe**: Drahtgitter
  + **Wireframe (Nur Oberfläche)**: Das Drahtgitter nur von der Oberfläche.
  + **Nodes (Nur Oberfläche)**: Die Knoten vom Netz nur von der Oberfläche.
* **Feld**: Hier ist der darzustellende Wert zu wählen.
* **Vektor**: Ist nur aktiv, wenn das **Feld** ein Vektor ist. Wählbar ist der Vektor *Magnitude* oder einer seiner X-, Y- und Z-Komponenten.

### Farbscala

Duch Doppelklick auf die Skala öffnet dieses Einstellungsfenster:

![](/images/SIMTUT_05.PNG)

Diese Eigenschaften können geändert werden:

* **Farbmodell**: Es kann die umgekehrte Reihenfolge des Standardfarbverlaufs oder *Rot-Weiß-Blau*, *Schwarz-Weiß* und *Weiß-Schwarz* gewählt werden.
* **Stil**: Die Standardoption *Fließend* verwendet den gesamten Farbverlauf. Die Option *Null-basiert* verwendet nur den Farbvbereich, beginnend mit der Farbe, die den Mittelwert bis zum Maximum anzeigt.
* **Sichtbarkeit**: Die Option *Ausgegraut* färbt alle Netzknoten, deren Werte außerhalb des eingestellten Minimal-/Maximalbereichs liegen, grau. Die Option *Transparent* macht diese Maschenknoten transparent.
* **Parameterbereich**: Mindest- und Höchstwerte werden automatisch ausgefüllt, diese Werte können geändert werden. Es können auch die Anzahl der angezeigten Dezimalstellen und die Anzahl der über den Parameterbereich verteilten Beschriftungen eingestellt werden.

### Eigenschaftseditor

Therefore it allows to have e.g. two filters that take the pipeline as input, and a third filter that takes one of the two filters as input.
Im [Eigenschafteneditor](/Property_editor/de "Property editor/de") können auf der Registerkarte *Ansicht* die Einstellungen aus dem Dialogfenster vorgenommen werden. Auf der Registerkarte "Daten" können außerdem folgende eingestellt werden:

* Daten-Eigenschaft**Mode**: Legt fest, wie die in der Pipeline verwendeten Filter behandelt werden. Diese Modi sind möglich:
  + **Serial** (seriell): In diesem Modus nimmt jeder Filter den vorherigen Filter als Eingabe. Die Reihenfolge ist dabei die Reihenfolge der Erstellung. Der zuerst erstellte Filter nimmt die Pipeline als Eingabe. Seine Eigenschaft **Input** ist daher leer.
  + **Parallel**: In diesem Modus nehmen alle Filter die Pipeline als Eingabe.
  + **Custom**: Dies ist die Standardeinstellung und lässt die Eingaben der Filter so, wie sie sind. Dafür erlaubt sie, z.B. zwei Filter einzusetzen, die die Pipeline als Eingabe verwenden, und einen dritten Filter, der einen der beiden Filter als Eingabe verwendet.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostPipelineFromResult/de&oldid=1570668>"