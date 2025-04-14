---
title: Fasteners Workbench
---

![](/images/Fasteners_workbench_icon.svg)

Fasteners Workbench icon

## Introduction

The ![](/images/Fasteners_workbench_icon.svg) [Fasteners Workbench](/Fasteners_Workbench "Fasteners Workbench") is an [external workbench](/External_workbenches "External workbenches") that can add various fasteners to parts.

![](/images/Fasteners_Toolbars.png)

The optional single toolbar layout of the workbench.  
Fasteners with metric dimensions have orange icons.  
Fasteners with inch dimensions have green icons.

## Installation

1. Install the Fasteners Workbench via the ![](/images/AddonManager.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr"). For manual installation see [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches").
2. Restart FreeCAD.
3. Select the ![](/images/Fasteners_workbench_icon.svg) [Fasteners Workbench](/Fasteners_Workbench "Fasteners Workbench") from the [Workbench dropdown list](/Std_Workbench "Std Workbench").
4. Optionally change the toolbar and menu layout:
   1. Go to: **Edit → Preferences... → Fasteners → General settings**.
   2. Select one of the available **Toolbar screw icons grouping** options:
      - **None**: All fasteners appear in a single toolbar. To see all available buttons use the >> button to expand it.
      - **Separate toolbars**: Fasteners are grouped in several toolbars. This is the default layout.
      - **Dropdown buttons**: Fasteners are grouped in toolbars with flyouts.
   3. Optionally uncheck one or more **Fastener standards shown in toolbars** options. Unchecked standards are still available from the menu.
   4. Restart FreeCAD.

## Usage

Fasteners can be attached or unattached. Attached fasteners have a Data**Base Object**, a circular edge, and their Data**Placement** is dynamically linked to that object. The ![](/images/Fasteners_Move.svg) [Fasteners Move](/Fasteners_Move "Fasteners Move") command can be used to attach or detach a fastener.

### Unattached fasteners

1. Select the desired fastener by clicking its button or by picking it from the menu.
2. A fastener is created at the origin.
3. Optionally change the dimensions and other properties of the fastener:
   1. Select the fastener.
   2. Go to the **Data** tab of the [Property editor](/Property_editor "Property editor").
   3. Change the required properties.

### Attached fasteners

![](/images/Fasteners_Attached_Selected.png) ![](/images/Fasteners_Attached_Created.png)

On the left two selected circular edges. On the right the attached fasteners.

1. Specify if the selected holes are tap holes or pass holes by selecting ![](/images/Fasteners_MatchTypeInner.svg) [Fasteners MatchTypeInner](/Fasteners_MatchTypeInner "Fasteners MatchTypeInner") or ![](/images/Fasteners_MatchTypeOuter.svg) [Fasteners MatchTypeOuter](/Fasteners_MatchTypeOuter "Fasteners MatchTypeOuter") respectively (not used for countersunk screws).
2. Select one or more circular edges and/or faces with circular edges. For countersunk screws the top edge of the chamfered hole must be selected.
3. Select the desired fastener by clicking its button or by picking it from the menu.
4. A fastener is attached to each of the selected circular edges.
5. The default dimensions of each fastener depend on the radius of the circular edge it is attached to. Countersunk screws are matched by their head diameter, other fasteners are matched by their shaft diameter.
6. Optionally change the dimensions and other properties of the fasteners. See above.
7. Fasteners that appear upside-down can be inverted with the ![](/images/Fasteners_Flip.svg) [Fasteners Flip](/Fasteners_Flip "Fasteners Flip") command or by changing their Data**Invert** property.
8. Optionally change the Data**Offset** property to create space between the fasteners and the edges they are attached to.

## Notes

- To generate threads, the Data**Thread** property of a fastener must be changed to `true`. Generating threads is costly. Recomputes take much longer if there are many fasteners with threads in a document.
- The Data**Invert** property and the Data**Offset** property are ignored for unattached fasteners.

## Commands

- ![](/images/Fasteners_Flip.svg) [Invert fastener](/Fasteners_Flip "Fasteners Flip"): Invert the orientation of attached fasteners.

- ![](/images/Fasteners_Move.svg) [Move fastener](/Fasteners_Move "Fasteners Move"): Move and attach a fastener to a circular edge. Can also be used to detach a fastener.

- ![](/images/Fasteners_Simplify.svg) [Simplify shape](/Fasteners_Simplify "Fasteners Simplify"): Create non-parametric copies of fasteners.

