import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../../Api/UsuarioApi.dart';
void main() => runApp(const PerfilPage());

class PerfilPage extends StatefulWidget {
  static String id = "PerfilPage";
  const PerfilPage({super.key});

  @override
  State<PerfilPage> createState() => _PerfilPageState();
}

class _PerfilPageState extends State<PerfilPage> {
  List<dynamic> users = [];
  bool isLoading = false;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    LoadingApiUser();
  }
  void LoadingApiUser(){
    setState(() {
      isLoading = true;
    });
    UsuarioApi((res){
        print(res);
      setState((){
        users = res;
        isLoading = false;
        
      });

    });

  }


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      home: Scaffold(
        body: Center(
          child: Column(
            children: [
              perfilImage(),
              Expanded(
                  child: Drawer(
                child: isLoading
          ? Center(
              child: CircularProgressIndicator(),
            )
          :users.isNotEmpty ?  ListView(
                  children: [
                    ListTile(
                      title: Text("Nombre y Apellido: "+ users[0]['nombre'].toString() + " "+users[0]['apellido'].toString()),
                    ),
                    ListTile(
                      title: Text("Fecha de Registro: "+ users[0]['fechaRegistro'].toString()),
                    ),
                    ListTile(
                      title: Text("Direcion: "+ users[0]['direccion'].toString()),
                    ),
                    ListTile(
                      title: Text("Documento de identidad: "+ users[0]['NumeroIdentificacionPersonal'].toString()),
                    ),
                    ListTile(
                      title: Text("Telefono: "+ users[0]['telefono'].toString()),
                    ),
                    ListTile(
                      title: Text("Email: "+ users[0]['email'].toString()),
                    ),
                    ListTile(
                      leading: Icon(Icons.save_rounded),
                      title: Text("Hoja de vida: PDF"),
                      onTap: () {},
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        ElevatedButton(onPressed: () {}, child: Text("Editar"))
                      ],
                    )
                  ],
                ): Center(
                  child: Text('No hay usuarios disponibles.'),
                ),
              )
              )
              ,
            ],
          ),
        ),
      ),
    );
  }
   

  // void UsuarioApi() async {
  //   final url = Uri.parse(
  //       'https://api-flutter-proyectrcservice.onrender.com/usuario/5');

  //   try {
  //     final response = await http.get(url);

  //     if (response.statusCode == 200) {
  //       final data = response.body;
  //       // print(data);
  //       final res = jsonDecode(data);
  //       print(res);
  //       setState(() {
  //         users = res;
  //       });
  //     } else {
  //       print('Error de solicitud: ${response.statusCode}');
  //     }
  //   } catch (e) {
  //     // Error en la conexión
  //     print('Error de conexión: $e');
  //   }
  // }
}

Widget perfilImage() {
  return Padding(
    padding: const EdgeInsets.only(top: 40),
    child: SizedBox(
        child: Icon(
      Icons.account_box_rounded,
      size: 250,
    )),
  );
}
