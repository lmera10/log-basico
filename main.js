const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    // Verificar si los campos están vacíos
    if (!username.value || !password.value) {
        alert('Por favor, ingrese tanto el nombre de usuario como la contraseña');
        return;
    }

    const data = {
        username: username.value,
        password: password.value
    };

    // Aquí se procesará el login
    login(data);
});
function login(data) {
    fetch('https://example.com/login', {  // Reemplaza por tu URL del backend
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(result => {
        // Aquí manejas la respuesta
        if (result.success) {
            alert('Login exitoso');
            // Redirigir al usuario a otra página
            window.location.href = '/home';  // Cambia esta URL a la página que desees
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con el login');
    });
}
function login(data) {
    // Simulación de una respuesta del servidor
    const mockResponse = {
        success: data.username === 'admin' && data.password === '1234',  // Verificar usuario/contraseña
        message: data.username === 'admin' ? 'Login exitoso' : 'Credenciales incorrectas'
    };

    // Simular un retraso en la respuesta del servidor
    setTimeout(() => {
        if (mockResponse.success) {
            alert(mockResponse.message);
            window.location.href = '/home';  // Simular una redirección tras el login
        } else {
            alert(mockResponse.message);
        }
    }, 1000);
}