import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../core/Home';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import ForgetPass from './auth/ForgetPass';
import ResetPassword from './auth/ResetPassword';
import NotFound from './NotFound';
import Dashboard from './Client/Dashboard';
import PrivateRoute from '../helpers/PrivateRoute';
import AdminDashboard from './admin/AdminDashboard';
import PrivateAdminRoute from '../helpers/PrivateAdminRoute';
import LivreurDashboard from './livreur/LivreurDashboard';
import PrivateLivreurRoute from '../helpers/PrivateLivreurRoute';
import NotAcces from './NotAcces'
import DashboardAdmin from "../User/admin/Statistique/Dashboard.jsx";
import Repas from "../User/admin/Repas/Repas.jsx";
import Categorie from '../User/admin/categorie/categorie';
import Users from '../User/admin/users/users'
import AddLivreur from './admin/users/AddLivreur';
import Commands from './livreur/Commands';
import EditRepas from './admin/Repas/EditRepas';
import Client from './admin/Client/Client.jsx';

import LandingPage from '../User/landingPage/landingPage';


const Routs = () => {
  return (
    <Router>

      {/* <Navbar /> */}

      <Routes>
         <Route element={<AdminDashboard/>}>
          <Route path={'/dash'} element={<DashboardAdmin />} />
          <Route path='/categories' element={<Categorie/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/AddLivreur' element={<AddLivreur/>} />
          <Route path='/repas' element={<Repas/>}/>
          <Route path='/EditRepas/:id' element={<EditRepas/>}/>
          <Route path='/commands' element={<Commands/>}/>
          <Route path='/client' element={<Client/>}/>

         </Route>

        <Route element={<LivreurDashboard />}>
          <Route path='/commandes' element={<Commands />} />
        </Route>


        

        <Route element={<PrivateRoute />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />


          <Route element={<PrivateAdminRoute />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
          </Route>

          <Route element={<PrivateLivreurRoute />}>
            <Route path='/livreur/dashboard' element={<LivreurDashboard />} />
          </Route>
        </Route>

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgetpassword' element={<ForgetPass />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/notacces' element={< NotAcces />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default Routs