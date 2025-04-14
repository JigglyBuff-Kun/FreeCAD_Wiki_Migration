---
title: Part Versatz
---

:::caution
Diese Dokumentation ist noch nicht fertiggestellt. Bitte hilf mit und trage etwas zur Dokumentation bei.Die SeiteGuiBefehl Modellerklärt, wie Befehle dokumentiert werden sollten. UnterCategory:UnfinishedDocufindest du weitere unvollständige Seiten wie diese (und unterCategory:UnfinishedDocu/deunvollständige Übersetzungen). SieheCategory:Command Referencefür sämtliche Befehle (undCategory:UnfinishedDocu/defür vorhandene Übersetzungen).SieheWikiSeiten, um zu lernen, wie die Wiki-Seiten bearbeitet werden undFreeCAD Unterstützen, um andere Wege zu entdecken, wie du einen Beitrag leisten kannst.
:::

|                                                                                                               |
| ------------------------------------------------------------------------------------------------------------- |
| Part Versatz                                                                                                  |
| Menüeintrag                                                                                                   |
| Part → 3D-Versatz...                                                                                          |
| Arbeitsbereich                                                                                                |
| [Part](/Part_Workbench/de "Part Workbench/de")                                                                |
| Standardtastenkürzel                                                                                          |
| _Keiner_                                                                                                      |
| Eingeführt in Version                                                                                         |
| -                                                                                                             |
| Siehe auch                                                                                                    |
| [Part Dicke](/Part_Thickness/de "Part Thickness/de"), [Part 2D-Versatz](/Part_Offset2D/de "Part Offset2D/de") |
|                                                                                                               |

## Beschreibung

Das Werkzeug ![](/images/Part_Offset.svg) **Part Versatz** erstellt parallele Kopien einer ausgewählten Form in einem bestimmten Abstand von der Grundform, wodurch ein neues Objekt entsteht.

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

## Anwendung

1. Ein Objekt auswählen, von dem ein Versatz erstellt werden soll.
2. Die Schaltfläche ![](/images/Part_Offset.svg) [3D-Versatz](/Part_Offset "Part Offset") drücken.
3. Anpassen des Abstands und derParameter, die vom Originalobjekt abhängen sowie der Gültigkeit der resultierenden Objekte.

## Hinweise

- [App-Link](/App_Link/de "App Link/de")-Objekte, die auf geeignete Objektarten verweisen und [App-Part](/App_Part/de "App Part/de")-Container, die geeignete sichtbare Objekte enthalten, können auch als Quellobjekte verwendet werden. [eingeführt in 0.20](/Release_notes_0.20/de "Release notes 0.20/de")

## Beispiele

![](/images/PartOffset0.png) → ![](/images/PartOffset1.png)

Objekt mit kleinem Versatz und abgerundeten (Bogen-) Ecken.

![](/images/PartOffset3.png)

Dasselbe Objekt mit scharfen (Schnittpunkt-) Ecken.

![](/images/PartOffset2.png)

Dasselbe Objekt mit großem Versatz, der die vordere linke Lücke überfüllt, und aktivierter Schnitt-Option.

![](/images/PartOffset4.png)

Beliebige Form ([Draft Wire](/Draft_Wire/de "Draft Wire/de")) mit einem 3D-Versatz (ignoriert MODUS-Parameter)

![](/images/PartOffset5.png)

Dieselbe Form mit einem 3D-Versatz als SKIN und _gefülltem_ Versatz

![](/images/PartOffset6.png)

_gefüllter_ Versatz mit 2 Zylindern, die boolesche Ausschnitte (Differenz) erstellen. Zylinder A geht durch den FÜLL-Körper, während Zylinder B auch durch den FÜLL-Körper geht aber NICHT durch die 2D-Ausgangsform.

## Eigenschaften

- Daten-Eigenschaft**Offset**: Abstand zum Versetzen der Flächen der Form.
- Daten-Eigenschaft**Mode**: Modus der Erstellung. _Oberfläche_ erzeugt eine neue Form um die Ausgangsform herum. _Rohr_ (in Arbeit). _RectoVerso_ (in Arbeit).
- Daten-Eigenschaft**Join type**: Wie die neuen Ecken aufgebaut werden. _Schnitt_ ergibt scharfe Ecken durch lineare Verlängerung der Kanten. _Kreisbogen_ und _Tangente_ ergeben abgerundete Ecken.

1. Optionː Schnittː Erlaubt nach innen gerichtete Versätze, um die Lücke zu "überfließen", indem die resultierende Form so lange geschnitten wird, bis gegenüberliegende Flächen erreicht sind.
2. Optionː Selbstdurchdringungː ( todo )
3. Optionː Versatz füllenː Wenn die Form 2-dimensional war, wird die Lücke zwischen den beiden Formen gefüllt. Die Füllung ist jetzt ein Festkörper, während die Ausgangsform kein Festkörper ist. Dadurch können boolesche Operationen zu seltsamen Ergebnissen führen. (siehe Beispiel unten).

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Offset/de&oldid=1476848>"
