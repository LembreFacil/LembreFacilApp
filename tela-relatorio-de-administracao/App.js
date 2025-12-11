import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RelatorioAdministracao({ navigation }) {
  const [cuidadorSelecionado, setCuidadorSelecionado] = useState('Selecione');
  const [pacienteSelecionado, setPacienteSelecionado] = useState('Selecione');
  const [periodoSelecionado, setPeriodoSelecionado] = useState('Selecione');

  const registros = [
    {
      id: 1,
      horario: '08h',
      medicamento: 'Dipirona 500mg',
      paciente: 'Ayrton da Silva',
      cuidador: 'Fabio M.',
      status: 'Administrado no horario',
      cor: '#86EFAC',
      icone: '✓'
    },
    {
      id: 2,
      horario: '14h',
      medicamento: 'Amoxicilina 750mg cp',
      paciente: 'Ursula Manoela',
      cuidador: 'Fabio M.',
      status: 'Administrado no horario',
      cor: '#FCD34D',
      icone: '✓'
    },
    {
      id: 3,
      horario: '08h',
      medicamento: 'Rosuvastatina 10mg cp',
      paciente: 'Maria Antonia',
      cuidador: 'Fabio M.',
      status: 'Nao administrado',
      cor: '#FCA5A5',
      icone: '✗'
    },
  ];

  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.scrollView} contentContainerStyle={estilos.conteudoContainer}>
        
        <TouchableOpacity style={estilos.botaoVoltar}>
          <Ionicons name="arrow-back" size={32} color="#374151" />
        </TouchableOpacity>

        <View style={estilos.cabecalho}>
          <Text style={estilos.tituloCabecalho}>Relatorio de Administracao</Text>
          <View style={estilos.iconeCabecalho}>
            <Ionicons name="document-text" size={32} color="#6366F1" />
            <View style={estilos.iconeNotificacao}>
              <Ionicons name="checkmark" size={16} color="white" />
            </View>
          </View>
        </View>

        <View style={estilos.cardFiltros}>
          <View style={estilos.filtro}>
            <Text style={estilos.labelFiltro}>Cuidador:</Text>
            <TouchableOpacity style={estilos.seletor}>
              <Text style={estilos.textoSeletor}>{cuidadorSelecionado}</Text>
              <Ionicons name="chevron-down" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={estilos.filtro}>
            <Text style={estilos.labelFiltro}>Paciente:</Text>
            <TouchableOpacity style={estilos.seletor}>
              <Text style={estilos.textoSeletor}>{pacienteSelecionado}</Text>
              <Ionicons name="chevron-down" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={estilos.filtro}>
            <Text style={estilos.labelFiltro}>Periodo:</Text>
            <TouchableOpacity style={estilos.seletor}>
              <Text style={estilos.textoSeletor}>{periodoSelecionado}</Text>
              <Ionicons name="chevron-down" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={estilos.botaoAplicar}>
            <Text style={estilos.textoAplicar}>Aplicar filtro</Text>
          </TouchableOpacity>
        </View>

        <Text style={estilos.listaRegistroTitulo}>Lista de registro</Text>

        <View style={estilos.headerTabela}>
          <Text style={[estilos.coluna, { flex: 2 }]}>Titulo Administracao</Text>
          <Text style={[estilos.coluna, { flex: 1 }]}>128</Text>
          <Text style={[estilos.coluna, { flex: 1 }]}>Ativos</Text>
          <Text style={[estilos.coluna, { flex: 1 }]}>12</Text>
          <Text style={[estilos.coluna, { flex: 1.5 }]}>Perdas/ Descartes</Text>
          <Text style={[estilos.coluna, { flex: 1 }]}>8</Text>
        </View>

        {registros.map((registro) => (
          <View key={registro.id} style={[estilos.cartaoRegistro, { backgroundColor: registro.cor }]}>
            <View style={estilos.iconeRegistro}>
              <Ionicons name="calendar" size={32} color="white" />
            </View>
            <View style={estilos.infoRegistro}>
              <Text style={estilos.horarioRegistro}>{registro.horario}- {registro.medicamento}</Text>
              <Text style={estilos.detalhesRegistro}>Pac: {registro.paciente}</Text>
              <Text style={estilos.detalhesRegistro}>Cuid: {registro.cuidador}</Text>
              <Text style={estilos.statusRegistro}>{registro.status}</Text>
            </View>
            <View style={estilos.iconeStatus}>
              <Text style={estilos.textoIconeStatus}>{registro.icone}</Text>
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
    paddingBottom: 100,
  },
  botaoVoltar: {
    marginBottom: 20,
    width: 40,
  },
  cabecalho: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  tituloCabecalho: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    flex: 1,
  },
  iconeCabecalho: {
    position: 'relative',
  },
  iconeNotificacao: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#10B981',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFiltros: {
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
  filtro: {
    marginBottom: 12,
  },
  labelFiltro: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 6,
  },
  seletor: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoSeletor: {
    fontSize: 14,
    color: '#6B7280',
  },
  botaoAplicar: {
    backgroundColor: '#86EFAC',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 12,
  },
  textoAplicar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  listaRegistroTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
    marginTop: 8,
  },
  headerTabela: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  coluna: {
    fontSize: 10,
    fontWeight: '600',
    color: '#6B7280',
    marginRight: 8,
  },
  cartaoRegistro: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  iconeRegistro: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoRegistro: {
    flex: 1,
  },
  horarioRegistro: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  detalhesRegistro: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 2,
  },
  statusRegistro: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1F2937',
    marginTop: 4,
  },
  iconeStatus: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoIconeStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
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