---
title: Szkicownik Utwórz łuk przez środek
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| Szkicownik: Utwórz łuk przez środek                                            |
| Lokalizacja w menu                                                             |
| Szkic → Elementy geometryczne szkicownika → Utwórz łuk przez środek            |
| Środowisko pracy                                                               |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")                   |
| Domyślny skrót                                                                 |
| G A                                                                            |
| Wprowadzono w wersji                                                           |
| -                                                                              |
| Zobacz także                                                                   |
| [Komponent utwórz okrąg](/Sketcher_CreateCircle/pl "Sketcher CreateCircle/pl") |
|                                                                                |

## Opis

Narzędzie ![](/images/Sketcher_CreateCircle.svg) **Utwórz łuk** tworzy łuk przez jego środek i punkty końcowe. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub opcjonalnie przez punkty końcowe i punkt wzdłuż łuku.

![](/images/Sketcher_ArcExample3.png)

Łuk utworzony w trybie "przez środek" z automatycznie zastosowanymi wiązaniami zdefiniowanymi przez wprowadzenie wszystkich parametrów wyświetlanych na ekranie.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateArc.svg) **Punkt środkowy i punkty końcowe**.
   - Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateArc.svg) Utwórz łuk przez środek**.
   - Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_CreateArc.svg) Utwórz łuk przez środek** z menu podręcznego.
   - Użyj skrótu klawiaturowego: G, a następnie A.
2. Kursor zmieni się w krzyżyk z ikoną bieżącego trybu narzędzia.
3. Sekcja **Parametry łuku** ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")) jest dodawana na górze [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
4. Opcjonalnie naciśnij klawisz M lub wybierz z rozwijanej listy w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateArc.svg) **Wyśrodkowany**:
     1. Wybierz środek łuku. Lub z Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt początkowy łuku, który definiuje również promień. Lub za pomocą Dim-OVP: wprowadź promień i / lub kąt początkowy łuku. Kąt jest odniesiony do osi X szkicu. Dla tego kąta nie jest tworzone żadne wiązanie.
     3. Wybierz punkt końcowy łuku. Lub z Dim-OVP: wprowadź kąt przysłony łuku.
   - ![](/images/Sketcher_Create3PointArc.svg) **Trzy punkty na obwodzie**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz punkt początkowy i końcowy łuku. Lub za pomocą Pos-OVP: wprowadź ich współrzędne X i / lub Y.
     2. Wybierz kolejny punkt, aby zdefiniować promień. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y. Dla tego punktu nie zostaną utworzone żadne wiązania.
5. Łuk jest tworzony i dodawane są odpowiednie wiązania oparte na Pos-OVP i Dim-OVP.
6. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie łuków.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateArc/pl&oldid=1403722>"
