## Ada Weather

### Instrucciones para correr el proyecto

Desde la carpeta correspondiente se pueden ejecutar los siguientes comandos:

1. `npm install`: Instala todas las dependencias necesarias para correr el proyecto correctamente. [Es necesario correrlo sólo la primera vez]

2. `npm run dev`: Comienza a correr la aplicación de forma local por lo que se puede ver desde el navegador accediendo a http://127.0.0.1:5173/

No es necesario volver a correr el proyecto cada vez que se realice un cambio sino que se verá automáticamente reflejando en el navegador.

> Hay veces que por problemas de configuración los cambios no se ven automáticamente reflejados en el navegador por lo que si te ocurre esto la opción rápida sería refrescar la pagina y si no, parar la ejecición del proyecto (Ctrl + C) y volver a ejecutar `npm start`. De todas formas si te ocurre esto contactate con tu PM.

### Ejercitación

3. Utilizar el archivo `App.js` para mantener actualizado el listado de ciudades a mostrar. Para ello debemos crearle un estado a este componente donde tengamos el array de ciudades:

```js
// App.js
...

//Modificar esta línea para poder manejar el estado
import React, { useState } from 'react'; //Se agregó el { useState }

...

function App() {
  const [cities, setCities] = useState([]);

  ...

}

export default App;
```

4. Ahora debemos crear una función para agregar nuevas ciudades a nuestro estado `cities` y se la pasaremos al `SearchBar` mediante el `Nav`.

```js
// App.js

...

function App() {

  ...

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    setCities([...cities, ciudadEjemplo]);
  }

}

export default App;
```

5. En este punto ya la función debería ejecutarse ya que en ejercitaciones anteriores ya estabamos ejecutando esta funcion. Si no es asi, deberíamos modificar el componente `Nav` para que reciba la función `onSearch` como parámetro y se la pase al componente `SearchBar` para que cuando se haga click en el botón `Agregar` se ejecute la función `onSearch` con el nombre de la ciudad que en los puntos siguiente ingresara el usuario (Actualmente "Cairns").

````js

```js
//SearchBar.jsx

export default function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch("Cairns");
      }}
    >
      <input type="text" placeholder="Ciudad..." />
      <input type="submit" value="Agregar" />
    </form>
  );
}
````

Si observamos el código anterior estamos llamando a la función `onSearch` con un parámetro ya fijo pero quisiéramos que ese parámetro dependa del input ingresado por el usuario.

6. Modificar el componente `SearchBar` para que mantenga un estado interno del nombre de la ciudad (`city`) escrita por el usuario y que cuando haya un cambio en el input lo detecte mediante el listener `onChange` y actualice dicho estado. Adicionalmente cambiar el parámetro de la funcion `onSearch` para que utilice el estado `city` en vez del valor fijo que tenía hasta ahora

Llegado a este punto cada vez que le den click al botón de `Agregar` se debe incluir una nueva tarjeta con los datos que escribimos en el input

7. Modificar la función `onSearch` para que obtenga los datos necesarios desde la API de [openweather](https://openweathermap.org/current). Para ello pueden utilizar `axios` para hacer la llamada y obtener el resultado. En el caso de que la ciudad no exista deberíamos mostrar un mensaje indicándolo.

**IMPORTANTE**: Para poder realizar las llamadas a la API es necesario contar con una apiKey que como verán en el código debajo debe ser incluida dentro de la URL. La misma la podemos obtener creando una cuenta en la paǵina de [openweather](https://openweathermap.org/current).

```js
// App.js

  ...

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`)

      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            humidity: recurso.main.humidity,
            feels_like: recurso.main.feels_like,
            description: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities([...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

...

```

8. Por último en el ejercicio anterior habíamos creado el componente `Card` para que reciba una función como parámetro. Esta va a ser la encargada de eliminarla al momento de hacer click en el botón `X`. Para ello es necesario definir dicha función en `App.js` para que a partir del id recibido, elimina dicha cudad del array de ciudades del estado.

```js
// App.js

  ...

  function App() {

    ...

    function onClose(id) {
      setCities(cities.filter(c => c.id != id));
    }

    ...

```
