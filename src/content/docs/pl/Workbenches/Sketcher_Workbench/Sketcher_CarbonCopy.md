---
title: Szkicownik Kalka techniczna
---
|  |
| --- |
| Szkicownik: Kalka techniczna |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Kalka techniczna |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G W |
| Wprowadzono w wersji |
| 0.17 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_CarbonCopy.svg) **Kalka techniczna** kopiuje całą geometrię i wiązania z innego szkicu do aktywnego szkicu.

Wiązania wymiarowe, które istnieją przed funkcją kopiowania, pozostają powiązane z wiązaniami wymiarowymi oryginalnego szkicu poprzez [wyrażenia](/Expressions/pl "Expressions/pl").

## Użycie

1. Upewnij się, że jesteś w trybie edycji istniejącego [szkicu](/Sketcher_NewSketch/pl "Sketcher NewSketch/pl"). Ten szkic jest celem operacji.
2. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_CarbonCopy.svg) **Kalka techniczna**.
   * Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_CarbonCopy.svg) Kalka techniczna**.
   * Użyj skrótu klawiaturowego: G, a następnie W.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Wybierz krawędź z innego szkicu. Szkic ten jest źródłem operacji. Zobacz [Uwagi](#Uwagi).
5. Elementy geometrii oraz wiązania są kopiowane do aktywnego szkicu.
6. To narzędzie zawsze działa w trybie kontynuacji: opcjonalnie można skopiować dodatkowe szkice.
7. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* W środowisku pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl") możliwe jest wybranie szkicu do skopiowania spoza [zawartością](/PartDesign_Body/pl "PartDesign Body/pl") aktualnie aktywnego szkicu, ale tylko wtedy, gdy klawisz Ctrl jest przytrzymany podczas wyboru.
* Szkic do skopiowania powinien być płaszczyzną równoległą do aktualnie aktywnego szkicu. Jeśli tak nie jest, klawisze Ctrl i Alt muszą być wciśnięte podczas zaznaczania. Działa to również w przypadku szkiców znajdujących się poza aktywną Zawartością.
* Jeśli [tryb konstrukcyjny](/Sketcher_ToggleConstruction/pl "Sketcher ToggleConstruction/pl") jest aktywny, kopiowana geometria jest tworzona jako geometria konstrukcyjna.
* Kopiowany jest cały szkic, nie jest możliwe wybranie tylko jego części. Po skopiowaniu można jednak usunąć niechciane elementy.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CarbonCopy/pl&oldid=1511726>"