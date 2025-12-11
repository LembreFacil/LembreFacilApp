import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InformacaoMedicamento({ navigation }) {
  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.scrollView} contentContainerStyle={estilos.conteudoContainer}>

        <TouchableOpacity style={estilos.botaoFechar} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#374151" />
        </TouchableOpacity>

        <Text style={estilos.tituloPrincipal}>Amoxicilina 500mg</Text>

        <View style={estilos.secao}>
          <View style={estilos.linhaInfo}>
            <Text style={estilos.labelInfo}>Paciente:</Text>
            <Text style={estilos.valorInfo}>Ayrton da Silva</Text>
          </View>
          <View style={estilos.linhaInfo}>
            <Text style={estilos.labelInfo}>(ID: 12345)</Text>
          </View>
          <View style={estilos.linhaInfo}>
            <Text style={estilos.labelInfo}>Idade:</Text>
            <Text style={estilos.valorInfo}>78 anos</Text>
          </View>
        </View>

        <View style={estilos.secao}>
          <View style={[estilos.linhaInfoComIcone, { borderBottomWidth: 1, borderBottomColor: '#E5E7EB', paddingBottom: 12, marginBottom: 12 }]}>
            <View style={estilos.iconeDosagem}>
              <Ionicons name="tablet-landscape" size={20} color="#FF6B6B" />
            </View>
            <View>
              <Text style={estilos.labelInfoGrande}>Dosagem:</Text>
              <Text style={estilos.valorInfoGrande}>500mg - 1 capsula</Text>
            </View>
          </View>

          <View style={estilos.linhaInfoComIcone}>
            <View style={estilos.iconeFrequencia}>
              <Ionicons name="clock" size={20} color="#3B82F6" />
            </View>
            <View>
              <Text style={estilos.labelInfoGrande}>Frequencia:</Text>
              <Text style={estilos.valorInfoGrande}>3x ao dia (08h, 16h, 00h)</Text>
            </View>
          </View>
        </View>

        <View style={estilos.secao}>
          <View style={[estilos.linhaInfoComIcone, { borderBottomWidth: 1, borderBottomColor: '#E5E7EB', paddingBottom: 12, marginBottom: 12 }]}>
            <View style={estilos.iconeInicio}>
              <Ionicons name="calendar" size={20} color="#EC4899" />
            </View>
            <View>
              <Text style={estilos.labelInfoGrande}>Inicio:</Text>
              <Text style={estilos.valorInfoGrande}>01/10/2025</Text>
            </View>
          </View>

          <View style={[estilos.linhaInfoComIcone, { borderBottomWidth: 1, borderBottomColor: '#E5E7EB', paddingBottom: 12, marginBottom: 12 }]}>
            <View style={estilos.iconeTermino}>
              <Ionicons name="calendar" size={20} color="#F59E0B" />
            </View>
            <View>
              <Text style={estilos.labelInfoGrande}>Termino:</Text>
              <Text style={estilos.valorInfoGrande}>10/10/2025</Text>
            </View>
          </View>

          <View style={estilos.linhaInfoComIcone}>
            <View style={estilos.iconeVia}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            </View>
            <View>
              <Text style={estilos.labelInfoGrande}>Via:</Text>
              <Text style={estilos.valorInfoGrande}>Oral - Capsula</Text>
            </View>
          </View>
        </View>

        <View style={estilos.secao}>
          <View style={estilos.linhaInfoComIcone}>
            <View style={estilos.iconeInstrucoes}>
              <Ionicons name="alert-circle" size={20} color="#F59E0B" />
            </View>
            <View>
              <Text style={estilos.labelInfoGrande}>Instrucoes:</Text>
              <Text style={estilos.valorInfoGrande}>Administrar com alimentos</Text>
            </View>
          </View>
        </View>

        <View style={[estilos.secao, { borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingTop: 16, marginTop: 8 }]}>
          <Text style={estilos.labelSecao}>Ultima dose:</Text>
          <View style={[estilos.linhaInfo, { marginBottom: 8 }]}>
            <Text style={estilos.labelInfo}>03/10/2025 - 08:00</Text>
          </View>
          <Text style={estilos.labelSecao}>Prox. dose:</Text>
          <View style={[estilos.linhaInfo, { marginBottom: 16 }]}>
            <Text style={estilos.labelInfo}>03/10/2025 - 16:00</Text>
          </View>
          <View style={estilos.linhaInfo}>
            <Text style={estilos.labelInfo}>Cuidador anterior:</Text>
            <Text style={estilos.valorInfo}>Maria C.</Text>
          </View>
        </View>

      </ScrollView>

      <View style={estilos.footerContainer}>
        <TouchableOpacity style={estilos.botaoConfirmar}>
          <Text style={estilos.textoConfirmar}>Confirmar administracao</Text>
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
  botaoFechar: {
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
  },
  secao: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  labelSecao: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  valorInfo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  linhaInfoComIcone: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  labelInfoGrande: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
    marginBottom: 4,
  },
  valorInfoGrande: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  iconeDosagem: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFE4E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  iconeFrequencia: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  iconeInicio: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FCE7F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  iconeTermino: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  iconeVia: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#D1FAE5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  iconeInstrucoes: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
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
  botaoConfirmar: {
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
  textoConfirmar: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
  },
});