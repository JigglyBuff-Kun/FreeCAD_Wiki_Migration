---
title: Szkicownik Zwiększ liczebność węzłów
---
|  |
| --- |
| Szkicownik: Zwiększ liczebność węzłów |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika krzywej złożonej → Zwiększ liczebność węzłów |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| [Zmniejsz liczebność węzłów](/Sketcher_BSplineDecreaseKnotMultiplicity/pl "Sketcher BSplineDecreaseKnotMultiplicity/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) **Zwiększ liczebność węzłów** zwiększa krotność węzła [krzywej złożonej](/B-Splines/pl "B-Splines/pl").

## Użycie

1. Wybierz węzeł krzywej złożonej.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) **Zwiększ liczebność węzłów**.
   * Wybierz z menu **Szkic → Narzędzia szkicownika krzywej złożonej → ![](/images/Sketcher_BSplineIncreaseKnotMultiplicity.svg) Zwiększ liczebność węzłów**.

## Przykład

Krzywe złożone są w zasadzie kombinacją [krzywych Béziera](/B-Splines/pl#Krzywe_Béziera "B-Splines/pl") *(ładnie wyjaśnione w prezentacji wideo [pierwszej](https://www.youtube.com/watch?v=bE1MrrqBAl8) i [drugiej](https://www.youtube.com/watch?v=xXJylM2S72s))*. Punkty, w których dwa elementy Béziera są połączone, nazywane są węzłami. Węzeł o krotności *m* na krzywej złożonej o stopniu *d* oznacza, że krzywa po lewej i prawej stronie węzła ma co najmniej taką samą pochodną rzędu *n* *(tzw. ciągłość* Cn*)* gdzie „n = d - m”.

W tej sześciennej krzywej złożonej *(stopnia 3)* znajdują się 3 segmenty, co oznacza, że 3 krzywe są połączone w 2 węzłach. Węzły mają krotność 1.

Krotność jest wskazywana przez liczby w nawiasach okrągłych. Zobacz również stronę ![](/images/Sketcher_BSplineKnotMultiplicity.svg) [Pokaż / ukryj krotność węzłów krzywej złożonej](/Sketcher_BSplineKnotMultiplicity/pl "Sketcher BSplineKnotMultiplicity/pl").

![](/images/Sketcher_KnotMultiplicity_multiplicity1.png)

Krzywa złożona gdzie oba węzły mają krotność 1.

Krotność 3 zmieni tą krzywą tak, że nawet pochodne pierwszego rzędu nie będą równe *(*C0 *ciągłości). Oto ta sama krzywa złożona, w której krotność węzła po lewej stronie została zwiększona do 3:*

![](/images/Sketcher_KnotMultiplicity_multiplicity3.png)

Krzywa złożona z góry z krotnością węzłów 3. Punkt kontrolny został przesunięty, aby pokazać, że węzeł ma ciągłość *C0*.

Konsekwencją wyższej krotności jest to, że za cenę utraty ciągłości zyskuje się lokalną kontrolę. Oznacza to, że zmiana jednego punktu kontrolnego wpłynie na krzywą złożoną tylko lokalnie.

Można to zobaczyć na tym przykładzie, gdzie wykonano krzywą złożoną z krotnością węzłów 1 z pierwszego zdjęcia powyżej, a drugi punkt kontrolny od prawej został przesunięty w górę. W rezultacie cały kształt krzywej złożonej uległ zmianie:

![](/images/Sketcher_KnotMultiplicity_locality1.png)

Po zwiększeniu krotności węzłów do 2, przesunięcie drugiego punktu kontrolnego od prawej strony powoduje znaczące zmiany tylko po prawej stronie kształtu:

![](/images/Sketcher_KnotMultiplicity_locality2.png)

## Uwagi

* Mnogość węzłów można również zwiększyć za pomocą narzędzia [Wstaw węzeł krzywej złożonej](/Sketcher_BSplineInsertKnot/pl "Sketcher BSplineInsertKnot/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_BSplineIncreaseKnotMultiplicity/pl&oldid=1406221>"