#  API de Reservas de Pádel

Una API RESTful construida para gestionar de manera eficiente los turnos y la disponibilidad de canchas de pádel. Permite realizar operaciones completas de creación, lectura, actualización y eliminación (CRUD) sobre la base de datos.

## 🚀 Tecnologías Utilizadas

* **Backend:** Node.js, Express.js
* **Base de Datos:** MongoDB (MongoDB Atlas)
* **ODM:** Mongoose
* **Dependencias Adicionales:** `dotenv` (gestión de variables de entorno), `cors` (manejo de peticiones cruzadas), `nodemon` (herramienta de desarrollo).

---

## 🛠️ Instalación y Configuración Local

Para correr este proyecto en tu propia máquina, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/api-reservas-padel.git](https://github.com/TU_USUARIO/api-reservas-padel.git)
   cd api-reservas-padel
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**
   Creá un archivo `.env` en la raíz del proyecto (este archivo está ignorado por Git por seguridad) y agregá tus credenciales:
   ```env
   PORT=3000
   MONGO_URI=tu_string_de_conexion_de_mongodb
   ```

4. **Iniciar el servidor:**
   ```bash
   npm run dev
   ```
   *El servidor debería iniciar en `http://localhost:3000` y mostrar un mensaje de conexión exitosa a la base de datos.*

---

## 📌 Documentación de la API (Endpoints)

La API cuenta con las siguientes rutas principales bajo la URL base `/api/reservas`:

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **GET** | `/` | Devuelve un array con todas las reservas registradas. |
| **POST** | `/` | Crea una nueva reserva en el sistema. |
| **PUT** | `/:id` | Actualiza una reserva existente buscando por su ID de MongoDB. |
| **DELETE** | `/:id` | Elimina permanentemente una reserva del sistema. |

---

## 💡 Estructura de Datos (Ejemplo de JSON)

Al realizar una petición `POST` o `PUT`, el cuerpo de la solicitud (`body`) debe enviarse en formato JSON con la siguiente estructura:

```json
{
  "nombreCliente": "Juan",
  "cancha": "Cancha 1",
  "fecha": "2026-05-20",
  "horaInicio": "18:00",
  "horaFin": "19:30"
}
```

*Nota: La API incluye validaciones automáticas. Si la cancha no está dentro de las opciones permitidas o si falta un campo obligatorio (como la `horaFin`), el servidor devolverá un error descriptivo.*