- ![](/images/Fasteners_MatchTypeInner.svg) [Match for tap hole](/Fasteners_MatchTypeInner "Fasteners MatchTypeInner"): Consider circular edges to be tap holes when new fasteners are attached to them.

- ![](/images/Fasteners_MatchTypeOuter.svg) [Match for pass hole](/Fasteners_MatchTypeOuter "Fasteners MatchTypeOuter"): Consider circular edges to be pass holes when new fasteners are attached to them.

- ![](/images/Fasteners_BOM.svg) [Generate BOM](/Fasteners_BOM "Fasteners BOM"): Create a spreadsheet with a bill of materials for the fasteners in the document.

- ![](/images/Fasteners_ScrewCalculator.svg) [Screw calculator](/Fasteners_ScrewCalculator "Fasteners ScrewCalculator"): Show a calculator to determine the tap hole size of screws.

- ![](/images/Fasteners_ChangeParameters.svg) [Change fastener parameters](/Fasteners_ChangeParameters "Fasteners ChangeParameters"): Change the parameters of fasteners.

## Fasteners

Fasteners with metric dimensions have orange icons. Fasteners with inch dimensions have green icons.

### Hexagon head screws and bolts

- ![](/images/Fasteners_ASMEB18.2.1.6.svg) **ASME B18.2.1.6** UNC hexagon head screw.

- ![](/images/Fasteners_ASMEB18.2.1.8.svg) **ASME B18.2.1.8** UNC hexagon head screw with flange.

- ![](/images/Fasteners_DIN571.svg) **DIN 571** Hexagon head wood screw.

- ![](/images/Fasteners_ISO4017.svg) **DIN 933** Hexagon head screw.

- ![](/images/Fasteners_ISO4017.svg) **DIN 961** Hexagon head screw.

- ![](/images/Fasteners_EN1662.svg) **EN 1662** Hexagon head bolt with flange, small series.

- ![](/images/Fasteners_EN1665.svg) **EN 1665** Hexagon head bolt with flange, heavy series.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4014** Hexagon head bolt. _Product grades A and B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 4015** Hexagon head bolt with reduced shank.

- ![](/images/Fasteners_ISO4014.svg) **ISO 4016** Hexagon head bolt. _Product grade C._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4017** Hexagon head screw. _Product grades A and B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 4018** Hexagon head screw. _Product grade C._

- ![](/images/Fasteners_EN1662.svg) **ISO 4162** Hexagon bolt with flange, small series. _Product grade A with driving feature of product grade B._

- ![](/images/Fasteners_ISO4017.svg) **ISO 8676** Hexagon head screw with fine pitch thread. _Product grades A and B._

- ![](/images/Fasteners_ISO4014.svg) **ISO 8765** Hexagon head bolt with fine pitch thread.

- ![](/images/Fasteners_EN1662.svg) **ISO 15071** Hexagon bolt with flange, small series. _Product grade A._

- ![](/images/Fasteners_EN1662.svg) **ISO 15072** Hexagon bolt with flange and fine pitch thread, small series. _Product grade A._

### Hexagon socket screws

- ![](/images/Fasteners_ASMEB18.3.1A.svg) **ASME B18.3.1A** UNC hexagon socket head cap screw.

- ![](/images/Fasteners_ASMEB18.3.1G.svg) **ASME B18.3.1G** UNC hexagon socket head cap screw with low head.

- ![](/images/Fasteners_ASMEB18.3.2.svg) **ASME B18.3.2** UNC hexagon socket countersunk head screw.

- ![](/images/Fasteners_ASMEB18.3.3A.svg) **ASME B18.3.3A** UNC hexagon socket button head screw.

- ![](/images/Fasteners_ASMEB18.3.3B.svg) **ASME B18.3.3B** UNC hexagon socket button head screw with flange.

- ![](/images/Fasteners_ASMEB18.3.4.svg) **ASME B18.3.4** UNC hexagon socket head shoulder screw.

- ![](/images/Fasteners_DIN6912.svg) **DIN 6912** Hexagon socket head cap screw with low head with center.

- ![](/images/Fasteners_DIN7984.svg) **DIN 7984** Hexagon socket head cap screw with low head.

- ![](/images/Fasteners_ISO2936.svg) **ISO 2936** Hexagon socket screw key.

