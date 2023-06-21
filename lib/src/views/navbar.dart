import 'package:flutter/material.dart';
import 'Pages/Home.dart';
import 'Pages/Estados.dart';
import '../config/Configuracion.dart';
/// Flutter code sample for [BottomNavigationBar].

void main() => runApp(const BtnnNavigationApp());

class BtnnNavigationApp extends StatelessWidget {
  static String id = "navigation";
  const BtnnNavigationApp({super.key});

  @override
  Widget build(BuildContext context) {
    return BtnnNavigation();
  }
}

class BtnnNavigation extends StatefulWidget {
  const BtnnNavigation({super.key});

  @override
  State<BtnnNavigation> createState() =>
      _BtnnNavigationState();
}

class _BtnnNavigationState
    extends State<BtnnNavigation> {
  int _selectedIndex = 0;
  static const List<Widget> _widgetOptions = <Widget>[
    paginaHome(),
    EstadoPage(),
    ConfiguracionPage(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: menuBar(_selectedIndex, _onItemTapped),
    );
  }
}

Widget menuBar(selectedIndex, onItemTapped) {
  return BottomNavigationBar(
    items: const <BottomNavigationBarItem>[
      BottomNavigationBarItem(
        icon: Icon(Icons.home),
        label: 'Home',
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.assignment),
        label: 'Contratacion',
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.settings),
        label: 'Configuracion',
      ),
    ],
    currentIndex: selectedIndex,
    selectedItemColor: const Color.fromARGB(255, 0, 173, 165),
    onTap: onItemTapped,
);
}