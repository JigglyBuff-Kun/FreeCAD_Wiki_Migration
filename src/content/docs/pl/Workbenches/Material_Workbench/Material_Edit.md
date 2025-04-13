---
title: Materiał Edycja
---
|  |
| --- |
| Materiał: Edycja |
| Lokalizacja w menu |
| Materiał → Edycja... Model → Materiały → Edytor materiału |
| Środowisko pracy |
| [Materiał](/Material_Workbench/pl "Material Workbench/pl"), [MES](/FEM_Workbench/pl "FEM Workbench/pl") |
| Domyślny skrót |
| *brak* |
| Wprowadzono w wersji |
| 1.0 |
| Zobacz także |
| [MES: Edytor materiału](/FEM_MaterialEditor/pl "FEM MaterialEditor/pl") |
|  |

## Opis

Narzędzie **Materiał: Edycja** zapewnia dostęp do edytora materiałów, który jest częścią systemu obsługi [materiałów](/index.php?title=Material/pl&action=edit&redlink=1 "Material/pl (page does not exist)") we FreeCAD. System materiałów może być używany przez wszystkie środowiska pracy. Obsługuje on właściwości materiałów i właściwości wyglądu obiektów.

![](/images/Material_Edit_Dialog.png)

## Użycie

1. Istnieje kilka sposobów na wywołanie tego edytora:
   * [Środowisko pracy Materiał](/Material_Workbench/pl "Material Workbench/pl"):
     + Wciśnij przycisk ![](/images/Material_Edit.svg) Edycja....
     + Wybierz opcję **Materiał → ![](/images/Material_Edit.svg) Edycja...** z menu.
   * [Środowisko pracy MES](/FEM_Workbench/pl "FEM Workbench/pl"):
     + Wciśnij przycisk ![](/images/FEM_MaterialEditor.svg) [Edytor materiału](/FEM_MaterialEditor/pl "FEM MaterialEditor/pl").
     + Wybierz opcję **Model → Materiały → ![](/images/FEM_MaterialEditor.svg) Edytor materiału** z menu.
   * Wszystkie środowiska pracy:
     1. Wybierz obiekt.
     2. Wykonaj jedną z poniższych czynności:
        + Wybierz opcję **Widok → ![](/images/Material_Edit.svg) Materiał...** z menu.
        + Wybierz opcję **![](/images/Material_Edit.svg) Materiał...** z menu kontekstowego [widoku drzewa](/Tree_view/pl "Tree view/pl") lub [widoku 3D](/3D_view/pl "3D view/pl").
     3. Otwarty zostanie panel zadań **Material**.
     4. Wciśnij przycisk Uruchom edytor.
2. Wybierz materiał z wielopoziomowej listy w lewym panelu. Dostępne są następujące kategorie:
   * Ulubione
   * Ostatnie
   * System
     + Appearance
     + Fluid
     + Machining
     + Patterns
     + Standard
     + Test
   * User
3. Skorzystaj z trzech zakładek w prawym panelu edytora aby zmodyfikować właściwości wybranego materiału:
   * Ogólne:
     + Nazwa
     + Autor
     + Licencja
     + Nadrzędny
     + Źródłowy adres URL
     + Źródło odniesienia
     + Znaczniki
     + Opis
   * Fizyczne - różne właściwości fizyczne
   * Wygląd zewnętrzny:
     + Basic Rendering:
       - Ambient Color
       - Diffuse Color
       - Emissive Color
       - Shininess
       - Specular Color
       - Transparency
4. Opcjonalnie użyj przycisków w zakładce Ogólne:
   * Wciśnij przycisk Nowy aby utworzyć nowy materiał z pustymi właściwościami.
   * Wciśnij przycisk Powiel nowy aby utworzyć nowy materiał z właściwościami skopiowanymi z wybranego materiału.
   * Wciśnij przycisk \* aby dodać wybrany materiał do ulubionych.
5. Jeśli właściwości materiału zostały edytowane: wciśnij przycisk Zapisz aby je zapisać.
6. Wykonaj jedną z poniższych czynności:
   * Wciśnij przycisk OK aby potwierdzić wybór materiału i zamknąć edytor.
   * Wciśnij przycisk Anuluj aby anulować wybór materiału i zamknąć edytor. To nie spowoduje anulowania zmian właściwości materiału, które zostały już zapisane.
7. Jeśli panel zadań **Material** jest otwarty: wciśnij przycisk Zamknij aby go zamknąć.

Retrieved from "<http://wiki.freecad.org/index.php?title=Material_Edit/pl&oldid=1540811>"