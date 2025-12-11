import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Geral({ navigation }) {
  const [notificacoes, setNotificacoes] = useState(1);

  const menuOpcoes = [
    { id: 1, label: 'Pacientes' },
    { id: 2, label: 'Configuracoes Pessoais' },
    { id: 3, label: 'Notificacoes' },
    { id: 4, label: 'Seguranca' },
    { id: 5, label: 'Ajuda' },
  ];

  const handleMenuPress = (label) => {
    alert(`Navegando para: ${label}`);
  };

  const handleNotificacoes = () => {
    alert('Notificacoes');
  };

  const handleMedicamentos = () => {
    navigation.navigate('Medicamentos');
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <TouchableOpacity onPress={() => alert('Menu aberto')}>
          <Ionicons name="menu" size={28} color="#374151" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotificacoes} style={estilos.notificacaoBell}>
          <Ionicons name="notifications-outline" size={28} color="#374151" />
          {notificacoes > 0 && (
            <View style={estilos.badge}>
              <Text style={estilos.badgeText}>{notificacoes}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView style={estilos.scrollView} contentContainerStyle={estilos.conteudoContainer}>
        <Text style={estilos.titulo}>Geral</Text>

        {/* Card do Cuidador */}
        <View style={estilos.cardCuidador}>
          <View style={estilos.avatar}>
            <Ionicons name="person-circle" size={60} color="#06B6D4" />
          </View>
          <View style={estilos.infoCuidador}>
            <Text style={estilos.nomeCuidador}>Nome: Fabio Santos</Text>
            <Text style={estilos.cargoCuidador}>Cuidador de Idoso</Text>
            <Text style={estilos.cpfCuidador}>CPF: 123.xxx.xxx-xx</Text>
          </View>
        </View>

        {/* Menu de Opcoes */}
        <View style={estilos.menuContainer}>
          {menuOpcoes.map((opcao) => (
            <TouchableOpacity 
              key={opcao.id}
              style={estilos.menuButton}
              onPress={() => handleMenuPress(opcao.label)}
            >
              <Text style={estilos.menuButtonText}>{opcao.label}</Text>
            </TouchableOpacity>
          ))}
        </View>


      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F8FC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#E8F8FC',
    borderBottomWidth: 1,
    borderBottomColor: '#D1E7F0',
  },
  notificacaoBell: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  conteudoContainer: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
  },
  cardCuidador: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1E7F0',
  },
  infoCuidador: {
    flex: 1,
  },
  nomeCuidador: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cargoCuidador: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  cpfCuidador: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  menuContainer: {
    gap: 12,
    marginBottom: 24,
  },
  menuButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});