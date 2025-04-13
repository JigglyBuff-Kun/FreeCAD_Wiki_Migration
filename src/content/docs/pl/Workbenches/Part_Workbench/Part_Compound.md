---
title: Część Utwórz kształt złożony
---
|  |
| --- |
| Część: Utwórz kształt złożony |
| Lokalizacja w menu |
| Część → Złożenie → Utwórz kształt złożony |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.14 |
| Zobacz także |
| [Suma](/Part_Fuse/pl "Part Fuse/pl"), [Filtr złożeń](/Part_CompoundFilter/pl "Part CompoundFilter/pl"), [Rozbij złożenie](/Part_ExplodeCompound/pl "Part ExplodeCompound/pl") |
|  |

## Opis

To polecenie tworzy złożenie obiektów o topologicznym kształcie, takich jak obiekty bryłowe oraz inne obiekty z powierzchniami i / lub krawędziami. Nie obsługuje siatek, ponieważ nie mają one kształtu topologicznego.

## Użycie

1. Zaznacz w [widoku drzewa](/Tree_view/pl "Tree view/pl") drzewa kształty topologiczne, które mają zostać dodane do złożenia,
2. Wybierz z menu **Część → Złożenie → Utwórz kształt złożony** lub kliknij na przycisk ![](/images/Part_Compound.svg)

## Uwagi

Złożenie zawierające elementy, które przecinają się lub dotykają, jest **nieprawidłowy** dla operacji logicznych. Ze względu na problemy z wydajnością, sprawdzanie czy elementy się przecinają nie jest wykonywane domyślnie. Automatyczne sprawdzanie geometrii *(dostępne dla operacji logicznych)* jest również wyłączone dla operacji złożenia części.

Aby uaktywnić tę kontrolę, przejdź do **Narzędzia → Edycja Parametrów → Preferences... → Mod → Part → CheckGeometry → RunBOPCheck** i ustaw parametr na `true`.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Compound/pl&oldid=1468401>"