- ![](/images/Fasteners_ISO4762.svg) **ISO 4762** Hexagon socket head cap screw.

- ![](/images/Fasteners_ISO7379.svg) **ISO 7379** Hexagon socket head shoulder screw.

- ![](/images/Fasteners_ISO7380.svg) **ISO 7380-1** Hexagon socket button head screw.

- ![](/images/Fasteners_ISO7380-2.svg) **ISO 7380-2** Hexagon socket button head screw with flange.

- ![](/images/Fasteners_ISO10642.svg) **ISO 10642** Hexagon socket countersunk head screw.

### Hexalobular socket head screws

- ![](/images/Fasteners_ISO14579.svg) **ISO 14579** Hexalobular socket head cap screw.

- ![](/images/Fasteners_ISO14580.svg) **ISO 14580** Hexalobular socket cheese head screw.

- ![](/images/Fasteners_ISO14581.svg) **ISO 14581** Hexalobular socket countersunk flat head screw.

- ![](/images/Fasteners_ISO14582.svg) **ISO 14582** Hexalobular socket countersunk head screw, high head.

- ![](/images/Fasteners_ISO14583.svg) **ISO 14583** Hexalobular socket pan head screw.

- ![](/images/Fasteners_ISO14584.svg) **ISO 14584** Hexalobular socket raised countersunk head screw.

### Slotted head screws

- ![](/images/Fasteners_ASMEB18.6.1.2.svg) **ASME B18.6.1.2** Slotted flat countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.1.4.svg) **ASME B18.6.1.4** Slotted oval countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.3.1A.svg) **ASME B18.6.3.1A** UNC slotted countersunk flat head screw.

- ![](/images/Fasteners_ASMEB18.6.3.4A.svg) **ASME B18.6.3.4A** UNC slotted oval countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.9A.svg) **ASME B18.6.3.9A** UNC slotted pan head screw.

- ![](/images/Fasteners_ASMEB18.6.3.10A.svg) **ASME B18.6.3.10A** UNC Slotted fillister head screw.

- ![](/images/Fasteners_ASMEB18.6.3.12A.svg) **ASME B18.6.3.12A** UNC Slotted truss head screws.

- ![](/images/Fasteners_ASMEB18.6.3.16A.svg) **ASME B18.6.3.16A** UNC Slotted round head screw.

- ![](/images/Fasteners_ISO1207.svg) **DIN 84 (superseded by ISO 1207)** Slotted cheese head screw. _Product grade A._

- ![](/images/Fasteners_DIN96.svg) **DIN 96** Slotted half round head wood screw.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-1** Slotted half round head wood screw.

- ![](/images/Fasteners_DIN96.svg) **GOST 1144-2** Slotted half round head wood screw.

- ![](/images/Fasteners_ISO1207.svg) **ISO 1207** Slotted cheese head screw. _Product grade A._

- ![](/images/Fasteners_ISO1580.svg) **ISO 1580** Slotted pan head screw. _Product grade A._

- ![](/images/Fasteners_ISO2009.svg) **ISO 2009** Slotted countersunk flat head screw. _Product grade A._

- ![](/images/Fasteners_ISO2010.svg) **ISO 2010** Slotted raised countersunk head screw. _Product grade A._

### H cross head screws

- ![](/images/Fasteners_ASMEB18.6.1.3.svg) **ASME B18.6.1.3** Flat countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.1.5.svg) **ASME B18.6.1.5** Oval countersunk head wood screw.

- ![](/images/Fasteners_ASMEB18.6.3.1B.svg) **ASME B18.6.3.1B** UNC flat countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.4B.svg) **ASME B18.6.3.4B** UNC oval countersunk head screw.

- ![](/images/Fasteners_ASMEB18.6.3.9B.svg) **ASME B18.6.3.9B** UNC pan head screw.

- ![](/images/Fasteners_ASMEB18.6.3.10B.svg) **ASME B18.6.3.10B** UNC fillister head screw.

- ![](/images/Fasteners_ASMEB18.6.3.12C.svg) **ASME B18.6.3.12C** UNC truss head screws.

- ![](/images/Fasteners_ASMEB18.6.3.16B.svg) **ASME B18.6.3.16B** UNC round head screw.

- ![](/images/Fasteners_DIN967.svg) **DIN 967** Pan head screw with collar.

- ![](/images/Fasteners_DIN7996.svg) **DIN 7996** Pan head wood screw.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-3** Pan head wood screw.

