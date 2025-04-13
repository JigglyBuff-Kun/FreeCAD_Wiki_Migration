---
title: MES Nieliniowy materiał mechaniczny
---

|                                                     |
| --------------------------------------------------- |
| MES: Nieliniowy materiał mechaniczny                |
| Lokalizacja w menu                                  |
| Model → Materiały → Nieliniowy materiał mechaniczny |
| Środowisko pracy                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")         |
| Domyślny skrót                                      |
| _brak_                                              |
| Wprowadzono w wersji                                |
| -                                                   |
| Zobacz także                                        |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl")  |
|                                                     |

| Solvery  |
| -------- |
| CalculiX |

## Opis

Tworzy nieliniowy materiał mechaniczny. Obecnie dostępna jest tylko plastyczność z prostym wzmocnieniem (izotropowym). [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Dostępne jest też wzmocnienie kinematyczne.

## Użycie

1. Aby utworzyć nowy obiekt MaterialMechanicalNonlinear:
   1. Dodaj ![](/images/FEM_MaterialSolid.svg) [Materiał dla bryły](/FEM_MaterialSolid/pl "FEM MaterialSolid/pl").
   2. Wybierz go.
   3. Wykonaj jedną z poniższych czynności:
      - Wciśnij przycisk ![](/images/FEM_MaterialMechanicalNonlinear.svg) **Nieliniowy materiał mechaniczny**.
      - Wybierz opcję **Model → Materiały → ![](/images/FEM_MaterialMechanicalNonlinear.svg) Nieliniowy materiał mechaniczny‏‎** z menu.
2. Aby edytować istniejący obiekt MaterialMechanicalNonlinear:
   1. Zaznacz go w [widoku drzewa](/Tree_view/pl "Tree view/pl").
   2. Wybierz model materiału _(wzmocnienie izotropowe (proste) lub [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): wzmocnienie kinematyczne)_.
   3. Zdefiniuj punkty z krzywej naprężenie [MPa] - odkształcenie plastyczne. Pierwszy punkt musi mieć zerowe odkształcenia plastyczne. Wciśnij przycisk ... obok właściwości DANE**Yield Points** aby wprowadzić punkty za pomocą wygodnej listy. Składnia jest opisana w sekcji [Uwagi](#Uwagi).

## Uwagi

- We FreeCAD 0.19 i starszych wersjach, można wprowadzić tylko 3 punkty z krzywej naprężenie - odkształcenie plastyczne. Od wersji 0.20 lista punktów może być dowolnie długa.
- Składnia powinna być następująca:

: ```
stress_1, 0
stress_2, plastic_strain_2
...

    ```

: Z kropką jako separatorem dziesiętnym, ponieważ korzysta z niej CalculiX.

: Przykładowo, aby zdefiniować model biliniowy ze wzmocnieniem dla stali S275:

: ```
275, 0
490, 0.2

    ```

: Lub, aby zdefiniować idealną plastyczność bez wzmocnienia dla tego materiału:

: ```
275, 0

    ```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialMechanicalNonlinear/pl&oldid=1569461>"
