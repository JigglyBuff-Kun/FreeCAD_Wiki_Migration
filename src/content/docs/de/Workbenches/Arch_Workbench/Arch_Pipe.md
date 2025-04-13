---
title: Arch Rohr
---
:::caution
DIESER BEFEHL IST BESTANDTEIL DES INTEGRIERTEN ARBEITSBEREICHSBIMIN V1.0Diese Seite wurde für diese Version aktualisiert.
:::

|  |
| --- |
| Arch Rohr |
| Menüeintrag |
| 3D/BIM → Rohr |
| Arbeitsbereich |
| [BIM](/BIM_Workbench/de "BIM Workbench/de") |
| Standardtastenkürzel |
| P I |
| Eingeführt in Version |
| 0.17 |
| Siehe auch |
| *Keiner* |
|  |

## Beschreibung

Das Werkzeug **Arch Rohr** ermöglicht Rohre von Grund auf oder aus ausgewählten Objekten zu erstellen. Die ausgewählten Objekte müssen einen einzelnen offenen Linienzug enthalten.

## Anwendung

1. Wahlweise eine lineare [Part](/Part_Workbench/de "Part Workbench/de")-Form wie eine [Draft Linie](/Draft_Line/de "Draft Line/de"), einen [Draft Linienzug](/Draft_Wire/de "Draft Wire/de") oder eine offene [Skizze](/Sketcher_NewSketch/de "Sketcher NewSketch/de").
2. Es gibt mehrere Möglichkeiten, diesen Befehl aufzurufen:
   * Die Schaltfläche ![](/images/Arch_Pipe.svg) Rohr drücken.
   * Das Tastaturkürzel P dann I.
   * Den Menüeintrag **3D/BIM → Rohr** auswählen.

## Optionen

## Eigenschaften

Ein Arch-Rohr (Pipe-Objekt) besitzt die gemeinsamen Eigenschaften und Verhaltensweisen aller [Arch-Komponenten](/Arch_Component/de "Arch Component/de").

### Daten

Component

* Daten**Base** (`Link`): Der Basislinieenzug dieses Rohres, wenn vorhanden.

