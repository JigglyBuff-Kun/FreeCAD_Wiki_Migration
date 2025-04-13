---
title: Taslak Dizi
---
:::caution
THIS COMMAND IS OBSOLETEIt is not available in0.21 and above. UseDraft OrthoArray,Draft PolarArrayorDraft CircularArrayinstead.
:::

|  |
| --- |
| Dizi |
| Menü konumu |
| Taslak → Dizi |
| Tezgahlar |
| [Taslak](/Draft_Workbench/tr "Draft Workbench/tr"), [Mimari](/Arch_Workbench/tr "Arch Workbench/tr") |
| Varsayılan kısayol |
| *Hiçbiri* |
| Versiyonda tanıtıldı |
| - |
| Ayrıca bkz |
| [Yol dizisi](/Draft_PathArray/tr "Draft PathArray/tr"),[Nokta dizisi](/Draft_PointArray/tr "Draft PointArray/tr"),[Klonla](/Draft_Clone/tr "Draft Clone/tr") |
|  |

## Açıklama

Dizi aracı, seçilen bir nesneden ortogonal (3 eksen) veya bir kutupsal dizi oluşturur.

The ![](/images/Draft_Array.svg) **Draft Array** command creates an orthogonal (3-axes) array from a selected object. The created array can be turned into a [polar array](/Draft_PolarArray "Draft PolarArray") or a [circular array](/Draft_CircularArray "Draft CircularArray") by changing its Veri**Array Type** property.

Bu araç, [Taslak tezgahı](/Draft_Workbench/tr "Draft Workbench/tr") ile oluşturulan 2D şekillerde kullanılabilir, ayrıca [Parça tezgahı](/Part_Workbench/tr "Part Workbench/tr") ve [Parça tasarım tezgahı](/PartDesign_Workbench/tr "PartDesign Workbench/tr") ile oluşturulan birçok 3D nesne üzerinde de kullanılabilir.

This command is now obsolete. Use the [Draft OrthoArray](/Draft_OrthoArray "Draft OrthoArray"), [Draft PolarArray](/Draft_PolarArray "Draft PolarArray") or [Draft CircularArray](/Draft_CircularArray "Draft CircularArray") command instead.

## Usage

## Nasıl kullanılır

1. Bir dizi yapmak istediğiniz nesneyi seçin.
2. ![](/images/Draft_Array.svg) Dizi düğmesine basın. Hiçbir nesne seçilmezse, birini seçmeye davet edilirsiniz.
3. Dizi nesnesi hemen yaratılır. Oluşturulan kopyaların sayısını ve yönünü değiştirmek için dizinin özelliklerini değiştirmeniz gerekir.

## Properties

## Özellikler

* Veri **Base**: Dizide çoğaltılacak nesneyi belirtir.
* Veri **Array Type**: "ortho" veya "polar" olmak üzere yaratılacak dizinin türünü belirtir.
* Veri **Fuse**: `true` ise ve kopyalar birbiriyle kesişirse, bunlar birlikte tek bir şekilde kaynaşırlar.

## Scripting

## Betik

*Ayrıca bkz.:* [Taslak API](/Draft_API/tr "Draft API/tr") ve [FreeCAD Betik esasları](/FreeCAD_Scripting_Basics/tr "FreeCAD Scripting Basics/tr").

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Array/tr&oldid=1458113>"