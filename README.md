# EvidenciaCursoNodeJs
DocumentosEvidenciaCursoNodeJS

Este repositorio es para mostrar las evidencias del Objetivo de desarrollo individual con nombre: "Curso Node JS".

Prerequisitos
1. Instalar nodejs
1.1 Ejecutar prueba.js para comprobar el buen funcionamiento del punto 1.
2. Instalar visual studio code
2.1 Instalar las extensiones autoimport de steoates y Auto Import -ES6 &TS de Martin Opptiz.

Parte 8. npm. Requisitos previos: Instalar npm.
Parte 8. npm. Lanzar los siguientes comandos: 
  - npm init
  - npm i lodash --save (Añadir al package.json las dependencias en package.json)
  - npm install (Instalar todo lo necesario que esta definido en package.json)

Parte 9. lodash y yargs.
  - Recibir un parámetro al lanzar el comando de "node app.js" dentro de la carpeta lodash_yargs.
        "node app.js usuario DaniCode"
  - Instalar yargs: "npm i yargs --save"
  - Se puede usar yargs para procesar los datos de entrada por consola, mejorando el método tradicional por process. Se puede usar el comando: /basico/lodash_yargs/ node app.js --usuario=DaniCode
  
Parte 10. Inspector debugging.
  -Requiere una versión de node>8
  - Instalar la dependencia de nodemon con el objetivo de usar el debug de forma automático sin ponerlo tantas veces en el command:
      npm install -g nodemon
      
Parte 11. Chrome Web Tools
  - Se requiere el navegador web Chrome.
  - El código que queramos debugear se le debe añadir la siguiente sentencia: "debugger;"
  - Ir al navegador chrome y ir a la consola de Chrome Web Tools para node. Allí se pueden realizar diferencias operaciones de debug.
  - También podemos tener el nodemon para que te ejecute automáticamente las aplicaciones de node y sin usar cada vez que hay un cambio el comando "nodemon app.js" por ejemplo.
  - Debugear con nodemon ejecutando el comando: "nodemon --inspect-brk app.js
  
Parte 12. Http request
  - Prerequisito instalar dependencia de request para realizar peticiones http por ejemplo: npm i request --save
  - La api de google ya es de pago y he pedido el acceso para poder usar la capa gratuita.

Parte 13. HTTPS API github
  - Prerequisito instalar dependencia de https mediante el comando: npm i https --save

Parte 14. Promesas
  - Las promesas permite que el lenguaje sea mas legible. Esperara hasta que se devuelva la información necesaria. Se puede usar desde EcmaScript6. Sirve también para acciones asincronas.

Parte 15. node-fetch. 
  - Es un module que proporciona una interfaz para recuperar recursos. Ej. cache, request, response, operadores de servicios.
  - Prerequisito instalar modulo node-fetch mediante el comando:  npm install node-fetch --save
  
Parte 16. express.
  - Prerequesito: npm install express --save
  - Instalar el postman. 
  - Ejecutar en la carpeta web el siguiente comando: node app.js (Darle permiso al node en windows).
  - Usar el postman para hacer una petición request con la web: http://localhost:3000/. 
  - Devuelve el texto 'Hello World'
  
Parte 17. pug & hbs.
  - Prerequisito: npm install pug --save
  - Prerequisito hbs: npm install hbs --save
  
Parte 18. express generator. Genera un esqueleto y comenzar a programar.
  - Prerequisito: npm install express generator -g 
  - Crear los esqueletos de dos proyectos: express --view=pug pug-generator | express --view=hbs hbs-generator
  - Ejecutar npm install
  - Modificar los index.js de las carpetas routes con lo que hemos hecho en las carpetas de pug y hbs de forma manual (archivo app.js"
  - Ejecutar mediante set DEBUG=pug-generator & npm start
  


  
