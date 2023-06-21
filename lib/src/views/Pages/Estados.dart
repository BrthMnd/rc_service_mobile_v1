import 'package:flutter/material.dart';

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
          itemCount: 3,
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
          Text("Electricidad"),
          Text("Estado:"),
          Text("Aplicando"),
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
  return ElevatedButton(onPressed: ()=>{}, child:  Text("Desaplicar"));
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
