import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

export default function ListaPacientes() {
  const [busca, setBusca] = useState("");

  const pacientes = [
    { id: 1, nome: "Mané Garrincha", cpf: "123.xxx.xxx-xx" },
    { id: 2, nome: "Roberto Carlos", cpf: "123.xxx.xxx-xx" },
    { id: 3, nome: "Sandy Junior", cpf: "123.xxx.xxx-xx" },
    { id: 4, nome: "Marta Santos", cpf: "123.xxx.xxx-xx" },
  ];

  return (
    <View style={estilos.container}>

    <TouchableOpacity style={estilos.botaoVoltar}>
      <Ionicons name="arrow-back" size={32} color="#374151" />
    </TouchableOpacity>
    
      <View style={estilos.cabecalho}>
        <Text style={estilos.tituloCabecalho}>Pacientes</Text>
      </View>

      <View style={estilos.barraBusca}>
        <Ionicons name="search" size={24} color="#06b6d4" />
        <TextInput
          style={estilos.inputBusca}
          placeholder="Buscar paciente..."
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <ScrollView style={estilos.lista}>
        {pacientes.map((paciente) => (
          <TouchableOpacity key={paciente.id} style={estilos.cartaoPaciente}>
            <View style={estilos.iconeContainer}>
              <Ionicons name="person-circle-outline" size={32} color="#06b6d4" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={estilos.nomePaciente}>Nome: {paciente.nome}</Text>
              <Text style={estilos.cpfPaciente}>CPF: {paciente.cpf}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f8fc",
    padding: 16,
    alignItems: "center",
  },

  botaoVoltar: {
    marginBottom: 24,
    width: 40,
    marginRight: 250
  },

  cabecalho: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  tituloCabecalho: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
  },
  barraBusca: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  inputBusca: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#374151",
  },
  lista: {
    width: "100%",
  },
  cartaoPaciente: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  iconeContainer: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 6,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nomePaciente: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1f2937",
  },
  cpfPaciente: {
    fontSize: 14,
    fontWeight: "300",
    color: "#4b5563",
  },
});
