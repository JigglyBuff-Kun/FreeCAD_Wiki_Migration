---
title: Std Usuń powiązanie
---
|  |
| --- |
| Std: Usuń powiązanie |
| Lokalizacja w menu |
| brak |
| Środowisko pracy |
| wszystkie |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.19 |
| Zobacz także |
| [Utwórz łącze](/Std_LinkMake/pl "Std LinkMake/pl"), [Utwórz łącze względne](/Std_LinkMakeRelative/pl "Std LinkMakeRelative/pl"), [Zastąp przez łącze](/Std_LinkReplace/pl "Std LinkReplace/pl") |
|  |

## Opis

![](/images/Std_LinkUnlink.svg) **Usuń powiązanie** jest zasadniczo operacją odwrotną do ![](/images/Std_LinkReplace.svg) [Zastąp przez łącze](/Std_LinkReplace/pl "Std LinkReplace/pl").

Ta operacja jest używana do usunięcia linku z kontenera, takiego jak ![](/images/Std_Part.svg) [Część](/Std_Part/pl "Std Part/pl"), a zamiast niego umieszcza właściwy obiekt.

## Użycie

1. Upewnij się, że masz Łącze, które znajduje się wewnątrz kontenera, na przykład Łącze do ![](/images/Part_Sphere.svg) [Sfery](/Part_Sphere/pl "Part Sphere/pl") wewnątrz ![](/images/Std_Part.svg) [Części](/Std_Part/pl "Std Part/pl").
2. Wybierz wewnętrzne Łącze w [widoku drzewa](/Tree_view/pl "Tree view/pl").
3. Naciśnij ![](/images/Std_LinkUnlink.svg) Usuń powiązanie.

Oryginalna ![](/images/Part_Sphere.svg) [sfera](/Part_Sphere/pl "Part Sphere/pl") musi teraz znajdować się wewnątrz ![](/images/Std_Part.svg) [Części](/Std_Part/pl "Std Part/pl"), a Łącze musi znajdować się na zewnątrz. Teraz to łącze można usunąć, jeśli nie jest już potrzebne, i nie spowoduje to uszkodzenia kontenera.

![](/images/Std_Link_tree_replace_fuse_2_example.png) ![](/images/Std_Link_tree_unlink_1_example.png)

Łącze wewnątrz innego obiektu jest odłączane, a zamiast niego umieszczany jest prawdziwy obiekt.

![](/images/Std_Link_tree_replace_part_2_examples.png) ![](/images/Std_Link_tree_unlink_2_example.png)

Łącze wewnątrz grupy jest odłączane, a zamiast niego umieszczany jest rzeczywisty obiekt.

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_LinkUnlink/pl&oldid=1454860>"