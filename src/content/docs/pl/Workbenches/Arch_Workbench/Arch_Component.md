---
title: Architektura Komponent
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| Architektura: Komponent‎‏‎ |
| Lokalizacja w menu |
| 3D/BIM → Narzędzia ogólne 3D → Komponent‎‏‎ |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| C M |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| *brak* |
|  |

## Opis

Tworzy nieparametryczny komponent [BIM](/BIM_Workbench/pl "BIM Workbench/pl") z dowolnego obiektu opartego na [Części](/Part_Workbench/pl "Part Workbench/pl"). Daje to obiektowi opartemu na części te same atrybuty i właściwości co innym obiektom Architektury i pozwala określić, w jaki sposób powinien być eksportowany do IFC poprzez ustawienie jego właściwości DANE**Typ IFC**.

## Użycie

1. Wybierz obiekt oparty na [Części](/Part_Workbench/pl "Part Workbench/pl").
2. Istnieje kilka sposobów wywołania polecenia:
   * Naciśnij przycisk ![](/images/Arch_Component.svg) Komponent.
   * Wybierz z menu opcję **3D/BIM → Narzędzia ogólne 3D → ![](/images/Arch_Component.svg) Komponent**.
   * Użyj skrótu klawiaturowego: C, a następnie M.

## Właściwości

Obiekt Komponent Architektury jest również bazą współdzieloną przez wszystkie inne obiekty Architektury *([ściana](/Arch_Wall/pl "Arch Wall/pl"), [konstrukcja](/Arch_Structure/pl "Arch Structure/pl") itd.)* Dlatego niektóre z jego właściwości i zachowań są wspólne dla wszystkich obiektów Architektury *(z wyjątkiem narzędzi, które nie tworzą obiektów bryłowych, takich jak [Płaszczyzna przekroju](/Arch_SectionPlane/pl "Arch SectionPlane/pl") lub [Osie](/Arch_Axis/pl "Arch Axis/pl"))*.

### Dane

Komponent

