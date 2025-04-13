---
title: MES Siatka MES generowana przez Netgen
---

|                                                    |
| -------------------------------------------------- |
| MES: Siatka MES generowana przez Netgen            |
| Lokalizacja w menu                                 |
| Siatka → Siatka MES generowana przez Netgen        |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| _brak_                                             |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

| Solvery                |
| ---------------------- |
| CalculiX, Mystran, Z88 |

## Opis

Do analizy metodą elementów skończonych konieczna jest dyskretyzacja geometrii do [siatki MES](/FEM_Mesh/pl "FEM Mesh/pl"). To narzędzie korzysta z programu [Netgen](https://www.ngsolve.org/) _(który musi być zainstalowany w systemie)_ do generowania siatki. Siatki Netgen nie są wspierane przez [Elmer](/FEM_SolverElmer/pl "FEM SolverElmer/pl").

W zależności od Twojego systemu operacyjnego i pakietu instalacyjnego, Netgen może być dołączony do programu FreeCAD lub nie. Więcej informacji można znaleźć na stronie [Instalacja środowiska MES](/FEM_Install/pl#Netgen "FEM Install/pl").

## Użycie

1. Wybierz kształt, których chcesz analizować. Dla objętości, musi to być bryła pojedyncza lub złożona. To drugie jest konieczne jeśli część jest wykonana z różnych materiałów _(bryłę złożoną można utworzyć przy pomocy narzędzia [Fragmentacja funkcją logiczną](/Part_BooleanFragments/pl "Part BooleanFragments/pl"))_.
2. Aktywuj narzędzie na jeden z następujących sposobów:
   - Wciśnij przycisk ![](/images/FEM_MeshNetgenFromShape.svg) **Siatka MES generowana przez Netgen**.
   - Wybierz opcję **Siatka → ![](/images/FEM_MeshGmshFromShape.svg) Siatka MES generowana przez Netgen** z menu.
3. Opcjonalnie, ustaw maksymalny/minimalny rozmiar elementów (domyślne ustawienie zwykle tworzy zbyt rzadkie siatki) i rząd elementów (używając pola _Elementy drugiego rzędu_).
4. Opcjonalnie, zmień _Stopień zagęszczenia_ na jedno z gotowych ustawień lub wybierz _Zdefiniowane przez użytkownika_ i ręcznie ustaw parametry.
5. Wciśnij przycisk Zastosuj, aby utworzyć siatkę. [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Opcjonalnie, użyj przycisku Anuluj aby zatrzymać generowanie siatki jeśli używasz nowej implementacji Netgen.
6. Wciśnij przycisk OK aby wygenerować siatkę i zamknąć okno dialogowe. Możesz też kliknąć Anuluj aby anulować zmiany lub tworzenie obiektu siatki.

## Właściwości

- DANE**Max. Size**: Maksymalny rozmiar elementu w mm.
- DANE**Min. Size**: [dostępne w wersji 1.0](/Release_notes_1.0/pl "Release notes 1.0/pl"): Minimalny rozmiar elementu w mm.
- DANE**Second order**: Elementy drugiego rzędu - mają więcej węzłów. Zwykle wystarczy użycie rzadszej siatki aby uzyskać taką samą dokładność jak przy pomocy elementów pierwszego rzędu,
  - `Prawda` _(domyślnie)_ elementy drugiego rzędu _(kwadratowe)_,
  - `Fałsz` elementy pierwszego rzędu _(liniowe)_.
- DANE**Fineness**: Predefiniowane poziomy gęstości siatki.
- DANE**Growth Rate**: Definiuje jak bardzo sąsiednie elementy będzie się różniły rozmiarem.
- DANE**Nb. Segs per Edge**: Definiuje minimalną liczbę segmentów siatki na krawędź.
- DANE**Nb. Segs per Radius**: Definiuje minimalną liczbę segmentów siatki na promień.
- DANE**Optimize**:
  - `Prawda` _(domyślnie)_ stosuje algorytm optymalizacji do poprawy jakości siatki,
  - `Fałsz`.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshNetgenFromShape/pl&oldid=1542232>"
