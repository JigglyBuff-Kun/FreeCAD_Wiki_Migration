---
title: Część Usuwanie cech
---
|  |
| --- |
| Część: Usuwanie cech |
| Lokalizacja w menu |
| Część → Usuwanie cech |
| Środowisko pracy |
| [Część](/Part_Workbench/pl "Part Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 0.18 |
| Zobacz także |
| [środowisko Upraszczanie](/Defeaturing_Workbench/pl "Defeaturing Workbench/pl"), [makrodefinicja: Upraszczanie parametryczne](/Macro_Parametric_Defeaturing/pl "Macro Parametric Defeaturing/pl") |
|  |

## Opis

Narzędzie **Usuwanie cech** jest przeznaczone do usuwania wybranych cech z modelu. W tym kontekście przez cechy rozumie się otwory, występy, szczeliny, fazy, zaokrąglenia itp. znajdujące się w modelu.

Narzędzie Usuwanie cech może być bardzo przydatne w różnych kontekstach:

* Edycja zaimportowanej bryły, w przypadku której nie jest dostępna historia operacji.
* Usuwanie defektów w modelu, np. wypełnianie szczelin, otworów itp.
* Uproszczenie modelu na potrzeby analizy numerycznej, wyświetlania na urządzeniach mobilnych itp.

Usunięte elementy są wypełniane przez przedłużenie sąsiednich ścian, więc w wyniku nie powinny pojawić się żadne nieoczekiwane części. Należy pamiętać, że wynikiem jest nowy kształt, który nie jest powiązany z oryginałem; dlatego jest nieparametryczny.

Aby to narzędzie było dostępne, FreeCAD musi być oparty na Open Cascade **7.3.0** lub nowszym. Jeśli nie jest ono dostępne w twojej wersji FreeCAD, możesz rzucić okiem na zewnętrzne środowisko pracy [Upraszczanie](/Defeaturing_Workbench/pl "Defeaturing Workbench/pl"), który proponuje podobną funkcjonalność nawet w starszych wersjach OCC lub FreeCAD.

![](/images/Part_Defeaturing_example.png)

## Użycie

1. Wybierz ściany na modelu do usunięcia.
2. Naciśnij przycisk ![](/images/Part_Defeaturing.svg) **Usuwanie cech**.
3. Zostanie utworzony nowy obiekt oznaczony jako *Uproszczony* w [widoku drzewa](/Tree_view/pl "Tree view/pl") modelu, a oryginalny obiekt zostanie ukryty.

## Odnośniki internetowe

* [3D Model Defeaturing](https://dev.opencascade.org/index.php?q=node/1211), oficjalne ogłoszenie na wspólnym portalu deweloperskim Open Cascade.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Defeaturing/pl&oldid=1468185>"