- ![](/images/Fasteners_DIN7996.svg) **GOST 1144-4** Pan head wood screw.

- ![](/images/Fasteners_ISO7045.svg) **ISO 7045** Pan head screw. _Product grade A._

- ![](/images/Fasteners_ISO7046.svg) **ISO 7046** Countersunk flat head screw. _Product grade A._

- ![](/images/Fasteners_ISO7047.svg) **ISO 7047** Raised countersunk head screw. _Product grade A._

- ![](/images/Fasteners_ISO7048.svg) **ISO 7048** Cheese head screw.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-C** Pan head self tapping screws with conical point.

- ![](/images/Fasteners_ISO7049-F.svg) **ISO 7049-F** Pan head self tapping screws with flat point.

- ![](/images/Fasteners_DIN7996.svg) **ISO 7049-R** Pan head self tapping screws with rounded point.

### Other head bolts

- ![](/images/Fasteners_ASMEB18.2.1.1.svg) **ASME B18.2.1.1** UNC square head bolt.

- ![](/images/Fasteners_ASMEB18.5.2.svg) **ASME B18.5** UNC Round head square neck bolt.

- ![](/images/Fasteners_DIN478.svg) **DIN 478** Square head bolt with collar.

- ![](/images/Fasteners_DIN603.svg) **DIN 603** Round head square neck bolt.

- ![](/images/Fasteners_ISO2342.svg) **ISO 2342** Headless screw with shank

### Set screws

- ![](/images/Fasteners_ASMEB18.3.5A.svg) **ASME B18.3.5A** UNC hexagon socket set screw with flat point.

- ![](/images/Fasteners_ASMEB18.3.5B.svg) **ASME B18.3.5B** UNC hexagon socket set screw with cone point.

- ![](/images/Fasteners_ASMEB18.3.5C.svg) **ASME B18.3.5C** UNC hexagon socket set screw with dog point.

- ![](/images/Fasteners_ASMEB18.3.5D.svg) **ASME B18.3.5D** UNC hexagon socket set screw with cup point.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4026** Hexagon socket set screw with flat point.

- ![](/images/Fasteners_ISO4027.svg) **ISO 4027** Hexagon socket set screw with cone point.

- ![](/images/Fasteners_ISO4028.svg) **ISO 4028** Hexagon socket set screw with dog point.

- ![](/images/Fasteners_ISO4029.svg) **ISO 4029** Hexagon socket set screw with cup point.

- ![](/images/Fasteners_ISO4026.svg) **ISO 4766** Slotted socket set screw with flat point.

- ![](/images/Fasteners_ISO4027.svg) **ISO 7434** Slotted socket set screw with cone point.

- ![](/images/Fasteners_ISO4028.svg) **ISO 7435** Slotted socket set screw with long dog point.

- ![](/images/Fasteners_ISO4029.svg) **ISO 7436** Slotted socket set screw with cup point.

### Thumb screws

- ![](/images/Fasteners_DIN464.svg) **DIN 464** Knurled thumb screw, high type.

- ![](/images/Fasteners_DIN465.svg) **DIN 465** Slotted knurled thumb screw, high type.

- ![](/images/Fasteners_DIN653.svg) **DIN 653** Knurled thumb screw, low type.

### Ground screws

- ![](/images/Fasteners_GroundScrew.svg) **Ground Screw** Round plate ground screw.

### Nuts

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.1A** UNC hexagon machine screw nut.

- ![](/images/Fasteners_ASMEB18.2.2.1B.svg) **ASME B18.2.2.1B** UNC square machine screw nut.

- ![](/images/Fasteners_ASMEB18.2.2.2.svg) **ASME 18.2.2.2** UNC square nut.

- ![](/images/Fasteners_ASMEB18.2.2.1A.svg) **ASME B18.2.2.4A** UNC hexagon nut.

- ![](/images/Fasteners_ASMEB18.2.2.4B.svg) **ASME B18.2.2.4B** UNC hexagon thin nut.

- ![](/images/Fasteners_ASMEB18.2.2.5.svg) **ASME 18.2.2.5** UNC hexagon castle nut.

- ![](/images/Fasteners_ASMEB18.2.2.12.svg) **ASME 18.2.2.12** UNC hexagon nut with flange.

- ![](/images/Fasteners_ASMEB18.2.2.13.svg) **ASME 18.2.2.13** UNC hexagon coupling nut.

