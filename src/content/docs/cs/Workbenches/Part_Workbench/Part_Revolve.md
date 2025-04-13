---
title: Díl Obtáčení
---
|  |
| --- |
| Díl Obtáčení |
| Umístění Menu |
| Díl -> Obtáčení |
| Pracovní stoly |
| [Díl](/Part_Workbench/cs "Part Workbench/cs"), Kompletace |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Description

Obtáčí vybraný objekt kolem zadané osy. Pro obtáčení jsou povoleny následující typy, výsledky obtáčení jsou uvedeny ve druhém sloupci:

| Vstupní tvar | Výstupní tvar |
| --- | --- |
| Vrchol | Hrana |
| Hrana | Plocha |
| Drát | Plášť |
| Plocha | Těleso |
| Plášť | Složené těleso |

Jako vstupní objekty nemohou být použity tělesa nebo složená tělesa. Nemohou být použity ani běžné složeniny. Budoucí verze budou kontrolovat zda vybraný objekt není složený objekt.

![](/images/Dialog-revolve.png)

Argument Úhel specifikuje o kolik stupňů má objekt být otočen. Souřadnice posunou počátek osy obtáčení relativně k počátku souřadnicového systému.

Jestli je vybrána uživetelsky definována osa, čísla definují směr obtáčecí osy vzhledem k souřadnicovému systému: Je-li souřadnice Z rovna 0 a souřadnice X a Y jsou nenulové, bude osa ležet v rovině XY. Úhel je takový, že jeho směrnice je poměr zadaných souřadnic X a Y.

## Notes

* [App Link](/App_Link "App Link") objects linked to the appropriate object types can also be used as shapes and to specify the axis. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* If the object to revolve intersects the rotation axis the operation will fail in most cases.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Revolve/cs&oldid=1206665>"