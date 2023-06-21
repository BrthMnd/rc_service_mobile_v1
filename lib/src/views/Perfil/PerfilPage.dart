import 'package:flutter/material.dart';
import '../../Api/UsuarioApi.dart';
void main() => runApp(const PerfilPage());

class PerfilPage extends StatefulWidget {
  static String id = "PerfilPage";
  const PerfilPage({super.key});

  @override
  State<PerfilPage> createState() => _PerfilPageState();
}

class _PerfilPageState extends State<PerfilPage> {
  Future <List<dynamic>> users = UsuarioApi();
   @override
   void initState() {
     super.initState();
     
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
                    child: ListView(
                                  children: [
                    ListTile(
                      title: Text("Nombre y Apellido: "),
                    ),
                    ListTile(
                      title: Text("Fecha de Registro: "),
                    ),
                    ListTile(
                      title: Text("Direcion: "),
                    ),
                    ListTile(
                      title: Text("Documento de identidad: "),
                    ),
                    ListTile(
                      title: Text("Telefono: "),
                    ),
                    ListTile(
                      title: Text("Email: "),
                    ),
                    ListTile(
                      leading: Icon(Icons.save_rounded),
                      title: Text("Hoja de vida "),
                      onTap: (){},
                    ),
                    
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        ElevatedButton(onPressed: (){}, child: Text("Editar"))
                      ],
                    )

                  
                                  ],
                                ),
                  )),
            ],
          ),
        ),
      ),
    );
  }
  
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
