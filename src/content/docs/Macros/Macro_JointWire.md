---
title: JointWire
---

:::caution
!!! This macro needs to be corrected. !!!
:::

|                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JointWire                                                                                                                                                                                                                                                                                                                                                                               |
| Description                                                                                                                                                                                                                                                                                                                                                                             |
| !!! This macro needs to be corrected. !!! This macro allow to find and joint all non connected edge to the closest non connected one using a line. It take a shape matrix in entry ([shape1, shape2, ...]) Macro version: 1.0 Last modified: 2011-08-24 FreeCAD version: All Download: [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bb/Macro_JointWire.png) Author: Tremblou |
| Author                                                                                                                                                                                                                                                                                                                                                                                  |
| [Tremblou](/index.php?title=User:Tremblou&action=edit&redlink=1 "User:Tremblou (page does not exist)")                                                                                                                                                                                                                                                                                  |
| Download                                                                                                                                                                                                                                                                                                                                                                                |
| [ToolBar Icon](https://www.freecadweb.org/wiki/images/b/bb/Macro_JointWire.png)                                                                                                                                                                                                                                                                                                         |
| Links                                                                                                                                                                                                                                                                                                                                                                                   |
| [Macros recipes](/Macros_recipes "Macros recipes") [How to install macros](/How_to_install_macros "How to install macros") [How to customize toolbars](/Customize_Toolbars "Customize Toolbars")                                                                                                                                                                                        |
| Macro Version                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0                                                                                                                                                                                                                                                                                                                                                                                     |
| Date last modified                                                                                                                                                                                                                                                                                                                                                                      |
| 2011-08-24                                                                                                                                                                                                                                                                                                                                                                              |
| FreeCAD Version(s)                                                                                                                                                                                                                                                                                                                                                                      |
| All                                                                                                                                                                                                                                                                                                                                                                                     |
| Default shortcut                                                                                                                                                                                                                                                                                                                                                                        |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
| See also                                                                                                                                                                                                                                                                                                                                                                                |
| _None_                                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                                                                                                                                                                         |

## Description

This macro allow to find and joint all non connected edge to the closest non connected one using a line. It take a shape matrix in entry ( [shape1,shape2,...])

## Script

ToolBar Icon ![](/images/Macro_JointWire.png)

**Macro_JointWire.FCMacro**

```
def findWires(edges):
    def verts(shape):
                return [shape.Vertexes[0].Point,shape.Vertexes[-1].Point]
        def group(shapes):
                shapesIn = shapes[:]
                pointTst = []
        pointOut =[]
        for s in shapesIn :
            pointTst=pointTst+[s.Vertexes[0].Point]
            pointTst=pointTst+[s.Vertexes[-1].Point]
        print pointTst
        changed = False
                for s in shapesIn:
                        if len(s.Vertexes) < 2:
                print "one vertex, its a circle, just add"
                        else:
                                for v in verts(s):
                    twoDot=0
                                        for vv in pointTst:
                                                if v == vv:
                            twoDot=twoDot+1
                        if v==vv and twoDot==2 :
                            changed = True
                            print "found matching vert"
                            break
                                    if twoDot<2:
                        print "didn't find any matching vert..."
                        pointOut.append(v)
         print "Dots non connected", pointOut
                return(changed,pointOut)
    def joint(point):
        for p in range(len(point)/2) :
            print point
            deltI=Part.Vertex(100,100,100).Point
            pos=1
            for pp in range(len(point)-1) :
                print "position:",pp+1
                if len(point)-1>1:
                    deltN=(point[0]-point[pp+1])
                    if deltN.Length<deltI.Length:
                        deltI=deltN
                        pos=pp+1
                        print "changement",pos
                else:
                    pos=1
            print "points a joindre",point[0],point[pos]
            if point[0]!=point[pos]:
                Part.show(Part.makePolygon([point[0],point[pos]]))
            else:
                print "WARNING les points ont la meme valeurs "
            point.pop(0)
            point.pop(pos-1)
        point=0 #to have a return normally void
        return(point)
    working = True
        edgeSet = edges
    result = group(edgeSet)
        working = result[0]
        edgeSet = result[1]
    joint(result[1])
        return result[1]
```

Retrieved from "<http://wiki.freecad.org/index.php?title=Macro_JointWire/en&oldid=910483>"