- ![](/images/Fasteners_ASMEB18.6.9A.svg) **ASME 18.6.9A** Wing nut, type A.

- ![](/images/Fasteners_DIN315.svg) **DIN 315** Wing nut.

- ![](/images/Fasteners_DIN557.svg) **DIN 557** Square nut.

- ![](/images/Fasteners_DIN562.svg) **DIN 562** Square nut.

- ![](/images/Fasteners_DIN917.svg) **DIN 917** Cap nut, low form.

- ![](/images/Fasteners_DIN928.svg) **DIN 928** Square weld nut.

- ![](/images/Fasteners_DIN929.svg) **DIN 929** Hexagon weld nut.

- ![](/images/Fasteners_ISO4032.svg) **DIN 934 (superseded by ISO 4035 and ISO 8673)** Hexagon thin nut chamfered. _Product grades A and B._

- ![](/images/Fasteners_DIN935.svg) **DIN 935** Hexagon castle nut.

- ![](/images/Fasteners_DIN985.svg) **DIN 985** Nyloc nut.

- ![](/images/Fasteners_DIN1587.svg) **DIN 1587** Cap nut.

- ![](/images/Fasteners_DIN6330.svg) **DIN 6330** Hexagon nut 1.5d high.

- ![](/images/Fasteners_DIN6331.svg) **DIN 6331** Hexagon with collar 1.5d high.

- ![](/images/Fasteners_DIN6334.svg) **DIN 6334** Hexagon coupling nut.

- ![](/images/Fasteners_DIN7967.svg) **DIN 7967** Self-locking counter nut.

- ![](/images/Fasteners_EN1661.svg) **EN 1661** Hexagon nut with flange.

- ![](/images/Fasteners_DIN1587.svg) **GOST 11860-1** Cap nut.

- ![](/images/Fasteners_ISO4032.svg) **ISO 4032** Hexagon nut, style 1. _Product grades A and B._

- ![](/images/Fasteners_ISO4033.svg) **ISO 4033** Hexagon high nut, style 2. _Product grades A and B._

- ![](/images/Fasteners_ISO4034.svg) **ISO 4034** Hexagon nut, style 1.

- ![](/images/Fasteners_ISO4035.svg) **ISO 4035** Hexagon thin nut chamfered, style 0. _Product grades A and B._

- ![](/images/Fasteners_EN1661.svg) **ISO 4161** Hexagon nut with flange.

- ![](/images/Fasteners_DIN985.svg) **ISO 7040** Prevailing torque type hexagon nut (with non-metallic insert).

- ![](/images/Fasteners_DIN985.svg) **ISO 7041** Prevailing torque type hexagon nut (with non-metallic insert), style 2.

- ![](/images/Fasteners_ISO7043.svg) **ISO 7043** Prevailing torque type hexagon nut with flange (with non-metallic insert).

- ![](/images/Fasteners_ISO7044.svg) **ISO 7044** Prevailing torque type all-metal hexagon nut with flange.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7719** Prevailing torque type all-metal hexagon nut.

- ![](/images/Fasteners_ISO7719.svg) **ISO 7720** Prevailing torque type all-metal hexagon nut, style 2.

- ![](/images/Fasteners_ISO8673.svg) **ISO 8673** Hexagon nut with fine pitch thread, style 1. _Product grades A and B._

- ![](/images/Fasteners_ISO8674.svg) **ISO 8674** Hexagon high nut with fine pitch thread, style 2. _Product grades A and B._

- ![](/images/Fasteners_ISO8675.svg) **ISO 8675** Hexagon thin nut with fine pitch thread, style 0. _Product grades A and B._

- ![](/images/Fasteners_DIN985.svg) **ISO 10511** Prevailing torque type hexagon thin nut (with non-metallic insert).

- ![](/images/Fasteners_DIN985.svg) **ISO 10512** Prevailing torque type hexagon nut with fine pitch thread (with non-metallic insert).

- ![](/images/Fasteners_ISO7719.svg) **ISO 10513** Prevailing torque type all-metal hexagon nut with fine pitch thread.

- ![](/images/Fasteners_EN1661.svg) **ISO 10663** Hexagon nut with flange and fine pitch thread.

- ![](/images/Fasteners_ISO7043.svg) **ISO 12125** Prevailing torque type hexagon nut with flange and fine pitch thread (with non-metallic insert).

