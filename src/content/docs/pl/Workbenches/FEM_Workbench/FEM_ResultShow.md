---
title: MES Pokaż wyniki
---

|                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| MES: Pokaż wyniki                                                                                                                                   |
| Lokalizacja w menu                                                                                                                                  |
| Wyniki → Pokaż wyniki                                                                                                                               |
| Środowisko pracy                                                                                                                                    |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")                                                                                                         |
| Domyślny skrót                                                                                                                                      |
| R S                                                                                                                                                 |
| Wprowadzono w wersji                                                                                                                                |
| -                                                                                                                                                   |
| Zobacz także                                                                                                                                        |
| [Prezentacja graficzna wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                                     |

## Opis

To polecenie otwiera okno dialogowe dla obiektu wyników MES. Obiekt wyników jest automatycznie tworzony gdy analiza MES jest przeprowadzana przy użyciu solvera [Calculix](/FEM_SolverCalculixCxxtools/pl "FEM SolverCalculixCxxtools/pl") lub [Z88](/FEM_SolverZ88/pl "FEM SolverZ88/pl").

Obiekt wyników zawiera siatkę wynikową i pozwala na wizualizację wyników. Jest stworzony, a więc i ograniczony do wyników termomechanicznych. Oprócz [solvera Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl"), może być używany jako alternatywa dla [prezentacji graficznej wyników](/FEM_PostPipelineFromResult/pl "FEM PostPipelineFromResult/pl"). Prezentacja graficzna wyników może być używana do wyświetlania dowolnego typu wyników (również elektrycznych itd.).

Jednostki używane przez obiekt wyników to te ustawione w [systemie jednostek](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl"), podczas gdy dla prezentacji graficznej wyników są to jednostki [SI](https://pl.wikipedia.org/wiki/Uk%C5%82ad_SI).

Wizualizacja wyników jest aktywna tylko gdy okno dialogowe jest otwarte. Jednak ustawienia okna dialogowego są przechowywane w pliku z modelem FreeCAD.

## Użycie

1. Wybierz obiekt wyników w [widoku drzewa](/Tree_view/pl "Tree view/pl").
2. Istnieje kilka sposobów na wywołanie tego polecenia:
   - Wciśnij przycisk ![](/images/FEM_ResultShow.svg) Pokaż wyniki.
   - Wybierz opcję **Wyniki → ![](/images/FEM_ResultShow.svg) Pokaż wyniki** z menu
   - Użyj skrótu klawiszowego R a następnie S.
3. Alternatywnie, możesz również kliknąć dwukrotnie na obiekcie wyników w widoku drzewa.

Gdy okno dialogowe jest otwarte, siatka wynikowa jest automatycznie pokazana.

![](/images/FEM_Result-Object-Dialog.png)

Okno dialogowe jest zaprezentowane po lewej i oferuje następujące możliwościː

- Wybierz typ wyniku a wartości minimalna i maksymalna będą wyświetlone w oknie dialogowym. Siatka wynikowa będzie miała odpowiednią mapę kolorów.

- Wciśnij przycisk **Histogram** aby uzyskać histogram pokazujący ile węzłów siatki ma dany wynik. Histogram może być modyfikowany przyciskami w jego pasku narzędzi. Możliwe jest też zapisanie histogramu jako obrazu przy pomocy przycisku zapisu w jego pasku narzędzi.

- Zaznacz opcję **Pokaż** aby aktywować suwak i zwizualizować deformację siatki wynikowej. Wartość suwaka to współczynnik, przez który wynik _Wielkość przemieszczenia_ jest mnożony.  
  **Uwaga**: Suwak wpływa tylko na wielkość przemieszczenia (przemieszczenie wypadkowe), nie na jego składowe X, Y, Z. Możesz ustawić bezpośrednio wartość współczynnika skali (**Factor**) i zmienić wartość **Slider Max** aby dostosować zakres suwaka.

- [dostępne w wersji 1.1](/Release_notes_1.1/pl "Release notes 1.1/pl"): Kliknij przycisk **Start Animation** aby uruchomić animację wyników z aktualnie ustawionym współczynnikiem skali deformacji. Kliknij **Stop Animation** lub zamknij panel zadań aby zatrzymać animację. Możesz ustawić wartości **Number of Steps per Cycle** (ile stanów/kroków deformacji aż do zdefiniowanego współczynnika skali pokazuje każda pętla), **Number of Cycles** (ile pętli wykonuje animacja) i **Frame Rate** (jak szybko działa animacja - kroki na sekundę).

- Przy pomocy przycisku **Oblicz** możesz przeprowadzać obliczenia na wynikach. Wprowadź dowolne równanie w polu tekstowym pod przyciskiem. Domyślnie jest to równanie _P1-P3_. Oznacza ono, że wynik _Minimalne naprężenie główne_ jest odejmowany od wyniku _Maksymalne naprężenie główne_. Zmienne dla możliwych wyników są wypisane w polu **Równanie zdefiniowane przez użytkownika**.  
  Po wprowadzeniu równania wciśnij przycisk a wynik zostanie pokazany w polach pokazujących wartości minimalną i maksymalną. Mapa kolorów na siatce wynikowej zostanie odpowiednio zmieniona.  
  **Uwaga**: Wyniki obliczeń zawsze mają jednostkę MPa, mm lub T, niezależnie od tego jakiego [układu jednostek](/Preferences_Editor/pl#Jednostki "Preferences Editor/pl") używasz.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ResultShow/pl&oldid=1569443>"
