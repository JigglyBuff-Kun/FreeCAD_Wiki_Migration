---
title: Szkicownik Przekształcenie biegunowe
---
|  |
| --- |
| Szkicownik: Przekształcenie biegunowe |
| Lokalizacja w menu |
| Szkic → Narzędzia szkicownika → Przekształcenie biegunowe |
| Środowisko pracy |
| [Szkicownik](/Sketcher_Workbench/pl "Sketcher Workbench/pl") |
| Domyślny skrót |
| Z T |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Sketcher_Rotate.svg) Narzędzie **Przekształcenie biegunowe** obraca lub opcjonalnie tworzy obrócone kopie wybranych elementów. Kopie są równomiernie rozłożone wzdłuż kąta obrotu.

## Użycie

Zapoznaj się również z informacjami na stronie [Pomoce kreślarskie](/Sketcher_Workbench/pl#Pomoce_kreślarskie "Sketcher Workbench/pl").

Pos-OVP = Pozycyjne [parametry w widoku](/Sketcher_Preferences/pl#Ogólne "Sketcher Preferences/pl").  
Dim-OVP = Wymiarowe parametry w widoku.

1. Wybierz jedną lub więcej krawędzi i/lub obiektów [punktów](/Sketcher_CreatePoint/pl "Sketcher CreatePoint/pl"). Wiązania, z wyjątkiem [poziomych](/Sketcher_ConstrainHorizontal/pl "Sketcher ConstrainHorizontal/pl") i [pionowych](/Sketcher_ConstrainVertical/pl "Sketcher ConstrainVertical/pl"), dotyczące wybranych elementów są również przetwarzane. Jeśli oryginalne elementy zostaną obrócone, wszelkie inne powiązane z nimi wiązania zostaną usunięte.
2. Narzędzie można wywołać na kilka sposobów:
   * Naciśnięcie przycisku ![](/images/Sketcher_Rotate.svg) **Przekształcenie biegunowe**.
   * Wybierz z menu opcję **Szkic → Narzędzia szkicownika → ![](/images/Sketcher_Rotate.svg) Przekształcenie biegunowe**.
   * Kliknij prawym przyciskiem myszy w [widoku 3D](/3D_view/pl "3D view/pl") i wybierz opcję **![](/images/Sketcher_Rotate.svg) Przekształcenie biegunowe** z menu podręcznego.
   * Skrót klawiaturowy: Z, a następnie P.
3. Kursor zmieni się w krzyżyk z ikoną narzędzia.
4. Sekcja **Parametry obrotu** jest dodawana w górnej części [okna dialogowego](/Sketcher_Dialog "Sketcher Dialog").
5. Opcjonalnie zmień liczbę **kopii** *(jeśli liczba wynosi zero, oryginalne elementy są obracane)*:
   * Wprowadź liczbę.
   * Naciśnij przycisk U, aby zwiększyć liczbę.
   * Naciśnij przycisk J, aby zmniejszyć liczbę.
6. Opcjonalnie zaznacz pole wyboru **Zastosuj więzy równości**, aby utworzyć [więzy równości](/Sketcher_ConstrainEqual/pl "Sketcher ConstrainEqual/pl") zamiast kopii wiązań odległości, promienia i średnicy.
7. Wybierz środek obrotu. Lub z Pos-OVP: wprowadź jego współrzędną X i/lub Y.
8. Wybierz punkt do zdefiniowania kąta odniesienia. Lub z Dim-OVP: wprowadź jego współrzędne.
9. Wybierz punkt do zdefiniowania kąta obrotu. Lub z Dim-OVP: wprowadź jego współrzędne.
10. Oryginalne obiekty zostają obrócone lub powstają ich obrócone kopie. Nie są dodawane żadne wiązania oparte o Pos-OVP lub Dim-OVP.

## Uwagi

* Wskazane może być [usunięcie wyrównania osi](/Sketcher_RemoveAxesAlignment/pl "Sketcher RemoveAxesAlignment/pl") przed użyciem tego narzędzia.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Rotate/pl&oldid=1538094>"