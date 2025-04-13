---
title: Część Skaluj
---
|  |
| --- |
| Część: Skaluj |
| Lokalizacja w menu |
| Część → Skaluj ... |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [Klonuj](/Draft_Clone/pl "Draft Clone/pl"), [Skaluj](/Draft_Scale/pl "Draft Scale/pl") |
|  |

## Opis

Narzędzie **Skaluj** skaluje kształty o określony współczynnik we wszystkich kierunkach lub o różne współczynniki w każdym kierunku głównym. W przypadku różnych współczynników kształty mogą być zniekształcone.

![](/images/Part_Scale_demo.png)

Przykłady skalowania

## Użycie

1. Wybierz jeden lub więcej kształtów w oknie [widoku 3D](/3D_view/pl "3D view/pl") lub w oknie [Widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Polecenie można wywołać na kilka sposobów:
   * Naciśnij przycisk ![](/images/Part_Scale.svg) **Skaluj ...**.
   * Wybierz opcję z menu **Część → ![](/images/Part_Scale.svg) Skaluj ...**.
3. Otworzy się [panel zadań](#Panel_zadań).
4. Wybierz **Skalowanie ujednolicone** lub **Skalowanie niejednolite**.
5. Ustaw współczynnik skalowania.
6. Kliknij OK.

Alternatywnie, wyboru można dokonać po uruchomieniu narzędzia, wybierając jeden lub więcej kształtów z listy w [Panelu zadań](#Panel_zadań).

W widoku drzewa zostanie wyświetlonych tyle obiektów Skalowania, ile wybrano kształtów. Każdy kształt wejściowy jest umieszczony pod indywidualnym obiektem Skala.

## Panel zadań

![](/images/Part_Scale_dialog.png)

* Przycisk OK tworzy skalowany obiekt i zamyka panel zadań.
* Przycisk Zamknij zamyka panel zadań bez wykonywania żadnych działań.
* Przycisk Zastosuj tworzy skalowane obiekty, ale nie zamyka panelu zadań. Następnie można wybrać inny kształt z listy na dole i utworzyć więcej skalowanych obiektów.
* Lista **Kształt**: tutaj można wybrać kształty do skalowania. W przypadku wybrania wielu kształtów tworzonych jest wiele obiektów operacji skalowania.

## Uwagi

* Skalowanie nierównomierne zamieni wszystkie krawędzie w krzywe złożone, a wszystkie ściany w powierzchnie złożone. Są one cięższe obliczeniowo.
* Punkty/wierzchołki nie mogą być skalowane, ponieważ są bezwymiarowe.
* Obiekty [App: Łącznik](/App_Link/pl "App Link/pl") powiązane z odpowiednimi typami obiektów i kontenery [App: Część](/App_Part/pl "App Part/pl") z odpowiednimi widocznymi obiektami wewnątrz również mogą być skalowane.
* Panel zadań nie oferuje jeszcze podglądu. Kliknięcie Zastosuj utworzy skalowany obiekt za każdym razem, gdy go klikniesz, co może być przydatne jako podgląd. Obiekty jednak pozostaną, a kolejny przeskalowany obiekt zostanie utworzony po kliknięciu przycisku OK. [Cofnij](/Std_Undo/pl "Std Undo/pl") może być przydatne do wyczyszczenia ich przed kliknięciem OK.

## Właściwości

Zapoznaj się również z informacjami na stronie: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt Skalowania wywodzi się z obiektu [Część: Cecha](/Part_Feature/pl "Part Feature/pl") i dziedziczy wszystkie jego właściwości. Posiada on również następujące dodatkowe właściwości:

### Dane

Skala

* DANE**Baza** (`Link`): Kształt wejściowy *(kształt, do którego zastosowano Skalowanie części)*.
* DANE**Jednolity** (`Bool`): Kontroluje jednolite i niejednolite skalowanie
* DANE**Skala jednolita** (`Float`): Współczynnik skali dla jednolitego skalowania
* DANE**SkalaX** (`Float`): Współczynnik skali X dla skalowania nierównomiernego.
* DANE**SkalaY** (`Float`): Współczynnik skali Y, analogicznie.
* DANE**SkalaZ** (`Float`): Współczynnik skali Z, analogicznie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Scale/pl&oldid=1403279>"