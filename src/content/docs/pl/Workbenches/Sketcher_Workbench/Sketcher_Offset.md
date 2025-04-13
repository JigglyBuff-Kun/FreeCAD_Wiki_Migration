---
title: Szkicownik Geometria odsunięcia
---

|                                                              |
| ------------------------------------------------------------ |
| Szkicownik: Geometria odsunięcia                             |
| Lokalizacja w menu                                           |
| Szkic → Narzędzia szkicownika → Geometria odsunięcia         |
| Środowisko pracy                                             |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót                                               |
| Z T                                                          |
| Wprowadzono w wersji                                         |
| 1.0                                                          |
| Zobacz także                                                 |
| _brak_                                                       |
|                                                              |

## Opis

Narzędzie ![](/images/Sketcher_Offset.svg) **Geometria odsunięcia** tworzy równoodległe krawędzie wokół wybranych krawędzi.

![](/images/Sketcher_OffsetExample.png)

Równoległe krawędzie wokół zamkniętej (O) i otwartej (U) polilinii konstrukcyjnej.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Dim-OVP = Wymiarowe [Parametry w widoku](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl").

1. Wybierz jedną lub więcej linii, okręgów i / lub łuków kołowych.
2. Narzędzie można wywołać na kilka sposobów:
   - Naciśnij przycisk ![](/images/Sketcher_Offset.svg) **Geometria odsunięcia**.
   - Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_Offset.svg) Geometria odsunięcia**.
   - Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i z menu podręcznego wybierz opcję **![](/images/Sketcher_Offset.svg) Geometria odsunięcia**.
   - Użyj skrótu klawiaturowego: Z, a następnie T.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Sekcja **Parametry przesunięcia** jest dodawana w górnej części [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
5. Opcjonalnie naciśnij klawisz U lub zaznacz pole wyboru **Usuń oryginalne geometrie**, aby zachować tylko nowy kontur.
6. Opcjonalnie naciśnij klawisz J lub zaznacz pole wyboru **Dodaj wiązanie odsunięcia**, aby dodać wiązanie wymiarowe między przesuniętym obrysem a oryginalną geometrią.
7. Opcjonalnie naciśnij klawisz M lub wybierz z listy rozwijanej w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_OffsetArc.svg) **Łuk**
   - ![](/images/Sketcher_OffsetIntersection.svg) **Przecięcie**
8. Wybierz punkt, aby zdefiniować odległość przesunięcia. Lub za pomocą Dim-OVP: wprowadź tę odległość.
9. Geometria zostanie utworzona, a jeśli wybrano opcję **Dodaj wiązanie odsunięcia**, zostanie dodane wiązanie wymiarowe.

## Ograniczenia

To narzędzie ma pewne ograniczenia, głównie wynikające z problemów [silnika OCC](/OpenCASCADE/pl "OpenCASCADE/pl"):

- Następujące typy geometrii nie są obecnie wspierane: elipsy, krzywe złożone, hiperbole i parabole.
- Odsuwanie pojedynczej linii może dawać niespodziewane wyniki.
- Otwarte kontury są odsuwane po obu stronach, tworząc zamknięty kontur.
- Geometria zewnętrzna nie może być odsuwana bezpośrednio.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Offset/pl&oldid=1474756>"
