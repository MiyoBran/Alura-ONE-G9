
Logo da empresa Alura
¿Qué quieres aprender?

Iniciar Sesión
Nuestros Planes
Formaciones
Conoce a Luri
Programación
_
Front End
_
Data Science
_
DevOps
_
Innovación y Gestión
_
Artículos de Tecnología > Programación
Cómo escribir un README increíble en tu Github

Camila Alves
Camila Alves
22/05/2022
Compartir

1_CWFkh5z8oa6dZfn5_gkKKQ

Dado el mismo proyecto en repositorios remotos en GitHub, la famosa red social del desarrollador, ¿cuál de los dos enfoques a continuación le resulta más atractivo?

01 Repositório: GlicoCare2

i-02 Repositório: GlicoCare

Definitivamente la segunda opción, ¿verdad? Porque en la primera opción no sabríamos ni de qué se trata el proyecto. Y la diferencia del segundo repositorio fue la adición de un archivo README muy agradable que hizo que el proyecto fuera más atractivo y explicativo.

Pero tranquilo, README? Léeme, ¿qué sería eso?
El README es un archivo con extensión .md, es decir, está escrito en Markdown, que es un lenguaje de marcado utilizado para convertir texto en HTML válido.

En plataformas de repositorios remotos como GitHub, la función de este archivo es presentar información del proyecto, como:

Descripción de su proyecto;
funcionalidades;
Cómo pueden usarlo los usuarios;
Donde los usuarios pueden encontrar ayuda sobre su proyecto;
Autores del proyecto.
¿Por qué hacer un README?
Después de que hayas trabajado duro y desarrollado un proyecto genial, probablemente estarás subiendolo a GitHub y mostrando a la comunidad lo que has hecho.

Para eso, es bueno documentar el proyecto para que quien visite tu repositorio sepa de qué se trata, como lo vimos en el primer ejemplo.

Y eso lo podemos hacer a través del README, que es el primer archivo que se ve, es decir, es la puerta de entrada a tu proyecto. El propio GitHub hace esta recomendación a la hora de subir un proyecto sin este archivo:

i-03

Traducción: Ayude a las personas interesadas en este repositorio a comprender su proyecto agregando un README.

Además, algunas personas utilizan el perfil de GitHub como portafolio, si es tu caso, es interesante apostar por los archivos README para hacer más atractivos tus proyectos incluso para los reclutadores. Si este no es tu objetivo, vale la pena señalar que no siempre queremos que los usuarios se interesen o colaboren con nuestro repositorio, en estos casos no es necesario utilizar este archivo.

¿Qué es genial tener en un README?
Al analizar repositorios famosos, es posible notar la presencia de archivos README muy interesantes.

Me gusta este repositorio de Facebook Docusaurus, que es un proyecto diseñado para ayudar a construir, implementar y mantener sitios web de proyectos de código abierto.

El proyecto Open MCT de la NASA, que se utiliza para el análisis de datos de las misiones de las naves espaciales, así como para la planificación y el funcionamiento de los sistemas móviles experimentales.

Es posible notar que los dos no tienen exactamente el mismo patrón, cada uno tiene su identidad. Sin embargo, podemos ver algunos puntos que podemos destacar que es bueno tener en su README, como:

Título e imagen de portada;
Insignias;
Índice;
Descripción del Proyecto;
Estado del proyecto;
Demostración de funciones y aplicaciones;
Acceso al Proyecto;
Tecnologías utilizadas;
Personas Contribuyentes;
Personas Desarrolladoras del Proyecto;
Licencia.
Título e Imagen de portada
Tan pronto como agregue un README, comenzará con el título como el nombre de su repositorio. Pero puedes cambiarlo y ponerle un nombre descriptivo. En este punto abusa de la creatividad.

A la hora de elegir el título, puedes ponerlo así:

<em> # Su título aquí </em>
O, si desea colocarlo centralizado, puede usar etiquetas HTML que funcionan normalmente, así:

<h1 align="center"> Su título aquí </h1>
Una vez hecho esto, si quieres, puedes hacer una portada o logo del proyecto para poner después del título. En particular, me gusta mucho Canva para hacer diseños, con el plan gratuito ya puedes encontrar algunas herramientas geniales.

