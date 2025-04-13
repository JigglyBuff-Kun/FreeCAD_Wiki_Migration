---
title: MES Prezentacja graficzna wyników
---

|                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- |
| MES: Prezentacja graficzna wyników                                                                         |
| Lokalizacja w menu                                                                                         |
| Wyniku → Prezentacja graficzna wyników                                                                     |
| Środowisko pracy                                                                                           |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                |
| Domyślny skrót                                                                                             |
| _brak_                                                                                                     |
| Wprowadzono w wersji                                                                                       |
| 0.17                                                                                                       |
| Zobacz także                                                                                               |
| [Pokaż wyniki](/FEM_ResultShow/pl "FEM ResultShow/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                            |

## Opis

Obiekt prezentacji graficznej wyników tworzy nową graficzną reprezentację wyników analizy MES na badanej części. Dodaje skalę kolorów i opcje wyświetlania.

## Użycie

1. Zaznacz obiekt wyników.
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_PostPipelineFromResult.svg) Prezentacja graficzna wyników.
   - Wybierz opcję **Wyniki → ![](/images/FEM_PostPipelineFromResult.svg) Prezentacja graficzna wyników** z menu.
3. Nowy obiekt nazwany "Pipeline" zostanie dodany do analizy.
4. Dwukrotnie kliknij nowy obiekt Pipeline w [widoku drzewa](/Tree_view/pl "Tree view/pl") i wybierz tryb wyświetlania oraz pole wyników. Przykładowo, dla trybu `Powierzchnia` i pola `Naprężenia von Mises` obiekt prezentacji graficznej wyników wygląda następująco:

![](/images/Pipeline.PNG)

Jeśli nie widzisz modelu w obszarze graficznym, użyj **Edycja → Preferencje → Wyświetlanie → Widok 3D → Renderowanie → Kolor podświetlenia**.

Jeśli korzystasz z pochodzącego od [układu SI](https://pl.wikipedia.org/wiki/Uk%C5%82ad_SI) [systemu jednostek](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl"), wartości na skali będą również oparte o jednostki SI. To oznacza, że przemieszczenia są w metrach, naprężenia w Paskalach a temperatura w Kelvinach.

## Właściwości

### Okno dialogowe

Okno dialogowe obiektu prezentacji graficznej wyników ma następujące ustawienia:

- **Tryb**: Jak wyświetlać wyniki. Możliwe tryby to
  - **Kontur**: Kontur siatki wynikowej. Nie wyświetla wyników tylko brzegi siatki.
  - **Węzły**: Węzły siatki wynikowej.
  - **Powierzchnia**: To domyślny tryb, wyświetla powierzchnię siatki wynikowej.
  - **Powierzchnia z krawędziami**: Jak **Powierzchnia**, ale z krawędziami elementów siatki.
- **Pole**: Który wynik wyświetlać.
- **Wektor**: Aktywne tylko jeśli **Pole** jest wektorem. Możesz wybrać czy wyświetlać _Wartość_ (wypadkową) wektora czy jego składowe X, Y, Z.

### Skala

Jeśli dwukrotnie klikniesz na skali, zobaczysz to okno dialogoweː

![](/images/SIMTUT_05.PNG)

i będziesz mógł zmodyfikować następujące ustawienia:

- **Gradient**: Możesz wybrać odwróconą kolejność domyślnego graidentu kolorów, wariant _Red-White-Blue_, _Black-White_ lub _White-Black_.
- **Styl**: Domyślna opcja _Przepływ_ używa pełnego zakresu gradientu kolorów. Opcja _Zero_ używa tylko zakresu gradientu kolorów zaczynającego się od koloru, który wyświetlałby średnią wartość do maksimum.
- **Widoczność**: Opcja _Deaktywuj_ pokoloruje wszystkie węzły siatki, których wartości są poza podanym zakresem min/max na szaro. Opcja _Na zewnątrz przezroczysty_ sprawi, że te węzły będą przezroczyste.
- **Zakres parametru**: Wartości minimalne i maksymalne są wypełniane automatycznie. Możesz je zmodyfikować, ale upewnij się, że wiesz co robisz. Możesz również zmienić liczbę wyświetlanych miejsc dziesiętnych i liczbę etykiet rozłożonych w zakresie parametrów legendy.

### Edytor właściwości

W [edytorze właściwości](/Property_editor/pl "Property editor/pl") możesz zmienić w zakładce _Widok_ ustawienia z okna dialogowego. W zakładce _Dane_ możesz dodatkowo ustawić:

- DANE**Mode**: Jak filtry używane na obiekcie prezentacji graficznej wyników będą traktowane. Możliwe tryby to:
  - **Serial**: W tym trybie każdy filtr bierze poprzedni filtr jako wejście. Kolejność jest więc kolejnością tworzenia filtrów. Pierwszy utworzony filtr bierze obiekt prezentacji graficznej wyników jako wejście. Jego właściwość **Input** jest więc pusta.
  - **Parallel**: W tym trybie wszystkie filtry biorą obiekt prezentacji graficznej wyników jako wejście.
  - **Custom**: To jest domyślne ustawienie. Zachowuje wejście filtrów takie, jakie jest. Zatem pozwala mieć np. dwa filtry, które biorą obiekt prezentacji graficznej wyników jako wejście i trzeci, który bierze jeden z dwóch pozostałych filtrów jako wejście.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_PostPipelineFromResult/pl&oldid=1569485>"
