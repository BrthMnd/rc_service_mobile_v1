import 'package:flutter/material.dart';
import '../login_pages.dart';
import 'package:file_picker/file_picker.dart';

// ignore: use_key_in_widget_constructors
class DatosDeUsuario extends StatefulWidget {
  static String id = "DatosDeUsuario";

  @override
  State<DatosDeUsuario> createState() => _DatosDeUsuarioState();
}

class _DatosDeUsuarioState extends State<DatosDeUsuario> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomInset: false,
        body: Container(
          padding: EdgeInsets.symmetric(vertical: 90),
          height: 900,
          decoration: const BoxDecoration(
              image: DecorationImage(
                  image: AssetImage("assets/back.jpg"), fit: BoxFit.cover)),
          child: Column(mainAxisAlignment: MainAxisAlignment.start, children: [
            Column(children: [
              nameContainer(),
              spaces(),
              direccionContainer(),
              spaces(),
              adjuntarArchivo(),
              spaces(),
              btnEnviar(context),
              spaces(),
            ]),
          ]),
        ));
  }
}

Widget nameContainer() {
  return const TextField(
    keyboardType: TextInputType.name,
    decoration: InputDecoration(
      label: Text("Nombre"),
      hintText: "Vetulio Alcaheda",
      fillColor: Colors.white,
      filled: true,
    ),
  );
}
Widget direccionContainer() {
  return const TextField(
    keyboardType: TextInputType.streetAddress,
    decoration: InputDecoration(
      label: Text("Direccion"),
      hintText: "Cr 01 Cl 01 A-01",
      fillColor: Colors.white,
      filled: true,
    ),
  );
}
Widget adjuntarArchivo() {
  return const ElevatedButton(
  onPressed: openFilePicker,
  child: Text('Adjuntar documento'),  
);
}

Widget spaces() {
  return Container(
    margin: EdgeInsets.all(20),
  );
}

Widget btnEnviar(context) {
  return ElevatedButton(
    onPressed: () {
      print('Botón presionado');
      Navigator.pushNamed(context, LoginPage.id);
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

openFilePicker() async {
  FilePickerResult? result = await FilePicker.platform.pickFiles();

  if (result != null) {
    PlatformFile file = result.files.first;

    // Aquí puedes utilizar el archivo seleccionado
    print('Archivo seleccionado: ${file.name}');
  } else {
    // El usuario canceló la selección del archivo
  }
}