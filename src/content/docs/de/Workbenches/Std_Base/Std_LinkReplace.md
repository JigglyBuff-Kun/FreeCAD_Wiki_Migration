---
title: Std DurchVerknüpfungErsetzen
---

|                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std DurchVerknüpfungErsetzen                                                                                                                                                                                           |
| Menüeintrag                                                                                                                                                                                                            |
| None                                                                                                                                                                                                                   |
| Arbeitsbereich                                                                                                                                                                                                         |
| All                                                                                                                                                                                                                    |
| Standardtastenkürzel                                                                                                                                                                                                   |
| _Keiner_                                                                                                                                                                                                               |
| Eingeführt in Version                                                                                                                                                                                                  |
| 0.19                                                                                                                                                                                                                   |
| Siehe auch                                                                                                                                                                                                             |
| [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de"), [Std UnterverknüpfungErstellen](/Std_LinkMakeRelative/de "Std LinkMakeRelative/de"), [Std VerknüpfungAuflösen](/Std_LinkUnlink/de "Std LinkUnlink/de") |
|                                                                                                                                                                                                                        |

## Beschreibung

![](/images/Std_LinkReplace.svg) Std DurchVerknüpfungErsetzen ersetzt ein Objekt, das sich in einem anderen befindet, durch eine [Anwendung Verknüpfung](/App_Link/de "App Link/de")-Version von diesem Objekt.

Dies wirkt auf das "Kind"-Objekt eines "Eltern"-Objectes wie in der [Baumansicht](/Tree_view/de "Tree view/de") zu sehen. Sind beispielsweise zwei Objekte A und B gegeben, die Teil einer ![](/images/Part_Boolean.svg) [Part BoolescheOperation](/Part_Boolean/de "Part Boolean/de") sind, z.B. `C = A + B`, kann das Objekt A durch eine Verknüpfung ersetzt werden, so daß `C = A_link + B` wird.

Damit können in einer komplexen Baugruppe eingebettete Objekte durch eine Verknüpfung ersetzt werden. Das ist effizienter, als eingebettete Objekte mehrere Male in unterschiedlichen Unterbaugruppen zu verwenden. Die hierzu entgegengerichtete Funktion ist ![](/images/Std_LinkUnlink.svg) [Std VerknüpfungAuflösen](/Std_LinkUnlink/de "Std LinkUnlink/de"). Um eine allgemeine Verknüpfung zu erstellen, siehe ![](/images/Std_LinkMake.svg) [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de").

## Anwendung

1. Wir benötigen ein Ojekt, das sich in einem anderen befindet. Betrachten wir z.B. eine ![](/images/Part_Fuse.svg) [Part Vereinigung](/Part_Fuse/de "Part Fuse/de"), die sich in zwei zuvor erstellten Objekten befindet, z.B. einer ![](/images/Part_Sphere.svg) [Part Kugel](/Part_Sphere/de "Part Sphere/de") und einem ![](/images/Part_Cylinder.svg) [Part Zylinder](/Part_Cylinder/de "Part Cylinder/de").
2. Wähle ![](/images/Part_Sphere.svg) [Part Kugel](/Part_Sphere/de "Part Sphere/de") in der [Baumansicht](/Tree_view/de "Tree view/de").
3. Klicke auf die Schaltfläche ![](/images/Std_LinkReplace.svg) Std DurchVerknüpfungErsetzen.

Die Original-![](/images/Part_Sphere.svg) [Part Kugel](/Part_Sphere/de "Part Sphere/de") muß sich nun außerhalb von ![](/images/Part_Fuse.svg) [Part Vereinigung](/Part_Fuse/de "Part Fuse/de") und innerhalb eine Verknüpfung statt dessen befinden. Im Icon wird ein kleiner überlagernder Pfeil gezeigt.

![](/images/Std_Link_tree_replace_fuse_1_example.png) ![](/images/Std_Link_tree_replace_fuse_2_example.png)

Ein Objekt in einem anderen wird durch eine Verknüpfung ersetzt. Jetzt ist die Verknüpfung innen und das reale Objekt liegt außerhalb.

Dies ist auch bei Objekten, die ![](/images/Std_Part.svg) [Standard Teile](/Std_Part/de "Std Part/de") und ![](/images/Std_Group.svg) [Std Gruppe](/Std_Group/de "Std Group/de") enthalten möglich.

![](/images/Std_Link_tree_replace_part_1_examples.png) ![](/images/Std_Link_tree_replace_part_2_examples.png)

Ein Objekt in einem Behälter wird durch eine Verknüpfung ersetzt. Die Verknüpfung liegt nun innerhalb und das reale Objekt liegt außerhalb.

## Eigenschaften

Diese Anweisung erstellt eine neue [Anwendung Verknüpfung](/App_Link/de "App Link/de"). Seine Eigenschaften sind unter ![](/images/Std_LinkMake.svg) [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de") beschrieben.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkReplace/de&oldid=1453337>"
