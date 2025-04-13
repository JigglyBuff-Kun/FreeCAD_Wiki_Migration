---
title: PartDesign Grosime Perete
---
|  |
| --- |
| PartDesign Thickness |
| Menu location |
| Part Design → Thickness |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| None |
| Introduced in version |
| - |
| See also |
| [Part Thickness](/Part_Thickness "Part Thickness") |
|  |

## Descriere

Instrumentul **Thickness** lucrează pe un corp solid și îl transformă într-un obiect gol cu pereți groși cu cel puțin o față deschisă, dând fiecărei fațete rămase o grosime uniformă. La unele solide, acest lucru vă permite să accelerați considerabil lucrarea și să evitați extrudările și buzunarele.

![](/images/PartDesign_Thickness_example.svg)

Base solid (A) → Solid with selected face to be opened (B) → Resulting hollow object (C)

## Cum se folosește

### Add a thickness

1. Selectași una sau mai multe fațete pe corpul (Body) activ.
2. Apăsați butonul ![](/images/PartDesign_Thickness.png) **Thickness** .
3. Definiți **Thickness parameters** (see [Options](#Options)).
4. Pentru a adăuga mai multe fațete pentru a deschide, apăsați butonul Add face și selectați o fațetă în vizualizarea 3D.
5. Pentru a șterge fațete selectată anterior, apăsați butonul Remove face și selctați fațeta în vizualizarea 3D view, sau clic dreapta pe eticheta Face în listă și selectați *Remove*.
6. Apăsați OK.

:   *Remember*:

    * Since there must be at least one face for the feature, the last remaining face in the list cannot be removed.

### Edit a thickness

1. Do one of the following:
   * Double-click the Thickness object in the [Tree view](/Tree_view "Tree view")
   * Right-click the Thickness object in the [Tree view](/Tree_view "Tree view") and select **Edit Thickness** from the context menu.
2. The **Thickness parameters** [task panel](/Task_panel "Task panel") opens. See [Options](#Options) for more information.
3. Press the OK button to finish.

## Opţiuni

* **Thickness**: Grosimea peretelui obiectului rezultat. Definiți valoarea dorită.
* **Mode**
  + *Skin*: Selectați această opțiune dacă doriți pentru a obține un articol ca o vază, fără capac, dar cu fund
  + *Pipe*: Selectați această opțiune dacă doriți să obțineți un obiect ca o țeavă, fără cap și fără fund. În acest caz, poate fi convenabil să selectați fațele care trebuie șterse înainte de a porni instrumentul. Ajutați-vă cu vizualizări predefinite sau utilizați tastele numerice.
  + *Recto Verso*:
* **Join Type**
  + *Arc*: îndepărtează marginile exterioare și creează o curbă cu o rază egală cu grosimea definită.
  + *Intersection*:când fațele sunt decalate spre exterior, marginile ascuțite sunt păstrate între faațete.
* **Make thickness inwards**: când sunt bifate, fațetșe sunt deplasate spre interior.

## Notes

* Cel puțin o fațetă care va fi deschisă trebuie selectată.
* Valoarea grosimii nu trebuie să depășească înălțimea celei mai mici fațete a Body.
* Comanda poate eșua cu formele complexe.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A PartDesign Thickness object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Date**Base** (`LinkSub`): Sub-link to the parent feature's list of selected edges and faces.
* Date**Support Transform** (`Bool`): Include the base additive/subtractive shape when used in pattern features. If disabled, only the dressed part of the shape is used for patterning. Default: `false`.
* Date (hidden)**Add Sub Shape** (`PartShape`)
* Date (hidden)**Base Feature** (`Link`): Link to the parent feature.
* Date (hidden)**\_ Body** (`LinkHidden`): Link to the parent body.

Part Design

* Date**Refine** (`Bool`): Refine shape (clean up redundant edges) after adding/subtracting. The default value is determined by the **Automatically refine model after sketch-based operation** preference. See [PartDesign Preferences](/PartDesign_Preferences#General "PartDesign Preferences").

Thickness

* Date**Value** (`Length`): Thickness value. Default: `1 mm`.
* Date**Mode** (`Enumeration`): Mode. `Skin` (default), `Pipe` or `Recto verso`. Only `Skin` is implemented.
* Date**Join** (`Enumeration`): Join type. `Arc` (default) or `Intersection`.
* Date**Reversed** (`Bool`): Apply the thickness towards the solids interior. Default: `false`.
* Date**Intersection** (`Bool`): Enable intersection-handling. Default: `false`.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Thickness/ro&oldid=1424918>"