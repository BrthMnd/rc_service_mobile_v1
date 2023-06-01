import 'package:flutter/material.dart';
import 'package:login_prueba/src/Login/registro/Registro_datos.dart';
import 'package:login_prueba/src/config/Configuracion.dart';
import './src/Login/login_pages.dart';
import './src/Login/sigIn_pages.dart';
import './src/views/navbar.dart';
import './src/Login/registro/Registro_datos.dart';
void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Login',
      initialRoute: LoginPage.id,
      routes: {
        LoginPage.id: (context) => LoginPage(),
        RegistrarUsuario.id: (context) => RegistrarUsuario(),
        BtnnNavigationApp.id: (context) => const BtnnNavigationApp(),
        ConfiguracionPage.id: (context) => const ConfiguracionPage(),
        DatosDeUsuario.id: (context) =>  DatosDeUsuario(),
      }
    );
  }
}