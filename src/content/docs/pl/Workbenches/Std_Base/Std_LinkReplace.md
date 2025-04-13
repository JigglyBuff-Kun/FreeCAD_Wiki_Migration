---
title: Std Zastąp przez łącze
---
|  |
| --- |
| Std: Zastąp przez łącze |
| Lokalizacja w menu |
| brak |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl"), [Utwórz łącze względne](/Std_LinkMakeRelative/pl "Std LinkMakeRelative/pl"), [Usuń powiązanie](/Std_LinkUnlink/pl "Std LinkUnlink/pl") |
|  |

## Opis

Narzędzie ![](/images/Std_LinkReplace.svg) **Zastąp przez łącze** zastępuje obiekt znajdujący się wewnątrz innego na wersję [łącza](/App_Link/pl "App Link/pl") do tego pierwszego.

Operacja ta działa na "dzieciach" obiektu "rodzica", tak jak jest to widoczne w oknie [widoku drzewa](/Tree_view/pl "Tree view/pl"). Na przykład, biorąc pod uwagę dwa obiekty *(A i B)*, które uczestniczą w operacji ![](/images/Part_Boolean.svg) [logicznej](/Part_Boolean/pl "Part Boolean/pl"), powiedzmy <kod>C = A + B, obiekt A może zostać zastąpiony przez łącze, tak że `C = A_link + B`.

Operacja ta może być wykonana w celu zastąpienia zagnieżdżonych obiektów, które znajdują się w obiekcie [złożenia](/Assembly/pl "Assembly/pl") dla Łącza, co może być bardziej wydajne, jeśli ten zagnieżdżony obiekt jest używany wiele razy w różnych złożeniach. Operacją odwrotną jest ![](/images/Std_LinkUnlink.svg) [Usuń powiązanie](/Std_LinkUnlink/pl "Std LinkUnlink/pl"). Aby utworzyć ogólne łącze użyj funkcji ![](/images/Std_LinkMake.svg) [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl").

## Użycie

1. Upewnij się, że jeden obiekt znajduje się wewnątrz innego. Na przykład, rozważmy, że obiekt ![](/images/Part_Fuse.svg) [scalenia](/Part_Fuse/pl "Part Fuse/pl") został użyty z dwoma wcześniej utworzonymi obiektami, ![](/images/Part_Sphere.svg) [sfera](/Part_Sphere/pl "Part Sphere/pl") i ![](/images/Part_Cylinder.svg) [walec](/Part_Cylinder/pl "Part Cylinder/pl").
2. Wybierz ![](/images/Part_Sphere.svg) [sferę](/Part_Sphere "Part Sphere") w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Naciśnij ![](/images/Std_LinkReplace.svg) Zastąp przez łącze.

Oryginalna ![](/images/Part_Sphere.svg) [sfera](/Part_Sphere/pl "Part Sphere/pl") musi teraz znajdować się poza obiektem ![](/images/Part_Fuse.svg) [scalenia](/Part_Fuse/pl "Part Fuse/pl"), a wewnątrz musi znajdować się Łącze *(na ikonie wyświetlana jest mała strzałka)*.

![](/images/Std_Link_tree_replace_fuse_1_example.png) ![](/images/Std_Link_tree_replace_fuse_2_example.png)

Obiekt znajdujący się wewnątrz innego jest zastępowany przez Łącze. Łącze znajduje się teraz wewnątrz, a prawdziwy obiekt jest umieszczony na zewnątrz.

Można to również zrobić z obiektami zawartymi wewnątrz obiektu ![](/images/Std_Part.svg) [części](/Std_Part/pl "Std Part/pl") i ![](/images/Std_Group.svg) [grupy](/Std_Group/pl "Std Group/pl").

![](/images/Std_Link_tree_replace_part_1_examples.png) ![](/images/Std_Link_tree_replace_part_2_examples.png)

Obiekt wewnątrz kontenera jest zastępowany przez łącze. Łącze znajduje się teraz wewnątrz, a prawdziwy obiekt jest umieszczony na zewnątrz.

## Właściwości

Polecenie to tworzy nowy obiekt [App: Łącze](/App_Link/pl "App Link/pl"). Jego właściwości opisane są na stronie ![](/images/Std_LinkMake.svg) [Utwórz łącze](/Std_LinkMake/pl#Właściwości "Std LinkMake/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkReplace/pl&oldid=1454858>"