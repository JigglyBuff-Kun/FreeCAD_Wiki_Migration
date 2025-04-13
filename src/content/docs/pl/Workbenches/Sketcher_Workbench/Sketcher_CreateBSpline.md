---
title: Szkicownik Krzywa złożona przez punkty kontrolne
---

|                                                                                                   |
| ------------------------------------------------------------------------------------------------- |
| Szkicownik: Utwórz krzywą złożoną                                                                 |
| Lokalizacja w menu                                                                                |
| Szkic → Elementy geometryczne szkicownika → Utwórz krzywą złożoną                                 |
| Środowisko pracy                                                                                  |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")                                      |
| Domyślny skrót                                                                                    |
| G B B                                                                                             |
| Wprowadzono w wersji                                                                              |
| 0.17                                                                                              |
| Zobacz także                                                                                      |
| [Okresowa krzywa złożona](/Sketcher_CreatePeriodicBSpline/pl "Sketcher CreatePeriodicBSpline/pl") |
|                                                                                                   |

## Opis

Narzędzie ![](/images/Sketcher_CreateBSpline.svg) **Utwórz krzywą złożoną** tworzy krzywą złożoną z jej punktów kontrolnych. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub opcjonalnie z węzłów.

![](/images/Sketcher_CreateBSpline_Example.png)

Krzywa złożona _(biała)_ zdefiniowana przez 5 punktów kontrolnych.  
Wielokąt kontrolny _(zielony)_ łączy punkty kontrolne _(zaznaczone ciemnożółtymi okręgami wagowymi)_.  
Liczba 3 _(zielona, bez nawiasów)_ pośrodku odnosi się do [stopnia](/Sketcher_BSplineIncreaseDegree/pl#Opis "Sketcher BSplineIncreaseDegree/pl") B-splajnu.  
Liczby _(1)_ i _(4)_ _(zielone, w nawiasach okrągłych)_ odnoszą się do [krotności](/Sketcher_BSplineDecreaseKnotMultiplicity/pl#Opis "Sketcher BSplineDecreaseKnotMultiplicity/pl") punktów węzłów.  
Liczby [1,00] _(zielone, w nawiasach kwadratowych)_ odnoszą się do wag punktów kontrolnych.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów wywołania narzędzia:
   - Wciśnij przycisk ![](/images/Sketcher_CreateBSpline.svg) Krzywa złożona przez punkty kontrolne.
   - Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateBSpline.svg) Utwórz krzywą złożoną**.
   - Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view "3D view") i wybierz opcję **![](/images/Sketcher_CreateBSpline.svg) Utwórz krzywą złożoną** z menu kontekstowego. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
   - Użyj skrótu klawiaturowego: G, następnie B, a następnie B.
2. Kursor zmieni się w krzyżyk z ikoną narzędzia.
3. Sekcja **Parametry krzywej złożonej** ([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")) zostanie dodana w górnej części [okna dialogowego Szkicownika](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
4. Opcjonalnie, wciśnij klawisz M lub wybierz z listy rozwijanej w sekcji parametrów aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateBSpline.svg) **Przez punkty kontrolne**:
     1. Opcjonalnie, zmień **Stopień** (możliwe również po wskazaniu punktów):
        - Wprowadź liczbę większą niż zero.
        - Wciśnij klawisz U aby zwiększyć stopień.
        - Wciśnij klawisz J aby zmniejszyć stopień.
   - ![](/images/Sketcher_CreateBSplineByInterpolation.svg) **Przez węzły**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
     1. Krzywe złożone przez węzły są zawsze tworzone ze stopniem 3. Ale ich stopień można później zmienić. Zobacz [Uwagi](#Uwagi).
5. Opcjonalnie, wciśnij klawisz R lub zaznacz pole **Okresowy** aby utworzyć zamkniętą krzywą złożoną (możliwe również po wskazaniu punktów). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
6. Wybierz kilka punktów.
7. Opcjonalnie, wciśnij klawisz F przed zakończeniem aby usunąć ostatni punkt. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
8. Kliknij prawym przyciskiem myszy lub wciśnij klawisz Esc aby zakończyć wprowadzanie.
9. Krzywa złożona zostanie utworzona razem z zestawem wewnętrznej geometrii (okręgi wag i węzły).
10. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
    1. Opcjonalnie, kontynuuj tworzenie krzywych złożonych.
    2. Aby zakończyć, kliknij prawym przyciskiem myszy lub wciśnij klawisz Esc bądź uruchom narzędzie do tworzenia innej geometrii lub wiązań.

## Uwagi

- Elementy wewnętrznej geometrii można usunąć. Ich odtworzenie jest możliwe w dowolnym momencie przy pomocy narzędzia [Pokaż / ukryj geometrię wewnętrzną](/Sketcher_RestoreInternalAlignmentGeometry/pl "Sketcher RestoreInternalAlignmentGeometry/pl").
- Istnieje możliwość zdefiniowania wagi punktów kontrolnych poprzez zmianę rozmiarów promieni okręgów wagowych. Należy najpierw usunąć wiązania równościowe na okręgach. Wiązanie promienia jest dowolne, waga punktów kontrolnych będzie określona przez względne promienie okręgów. Działa to podobnie do grawitacji: im większy jest okrąg w stosunku do pozostałych, tym bardziej krzywa będzie przyciągana do punktu kontrolnego.
- Stopień utworzonej krzywej złożonej można [zwiększyć](/Sketcher_BSplineIncreaseDegree/pl "Sketcher BSplineIncreaseDegree/pl") lub [zmniejszyć](/Sketcher_BSplineDecreaseDegree/pl "Sketcher BSplineDecreaseDegree/pl"). Krotność węzłów również można [zwiększyć](/Sketcher_BSplineIncreaseKnotMultiplicity/pl "Sketcher BSplineIncreaseKnotMultiplicity/pl") lub [zmniejszyć](/Sketcher_BSplineIncreaseKnotMultiplicity/pl "Sketcher BSplineIncreaseKnotMultiplicity/pl").
- Widoczność [stopi](/Sketcher_BSplineDegree/pl "Sketcher BSplineDegree/pl"), [wielokąta kontrolnego](/Sketcher_BSplinePolygon/pl "Sketcher BSplinePolygon/pl"), [grzebienia krzywizny](/Sketcher_BSplineComb/pl "Sketcher BSplineComb/pl"), [wielokrotności węzłów](/Sketcher_BSplineKnotMultiplicity/pl "Sketcher BSplineKnotMultiplicity/pl") i [wag punktów kontrolnych](/Sketcher_BSplinePoleWeight/pl "Sketcher BSplinePoleWeight/pl") można włączać / wyłączać z paska narzędzi [Widok szkicu](/Sketcher_Workbench/pl#Widok_szkicu "Sketcher Workbench/pl").

## Ograniczenia

- Kilka typów wiązań nie jest obecnie obsługiwanych.
- Zdefiniowana krotność węzłów nie zawsze musi być respektowana:
  - Dla krzywej okresowej, pierwszy węzeł (współbieżny z ostatnim) zawsze ma krotność 2.
  - Dla krzywej nieokresowej, pierwszy i ostatni węzeł mają krotność 4.
  - Jeśli punkty tuż przed i tuż po mają krotności >=3, fragment między nimi jest w pełni ciągły i ten (środkowy) punkt będzie związany tylko wiązaniem punk-na-obiekcie. Jeśli potrzebny jest węzeł, rozważ użycie narzędzia [Wstaw węzeł krzywej złożonej](/Sketcher_BSplineInsertKnot/pl "Sketcher BSplineInsertKnot/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateBSpline/pl&oldid=1467427>"
