---
title: Std VerknüpfungImportieren
---

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Std VerknüpfungImportieren                                                                                                                                                                                                            |
| Menüeintrag                                                                                                                                                                                                                           |
| None                                                                                                                                                                                                                                  |
| Arbeitsbereich                                                                                                                                                                                                                        |
| All                                                                                                                                                                                                                                   |
| Standardtastenkürzel                                                                                                                                                                                                                  |
| _Keiner_                                                                                                                                                                                                                              |
| Eingeführt in Version                                                                                                                                                                                                                 |
| 0.19                                                                                                                                                                                                                                  |
| Siehe auch                                                                                                                                                                                                                            |
| [Std VerknüpfungErstellen](/Std_LinkMake/de "Std LinkMake/de"), [Std UnterverknüpfungErstellen](/Std_LinkMakeRelative/de "Std LinkMakeRelative/de"), [Std AlleVerknüpfungenImportieren](/Std_LinkImportAll/de "Std LinkImportAll/de") |
|                                                                                                                                                                                                                                       |

## Beschreibung

Mit der Schaltfläche ![](/src/assets/images/Std_LinkImport.svg) Std VerknüpfungImportieren wird ein Daten**Linked Object** aus einer Verknüpfung in das aktuelle Dokument importiert und der Anhang zu diesem Objekt geändert.

Das hilft beim Arbeiten mit Baugruppen ([Zusammenbau](/Assembly/de "Assembly/de")) um Modelle aus anderen Dokumenten wieder zu verwenden.

![](/src/assets/images/Std_LinkImportAll.svg) [Std AlleVerknüpfungenImportieren](/Std_LinkImportAll/de "Std LinkImportAll/de") wird verwendet, um alle verknüpften Objekte zu importieren.

## Anwendung

1. Stelle sicher Du hast ein "Quell"-Dokument mit einem Original-Objekt, sagen wir ein ![](/src/assets/images/Std_Part.svg) [Std Teil](/Std_Part/de "Std Part/de"), und ein zweites "Ziel"-Dokument mit einer Verknüpfung zu dem Objekt.
2. Öffne das Ziel-Dokument und wähle die Verknüpfung zum Objekt; seine Daten**Linked Object** sollte nun etwas wie `source#Part` zeigen.
3. Drücke ![](/src/assets/images/Std_LinkImport.svg) Verknüpfung Importieren.

Eine Kopie des Original- ![](/src/assets/images/Std_Part.svg) [Std Teil](/Std_Part/de "Std Part/de") muss nun innerhalb des aktuellen "Ziel"-Dokuments sein. Die Eigenschaft Daten**Linked Object** der Verknüpfung muss nun `Teil` zeigen, zeigt damit an, dass die Verknüpfung nicht länger auf die "Quelle" in `Teil`, sondern auf das ("Ziel") `Teil` im aktuellen Dokument zeigt.

![](/src/assets/images/Std_Link_tree_import_1_example.png) ![](/src/assets/images/Std_Link_tree_import_2_example.png)

Links: Eine Verknüpfung zeigt auf das Objekt im "Quell"-Dokument. Rechts: das Original-Objekt wurde in das "Ziel"-Dokument importiert (kopiert), und die bestehende Verknüpfung wurde geändert, um auf diese Kopie zu verweisen, so dass sie nicht weiterhin auf das Objekt in der "Quelle" verweist.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImport/de&oldid=1550667>"
