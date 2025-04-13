---
title: CAM SetupSheet
---
## Description

Using a **SetupSheet** allows the user to customize how the various property values for operations will be calculated. The user always has the option to override the SetupSheet values with an explicit value or change the way SetupSheet values are calculated.

Since SetupSheets are part of the CAM Job, values do not changes the default behavior of CAM. Rather, they change only the behaviour within the context of the current job.

SetupSheets are particularly useful when saved with a [Job Template](/CAM_ExportTemplate "CAM ExportTemplate").

## Properties

* Data**VertRapid**: Sets the Vertical Rapid Rate in new Tool Controllers. (Used in post processors that support customizable Rapid rates)
* Data**HorizRapid**: Sets the Horizontal Rapid Rate in new Tool Controllers. (Used in post processors that support customizable Rapid rates)
* Data**SafeHeightOffset**: The usage of this field depends on SafeHeightExpression (see below)
* Data **SafeHeightExpression**: The result of this expression will be used to set the Safe Height of operations.
* Data**ClearanceHeightOffset**: The usage of this field depends on ClearanceHeightExpression (see below)
* Data**ClearanceHeightExpression**: The result of this expression will be used to set the Clearance Height of operations.
* Data**StartDepthExpression**: The result of this expression will be used to set the StartDepth property of operations.
* Data **FinalDepthExpression**: The result of this expression will be used to set the FinalDepth property of operations.
* Data**StepDownExpression**: The result of this expression will be used to set the StepDown property of operations.

## Operation Parameters

The following are pulled from:

* OpFinalDepth - The value of the FinalDepth property
* OpStartDepth - The value of the FinalDepth property
* OpToolDiameter - The value of the Tool Diameter property of the Tool Controller referenced by the operation.

## SetupSheet Values

Other values in the SetupSheet can be referenced directly:

* SetupSheet.ClearanceHeightOffset
* SetupSheet.SafeHeightOffset

* StartDepth
* SafeHeightOffset
* SafeHeightExpression
* ClearanceHeightOffset
* ClearanceHeightExpression
* StartDepthExpression
* FinalDepthExpression
* StepDownExpression

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_SetupSheet/en&oldid=1386657>"