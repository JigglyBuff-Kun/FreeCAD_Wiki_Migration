---
title: Výkresový Pohled
---
|  |
| --- |
| Drawing View |
| Umístění Menu |
| Drawing → Insert view in drawing |
| Pracovní stoly |
| [Výkres](/Drawing_Workbench/cs "Drawing Workbench/cs"), Complete |
| Výchozí zástupce |
| none |
| Představen ve verzi |
| - |
| Viz také |
| [Výkres A3 na šířku](/Drawing_Landscape_A3/cs "Drawing Landscape A3/cs") |
|  |

Tento nástroj výtváří nový pohled na vybraný objekt v aktivním výkresu.

![Výkres se třemi pohledy: zepředu, shora a izometrický.](/images/Drawing_Views.png)

### Použití

Vyberete objekt buď ve 3D pohledu nebo ze stromu projektu, potom kliknete na nástroj Pohled. Pohled shora v měřítku 1:1 (skutečná velikost) bude standardně umístěn do horní levé části stránky. Někdy tak může být objekt neviditelný je-li příliš malý nebo příliš velký na stránku.

Objekt **Pohled** je vložen do objektu **Stránka** ve stromu projektu. Pro číslování pohledů je za název přidáno tříciferné číslo. Kliknutím na šipku před složkou objektu Stránka se složka rozbalí a zobrazí se v ní obsažené pohledy.

If only the object is selected in the Project Tree, the view is added to the first page of the project. If you have multiple pages in your project please select the object
and the page it should be added to. Then click on the icon to add the view to the selected page.

### Úpravy existujícího pohledu

Ve stromu projektu rozbalíte složku objektu Stránka a vyberete pohled. Jeho parametry mohou být upravovány v záložce Data Pohledu.

![](/images/Drawing_View_Properties.png)

![](/images/Drawing_View_Iso.png)

Izometrický pohled s vypnutou viditelností smooth lines

![](/images/Drawing_View_Iso_SmoothLines.png)

Izometrický pohled se zapnutou viditelností smooth lines

* **Jmenovka**: mění název pohledu ve stromu projektu. Také můžete kliknout na pohled ve stromu a pravým tlačítkem myši Přejmenovat nebo stisknout klávesu F2.
* **Rotace**: otáčí pohled. Například izometrický pohled bude potřebovat otočení o 60 stupňů (podívejte se také dále na parametry směru)
* **Měřítko**: nastaví měřítko pohledu.
* **X**: nastaví vodorovnou pozici pohledu na stránce v milimetrech.
* **Y**: nastaví svislou pozici pohledu na stránce v milimetrech. Všimněte si prosím, že souřadnice (0,0) je umístěna v levém horním rohu stránky, takže čím je vyšší číslo tím níže bude pohled na stránce.
* **Směr**: mění směr pohledu. Je dán hodnotami xyz, které definují vektor kolmý ke stránce. Pohled shora bude (0,0,1), a izometrický bude (1,1,1). Hodnoty mohou být záporné.
* **Zobraz skryté čáry**:  přepíná viditelnost skrytých čar výběrem hodnot *True* nebo *False*.
* **Zobraz Smooth Lines**: přepíná viditelnost smooth lines výběrem hodnot *True* nebo *False*. Smooth lines jsou také nazývány dotykové okraje. Tyto okraje indikují místa, kde jedne povrch přechází v druhý (dotýkají se).

### Other

If you are looking for persective-orthographic toggling in 3D view check [Std PerspectiveCamera](/Std_PerspectiveCamera "Std PerspectiveCamera") and [Std OrthographicCamera](/Std_OrthographicCamera "Std OrthographicCamera")

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing_View/cs&oldid=1461816>"