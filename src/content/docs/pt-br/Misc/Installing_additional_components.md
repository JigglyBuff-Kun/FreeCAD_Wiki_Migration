---
title: Instalação de componentes adicionais
---
# Introdução

Após instalar o FreeCAD para seu sistema operacional ([Windows](/Installing_on_Windows "Installing on Windows"), [Linux](/Installing_on_Linux "Installing on Linux") ou [Mac](/Installing_on_Mac "Installing on Mac")), você pode considerar a instalação de um ou mais dos seguintes componentes adicionais.

# Arquivos de ajuda

A documentação offline não é enviada com todos os instaladores, mas está disponível como um pacote separado. Consulte a página [Instalando o arquivo de ajuda](/Installing_Helpfile/pt-br "Installing Helpfile/pt-br") para mais informações.

# Bancadas de trabalho externas

Além das [bancadas de trabalho](/Workbenches/pt-br "Workbenches/pt-br") padronizadas, agrupadas com o FreeCAD, há uma grande coleção de [bancadas de trabalho externas](/External_workbenches/pt-br "External workbenches/pt-br") úteis feitas por membros da comunidade.

# Componente de software de terceiros

O FreeCAD suporta vários pacotes de software de terceiros prontos para uso. Em muitos casos tudo o que você precisa fazer é instalar o software, e quando o FreeCAD for reiniciado, ele o encontrará automaticamente e poderá usá-lo. Esta seção visa fornecer uma lista de tais pacotes de software, juntamente com algumas informações sobre onde eles são usados no FreeCAD e onde podem ser baixados.

## Suporte

### GitPython

