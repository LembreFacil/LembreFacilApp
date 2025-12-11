import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Medicamentos({ navigation }) {
  const [medicamentos, setMedicamentos] = useState([
    { id: 1, nome: 'Metformina', tomado: false, horarioTomado: null },
    { id: 2, nome: 'Losartana', tomado: false, horarioTomado: null },
    { id: 3, nome: 'Dipirona', tomado: false, horarioTomado: null },
  ]);

  const toggleMedicamento = (id) => {
    setMedicamentos(medicamentos.map(med => 
      med.id === id ? { 
        ...med, 
        tomado: !med.tomado,
        horarioTomado: !med.tomado ? new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : null
      } : med
    ));
  };

  const handleAdicionarMedicamento = () => {
    navigation.navigate('NovoMedicamento');
  };

  const handleInformacaoMedicamento = (medicamento) => {
    navigation.navigate('InformacaoMedicamento', { medicamento });
  };

  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.scrollView} contentContainerStyle={estilos.conteudoContainer}>

        <TouchableOpacity style={estilos.botaoVoltar}>
          <Ionicons name="arrow-back" size={32} color="#374151" />
        </TouchableOpacity>

        <View style={estilos.cabecalho}>
          <Text style={estilos.tituloCabecalho}>Medicamentos</Text>
          <View style={estilos.iconeCabecalhoContainer}>
            <Ionicons name="medkit-outline" size={40} color="#6366F1" />
            <View style={estilos.iconeAdicionar}>
              <Ionicons name="add" size={20} color="white" />
            </View>
          </View>
        </View>

        <View style={estilos.cartaoPaciente}>
          <Text style={estilos.labelPaciente}>Paciente</Text>
          <Text style={estilos.nomePaciente}>Mané Garrincha</Text>
        </View>

        {medicamentos.map((med) => (
          <View key={med.id} style={estilos.containerMedicamento}>
            <TouchableOpacity 
              style={[
                estilos.cartaoMedicamento,
                med.tomado && estilos.cartaoMedicamentoTomado
              ]}
              onPress={() => toggleMedicamento(med.id)}
            >
              <View style={estilos.iconeMedicamento}>
                <Ionicons name="medkit" size={32} color="#EC4899" />
              </View>
              <View style={estilos.infoMedicamento}>
                <Text style={[
                  estilos.nomeMedicamento,
                  med.tomado && estilos.nomeMedicamentoTomado
                ]}>
                  {med.nome}
                </Text>
                {med.tomado && med.horarioTomado && (
                  <Text style={estilos.horarioTomado}>
                    Tomado às {med.horarioTomado}
                  </Text>
                )}
              </View>
              <View style={estilos.checkbox}>
                {med.tomado ? (
                  <Ionicons name="checkmark-circle" size={28} color="#10B981" />
                ) : (
                  <Ionicons name="ellipse-outline" size={28} color="#D1D5DB" />
                )}
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={estilos.botaoInfo}
              onPress={() => handleInformacaoMedicamento(med)}
            >
              <Ionicons name="information-circle" size={32} color="white" />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity 
          style={estilos.botaoAdicionar}
          onPress={handleAdicionarMedicamento}
        >
          <Ionicons name="add-circle" size={48} color="#06B6D4" />
          <Text style={estilos.textoAdicionar}>Adicionar Medicamento</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f8fc', 
  },
  scrollView: {
    flex: 1,
  },
  conteudoContainer: {
    padding: 24,
  },
  botaoVoltar: {
    marginBottom: 24,
    width: 40,
  },
  cabecalho: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  tituloCabecalho: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
  },
  iconeCabecalhoContainer: {
    position: 'relative',
    marginLeft: 16,
  },
  iconeAdicionar: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#10B981',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartaoPaciente: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  labelPaciente: {
    fontSize: 14,
    fontWeight: '300',
    color: '#6B7280',
    marginBottom: 4,
  },
  nomePaciente: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  containerMedicamento: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  cartaoMedicamento: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cartaoMedicamentoTomado: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#10B981',
  },
  iconeMedicamento: {
    marginRight: 12,
  },
  infoMedicamento: {
    flex: 1,
  },
  nomeMedicamento: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  nomeMedicamentoTomado: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  horarioTomado: {
    fontSize: 12,
    color: '#10B981',
    marginTop: 4,
    fontWeight: '500',
  },
  checkbox: {
    marginLeft: 'auto',
  },
  botaoInfo: {
    backgroundColor: '#06B6D4',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  botaoAdicionar: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#06B6D4',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  textoAdicionar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#06B6D4',
    marginTop: 12,
  },
});