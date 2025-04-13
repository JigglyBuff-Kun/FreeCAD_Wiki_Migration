---
title: Środowisko pracy Krzywe
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

## Wprowadzenie

![](/images/Curves_workbench_icon.svg)

Ikonka FreeCAD dla zewnętrznego środowiska pracy Krzywe.

Środowisko pracy Krzywe to [Zewnętrzne środowisko pracy](/External_workbenches/pl "External workbenches/pl") oparte na bazie kodu Python z kolekcją narzędzi do krzywych i powierzchni NURBS. To środowisko pracy zostało opracowane przy użyciu FreeCAD Master i OCC 7.4.

Uwaga: Niektóre narzędzia mogą nie działać z wcześniejszymi wersjami.

## Instalacja

Pobierz środowisko pracy Krzywe poprzez ![](/images/Std_AddonMgr.svg). [Menadżer dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl"). Wybierz z menu opcję **Przybory → Menadżer dodatków**.

## Bibliografia

- Deweloper: @Chris_G
- GitHub: <https://github.com/tomate44/CurvesWB>
- Dyskusja: <https://forum.freecad.org/viewtopic.php?f=8&t=22675>
- Poradnik YouTube z użyciem środowiska pracy Krzywe: <https://www.youtube.com/watch?v=ZVdbvxmJ3Mo>
- Poradnik Dailymotion, butelka z przypływem, demonstracja środowiska pracy Krzywe: <https://www.dailymotion.com/video/x6bo9a6>

## Przybory

Z ostatnią aktualizacją, kolejność narzędzi została dopasowana do opcji menu w wersji 0.6.59 i niektóre brakujące narzędzia zostały dodane.

### Narzędzia Krzywe

- ![](/images/Curves_Line.svg) [Parametryczna linia](/Curves_Line/pl "Curves Line/pl"): Tworzy parametryczną linię między dwoma wierzchołkami.

- ![](/images/Curves_EditableSpline.svg) [Edytowalna krzywa złożona](/Curves_EditableSpline/pl "Curves EditableSpline/pl"): Tworzy edytowalną krzywą złożoną.

- ![](/images/Curves_MixedCurve.svg) [Krzywa mieszana](/Curves_MixedCurve/pl "Curves MixedCurve/pl"): Tworzy trójwymiarową krzywą jako przecięcie 2 rzutowanych krzywych.

- ![](/images/Curves_ExtendCurve.svg) [Rozszerz krzywą](/Curves_ExtendCurve/pl "Curves ExtendCurve/pl"): Wydłuża wybraną krawędź.

- ![](/images/Curves_JoinCurve.svg) [Połącz krzywą](/Curves_JoinCurve/pl "Curves JoinCurve/pl"): Łączy wybrane krawędzie w krzywe złożone.

- ![](/images/Curves_SplitCurve.svg) [Podziel krzywą](/Curves_SplitCurve/pl "Curves SplitCurve/pl"): Dzieli wybraną krawędź.

- ![](/images/Curves_Discretize.svg) [Dyskretyzuj](/Curves_Discretize/pl "Curves Discretize/pl"): Dyskretyzuje krawędź lub polilinię.

- ![](/images/Curves_Approximate.svg) [Aproksymuj](/Curves_Approximate/pl "Curves Approximate/pl"): Aproksymuje punkty do krzywej NURBS lub powierzchni.

- ![](/images/Curves_Interpolate.svg) [Interpoluj](/Curves_Interpolate/pl "Curves Interpolate/pl"): Interpoluje punkty z krzywą złożoną.

- ![](/images/Curves_ParametricBlendCurve.svg) [Krzywa łącząca](/Curves_ParametricBlendCurve/pl "Curves ParametricBlendCurve/pl"): Tworzy parametryczną krzywą łączącą między dwiema krawędziami.

- ![](/images/Curves_ParametricComb.svg) [Wykres grzebienia](/Curves_ParametricComb/pl "Curves ParametricComb/pl"): Tworzy parametryczny wykres grzebienia na wybranych krawędziach.

- ![](/images/Curves_CurveOnSurface.svg) [Krzywa na powierzchni](/Curves_CurveOnSurface/pl "Curves CurveOnSurface/pl"): Rzutuje krzywą na obiekt powierzchni.

### Narzędzia Powierzchnia

- ![](/images/Curves_ZebraTool.svg) [Narzędzie Zebra](/Curves_ZebraTool/pl "Curves ZebraTool/pl"): Tekstura Zebra do inspekcji powierzchni.

- ![](/images/Curves_TrimFace.svg) [Przytnij ścianę](/Curves_TrimFace/pl "Curves TrimFace/pl"): Przycina ścianę rzutowaną krzywą.

- ![](/images/Curves_IsoCurve.svg) [Krzywa iso](/Curves_IsoCurve/pl "Curves IsoCurve/pl"): Nakłada siatkę zorientowaną w UV na wybrane powierzchnie.

- ![](/images/Curves_SketchOnSurface.svg) [Szkic na powierzchni](/Curves_SketchOnSurface/pl "Curves SketchOnSurface/pl"): Mapuje szkic na powierzchnię.

- ![](/images/Curves_Sweep2Rails.svg) [Sweep2Rails](/Curves_Sweep2Rails/pl "Curves Sweep2Rails/pl"):

- ![](/images/Curves_ProfileSupport.svg) [Płaszczyzna podparcia profilu](/Curves_ProfileSupport/pl "Curves ProfileSupport/pl"): Tworzy płaszczyznę podparcia dla szkiców.

- ![](/images/Curves_PipeshellProfile.svg) [Profil Pipeshell](/Curves_PipeshellProfile/pl "Curves PipeshellProfile/pl"): Tworzy obiekt Profile dla PipeShell.

- ![](/images/Curves_Pipeshell.svg) [Pipeshell](/Curves_Pipeshell/pl "Curves Pipeshell/pl"): Tworzy obiekt przeciągnięcia Pipeshell.

- ![](/images/Curves_GordonSurface.svg) [Powierzchnia Gordona](/Curves_GordonSurface/pl "Curves GordonSurface/pl"): Tworzy powierzchnię z sieci krzywych.

- ![](/images/Curves_SegmentSurface.svg) [Podziel powierzchnię](/Curves_SegmentSurface/pl "Curves SegmentSurface/pl"): Dzieli powierzchnię na krzywych iso.

- ![](/images/Curves_CompressionSpring.svg) [Sprężyna ściskająca](/Curves_CompressionSpring/pl "Curves CompressionSpring/pl"): Tworzy sprężynę ściskającą.

- ![](/images/Curves_ReflectLines.svg) [Linie odbicia](/Curves_ReflectLines/pl "Curves ReflectLines/pl"): Tworzy linie odbicia na kształcie zgodnie z kierunkiem widoku.

- ![](/images/Curves_MultiLoft.svg) [MultiLoft](/Curves_MultiLoft/pl "Curves MultiLoft/pl"): Przeciąga obiekty profili utworzone z wielu równoległych ścian.

- ![](/images/Curves_BlendSurf2.svg) [BlendSurface](/Curves_BlendSurf2/pl "Curves BlendSurf2/pl"): Tworzy powierzchnię między dwiema krawędziami z pewną ciągłością z ich ścianami podparcia.

- ![](/images/Curves_BlendSolid.svg) [BlendSolid](/Curves_BlendSolid/pl "Curves BlendSolid/pl"): Tworzy bryłę między dwiema krawędziami z pewną ciągłością z ich kształtami podparcia.

- ![](/images/Curves_FlattenFace.svg) [Flatten face](/Curves_FlattenFace/pl "Curves FlattenFace/pl"): Tworzy płaską ścianę ze ścian stożkowych lub walcowych.

- ![](/images/Curves_RotationSweep.svg) [Rotation Sweep](/index.php?title=Curves_RotationSweep/pl&action=edit&redlink=1 "Curves RotationSweep/pl (page does not exist)"): Przeciąga profile wzdłuż ścieżki lub punktu.

- ![](/images/Curves_ZebraTool.svg) [Title](/index.php?title=Curves_SurfaceAnalysis/pl&action=edit&redlink=1 "Curves SurfaceAnalysis/pl (page does not exist)"): <- Zła ikona i nazwa! - (Curves SurfaceAnalysis) Tworzy mapy analizy wizualnej na wybranych kształtach.

- ![](/images/Curves_DraftAnalysis.svg) [Analiza pochylenia](/Curves_DraftAnalysis/pl "Curves DraftAnalysis/pl"): Koloruje powierzchnię obiektu aby zwizualizować kąty pochylenia.

- ![](/images/Curves_TruncateExtend.svg) [Truncated Extend](/Curves_TruncateExtend/pl "Curves TruncateExtend/pl"): Tnie kształt i skraca go lub wydłuża o podaną odległość.

- ![](/images/Curves_WaterlineCurves.svg) [WaterLine](/Curves_WaterlineCurves/pl "Curves WaterlineCurves/pl"): Tworzy krzywe waterline na wybranych ścianach.

### Różne narzędzia

- ![](/images/Curves_GeomInfo.svg) [GeomInfo](/Curves_GeomInfo/pl "Curves GeomInfo/pl"): Przełącza wyświetlanie informacji o wybranych kształtach.

- ![](/images/Curves_ExtractSubshape.svg) [Extract subshape](/index.php?title=Curves_ExtractSubshape/pl&action=edit&redlink=1 "Curves ExtractSubshape/pl (page does not exist)"): Tworzy nieparametryczne kopie wybranych kształtów podrzędnych.

- ![](/images/Curves_ParametricSolid.svg) [Parametryczna bryła](/Curves_ParametricSolid/pl "Curves ParametricSolid/pl"): Tworzy parametryczną bryłę z wybranych ścian.

- ![](/images/Curves_PasteSVG.svg) [Wklej zawartość SVG](/Curves_PasteSVG/pl "Curves PasteSVG/pl"): Wkleja zawartość SVG ze schowka.

- ![](/images/Curves_ToConsole.svg) [Obiekty do konsoli](/Curves_ToConsole/pl "Curves ToConsole/pl"): Przenosi obiekty do konsoli.

- ![](/images/Curves_AdjacentFaces.svg) [Wybierz przyległe ściany](/Curves_AdjacentFaces/pl "Curves AdjacentFaces/pl"): Wybiera przyległe ściany wskazanego kształtu podrzędnego.

- ![](/images/Curves_BSplineToConsole.svg) [Krzywa złożona do konsoli](/Curves_BSplineToConsole/pl "Curves BSplineToConsole/pl"): Tworzy skrypt Pythona aby zbudować wybraną krzywą złożoną lub geometrie Béziera.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_Workbench/pl&oldid=1570347>"
