### NEST-MICROSERVICES

Proyecto básico de microservicios con Nest.js, MySQL, MongoDB y RabbitMQ. Consta de un servicio principal que utiliza MongoDB (Main) y otro secundario para administrador que utiliza MySQL (Admin), ambos se comunican a través del broker RabbitMQ y ambos almacenan datos simultáneamente.

Permite crear, editar, eliminar, obtener y dar like a productos (id, title, image, likes).

Se utilizó una cuenta y servicio CloudAMPQ (cloudamqp.com) para conectar ambas aplicaciones. 

Variables de entorno:  
AMPQS: URL del servicio AMQP  
QUEUE_NAME: Nombre de la cola  
MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE: Conexión a MySQL  
MONGO_CONNECTION: Conexión a MongoDB  
CORS_ORIGIN: Dirección de origen de aplicación front-end que se quiera usar  
AUTO_LOAD_ENTITIES, SYNCHRONIZE: Generan nuevamente las tablas de MySQL al iniciar la apliación (setear false para producción)

Instalación:
npm install (en ambas carpetas)

Ejecución development:  
npm run start:dev (Admin)  
npm run start:dev (Main)  
npm run listen (Main)

Endpoints:  
GET Obtiene productos  
http://localhost:8000/api/products  
POST Crea producto  
http://localhost:8000/api/products  
PUT Edita producto :id  
http://localhost:8000/api/products/1  
DELETE Elimina producto :id  
http://localhost:8000/api/products/1  
POST Like producto :id  
http://localhost:8001/api/products/1/like