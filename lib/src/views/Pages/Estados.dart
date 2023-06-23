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
    
      child:Column(
        children: [
          tituloContainer(),
          buscadorContainer(),
          isLoading ? Center(child: CircularProgressIndicator()):
              _ofertas.isNotEmpty ? ListView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: _ofertas.length,
            itemBuilder: (BuildContext context, int index) {
              final oferta = _ofertas[index];
              
              if(oferta["OfertaEstado"]!= "Disponible"){
    
              return 
              Card(
                margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
                child: SizedBox(
                  height: 150, 
                child: cartaContainer(oferta, context)),
              );
              } else {
                return Container();
              }
            },
          )
          : Center( child:Text("No hay Contratos")),
        ],
      )
      ),
    );
  }
}

Widget cartaContainer(oferta, context) {
  return  Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Inmueble:"),
          Text(oferta["inmueble"]),
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
          Text("Electricidad"),
          Text("Estado:"),
          Text(oferta["OfertaEstado"]),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Descripcion:"),
          Text("Mas Info"),
          btnContainer(oferta["id"], context, oferta),
        ],
      ),
    ],
  );
}


Widget btnContainer(ofertaId, context,oferta) {
  return ElevatedButton(onPressed: () => {

    actualizarOfertaEstado(ofertaId, "Disponible", oferta),
    Navigator.pushReplacementNamed(context, BtnnNavigationApp.id)


  }, child: Text("Desaplicar"));
}


Widget tituloContainer() {
  return Container(
    margin: const EdgeInsets.only(top: 80),
    child: const Text("Contratacion", 
    style: TextStyle(fontSize: 40),));
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
