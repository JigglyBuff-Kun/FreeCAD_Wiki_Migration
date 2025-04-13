---
title: App Obiekt grupy dokumentu
---

## Wprowadzenie

![](/images/Folder.svg)

**Obiekt grupy dokumentu** lub formalnie `App::DocumentObjectGroup` to prosty element, który umożliwia grupowanie dowolnego typu [obiektów dokumentu](/App_DocumentObject/pl "App DocumentObject/pl") w widoku drzewa, bez względu na ich rodzaj danych.

Został opracowany, aby zorganizować obiekty w [widoku drzewa](/Tree_view/pl "Tree view/pl") w sposób logiczny dla użytkownika.

![](/images/FreeCAD_core_objects.svg)

Schemat uproszczony relacji między podstawowymi obiektami w programie. Klasa `App::DocumentObjectGroup` ma rozszerzenie, które pozwala grupować dowolny rodzaj obiektu. Samo Grupowanie nie ma wielu właściwości.

## Użycie

1. Kliknij przycisk ![](/images/Std_Group.svg) [Std Grupa](/Std_Group/pl "Std Group/pl") na pasku narzędzi struktury. Utworzona zostanie pusta Grupa.
2. Aby dodać obiekty do Grupy, zaznacz je w [widoku drzewa](/Tree_view/pl "Tree view/pl") i przeciągnij je na Grupę.
3. Aby usunąć obiekty z Grupy, przeciągnij je z Grupy na etykietę dokumentu na górze [widoku drzewa](/Tree_view/pl "Tree view/pl").

Zobacz stronę [Std: Grupa](/Std_Group/pl "Std Group/pl") dla uzyskania pełnych informacji, włącznie z sekcją [tworzeniem skryptów](/Std_Group/pl#Tworzenie_skrypt.C3.B3w "Std Group/pl").

## Właściwości

**Obiekt grupy dokumentu** _(klasa `App::DocumentObjectGroup`)_ jest pochodną podstawowego [App Obiekt dokumentu](/App_DocumentObject/pl "App DocumentObject/pl") _(klasa `App::DocumentObject`)_, dlatego dzieli wszystkie jego właściwości.

Zobacz właściwości na stronie [Std Grupa](/Std_Group/pl "Std Group/pl").

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObjectGroup/pl&oldid=1389683>"
