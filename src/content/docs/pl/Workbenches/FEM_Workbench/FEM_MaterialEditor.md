---
title: MES Edytor materiału
---

:::caution
TA WERSJA TEGO POLECENIA JEST PRZESTARZAŁAZostało ono zmienione wwersja 1.0 i powyżeji daje dostęp doEdycji materiałów.
:::

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| MES: Edytor materiału                                                                                                           |
| Lokalizacja w menu                                                                                                              |
| Model → Materiały → Edytor materiału                                                                                            |
| Środowisko pracy                                                                                                                |
| [MES](/FEM_Workbench/pl "FEM Workbench/pl"), [Architektura](/Arch_Workbench/pl "Arch Workbench/pl")                             |
| Domyślny skrót                                                                                                                  |
| _brak_                                                                                                                          |
| Wprowadzono w wersji                                                                                                            |
| 0.18                                                                                                                            |
| Zobacz także                                                                                                                    |
| [Architektura: Wybór materiału](/Arch_SetMaterial/pl "Arch SetMaterial/pl"), [Poradnik MES](/FEM_tutorial/pl "FEM tutorial/pl") |
|                                                                                                                                 |

| Solvery |
| ------- |
| All     |

## Opis

**Edytor materiału** umożliwia edycję i zapis informacji zawartych w [materiale programu FreeCAD](/index.php?title=Material/pl&action=edit&redlink=1 "Material/pl (page does not exist)"). Obecnie takie materiały są używane przez środowiska ![](/images/Workbench_FEM.svg) [MES](/FEM_Workbench/pl "FEM Workbench/pl") i ![](/images/Workbench_BIM.svg) [BIM](/BIM_Workbench/pl "BIM Workbench/pl").

![](/images/Material_editor.png)

## Użycie

Edytor materiału można obecnie uruchomić poprzezː

1. ![](/images/Workbench_BIM.svg) [Środowisko pracy BIM](/BIM_Workbench/pl "BIM Workbench/pl"):
   - Przycisk ![](/images/BIM_Material.svg) **Wybór materiału**.
   - Opcję **Architektura → Narzędzia materiałowe → ![](/images/BIM_Material.svg) Materiał** w menu.
2. ![](/images/Workbench_FEM.svg) [Środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl"):
   - Przycisk ![](/images/FEM_MaterialEditor.svg) **Edytor materiału**.
   - Opcję **Model → Materiały → ![](/images/FEM_MaterialEditor.svg) Edytor materiału** w menu.

## Opcje

- **Browser button**: Otwiera zawartość właściwości URL w przeglądarce.
- **Material card**: Umożliwia wybranie predefiniowanego materiału z wypełnionymi polami.
- Open: Otwiera plik .FCMat.
- Save as: Zapisuje zawartość edytora jako nowy plik .FCMat
- **Preview**: Niezaimplementowane.
- **Properties editor**: Umożliwia edycję właściwości materiału.
- Add property: Umożliwia dodanie nowej właściwości użytkownika.
- Delete property: Usuwa wybraną właściwość. Tylko właściwości użytkownika mogą być usunięte.

## Uwagi

- Przyciski OK i Anuluj mają ten sam efekt gdy Edytor materiału nie jest używany bezpośrednio do edycji właściwości materiału istniejącego obiektu.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MaterialEditor/pl&oldid=1542165>"
