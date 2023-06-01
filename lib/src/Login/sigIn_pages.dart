import 'package:flutter/material.dart';
import './login_pages.dart';
import './registro/Registro_datos.dart';
// ignore: use_key_in_widget_constructors
class RegistrarUsuario extends StatefulWidget {
  static String id = "RegistrarUsuario";

  @override
  State<RegistrarUsuario> createState() => _RegistrarUsuarioState();
}

class _RegistrarUsuarioState extends State<RegistrarUsuario> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
          resizeToAvoidBottomInset: false,
      body: Container(
        padding: EdgeInsets.symmetric(horizontal: 20),
          
          decoration: const BoxDecoration(
              image: DecorationImage(
                  image: AssetImage("assets/back.jpg"), fit: BoxFit.cover)),
          child:Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  bienvenidos(),
                  Column(children: [inputsFields(),spaces(), inputsPassword(),spaces(),inputsPassword(),spaces(), btnEnviar(context),spaces(),]),
                ]),
    )));
  }
}

Widget bienvenidos() {
  return Container(
    margin: const EdgeInsets.only(bottom: 20),
    padding: const EdgeInsets.symmetric(vertical: 20),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(20),
      color: Color.fromARGB(205, 60, 233, 173),
    ),
    child: Center(
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
    margin: EdgeInsets.all(10),
  );
}

Widget btnEnviar(context){
  return ElevatedButton(
            onPressed: () {
              print('Botón presionado');
              Navigator.pushNamed(context, DatosDeUsuario.id);
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Color.fromARGB(255, 92, 255, 206), // Color de fondo del botón
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20), 
              ),
              minimumSize: Size(200, 40), 
            ),
            child: Text('Enviar'), // Texto del botón
          );
}