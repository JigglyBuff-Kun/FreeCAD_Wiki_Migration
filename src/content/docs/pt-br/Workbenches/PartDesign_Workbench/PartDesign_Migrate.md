---
title: Migrar
---
:::caution
This tool is obsolete, it is not available in1.0 and above.
:::

|  |
| --- |
| PartDesign Migrate |
| Menu location |
| Part Design → Migrate |
| Workbenches |
| [PartDesign](/PartDesign_Workbench "PartDesign Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.17 |
| See also |
| *None* |
|  |

## Description

The PartDesign workbench in FreeCAD v0.17 introduces new tools and elements that are not recognized by older FreeCAD versions (0.16 and older). FreeCAD documents created in older versions can still be opened and edited. To benefit from the new features, they must be migrated via the menu PartDesign → Migrate.

[introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")

## Usage

1. Open a FreeCAD document that was created with FreeCAD 0.16 and below
2. Switch to the ![](/images/Workbench_PartDesign.svg) [PartDesign](/PartDesign_Workbench "PartDesign Workbench") workbench.
3. Go to the **Part Design** → **Migrate** menu.
4. If the migration works, a ![](/images/Std_Part.svg) [Part container](/Std_Part "Std Part") will be created which will hold one or more ![](/images/PartDesign_Body.svg) [Bodies](/PartDesign_Body "PartDesign Body"), each hosting a chain of features.

## Limitations

* Before starting the migration process, check if the model was built with automatic refine options enabled (in **Edit → Preferences → Part design → General**), and set your preferences accordingly. This can be easily determined by successively toggling the visibility of the features in the Model tree. If no residual edges are left between features such as Pads and Pockets, the automatic refine options were disabled.
* If a document to migrate only contains sketches and PartDesign features, the migration process may likely succeed. Some features such as chamfers and fillets may require rebuilding.
* If the document to migrate has a mixed Part/Part Design/Draft workflow, the conversion will most likely fail or at best produce unexpected results, and will need to be migrated manually.

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Migrate/pt-br&oldid=1458126>"