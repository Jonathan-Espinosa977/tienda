-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

-- Crear la tabla productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT NOT NULL,
    stock INT NOT NULL CHECK (stock >= 0)
);

-- Insertar productos de ejemplo
INSERT INTO productos (nombre, precio, descripcion, stock) VALUES
('Producto A', 19.99, 'Descripción del producto A', 100),
('Producto B', 29.50, 'Descripción del producto B', 150),
('Producto C', 9.99, 'Descripción del producto C', 200),
('Producto D', 49.99, 'Descripción del producto D', 50);

-- Verificar los productos insertados
SELECT * FROM productos;
