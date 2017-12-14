import React, {Component} from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Map from './components/map/Map';
import Pedidos from './components/pedidos/Pedidos';
import Tiendas from './components/tiendas/Tiendas';
import Detalle from './components/pedidos/detalle/Detalle';
import Login from './components/login/Login';
import Registro from './components/login/Registro';
import Recover from './components/login/Recover';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Map" header={null} component={Map} initial/>
        <Scene key="Pedidos" header={null} component={Pedidos}  />
        <Scene key="Tiendas" header={null} component={Tiendas} />
        <Scene key="Detalle" header={null} component={Detalle} />
        <Scene key="Login" header={null} component={Login} />
        <Scene key="Registro" header={null} component={Registro} />
        <Scene key="Recover" header={null} component={Recover} />
      </Scene>
    </Router>
    </Root>
  );
};

export default Routes;
