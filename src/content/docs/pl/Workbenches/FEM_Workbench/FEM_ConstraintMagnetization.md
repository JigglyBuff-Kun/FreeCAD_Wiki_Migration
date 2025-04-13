---
title: MES Warunek brzegowy magnetyzacji
---

|                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Warunek brzegowy magnetyzacji                                                                                                                                                                |
| Lokalizacja w menu                                                                                                                                                                                |
| Model → Warunki brzegowe elektromagnetyczne → Warunek brzegowy magnetyzacji                                                                                                                       |
| Środowisko pracy                                                                                                                                                                                  |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                                                       |
| Domyślny skrót                                                                                                                                                                                    |
| _brak_                                                                                                                                                                                            |
| Wprowadzono w wersji                                                                                                                                                                              |
| 0.21                                                                                                                                                                                              |
| Zobacz także                                                                                                                                                                                      |
| [Równanie magnetodynamiczne](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl"), [Równanie magnetodynamiczne 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl") |
|                                                                                                                                                                                                   |

| Solvery |
| ------- |
| Elmer   |

## Opis

Tworzy warunek brzegowy MES magnetyzacji. Używane z równaniem [magnetodynamicznym](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl") i [magnetodynamicznym 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintMagnetization.svg) Warunek brzegowy magnetyzacji.
   - Wybierz opcję **Model → Warunki brzegowe elektromagnetyczne → ![](/images/FEM_ConstraintMagnetization.svg) Warunek brzegowy magnetyzacji** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego ma być przypisany warunek brzegowy.

## Opcje

To okno dialogowe zawiera następujące ustawienia:

![](/images/FEM_Magnetization_dialog.png)

- **Magnetyzacja\*\_1**: Część rzeczywista/urojona magnetyzacji w kierunku x w A/m. Dla układów współrzędnych innych niż kartezjański 3D, będzie to pierwsza współrzędna układu zamiast x.
- **Magnetyzacja\*\_2**: Część rzeczywista/urojona magnetyzacji w kierunku y w A/m. Dla układów współrzędnych innych niż kartezjański 3D, będzie to druga współrzędna układu zamiast y.
- **Magnetyzacja\*\_3**: Część rzeczywista/urojona magnetyzacji w kierunku z w A/m. Dla układów współrzędnych innych niż kartezjański 3D, będzie to trzecia współrzędna układu zamiast z. Jeśli układ współrzędnych nie ma trzeciej współrzędnej, to ustawienie zostanie zignorowane.
- **Magnetyzacja\*\_\*\_nieokreślona**: Czy dany parametr ma być wyłączony (traktowany jako niewiadoma przez solver).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintMagnetization/pl&oldid=1569054>"
