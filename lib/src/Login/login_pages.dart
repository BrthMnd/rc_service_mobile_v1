import 'dart:convert';
import 'package:flutter/material.dart';
import './sigIn_pages.dart';
import '../views/navbar.dart';
import 'package:http/http.dart' as http;

class LoginPage extends StatefulWidget {
  static String id = "LoginPage";

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  TextEditingController usernameController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
        body: Container(
          decoration: BoxDecoration(
              image: DecorationImage(
                  image: const AssetImage("assets/back.jpg"),
                  fit: BoxFit.cover)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              bienvenidos(),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
                child: Column(
                  children: [
                    inputsFields(),
                    spaces(),
                    inputsPassword(),
                    spaces(),
                    btnEnviar(),
                    spaces(),
                    registrar(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget bienvenidos() {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
      padding: const EdgeInsets.symmetric(vertical: 20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: const Color.fromARGB(205, 60, 233, 173),
      ),
      child: const Center(
        child: Text(
          "Bienvenidos a Rc_Service",
          style: TextStyle(fontSize: 40),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }

  Widget inputsFields() {
    return Center(
      child: TextField(
        controller: usernameController,
        decoration: InputDecoration(
          hintText: "Usuario@gmail.com",
          fillColor: Colors.white,
          filled: true,
        ),
      ),
    );
  }

  Widget inputsPassword() {
    return Center(
      child: TextField(
        controller: passwordController,
        obscureText: true,
        decoration: InputDecoration(
          hintText: "Password",
          fillColor: Colors.white,
          filled: true,
        ),
      ),
    );
  }

  Widget spaces() {
    return Container(
      margin: EdgeInsets.all(20),
    );
  }

  Widget btnEnviar() {
    return ElevatedButton(
      onPressed: iniciarSesion,
      style: ElevatedButton.styleFrom(
        backgroundColor: Color.fromARGB(255, 92, 255, 206),
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        minimumSize: Size(200, 40),
      ),
      child: Text('Enviar'),
    );
  }

  Widget registrar() {
    return ElevatedButton(
      onPressed: () {
        print('Botón presionado');
        Navigator.pushNamed(context, RegistrarUsuario.id);
      },
      style: ElevatedButton.styleFrom(
        backgroundColor: Color.fromARGB(195, 92, 255, 206),
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
        minimumSize: Size(200, 40),
      ),
      child: Text('Registrar'),
    );
  }

  void iniciarSesion() async {
    String username = usernameController.text;
    String password = passwordController.text;

    // Realizar la solicitud para obtener los detalles del usuario desde la API
    var response = await http.get(
      Uri.parse(
          'https://api-flutter-proyectrcservice.onrender.com/usuario?nombre=$username'),
    );

    if (response.statusCode == 200) {
      // Analizar la respuesta de la API
      var userData = json.decode(response.body);

      // Verificar si se encontró un usuario con el nombre de usuario proporcionado
      if (userData.isNotEmpty) {
        var user = userData[0];
        String apiUsername = user['nombre'];
        String apiPassword = user['apellido'];

        // Verificar si los detalles coinciden
        if (apiUsername == username && apiPassword == password) {
          // Inicio de sesión exitoso, redirigir a la siguiente pantalla
          Navigator.pushNamed(context, BtnnNavigationApp.id);
        } else {
          // Mostrar un diálogo de error de inicio de sesión
          showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text('Error de inicio de sesión'),
                content: Text('Credenciales incorrectas.'),
                actions: [
                  TextButton(
                    onPressed: () => Navigator.pop(context),
                    child: Text('Aceptar'),
                  ),
                ],
              );
            },
          );
        }
      } else {
        // Mostrar un diálogo de error de inicio de sesión
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('Error de inicio de sesión'),
              content: Text('El usuario no existe.'),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text('Aceptar'),
                ),
              ],
            );
          },
        );
      }
    } else {
      // Mostrar un diálogo de error de conexión o solicitud
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Error de conexión'),
            content: Text('No se pudo obtener los detalles del usuario.'),
            actions: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: Text('Aceptar'),
              ),
            ],
          );
        },
      );
    }
  }
}
