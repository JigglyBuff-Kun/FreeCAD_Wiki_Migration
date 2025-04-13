---
title: Rysunek
---
## Wprowadzenie

W FreeCAD słowo "Rysunek" jest zwykle używane w odniesieniu do rzutu 2D [modelu 3D](/Model/pl "Model/pl"). Zazwyczaj jest on tworzony za pomocą środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").

## Użycie

1. Zacznij od już zbudowanego [modelu 3D](/Model/pl "Model/pl"), utworzonego na przykład za pomocą środowiska [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl"). W rzeczywistości każdy obiekt, który ma [Kształt](/Shape/pl "Shape/pl"), w tym obiekty 2D, będzie odpowiedni.
2. Przejdź do środowiska pracy [Rysunek Techniczny](/TechDraw_Workbench/pl "TechDraw Workbench/pl").
3. Naciśnij ![](/images/TechDraw_PageDefault.svg) [Wstaw nową domyślną stronę rysunku](/TechDraw_PageDefault/pl "TechDraw PageDefault/pl") lub ![](/images/TechDraw_PageTemplate.svg) [Wstaw nową stronę przy użyciu szablonu](/TechDraw_PageTemplate/pl "TechDraw PageTemplate/pl"), aby utworzyć stronę.
4. Wybierz istniejący model, a następnie naciśnij ![](/images/TechDraw_View.svg) [Wstaw widok](/TechDraw_View/pl "TechDraw View/pl") lub ![](/images/TechDraw_ProjectionGroup.svg) [Wstaw grupę rzutów](/TechDraw_ProjectionGroup/pl "TechDraw ProjectionGroup/pl").
5. Zostanie utworzony rzut 2D na stronę. Możesz teraz dostosować jego właściwości, takie jak DANE**Skala**, DANE**Obrót** i DANE**Kierunek**.
6. Gdy rysunek będzie gotowy, możesz nacisnąć ![](/images/TechDraw_ExportPageSVG.svg) [Wyeksportuj stronę do formatu SVG](/TechDraw_ExportPageSVG/pl "TechDraw ExportPageSVG/pl"), ![](/images/TechDraw_ExportPageDXF.svg) [Wyeksportuj stronę do formatu DXF](/TechDraw_ExportPageDXF/pl "TechDraw ExportPageDXF/pl"), lub użyć narzędzia [Std: Eksportuj](/Std_Export/pl "Std Export/pl"), aby wyeksportować stronę do formatu SVG, DXF lub PDF do dalszego wykorzystania w innym oprogramowaniu lub do wydrukowania.

## Uwagi

W nieformalnym użyciu "Rysunek" może być dowolną figurą geometryczną widoczną w [Widoku 3D](/3D_view/pl "3D view/pl"), a zatem jego pojęcie może być mylone z pojęciem "[Zawartości](/Body/pl "Body/pl")", "[Części](/Part/pl "Part/pl")" lub "[modelu](/Model/pl "Model/pl")".

Jednakże, gdy wymagana jest większa precyzja, należy dokonać rozróżnienia.

* "[Zawartość](/Body/pl "Body/pl")" *([Zawartość](/PartDesign_Body "PartDesign Body") środowiska Projekt Części)* jest obiektem pochodnym od [Cechy środowiska Część](/Part_Feature/pl "Part Feature/pl") *(klasa`Part::Feature`)*, utworzonym za pomocą środowiska pracy [Projekt Części](/PartDesign_Workbench/pl "PartDesign Workbench/pl").
* "[Part](/Part/pl "Part/pl")" *([App Part](/App_Part/pl "App Part/pl"))* służy do grupowania kilku "[Zawartości](/Body/pl "Body/pl")" w celu utworzenia złożenia.
* "Rysunek" jest rzutem 2D obiektu "Zawartości" lub "Części".

Retrieved from "<http://wiki.freecad.org/index.php?title=Drawing/pl&oldid=1477495>"