import { Alert, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { obtenerPedidos } from '../services/pedidos/pedidos';
import { RootTabScreenProps } from '../types';
import { useState, useEffect } from 'react'
import { obtenerPagos } from '../services/pagos/pagos';
import { FontAwesome } from '@expo/vector-icons';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Tablero'>) {

  const [pedidos, setPedidos] = useState<any[]>([])

  const [pagos, setPagos] = useState<any[]>([])

  const [docs, setDocs] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const data = await obtenerPedidos()

      setPedidos(data.Result0)

      const pagosData = await obtenerPagos()
      setPagos(pagosData.Result0)

      const docsData = await obtenerPedidos()
      setDocs(docsData.Result0)

    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Tablero</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={
          styles.card
        }>
          <Text style={styles.cardTitle}>Pedidos recientes</Text>
          <View style={
            {
              backgroundColor: 'transparent'
            }
          }>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'transparent',
                marginBottom: 10
              }}
            >
              <Text style={{
                flex: 1,
                fontWeight: '600',
                color:'#fff'
              }}>O.C</Text>
              <Text 
              onPress={()=>{Alert.alert("mensaje")}}
              style={{
                flex: 1,
                fontWeight: '600',
              }}>Destino</Text>
            </View>
            {
              pedidos.map(pedido => (
                <View
                  key={pedido.OrdenCompra === "" || !pedido.OrdenCompra ? pedido.IdFabricacion : pedido.OrdenCompra}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'transparent',
                    marginBottom: 10
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                    }}
                  >{pedido.OrdenCompra === "" || !pedido.OrdenCompra ? pedido.IdFabricacion : pedido.OrdenCompra}</Text>
                  <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    backgroundColor:'transparent',
                  }}>
                    <FontAwesome
                      name="truck"
                      size={12}
                      color="white"
                      style={{ marginRight: 10 }}
                    /><Text>{pedido.Destino}</Text>
                  </View>
                </View>

              ))
            }
          </View>
        </View>
        <View style={
          styles.card
        }>
          <Text style={styles.cardTitle}>Pagos recientes</Text>
          <View style={
            {
              backgroundColor: 'transparent'
            }
          }>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'transparent',
                marginBottom: 10
              }}
            >
              <Text style={{
                flex: 1,
                fontWeight: '600'
              }}>Importe</Text>
              <Text style={{
                flex: 1,
                fontWeight: '600'
              }}>Fecha de pago</Text>
            </View>
            {
              pagos.map(pedido => (
                <View
                  key={pedido.Importe}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'transparent',
                    marginBottom: 10
                  }}
                >
                  <Text
                    style={{
                      flex: 1,
                    }}
                  >{pedido.Importe}</Text>
                  <Text
                    style={{
                      flex: 1,
                    }}
                  >{pedido.Fecha}</Text>
                </View>
              ))
            }
          </View>
        </View>
        <View style={
          styles.card
        }>
          <Text style={styles.cardTitle}>Documentos</Text>
          <View style={
            {
              backgroundColor: 'transparent'
            }
          }>
            {
              docs.map(doc => (
                <Text
                  key={doc.OrdenCompra}
                  style={{
                    marginBottom: 10
                  }}
                >- Orden de Compra: {doc.OrdenCompra}</Text>
              ))
            }
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#c1c1c1',
    marginBottom: 30,
    padding: 10
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20
  }
});
