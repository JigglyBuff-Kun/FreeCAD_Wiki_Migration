---
title: MES Analiza MES
---

|                                                    |
| -------------------------------------------------- |
| MES: Analiza MES                                   |
| Lokalizacja w menu                                 |
| Model → Analiza MES                                |
| Środowisko pracy                                   |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl")        |
| Domyślny skrót                                     |
| S A                                                |
| Wprowadzono w wersji                               |
| -                                                  |
| Zobacz także                                       |
| [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                    |

## Opis

Polecenie **Analiza MES** tworzy kontener do przechowywania wszystkich obiektów analizy metodą elementów skończonych. Ten kontener jest konieczny. Przynajmniej jeden z poniższych obiektów (oprócz siatki) jest potrzebny do analizy mechanicznej:

- [materiał dla bryły](/FEM_MaterialSolid/pl "FEM MaterialSolid/pl"),
- [warunek brzegowy utwierdzenia](/FEM_ConstraintFixed/pl "FEM ConstraintFixed/pl") lub [warunek brzegowy przemieszczenia](/FEM_ConstraintPressure/pl "FEM ConstraintPressure/pl") lub [wiązanie ciała sztywnego](/FEM_ConstraintRigidBody/pl "FEM ConstraintRigidBody/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   - Wciśnij przycisk ![](/images/FEM_Analysis.svg) **Analiza MES**.
   - Wybierz opcję **Model → ![](/images/FEM_Analysis.svg) Analiza MES** z menu.
   - Użyj skrótu klawiszowego: S a następnie A.
2. Zostanie utworzony nowy kontener analizy i ustawiony jako aktywny.
3. Inne obiekty mogą być dodawane lub usuwane do kontenera analizy metodą "przeciągnij i upuść".
4. Aby dodać nowe obiekty MES do dokumentu, analiza musi być aktywna. Podwójne kliknięcie na kontenerze analizy powoduje jego aktywację.

## Właściwości

- DANE**OutpuDir**: Określa katalog roboczy dla analizy.

## Tworzenie skryptów

większość kodu tutaj jest przestarzała w wersji 0.17.

- Utworzenie nowej analizy:

```
MechanicalAnalysis.makeMechanicalAnalysis( name )

```

- Dodanie obiektu do analizy:

```
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [ (object) ]

```

- Usunięcie obiektu z analizy:

```
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove( documentobject )
 App.ActiveDocument.MechanicalAnalysis.Member = member

```

Przykład:

```
import MechanicalAnalysis
analysis = MechanicalAnalysis.makeMechanicalAnalysis("MechanicalAnalysis")
FemGui.setActiveAnalysis(analysis)

addobj = App.ActiveDocument.getObject("MechanicalMaterial")
App.ActiveDocument.MechanicalAnalysis.Member = App.ActiveDocument.MechanicalAnalysis.Member + [addobj]

removeobj = App.ActiveDocument.getObject("MechanicalMaterial")
member = App.ActiveDocument.MechanicalAnalysis.Member
member.remove(removeobj)
App.ActiveDocument.MechanicalAnalysis.Member = member

```

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Analysis/pl&oldid=1569030>"
