---
title: MES Solver Z88
---

|                                                    |
| -------------------------------------------------- |
| MES: Solver Z88                                    |
| Lokalizacja w menu                                 |
| Rozwiąż → Solver Z88                               |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| S Z                                                |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Polecenie **SolverZ88** umożliwia użycie solvera [Z88](https://en.wikipedia.org/wiki/Z88_FEM_software). Może być wykorzystane do:

1. Ustawienia parametrów analizy.
2. Wybrania katalogu roboczego.
3. Uruchomienia solvera Z88.

## Instalacja

Do korzystania z solvera Z88 musi być zainstalowana otwarta wersja Z88 _(Z88OS)_:

1. Pobierz plik ZIP ze [strony Z88OS](https://en.z88.de/download-z88os).
2. Rozpakuj plik ZIP do wybranego folderu.
3. W [preferencjach MES](/FEM_Preferences/pl "FEM Preferences/pl") przejdź do zakładki Z88 i ustaw tam ścieżkę do pliku wykonywalnego **z88r**. Jeśli korzystasz z systemu Windows, będzie to ścieżka do pliku z88r.exe w podfolderze ~\bin\win64 katalogu, do którego rozpakowałeś plik ZIP.

## Użycie

1. Utwórz ![](/images/FEM_Analysis.svg) [Kontener analizy](/FEM_Analysis/pl "FEM Analysis/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wybierz opcję **Rozwiąż → ![](/images/FEM_SolverZ88.svg) Solver Z88** z menu.
   - Użyj skrótu klawiszowego S a następnie Z.
3. Dwukrotnie kliknij na obiekcie ![](/images/FEM_SolverZ88.svg) SolverZ88.
4. Wybierz **Typ analizy**.
5. Wciśnij przycisk Zapisz.
6. Wciśnij przycisk Uruchom.

W wyniku tych czynności uw [widoku drzewa](/Tree_view/pl "Tree view/pl") zyskasz obiekt nazwany _Z88_xxx_results_ _(w zależności od uruchomionej symulacji)_. To ten sam rodzaj obiektu jaki uzyskuje się uruchamiając [solver CalculiX](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl"). Zaczynając od tego, możesz wizualizować wyniki przy pomocy [prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl") i [filtrów przycinania](/FEM_Workbench/pl#Menu:_Wyniki "FEM Workbench/pl").

## Preferencje

Zobacz [preferencje Z88](/FEM_Preferences/pl#Z88 "FEM Preferences/pl") aby znaleźć możliwe do ustawienia parametry solvera, takie jak używana metoda rozwiązywania.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_SolverZ88/pl&oldid=1569457>"
