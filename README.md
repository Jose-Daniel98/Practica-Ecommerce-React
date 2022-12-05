### Proyecto de React JS sobre un ecommerce de una tienda ficticia de venta de audifonos/aurriculares

Desarrollarás una app de un e-commerce para poder vender productos de un rubro
a elección.

**Historia de Usuario**

● Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
● Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al
carrito.
● Una vez que el carrito tenga al menos un producto, se deberá visualizar un
listado de productos de la orden con el precio total.
● Al ingresar su nombre, apellido, teléfono e e-mail , puede realizar la compra.
● Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que
tenga todos los productos, la fecha y dar feedback del número de orden.

**Partes que se incluyen en el proyecto**

Item  | Subitem
------------- | -------------
NavBar  | 
 CartWidget |
 ItemListContainer |
 ItemList |
 ItemDetail |
 | ItemQuantitySelector
 | Description
| AddItemButton
Checkout |
| Número de orden generada

**Funcionamiento**

Al iniciar el proyecto, el usaurio observa una pantalla con su menú y un icono de carga, mientras consulta los productos de la base de datos de firebase, para mostrarlos por pantalla.

Cuando consulto los productos de firebase, muestra unas  con una imagen y su corespondiente título, en conjunto, con un botón de `Leer más`

Al clickear el botón de `Leer más`, se reedirecciona a el detalle del producto, por pantalla se observa la imagen del producto seleccionado, con su título, precio y descripción. Acompañado de un `contador` y con boton de `Agregar al carrito` para escoger la cantidad a comprar. Al dar clic en el anterior botón se oculta el `contador` y aparece un  boton de `Ir al carrito`.

Una vez en el carrito se visualiza la cantidad de productos que se tengan en el carrito, además de unas `cards` con la imagen del producto, la cantidad, el precio y un botón de `eliminar`.
En la misma pantalla del carrito se encuentra el total final pagar por la compra. Además de un botón de `Seguir comprando`.

**Nota:** En caso de que el carrito este vacio, aparece un mensaje de "No hay elementos en el carrito" y un botón de `Realizar compras`.

Luego se debe de llenar un formulario con el nombre, teléfono, correo electrónico y la dirección, para poder dar clic en el botón de `Confirmar compra`.

Al clickear el botón de `Confirmar compra`, se limpia el carrito y aparece en pantalla un `SweetAlert` con el id de la compra generada en firebase y realiza el descuento en el stock de la cantidad comprada en firebase y se ve reflejado también por pantalla.

**Video de la Simulación de una Compra**

[![Alt text](https://es.seaicons.com/wp-content/uploads/2022/03/gif-icon1-1.png)](https://drive.google.com/file/d/1TyEWFxIBh2_F2F4yinIzx4NbXF1n-adj/view?usp=share_link) 


# Tecnologías empleadas

![](https://img.shields.io/badge/<HTML>-<COLOR>) ![](https://img.shields.io/badge/<CSS>-orange) ![](https://img.shields.io/badge/<JAVASCRIPT>-yellow) ![](https://img.shields.io/badge/<REACT>-9cf) ![](https://img.shields.io/badge/<BOOTSTRAP>-blueviolet) ![](https://img.shields.io/badge/<BOOTSTRAP ICONS>-ff69b4) ![](https://img.shields.io/badge/<SWEETALERT>-red)

# Primeros pasos con la aplicación Create React

**Nota Importante**

Al descargar un archivo del repositorio de Github, al ejecutar el comando `npm start`
el mismo, arroja el siguiente error:

### `'react-scripts' is not recognized as an internal or external command, operable program or batch file.`

**Solución**

Para solucionar unicamente ejecutas el siguiente comando `npm install react-scripts` y ahora si ejecutas `npm start` y ejecuta en el navegador.

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realice cambios.\
También puede ver errores de pelusa en la consola.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`


Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser implementada!

### `npm run eject`

**Nota: esta es una operación unidireccional. ¡Una vez que te `eject`, no puedes volver atrás!**

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede `eject` en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

En cambio, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga control total sobre ellos. Todos los comandos, excepto "expulsar", seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto estás por tu cuenta.

No tienes que usar nunca `eject`. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para hacerlo.