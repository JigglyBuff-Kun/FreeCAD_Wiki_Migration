---
title: Cables Leitungsprofil
---
|  |
| --- |
| Cables Leitungsprofil |
| Menüeintrag |
| Leitungen → Leitungsprofil erstellen |
| Arbeitsbereich |
| [Cables](/Cables_Workbench/de "Cables Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 1.0 |
| Siehe auch |
| [Cables Kabel](/Cables_Cable/de "Cables Cable/de") |
|  |

## Beschreibung

Der Befehl ![](/images/Cables_Profile.svg) Cable Leitungsprofil erstellt eine ![](/images/Sketcher_Sketch.svg) [Skizze](/Sketch/de "Sketch/de"), die den grundlegenden Querschnitt (Profil) einer Leitung darstellt. Der Leitungsquerschnitt ist vollständig parametrisch und wird durch Auswahl unterschiedlicher Leitungseigenschaften in einem Dialogfenster erstellt (siehe [Anwendung](#Anwendung)). Die Profilskizze enthält alle Informationen zum Leitungsquerschnitt, die zur Erstellung einer ![](/images/Cables_Cable.svg) [Leitung](/Cables_Cable/de "Cables Cable/de") (Cable-Objekt) benötigt werden.

Es gibt ein paar vordefinierte Leitungsprofil-Typen, bspw. YDYp (Flachleitung), YDY (Rundleitung). Zusätzlich können benutzerdefinierte Profiltypen (siehe [Benutzerdefinierte Leitungsprofile hinzufügen](#Adding_custom_profile_types/de)) definiert werden.

Es ist ebenso möglich, den gesamten Leitungsquerschntt manuell mit dem ![](/images/Sketcher_Sketch.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") zu zeichnen. Allerdings müssen einige Regeln beachtet werden, damit er erfolgreich als geeignetes Leitungsprofil verwendet werden kann (siehe [Manuelle Leitungsprofil-Erzeugung](#Manuelle_Leitungsprofil-Erzeugung)).

## Anwendung

1. Einen Leitungsquerschnitt (cable profile) mit einer der folgenden Methoden erstellen:
   * Die Schaltfläche ![](/images/Cables_Profile.svg) Cable Profile drücken.
   * Den Menüeintrag **Cables → ![](/images/Cables_Profile.svg) Cable Profile** auswählen.
   * Ein Rechtsklick in die [Baumansicht](/Tree_view/de "Tree view/de") oder die [3D-Ansicht](/3D_view/de "3D view/de") und die Menüoption **Cables → ![](/images/Cables_Profile.svg) Cable Profile** im Kontextmenü auswählen.
2. Das Aufgaben-Fenster **Add a new cable profile** wird geöffnet.
3. Wahlweise die Leitungsart unter **Profile type** auswählen.
4. Die **Number of wires** (Anzahl der Adern) auswählen.
5. Den Standard-Leiterquerschnitt in mm² in der Liste unter **Standard gauge [mm2]** auswählen oder auf **custom** belassen.
6. Wahlweise einen Wert für den benutzerdefinierten Leiterquerschnitt in mm² unter **Custom gauge [mm2]** eingeben, wenn in der vorherigen Option **custom** ausgewählt wurde.
7. Die Schaltfläche OK drücken.

Sobald die Profilskizze erstellt wurde, befindet sie sich im 3D-Raum an der Position [0,0,0]. Es weird empfohlen, sie nicht zu drehen oder zu verschieben. Sie kann später dazu verwendet werden, eine [Leitung](/Cables_Cable/de "Cables Cable/de") zu erstellen, ohne die Position des Leitungsquerschnitts zu verändern. Bei dem Erstellen einer Leitung, wird ein Paar Klone erstellt und beide Klone werden dem Leitungsverlauf entsprechend richtig positioniert und Ausgerichtet.

Eine Profilskizze kann für viele Leitungen benutzt werden. Es braucht keine weitere Profilskizze definiert zu werden, wenn eine weitere Leitung den gleichen Leitungsquerschnitt hat.

## Hinweise

Für einige **Profiltypen** muss die **Anzahl der Leiter** > 1 (bspw. YdYp) sein. Bei falscher Auswahl wird ein Fehler angezeigt und das Leitungsprofil wird nicht erstellt.

## Benutzerdefinierte Leitungsprofile hinzufügen

Eine zusätzliche CSV-Datei kann durch den Benutzer erstellt werden, die selbsterstellte Leitungsprofile (Umrisse) enthält. Sie muss profiles.csv heißen und hier gespeichert sein:

```
$FREECAD_USER_DIR/Cables/

```

Das Verzeichnis `$FREECAD_USER_DIR` kann über die [Python-Konsole](/Python_console/de "Python console/de") abgefragt werden:

```
FreeCAD.getUserAppDataDir()

```

Der Inhalt der benutzerdefinierten Datei `profiles.csv` muss nach den gleichen Regeln wie die Datei [profiles.csv](https://github.com/sargo-devel/Cables/blob/master/Resources/presets/profiles.csv) im Quellcode des **Arbeitsbereichs Cables** erstellt werden.

## Manuelle Leitungsprofil-Erzeugung

Leitungsquerschnitte können manuell im Arbeitsbereich ![](/images/Sketcher_Sketch.svg) [Sketcher](/Sketcher_Workbench/de "Sketcher Workbench/de") erstellt werden. Die richtige Abfolge beim Zeichnen der geschlossenen Umrisse muss eingehalten werden, damit das Werkzeug [Leitung](/Cables_Cable/de "Cables Cable/de") korrekte Leitungen erstellt.

1. Der zuerst gezeichnete Umriss entspricht der **cable jacket** (Ummantelung) (w0 im nachfolgenden Beispiel).
2. Die nachfolgende Reihe von geschlossenen Umrissen muss innerhalb des ersten Umrisses gezeichnet werden, dabei dürfen sich die Umrisse untereinander weder berühren noch überschneiden. Diese entsprechen den **insulations** (Isolationen) der einzelnen Adern (w1, w2, w3 im nachfolgenden Beispiel).
3. Die dann folgende Reihe von Umrissen sollte innerhalb der Isolationen gezeichnet werden, wobei jeder Isolationsumriss einen inneren Umriss erhalten muss. Diese entsprechen den **conductor wires** (Aderumrissen) (w4, w5, w6 im nachfolgenden Beispiel).
4. Abschließend sollte eine Reihe von Punkten in der Mitte der Aderumrisse positioniert werden (p1, p2, p3 im nachfolgenden Beispiel).

![](/images/Cables_Profile_Example1.png)

Beispiel eines dreieckigen Leitungsprofiles, erzeugt mit dem Arbeitsbereich Sketcher

![](/images/Cables_Profile_Example2.png)

Erzeugte Leitung aus einem dreieckigen Leitungsprofil

Retrieved from "<http://wiki.freecad.org/index.php?title=Cables_Profile/de&oldid=1557634>"