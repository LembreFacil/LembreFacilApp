import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HistoricoConsultas({ navigation }) {
  const consultas = [
    {
      id: 1,
      data: '15/09/2025',
      medico: 'Dr. Carlos Silva',
      especialidade: 'Ortopedista',
      cor: '#C084FC'
    },
    {
      id: 2,
      data: '15/09/2025',
      medico: 'Dr. Carlos Silva',
      especialidade: 'Ortopedista',
      cor: '#C084FC'
    },
    {
      id: 3,
      data: '15/09/2025',
      medico: 'Dr. Carlos Silva',
      especialidade: 'Ortopedista',
      cor: '#C084FC'
    },
  ];

  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.scrollView} contentContainerStyle={estilos.conteudoContainer}>

        <TouchableOpacity style={estilos.botaoVoltar}>
          <Ionicons name="arrow-back" size={32} color="#374151" />
        </TouchableOpacity>

        <View style={estilos.cabecalho}>
          <View>
            <Text style={estilos.tituloCabecalho}>Historico de</Text>
            <Text style={estilos.tituloCabecalho}>Consultas</Text>
          </View>
          <View style={estilos.iconeCabecalhoContainer}>
            <View style={estilos.iconeCalendario}>
              <Ionicons name="calendar" size={32} color="#3B82F6" />
            </View>
            <View style={estilos.iconeNotificacao}>
              <Ionicons name="add" size={18} color="white" />
            </View>
          </View>
        </View>

        <View style={estilos.cardPaciente}>
          <Text style={estilos.labelPaciente}>Paciente</Text>
          <Text style={estilos.nomePaciente}>Roberto Carlos</Text>
        </View>

        {consultas.map((consulta) => (
          <View key={consulta.id} style={estilos.cardConsulta}>
            <View style={estilos.conteudoConsulta}>
              <View style={[estilos.iconeConsulta, { backgroundColor: consulta.cor }]}>
                <Ionicons name="calendar" size={24} color="white" />
              </View>
              <View style={estilos.infoConsulta}>
                <Text style={estilos.dataConsulta}>{consulta.data}</Text>
                <Text style={estilos.medicoConsulta}>{consulta.medico}</Text>
                <Text style={estilos.especialidadeConsulta}>{consulta.especialidade}</Text>
              </View>
            </View>
            <View style={[estilos.iconeArquivo, { backgroundColor: consulta.cor }]}>
              <Ionicons name="document" size={28} color="white" />
            </View>
          </View>
        ))}

      </ScrollView>

      <View style={estilos.footerContainer}>
        <TouchableOpacity style={estilos.botaoExportar}>
          <Text style={estilos.textoExportar}>Exportar consolidado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F8FC',
  },
  scrollView: {
    flex: 1,
  },
  conteudoContainer: {
    padding: 20,
    paddingBottom: 120,
  },
  botaoVoltar: {
    marginBottom: 20,
    width: 40,
  },
  cabecalho: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  tituloCabecalho: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    lineHeight: 28,
  },
  iconeCabecalhoContainer: {
    position: 'relative',
  },
  iconeCalendario: {
    width: 56,
    height: 56,
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeNotificacao: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#86EFAC',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPaciente: {
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
    fontSize: 12,
    fontWeight: '400',
    color: '#6B7280',
    marginBottom: 4,
  },
  nomePaciente: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  cardConsulta: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  conteudoConsulta: {
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  iconeConsulta: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  infoConsulta: {
    flex: 1,
  },
  dataConsulta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  medicoConsulta: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: 2,
  },
  especialidadeConsulta: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  iconeArquivo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#E8F8FC',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#D1E7F0',
  },
  botaoExportar: {
    backgroundColor: '#86EFAC',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  textoExportar: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
});