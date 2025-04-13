---
title: Std Importuj łącza
---
|  |
| --- |
| Std: Importuj łącza |
| Lokalizacja w menu |
| brak |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl"), [Utwórz łącze względne](/Std_LinkMakeRelative/pl "Std LinkMakeRelative/pl"), [Importuj wszystkie łącza](/Std_LinkImportAll/pl "Std LinkImportAll/pl") |
|  |

## Opis

Narzędzie ![](/images/Std_LinkImport.svg) **Importuj łącza** importuje właściwość DANE**Połączony obiekt** z Łącza do bieżącego dokumentu, a następnie zmienia powiązanie do tego obiektu.

Operacja ta jest pomocna podczas pracy ze [złożeniami](/Assembly/pl "Assembly/pl") w celu uporządkowania modeli wielokrotnie użytych, które mogą znajdować się w innych dokumentach.

Użyj narzędzia ![](/images/Std_LinkImportAll.svg) [Importuj wszystkie łącza](/Std_LinkImportAll/pl "Std LinkImportAll/pl"), aby zaimportować wszystkie połączone obiekty.

## Użycie

1. Upewnij się, że masz dokument "źródłowy" z oryginalnym obiektem, powiedzmy ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl") i drugi dokument "docelowy" z Łączem do tego obiektu.
2. Otwórz dokument docelowy i wybierz Łącze do obiektu; jego właściwość DANE**Powiązany obiekt** powinna pokazywać coś w rodzaju `source#Part`.
3. Naciśnij ![](/images/Std_LinkImport.svg) **Importuj łącza**.

Kopia oryginału ![](/images/Std_Part.svg) [Części](/Std_Part/pl "Std Part/pl") musi teraz znajdować się wewnątrz bieżącego dokumentu "docelowego". Właściwość DANE**Powiązany obiekt** Łącza musi teraz wskazywać `Część`, informując, że Łącze nie odnosi się już do obiektu `Części` w "źródle", ale do `Części` w bieżącym dokumencie *("docelowym")*.

![](/images/Std_Link_tree_import_1_example.png) ![](/images/Std_Link_tree_import_2_example.png)

Z lewej: Łącze wskazuje na obiekt w dokumencie "źródłowym". Z prawej: oryginalny obiekt został zaimportowany *(skopiowany)* do dokumentu "docelowego", a istniejące łącze zostało zmienione, aby wskazywało na tę kopię, więc nie wskazuje już na obiekt w dokumencie "źródłowym".
Naciśnij CTRL + ENTER", aby potwierdzić i przejść do następnej wiadomości, lub ALT + SHIFT + D, aby pominąć, lub ALT + SHIFT + B, aby podać opis zmian, lub przytrzymaj ALT, aby zobaczyć inne skróty.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkImport/pl&oldid=1271031>"