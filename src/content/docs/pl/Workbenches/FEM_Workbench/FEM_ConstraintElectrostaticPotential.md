---
title: MES Warunek brzegowy potencjału elektrostatycznego
---

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Warunek brzegowy potencjału elektrostatycznego                                                                                                                   |
| Lokalizacja w menu                                                                                                                                                    |
| Model → Warunki brzegowe elektromagnetyczne → Warunek brzegowy potencjału elektrostatycznego                                                                          |
| Środowisko pracy                                                                                                                                                      |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                                           |
| Domyślny skrót                                                                                                                                                        |
| _brak_                                                                                                                                                                |
| Wprowadzono w wersji                                                                                                                                                  |
| -                                                                                                                                                                     |
| Zobacz także                                                                                                                                                          |
| [MES: Przykład pojemność dwóch kul](/FEM_Example_Capacitance_Two_Balls/pl "FEM Example Capacitance Two Balls/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                                       |

| Solvery |
| ------- |
| Elmer   |

## Opis

Tworzy warunek brzegowy MES dla potencjału elektrostatycznego. Do użycia razem z równaniem [elektrostatycznym](/FEM_EquationElectrostatic/pl "FEM EquationElectrostatic/pl"), [siły elektrostatycznej](/FEM_EquationElectricforce/pl "FEM EquationElectricforce/pl"), [magnetodynamicznym](/FEM_EquationMagnetodynamic/pl "FEM EquationMagnetodynamic/pl"), [magnetodynamicznym 2D](/FEM_EquationMagnetodynamic2D/pl "FEM EquationMagnetodynamic2D/pl") lub [statycznym przewodzenia prądu](/FEM_EquationStaticCurrent/pl "FEM EquationStaticCurrent/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ConstraintElectrostaticPotential.svg) **Warunek brzegowy potencjału elektrostatycznego**.
   - Wybierz opcję **Model → Warunki brzegowe elektromagnetyczne → ![](/images/FEM_ConstraintElectrostaticPotential.svg) Warunek brzegowy potencjału elektrostatycznego** z menu.
2. Wciśnij przycisk Dodaj.
3. W oknie [widoku 3D](/3D_view/pl "3D view/pl") wybierz obiekt, do którego chcesz przypisać warunek brzegowy.

## Opcje

To okno dialogowe zawiera następujące ustawienia:

![](/images/FEM_ElectrostaticPotential_dialog.png)

- **Warunek brzegowy**: Aby wybrać między warunkiem brzegowym typu Dirichleta (zadany potencjał) a warunkiem brzegowym typu Neumanna (zadany strumień elektryczny/gęstość ładunku powierzchniowego). [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
- **Potencjał**: Potencjał elektryczny w V.
- **Potencjał elektromagnetyczny**: Aby aktywować wprowadzanie składowych pola wektorowego potencjału.
- **x**: Rzeczywista / urojona część potencjału w kierunku x w V.  
   Dla innych układów współrzędnych niż kartezjański 3D, to będzie pierwsza współrzędna układu zamiast x.
- **y**: Rzeczywista/urojona część potencjału w kierunku y w V.  
   Dla innych układów współrzędnych niż kartezjański 3D, to będzie druga współrzędna układu zamiast y.
- **z**: Rzeczywista / urojona część potencjału w kierunku z w V.  
   Dla innych układów współrzędnych niż kartezjański 3D, to będzie trzecia współrzędna układu zamiast z. Jeśli układ nie ma trzeciej współrzędnej, to ustawienie zostanie zignorowane.
- **pola wyboru obok x, y, z**: Aby zadeklarować potencjał w danym kierunku jako niewiadomą dla solvera.
- **Nieskończoność elektryczna**: Opcja założenia, że sferyczna objętość wokół powierzchni rozciąga się w nieskończoność.
- **Definicja potencjału elektrostatycznego**: Opcja ustawienia stałego potencjału.
- **Gęstość ładunku powierzchniowego**: Gęstość ładunku powierzchniowego (strumień elektryczny) w C/m^2. [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl")
- **Jednostka przepustowa**: Licznik ciała _(lub ściany)_ z pojemnością.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintElectrostaticPotential/pl&oldid=1569082>"
