import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import AdminLayout from './components/Layout/AdminLayout';
import { Fragment } from 'react';

function App() {
    return (  
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index)  => {
                        let Layout = route.layout;
                        if(route.layout === 'admin'){
                            Layout = AdminLayout
                        }
                        else if(route.layout === null){
                            Layout = Fragment
                        }
                        else Layout = DefaultLayout;
                        const Page = route.component;
                        return <Route 
                            key={index} 
                            path = {route.path} 
                            element = {
                            <Layout>
                                <Page/>
                            </Layout>}
                        />
                     })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;