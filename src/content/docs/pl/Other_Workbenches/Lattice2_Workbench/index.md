---
title: Środowisko pracy Lattice 2
---

:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::
![](/images/Lattice2_workbench_icon.svg)

Ikonka FreeCAD dla zewnętrznego środowiska pracy Lattice 2

## Wprowadzenie

:::caution
Lattice 2 jest stabilny. Nowe funkcje mogą być dodawane, ale nie spodziewaj się żadnych przełomowych zmian.
:::

Środowisko pracy Lattice2 to pracy [zewnętrzne środowisko](/External_workbenches/pl "External workbenches/pl") FreeCAD, które służy do pracy z umiejscowieniem i szykami umiejscowień. Jest to rodzaj środowiska montażowego, ale z naciskiem na szyki. Nie ma ograniczeń i relacji, są tylko układy miejsc docelowych, które mogą być generowane, łączone, przekształcane, nakładane i wypełniane kształtami.

Czy zastanawiałeś się kiedyś, jak stworzyć kątomierz za pomocą FreeCAD? To właśnie jest celem środowiska roboczego _(w tym etykietowania zaznaczeń)_. Za pomocą tego środowiska pracy można również tworzyć rozłożone zespoły.

Dodatkowo, środowisko pracy zawiera kilka narzędzi ogólnego przeznaczenia, takich jak parametryczne zmniejszanie, obwiednie, narzędzie informacji o kształcie i narzędzia do pracy ze zbiorami kształtów _(złożeniami)_.

Jednym z głównych celów projektowych środowiska jest bycie tak sparametryzowanym, jak to tylko możliwe.

## Bibliografia

- Autor: DeepSOIC
- Strona główna: <https://github.com/DeepSOIC/Lattice2>
- Kod źródłowy na GitHub: <https://github.com/DeepSOIC/Lattice2>

## Przybory

