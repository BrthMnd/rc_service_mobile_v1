import 'package:flutter/material.dart';

void main() => runApp(const EstadosPage());

class EstadosPage extends StatefulWidget {
  static String id = "EstadosPage";
  const EstadosPage({super.key});

  @override
  State<EstadosPage> createState() => _EstadosPageState();
}

class _EstadosPageState extends State<EstadosPage> {
  @override
  Widget build(BuildContext context) {
    return Center(child: Text("Estados"),);
  }
}