import 'dart:convert';
import 'package:http/http.dart' as http;

Future ofertaApi(Function(List<dynamic>) setStateCallback) async {
  final url = Uri.parse('https://rcservice.onrender.com/api/ofertas/oferta');

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

void actualizarOfertaEstado(String ofertaId, String nuevoEstado, oferta) async {
  final url = "https://rcservice.onrender.com/api/ofertas/oferta/$ofertaId";
  final arquitectura = {"id_status": nuevoEstado};
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
