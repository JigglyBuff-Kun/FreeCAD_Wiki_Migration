---
title: Std Styl kreślenia
---
|  |
| --- |
| Std DrawStyle |
| Menu location |
| Widok → Styl kreślenia → ... |
| Workbenches |
| Wszystkie |
| Default shortcut |
| V 1 - V 7 |
| Introduced in version |
| - |
| See also |
| [Ramka otaczająca](/Std_SelBoundingBox/pl "Std SelBoundingBox/pl") |
|  |

## Opis

Polecenie **Styl kreślenia** może zastąpić efekt WIDOK**wyświetlanego trybu** [właściwości](/Property_editor/pl "Property editor/pl") obiektów w oknie [widoku 3D](/3D_view/pl "3D view/pl").

## Użycie

1. Istnieje kilka sposobów na wywołanie polecenia:
   * Kliknij na czarną strzałkę w dół po prawej stronie przycisku ![](/images/Std_DrawStyleAsIs.svg) Styl kreślenia i wybierz styl z menu podręcznego.
   * W menu przejdź do **Widok → Styl kreślenia** i wybierz styl.
   * W menu kontekstowym okna [widoku 3D](/3D_view/pl "3D view/pl") przejdź do **Styl kreślenia** i wybierz styl.
   * Użyj jednego ze skrótów klawiaturowych: V, a następnie 1, 2, 3, 4, 5, 6 lub 7.

## Dostępne style kreślenia

### Domyślny

Styl **Domyślny** nie nadpisuje właściwości WIDOK**Trybu wyświetlania** obiektów.

![](/images/Std_DrawStyleAsIs_example.png)

4 identyczne obiekty, każdy z innym trybem wyświetlania *(od lewej do prawej: "Tylko punkty", "Szkieletowy", "Cieniowany" i "Cieniowany z krawędziami")* z zastosowanym stylem rysowania "Domyślny".

### Tylko punkty

Styl **Tylko punkty** nadpisuje styl WIDOK**Tryb wyświetlania** obiektów. Ten styl odpowiada trybowi wyświetlania *Tylko punkty*. Wierzchołki są wyświetlane w jednolitych kolorach. Krawędzie i ściany nie są wyświetlane.

![](/images/Std_DrawStylePoints_example.png)

Te same obiekty z zastosowanym stylem rysowania "Tylko punkty"

### Szkieletowy

Styl **Szkieletowy** nadpisuje styl WIDOK**Tryb wyświetlania** obiektów. Ten styl odpowiada trybowi wyświetlania *Szkieletowy*. Wierzchołki i krawędzie są wyświetlane w jednolitych kolorach. Twarze nie są wyświetlane.

![](/images/Std_DrawStyleWireframe_example.png)

Te same obiekty z zastosowanym stylem rysowania "Szkieletowy"

### Cieniowany z ukrytymi krawędziami

Styl **Cieniowany z ukrytymi krawędziami** nadpisuje styl WIDOK**Tryb wyświetlania** obiektów. Obiekty są wyświetlane tak, jakby były przekształcone w siatki trójkątów.

![](/images/Std_DrawStyleHiddenLine_example.png)

Te same obiekty z zastosowanym stylem rysowania "Cieniowany z ukrytymi krawędziami"

### Jednolity z krawędziami

Styl **Jednolity z krawędziami** nadpisuje styl WIDOK**Tryb wyświetlania** obiektów. Wierzchołki, krawędzie i ściany są wyświetlane w jednolitych kolorach.

![](/images/Std_DrawStyleNoShading_example.png)

Te same obiekty z zastosowanym stylem rysowania "Jednolity z krawędziami"

### Cieniowany

Styl **Cieniowany** nadpisuje styl WIDOK**Tryb wyświetlania** obiektów. Ten styl odpowiada trybowi wyświetlania *Cieniowany*. Wierzchołki i krawędzie nie są wyświetlane. Powierzchnie są podświetlane w zależności od ich orientacji.

![](/images/Std_DrawStyleShaded_example.png)

Te same obiekty z zastosowanym stylem rysowania "Cieniowany"

### Cieniowany z krawędziami

Styl **Płaskie linie** zastępuje styl WIDOK**Tryb wyświetlania** obiektów. Ten styl odpowiada trybowi wyświetlania *Cieniowany z krawędziami*. Wierzchołki i krawędzie są wyświetlane w jednolitych kolorach. Powierzchnie są podświetlane w zależności od ich orientacji.

![](/images/Std_DrawStyleFlatLines_example.png)

Te same obiekty z zastosowanym stylem rysowania "Cieniowany z krawędziami"

## Uwagi

* Obiekty w oknie [widoku 3D](/3D_view/pl "3D view/pl") mają również właściwość WIDOK**Styl kreślenia**. Ta właściwość kontroluje typ linii używany dla krawędzi. Polecenie **Std: Styl kreślenia** nie zastępuje tej właściwości.
* Makro do przełączania między dwoma stylami rysowania: [Macro Toggle Drawstyle](/Macro_Toggle_Drawstyle/pl "Macro Toggle Drawstyle/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DrawStyle/pl&oldid=1461015>"