* DANE**Dodatki** (`LinkList`): Komponenty architektury mają właściwość obiektu dodanego, która może zawierać odniesienie do dowolnej liczby innych obiektów opartych na [kształcie](/Part_Workbench/pl "Part Workbench/pl"). Kształt tych dodatków zostanie połączony z podstawowym kształtem komponentu, aby uzyskać ostateczny kształt. Zobacz akapit [Uwagi](#Uwagi)

* DANE**Oś** (`Link`): An optional axis or axis system on which this object should be duplicated.

* DANE**Kształt bazowy** (`Link`): Komponenty architektury są zawsze oparte na obiekcie bazowym [kształtu](/Part_Workbench/pl "Part Workbench/pl"). Niektóre typy obiektów będą po prostu używać kształtu bazowego, inne *(na przykład ![](/images/Arch_Wall.svg) [ściana](/Arch_Wall/pl "Arch Wall/pl"))* wykonają na nim dodatkowe operacje, takie jak wyciągnięcie. W przypadku niektórych typów, posiadanie obiektu bazowego nie jest obowiązkowe *(![](/images/Arch_Structure.svg) [konstrukcja](/Arch_Structure/pl "Arch Structure/pl"))*.

* DANE**Klon z** (`Link`): Każdy komponent Architektury może być klonem innego komponentu Architektury tego samego typu *(Ściana może być tylko klonem innej Ściany, itd.)*. Jedynym wyjątkiem jest generyczny komponent architektury *(generowany przez to polecenie)*, który może być klonem dowolnego innego typu *(ściana, struktura, okno itp.)*. Pozwala to na użycie generycznego komponentu Architektury do nadpisania typu innego komponentu.

* DANE**Wysoka rozdzielczość** (`Link`): Komponenty Architektury mogą używać kształtu innego obiektu jako wersji o wyższej rozdzielczości. W tym celu należy ustawić zarówno właściwość Wysoka rozdzielczość, jak i tryb wyświetlania Wysokiej rozdzielczości. Pozwala to na przykład na stworzenie prostej ściany, a następnie wymodelowanie każdej cegły, która ją tworzy, na przykład za pomocą [Sześcian](/Part_Box/pl "Part Box/pl"). Następnie użyj złożenia tych cegieł jako wersji ściany w wysokiej rozdzielczości. Kształt ściany nie jest modyfikowany przez dodanie obiektu wysokiej rozdzielczości. Zmieni się tylko jego reprezentacja w oknie [widoku 3D](/3D_view/pl "3D view/pl"), przyjmując reprezentację wersji wysokiej rozdzielczości zamiast własnej.

* DANE**Obszar poziomy** (`Area`): Obszar rzutu tego obiektu na płaszczyznę XY *(tylko do odczytu)*.

* DANE**Materiał** (`Link`): Wszystkie komponenty Architektury posiadają miejsce na materiał, który może zawierać [Material](/Arch_SetMaterial/pl "Arch SetMaterial/pl") lub [Materiał wielowarstwowy](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl") *(nie wszystkie typy obiektów Architektury wspierają użycie [Materiału wielowarstwowego](/Arch_MultiMaterial/pl "Arch MultiMaterial/pl"))*. Właściwości Rozproszony kolor i Przezroczystość dołączonego materiału zdefiniują kolor kształtu i przezroczystość komponentu Architektury. Materiał będzie importowany i eksportowany do [IFC](/Arch_IFC/pl "Arch IFC/pl"), [OBJ](/Arch_OBJ/pl "Arch OBJ/pl") i [DAE](/Arch_DAE/pl "Arch DAE/pl").

* DANE**Przesuń bazę** (`Bool`): Określa, czy przeniesienie tego obiektu spowoduje przeniesienie jego podstawy.

* DANE**Przesuń z obiektem nadrzędnym** (`Bool`): Gdy komponent jest osadzony wewnątrz innego *(na przykład okno wewnątrz ściany)*, ustawienie tej właściwości na `Prawda` sprawi, że obiekt przesunie się i obróci razem, gdy jego obiekt nadrzędny zostanie przesunięty lub obrócony za pomocą narzędzi [Przesuń](/Draft_Move/pl "Draft Move/pl") lub [Obróć](/Draft_Rotate/pl "Draft Rotate/pl").

* DANE**Długość obwodu** (`Length`): Długość obwodu obszaru poziomego *(tylko do odczytu)*.

* DANE**Kod standardowy** (`String`): Opcjonalny kod standardowy *(OmniClass itp.)* dla tego komponentu.

* DANE**Odjęcia** (`LinkList`): Komponenty architektury mają właściwość obiektu odjęcia, która może zawierać odniesienie do dowolnej liczby innych obiektów opartych na [kształcie](/Part_Workbench/pl "Part Workbench/pl"). Kształt tych obiektów zostanie odjęty od bazowego kształtu komponentu, aby uzyskać ostateczny kształt. Zobacz akapit [Uwagi](#Uwagi).

* DANE**Obszar pionowy** (`Area`): Obszar wszystkich pionowych powierzchni tego obiektu *(tylko do odczytu)*.

IFC

* DANE (Hidden)**Dane IFC** (`Map`):

* DANE (Hidden)**Właściwości IFC** (`Map`):

* DANE**Typ IFC** (`Enumeration`): Każdy komponent architektury, oprócz funkcji zdefiniowanej przez jego typ *(ściana, okno itp.)*, posiada również właściwość Rola, która może dodatkowo definiować rodzaj pełnionej przez niego funkcji. Na przykład [konstrukcja](/Arch_Structure/pl "Arch Structure/pl") może pełnić rolę belki lub słupa. Generyczne komponenty Architektury *(generowane przez to polecenie)* mogą mieć dowolną rolę dostępną w całym środowisku roboczym Architektury. Rola jest używana do definiowania typu obiektu IFC, który ma zostać wyeksportowany podczas [eksport do IFC](/Arch_IFC/pl "Arch IFC/pl").

Atrybuty IFC

* DANE**Opis** (`String`): Wszystkie komponenty Architektury mają pole Opis, które może zawierać dowolny tekst. Jest ono używane podczas [eksportu do IFC](/Arch_IFC/pl "Arch IFC/pl").

* DANE**Id Globalny** (`String`):

* DANE**Typ Obiektu** (`String`):

* DANE**Typ predefiniowany** (`Enumeration`):

* DANE**Tag** (`Enumeration`): Właściwość Tag jest kolejnym polem tekstowym, które może być użyte do nadania dodatkowej niestandardowej tożsamości obiektom.

## Uwagi

* Umieszczenie komponentu archiektury jest stosowane po wykonaniu dodawania i odejmowania, więc są one wykonywane względem obiektu bazowego w jego lokalizacji bazowej. Następnie wynik jest przenoszony do lokalizacji Umiejscowienia.

* Obiekty mogą być dodawane lub usuwane z list dodawania i odejmowania komponentów poprzez zaznaczenie zarówno obiektu, jak i komponentu, a następnie użycie przycisku [Połącz obiekty](/Arch_Add/pl "Arch Add/pl") lub [Usuń komponent](/Arch_Remove/pl "Arch Remove/pl") lub z panelu zadań poprzez dwukrotne kliknięcie komponentu w [Widoku drzewa](/Tree_view/pl "Tree view/pl"). Panel zadań pozwala również sprawdzić, który obiekt jest aktualnie częścią tych list.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Component/pl&oldid=1539883>"