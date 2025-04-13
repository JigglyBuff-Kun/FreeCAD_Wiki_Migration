---
title: SheetMetal Abwickeln
---
:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|  |
| --- |
| SheetMetal Abwickeln |
| Menüeintrag |
| SheetMetal → Unfold |
| Arbeitsbereich |
| [Blech (SheetMetal)](/SheetMetal_Workbench/de "SheetMetal Workbench/de") |
| Standardtastenkürzel |
| U |
| Eingeführt in Version |
| - |
| Siehe auch |
| [SheetMetal UnattendedUnfold](/SheetMetal_UnattendedUnfold/de "SheetMetal UnattendedUnfold/de") |
|  |

## Beschreibung

Der Befehl ![](/images/SheetMetal_Unfold.svg) **Abwickeln** wickelt ein Blechobjekt ab.

## Anwendung

1. Eine ebene Fläche eines SheetMetal-Objekts auswählen.
2. Es gibt mehrere Möglichkeiten, den Befehl aufzurufen:
   * Die Schaltfläche ![](/images/SheetMetal_Unfold.svg) Unfold drücken.
   * Den Menüeintrag **Sheet Metal → ![](/images/SheetMetal_Unfold.svg) Abwickeln** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Sheet Metal → ![](/images/SheetMetal_Unfold.svg) Abwickeln** im Kontextmenü auswählen.
   * Das Tastaturkürzel: U.
3. Ein **Unfold**-Objekt wird erstellt und das [Aufgaben-Fenster](/Task_panel/de "Task panel/de") **Eigenschaften der Abwicklung** wird geöffnet.
   * Wahlweise die Schaltfläche Face drücken und eine andere ebene Fläche auswählen, um das Unfold-Objekt anders zu positionieren.
   * Wird kein **Material Definition Sheet** verwendet (siehe [Hinweise](#Hinweise)), werden die **Material Settings** eingestellt:
     1. Die Option **Material Definition Sheet** auf `Manual K-Factor` stellen.
     2. Den Wert für **Manueller K-Faktor** anpassen (siehe [Hinweise](#Hinweise)).
     3. Wahlweise die Radioknöpfe **ANSI** oder **DIN** umschalten (siehe [Hinweise](#Hinweise)).
   * Sind zum Exportieren 2D-Geometrien erforderlich, werden die Optionen unter **Unfold Sketch Generation** eingestellt:
     1. **Generate projection sketch** aktivieren.
     2. Ein **Unfold\_Sketch**-Objekt wird dem Unfold-Objekt hinzugefügt.
     3. Wahlweise die Farbe des Unfold\_Sketch-Objekts anpassen.
     4. Zum trennen der Biegelinien und der inneren Linien von den Umrisslinien:
        + **Separate projection layers** aktivieren.
        + Ein **Unfold\_Sketch\_Bends**-Objekt und ein **Unfold\_Sketch\_Internal**-Objekt werden dem Unfold-Objekt hinzugefügt.
        + Wahlweise die **Farbe der Biegelinien** und die **Farbe für interne Linien** anpassen.
     5. Wahlweise das Export-Dateiformat mit den Radioknöpfen **DXF** und **SVG** umschalten.
     6. Die Schaltfläche Export drücken, um das Dialogfenster **Export unfold sketch** zu öffnen und die Datei zu speichern.
   * Wahlweise den Wert **Unfold Transparency** (Transparenz des Abwicklungsobjekts) anpassen.
   * Sind automatische Aktualisierungen nicht erwünscht: **Manual update** aktivieren.
     + Die Schaltfläche Update drücken, die Änderungen anzuwenden, die im Aufgaben-Fenster eingestellt wurden.
4. Die Schaltfläche OK drücken, um den Befehl abzuschließen und das Aufgaben-Fenster zu schließen.
5. Wahlweise die Parameter im [Eigenschafteneditor](/Property_editor/de "Property editor/de") anpassen.

### Aufgaben-Fenster

Ein [Aufgaben-Fenster](/Task_panel/de "Task panel/de") wurde in Version 0.6.01 eingeführt.

Ein vorhandenes Unfold-Objekt in der [Baumansicht](/Tree_view/de "Tree view/de") doppelt anklicken, um das Aufgaben-Fenster erneut zu öffnen und die Parameter zu bearbeiten.

![](/images/SheetMetal_Unfold-Task.png)

* **Material Definition Sheet**: Schaltet die Eigenschaft **Material Sheet** um.
* **Manueller K-Factor**: Eingabe für die Eigenschaft **KFactor**.
* **Standard**: Radioknöpfe schalten die Eigenschaft **KFactor Standard** um.
* **Abwicklung als Skizze erstellen**: Schaltet die Eigenschaft **Generate Sketch** um und aktiviert:
  + Die oberste Farbauswahl für das **Unfold\_Sketch**-Objekt.
  + **Separate Skizzen erstellen**: Schaltet die Eigenschaft **Separate Sketch Layers** um und aktiviert:
    - Die Farbauswahl **Farbe der Biegelinien** für das **Unfold\_Sketch\_Bends**-Objekt.
    - Die Farbauswahl **Farbe für interne Linien** für das **Unfold\_Sketch\_Internal**-Objekt.
  + DieRadioknöpfe **DXF** und **SVG** : Schalten das Export-Dateiformat um.
  + Die Schaltfläche Export: Öffnet das Dialogfenster **Export unfold sketch** zum Speichern der Exportdatei.
* **Unfold Transparency**: Eingabe für die Ansicht-Eigenschaft **Transparency** des Unfold-Objekts.
* **Manual update**: Schaltet die Eigenschaft **Manual Recompute** um und aktiviert:
  + Die Schaltfläche Update: Ermöglicht das Aktualisieren des Unfold-Objekts und der dazugehörigen Skizze, während das Aufgaben-Fenster geöffnet ist object and the related Sketches while the task panel is open.

## Hinweise

* Siehe die Abschnitte [Material Definition Sheet](https://github.com/shaise/FreeCAD_SheetMetal#material-definition-sheet) und [K-factor](https://github.com/shaise/FreeCAD_SheetMetal#physical-material-definitions) der Projektseite für weitere Informationen.
* Eine Erklärung der Wertebereich von ISO- und ANSI-K-Faktoren siehe Tabelle auf [dieser](https://de.wikipedia.org/wiki/Biegeverkürzung#Korrektur_durch_den_sog._k-Faktor) Seite.
* Ein neues SheetMetal-Abwicklungswerkzeug wurde in Version 0.7.0 eingeführt. Es wurde auch eine Einstellung **Revert To Old Unfolder** hinzugefügt.

## Eigenschaften

Siehe auch: [Eigenschafteneditor](/Property_editor/de "Property editor/de").

Das SheetMetal-**Unfold**-Objekt, wird von einem [Part-Formelement](/Part_Feature/de "Part Feature/de") abgeleitet und erbt alle seine Eigenschaften. Es hat keine zusätzlichen Eigenschaften.

## Einschränkungen

* Die Blechobjekte sollten eine konstante Wandstärke haben.
* Ebene Flächen sollten keine Trennlinien (?) enthalten.
* Ebene Flächen sollten wirklich eben sein und keine B-Spline-Annäherungen.
* Die Flächen der Bögen müssen wirklich zylindrisch sein und ebenfalls keine B-Spline-Annäherungen.
* Versionen vor 0.5.00: Das Unfold-Objekt ist nicht parametrisch. Wird das Modell geändert, muss es erneut abgewickelt werden.

Retrieved from "<http://wiki.freecad.org/index.php?title=SheetMetal_Unfold/de&oldid=1545506>"