- ![](/images/Fasteners_ISO7044.svg) **ISO 12126** Prevailing torque type all-metal hexagon nut with flange and fine pitch thread.

- ![](/images/Fasteners_ISO21670.svg) **ISO 21670** Hexagon weld nut with flange.

- ![](/images/Fasteners_SAEJ483a1.svg) **SAE J483a 1** Low cap nut.

- ![](/images/Fasteners_SAEJ483a2.svg) **SAE J483a 2** High cap nut.

### T-slot fasteners

- ![](/images/Fasteners_DIN508.svg) **DIN 508** T-slot nut.

- ![](/images/Fasteners_GN505.svg) **GN 505** Serrated quarter-turn T-slot nut.

- ![](/images/Fasteners_GN505.4.svg) **GN 505.4** Serrated T-slot bolt.

- ![](/images/Fasteners_GN506.svg) **GN 506** T-Slot swivel nut.

- ![](/images/Fasteners_GN507.svg) **GN 507** T-slot nut.

- ![](/images/Fasteners_DIN508.svg) **ISO 299** T-Slot nut.

### Washers

- ![](/images/Fasteners_ASMEB18.21.1.12A.svg) **ASME B18.21.1.12A** UN washer, narrow series.

- ![](/images/Fasteners_ASMEB18.21.1.12B.svg) **ASME B18.21.1.12B** UN washer, regular series.

- ![](/images/Fasteners_ASMEB18.21.1.12C.svg) **ASME B18.21.1.12C** UN washer, wide series.

- ![](/images/Fasteners_DIN6319C.svg) **DIN 6319C** Spherical washer.

- ![](/images/Fasteners_DIN6319D.svg) **DIN 6319D** Conical seat.

- ![](/images/Fasteners_DIN6319G.svg) **DIN 6319G** Conical seat.

- ![](/images/Fasteners_DIN6340.svg) **DIN 6340** Washer for clamping devices.

- ![](/images/Fasteners_ISO7089.svg) **ISO 7089** Plain washer, normal series. _Product grade A._

- ![](/images/Fasteners_ISO7090.svg) **ISO 7090** Plain washer chamfered, normal series. _Product grade A._

- ![](/images/Fasteners_ISO7092.svg) **ISO 7092** Plain washer, small series. _Product grade A._

- ![](/images/Fasteners_ISO7093-1.svg) **ISO 7093-1** Plain washer, large series. _Product grade A._

- ![](/images/Fasteners_ISO7094.svg) **ISO 7094** Plain washer, extra large series. _Product grade C._

- ![](/images/Fasteners_ISO8738.svg) **ISO 8738** Plain washer for clevis pins.

- ![](/images/Fasteners_NFE27-619.svg) **NFE27-619** Countersunk washer.

### Rods, taps and dies

- ![](/images/Fasteners_ScrewTapInch.svg) Inch threaded rod for tapping holes.

- ![](/images/Fasteners_ScrewDieInch.svg) Tool object for cutting external inch threads.

- ![](/images/Fasteners_ThreadedRodInch.svg) UNC inch threaded rod.

- ![](/images/Fasteners_ThreadedRod.svg) DIN 975 metric threaded rod.

- ![](/images/Fasteners_ScrewTap.svg) Metric threaded rod for tapping holes.

- ![](/images/Fasteners_ScrewDie.svg) Tool object for cutting external metric threads.

### Inserts

- ![](/images/Fasteners_IUTHeatInsert.svg) Heat staked insert.

- ![](/images/Fasteners_PEMPressNut.svg) Self-clinching nut.

- ![](/images/Fasteners_PEMStandoff.svg) Self-clinching standoff.

- ![](/images/Fasteners_PEMStud.svg) Self-clinching stud.

- ![](/images/Fasteners_PCBSpacer.svg) PCB spacer female/female.

- ![](/images/Fasteners_PCBStandoff.svg) PCB standoff female/male.

- ![](/images/Fasteners_4PWTI.svg) 4 prong threaded wood insert (DIN 1624 Tee nuts).

### Retaining rings

- ![](/images/Fasteners_DIN471.svg) **DIN 471** External retaining ring.

- ![](/images/Fasteners_DIN472.svg) **DIN 472** Internal retaining ring.

- ![](/images/Fasteners_DIN6799.svg) **DIN 6799** E-clip retaining ring.

### Nails

- ![](/images/Fasteners_DIN1143.svg) **DIN 1143** Round plain head nail for use in automatic nailing machines.

