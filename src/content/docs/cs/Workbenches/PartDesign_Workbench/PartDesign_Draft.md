---
title: Návrh dílu Zkosení plochy
---
|  |
| --- |
| PartDesign Draft |
| Umístění Menu |
| Part Design -> Draft |
| Pracovní stoly |
| [Part Design](/PartDesign_Workbench/cs "PartDesign Workbench/cs") |
| Výchozí zástupce |
| None |
| Představen ve verzi |
| - |
| Viz také |
| None |
|  |

## Description

### Popis

Tento nástroj vytváří úhlové zkosení na vybrané ploše objektu. Ve stromu projektu je vytvořena nová samostatné položka (následovaná pořadovým číslem jestliže v dokumentu už zkosení).

|  |  |
| --- | --- |
| Select one or more faces of the object before starting the tool. Here, 2 faces have been selected.    Showing Draft Parameters in TaskPanel.    2 faces have been added, and a 10 deg. draft applied. The bottom plane has remained dimensionally stable, while the draft has made the top plane smaller.    The Neutral Plane has been changed to the top. Now, the top plane has stayed dimensionally stable, while the draft has made the bottom plane larger.    Pull direction is set to the lower right edge, resulting in the draft pulling to the left.    Checking the Reverse Direction box has applied an inward draft rather than outward. |  |

## Usage

### Add a draft

|  |  |
| --- | --- |
| Vyberte jednu nebo více ploch na objektu před spuštěním tohoto nástroje. Zde byly vybrány 2 plochy.    Zobrazení parametru zkosení v panelu nástrojů.    Byly přidány 2 plochy a na nich aplikováno zkosení 10 stupňů. Spodní rovina zůstává rozměrově stejná, zatímco zkosení zmenšilo horní rovinu.    Neutrální rovina byla změněna na horní povrch. Nyní zůstane rozměrově stejná horní rovina a zkosení zvětší spodní rovinu.    Směr vytažení je nastaven na pravou dolní hranu, což má za následek vytažení zkosení doleva.    Zakliknutí políčka pro Reverzní směr změní směr zkosení z dovnitř na ven. | Použití  * Vyberte jednu nebo více ploch objektu, potom spusťte tento nástroj buď kliknutím na jeho ikonu nebo výběrem v menu. * Na panelu nástrojů v parametrech zkosení nastavte požadované parametry a/nebo volby jak je popsáno dále. * Klikněte na OK pro potvrzení. * Chcete-li zkosení po potvrzení dodatečně upravit, buď dvojklikněte na položku zkosení ve stromu projektu nebo klikněte pravým tlačítkem na zkosení a vyberte **Edit Draft (Úprava zkosení)**.  Parametry a VolbyPřidání plochy / Odebrání plochy Klikněte na Přidat plochu nebo Odebrat plochu, potom vyberte jednu plochu pro aktualizaci seznamu aktivních ploch. Opakujte pokud je potřeba. Úhel zkosení Zadejte úhel zkosení vložením hodnoty nebo kliknutím na šípky nahoru/dolu. Zadaný úhel zkosení je zobrazen v reálném čase. Neutrální rovina Klikněte na Neutrální rovinu, potom vyberte rovinu, jejíž rozměr se nemá změnit. Změna je provedena v reálném čase. Směr vytažení Klikněte na Směr vytažení (Pull Direction), potom vyberte hranu. Směr vytažení je funkční pouze pokud je nastavena Neutrální rovina. Výsledky mohou být nepředvídatelné. Reverzní směr vytažení Zaklikávací políčko Reverzní směr vytažení (Reverse Pull Direction) přehodí zkosení z pozitivního na negativní úhel. Zvláštní případy Nástroj Zkosení funguje pouze na plochách, které jsou k sobě kolmé. Jsou-li u plochy, kterou chcete zkosit připojeny nějaké tangenciální (dotykové) plochy, akce skončí neúspěchem. Častý důvod neúspěchu je pokus o zkosení ploch, které již mají zkosené hrany nebo zaoblení (to jsou tangenciální plochy). V takovém případě odeberte tangenciální (dotykové) plochy a po zkosení plochy opět aplikujte zkosení hran nebo zaoblení. |

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Edit a draft

1. Do one of the following:
   * Double-click the Draft object in the [Tree view](/Tree_view "Tree view").
   * Right-click the Draft object in the [Tree view](/Tree_view "Tree view") and select **Edit Draft** from the context menu.
2. The **Draft parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Options

* **Add face**: Add faces to the selection by pressing the Add face button and selecting more faces.
* **Remove face**: Choose a way to remove faces from the selection:
  + Select one or more faces in the list and press the Del key or right-click the list and select **Remove** from the context menu.
  + Press the Remove face button. All previously selected faces are highlighted in purple. Select each face to be removed.
* **Draft angle**: Set the Draft angle either by entering a value or by clicking the up/down arrows.
* **Neutral plane**: Set the the neutral plane by pressing the Neutral plane button and selecting the plane that must not change dimensionally.
* **Pull direction**: Set the the pull direction by pressing the Pull direction button, then select an edge. Pull Direction is only effective if the Neutral Plane has been set. Results can be unpredictable.
* **Reverse pull direction**: Invert the pull direction by checking the **Reverse pull direction** checkbox. This will toggle the draft between positive and negative angles.

## Notes

* The Draft tool will only work on faces that are not tangentially connected to other faces. A common mistake is to attempt to apply draft to a face that already has a fillet applied to it. To solve this, remove the fillet, apply the draft as needed, then re-apply the fillet.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Draft object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Údaje**Angle** (`Angle`): Cannot be negative. Default: `1.5 °`.
* Údaje**Reversed** (`Bool`): Default: `false`.
* Údaje**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Údaje**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Údaje (hidden)**Add Sub Shape** (`PartShape`)
* Údaje (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Údaje (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Draft

* Údaje**Neutral Plane** (`LinkSub`): Sub-link to the parent feature's list containing the neutral plane.
* Údaje**Pull Direction** (`LinkSub`)

Part Design

* Údaje**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Draft/cs&oldid=1335709>"