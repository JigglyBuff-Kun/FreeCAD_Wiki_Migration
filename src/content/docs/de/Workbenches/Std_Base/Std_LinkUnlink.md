---
title: Std VerknüpfungAuflösen
---

|                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std VerknüpfungAuflösen                                                                                                                                                                                                       |
| Menüeintrag                                                                                                                                                                                                                   |
| None                                                                                                                                                                                                                          |
| Arbeitsbereich                                                                                                                                                                                                                |
| All                                                                                                                                                                                                                           |
| Standardtastenkürzel                                                                                                                                                                                                          |
| _Keiner_                                                                                                                                                                                                                      |
| Eingeführt in Version                                                                                                                                                                                                         |
| 0.19                                                                                                                                                                                                                          |
| Siehe auch                                                                                                                                                                                                                    |
| [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de"), [Std UnterverknüpfungErstellen](/Std_LinkMakeRelative/de "Std LinkMakeRelative/de"), [Std DurchVerknüpfungErsetzen](/Std_LinkReplace/de "Std LinkReplace/de") |
|                                                                                                                                                                                                                               |

## Beschreibung

![](/src/assets/images/Std_LinkUnlink.svg) Std VerknüpfungAuflösen ist im wesentlichen die Umkehrung der Funktion ![](/src/assets/images/Std_LinkReplace.svg) [Std DurchVerknüpfungErsetzen](/Std_LinkReplace/de "Std LinkReplace/de").

Diese Funktion entfernt eine Verknüpfung aus einem Behälter, wie etwa einem ![](/src/assets/images/Std_Part.svg) [Standard Teil](/Std_Part/de "Std Part/de") und fügt statt dessen das reale Objekt ein.

## Anwendung

1. Wir benötigen einen Behälter mit einer Verknüpfung zum Beispiel auf eine ![](/src/assets/images/Part_Sphere.svg) [Part Kugel](/Part_Sphere/de "Part Sphere/de") innerhalb eines ![](/src/assets/images/Std_Part.svg) [Standard Teil](/Std_Part/de "Std Part/de")s.
2. Wähle eine interne Verknüpfung in der [Baumansicht](/Tree_view/de "Tree view/de").
3. Klicke auf die Schaltfläche ![](/src/assets/images/Std_LinkUnlink.svg) Std VerknüpfungAuflösen.

Jetzt muß die Original-![](/src/assets/images/Part_Sphere.svg) [Part Kugel](/Part_Sphere/de "Part Sphere/de") im ![](/src/assets/images/Std_Part.svg) [Std Teil](/Std_Part/de "Std Part/de") sein und die Verknüpfung muß außerhalb liegen. Jetzt kann die Verknüpfung gelöscht werden, sofern sie nicht mehr benötigt wird, ohne den Behälter zu kaputt zu machen.

![](/src/assets/images/Std_Link_tree_replace_fuse_2_example.png) ![](/src/assets/images/Std_Link_tree_unlink_1_example.png)

Eine Verknüpfung innerhalt eines anderen Objektes wird gelöst und das reale Objekt wird anstatt dessen eingefügt.

![](/src/assets/images/Std_Link_tree_replace_part_2_examples.png) ![](/src/assets/images/Std_Link_tree_unlink_2_example.png)

Eine Verknüpfung in einer Gruppe wird gelöst und das reale Objekt wird anstatt dessen eingefügt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkUnlink/de&oldid=1453333>"