Für die anderen Eigenschaften in dieser Gruppe siehe [Arch Komponente](/Arch_Component/de#Eigenschaften "Arch Component/de").

Pipe

* Daten-Eigenschaft**Diameter** (`Length`): Der Durchmesser dieses Rohres, wenn seine Daten-Eigenschaft**Profile Type** `Circle` ist.
* Daten-Eigenschaft**Height** (`Length`): Die Höhe dieses Rohres, wenn seine Daten-Eigenschaft**Profile Type** `Rectangle` ist.
* Daten-Eigenschaft**Length** (`Length`): Die Länge dieses Rohres, wenn es nicht auf einem Liniezug basiert.
* Daten-Eigenschaft**Offset End** (`Length`): Der Abstand zum Endpunkt des Rohres. Wird automatisch gesetzt, wenn ein [Arch Rohrverbinder](/Arch_PipeConnector/de "Arch PipeConnector/de") an diesem Punkt hinzugefügt wird, um das Rohr an den Verbinder anzupassen. Siehe [Typischer Arbeitsablauf](#Typischer_Arbeitsablauf) weiter unten.
* Daten-Eigenschaft**Offset Start** (`Length`): Der Abstand zum Startpunkt des Rohres. Wie vorhergehend beschrieben.
* Daten-Eigenschaft**Profile** (`Link`): Das Basis-Profil dieses Rohres. Ist nichts vorgegeben, wird das Rohrprofil von der Daten-Eigenschaft**Profile Type** abgeleitet.
* Daten-Eigenschaft**Profile Type** (`Enumeration`): Das Profil dieses Rohres. Wird nur dann verwendet, wenn die Daten-Eigenschaft**Profile** leer ist. Die Optionen sind: `Circle` (Kreis), `Square` (Quadrat) oder `Rectangle` (Rechteck).
* Daten-Eigenschaft**Wall Thickness** (`Length`): Die Wandstärke dieses Rohres.
* Daten-Eigenschaft**Width** (`Length`): Die Breite dieses Rohres, wenn seine Daten-Eigenschaft**Profile Type** auf `Square` oder `Rectangle` gesetzt ist.

## Typischer Arbeitsablauf

* Beginne mit der Platzierung von Sanitär-/Hydraulikgeräten (unten ist eine importierte step datei). Du verwandelst diese Objekte in Arch Ausstattungen, indem du sie auswählst und die Schaltfläche [Arch Ausstattung](/Arch_Equipment/de "Arch Equipment/de") drückst.

![](/images/Arch_pipe_example_01.jpg)

* Arch Ausstattungen haben jetzt eine neue Eigenschaft **SnapPoints** (Einrastpunkte), bei der es sich um eine Liste von 3D-Vektoren handelt. Dies ermöglicht benutzerdefinierte Einrastpunkte hinzuzufügen, an denen eingerastet werden kann, wenn die neue Schaltfläche [Draft EinrastenSpezial](/Draft_Snap_Special/de "Draft Snap Special/de") aktiviert ist. Derzeit ist diese Eigenschaft allerdings nur für Python verfügbar. Im obigen Fall habe ich einen neuen Fangpunkt am Ausgang der WC-Anlage hinzugefügt. Die Vektoren innerhalb der FangPunkte erscheinen auf dem Modell als weiße Punkte:

```
FreeCAD.ActiveDocument.Equipment.SnapPoints=[FreeCAD.Vector(0,0,100)]

```

![](/images/Arch_pipe_example_02.jpg)

* Mit der neuen Draft-Einrastfunktion ["EinrastenSpezial"](/Draft_Snap_Special/de "Draft Snap Special/de") kann nun auf diese benutzerdefinierten Punkte eingerastet werden:

![](/images/Arch_pipe_example_03.jpg)

* Jetzt können wir unsere Rohrleitungen mit Hilfe von Draft-Linien, Draft-Linienzüge oder Skizzen zeichnen. Am besten ist es jedoch, wenn wir nur Draft-Linien verwenden:

![](/images/Arch_pipe_example_04.jpg)

* Das Werkzeug [Draft Neigung](/Draft_Slope/de "Draft Slope/de") ermöglicht die Neigung von Draft-Linien zu ändern, z.B. auf 5% (0,05). So können wir unseren Abflussrohren schnell eine korrekte Neigung geben. Nur die Z-Koordinaten werden durch dieses Werkzeug geändert, wir brauchen sie also nur wieder aneinander einzurasten, die Draufsicht bleibt unverändert.

![](/images/Arch_pipe_example_05.jpg)

* Jetzt müssen wir nur noch alle unsere Linien auswählen und die Schaltfläche Arch Rohr drücken. Arch Rohr funktioniert mit jedem Part-basierten Objekt, das einen und nur einen offenen Linienzug enthält.

![](/images/Arch_pipe_example_06.jpg)

* Wir können jetzt Verbindungen erstellen, indem wir 2 oder 3 deckungsgleiche Rohre auswählen und die Schaltfläche [Rohrverbinder](/Arch_PipeConnector/de "Arch PipeConnector/de") drücken. Wenn 3 Rohre ausgewählt werden, müssen zwei davon kollinear ausgerichtet sein, um ein T-Element zu erzeugen:

![](/images/Arch_pipe_example_07.jpg)

* Die Änderung des Verbinderradius ändert nicht die Länge der zugrunde liegenden Basislinie, sondern nur das resultierende Rohr (durch Änderung ihrer VersatzAnfang oder VersatzEnde Eigenschaft). Du kannst also weiterhin dein Linienlayout nur mit geraden Linien zeichnen, ohne sich um Kurven und Radius kümmern zu müssen.

Es ist auch möglich, Arch Rohre ohne Grundlinie zu erstellen. In diesem Fall verwende die Eigenschaft "Länge", um die Länge zu definieren.

## Skripten

*Siehe auch:* [Arch API](/Arch_API/de "Arch API/de") und [Grundlagen der Skripterstellung in FreeCAD](/FreeCAD_Scripting_Basics/de "FreeCAD Scripting Basics/de").

Das Werkzeug Rohr kann in [Makros](/Macros/de "Macros/de") und von der [Python](/Python/de "Python/de")-Konsole aus mit der folgenden Funktion verwendet werden:

```
pipe = makePipe(baseobj=None, diameter=0, length=0, placement=None, name="Pipe")

```

* Erstellt ein Rohrobjekt `pipe` aus dem gegebenen Basisobjekt `baseobj` und dem `diameter`.
  + `baseobj` ist eine [Draft-Linie](/Draft_Line/de "Draft Line/de") oder ein[Draf-Linienzug](/Draft_Wire/de "Draft Wire/de").
  + wird das Basisobjekt `baseobj` ausgelassen, kann ein gerades Rohr einfach aus dem Durchmesser `diameter` und der Länge `length` in Z-Richtung erstellt werden.
* Ist eine Positionierung `placement` angegeben, wird sie verwendet.

```
import Draft, Arch

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2500, 200, 0)
p3 = FreeCAD.Vector(3100, 1000, 0)
p4 = FreeCAD.Vector(3500, 500, 0)
line = Draft.make_wire([p1, p2, p3, p4])

pipe = Arch.makePipe(line, 200)
FreeCAD.ActiveDocument.recompute()

pipe2 = Arch.makePipe(diameter=120, length=3000)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Pipe/de&oldid=1542116>"