import Header from './Header';
import Footer from './footer/Footer'

function AdminLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default AdminLayout;