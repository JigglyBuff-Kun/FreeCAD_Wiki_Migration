---
title: Makrodefinicja Download Classifications
---
|  |
| --- |
| [Generic macro icon. Create your personal icon with the same name of the macro](/File:Text-x-python.png "Generic macro icon. Create your personal icon with the same name of the macro")  Download Classifications |
| Description |
| Downloads a package of BIM classification systems for use in FreeCAD  Macro version: 1.0 Last modified: 2024-12-13 FreeCAD version: All Author: yorik |
| Author |
| [yorik](/User:Yorik "User:Yorik") |
| Download |
| *None* |
| Links |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars") |
| Macro Version |
| 1.0 |
| Date last modified |
| 2024-12-13 |
| FreeCAD Version(s) |
| All |
| Default shortcut |
| *None* |
| See also |
| *None* |
|  |
|  |

## Description

This macro downloads a series of BIM classification systems from <https://github.com/Moult/IfcClassification> and places them in the appropriate folder on your computer so they are found by the [BIM Classification](/BIM_Classification "BIM Classification") tool.

## Usage

Run the macro. After it has run successfully, the new classification systems will be available in the [BIM Classification](/BIM_Classification "BIM Classification") tool. After the macro has run and the classification systems are installed, you can safely delete the macro.

## Install

Through the [Addon manager](/Std_AddonMgr "Std AddonMgr").

## Code

**Macro\_Download\_Classifications.FCMacro**

```
import os
import FreeCAD
import requests
import json

target = os.path.join(FreeCAD.getUserAppDataDir(), "BIM", "Classification")
apireq = "https://api.github.com/repos/Moult/IfcClassification/contents/xml"

r = requests.get(apireq)
if r.ok:
    j = json.loads(r.content)
    print("Installing to", target", ...")
    for f in j:
        df = requests.get(f["download_url"])
        with open(os.path.join(target, f["name"]), 'wb') as tf:
            tf.write(df.content)
            print("Downloaded", f["name"])
else:
    print("error getting repo contents")
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_Download_Classifications/pl&oldid=1519281>"