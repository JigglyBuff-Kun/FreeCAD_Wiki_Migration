---
title: CAM Biblioteka narzędzi
---
:::caution
Ta dokumentacja nie jest ukończona. Prosimy o pomoc w tworzeniu dokumentacji.StronaModel polecenia GUIwyjaśnia jak powinny być dokumentowane polecenia. Przejrzyj stronęCategory:UnfinishedDocu, aby zobaczyć więcej niekompletnych stron, takich jak ta. Zobacz stronęCategory:Command Referenceaby poznać wszystkie komendy.Zobacz stronęwytycznych Wiki dla FreeCADaby dowiedzieć się, jak edytować strony Wiki, i przejdź do stronyPomóż w rozwoju FreeCAD, aby dowiedzieć się o innych sposobach, w jakie możesz wnieść swój wkład.
:::

## Opis

W systemie [narzędzi](/CAM_Tools/pl "CAM Tools/pl") zestawy narzędzi są zorganizowane w biblioteki. Biblioteka jest po prostu listą zestawów narzędzi i może być używana przez użytkownika do dowolnego celu. Biblioteka narzędzi jest jednak świetną reprezentacją fizycznego grupowania narzędzi, np. w automatycznej zmieniarce narzędzi. Narzędzia można też grupować według przeznaczenia, na przykład wszystkie narzędzia do cięcia tworzyw sztucznych.

Biblioteka narzędzi jest plikiem *(JSON)* zawierającym mapowanie identyfikatora narzędzia na ścieżkę dostępu do pliku z zestawem narzędzi. W związku z tym każdy zestaw narzędzi może znajdować się w wielu bibliotekach.

Ponieważ każde narzędzie jest przechowywane w osobnym pliku, a przechowywanie/organizacja tych plików jest dość elastyczna, znaczenie biblioteki narzędzi dla celów organizacyjnych jest dość niewielkie. Użytkownik może dowolnie organizować swoje narzędzia w hierarchii katalogów, jaką uzna za stosowną, a także nadawać im nazwy, które najlepiej odpowiadają jego potrzebom i organizacji.

Identyfikator narzędzia==

Narzędzie nie ma własnego identyfikatora. Identyfikator jest właściwością biblioteki. Gdy narzędzie zostanie wykorzystane do utworzenia kontrolera narzędzi, identyfikator w bieżącej bibliotece stanie się domyślnym numerem narzędzia w kontrolerze. Oczywiście numer narzędzia można zmienić w kontrolerze narzędzia.

## Użycie

## Eksport

Bibliotekę narzędzi można wyeksportować w celu utworzenia [LinuxCNC Tabeli narzędzi](http://wiki.linuxcnc.org/cgi-bin/wiki.pl?ToolTable) *(.tbl)*.

## Struktura JSON

```
{
  "tools": [
    {
      "nr": 1,
      "path": "t1.fctb"
    },
    {
      "nr": 2,
      "path": "t2.fctb"
    },
    {
      "nr": 3,
      "path": "t3.fctb"
    }
  ],
  "version": 1
}

```

## Opcje

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_ToolBit_Library/pl&oldid=1388639>"