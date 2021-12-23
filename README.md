<p align="center">
    <a href="https://laravel.com" target="_blank">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400">
    </a>
</p>

## Preguntas-Respuestas - By Rojas

Este proyecto fue realizado en Angular 12 y Laravel 8.

Requerimientos:
- [Insatalar XAMPP, este funciona en (Windows, Linux, OS X). !! Importante la version de este proyecto se trabajo con PHP 7.4, se debe escoger esa version de PHP al momento de descargar XAMPP.](https://www.apachefriends.org/es/index.html).
- [Instalar NodeJS, este funciona en (Windows, Linux, OS X). Instala la version LTS.](https://nodejs.org/es/).
- [Instalar Composer, este funciona en (Windows, Linux, OS X).](https://getcomposer.org/).

Instalacion:
- Abren el panel de control de XAMPP, inician el servicio de PHP y MYSQL.
- Abren el navegador ingresan la url 'http://localhost:80/phpmyadmin' el puerto 80 que puse en la url es porque XAMPP lo trae por defecto, pero si lo modificaron por favor poner el puerto en el que corre PHP. El siguiente paso es crear la base de datos, obligatorio el nombre de la base de datos es 'sofka'.
- Descargan el repositorio ingresan a la carpeta 'sofka-backend'. Usuarios Windows pueden usar (power shell, cmd, git bash, etc.). Abren la terminal dentro de la carpeta 'sofka-backend'  ingresan el comando 'composer install' luego ingresan el comando 'php artisan key:generate' luego ingresan el comando 'php artisan serve'. Abren otra terminal dentro de la carpeta 'sofka-backend' luego ingresan el comando 'php artisan migrate:fresh --seed'. 
- Luego de que termine el comando anterior ingresan a la carpeta 'sofka-frontend-build'. Usuarios Windows pueden usar (power shell, cmd, git bash, etc.). Abren la terminal dentro de la carpeta 'sofka-frontend-build' luego ingresan el comando 'npm i', luego escriben el comando 'http-server' copian la primer url que les arroja la consola y la pega en el navegador. Si llegaste hasta este paso significa que tienes instalado completamente la aplicacion de Preguntas-Respuestas. 
