import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

type Props = {};
export default class App extends Component<Props> {
  constructor(Props) {
    super(Props);

    // Set the initial state
    this.state = {
      juego: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      turno: 1
    }
  };

  inicializarJuego() {
    this.setState({
      juego: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      turno: 1
    });
  };

  dibujarFigura = (colu, fila) => {
    let coor = this.state.juego[colu][fila];
    switch (coor) {
      case 1: return <Icon name="circle-outline" style={styles.x}/>;
      case -1: return <Icon name="close" style={styles.y}/>;
      default: return <View />;
    }
  };

  jugada = (colu, fila) => {
    // Obtiendo al jugador actual
    let jugador = this.state.turno;
    let juego = this.state.juego.slice();

    // Validando que la casilla esta disponible.
    if (juego[colu][fila] !== 0) {
      return;
    }

    // Seteando la casilla jugada
    this.setState({
      juego: juego
    });
    juego[colu][fila] = jugador;

    let turno = (jugador === 1 ) ? -1 : 1;
    // Seteando el turno del siguiente jugador
    this.setState({
      turno: turno
    });

    // Validando ganadores
    let ganador = this.ganador();
    if (ganador === 1 ) {
      Alert.alert("Gano el jugador 1");
      this.inicializarJuego();
    }
    if (ganador === -1) {
      Alert.alert("Gano el jugador 2");
      this.inicializarJuego()
    }
  };

  ganador = () => {
    const num_casillas = 3;
    let arr = this.state.juego.slice();
    let sum;

    // Validando columnas
    for (let i = 0; i < num_casillas; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }

    // Validando filas
    for (let i = 0; i < num_casillas; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }
    }

    // Validando diagonales.
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    sum = arr[0][2] + arr[1][1] + arr[2][0];
    if (sum === 3) {
      return 1;
    } else if (sum === -3) {
      return -1;
    }

    // Si no hay ganadores devolvemos false
    return 0;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} />
        {/* Fila */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => this.jugada(0, 0)} style={[styles.casilla, { borderTopWidth: 0, borderLeftWidth: 0 } ]}>
            { this.dibujarFigura(0, 0) }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.jugada(0, 1)} style={[styles.casilla, { borderTopWidth: 0 }]}>
            { this.dibujarFigura(0, 1) }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.jugada(0, 2)} style={[styles.casilla, { borderTopWidth: 0, borderRightWidth: 0}]}>
            { this.dibujarFigura(0, 2)}
          </TouchableOpacity>
        </View>

        {/* Fila */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => this.jugada(1, 0)} style={[styles.casilla, { borderLeftWidth: 0}]}>
            { this.dibujarFigura(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.jugada(1, 1)} style={[styles.casilla, {}]}>
            { this.dibujarFigura(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.jugada(1, 2)} style={[styles.casilla, { borderRightWidth: 0 }]}>
            { this.dibujarFigura(1, 2)}
          </TouchableOpacity>
        </View>

        {/* Fila */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => this.jugada(2, 0)} style={[styles.casilla, { borderBottomWidth: 0, borderLeftWidth: 0}]}>
            { this.dibujarFigura(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.jugada(2, 1)} style={[styles.casilla, { borderBottomWidth: 0 }]}>
            { this.dibujarFigura(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.jugada(2, 2)} style={[styles.casilla, { borderBottomWidth: 0, borderRightWidth: 0}]}>
            { this.dibujarFigura(2, 2)}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={() => this.inicializarJuego()} style={styles.btn}>
            <Text style={styles.btnText}>Limpiar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.developedBy}>Hecho con <Icon name={"heart"} style={styles.developedBy} /></Text>
          <Text style={styles.developedBy}>Desarrollado por Henry Leon</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  casilla: {
    borderWidth: 3,
    height: 100,
    width: 100
  },
  row: {
    flexDirection: "row"
  },
  x: {
    fontSize: 100,
    color: "red"
  },
  y: {
    fontSize: 100,
    color: "blue"
  },
  btn: {
    fontWeight: "bold",
    color: "red",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  btnText: {
    color: "red",
    fontSize: 20
  },
  developedBy: {
    color: "red",
    fontSize: 16
  }
});
