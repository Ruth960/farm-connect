import Header from "../components/header"
 export default function Dashboard(){
        return(
            <div
            style={{
                backgroundColor: '#DCF7D0',
                color: '#000000',
                height: '100vh',
                width: '90vw',
                display: 'flex',
                justifyContent:'space-between', 
                flexWrap:'wrap', 
                padding:'20px'


            }}>

                <h1>Dashboards</h1>
                
                <h2>Admin</h2>
                <h2>Farmer</h2>
                {/* Farmers can post their products on the market listing
                    Buy products from other farmers
                    
                
                */}
                <h2>Buyer</h2>
            </div>
        )
    }