Eventualmente, si el logotipo es un título, como en el ejemplo de GlicoCare, puedes reemplazar el título:

i-06

Sin embargo, ambos también se pueden usar, como se usa en Docusaurus:

i-07

O CacheLib de Facebook también:

i-08

Pero, ¿cómo poner la imagen en el archivo? Una vez que hayas creado o encontrado tu diseño, puedes abrirlo en el explorador de archivos y arrastrarlo al archivo README que se está editando, aquí hay un ejemplo hecho en Windows:

i-09
Traducción: Una descripción de la imágen aquí.

Dentro de los corchetes [ ], el nombre del archivo de la imagen aparecerá como una descripción, pero es interesante que describas en detalle de qué se trata para ayudar con la accesibilidad. Y dentro de los paréntesis aparece un enlace a tu imagen que GitHub genera al convertirla y alojarla.

Otra forma de colocar una imagen, que es más segura, sería cargar la imagen en su propio repositorio o usar servicios de alojamiento de imágenes como imgur o pasteboard y colocar el enlace generado en markdown, así:

![descripción de la imágen](URL de la imagen generada por el servicio de alojamiento o GitHub)
También puedes usar imágenes disponibles en Internet tomando el enlace y colocándolo de la misma manera mencionada anteriormente, pero no se recomienda, ya que la imagen puede eliminarse y tu repositorio se quedará sin ella más adelante.

Badges
Algunos repositorios utilizan badges, que en traducción literal son placa, emblema o insignia. Sus objetivos son indicar el estado actual del proyecto, licencia si la tiene, versiones, dependencias, pruebas y entre otros.

Un ejemplo del uso de badges en un repositorio de Dropbox, Dropbox Core SDK para Java 8+:

i-10

En él, las insignias se utilizaron para:

Licencia: Instituto Tecnológico de Massachusetts (MIT);
Versión de la herramienta de administración de dependencias, Maven: versión 4.0.1;
Fecha de la última versión del proyecto: Agosto.
Si quieres hacer tus badges, puedes usar Shields.io, que proporciona en la página principal varios ejemplos de Insignias y, además, puedes pegar el enlace a tu repositorio de GitHub en el cuadro de texto inicial, por lo que automáticamente te sugerirá algunas insignias para que las uses en tu proyecto, proporcionando el enlace de la insignia para copiar y pegar en tu README.

i-11

Ejemplos:

Estado del proyecto:

Código generado:

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

Si deseas dejarlo centrado, también puedes usar la etiqueta de align de HTML, así:

<p align="left">
<img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">
</p>


Stars del proyecto:

Código generado:

