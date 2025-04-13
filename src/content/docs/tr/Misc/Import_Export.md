---
title: İçe/Dışa Aktar
---
## Introduction

Bu sayfa, FreeCAD'den içe veya dışa aktarılabilen farklı dosya biçimleri hakkında bilgi içerir. Bu dosya biçimlerinin çoğu belirli bir tezgah(modül) tarafından uygulanır. Bu tezgahın(modülün), bu dosya biçimini içe veya dışa aktarılması için yüklenmesi gerekmez, ancak ilgili seçenekler sayfasını görüntülemek için yüklenmesi gerekir.

## Related

See the following pages for additional information:

* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")
* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Overview of file formats

| Biçim | Açıklama | İçe Aktarma | Dışa Aktarma | Modülü | Seçenekler Sayfası |
| --- | --- | --- | --- | --- | --- |
| [FCStd](/Fcstd_file_format "Fcstd file format") | FreeCad'e ait dosya biçimi | evet | evet | Yerleşik | hayır |
| [FCMat](/Material "Material") | FreeCAD Malzeme Kartı | evet | evet | Yerleşik | hayır |
| [FCMacro](/Macros "Macros") | FreeCAD Makro | evet | evet | Yerleşik | hayır |
| STEP | Mühendislik modelleri için en yaygın kullanılan dosya biçimlerinden biri | evet | evet | [Parça tezgahı](/Part_Workbench "Part Workbench") | evet |
| STPZ | Mühendislik modelleri için STEP dosya biçiminin sıkıştırılmış versiyonu | evet | evet | [Parça tezgahı](/Part_Workbench "Part Workbench") | evet |
| IGES | Biraz eski ama yaygın kullanılan katı-tabanlı dosya biçimi | evet | evet | [Parça tezgahı](/Part_Workbench "Part Workbench") | evet |
| BREP | OpenCasCade'nin dosya biçimi | evet | evet | [Parça tezgahı](/Part_Workbench "Part Workbench") | hayır |
| [DXF](/Draft_DXF "Draft DXF") | Autodesk dosya biçimi. Sadece 2D destekler | evet | evet | [Taslak tezgahı](/Draft_Workbench "Draft Workbench") | evet |
| [DWG](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") | Autocad dosya biçimi. Sadece 2D desteklenir. [3. parti eklenti](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") yüklenmesi gerektirir. | evet | evet | [Taslak tezgahı](/Draft_Workbench "Draft Workbench") | evet |
| [SVG](/Draft_SVG "Draft SVG") | Vektör grafikleri için yaygın olarak kullanılan 2D biçimi | evet | evet | [Taslak tezgahı](/Draft_Workbench "Draft Workbench") / [Çizim tezgahı](/Drawing_Workbench "Drawing Workbench") | evet |
| [OCA](/Draft_OCA "Draft OCA") | Open CAD dosya biçimi (eski, 2D biçimi sadece) | evet | evet | [Taslak tezgahı](/Draft_Workbench "Draft Workbench") | evet |
| [IFC](/Arch_IFC "Arch IFC") | Industry Foundation Classes, BIM modelleme. [3. parti yazılım](/Arch_IFC "Arch IFC") yüklenmeli | evet | evet | [Yapı tezgahı](/Arch_Workbench "Arch Workbench") | evet |
| [DAE](/Arch_DAE "Arch DAE") | Collada dosya biçimi, kafes geometri dosyaları. 3D bilgi aktarım dosya biçimi | evet | evet | [Yapı](/Arch_Workbench "Arch Workbench") | evet |
| [OBJ](/Arch_OBJ "Arch OBJ") | 3D nesne dosyası | evet | evet | [Yapı tezgahı](/Arch_Workbench "Arch Workbench") / [Kafes tezgahı](/Mesh_Workbench "Mesh Workbench") | hayır |
| STL | 3 boyutlu bir nesnenin düzenini açıklayan veriler içeren bir dosya biçimidir. | evet | evet | [Kafes tezgahı](/Mesh_Workbench "Mesh Workbench") | hayır |
| BMS | ikili kod 3D nesne dosya biçimi | evet | evet | [Kafes tezgahı](/Mesh_Workbench "Mesh Workbench") | hayır |
| AST | Kafes | evet | evet | [Kafes tezgahı](/Mesh_Workbench "Mesh Workbench") | hayır |
| OFF | 3D nesne görüntü dosya biçimi | evet | evet | [Kafes tezgahı](/Mesh_Workbench "Mesh Workbench") | hayır |
| PLY | 3D nesne görüntü dosya biçimi / Nokta bulutu | evet | evet | [Kafes tezgahı](/Mesh_Workbench "Mesh Workbench") / [Nokta tezgahı](/Points_Workbench "Points Workbench") | hayır |
| INP | Abaqus dosya biçimi | evet | evet | [FEM tezgahı](/FEM_Workbench "FEM Workbench") | hayır |
| POLY | Tetgen dosya biçimi | hayır | evet | [FEM tezgahı](/FEM_Workbench "FEM Workbench") | hayır |
| UNV | FEM dosya biçimi | evet | evet | [FEM tezgahı](/FEM_Workbench "FEM Workbench") | hayır |
| MED | FEM dosya biçimi | evet | evet | [FEM tezgahı](/FEM_Workbench "FEM Workbench") | hayır |
| DAT | FEM dosya biçimi (FEM) veya 2D kanat profili (Taslak) | evet | evet | [FEM tezgahı](/FEM_Workbench "FEM Workbench") / [Taslak tezgahı](/Draft_Workbench "Draft Workbench") | hayır |
| BDF | FEM dosya biçimi | evet | hayır | [FEM tezgahı](/FEM_Workbench "FEM Workbench") | hayır |
| FRD | CalculiX sonuç biçimi | evet | hayır | [FEM tezgahı](/FEM_Workbench "FEM Workbench") | hayır |
| NC | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| GC | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| NCC | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| NGC | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| CNC | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| TAP | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| GCODE | G-Code dosya biçimi | evet | evet | [Path(CNC tezgahı)](/Path_Workbench "Path Workbench") | hayır |
| EMN | IDF dosya biçimi | evet | hayır | Idf | hayır |
| IV | OpenInventor dosya biçimi | evet | evet | Yerleşik | hayır |
| VRML | Web 3D dosya biçimi | evet | evet | Yerleşik | hayır |
| WebGL (HTML) | Web 3D dosya biçimi | hayır | evet | [Yapı tezgahı](/Arch_Workbench "Arch Workbench") | hayır |
| SCAD | OpenSCAD dosya biçimi | evet | evet | [OpenSCAD tezgahı](/OpenSCAD_Workbench "OpenSCAD Workbench") | hayır |
| CSG | OpenSCAD Yapı katı geometrisi | evet | evet | [OpenSCAD tezgahı](/OpenSCAD_Workbench "OpenSCAD Workbench") | hayır |
| ASC | Nokta bulutu dosya biçimi | evet | hayır | [Nokta tezgahı](/Points_Workbench "Points Workbench") | hayır |
| POV | Povray biçimi | hayır | evet | [Raytracing tezgahı](/Raytracing_Workbench "Raytracing Workbench") | hayır |
| CSV | Virgülle ayrılmış elektronik değerler tablosu | evet | evet | [Hesap tablosu tezgahı](/Spreadsheet_Workbench "Spreadsheet Workbench") | hayır |
| PDF | Adobe taşınabilir belge biçimi | hayır | evet | Yerleşik | hayır |

Retrieved from "<http://wiki.freecad.org/index.php?title=Import_Export/tr&oldid=958524>"