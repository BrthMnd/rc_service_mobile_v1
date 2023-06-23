import 'package:login_prueba/src/views/navbar.dart';

import '../../Api/OfertasApi.dart';
import 'package:flutter/material.dart';

void main() => runApp(const paginaHome());

// ignore: camel_case_types
class paginaHome extends StatefulWidget {
  static String id = "pagina-home";
  const paginaHome({super.key});

  @override
  State<paginaHome> createState() => _paginaHomeState();
}

// ignore: camel_case_types
class _paginaHomeState extends State<paginaHome> {
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
              ? Center(
                  child: CircularProgressIndicator(),
                )
              : _ofertas.isNotEmpty
                  ? ListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: _ofertas.length,
                      itemBuilder: (BuildContext context, int index) {
                        final oferta = _ofertas[index];
                        if (oferta["OfertaEstado"] == "Disponible") {
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
                  : Center(
                      child: Text('No hay ofertas disponibles.'),
                    ),
        ],
      )),
    );
  }
}

Widget cartaContainer(dynamic oferta, context) {
  return Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Inmueble:"),
          Text(oferta["inmueble"].toString()),
          GestureDetector(
            onTap: () => showDialog<String>(
        context: context,
        builder: (BuildContext context) => AlertDialog(
          title:  Text(oferta["inmueble"].toString().toUpperCase()),
          content: Text(oferta["descripcion"].toString()),
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
          Text(oferta["servicios"].toString()),
          Text("        "),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Text("Estado:"),
          Text(oferta["OfertaEstado"].toString()),
          btnContainer(oferta["id"], context, oferta),
        ],
      ),
    ],
  );
}

Widget btnContainer(ofertaId, context, oferta) {
  return ElevatedButton(
      onPressed: () => {
            actualizarOfertaEstado(ofertaId, "Aplicando", oferta),
            Navigator.pushReplacementNamed(context, BtnnNavigationApp.id)
          },
      child: Text("Aplicar"));
}

Widget tituloContainer() {
  return Container(
      margin: const EdgeInsets.only(top: 80),
      child: const Text(
        "Ofertas",
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
