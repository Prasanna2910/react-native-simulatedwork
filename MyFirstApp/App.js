import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => Math.max(0, c - 1));
  const reset = () => setCount(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Counter</Text>

      <View style={styles.counterBox}>
        <Text style={styles.count}>{count}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          accessibilityLabel="decrement"
          disabled={count === 0}
          onPress={decrement}
          style={[styles.button, count === 0 && styles.buttonDisabled]}
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="increment"
          onPress={increment}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={[styles.buttonText, styles.buttonTextPrimary]}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="reset"
          onPress={reset}
          style={[styles.smallButton]}
        >
          <Text style={styles.smallButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  count: {
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterBox: {
    width: 160,
    height: 160,
    borderRadius: 12,
    backgroundColor: '#f6f8fb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  button: {
    marginHorizontal: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  buttonPrimary: {
    backgroundColor: '#4f46e5',
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  buttonText: {
    fontSize: 28,
    color: '#111827',
  },
  buttonTextPrimary: {
    color: '#ffffff',
    fontWeight: '700',
  },
  smallButton: {
    marginLeft: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  smallButtonText: {
    color: '#111827',
    fontWeight: '600',
  },
});

export default App;