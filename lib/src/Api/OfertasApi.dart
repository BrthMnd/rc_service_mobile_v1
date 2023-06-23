import 'dart:convert';
import 'package:http/http.dart' as http;

Future ofertaApi(Function(List<dynamic>) setStateCallback) async {
  final url =
      Uri.parse('https://api-flutter-proyectrcservice.onrender.com/oferta');

  try {
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final data = response.body;
      // print(data);
      final res = jsonDecode(data);
      // print(res);
      setStateCallback(res);
    } else {
      print('Error de solicitud: ${response.statusCode}');
    }
  } catch (e) {
    // Error en la conexión
    print('Error de conexión: $e');
  }
}

void actualizarOfertaEstado(int ofertaId, String nuevoEstado, oferta) async {
  final url =
      'https://api-flutter-proyectrcservice.onrender.com/oferta/$ofertaId'; 
    final arquitectura = {
      "id": ofertaId,
      "servicios": oferta["servicios"], 
      "descripcion": oferta["descripcion"], 
      "inmueble": oferta["inmueble"], 
      "OfertaEstado": "$nuevoEstado"
    };
    print(arquitectura);
  try {
    final response = await http.put(
      Uri.parse(url),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(arquitectura),
    );

    if (response.statusCode == 200) {
      print('Oferta actualizada correctamente');
    } else {
      print(
          'Error al actualizar la oferta. Código de estado: ${response.statusCode}');
    }
  } catch (e) {
    print('Error al realizar la solicitud: $e');
  }
}
