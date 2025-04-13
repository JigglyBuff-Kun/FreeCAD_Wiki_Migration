---
title: Szkicownik Utwórz łuk na podstawie elipsy
---
|  |
| --- |
| Szkicownik: Utwórz łuk na podstawie elipsy |
| Lokalizacja w menu |
| Szkic → Elementy geometryczne szkicownika → Utwórz łuk na podstawie elipsy |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| G E A |
| Wprowadzono w wersji |
| 0.15 |
| Zobacz także |
| [Utwórz elipsę przez środek](/Sketcher_CreateEllipseByCenter/pl "Sketcher CreateEllipseByCenter/pl") |
|  |

## Opis

Narzędzie ![](/images/Sketcher_CreateArcOfEllipse.svg) **Utwórz łuk na podstawie elipsy** narzędzie tworzy łuk elipsy.

![](/images/Sketcher_CreateArcOfEllipse_Example.png)

Łuk elipsy *(biały)* z wewnętrzną geometrią *(ciemnożółta)*.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

1. Istnieje kilka sposobów wywołania narzędzia:
   * Naciśnij przycisk ![](/images/Sketcher_CreateArcOfEllipse.svg) **Łuk elipsy przez środek, promień, punkty końcowe**.
   * Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateArcOfEllipse.svg) Utwórz łuk na podstawie elipsy**.
   * Użyj skrótu klawiaturowego: G, E, A.
2. Kursor zmieni się w krzyżyk z ikoną narzędzia.
3. Wybierz środek łuku.
4. Wybierz punkt końcowy jednej z osi łuku, który definiuje również jeden z jego promieni.
5. Wybierz punkt początkowy łuku, który definiuje także drugi promień łuku.
6. Wybierz punkt końcowy łuku.
7. Zostanie utworzony łuk elipsy, zawierający zestaw wewnętrznej geometrii *(oś główna, oś pomocnicza i dwa ogniska)*.
8. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie łuków.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

* Elementy geometrii wewnętrznej mogą zostać usunięte. Można je odtworzyć w dowolnym momencie za pomocą narzędzia [Pokaż / ukryj geometrię wewnętrzną](/Sketcher_RestoreInternalAlignmentGeometry/pl "Sketcher RestoreInternalAlignmentGeometry/pl").
* Po utworzeniu, główne i pomocnicze osie elipsy są ściśle określone i nie można ich zamienić poprzez zmianę rozmiaru. Jest to konsekwencja parametryzacji solvera i tego samego ścisłego zachowania [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl"). Łuk elipsy musi zostać obrócony, aby zamienić jego osie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArcOfEllipse/pl&oldid=1414294>"