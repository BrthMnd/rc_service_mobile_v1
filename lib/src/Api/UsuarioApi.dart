import 'dart:convert';
import 'package:http/http.dart' as http;

Future UsuarioApi(Function(List<dynamic>) setStateCallback) async {
    final url = Uri.parse(
        'https://api-flutter-proyectrcservice.onrender.com/usuario/5');

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) { 
        final data = response.body;
        // print(data);
        final res = jsonDecode(data);
        print(res);
        setStateCallback(res);

      } else {
        print('Error de solicitud: ${response.statusCode}');
      }
    } catch (e) {
      // Error en la conexión
      print('Error de conexión: $e');
    }
  }