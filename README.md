Los repositorios iniciales se desarrollaron separados
Se juntaron para que se pueda utilizar docker compose y se pueda leventar dos contenedores que esten en la misma red con el comando

```
docker-compose up -d --build
```
Este comando generara las imagenes especificadas en el docker-compose y conectara a una base de datos postgres en el puerto 5432.

que debe tener la estructura de bd

basedatos: reto

tabla: user
id: number
username: string
password: string
state: string

tabla: task
id: number
name: string
state: boolean
userId: number

Frontend en s3: http://frontretojonathan.s3-website-us-east-1.amazonaws.com/login

backend en ec2: http://54.226.31.202:3000/

swagger: http://54.226.31.202:3000/api

Se cumplio con los siguiente puntos de la evaluación:

Frontend
- Utilziación de Angular Material
- Usuario y password test01
- Si cumple condición el boton ingresar llevara a la pantalla de "Tareas"
- Opcional . Se guarda los datos pero no con NgRx sino en local storage
- La caja de texto solo acepta caracteres alfanumericos.
- El botón agregar y tecla enter agregan a la lista y se limpia la caja de texto
- Al agregar el check estará desactivado.
- El botón “X” es a criterio, puede ser un: botón, link, etc.
- El botón “X” dará la posibilidad de eliminar la tarea de la lista.
- Al activar el check inmediatamente el botón “X” quedará oculto imposibilitando su eliminación.
- OPCIONAL PLUS: consumir el usuario con el que se autenticó (previamente guardado en la vista del LOGIN) y mostrarlo (Parte superior).

Backend
- Implementar un nivel de seguridad en la consulta (JWT) (todas las rutas de task estan con seguridad)
- Dockerizar la solución e invocar a la API desde el contenedor
- Documentar el API con Swagger u Open api
- Desplegar el API en AWS. (Considerar la infraestructura que mejor se te acomode)
- El uso de la API debe ser mostrada desde Postman.
- Utilizar NestJs

Información adicional
- Se puede crear nuevos usuarios con con la ruta auth/signup que figura en el swagger
- Las tareas estan vinculadas al usuario en particular que inicia sesion
- Se coloco 1 minuto de tiempo de vida al JWT 

