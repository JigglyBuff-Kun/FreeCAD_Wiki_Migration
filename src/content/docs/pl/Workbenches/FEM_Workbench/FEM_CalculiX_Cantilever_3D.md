---
title: MES CalculiX belka wspornikowa 3D
---

|                                                                             |
| --------------------------------------------------------------------------- |
| Ćwiczenie                                                                   |
| Temat                                                                       |
| Analiza MES                                                                 |
| Poziom trudności                                                            |
| Początkujący                                                                |
| Czas wykonania                                                              |
| 10 minut                                                                    |
| Autorzy                                                                     |
| [Bernd](http://www.freecadweb.org/wiki/index.php?title=User:Berndhahnebach) |
| Wersja FreeCAD                                                              |
| 0.16.6377 lub nowszy                                                        |
| Pliki z przykładami                                                         |
| _Nie dołączono_                                                             |
| Zobacz również                                                              |
| _-_                                                                         |
|                                                                             |

## Wprowadzenie

Ten przykład ma na celu zaprezentowanie jak prosta analiza metodą elementów skończonych _(**MES**)_ w [środowisku pracy MES](/FEM_Workbench/pl "FEM Workbench/pl") programu FreeCAD wygląda w interfejsie programu i jak można zwizualizować wyniki. Ten przykład ilustruje jak uruchomić analizę i jak zmienić wartość oraz kierunek obciążenia. Ponadto, ponieważ plik przykładu jest dostępny w każdej instalacji programu, jest to przydatne i proste sprawdzenie do uruchomienia dla upewnienia się, że środowisko pracy MES działa prawidłowo.

![](/images/FEM_example01_pic10.png)

## Wymagania

- Kompatybilna wersja programu FreeCAD wskazana w tabeli z informacjami o przykładzie.

  : Użyj opcji **Pomoc → Informacje o FreeCAD** aby sprawdzić jaka wersja programu jest zainstalowana.

- Nie jest wymagane żadne zewnętrzne oprogramowanie aby załadować plik przykładu, obejrzeć siatkę i geometrię oraz zwizualizować wyniki.
- Do ponownego uruchomienia obliczeń na komputerze musi być zainstalowany solver CalculiX. Najprawdopodobniej solver ten został już zainstalowany razem z programem FreeCAD. Jeśli tak nie jest, zobacz stronę [Instalacja środowiska MES](/FEM_Install/pl "FEM Install/pl").

## Przygotuj plik przykładu

### Załaduj plik przykładu

- Uruchom program FreeCAD.
- Jeśli nie jest aktywna strona startowa, załaduj i otwórz ją.
- Otwórz przykład "FemCalculixCantilever3D.FcStd".

![](/images/FEM_example01_pic11.png)

### Aktywuj kontener analizy

- Do pracy z analizą wymagana jest aktywacja kontenera analizy.
- W [widoku drzewa](/Tree_view/pl "Tree view/pl") kliknij dwukrotnie na obiekcie ![](/images/FEM_Analysis.svg) Analiza,
- lub kliknij prawym przyciskiem myszki na obiekcie ![](/images/FEM_Analysis.svg) Analiza i wybierz opcję Aktywuj analizę.

![](/images/FEM_example01_pic12.png)

### Kontener analizy i jego obiekty

- Po aktywacji analizy FreeCAD sam zmieni środowisko pracy na MES.
- Do przeprowadzenia statycznej analizy mechanicznej potrzeba przynajmniej 5 podstawowych obiektów _(lub ich bardziej zaawansowanych odpowiedników)_.

* ![](/images/FEM_Analysis.svg) kontener analizy,

1. ![](/images/FEM_SolverCalculixCxxtools.svg) solver,
2. ![](/images/FEM_MaterialSolid.svg) materiał,
3. ![](/images/FEM_ConstraintFixed.svg) warunek brzegowy utwierdzenia,
4. ![](/images/FEM_ConstraintForce.svg) obciążenie siłą,
5. ![](/images/FEM_FEMMesh.svg) siatka MES.

- W tym przykładzie, wyniki ![](/images/FEM_ResultShow.svg) również są uwzględnione.

### Wizualizacja wyników

1. Upewnij się, że analiza jest aktywna.
2. Upewnij się, że analiza nadal zawiera obiekt wyników, jeśli nie to ponownie załaduj plik przykładu.
3. Dwukrotnie kliknij na obiekcie wyników ![](/images/FEM_ResultShow.svg)bul zaznacz go i wciśnij przycisk ![](/images/FEM_ResultShow.svg) [Pokaż wyniki](/FEM_ResultShow/pl "FEM ResultShow/pl").
4. W oknie dialogowym wybierz `Przemieszczenie z`. Pokazuje `-86.93 mm` w kierunku -z. Ma to sens, ponieważ siła też działa w tym kierunku.
5. Aktywuj pole przy dolnym suwaku do pokazywania przemieszczeń.
6. Suwaka można użyć do wyświetlenia deformacji siatki w prosty sposób.
7. Sprawdź różne typy wyników żeby zobaczyć jakie wyniki są dostępne.

![](/images/FEM_example01_pic13.png)

### Czyszczenie wyników

1. Upewnij się, że analiza jest aktywna.
2. Aby usunąć wyniki: wciśnij przycisk ![](/images/FEM_ResultsPurge.svg) [Usuń wyniki](/FEM_ResultsPurge/pl "FEM ResultsPurge/pl").

### Uruchamianie analizy

- W [widoku drzewa](/Tree_view/pl "Tree view/pl") kliknij dwukrotnie na obiekcie solvera ![](/images/FEM_SolverCalculixCxxtools.svg).
- W [panelu zadań](/Task_panel/pl "Task panel/pl") obiektu solvera upewnij się, że analiza statyczna jest zaznaczona.
- Wciśnij przycisk Zapisz plik .inp w tym samym panelu zadań. Obserwuj okno wiadomości aż pokaże komunikat "write completed".
- Wciśnij przycisk Uruchom CalculiX. Ponieważ analiza jest bardzo mała, powinna trwać mniej niż sekundę.
- W polu tekstowym powinien się pojawić zielony komunikat "CalculiX done without error!" a w następnej linii "loading result sets ..."
- Właśnie ukończyłeś swoją pierwszą analizę MES we FreeCAD jeśli nie było żadnych błędów.
- Wciśnij przycisk Zamknij w oknie dialogowym.
- Nowy obiekt wyników powinien być utworzony. Wiesz już jak wizualizować wyniki.
- Jeśli podczas uruchamiania analizy pojawi się błąd _no solver binary_ lub zbliżony, zajrzyj na stronę [Instalacja środowiska MES](/FEM_Install/pl "FEM Install/pl").

![](/images/FEM_example01_pic14.png)

### Szybkie uruchamianie analizy

- W widoku drzewa zaznacz obiekt solvera ![](/images/FEM_SolverCalculixCxxtools.svg) w obrębie kontenera analizy ![](/images/FEM_Analysis.svg).
- Wciśnij przycisk ![](/images/FEM_SolverRun.svg) [Uruchom solver](/FEM_SolverRun/pl "FEM SolverRun/pl").
- Plik wejściowy solvera CalculiX zostanie zapisany, CalculiX będzie uruchomiony i pojawi się obiekt wyników.

### Zmienianie wartości i kierunku działania siły

- W [widoku drzewa](/Tree_view/pl "Tree view/pl") rozwiń ![](/images/FEM_ResultShow.svg) CCX_Results i wybierz obiekt ![](/images/FEM_MeshResult.svg) ResultMesh a następnie wciśnij klawisz Spacja.
  - **Efekt:** Widoczność siatki MES zostanie wyłączona. Model geometryczny jest wciąż widoczny.
- W [widoku drzewa](/Tree_view/pl "Tree view/pl") dwukrotnie kliknij na obiekcie ![](/images/FEM_ConstraintForce.svg) FEMConstraintForce aby otworzyć jego [panel zadań](/Task_panel/pl "Task panel/pl")
- W oknie dialogowym zmień wartość siły na **500000000 N = 500 MN** (**Uwaga:** jednostką siły w oknie dialogowym musi być [**N**])
- Wybierz jedną z długich krawędzi w kierunku x na modelu geometrycznym.
- Wciśnij przycisk Kierunek.
  - **Efekt:** Czerwone strzałki symbolizujące siłę zmienią kierunek na x, przedstawiając zmianę kierunku działania siły.
- Ponieważ przyłożone ma być obciążenie rozciągające, należy zaznaczyć pole Odwróć kierunek poprzez kliknięcie na nim.
- Czerwone strzałki symbolizujące siłę zmienią zwrot.
- Wciśnij przycisk OK w oknie dialogowym.

![](/images/FEM_example01_pic15.png)

- Wiesz już jak uruchomić analizę i zwizualizować wyniki.
- Przemieszczenie w kierunku x powinno wynosić 18.95 mm.

![](/images/FEM_example01_pic16.png)

## Co dalej?

- Ukończyłeś podstawowy przykład dla [środowiska MES](/FEM_Workbench/pl "FEM Workbench/pl").
- Jesteś gotowy na drugi przykład [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl").
- Utworzymy belkę wspornikową od zera a wyniki porównamy z teorią belek.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_CalculiX_Cantilever_3D/pl&oldid=1334268>"
