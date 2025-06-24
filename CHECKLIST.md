# Checklist de hitos del backend veterinaria

## ✅ Listo

- Inicialización del proyecto NestJS con estructura modular.
- Instalación y configuración de Prisma.
- Creación del esquema Prisma completo.
- Creación de archivo `.env.example` y `.env` para variables de entorno.
- Configuración de base de datos PostgreSQL en Docker (docker-compose).
- Ejecución de migraciones iniciales de Prisma.
- Generación de módulos, servicios y controladores para:
  - Productos
  - Categorías
  - Clientes
  - Mascotas
  - Imágenes de mascotas
  - Fichas médicas
  - Archivos de fichas médicas
  - Citas
  - Tipos de servicio
  - Cupones

## ⬜️ Pendiente

- Integración de Prisma en los servicios de cada recurso.
- Implementación de DTOs y validaciones (`class-validator`).
- Endpoints CRUD completos y funcionales para cada recurso.
- Manejo de imágenes y archivos (Multer).
- Autenticación JWT (registro, login, protección de rutas).
- Sistema de roles y permisos.
- Baja lógica en todos los recursos.
- Documentación Swagger.
- Seeds de datos de ejemplo.
- Pruebas de integración por recurso.
- Manejo global de errores y logs.
- Configuración de CORS y validación global.
- Dockerfile para el backend.
- Instrucciones completas en README.
