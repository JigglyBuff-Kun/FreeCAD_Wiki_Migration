---
title: Sketcher Utwórz prostokąt
---

|                                                                       |
| --------------------------------------------------------------------- |
| Szkicownik: Utwórz prostokąt                                          |
| Lokalizacja w menu                                                    |
| Szkic → Elementy geometryczne szkicownika → Utwórz prostokąt          |
| Środowisko pracy                                                      |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl")          |
| Domyślny skrót                                                        |
| G R                                                                   |
| Wprowadzono w wersji                                                  |
| -                                                                     |
| Zobacz także                                                          |
| [Polilinia](/Sketcher_CreatePolyline/pl "Sketcher CreatePolyline/pl") |
|                                                                       |

## Opis

Narzędzie ![](/images/Sketcher_CreateRectangle.svg) **Utwórz prostokąt** tworzy prostokąt. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Narzędzie posiada cztery tryby, z których dwa mogą również tworzyć równoległoboki. Zaokrąglone rogi i tworzenie kopii z przesunięciem są funkcjami opcjonalnymi.

![](/images/SketcherCreateRectangleExample.png)

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [Parametry w widoku](/Sketcher_Preferences#Ogólne/pl "Sketcher Preferences"). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")  
Dim-OVP = Wymiarowe parametry w widoku. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")

1. Istnieje kilka sposobów wywołania narzędzia:
   - Naciśnij przycisk ![](/images/Sketcher_CreateRectangle.svg) **Utwórz prostokąt**.
   - Wybierz z menu opcję **Szkic → Elementy geometryczne szkicownika → ![](/images/Sketcher_CreateRectangle.svg) Utwórz prostokąt**.
   - Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_CreateRectangle.svg) Utwórz prostokąt** z menu podręcznego.
   - Użyj skrótu klawiaturowego: G, a następnie R.
2. Kursor zmieni się w krzyżyk z ikoną bieżącego trybu narzędzia.
3. Sekcja **Parametry prostokąta** _([dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"))_ jest dodawana na górze [okna dialogowego](/Sketcher_Dialog/pl "Sketcher Dialog/pl").
4. Opcjonalnie można nacisnąć klawisz U lub zaznaczyć pole wyboru **Zaokrąglone narożniki**, aby zaokrąglić prostokąt. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl")
5. Opcjonalnie naciśnij klawisz J lub zaznacz pole wyboru **Ramka**, aby utworzyć drugi odsunięty kształt. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")
6. Opcjonalnie naciśnij klawisz M lub wybierz z listy rozwijanej w sekcji parametrów, aby zmienić tryb narzędzia:
   - ![](/images/Sketcher_CreateRectangle.svg) **Wierzchołek, szerokość, wysokość**:
     1. Wybierz pierwszy róg prostokąta. Lub za pomocą Pos-OVP: wprowadź jego współrzędną X i / lub Y.
     2. Wybierz przeciwległy róg prostokąta. Lub za pomocą Dim-OVP: wprowadź szerokość i / lub wysokość prostokąta.
   - ![](/images/Sketcher_CreateRectangle_Center.svg) **Środek, szerokość, wysokość**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz środek prostokąta. Lub z Pos-OVP: wprowadź jego współrzędną X i / lub Y.
     2. Wybierz róg prostokąta. Lub za pomocą Dim-OVP: wprowadź szerokość i / lub wysokość prostokąta.
   - ![](/images/Sketcher_CreateRectangle3Points.svg) **Trzy wierzchołki**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz pierwszy róg prostokąta. Lub z Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz punkt końcowy pierwszej krawędzi prostokąta. Lub za pomocą Dim-OVP: wprowadź długość i / lub kąt pierwszej krawędzi. Kąt jest względem osi X szkicu.
     3. Wybierz trzeci narożnik prostokąta, przeciwległy do pierwszego. Lub z Dim-OVP: wprowadź długość i / lub kąt drugiej krawędzi. Kąt jest względny w stosunku do pierwszej krawędzi. Tylko jeśli kąt ten wynosi 90°, wynikiem będzie prostokąt.
   - ![](/images/Sketcher_CreateRectangle3Points_Center.svg) **Środek, dwa wierzchołki**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl").
     1. Wybierz środek prostokąta. Lub za pomocą Pos-OVP: wprowadź jego współrzędne X i / lub Y.
     2. Wybierz pierwszy róg prostokąta. Lub za pomocą Pos-OVP: wprowadź jego współrzędną X i / lub Y.
     3. Wybierz drugi narożnik prostokąta. Lub za pomocą Dim-OVP: wprowadź długość i / lub kąt krawędzi między pierwszym a drugim narożnikiem. Kąt jest względny w stosunku do drugiej krawędzi połączonej z pierwszym narożnikiem. Tylko jeśli kąt ten wynosi 90°, wynikiem będzie prostokąt.
7. Jeśli wybrano opcję **Zaokrąglone narożniki**: Wybierz punkt, aby zdefiniować promień zaokrąglenia. Lub za pomocą Dim-OVP: wprowadź go.
8. Jeśli wybrano opcję **Obramowanie**: Wybierz punkt, aby zdefiniować odległość odsunięcia. Lub za pomocą Dim-OVP: wprowadź ją. Jeśli odsunięcie jest do wewnątrz i większe niż promień, odsunięty kształt nie będzie miał zaokrągleń.
9. Geometria jest tworzona i dodawane są odpowiednie wiązania oparte na Pos-OVP i Dim-OVP.
10. Jeśli narzędzie działa w [trybie kontynuacji](/Sketcher_Workbench/pl#Tryby_kontynuacji "Sketcher Workbench/pl"):
    1. Opcjonalnie kontynuuj tworzenie prostokątów.
    2. Aby zakończyć, kliknij prawym przyciskiem myszki lub naciśnij Esc, lub uruchom inne narzędzie do tworzenia geometrii lub wiązań.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_CreateRectangle/pl&oldid=1414310>"
