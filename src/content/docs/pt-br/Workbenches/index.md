---
title: Bancadas de trabalho
---

O FreeCAD, como muitos aplicativos de design modernos, como [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit) ou [CATIA](https://en.wikipedia.org/wiki/CATIA), baseia-se no conceito de [Workbench](https://en.wikipedia.org/wiki/Workbench) (Bancada de trabalho). Uma bancada de trabalho pode ser considerada um conjunto de ferramentas especialmente agrupadas para uma determinada tarefa. Em uma oficina de móveis tradicional, você teria uma mesa de trabalho para quem trabalha com madeira, outra para quem trabalha com peças de metal e talvez uma terceira para quem monta todas as peças.

No FreeCAD aplica-se o mesmo conceito. As ferramentas são agrupadas em bancadas, segundo as tarefas em que são utilizadas.

Quando você muda de uma bancada para outra, as ferramentas disponíveis na interface mudam. Barras de ferramentas, barras de comando e possivelmente outras partes da interface mudam para a nova bancada de trabalho, mas o conteúdo de sua cena não muda. Você poderia, por exemplo, começar a desenhar formas 2D com a Bancada Draft e, em seguida, trabalhar mais neles com a Bancada Part.

Perceba que algumas vezes um Bancada é referida como um _Módulo_. Entretanto, Bancadas e Módulos são entidades diferentes. Um Módulo é qualquer extensão do FreeCAD, enquanto uma Bancada é um tipo especial de Módulo com uma configuração de GUI (barras de ferramentas e menus)

## Bancadas de Trabalho Pré-instaladas

### Atual

As seguintes bancadas de trabalho estão disponíveis em todas as instalações do FreeCAD:

- ![](/images/Freecad.svg) [Std Base](/Std_Base "Std Base"). Essa não é realmente uma bancada, mas sim uma categoria de comandos e ferramentas "padrões" que podem ser usadas em todas bancadas.

- ![](/images/Workbench_Assembly.svg) A [Bancada Assembly](/Assembly_Workbench "Assembly Workbench") para construção e resolução de montagens mecânicas. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_BIM.svg) A [Bancada BIM](/BIM_Workbench "BIM Workbench") para trabalho com elementos e criação de modelos arquiteturais [BIM](https://en.wikipedia.org/wiki/Building_information_modeling). Ela combina a Bancada Arch e a antiga Bancada externa BIM disponível em 0.21 and below.

- ![](/images/Workbench_CAM.svg) A [Bancada CAM](/CAM_Workbench "CAM Workbench") é usada para produzir instruções G-Code. Essa Bancada era chamada "Bancada Path" na 0.21 and below.

- ![](/images/Workbench_Draft.svg) A [Bancada Draft](/Draft_Workbench/pt-br "Draft Workbench/pt-br") contém ferramentas 2D e operações básicas CAD 2D e 3D.

- ![](/images/Workbench_FEM.svg) A [Bancada FEM](/FEM_Workbench/pt-br "FEM Workbench/pt-br") fornece um fluxo de trabalho de Análise de Elementos Finitos (em inglês, FEA).

- ![](/images/Workbench_Inspection.svg) A [Bancada Inspection](/Inspection_Workbench/pt-br "Inspection Workbench/pt-br") é feita para disponibilizar ferramentas específicas para o exame das formas. Ela está nos estágios iniciais de desenvolvimento.

- ![](/images/Workbench_Material.svg) A [Bancada Material](/Material_Workbench "Material Workbench") manipula o sistema de material do FreeCAD. [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

- ![](/images/Workbench_Mesh.svg) A [bancada de trabalho Mesh](/Mesh_Workbench/pt-br "Mesh Workbench/pt-br") é usada para trabalhar com malhas trianguladas.

- ![](/images/Workbench_OpenSCAD.svg) A [Bancada de trabalho OpenSCAD](/OpenSCAD_Workbench/pt-br "OpenSCAD Workbench/pt-br") como interoperabilidade com OpenSCAD e reparo da história do modelo [geometria sólida construtiva](/Constructive_solid_geometry/pt-br "Constructive solid geometry/pt-br")(CSG) história do modelo.

- ![](/images/Workbench_Part.svg) A [Bancada Part](/Part_Workbench "Part Workbench") é para trabalhar com primitivas geométricas e operações booleanas.

- ![](/images/Workbench_PartDesign.svg) A [Bancada Part Design](/PartDesign_Workbench/pt-br "PartDesign Workbench/pt-br") usada para a construção de formas de peças a partir de esboços.

- ![](/images/Workbench_Points.svg) A [bancada Points](/Points_Workbench/pt-br "Points Workbench/pt-br") usada para trabalhar com nuvens de pontos.

- ![](/images/Workbench_Reverse_Engineering.svg) A [Bancada Reverse Engineering](/Reverse_Engineering_Workbench/pt-br "Reverse Engineering Workbench/pt-br") destina-se a fornecer ferramentas específicas para converter formas/sólidos/malhas em características paramétricas compatíveis com o FreeCAD.

- ![](/images/Workbench_Robot.svg) A [Bancada Robot](/Robot_Workbench/pt-br "Robot Workbench/pt-br") serve para o estudo dos movimentos dos robôs. Atualmente está sem manutenção.

- ![](/images/Workbench_Sketcher.svg) A [Bancada Sketcher](/Sketcher_Workbench/pt-br "Sketcher Workbench/pt-br") serve para trabalhar com esboços com restrições geométricas.

- ![](/images/Workbench_Spreadsheet.svg) A [Bancada Spreadsheet](/Spreadsheet_Workbench/pt-br "Spreadsheet Workbench/pt-br") serve para a criação e manipulação de dados de planilhas.

- ![](/images/Workbench_Surface.svg) A [Bancada Surface](/Surface_Workbench/pt-br "Surface Workbench/pt-br") fornece ferramentas para criar e modificar superfícies. É similar a opção [Construtor de formas](/Part_Builder/pt-br "Part Builder/pt-br") da face a partir das bordas.

- ![](/images/Workbench_TechDraw.svg) A [Bancada TechDraw](/TechDraw_Workbench/pt-br "TechDraw Workbench/pt-br") é usada para a produção de desenhos técnicos a partir de modelos 3D. É o sucessor da [Bancada Drawing](/Drawing_Workbench/pt-br "Drawing Workbench/pt-br").

- ![](/images/Workbench_Test.svg) A [Bancada Test Framework](/Testing/pt-br "Testing/pt-br") é para a depuração do FreeCAD.

### Obsoleto

As seguintes bancadas de trabalho não estão mais incluídos após a versão 0.21:

- ![](/images/Workbench_Start.svg) A [Bancada Start Center](/Start_Workbench/pt-br "Start Workbench/pt-br") permite saltar rapidamente para uma das bancadas de trabalho mais comuns.

- ![](/images/Workbench_Web.svg) A [Bancada Web](/Web_Workbench/pt-br "Web Workbench/pt-br") fornece a você uma janela do navegador em vez da [vista 3D](/3D_view/pt-br "3D view/pt-br") dentro do FreeCAD.

As seguintes bancadas de trabalho não estão mais incluídos após a versão 0.20:

- ![](/images/Workbench_Drawing.svg) A [Bancada Drawing](/Drawing_Workbench "Drawing Workbench") era utilizada para produção de desenhos técnicos. A [Bancada TechDraw](/TechDraw_Workbench "TechDraw Workbench") é a substituta mais avançada.

- ![](/images/Workbench_Image.svg) A [Bancada Image](/Image_Workbench "Image Workbench") era utilizada para trabalhar com imagens bitmap. Suas funcionalidades foram integradas na [Std Base](/Std_Base "Std Base"). Veja [Std Import](/Std_Import "Std Import") e [Std ViewLoadImage](/Std_ViewLoadImage "Std ViewLoadImage").

- ![](/images/Workbench_Raytracing.svg) A [Bancada Raytracing](/Raytracing_Workbench "Raytracing Workbench") era utilizada para ray-tracing (renderização). A Bancada externa [[Render](https://github.com/FreeCAD/FreeCAD-render%7C)] deve ser utilizada no seu lugar.

## Bancadas de Trabalho Externas

As bancadas de trabalho do FreeCAD são fáceis de programar em [Python](/Python/pt-br "Python/pt-br"), portanto há muitas pessoas desenvolvendo bancadas de trabalho adicionais fora da área de desenvolvimento principal do FreeCAD.

A página de bancadas de trabalho externas ([Bancadas de trabalho externas](/External_workbenches/pt-br "External workbenches/pt-br")) lista todas as que são conhecidas por esta comunidade. A maioria é facilmente instalável de dentro do FreeCAD, usando o [Gerenciador de Extensões](/Std_AddonMgr/pt-br "Std AddonMgr/pt-br"), encontrado no menu **Ferramentas → ![](/images/Std_AddonMgr.svg) Addon manager**.

Retrieved from "<http://wiki.freecad.org/index.php?title=Workbenches/pt-br&oldid=1540526>"
