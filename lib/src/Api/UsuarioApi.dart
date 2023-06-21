import 'dart:convert';

import 'package:http/http.dart' as http;
import '../views/Perfil/PerfilPage.dart';

Future <List<dynamic>> UsuarioApi() async{
  final url = Uri.parse('https://api-flutter-proyectrcservice.onrender.com/usuario/5');

try {
    var response = await http.get(url);
    
    if (response.statusCode == 200) {
      var data = response.body;
      // print(data);
      return jsonDecode(data);
    } else {
      print('Error de solicitud: ${response.statusCode}');
      return [];
    }
  } catch (e) {
    // Error en la conexión
    print('Error de conexión: $e');
    return [];
  }

  
}