[GitPython](https://github.com/gitpython-developers/GitPython) é uma biblioteca para interagir com os repositórios Git. O [Gerenciador de complementos](/Std_AddonMgr/pt-br "Std AddonMgr/pt-br") pode usar esta biblioteca. GitPython está incluída nos instaladores do FreeCAD para Windows e Mac.

### GraphViz

[GraphViz](https://www.graphviz.org) é um software de visualização gráfica de código aberto. É utilizado pela ferramenta [Std Gráfico de dependência](/Std_DependencyGraph/pt-br "Std DependencyGraph/pt-br").

### OpenCAMLib

[OpenCAMLib](http://www.anderswallin.net/CAM) é uma biblioteca de código aberto de algoritmos de manufatura auxiliada por computador (CAM). É utilizada no [Bancada Path](/Path_Workbench/pt-br "Path Workbench/pt-br"). Veja a página [OpenCamLib](/OpenCamLib/pt-br "OpenCamLib/pt-br") para instruções de instalação.

### OpenSCAD

[OpenSCAD](https://www.openscad.org) é um modelador de sólidos 3D. O [Módulo OpenSCAD](/OpenSCAD_Workbench/pt-br "OpenSCAD Workbench/pt-br") depende deste software e o [Bancada de Malhas](/Mesh_Workbench/pt-br "Mesh Workbench/pt-br") o utiliza para suas ferramentas Booleanas. Ele também é necessário para a importação de arquivos SCAD com a ferramenta [Importar Std](/Std_Import/pt-br "Std Import/pt-br").

## Formatos de arquivo

Todos os softwares desta seção serão utilizados pelas ferramentas [Importar Std](/Std_Import/pt-br "Std Import/pt-br") ou [Exportar Std](/Std_Export/pt-br "Std Export/pt-br").

### CADExchanger

[CADExchanger](https://cadexchanger.com) é uma aplicação comercial para a conversão de vários formatos de arquivo CAD. Existe um [bancada de trabalho externo](https://github.com/yorikvanhavre/CADExchanger) para usar este aplicativo no FreeCAD.

### Importador DXF

FreeCAD tem um importador e exportador nativo para arquivos DXF, programados em C++. Atualmente eles não implementam todas as características do formato DXF. Para essas características, o importador e exportador Python legado ainda estão disponíveis. Estes requerem a biblioteca [Draft-dxf-importador](https://github.com/yorikvanhavre/Draft-dxf-importer) Python. Consulte a página [FreeCAD and DXF Import](/FreeCAD_and_DXF_Import "FreeCAD and DXF Import") para mais informações.

### DWG converters

FreeCAD cannot directly read and write DWG files. To convert DXF files to DWG files, and vice-versa, FreeCAD relies on external converters. There is built-in support for the following DWG converters:

* [LibreDWG](https://www.gnu.org/software/libredwg) (open-source, lacks support for some DWG entities).
* [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter) (free, but not open-source).
* [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg) (commercial). [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

See [Import Export Preferences](/Import_Export_Preferences#DWG "Import Export Preferences") and [FreeCAD and DWG Import](/FreeCAD_and_DWG_Import "FreeCAD and DWG Import") for more information.

### IfcOpenShell

[IfcOpenShell](http://ifcopenshell.org) é uma biblioteca para trabalhar com o formato de arquivo da Industry Foundation Classes (IFC) utilizado no projeto arquitetônico. A biblioteca também é utilizada pelo [Arch IfcExplorer](/Arch_IfcExplorer/pt-br "Arch IfcExplorer/pt-br"). (0.18 and below) e ferramentas [BIM IfcExplorer](/BIM_IfcExplorer/pt-br "BIM IfcExplorer/pt-br"). O IfcOpenShell está incluído nos instaladores do FreeCAD para Windows e Mac.

### IfcJson

[IfcJson](https://github.com/buildingSMART/ifcJSON) é uma biblioteca necessária para exportar para o formato de arquivo IFCJSON. O IFCJSON é um novo formato IFC que ainda não é suportado por muitas aplicações.

### Pycollada

[Pycollada](https://github.com/pycollada/pycollada/releases), também conhecida como python-collada, é uma biblioteca Python para ler e escrever arquivos Collada (DAE). O Pycollada está incluído nos instaladores do FreeCAD para Windows e Mac.

## Renderização

### LuxCoreRender

### LuxCoreRender

[LuxCoreRender](https://www.luxcorerender.org) é um motor de renderização, uma reinicialização do projeto [LuxRender](/LuxRender/pt-br "LuxRender/pt-br"). Oficialmente, não é apoiado pelo [Módulo Raytracing](/Raytracing_Workbench/pt-br "Raytracing Workbench/pt-br"), mas talvez valha a pena tentar. Ele é oficialmente apoiado pelo novo [Render Workbench](https://github.com/FreeCAD/FreeCAD-render), destinado a substituir o Raytracing Workbench no futuro. Veja a página [LuxCoreRender](/LuxCoreRender/pt-br "LuxCoreRender/pt-br") para mais informações e instruções de instalação.

### LuxRender

### LuxRender

[LuxRender](https://luxcorerender.org/history/) é um dos dois motores de renderização suportados pelo [Raytracing Workbench](/Raytracing_Workbench "Raytracing Workbench"). Em 2013 o projeto foi reiniciado tornando-se [LuxCoreRender](/LuxCoreRender/pt-br "LuxCoreRender/pt-br"), com uma grande reescrita de código e mudanças de compatibilidade. Oficialmente, o Raytracing Workbench suporta apenas os abandonados [LuxRender](/LuxRender/pt-br "LuxRender/pt-br"). (a última versão é 1.6, 2017-12-28), enquanto o novo [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) (destinado a substituir no futuro o Raytracing Workbench) suporta, em vez disso, o LuxCoreRender e abandonou o suporte para o LuxRender. De qualquer forma, mesmo que oficialmente não tenha suporte, [LuxCoreRender](/LuxCoreRender/pt-br "LuxCoreRender/pt-br") pode trabalhar com o Raytracing Workbench, talvez valha a pena tentar. Veja a página [LuxRender](/LuxRender/pt-br "LuxRender/pt-br") para mais informações e instruções de instalação, e o [LuxCoreRender](/LuxCoreRender/pt-br "LuxCoreRender/pt-br") se você quiser experimentar um ‘software’ mais moderno.

### POV-Ray

[POV-Ray](https://www.povray.org) é um conhecido traçador de raios que consegue produzir imagens foto-realistas. É um dos dois motores de renderização atualmente suportados pelo [Módulo Raytracing](/Raytracing_Workbench/pt-br "Raytracing Workbench/pt-br"). Veja a página [POV-Ray](/POV-Ray/pt-br "POV-Ray/pt-br") para mais informações e instruções de instalação.

## Elemento finito

### CalculiX

[CalculiX](http://calculix.de) é um conjunto de dois pacotes de elementos finitos: CalculiX CrunchiX, um solucionador FEM, e
CalculiX GraphiX, uma ‘interface’ GUI. Somente o solucionador é suportado pelo FreeCAD. É utilizado pela ferramenta [Solver CalculiX](/FEM_SolverCalculiX/pt-br "FEM SolverCalculiX/pt-br").

### Gmsh

[Gmsh](http://gmsh.info) é um gerador automático de malha de elementos finitos é utilizado pelas ferramentas [FEM MeshGmshFromShape](/FEM_MeshGmshFromShape/pt-br "FEM MeshGmshFromShape/pt-br") e [Mesh FromPartShape](/Mesh_FromPartShape/pt-br "Mesh FromPartShape/pt-br").

### Elmer

[Elmer](https://www.csc.fi/web/elmer) é um ‘software’ de simulação multifísica, que foi aberto em 2005. No FreeCAD seus módulos Grid e Solver são usados pela ferramenta [FEM SolverElmer](/FEM_SolverElmer/pt-br "FEM SolverElmer/pt-br").

### FEniCS

[FEniCS](https://fenicsproject.org) é uma plataforma de computação para resolver equações diferenciais parciais (PDEs), que são amplamente utilizadas na solução de problemas FEM. É utilizada pelo [Bancada FEM](/FEM_Workbench/pt-br "FEM Workbench/pt-br").

### Z88

[Z88](https://en.z88.de) é outro programa FEM, que contém um gerador de malhas, um solucionador e conversores. É utilizado pela ferramenta [FEM SolverZ88](/FEM_SolverZ88/pt-br "FEM SolverZ88/pt-br"). O FreeCAD requer o pacote de código aberto Z88OS.

### OpenFOAM

[OpenFOAM](https://openfoam.org) é uma grande coleção de bibliotecas para simulações de dinâmicas de fluidos computacionais (CFD). O OpenFOAM é usado pelo [Cfd](/Cfd_Workbench/pt-br "Cfd Workbench/pt-br") e [CfdOF](https://github.com/jaheyns/CfdOF) [Bancadas de trabalho externas](/External_workbenches/pt-br "External workbenches/pt-br").

# Páginas relacionadas

* [Importar Exportar](/Import_Export/pt-br "Import Export/pt-br")
* [Preferências de exportação de importação](/Import_Export_Preferences/pt-br "Import Export Preferences/pt-br")
* [Bibliotecas de terceiros](/Third_Party_Libraries/pt-br "Third Party Libraries/pt-br")

Retrieved from "<http://wiki.freecad.org/index.php?title=Installing_additional_components/pt-br&oldid=1476439>"