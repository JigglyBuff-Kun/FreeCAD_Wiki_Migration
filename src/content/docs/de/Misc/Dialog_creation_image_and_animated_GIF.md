---
title: Dialogerstellung Bild und animierte GIF
---
## Einleitung

Dies ist ein Beispiel für [Dialogerstellung](/Dialog_creation/de "Dialog creation/de") mit [PySide](/PySide/de "PySide/de").

In diesem Beispiel ist die gesamte Oberfläche in [Python](/Python/de "Python/de") definiert. Obwohl dies für kleine Oberflächen möglich ist, wird für größere Oberflächen empfohlen, .ui Dateien mit Qt Designer zu erstellen und diese in das Programm zu laden.

## Dialog mit Bild (QLabel) und animiertem GIF (QMovie)

```
import PySide
from PySide import QtGui ,QtCore
from PySide.QtGui import QPixmap, QMovie, QLabel
from PySide.QtCore import *
class MyLabelPatience():
    label = QtGui.QLabel()
    label.setText("<img src=" + path_Name_Image + "><b><center>Wait please</center> \n\n<center>i search the fonts !\n\n</center></b>")
    # center screen
    ecran = FreeCADGui.getMainWindow().frameGeometry()
    xF = 250; yF = 120
    xW = (ecran.width()/2) - (xF/2)
    yW = (ecran.height()/2)- (yF/2)
    label.setGeometry(xW, yW, xF, yF)
    ####
    label.setStyleSheet("QLabel {background-color : #F0C300;font: 12pt; }");
    label.setWindowFlags(Qt.WindowFlags(Qt.FramelessWindowHint))        # pas de bords (not border)
    ### un-comment for use ###############
    movie = QtGui.QMovie(path_Name_Image)    # anime le fichier Gif anime (decommenter)
    label.setMovie(movie)
    movie.start()
    ##################

patience = MyLabelPatience().label
patience.show()                    #show the image
#patience.close()                   #close the Qlabel
#MyLabelPatience().movie.start()    #start the animation (after patience.show())
#MyLabelPatience().movie.stop()     #stop animation

```

![](/images/Qlabel_Image00.png)

Beispiel QLabel mit Bild und Text

![](/images/Qlabel_Image_Animee00.gif)

Beispiel QLabel mit animiertem GIF

Retrieved from "<http://wiki.freecad.org/index.php?title=Dialog_creation_image_and_animated_GIF/de&oldid=1332541>"