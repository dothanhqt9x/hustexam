import Header from './header/Header'
import Footer from './footer/Footer'

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;