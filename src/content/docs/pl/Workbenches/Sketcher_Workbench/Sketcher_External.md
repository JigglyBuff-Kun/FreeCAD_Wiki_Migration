---
title: Szkicownik Utwórz geometrię zewnętrzną
---
|  |
| --- |
| Szkicownik: Utwórz geometrię zewnętrzną |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Utwórz geometrię zewnętrzną |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| X |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Tryb konstrukcji](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl") |
|  |

## Opis

wersja 1.0 i poniżej: Narzędzie ![](/images/Sketcher_External.svg) **Utwórz geometrię zewnętrzną** rzutuje krawędzie i / lub wierzchołki należące do obiektów znajdujących się poza szkicem na płaszczyznę szkicu. Rzutowana geometria nazywana jest „geometrią zewnętrzną”. Pozostaje parametrycznie powiązana ze swoimi obiektami źródłowymi. Krawędzie geometrii zewnętrznej są oznaczone dedykowanym [kolorem](/Sketcher_Preferences/pl#Wygląd_zewnętrzny "Sketcher Preferences/pl") *(domyślnie magenta)* i rodzajem linii *([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))*. Podobnie jak w przypadku geometrii konstrukcyjnej, geometria zewnętrzna nie jest widoczna poza szkicem, ma pomóc w zdefiniowaniu wiązań i innej geometrii wewnątrz samego szkicu.

wersja 1.1 i powyżej: Zobacz stronę ![](/images/Sketcher_Projection.svg) [Rzutowanie](/Sketcher_Projection/pl "Sketcher Projection/pl")

![](/images/Sketcher_ExternalEsempio1.png)

Dwie linie w kolorze magenta to zewnętrzna geometria połączona z krawędziami wcześniej istniejącego [wyciągnięcia](/PartDesign_Pad/pl "PartDesign Pad/pl"). Są one używane do związania okręgów.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów na wywołanie narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_External.svg) **Utwórz geometrię zewnętrzną**.
   * Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_External.svg) Utwórz geometrię zewnętrzną**.
   * Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i z menu kontekstowego wybierz opcję **![](/images/Sketcher_External.svg) Utwórz geometrię zewnętrzną**.
   * Użyj skrótu klawiaturowego: G, a następnie X.
2. Kursor zmieni się w krzyżyk z ikoną narzędzia.
3. Wybierz krawędź zewnętrzną lub wierzchołek. Zobacz [Uwagi](#Uwagi).
4. Zostanie utworzona geometria zewnętrzna.
5. To narzędzie zawsze działa w trybie kontynuacji: opcjonalnie można kontynuować wybieranie zewnętrznych krawędzi i / lub wierzchołków.
6. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* Można wybrać tylko krawędzie i wierzchołki z obiektów w tym samym układzie współrzędnych. Szkic i obiekt muszą znajdować się w tej samej [Zawartości](/PartDesign_Body/pl "PartDesign Body/pl") lub tej samej [Części](/Std_Part/pl "Std Part/pl"), lub w obu w globalnym układzie współrzędnych. Użyj [łącznika](/PartDesign_SubShapeBinder/pl "PartDesign SubShapeBinder/pl"), aby przenieść kopię obiektu do bieżącego układu współrzędnych, jeśli jest to wymagane.
* Zależności kołowe nie są dozwolone. Nie można utworzyć łącza do obiektu, który zależy od samego szkicu.
* Łącza do elementów z innych szkiców są możliwe i zalecane, ponieważ są bardziej niezawodne niż łącza do wygenerowanej (bryłowej) geometrii. Te ostatnie mogą cierpieć z powodu [problemu nazewnictwa topologicznego](/Topological_naming_problem/pl "Topological naming problem/pl"). Zobacz [Porady dotyczące tworzenia stabilnych modeli](/Feature_editing/pl#Porady_dotyczące_tworzenia_stabilnych_modeli "Feature editing/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_External/pl&oldid=1512603>"