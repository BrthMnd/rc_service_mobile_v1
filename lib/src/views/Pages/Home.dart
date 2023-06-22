import '../../Api/OfertasApi.dart';
import 'package:flutter/material.dart';

void main() => runApp(const paginaHome());

// ignore: camel_case_types
class paginaHome extends StatefulWidget {
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
    return SingleChildScrollView(
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
                      return Card(
                        margin: const EdgeInsets.symmetric(
                            horizontal: 20, vertical: 20),
                        child: SizedBox(height: 150, child: cartaContainer(oferta)),
                      );
                    },
                  )
                : Center(
                    child: Text('No hay ofertas disponibles.'),
                  ),
      ],
    ));
  }
}

Widget cartaContainer(dynamic oferta) {
  return Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Inmueble:"),
          Text(oferta["inmueble"].toString()),
          Text("Mas Info"),
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
          // Inmueble
          Text("Estado:"),
          Text(oferta["OfertaEstado"].toString()),
          btnContainer(),
        ],
      ),
    ],
  );
}

Widget btnContainer() {
  return ElevatedButton(onPressed: () => {}, child: Text("Aplicar"));
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
