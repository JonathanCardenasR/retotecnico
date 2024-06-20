Los repositorios iniciales se desarrollaron separados
Se juntaron para que se pueda utilizar docker compose y se pueda leventar dos contenedores que esten en la misma red con el comando


docker-compose up -d --build

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
