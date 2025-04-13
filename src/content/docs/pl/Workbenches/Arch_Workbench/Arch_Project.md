---
title: Architektura Projekt
---
:::caution
TO NARZĘDZIE JEST PRZESTARZAŁENie będzie ono dostępne wwersja 1.0 i powyżej. Zamiast tego należy użyć narzędziaProjekt.
:::

|  |
| --- |
| Architektura: Projekt |
| Lokalizacja w menu |
| Architektura → Projekt |
| Środowisko pracy |
| [Architektura](/Arch_Workbench/pl "Arch Workbench/pl") |
| Domyślny skrót |
| P O |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Teren](/Arch_Site/pl "Arch Site/pl"), [Budowla](/Arch_Building/pl "Arch Building/pl") |
|  |

## Opis

**Projekt** jest specjalnym obiektem odpowiednim do zapewnienia lepszej kompatybilności z plikami [IFC](/Arch_IFC/pl "Arch IFC/pl"). Wymagane jest, aby każdy plik IFC zawierał jednostkę [IfcProject](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifcproject.htm). IfcProject jest głównie używany do definiowania ogólnych ustawień projektu, takich jak systemy projekcji, dla kompatybilności z GIS, lub systemy jednostek.

Podczas eksportowania modelu FreeCAD do formatu pliku IFC, jeśli Twój model nie zawiera żadnego obiektu Projektu, zostanie on automatycznie utworzony domyślnie, co w większości przypadków będzie wystarczające. Jednakże, możesz chcieć dostosować ustawienia projektu, wtedy dodanie obiektu Projektu może być przydatne. Podczas importowania pliku IFC, obiekt Projektu zostanie zawsze utworzony. Jednakże, jeśli nie zamierzasz go używać, możesz po prostu go usunąć po imporcie.

Należy zauważyć, że chociaż do Projektu można dodać dowolny inny obiekt BIM, czego standard IFC nie zabrania, powszechnym sposobem postępowania jest zawsze posiadanie tylko obiektów [teren](/Arch_Site/pl "Arch Site/pl") lub [budynek](/Arch_Building/pl "Arch Building/pl") jako bezpośrednich pochodnych obiektów projektu. Wszystkie inne obiekty BIM powinny znajdować się wewnątrz tych terenów lub budynków. Sam Projekt powinien zawsze znajdować się na szczycie struktury modelu, czyli nie powinien być zawarty w żadnym innym obiekcie.

## Użycie

1. Naciśnij przycisk ![](/images/Arch_Project.svg) **Projekt** lub naciśnij klawisze P, a następnie O.
2. Dodaj dowolny obiekt do projektu, przeciągając i upuszczając go na projekt w [Widoku drzewa](/Tree_view/pl "Tree view/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Project/pl&oldid=1468855>"