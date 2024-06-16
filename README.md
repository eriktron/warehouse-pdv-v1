# my-store
Desarrollo inicial y nuevo de un sistema de almacen con punto de venta

Para la instalación localmente 
  1.- Copia del proyecto (En consola ubicarnos donde estara ubicado el proyecto)
      $ git clone DIRECCION NOMBRE_PROYECTO
  2.- Instalación de dependencias (Nos posicionamos en la carpeta del proyecto)
      $ npm i
  3.- Docker Creacion Imagenes (Nos posicionamos en la carpeta del proyecto)
      $ docker-compose up -d postgres   (esto crea la carptea "postgres_data" en la carpeta del proyecto principal)
      $ docker-compose up -d pgadmin    (esto crea la imagen de pgadmin para administracion visual)
  4.- Docker Verificamos que el servicio esta "Arriba"
      $ docker-compose ps
  5.- Crear el archivo .env (en carpeta principal), tomar de ejemplo de .envejemplo
      Este archivo da las claves de acceso.
  6.- Corremos migraciones (esto creara las tablas en la base de datos)
      $ npm run migrations:run
  7.- Corremos el proyecto.
      $ npm run dev

