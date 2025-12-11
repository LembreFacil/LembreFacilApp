import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const UserIcon = ({ size = 32, color = '#60D5EC' }) => (
  <FontAwesome5 name="user" size={size} color={color} />
);

const FileIcon = ({ size = 48, color = '#FFF' }) => (
  <FontAwesome5 name="file-alt" size={size} color={color} />
);

const CalendarIcon = ({ size = 48, color = '#FFF' }) => (
  <FontAwesome5 name="calendar-alt" size={size} color={color} />
);

const PillIcon = ({ size = 48, color = '#FFF' }) => (
  <FontAwesome5 name="pills" size={size} color={color} />
);

export default function App() {
  const menuItems = [
    { 
      id: 1, 
      icon: FileIcon, 
      title: 'Histórico de consultas', 
      color: '#60D5EC' 
    },
    { 
      id: 2, 
      icon: CalendarIcon, 
      title: 'Agendamentos Consultas e Exames', 
      color: '#5BA3D0' 
    },
    { 
      id: 3, 
      icon: PillIcon, 
      title: 'Medicamentos', 
      color: '#60D5EC' 
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <UserIcon />
            </View>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Nome: Roberto Carlos</Text>
            <Text style={styles.userCPF}>CPF: 123.456.758-12</Text>
          </View>
        </View>

        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <TouchableOpacity 
              key={item.id} 
              style={styles.menuCard}
              activeOpacity={0.7}
            >
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <IconComponent />
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F8FC',
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E8F8FC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#60D5EC',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    fontWeight: '500',
  },
  userCPF: {
    fontSize: 14,
    color: '#666',
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuTitle: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
});