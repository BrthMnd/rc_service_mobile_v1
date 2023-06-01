import 'package:flutter/material.dart';
import './sigIn_pages.dart';
import '../views/navbar.dart';

// ignore: use_key_in_widget_constructors
class LoginPage extends StatefulWidget {
  static String id = "LoginPage";

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
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
                child: Column(children: [
                  inputsFields(),
                  spaces(),
                  inputsPassword(),
                  spaces(),
                  btnEnviar(context),
                  spaces(),
                  registrar(context)
                ]),
              ),
            ]),
      ),
    ));
  }
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
    )),
  );
}

Widget inputsFields() {
  return Center(
      child: TextField(
    decoration: InputDecoration(
      hintText: "Usuario@gmail.com",
      fillColor: Colors.white,
      filled: true,
    ),
  ));
}

Widget inputsPassword() {
  return Center(
      child: TextField(
    obscureText: true,
    decoration: InputDecoration(
      hintText: "Password",
      fillColor: Colors.white,
      filled: true,
    ),
  ));
}

Widget spaces() {
  return Container(
    margin: EdgeInsets.all(20),
  );
}

Widget btnEnviar(context) {
  return ElevatedButton(
    onPressed: () {
      print('Botón Login');
      Navigator.pushNamed(context, BtnnNavigationApp.id);
    },
    style: ElevatedButton.styleFrom(
      backgroundColor:
          Color.fromARGB(255, 92, 255, 206), // Color de fondo del botón
      foregroundColor: Colors.white,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20),
      ),
      minimumSize: Size(200, 40),
    ),
    child: Text('Enviar'), // Texto del botón
  );
}

Widget registrar(context) {
  return ElevatedButton(
    onPressed: () {
      print('Botón presionado');
      Navigator.pushNamed(context, RegistrarUsuario.id);
    },
    style: ElevatedButton.styleFrom(
      backgroundColor:
          Color.fromARGB(195, 92, 255, 206), // Color de fondo del botón
      foregroundColor: Colors.white,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20),
      ),
      minimumSize: Size(200, 40),
    ),
    child: Text('Registrar'), // Texto del botón
  );
}
