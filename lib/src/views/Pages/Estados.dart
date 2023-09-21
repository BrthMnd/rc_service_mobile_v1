import 'package:flutter/material.dart';
import 'package:login_prueba/src/views/navbar.dart';
import '../../Api/OfertasApi.dart';

void main() => runApp(const EstadoPage());

// ignore: camel_case_types
class EstadoPage extends StatefulWidget {
  // static String id = "EstadoPage";
  const EstadoPage({super.key});

  @override
  State<EstadoPage> createState() => _EstadoPageState();
}

// ignore: camel_case_types
class _EstadoPageState extends State<EstadoPage> {
  List<dynamic> _ofertas = [];
  bool isLoading = false;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    loadingDataApi();
  }

  void loadingDataApi() {
    setState(() {
      isLoading = true;
    });
    ofertaApi((res) {
      setState(() {
        _ofertas = res;
        isLoading = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
          child: Column(
        children: [
          tituloContainer(),
          buscadorContainer(),
          isLoading
              ? Center(child: CircularProgressIndicator())
              : _ofertas.isNotEmpty
                  ? ListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: _ofertas.length,
                      itemBuilder: (BuildContext context, int index) {
                        final oferta = _ofertas[index];

                        if (oferta["id_status"]["name"] != "Activo") {
                          return Card(
                            margin: const EdgeInsets.symmetric(
                                horizontal: 20, vertical: 20),
                            child: SizedBox(
                                height: 150,
                                child: cartaContainer(oferta, context)),
                          );
                        } else {
                          return Container();
                        }
                      },
                    )
                  : Center(child: Text("No hay Contratos")),
        ],
      )),
    );
  }
}

Widget cartaContainer(dynamic oferta, context) {
  var inmueble = oferta["id_property"];
  return Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Inmueble:"),
          Text(inmueble["direccion"].toString()),
          GestureDetector(
            onTap: () => showDialog<String>(
              context: context,
              builder: (BuildContext context) => AlertDialog(
                title: Text(inmueble["tipoPropiedad"].toString().toUpperCase()),
                content: SingleChildScrollView(
                  child: Column(
                    children: [
                      Text("Direccion:"),
                      Text(inmueble["direccion"].toString()),
                      Text("Caracteristicas:"),
                      Text(inmueble["metrosCuadrados"].toString() + " m2 "),
                      Text(inmueble["nHabitaciones"].toString() +
                          " Habitaciones"),
                      Text(inmueble["nBanos"].toString() + " Habitaciones")
                    ],
                  ),
                ),
                actions: <Widget>[
                  TextButton(
                    onPressed: () => Navigator.pop(context, 'OK'),
                    child: const Text('OK'),
                  ),
                ],
              ),
            ),
            child: Text(
              "Mas Info",
              style: TextStyle(
                decoration: TextDecoration.underline,
                color: Colors.blue,
              ),
            ),
          ),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Servicio
          Text("Servicio:"),
          Text(oferta["id_service"]["Nombre_Servicio"].toString()),
          Text("  "),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Text("Estado:"),
          Text(oferta["id_status"]["name"].toString()),
          btnContainer(oferta["_id"], context, oferta),
        ],
      ),
    ],
  );
}

Widget btnContainer(ofertaId, context, oferta) {
  const EstadoParaDesaplicar = "650bcfe1802e33d589bd5b8c";
  return ElevatedButton(
      onPressed: () => {
            actualizarOfertaEstado(ofertaId, EstadoParaDesaplicar, oferta),
            Navigator.pushReplacementNamed(context, BtnnNavigationApp.id)
          },
      child: Text("Desplicar"));
}

Widget tituloContainer() {
  return Container(
      margin: const EdgeInsets.only(top: 80),
      child: const Text(
        "Contratacion",
        style: TextStyle(fontSize: 40),
      ));
}

Widget buscadorContainer() {
  return Container(
    margin: EdgeInsets.symmetric(vertical: 20, horizontal: 20),
    child: TextFormField(
      decoration: const InputDecoration(
        prefixIcon: Icon(Icons.search),
        border: OutlineInputBorder(),
        labelText: 'Buscador de Servicio',
      ),
    ),
  );
}
