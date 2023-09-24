<?php
require_once('config.php'); // Incluye el archivo de configuración

// Función para conectar a la base de datos
function connectToDatabase() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    return $conn; // Devuelve la conexión establecida
}

// Llama a la función para conectar a la base de datos
$dbConnection = connectToDatabase();
?>
