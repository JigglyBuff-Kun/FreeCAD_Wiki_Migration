---
title: Szkicownik Utwórz elipsę przez środek
---

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| Szkicownik: Utwórz elipsę przez środek                                                             |
| Lokalizacja w menu                                                                                 |
| Szkic → Elementy geometryczne szkicownika → Utwórz elipsę przez środek                             |
| Środowisko pracy                                                                                   |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")                                       |
| Domyślny skrót                                                                                     |
| G E E                                                                                              |
| Wprowadzono w wersji                                                                               |
| 0.15                                                                                               |
| Zobacz także                                                                                       |
| [Utwórz łuk na podstawie elipsy](/Sketcher_CreateArcOfEllipse/pl "Sketcher CreateArcOfEllipse/pl") |
|                                                                                                    |

## Opis

Narzędzie ![](/images/Sketcher_CreateEllipseByCenter.svg) **Utwórz elipsę przez środek** tworzy elipsę na podstawie jej środka. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Lub opcjonalnie przez oba punkty końcowe jednej z osi i punkt wzdłuż elipsy.

![](/images/Sketcher_CreateEllipseByCenter_Example.png)

Elipsa _(biała)_ z wewnętrzną geometrią _(ciemnożółta)_.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateEllipseByCenter.svg) **Elipsa przez środek, promień, punkt na obwodzie**.
   - Wybierz z menu **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateEllipseByCenter.svg) Elipsa przez środek, promień, punkt na obwodzie**.
   - Użyj skrótu klawiaturowego: G, następnie E, a następnie E.
2. Kursor zmieni się w krzyżyk z ikoną bieżącego trybu narzędzia.
3. Sekcja **Parametry elipsy** _([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))_ jest dodawana na górze [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
4. Opcjonalnie naciśnij klawisz M lub wybierz z rozwijanej listy w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateEllipseByCenter.svg) **Center**:
     1. Wybierz środek elipsy. Lub z Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt końcowy jednej z osi elipsy, który definiuje również jeden z jej promieni. Lub za pomocą Dim-OVP: wprowadź ten promień i / lub kąt tej osi.
     3. Wybierz punkt definiujący drugi promień elipsy. Lub za pomocą Dim-OVP: wprowadź ten promień.
   - ![](/images/Sketcher_CreateEllipseBy3Points.svg) **Punkty końcowe osi**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
     1. Wybierz punkty końcowe jednej z osi elipsy, która definiuje również jeden z jej promieni. Lub za pomocą Pos-OVP: wprowadź ich współrzędne X i / lub Y. Dla tych punktów nie są tworzone żadne wiązania.
     2. Wybierz punkt definiujący drugi promień elipsy. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y. Dla tego punktu nie zostanie utworzone żadne wiązanie.
5. Tworzona jest elipsa, w tym zestaw geometrii wewnętrznej _(oś główna, oś pomocnicza i dwa ogniska)_, a także dodawane są odpowiednie ograniczenia oparte na Pos-OVP i Dim-OVP.
6. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
   1. Opcjonalnie kontynuuj tworzenie elips.
   2. Aby zakończyć, kliknij prawym przyciskiem myszy lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

## Uwagi

- Elementy geometrii wewnętrznej mogą zostać usunięte. Można je odtworzyć w dowolnym momencie za pomocą narzędzia [Pokaż / ukryj geometrię wewnętrzną](/Sketcher_RestoreInternalAlignmentGeometry/pl "Sketcher RestoreInternalAlignmentGeometry/pl").
- Po utworzeniu, główne i pomocnicze osie elipsy są ściśle określone i nie można ich zamienić poprzez zmianę rozmiaru. Jest to konsekwencja parametryzacji solvera i tego samego ścisłego zachowania [OpenCASCADE](/OpenCASCADE/pl "OpenCASCADE/pl"). Elipsa musi zostać obrócona, aby zamienić jej osie.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateEllipseByCenter/pl&oldid=1403734>"