Szczegółowy opis znajduje się na stronie GitHub [Lattice 2 Wiki](https://github.com/DeepSOIC/Lattice2/wiki).

### Pasek narzędzi

![](/images/Lattice2-menu-orizz.png)

Pasek narzędzi Lattice 2

### Polecenia

```
![](/images/c/c1/Lattice2_Placement.svg) Placement

```

- - ![](/images/Lattice2_Placement.svg) [Single Placement: Custom](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: XY plane](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: XZ plane](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: YZ plane](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: along X](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: along Y](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: along Z](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_Placement.svg) [Single Placement: Euler angles](/index.php?title=Lattice2_Placement&action=edit&redlink=1 "Lattice2 Placement (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Copy object.Placement](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Center of bounding box](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Center of mass](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")
  - ![](/images/Lattice2_PlacementFromShape.svg) [Placement of shape: Inertial axis system](/index.php?title=Lattice2_PlacementFromShape&action=edit&redlink=1 "Lattice2 PlacementFromShape (page does not exist)")

* ![](/images/Lattice2_AttachablePlacement.svg) [Dołączone umiejscowienie](/Lattice2_AttachablePlacement/pl "Lattice2 AttachablePlacement/pl")
* ![](/images/Lattice2_LinearArray.svg) [Generate linear array](/index.php?title=Lattice2_LinearArray&action=edit&redlink=1 "Lattice2 LinearArray (page does not exist)")
* ![](/images/Lattice2_PolarArray.svg) [Generate polar array](/index.php?title=Lattice2_PolarArray&action=edit&redlink=1 "Lattice2 PolarArray (page does not exist)")
* ![](/images/Lattice2_ArrayFromShape.svg) [Array from shape](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Internal placements](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Center of bounding box](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Center of mass](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
  - ![](/images/Lattice2_ArrayFromShape.svg) [Inertial axis system](/index.php?title=Lattice2_ArrayFromShape&action=edit&redlink=1 "Lattice2 ArrayFromShape (page does not exist)")
* ![](/images/Lattice2_InvertLattice.svg) [Invert lattice](/index.php?title=Lattice2_InvertLattice&action=edit&redlink=1 "Lattice2 InvertLattice (page does not exist)")
* ![](/images/Lattice2_JoinArrays.svg) [Join arrays](/index.php?title=Lattice2_JoinArrays&action=edit&redlink=1 "Lattice2 JoinArrays (page does not exist)")
* ![](/images/Lattice2_ArrayFilter.svg) [Array filter](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Selected items](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Touching](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Within distance window](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
  - ![](/images/Lattice2_ArrayFilter.svg) [Pointing at shape](/index.php?title=Lattice2_ArrayFilter&action=edit&redlink=1 "Lattice2 ArrayFilter (page does not exist)")
* ![](/images/Lattice2_ExplodeArray.svg) [Explode array](/index.php?title=Lattice2_ExplodeArray&action=edit&redlink=1 "Lattice2 ExplodeArray (page does not exist)")
* ![](/images/Lattice2_ProjectArray.svg) [Project array](/index.php?title=Lattice2_ProjectArray&action=edit&redlink=1 "Lattice2 ProjectArray (page does not exist)")
* ![](/images/Lattice2_ResampleArray.svg) [Resample array](/index.php?title=Lattice2_ResampleArray&action=edit&redlink=1 "Lattice2 ResampleArray (page does not exist)")
* ![](/images/Lattice2_PopulateCopiesNormal.svg) [Populate with copies](/index.php?title=Lattice2_PopulateCopiesNormal&action=edit&redlink=1 "Lattice2 PopulateCopiesNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateCopiesNormal.svg) [Populate with copies](/index.php?title=Lattice2_PopulateCopiesNormal&action=edit&redlink=1 "Lattice2 PopulateCopiesNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateCopiesArray.svg) [Populate with copies: Build array](/index.php?title=Lattice2_PopulateCopiesArray&action=edit&redlink=1 "Lattice2 PopulateCopiesArray (page does not exist)")
  - ![](/images/Lattice2_PopulateCopiesMove.svg) [Moved object](/index.php?title=Lattice2_PopulateCopiesMove&action=edit&redlink=1 "Lattice2 PopulateCopiesMove (page does not exist)")
* ![](/images/Lattice2_PopulateChildrenNormal.svg) [Populate with children](/index.php?title=Lattice2_PopulateChildrenNormal&action=edit&redlink=1 "Lattice2 PopulateChildrenNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateChildrenNormal.svg) [Populate with children](/index.php?title=Lattice2_PopulateChildrenNormal&action=edit&redlink=1 "Lattice2 PopulateChildrenNormal (page does not exist)")
  - ![](/images/Lattice2_PopulateChildrenArray.svg) [Populate with children: Build array](/index.php?title=Lattice2_PopulateChildrenArray&action=edit&redlink=1 "Lattice2 PopulateChildrenArray (page does not exist)")
  - ![](/images/Lattice2_PopulateChildrenMove.svg) [Moved children](/index.php?title=Lattice2_PopulateChildrenMove&action=edit&redlink=1 "Lattice2 PopulateChildrenMove (page does not exist)")
* ![](/images/Lattice2_ParametricDowngrade.svg) [Parametric downgrade](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Leaves](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to CompSolids](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Shells](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to OpenWires](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Faces](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Wires](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Edges](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Seam edges](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Non-seam edges](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
  - ![](/images/Lattice2_ParametricDowngrade.svg) [Downgrade to Vertices](/index.php?title=Lattice2_ParametricDowngrade&action=edit&redlink=1 "Lattice2 ParametricDowngrade (page does not exist)")
* ![](/images/Lattice2_SubLink.svg) [Sub link](/index.php?title=Lattice2_SubLink&action=edit&redlink=1 "Lattice2 SubLink (page does not exist)")
* ![](/images/Lattice2_MakeCompound.svg) [Make compound](/index.php?title=Lattice2_MakeCompound&action=edit&redlink=1 "Lattice2 MakeCompound (page does not exist)")
* ![](/images/Lattice2_ExplodeCompound.svg) [Explode compound](/index.php?title=Lattice2_ExplodeCompound&action=edit&redlink=1 "Lattice2 ExplodeCompound (page does not exist)")
* ![](/images/Lattice2_FuseCompound.svg) [Fuse compound](/index.php?title=Lattice2_FuseCompound&action=edit&redlink=1 "Lattice2 FuseCompound (page does not exist)")
* ![](/images/Lattice2_BoundingBox.svg) [Bounding box](/index.php?title=Lattice2_BoundingBox&action=edit&redlink=1 "Lattice2 BoundingBox (page does not exist)")
  - ![](/images/Lattice2_BoundingBox.svg) [Whole](/index.php?title=Lattice2_BoundingBox&action=edit&redlink=1 "Lattice2 BoundingBox (page does not exist)")
  - ![](/images/Lattice2_BoundingBoxCompound.svg) [Children](/index.php?title=Lattice2_BoundingBoxCompound&action=edit&redlink=1 "Lattice2 BoundingBoxCompound (page does not exist)")
* ![](/images/Lattice2_ShapeString.svg) [Shape string for array](/index.php?title=Lattice2_ShapeString&action=edit&redlink=1 "Lattice2 ShapeString (page does not exist)")
* ![](/images/Lattice2_ParaSeries.svg) [Para series](/index.php?title=Lattice2_ParaSeries&action=edit&redlink=1 "Lattice2 ParaSeries (page does not exist)")
* ![](/images/Lattice2_Inspect.svg) [Inspect](/index.php?title=Lattice2_Inspect&action=edit&redlink=1 "Lattice2 Inspect (page does not exist)")
  - ![](/images/Lattice2_InspectSelection.svg) [Inspect seletion](/index.php?title=Lattice2_InspectSelection&action=edit&redlink=1 "Lattice2 InspectSelection (page does not exist)")
  - ![](/images/Lattice2_InspectShape.svg) [Shape info (feature)](/index.php?title=Lattice2_InspectShape&action=edit&redlink=1 "Lattice2 InspectShape (page does not exist)")
* ![](/images/Lattice2_SubstituteObject.svg) [Substitute object](/index.php?title=Lattice2_SubstituteObject&action=edit&redlink=1 "Lattice2 SubstituteObject (page does not exist)")

- Eksponowanie łączy do elementów podrzędnych

Inne

- Obliczenia
  - ![](/images/Lattice2_RecomputeMakeFeature.svg) [Make recompute locher object](/index.php?title=Lattice2_RecomputeMakeFeature&action=edit&redlink=1 "Lattice2 RecomputeMakeFeature (page does not exist)"):
  - ![](/images/Lattice2_RecomputeLock.svg) [Lock recomputes](/index.php?title=Lattice2_RecomputeLock&action=edit&redlink=1 "Lattice2 RecomputeLock (page does not exist)"):
  - ![](/images/Lattice2_RecomputeUnlock.svg) [Unlock recomputes](/index.php?title=Lattice2_RecomputeUnlock&action=edit&redlink=1 "Lattice2 RecomputeUnlock (page does not exist)"):
  - ![](/images/Lattice2_RecomputeFeature.svg) [Recompute feature](/index.php?title=Lattice2_RecomputeFeature&action=edit&redlink=1 "Lattice2 RecomputeFeature (page does not exist)"):
  - ![](/images/Lattice2_RecomputeDocument.svg) [Recompute document](/index.php?title=Lattice2_RecomputeDocument&action=edit&redlink=1 "Lattice2 RecomputeDocument (page does not exist)"):
  - ![](/images/Lattice2_RecomputeForce.svg) [Force recompute](/index.php?title=Lattice2_RecomputeForce&action=edit&redlink=1 "Lattice2 RecomputeForce (page does not exist)"):
  - ![](/images/Lattice2_RecomputeTouch.svg) [Touch selected feature](/index.php?title=Lattice2_RecomputeTouch&action=edit&redlink=1 "Lattice2 RecomputeTouch (page does not exist)"):

* ![](/images/Lattice2_workbench_icon.svg) Lattice2 Workbench icon

## Instalacja

**Wymagania wstępne**: Lattice2 wersja 0.16.5155 i powyżej

### Instalacja automatyczna

Od wersji v0.17 można użyć ![](/images/Std_AddonMgr.svg) [Menadżera dodatków](/Std_AddonMgr/pl "Std AddonMgr/pl") do zainstalowania ![](/images/Lattice2_workbench_icon.svg) Lattice2. Użyj opcji **Przybory → Menadżer dodatków**.

### Instalacja samodzielna

- Przewiń do góry strony i kliknij przycisk "pobierz zip".
- Rozpakuj zawartość do folderu "Lattice2" utworzonego w \Path\to\FreeCAD\Mod i uruchom ponownie FreeCAD.
- Należy pamiętać, że InitGui.py _(i reszta plików .py)_ powinny znaleźć się bezpośrednio w katalogu Mod\Lattice2 _(nie w katalogu zagnieżdżonym, takim jak Mod\Lattice2\Lattice2)_.

Po zainstalowaniu środowiska roboczego powinno ono pojawić się na dole listy wyboru środowiska roboczego w programie FreeCAD.

## Poradniki

- Poradniki: [Galeria](https://github.com/DeepSOIC/Lattice2/wiki/Gallery)
- [Podstawowy poradnik](https://github.com/DeepSOIC/Lattice2/wiki/Basic-Tutorial)
- [Lattice2 w PartDesign](https://github.com/DeepSOIC/Lattice2/wiki/PartDesign-Pattern-Tutorial)
- [Wykonanie zestawu zębatego](https://github.com/DeepSOIC/Lattice2/wiki/Cogset-Tutorial)
- [Wzorce cech w Lattice2 Workbench](https://www.youtube.com/watch?v=BXmeEGnhszo) autorstwa @sliptonic

## Odnośniki internetowe do Lattice2

- Lattice2 Wiki: <https://github.com/DeepSOIC/Lattice2/wiki>
- FreeCAD Wiki: <https://www.freecadweb.org/wiki/Lattice2_Workbench>
- Forum FreeCAD: [Stół roboczy Lattice - v2.0 staje się stabilny](http://forum.freecadweb.org/viewtopic.php?t=12464)
- Galeria: <https://github.com/DeepSOIC/Lattice2/wiki/Gallery>
- Zgłaszanie błędów: Prosimy o zgłaszanie błędów na <https://github.com/DeepSOIC/Lattice2/issues>

## Inne użyteczne odnośniki

- [Lattice znany również jako Lattice1 _(przestarzały)_](https://github.com/DeepSOIC/Lattice).
- [Zewnętrzne środowiska pracy](/External_workbenches/pl "External workbenches/pl"): Lista środowisk pracy FreeCAD.
- [Przepisy na makropolecenia](/Macros_recipes/pl "Macros recipes/pl")
- [Portale społeczności FreeCAD](/FreeCAD_Community_Portal/pl "FreeCAD Community Portal/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=Lattice2_Workbench/pl&oldid=1287635>"
