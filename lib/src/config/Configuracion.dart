import 'package:flutter/material.dart';

void main() => runApp(const ConfiguracionPage());

class ConfiguracionPage extends StatefulWidget {
  static String id = "ConfigutationPage";
  const ConfiguracionPage({super.key});

  @override
  State<ConfiguracionPage> createState() => _ConfiguracionPageState();
}

class _ConfiguracionPageState extends State<ConfiguracionPage> {
  @override
  Widget build(BuildContext context) {
    return const Center(child: Text("COnfig"),);
  }
}