- ![](/images/Fasteners_DIN1144-A.svg) **DIN 1144-A** Nail for the installation of wood wool composite panels, 20mm round head.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1151-A** Round plain head wire nail.

- ![](/images/Fasteners_DIN1151-B.svg) **DIN 1151-B** Round countersunk head wire nail.

- ![](/images/Fasteners_DIN1152.svg) **DIN 1152** Round lost head wire nail.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-A** Clout or slate nail.

- ![](/images/Fasteners_DIN1151-A.svg) **DIN 1160-B** Clout or slate wide head nail.

### Pins

- ![](/images/Fasteners_ISO1234.svg) **ISO 1234** Split pin.

- ![](/images/Fasteners_ISO2338.svg) **ISO 2338** Parallel pin.

- ![](/images/Fasteners_ISO2339.svg) **ISO 2339** Taper pin.

- ![](/images/Fasteners_ISO2340A.svg) **ISO 2340A** Clevis pin.

- ![](/images/Fasteners_ISO2340B.svg) **ISO 2340B** Clevis pin without head (with split pin holes).

- ![](/images/Fasteners_ISO2341A.svg) **ISO 2341A** Clevis pin with head.

- ![](/images/Fasteners_ISO2341B.svg) **ISO 2341B** Clevis pin with head (with split pin hole).

- ![](/images/Fasteners_ISO8733.svg) **ISO 8733** Parallel pin with internal thread, unhardened.

- ![](/images/Fasteners_ISO8734.svg) **ISO 8734** Dowel pin.

- ![](/images/Fasteners_ISO8735.svg) **ISO 8735** Parallel pin with internal thread, hardened.

- ![](/images/Fasteners_ISO8736.svg) **ISO 8736** Taper pin with internal thread, unhardened.

- ![](/images/Fasteners_ISO8737.svg) **ISO 8737** Taper pin with external thread, unhardened.

- ![](/images/Fasteners_ISO8739.svg) **ISO 8739** Full-length grooved pin with pilot.

- ![](/images/Fasteners_ISO8740.svg) **ISO 8740** Full-length grooved pin with chamfer.

- ![](/images/Fasteners_ISO8741.svg) **ISO 8741** Half-length reverse taper grooved pin.

- ![](/images/Fasteners_ISO8742.svg) **ISO 8742** Third-length center grooved pin.

- ![](/images/Fasteners_ISO8743.svg) **ISO 8743** Half-length center grooved pin.

- ![](/images/Fasteners_ISO8744.svg) **ISO 8744** Full-length taper grooved pin.

- ![](/images/Fasteners_ISO8745.svg) **ISO 8745** Half-length taper grooved pin.

- ![](/images/Fasteners_ISO8746.svg) **ISO 8746** Grooved pin with round head.

- ![](/images/Fasteners_ISO8747.svg) **ISO 8747** Grooved pin with countersunk head.

- ![](/images/Fasteners_ISO8748.svg) **ISO 8748** Coiled spring pin, heavy duty.

- ![](/images/Fasteners_ISO8750.svg) **ISO 8750** Coiled spring pin, standard duty.

- ![](/images/Fasteners_ISO8751.svg) **ISO 8751** Coiled spring pin, light duty.

- ![](/images/Fasteners_ISO8752.svg) **ISO 8752** Slotted spring pin, heavy duty.

- ![](/images/Fasteners_ISO13337.svg) **ISO 13337** Slotted spring pin, light duty.

## Obsolete

- ![](/images/Fasteners_ChamferHole.svg) [Make countersunk](/Fasteners_ChamferHole "Fasteners ChamferHole"): Chamfer holes for countersunk screws. Not available in 0.5.13 and above.

## References

- Author: [shaise](http://theseger.com/projects/author/shaise/)
  - ScrewMaker: Ulrich Brammer
  - Workbench wrapper: Shai Seger
- Source code: <https://github.com/shaise/FreeCAD_FastenersWB>
- Bug reports and feature requests: <https://github.com/shaise/FreeCAD_FastenersWB/issues>
- Forum topic: <https://forum.freecadweb.org/viewtopic.php?t=11429>

## Links

- [BOLTS](https://github.com/jreinhardt/BOLTS): An open library for technical specifications.

Retrieved from "<http://wiki.freecad.org/index.php?title=Fasteners_Workbench/en&oldid=1567271>"
