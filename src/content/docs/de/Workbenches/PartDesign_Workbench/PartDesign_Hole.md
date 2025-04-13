---
title: PartDesign Bohrung
---
|  |
| --- |
| PartDesign Bohrung |
| Menüeintrag |
| Part Design → Objekte abziehen → Bohrung |
| Arbeitsbereich |
| [PartDesign](/PartDesign_Workbench/de "PartDesign Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| [PartDesign Tasche](/PartDesign_Pocket/de "PartDesign Pocket/de") |
|  |

## Beschreibung

Die Funktion **Bohrung** erstellt eine oder mehrere Bohrungen in den Mittelpunkten der Kreise und Bögen einer ausgewählten Skizze. Wenn Bögen vorhanden sind, müssen sie Bestandteil einer geschlossenen Kontur sein. Alle Bestandteile, die nicht Kreise oder Bögen sind, werden zwar ignoriert, müssen aber trotzdem zu einer geschlossenen Kontur gehören. Viele Parameter können eingestellt werden, wie z. B. Gewinde und Größe, Passung, Bohrungstyp (Kegelsenkung, Plansenkung, Durchgangsloch) und mehr.

Die Mittelpunkte der Kreise und Bögen werden verwendet, um die Bohrungen zu positionieren, es ist aber zu beachten, dass ihre Radien nicht berücksichtigt werden. Die erstellten Bohrungen werden identisch sein, auch wenn sich die Radien unterscheiden.

![](/images/Countersunk_and_counterbored_holes_cross-section1.png)

Bohrung mit Kegelgesenkung (links) und mit Flach-/Zylindersenkung (rechts) im Längsschnitt.

## Anwendung

1. Drücke die Schaltfläche ![](/images/PartDesign_Hole.svg) **Bohrung**.
2. Wird eine vorhandene unbenutzte Skizze gefunden, wird diese automatisch verwendet. Wenn mehr als eine Skizze gefunden wird, erscheint ein Fenster "Formelement auswählen", um eine Auswahl zu treffen. Alternativ kann eine Skizze ausgewählt werden, bevor der Befehl Bohrung ausgeführt wird.
3. Definiere die Bohrungsparameter, die im Abschnitt [Optionen](#Options/de) beschrieben sind.
4. Drücke OK.

## Optionen

![](/images/PartDesign_Hole_parameters.png)

Abhängig von den gewählten Optionen werden einige Felder aktiviert oder bleiben deaktiviert.

* **Profile**:

:   Wenn auf *Ohne* gesetzt, werden keine Gewindekennwerte festgelegt und der Durchmesser muss manuell eingestellt werden.
:   Wenn eine unterstützte Gewindenorm (siehe auch [Thread-Standards](https://en.wikipedia.org/wiki/List_of_thread_standards)) ausgewählt wurde, können der Durchmesser und andere Parameter automatisch eingesetzt werden.

* **Mit Gewinde versehen**: *Steht nur zur Verfügung, wenn Profile nicht auf Ohne gesetzt ist*

:   Wenn aktiviert, entspricht der eingestellte Durchmesser dem Kerndurchmesser zum Gewindesschneiden. (Siehe [Cutting-Tap](https://en.wikipedia.org/wiki/Tap_and_die))
:   Wenn nicht aktiviert, entspricht der Durchmesser dem *Spiel* (Clearance) für Durchgangsbohrungen.

* **Gewinde darstellen**: *Steht nur zur Verfügung, wenn Mit Gewinde versehen aktiviert ist*.

:   Wenn aktiviert, wird ein richtiges Gewinde geformt. Dies verbraucht viel Rechenleistung und wird für Modelle normalerweise nicht verwendet, außer zu Anschauungszwecken oder manchmal für 3D-Drucke. Wenn es verwendet wird, wird empfohlen, diese Funktion als eine der letzten zu aktivieren, weil sie die Rechenzeit für Neuberechnungen signifikant erhöht.

* **Richtung**: *Steht nur zur Verfügung, wenn Mit Gewinde versehen aktiviert ist*.

:   Legt die Gewinderichtung auf Rechtsgewinde oder Linksgewinde fest.

* **Größe**: *Steht nur zur Verfügung, wenn Mit Gewinde versehen aktiviert ist*.

:   Legt die Gewindegröße fest. Erfordert, dass *Profile* nicht *Ohne* ist.

* **Spiel**: *Steht nur zur Verfügung, wenn Mit Gewinde versehen nicht aktiviert ist*.

:   Bestimmt den Abstand zwischen Gewindespitze und Bohrungswand. Gibt sozusagen an, wie "eng" die Durchgangsbohrung für eine Schraube bzw. einen Bolzen ist.
:   Für ISO-Gewinde entsprechen die Durchmesser der Norm ISO 273.
:   Für UTS werden sie nach einer Faustregel berechnet, da es keine Norm gibt, die sie festlegt.

* **Klasse**: Legt die Toleranzklasse fest.
* **Durchmesser**: Legt den Bohrungsdurchmesser fest, wenn *Profile* auf *Ohne* gesetzt wurde.
* **Tiefe**: Tiefe der Bohrung ab der Skizzenebene.

:   *Sackloch*: Aktiviert ein Feld um einen Wert einzugeben.
:   *Durchgangsloch* (Durchmesser alles): Lässt die Bohrung durch den ganzen Körper verlaufen.
:   Um die Dateigröße klein zu halten, sollte *Durch alles* nicht verwendet werden, wenn **Mit Gewinde versehen** aktiviert ist, stattdessen sollte eine Mindesttiefe angegeben werden.

### Bohrloch

* **Art der Senkung**: Legt die Ausführung der Senkung fest: *Nichts* bedeutet ohne Senkung; andere Optionen sind verschiedene Schraubennormen und die generischen Typen *Flachsenkung*, *Kegelsenkung* und ([eingeführt in 0.21](/Release_notes_0.21/de "Release notes 0.21/de")) *Bohrsenkung*. Die Varianten ISO und DIN 7984 erscheinen, wenn für *Profil* ISO oder DIN ausgewählt wird.
* **Durchmesser**: Legt den oberen Durchmesser (an der Skizzenebene) für die Senkung fest.
* **Tiefe**: Die Festlegung der Tiefe ist abhängig von der Art der Senkung:
  + Für eine *Flachsenkung* ist es die Tiefe der Senkung, von der Skizzenebene aus gemessen.
  + Für eine *Kegelsenkung* ist es die Höhe eines Schraubenkopfes unterhalb der Skizzenebene.
  + Für eine *Bohrsenkung* ist es die Tiefe des zylindrischen Anteils der Senkung.
* **Winkel der Kegelsenkung**: Kegelwinkel der Senkung. Nur anwendbar für Kegelsenkungen, Bohrsenkungen sowie Senkungen nach ISO 2009, ISO 7046 und ISO 10642.

### Bohrungsgrund

* **Bohrerspitze**: definiert den Bohrungsgrund, wenn *Tiefe* auf *Abmessung* gesetzt ist.
  + **Flach** erstellt einen flachen Bohrungsgrund
  + **Konisch** erzeugt einen konischen Bohrungsgrund.

:   Seine Option **Für die Tiefe berücksichtigen** zieht die Kegelhöhe von der *Abmessung* ab. Wenn also z.B. *Abmessung* 7,00 ist und die Option nicht verwendet wird, ist der zylindrische Teil der Bohrung 7,00 und die Höhe des konischen Anteils kommt noch hinzu. Wenn die Option verwendet wird, beträgt die gesamte Bohrungstiefe einschließlich der konischen Spitze 7,00.

### Sonstiges

* **Kegelförmig**: Fügt einen Schrägungdwinkel zur Bohrung hinzu. Der Wert wird von der Normalen der Skizzenebene ausgehend berechnet.

:   90° ergibt ein zylindrisches Loch.
:   Unter 90° ergibt einen kleineren Durchmesser am Bohrungsgrund, größer am Bohrungsrand.
:   Über 90° ergibt einen größeren Durchmesser am Bohrungsgrund, kleiner am Bohrungsrand.

* **Umgekehrt**: Kehrt die Bohrungsrichtung um. Die Standardrichtung ist die Abbildungsrichtung der Bohrungsskizze zu ihrer Befestigung.

## Eigenschaften

Viele der Dateneigenschaften sind die gleichen wie unter [Optionen](#Optionen).

* Daten**Label**: Bezeichnung die dem Objekt gegeben wurde, diese kann nach Belieben geändert werden.
* Daten**Refine**: Wahr oder falsch. Wenn auf true gesetzt, wird der Volumenkörper von Restkanten befreit, die von Formelementen hinterlassen wurden. Siehe ![](/images/Part_RefineShape.svg) [Part FormAufbereiten](/Part_RefineShape/de "Part RefineShape/de") für weitere Details.

## Einschränkungen

* Standardmäßig wird die Funktion Bohrung unterhalb der Skizzenebene extrudieren. Wenn der Volumenkörper auf der XY-Ebene liegt und die Lochskizze mit der XY-Ebene verbunden ist, wird sie versuchen, vom Volumenkörper weg zu extrudieren und scheinbar kein Ergebnis erzielen. In diesem Fall muss die Option *Umgekehrt* gesetzt werden, alternativ kann die Skizze auf die Unterseite des Volumenkörpers gelegt werden.

## Schnitttyp Definitionen

Schnittarten (Schraubentypen) werden in [json](https://de.wikipedia.org/wiki/JavaScript_Object_Notation)-Dateien definiert. Es gibt einen Satz von Dateien, die mit FreeCAD ausgeliefert werden, aber Benutzer können ihre eigenen Definitionen erstellen. Die Dateien werden in `<UserAppDataDir>/PartDesign/Hole` gesucht. Das `UserAppDataDir` kann durch Eingabe von `App.getUserAppDataDir()` in der [Python-Konsole](/Python_console/de "Python console/de") gefunden werden.

Die Datei sollte enthalten:

* **name**: Der Name der Definition. Dieser muss eindeutig sein, da er als Bezeichner in der FreeCAD Benutzeroberfläche und als interner Index verwendet wird.
* **cut\_type**: Entweder `countersink` oder `counterbore`.
* **thread\_type**: Entweder `metric` oder `metricfine`.
* **angle**: Der Winkel einer Kegelsenkung (nicht notwendig bei Flachsenkungen).
* **data**: Eine Liste von Größen, bestehend aus:
  + **thread**: Name des Gewindes, das FreeCAD bekannt ist.
  + **diameter**: Der Durchmesser des Schnitts.
  + **depth**: Tiefe der Flachsenkung (nicht notwendig bei Kegelsenkungen).

Beispiel:

```
{
    "name": "DIN 7984",
    "cut_type": "counterbore",
    "thread_type": "metric",
    "data": [
        { "thread": "M2",   "diameter":  4.3, "depth":  1.6 },
        { "thread": "M2.5", "diameter":  5.0, "depth":  2.0 },
        …
    ]
}

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Hole/de&oldid=1561464>"