---
title: Architektura Przełącz flagę Brep IFC
---
:::caution
POLECENIE TO JEST CZĘŚCIĄ ZINTEGROWANEGO środowiska pracyBIMw V1.0Ta strona została zaktualizowana dla tej wersji.
:::

|  |
| --- |
| BIM: Przełącz flagę Brep IFC |
| Lokalizacja w menu |
| Narzędzia → Przełącz flagę Brep IFC |
| Środowisko pracy |
| [BIM](/BIM_Workbench/pl "BIM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| - |
| Zobacz także |
| [Przeglądarka IFC](/Arch_IfcExplorer/pl "Arch IfcExplorer/pl"), [IFC](/Arch_IFC/pl "Arch IFC/pl") |
|  |

## Opis

Narzędzie **Przełącz flagę Brep IFC** włącza / wyłącza flagę IfcBrep wybranego obiektu [BIM](/BIM_Workbench/pl "BIM Workbench/pl") *(domyślnie jest ona zawsze wyłączona)*. Jeśli flaga jest włączona, podczas eksportu do IFC obiekt zostanie wyeksportowany jako obiekt [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm), nawet jeśli możliwy jest eksport wyższego poziomu, taki jak IfcExtrudedAreaSolid lub IfcBooleanResult. Chociaż obiekty IfcFacetedBrep są cięższe i mniej edytowalne (tracą niektóre informacje o geometrii, takie jak historia modelowania), często są mniej podatne na błędy. Ustawienie tej flagi pozwala rozwiązać niektóre przypadki obiektów, które nie są eksportowane poprawnie, gdy flaga nie jest ustawiona.

## Użycie

1. Wybierz obiekt Architektury.
2. Wybierz przycisk z menu **Narzędzia → ![](/images/Arch_ToggleIfcBrepFlag.svg) Przełącz flagę Brep IFC**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/pl&oldid=1468892>"