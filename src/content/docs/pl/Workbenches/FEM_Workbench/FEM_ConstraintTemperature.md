---
title: MES Warunek brzegowy temperatury
---

|                                                                                |
| ------------------------------------------------------------------------------ |
| MES: Warunek brzegowy temperatury                                              |
| Lokalizacja w menu                                                             |
| Model → Warunki brzegowe i obciążenia termiczne → Warunek brzegowy temperatury |
| Środowisko pracy                                                               |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                    |
| Domyślny skrót                                                                 |
| _brak_                                                                         |
| Wprowadzono w wersji                                                           |
| -                                                                              |
| Zobacz także                                                                   |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")                             |
|                                                                                |

| Solvery         |
| --------------- |
| CalculiX, Elmer |

## Opis

Definiuje warunek brzegowy temperatury lub, opcjonalnie, skupiony strumień ciepła.

## Użycie

1. Jest kilka sposobów wywołania tej komendy:
   - Wciśnij przycisk ![](/images/FEM_ConstraintTemperature.svg) Warunek brzegowy temperatury.
   - Wybierz opcję **Model → Warunki brzegowe i obciążenia termiczne → ![](/images/FEM_ConstraintTemperature.svg) Warunek brzegowy temperatury** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekty, do których warunek brzegowy ma być przypisany. Mogą to być wierzchołki, krawędzie lub ściany. Opcjonalnie, wciśnij przycisk Usuń i kliknij na obiektach, które chcesz usunąć z zaznaczenia.
4. Wybierz typ obciążenia i podaj jego wartość:
   - _Temperature_ (domyślne) - warunek brzegowy temperatury, wprowadź wartość parametru _Temperatura_ (K)
   - _CFlux_ - obciążenie skupionym strumieniem ciepła, wprowadź wartość parametru _Skupiony strumień ciepła_ (mW) - ta wartość zostanie podzielona przez liczbę węzłów odpowiadających wskazanemu obiektowi geometrycznemu aby uzyskać całkowity strumień ciepła o zadanej wartości dla tego obiektu

## Uwagi

- Warunek brzegowy temperatury korzysta ze [słowa kluczowego \*BOUNDARY w CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node163.html).
- Opcja **Skupiony strumień ciepła** korzysta ze [słowa kluczowego \*CFLUX w CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node168.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintTemperature/pl&oldid=1533120>"
