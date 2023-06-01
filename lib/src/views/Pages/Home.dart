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
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(

    child:Column(
      children: [
        tituloContainer(),
        buscadorContainer(),
        ListView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: 10,
          itemBuilder: (BuildContext context, int index) {
            return  Card(
              margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
              child: SizedBox(
                height: 150, 
              child: cartaContainer()),
            );
          },
        ),
      ],
    )
    );
  }
}

Widget cartaContainer() {
  return  Column(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Inmueble:"),
          Text("Cl 45 A-40"),
          Text("Mas Info"),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Servicio
          Text("Servicio:"),
          Text("Electricidad"),
          Text("        "),
        ],
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          // Inmueble
          Text("Descripcion:"),
          Text("Mas Info"),
          btnContainer(),
        ],
      ),
    ],
  );
}


Widget btnContainer() {
  return ElevatedButton(onPressed: ()=>{}, child:  Text("Aplicar"));
}


Widget tituloContainer() {
  return Container(
    margin: const EdgeInsets.only(top: 80),
    child: const Text("Ofertas", 
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
