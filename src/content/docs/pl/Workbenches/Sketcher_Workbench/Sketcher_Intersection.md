---
title: Szkicownik Przecięcie
---
|  |
| --- |
| Szkicownik: Przecięcie |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Utwórz geometrię zewnętrzną przecięcia |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G I |
| Wprowadzono w wersji |
| 1.1 |
| Zobacz także |
| [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_Intersection.svg) Przecięcie ([dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")) przecina płaszczyzną szkicu ściany i/lub krawędzie należące do obiektów poza szkicem. Geometria przecięcia jest nazywana "geometrią zewnętrzną". Pozostaje ona parametrycznie powiązana ze swoimi obiektami źródłowymi. Geometria zewnętrzna jest oznaczona dedykowanym [kolorem](/Sketcher_Preferences/pl#Wygląd "Sketcher Preferences/pl") (domyślnie magenta) i typem linii. Może być geometrią definiującą widoczną poza szkicem lub geometrią konstrukcyjną niewidoczną poza szkicem.

## Użycie

1. Istnieje kilka sposobów na uruchomienie narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_Intersection.svg) Utwórz zewnętrzną geometrię przecięcia.
   * Wybierz opcję **Sketcher → Narzędzia szkicownika → ![](/images/Sketcher_Intersection.svg) Utwórz zewnętrzną geometrię przecięcia** z menu.
   * Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_Intersection.svg) Utwórz zewnętrzną geometrię przecięcia** z menu kontekstowego.
   * Użyj skrótu klawiaturowego: G, a następnie I.
2. Kursor zmienia się na krzyżyk z ikoną narzędzia.
3. Wybierz jedną lub więcej zewnętrznych ścian i/lub krawędzi. Zobacz [Uwagi](#Uwagi).
4. Tworzona jest zewnętrzna geometria.
5. To narzędzie zawsze działa w trybie ciągłym: opcjonalnie kontynuuj wybieranie zewnętrznych ścian i/lub krawędzi.
6. Aby zakończyć, kliknij prawym przyciskiem myszy, naciśnij Esc lub uruchom inne narzędzie do tworzenia geometrii lub więzów.

## Uwagi

* Wybór śiany tworzy jedną lub więcej krawędzi, wybór krawędzi tworzy jeden lub więcej punktów. Geometria nie dotykająca płaszczyzny szkicy jest ignorowana.
* Geometria zewnętrzna jest tworzona jako definiująca lub konstrukcyjna w zależności od statusu narzędzia [Przełącz tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl"). To narzędzie może też przełączać tryb poszczególnych krawędzi. Zaznacz opcję **Edycja → Preferencje... → Szkicownik → Ogólne → Zawsze dodawaj geometrię zewnętrzną jako geometrię odniesienia** aby ignorować status tego narzędzia i zawsze dodawać geometrię zewnętrzną jako geometrię odniesienia (konstrukcyjną).

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Intersection/pl&oldid=1560437>"