![GitHub Org's stars](https://img.shields.io/github/stars/camilafernanda?style=social)
Resultado:

stars

Índice
GitHub genera automáticamente una tabla de contenido para los archivos README en función de los títulos de las secciones. Para verlo, selecciona el ícono de menú en la esquina superior izquierda del archivo.

readme

Especialmente en README largos, esta es una herramienta excelente para navegar por el documento, ya que redirige al usuario al tema seleccionado.

Sin embargo, si estás interesado en crear tu propio índice para verlo en el archivo, también puedes hacerlo en Markdown.

Ejemplo:

##Índice
*[Título e imagen de portada](#Título-e-imagen-de-portada)
*[Insignias](#insignias)
*[Índice](#índice)
*[Descripción del proyecto](#descripción-del-proyecto)
*[Estado del proyecto](#Estado-del-proyecto)
*[Características de la aplicación y demostración](#Características-de-la-aplicación-y-demostración)
*[Acceso al proyecto](#acceso-proyecto)
*[Tecnologías utilizadas](#tecnologías-utilizadas)
*[Personas Contribuyentes](#personas-contribuyentes)
*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)
* [Licencia](#licencia)
*[Conclusión](#conclusión)
Resultado

i-13_2

Descripción del Proyecto
Como es un objetivo del archivo README describir el proyecto, es bueno que presentes justo después del título o imagen de portada y/o insignias si las tiene, una breve explicación de su proyecto con tu objetivo principal.

Puedes tomar una descripción más objetiva, como la del Dropbox Core SDK para Java 8+:

i-13
Traducción: una biblioteca de Java para acceder a la API Core v2 basada en HTTP de Dropbox. Este SDK también es compatible con Core API v1 anterior, pero esta compatibilidad se eliminará en algún momento.

O puede entrar en más detalles, como se hizo en el proyecto GlicoCare y presentar cifras que ejemplifiquen el proyecto, si tiene:

i-12_2

Estado del proyecto
Si optas por no utilizar Badges sobre el estado del proyecto, es interesante que pongas esta información en el propio texto. Ejemplo:

:construction: Proyecto en construcción :construction:
Resultado:

🚧 Proyecto en construcción 🚧

O si quieres centrar:

<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>
En este ejemplo, se usó el emoji :construction:, pero puede usarlo en cualquier parte del archivo, como antes de los subtítulos. En este Gist de Rafael Xavier de Souza, puedes encontrar una variedad de emojis para usar en tu README y hacerlo más llamativo.

Características de la aplicación y demostración
Puedes enumerar las características de tu proyecto para que sea más fácil de entender para el usuario. Para eso, puedes hacerlo así:

## :hammer:Funcionalidades del proyecto
- `Funcionalidad 1`: descripción de la funcionalidad 1- `Funcionalidad 2`: descripción de la funcionalidad 2- `Funcionalidad 2a`: descripción de la funcionalidade 2a relacionada con la funcionalidad 2- `Funcionalidad 3`: descripción de la funcionalidad 3
Resultado:

i-14

Además, si es posible, es interesante presentar las funcionalidades con un ejemplo visual del proyecto, como un gif, imágenes o vídeo.

Recordando que el procedimiento para colocar gif es el mismo que el adoptado para imágenes y puedes grabar gifs con grabadores de pantalla, como Acethinker.

Acceso al proyecto
Si tu proyecto está onine con un servicio de alojamiento, puedes proporcionar el enlace. De lo contrario, se puede apostar por gifs e imágenes, como se mencionó anteriormente, así como indicar cómo el usuario puede descargar el proyecto, abrirlo y ejecutarlo.

¿Cómo se puede hacer en Markdown?

\## 📁 Acceso al proyecto
**Indica cómo se puede descargar o acceder al código fuente del proyecto, ya sea proyecto inicial o final**
\## 🛠️ Abre y ejecuta el proyecto
**Muestra las instrucciones necesarias para abrir y ejecutar el proyecto**
Tecnologías utilizadas
También puedes mencionar las tecnologías utilizadas en el proyecto, es una excelente manera de demostrar lo que has estado estudiando en este mar que es la tecnología.

Puedes citar con textos, ejemplo:

i-15

Personas Contribuyentes
Si tu proyecto tiene colaboradores, es bueno agregarlos al README. Un ejemplo fantástico de esto es Docusaurus, donde tienes las fotos de todos los colaboradores y un enlace a otro documento markdown con mensajes importantes para aquellos que también quieren contribuir:

i-18

Personas desarolladoras del proyecto
¡Ahora es tu turno! Es importante que pongas tu foto también, si no te gustan las fotos usa el usuario por defecto de GitHub o haz tu propio Octocat. Además, puedes vincular tu nombre de usuario, por si algún usuario quiere ponerse en contacto o denunciar algo.

## Autores
| [<img src="https://avatars.githubusercontent.com/u/37356058?v=4" width=115><br><sub>Camila Fernanda Alves</sub>](https://github.com/camilafernanda) |  [<img src="https://avatars.githubusercontent.com/u/71970858?v=4" width=115><br><sub>Ellen Pimentel</sub>]([https://github.com/guilhermeonrails](https://github.com/ellenpimentel)) |  [<img src="https://avatars.githubusercontent.com/u/91544872?v=4" width=115><br><sub>Génesys Rondón</sub>](https://github.com/genesysaluralatam) |
| :---: | :---: | :---: |
Resultado:

i-22

Licencia
Generalmente, los repositorios públicos en GitHub se utilizan para compartir software de código abierto. Sin embargo, para que un repositorio sea verdaderamente de código abierto, necesita obtener una licencia para que otros tengan la libertad de usar, cambiar y distribuir el software.

Por tanto, si tu repositorio tiene licencia, es imprescindible que la pongas en tu README. Como se hace en Docusaurus:

i-20
Traducción: Docusaurus tiene licencia del MIT. La documentación de Docusaurus (p. ej., archivos .md en la carpeta ./docs) tiene licencia Creative Commons.

Referencias README
Aquí están todos los README mencionados aquí, así como algunos para inspirarse:

Docusaurus;
Open MCT;
GlicoCare;
CacheLib;
Dropbox Core SDK for Java 8+;
Para inspirarte, aquí hay algunas sugerencias geniales:

Plantilla README en español hecho por Andrés Villanueva
Plantilla README en inglés de Othneil Drew.

Recordando que para mirar el código fuente, en markdown, haz clic en la opción Raw en la esquina superior derecha del README:

i-21

¿Manos a la obra?
Ahora espero que hayas notado la importancia de un archivo README y cómo hacer uno estructurado.

Para obtener más información sobre Git y GitHub, consulte:

Artículo: Git y Github: que son y primeros pasos

Alura+ (Video de youtube): Git y GitHub para Principiantes

Curso: Git y GitHub: Controle y comparta su código



Camila Fernanda Alves

Soy casi ingeniera de la Universidad Federal de Uberlândia e instructora aquí en Alura. Trabajé como pasante en el Scuba Team y ya realicé algunos monitoreos de Física, Circuitos Eléctricos e incluso Procesamiento de Señales. En mi tiempo libre, me gustan los juegos de Nintendo y Valorant.

Este articulo fue adecuado para Alura Latam por: Ellen Pimentel y Génesys Rondón

Artículo Anterior
Recibiendo datos en Java
Siguiente Artículo
Análisis de complejidad del algoritmo: ¿cuál es la importancia?
Ver otros artículos sobre Programación

Navegación
Planes
Instructores
Blog
Política de privacidad
Términos de uso
Sobre nosotros
Preguntas frecuentes
¡CONTÁCTANOS!
¡Quiero entrar en contacto!
Blog
Programación
Data Science
Front End
Innovación y Gestión
DevOps
NOVEDADES Y LANZAMIENTOS
Aliados
Programa de aceleração Scale-Up Endeavor
En Alura somos unas de las Scale-Ups seleccionadas por Endeavor, programa de aceleración de las empresas que más crecen en el país.
Growth Academy 2021 do Google For Startups
Fuimos unas de las 7 startups seleccionadas por Google For Startups en participar del programa Growth Academy en 2021
Alura
Una empresa del grupo Alun

AOVS Sistemas de Informática S.A
CNPJ 05.555.382/0001-33

SÍGUENOS EN NUESTRAS REDES SOCIALES
YouTube Facebook Instagram Linkedin Whatsapp Spotify
Cursos
Cursos de Programación
Lógica de Programación | Java
Cursos de Front End
HTML y CSS | JavaScript | React
Cursos de Data Science
Data Science | Machine Learning | Excel | Base de Datos | Data Visualization | Estadística
Cursos de DevOps
Docker | Linux
Cursos de Innovación y Gestión
Transformación Ágil | Marketing Analytics
Alura

Educação em Tecnologia

logo fiap
FIAP
logo casa do codigo
Casa do Código
logo pm3
PM3 - Cursos de Produto
Mais Alura

logo alura start
START BY Alura
logo alura lingua
Alura Língua
logo alura para empresas
Alura Para Empresas
logo alura latam
Alura LATAM
Comunidade

logo tech guide
Tech Guide
logo 7 days of code
7 days of code
logo Hipsters ponto Jobs
Hipsters ponto Jobs
Podcasts

logo Hipster Network
Hipster Network
logo Hipsters ponto Tech
Hipsters ponto Tech
logo Dev sem fronteiras
Dev sem Fronteiras
logo Like a Boss
Like a Boss
logo IA Sob Controle
IA Sob Controle
logo Mesa de Produto
Mesa de Produto
logo Decode
Decode
logo FIAPCast
FIAPCast
