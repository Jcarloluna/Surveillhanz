
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState} from 'react';
import { useSession,signIn,signOut } from 'next-auth/react';


const LogInCard = () => {

    const[show, setShow] = useState(false)

    // Google Handler function
    async function handleGoogleSignin(){
        signIn('google',{callbackUrl: "http://localhost:3000/Dashboard"})
    }

    return (
    <div className={styles.container}>
        <div className="card d-flex w-50 shadow-lg" style={{backgroundColor:'#1c1c1c',minHeight:'80vh',border:'white 1px ridge',padding:'0px 30px 50px 30px',borderRadius:'30px'}}>
            <div className="card-header" style={{border:'none', padding:'20px 50px 0px 50px'}}>
                <div className="d-flex justify-content-center align-items-center mb-3 w-100" >
                <Link href={'/'}>
                    <img className={styles.Logo} src="/logo/Surveillhanz.png"> 
                    
                    </img>
                </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center" >
                    <h2 className="text-white fw-bold "> Surveillhanz</h2>
                </div>
                <hr className="text-white"/>
            </div>
            <div className="card-body p-1">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4  className='text-white fw-bold'> SIGN IN </h4>
                    <section className={`${styles.formContainer}`}>
                    <form className="d-flex flex-column gap-4">
                        <div className="input-group mt-4">
                            <input className={styles.formControl}
                            type="email" 
                            name="email"
                            placeholder="Email"
                            />
                        </div>
                        <div className="input-group">
                            <input className={styles.formControl}
                            type={`${show ?"text":"password"}`}
                            name="password"
                            placeholder="Password"
                            />
                            <span className={styles.passwordLogo} onClick={()=> setShow(!show)}>
                                <img src="/logo/Surveillhanz.png" width={25} height={25} />
                            </span>
                        </div>
                        <div className="input-button">
                            <button type="submit" className={styles.formControlButton}>
                                <Link href={'/Dashboard'} className="text-decoration-none text-white">Sign In</Link>
                            </button>
                        </div>
                   

                        <p className={styles.or}> or </p>
                        <div className="input-button">
                            <button type="submit" onClick={handleGoogleSignin} className={styles.formControlButton}>
                                <img src="/images/googleLogo.png" alt="Google Logo" width={20} height={20} /> Sign In With Google 
                            </button>
                        </div>
                        <div className="input-button">
                            <button type="submit" className={styles.formControlButton}>
                            <img src="/logo/githubLogoWhite.jpg" alt="Github Logo" width={20} height={20} /> Sign In With Github 
                            </button>
                        </div>
                    </form>
                    
                        <p className="text-white mt-4 d-flex justify-content-center gap-2">
                            Dont have an account yet?
                            <Link href={'/register'} className="text-decoration-none text-white fw-bold">Sign Up</Link>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
    );
  };
  export default LogInCard;
  