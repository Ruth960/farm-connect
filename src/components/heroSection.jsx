
export default function HeroSection(){
    return(
        <div
        style={{
            backgroundColor: '#DCF7D0',
            color: '#000000',
            height: '100vh',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
           
            <h1>Welcome to Farm Connect</h1>
            <p>Connecting farmers with buyers</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.1rem' }}>
            <button>Register</button>
            <button>Login</button>
            </div>
        </div>
        )
}