import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NovoMedicamento() {
  const [temReceita, setTemReceita] = useState(false);
  const [numReceita, setNumReceita] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [frequencia, setFrequencia] = useState(null);
  const [hora, setHora] = useState('0:00');
  const [paciente, setPaciente] = useState('Ayrton da Silva');

  const frequencias = ['6/6h', '8/8h', '12/12h', '24/24h'];

  return (
    <View style={estilos.container}>
      <ScrollView style={estilos.scrollView} contentContainerStyle={estilos.conteudoContainer}>
        
        <View style={estilos.cabecalho}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={32} color="#374151" />
          </TouchableOpacity>
          <Text style={estilos.tituloCabecalho}>Novo Medicamento</Text>
          <View style={estilos.iconeIcone}>
            <Ionicons name="medkit-outline" size={32} color="#6366F1" />
          </View>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.labelSecao}>Paciente</Text>
          <Text style={estilos.nomePaciente}>{paciente}</Text>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.labelSecao}>Tem Receita Médica?</Text>
          <View style={estilos.radioContainer}>
            <TouchableOpacity 
              style={estilos.radioItem}
              onPress={() => setTemReceita(false)}
            >
              <View style={[estilos.radioCircle, !temReceita && estilos.radioSelecionado]}>
                {!temReceita && <View style={estilos.radioPonto} />}
              </View>
              <Text style={estilos.radioText}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={estilos.radioItem}
              onPress={() => setTemReceita(true)}
            >
              <View style={[estilos.radioCircle, temReceita && estilos.radioSelecionado]}>
                {temReceita && <View style={estilos.radioPonto} />}
              </View>
              <Text style={estilos.radioText}>Sim</Text>
            </TouchableOpacity>
          </View>
          
          {temReceita && (
            <TextInput
              style={estilos.input}
              placeholder="Nº Receita"
              value={numReceita}
              onChangeText={setNumReceita}
              placeholderTextColor="#9CA3AF"
            />
          )}
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.labelSecao}>Medicamento</Text>
          <View style={estilos.inputContainer}>
            <TextInput
              style={estilos.input}
              placeholder="Nome do medicamento"
              value={medicamento}
              onChangeText={setMedicamento}
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.labelSecao}>Dosagem Prescrita</Text>
          <View style={estilos.inputContainer}>
            <TextInput
              style={estilos.input}
              placeholder="500 mg"
              value={dosagem}
              onChangeText={setDosagem}
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity>
              <Ionicons name="menu" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.labelSecao}>Frequência</Text>
          <View style={estilos.frequenciaContainer}>
            {frequencias.map((freq, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  estilos.botaoFrequencia,
                  frequencia === freq && estilos.botaoFrequenciaSelecionado
                ]}
                onPress={() => setFrequencia(freq)}
              >
                <Text style={[
                  estilos.textoFrequencia,
                  frequencia === freq && estilos.textoFrequenciaSelecionado
                ]}>
                  {freq}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={estilos.botaoPersonalizar}>
          <Text style={estilos.textoPersonalizar}>Personalizar</Text>
        </TouchableOpacity>

        <View style={estilos.secao}>
          <Text style={estilos.labelSecao}>Primeiro Horário</Text>
          <View style={estilos.horarioContainer}>
            <TextInput
              style={estilos.inputHora}
              value={hora}
              onChangeText={setHora}
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity>
              <Ionicons name="checkmark" size={28} color="#10B981" />
            </TouchableOpacity>
          </View>
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
  scrollView: {
    flex: 1,
  },
  conteudoContainer: {
    padding: 20,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  tituloCabecalho: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    marginLeft: 10,
  },
  iconeIcone: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secao: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  labelSecao: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6B7280',
    marginBottom: 8,
  },
  nomePaciente: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  radioContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 12,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelecionado: {
    borderColor: '#06B6D4',
  },
  radioPonto: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#06B6D4',
  },
  radioText: {
    fontSize: 14,
    color: '#1F2937',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#1F2937',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  inputHora: {
    flex: 1,
    fontSize: 32,
    fontWeight: '600',
    color: '#1F2937',
  },
  frequenciaContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    flexWrap: 'wrap',
  },
  botaoFrequencia: {
    backgroundColor: '#D1E7F0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#B3D9E8',
  },
  botaoFrequenciaSelecionado: {
    backgroundColor: '#06B6D4',
    borderColor: '#06B6D4',
  },
  textoFrequencia: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0891B2',
  },
  textoFrequenciaSelecionado: {
    color: 'white',
  },
  botaoPersonalizar: {
    backgroundColor: '#06B6D4',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoPersonalizar: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  horarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
  },
});