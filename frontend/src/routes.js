import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        // BrowserRouter precisa estar em volta de tudo
        <BrowserRouter>
            {/* Garante que uma rota seja chamada por vez */}
            <Switch>
                {/* o uso do exact e para chamar a primeira rota, abaixo, de forma exata, caso contrario, nao chamara as outras rotas */}
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}