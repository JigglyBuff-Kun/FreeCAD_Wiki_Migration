---
title: MES Warunek brzegowy gęstości prądu
---

|                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Warunek brzegowy gęstości prądu                                                                                                                                                              |
| Lokalizacja w menu                                                                                                                                                                                |
| Model → Warunki brzegowe elektromagnetyczne → Warunek brzegowy gęstości prądu                                                                                                                     |
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

Tworzy warunek brzegowy MES gęstości prądu. Używane z równaniami [magnetodynamicznym](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl"), [magnetodynamicznym 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl") i [statycznym przewodzenia prądu](/FEM_EquationStaticCurrent/pl "FEM EquationStaticCurrent/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintCurrentDensity.svg) Warunek brzegowy gęstości prądu.
   - Wybierz opcję **Model → Warunki brzegowe elektromagnetyczne → ![](/images/FEM_ConstraintCurrentDensity.svg) Warunek brzegowy gęstości prądu** z menu.
2. Wciśnij przycisk Dodaj.
3. W [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego chcesz przypisać warunek brzegowy.

## Opcje

To okno dialogowe zawiera następujące ustawienia:

![](/images/FEM_CurrentDensity_dialog.png)

- **Mode** - [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Wybór między trybem Custom (wybrane kierunki) i Normal (kierunek normalny).
- **Gęstość prądu\_\*\_1**: Część rzeczywista/urojona gęstości prądu w kierunku x w A/m².  
   Dla układów współrzędnych innych niż kartezjański 3D, będzie to pierwsza współrzędna układu zamiast x.
- **Gęstość prądu\_\*\_2**: Część rzeczywista/urojona gęstości prądu w kierunku y w A/m².  
   Dla układów współrzędnych innych niż kartezjański 3D, będzie to druga współrzędna układu zamiast y.
- **Gęstość prądu\_\*\_3**: Część rzeczywista/urojona gęstości prądu w kierunku z w A/m².  
   Dla układów współrzędnych innych niż kartezjański 3D, będzie to trzecia współrzędna układu zamiast z. Jeśli układ współrzędnych nie ma trzeciej współrzędnej, to ustawienie zostanie zignorowane.
- **Włącz gęstość prądu\_\***: Czy dany parametr ma być włączony czy wyłączony (traktowany jako niewiadoma przez solver). [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
- **Normalna gęstość prądu\_\*** - [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Część rzeczywista/urojona gęstości prądu normalnej do brzegu w A/m². [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCurrentDensity/pl&oldid=1569097>"
