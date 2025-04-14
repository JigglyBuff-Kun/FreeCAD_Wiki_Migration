---
title: GuiResetToolbars
---

|                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GuiResetToolbars                                                                                                                                                                                                                                                                                   |
| Description                                                                                                                                                                                                                                                                                        |
| This macro resets the position of the toolbars. Run the macro within a workbench that has a missing toolbar(s). Macro version: 1.0.0 Last modified: 2020-04-21 FreeCAD version: 0.18.4 and above Download: [ToolBar Icon](https://wiki.freecad.org/images/f/f8/GuiResetToolbars.svg) Author: PR-DC |
| Author                                                                                                                                                                                                                                                                                             |
| [PR-DC](/index.php?title=User:PR-DC&action=edit&redlink=1 "User:PR-DC (page does not exist)")                                                                                                                                                                                                      |
| Download                                                                                                                                                                                                                                                                                           |
| [ToolBar Icon](https://wiki.freecad.org/images/f/f8/GuiResetToolbars.svg)                                                                                                                                                                                                                          |
| Links                                                                                                                                                                                                                                                                                              |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                   |
| Macro Version                                                                                                                                                                                                                                                                                      |
| 1.0.0                                                                                                                                                                                                                                                                                              |
| Date last modified                                                                                                                                                                                                                                                                                 |
| 2020-04-21                                                                                                                                                                                                                                                                                         |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                 |
| 0.18.4 and above                                                                                                                                                                                                                                                                                   |
| Default shortcut                                                                                                                                                                                                                                                                                   |
| _None_                                                                                                                                                                                                                                                                                             |
| See also                                                                                                                                                                                                                                                                                           |
| [Github repository](https://github.com/PR-DC/GuiResetToolbars/)                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                    |

## Description

This macro resets the position of the toolbars.

## Usage

Run the macro within a workbench that has a missing toolbar(s).

## Script

ToolBar Icon
![](/images/GuiResetToolbars.svg)

**GuiResetToolbars.FCMacro**

```
# Reset Toolbars position
# Author: Milos Petrasinovic <mpetrasinovic@pr-dc.com>
# PR-DC, Republic of Serbia
# info@pr-dc.com
#
# --------------------
#
# Copyright (C) 2020 PR-DC <info@pr-dc.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Lesser General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Lesser General Public License for more details.
#
# You should have received a copy of the GNU Lesser General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
# --------------------

__Name__ = 'GuiResetToolbars'
__Comment__ = 'Reset Toolbars position'
__Author__ = 'PR-DC'
__Version__ = '1.0.0'
__Date__ = '2020-04-21'
__License__ = 'LGPL-3.0-or-later'
__Web__ = "https://github.com/PR-DC/GuiResetToolbars/"
__Wiki__ = 'https://wiki.freecadweb.org/Macro_GuiResetToolbars'
__Icon__ = 'https://wiki.freecad.org/images/f/f8/GuiResetToolbars.svg'
__Help__ = 'Run the macro within a workbench that has missing toolbar(s)'
__Status__ = 'stable'
__Requires__ = 'Freecad >= 0.18.4'
__Communication__ = 'https://github.com/PR-DC/GuiResetToolbars/issues/'
__Files__ = 'GuiResetToolbars.svg'

import FreeCADGui as gui
from PySide import QtGui, QtCore # FreeCAD's special PySide!

mw = gui.getMainWindow()
tb = mw.findChildren(QtGui.QToolBar)
for i in tb:
    mw.addToolBar(QtCore.Qt.TopToolBarArea, i)
```

## Links

The forum discussion [Reset toolbar position](https://forum.freecadweb.org/viewtopic.php?f=3&t=45452&p=390034#p389404)

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_GuiResetToolbars/en&oldid=1344602>"
