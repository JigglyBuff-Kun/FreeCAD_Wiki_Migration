---
title: Złożenie Utwórz złożenie
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

|  |
| --- |
| Złożenie Utwórz złożenie |
| Lokalizacja w menu |
| Złożenie → Utwórz złożenie |
| Środowisko pracy |
| [Złożenie](/Assembly_Workbench/pl "Assembly Workbench/pl") |
| Domyślny skrót |
| A |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| *brak* |
|  |

## Opis

Narzędzie ![](/images/Assembly_CreateAssembly.svg) Utwórz złożenie tworzy bazowe złożenie (obiekt Assembly) w bieżącym dokumencie lub podzłożenie w istniejącym aktywnym złożeniu. Dokument może mieć tylko jedno bazowe złożenie.

Każdy obiekt Assembly jest domyślnie tworzony z obiektem [Origin](/App_OriginGroupExtension "App OriginGroupExtension") i pustym kontenerem Joints.

## Użycie

1. Jeśli dokument ma już jedno lub więcej złożeń: aktywuj złożenie.
2. Jest kilka sposobów na wywołanie tej komendy:
   * Wciśnij przycisk ![](/images/Assembly_CreateAssembly.svg) Utwórz złożenie.
   * Wybierz opcję **Złożenie → ![](/images/Assembly_CreateAssembly.svg) Utwórz złożenie** z menu.
   * Użyj skrótu: A.
3. Zostanie utworzony nowy obiekt Assembly - w dokumencie lub w aktywowanym złożeniu.

## Właściwości

Zobacz również stronę: [Edytor właściwości](/Property_editor/pl "Property editor/pl").

Obiekt **Złożenie** lub formalnie `Assembly::AssemblyObject` ma następujące właściwości:

### Dane

Base

* DANE**Type** (`String`):
* DANE**Material** (`Link`):
* DANE (Hidden)**Meta** (`Map`):
* DANE**Id** (`String`):
* DANE (Hidden)**Uid** (`UUID`):
* DANE**License** (`String`):
* DANE**License URL** (`String`):
* DANE**Color** (`Color`):
* DANE**Placement** (`Placement`):
* DANE**Label** (`String`):
* DANE (Hidden)**Label2** (`String`):
* DANE (Hidden)**Expression Engine** (`ExpressionEngine`):
* DANE (Hidden)**Visibility** (`Bool`):
* DANE (Hidden)**Origin** (`Link`):
* DANE**Group** (`LinkList`):
* DANE (Hidden)**\_ Group Touched** (`Bool`):

### Widok

Display Options

* WIDOK**Display Mode** (`Enumeration`): `Group` (jedyna opcja na razie).
* WIDOK**Show In Tree** (`Bool`): `true` domyślnie.
* WIDOK**Visibility** (`Bool`): `true` domyślnie.

Selection

* WIDOK**On Top When Selected** (`Enumeration`):
* WIDOK**Selection Style** (`Enumeration`):

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateAssembly/pl&oldid=1428845>"