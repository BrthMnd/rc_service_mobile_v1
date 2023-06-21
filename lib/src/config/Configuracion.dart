import 'package:flutter/material.dart';
import 'package:login_prueba/src/views/Perfil/PerfilPage.dart';

void main() => runApp(const ConfiguracionPage());

class ConfiguracionPage extends StatefulWidget {
  static String id = "ConfigutationPage";
  const ConfiguracionPage({super.key});

  @override
  State<ConfiguracionPage> createState() => _ConfiguracionPageState();
}

class _ConfiguracionPageState extends State<ConfiguracionPage> {
  @override
  Widget build(BuildContext context) {
    return Drawer(

      child: ListView(
        children: [
          perfilContainer(),
          
          ListTile( leading: perfilRedirectContainer(),
          onTap: ()=>{
            Navigator.pushNamed(context, PerfilPage.id)

          },),
          ListTile( leading: configuracionRedirectContainer(),
          onTap: ()=>{

          },),
          ListTile( leading: ayudaRedirectContainer(),
          onTap: ()=>{},),
          ListTile( leading: temaOscuro(),
          onTap: ()=>{},),
    
    
    
        ],
      ),
    );
  }
}

Widget perfilContainer(){
  return const Icon(Icons.account_circle_outlined, size: 300, color: Color.fromARGB(255, 90, 90, 90),);
}
Widget perfilRedirectContainer(){
  return const Text("Perfil", style: TextStyle(fontSize: 20),);
   
}
Widget configuracionRedirectContainer(){
  return const Text("Configuracion", style: TextStyle(fontSize: 20));
}
Widget ayudaRedirectContainer(){
  return const Text("Ayuda", style: TextStyle(fontSize: 20));
}
Widget temaOscuro(){
  return const Text("Activar Oscuro/Claro", style: TextStyle(fontSize: 20));
}
