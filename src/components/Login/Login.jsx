import style from './login.module.css';
function Login() {
    return ( 
        <div className={`${style.login_from} container`}>
            <div className="row justify-content-center">
                <h1 className='text-center mt-5 mb-3 '>My account  </h1>
                <div className={`${style.sign_form}`}>
                    <div className={`${style.form_content}`}>
                        <div className={`${style.header_from}`}>Login to Shofy</div>
                        
                        <div className='text-center'> Don’t have an account? <span className={`${style.sign_text}`}> Create a free account</span> </div>
                        <div>
                            <div className={`${style.login_icons} d-flex flex-wrap justify-content-center`}>
                                <div className={`${style.login_icon} d-flex  align-items-center flex-shrink-0`}>

                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48" width="40px" height="40px">
                                    <path fill="#FFC107" 
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627
                                    ,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268
                                    ,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,
                                    3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" 
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087
                                    ,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg></div> 
                                    <div className='ms-3'>sign with google</div>
                                </div>
                                <div className={`${style.login_icon}`}>
                                    <i class={`bi bi-facebook ${style.facebook_icon}`}></i>
                                </div>
                                <div className={`${style.login_icon}`}>
                                    <i class={`bi bi-apple ${style.apple_icon}`}></i>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <hr className={`${style.break_line}`}></hr>
                                <div className={`text-center ${style.line_content}`}> or Sign in with Email</div>
                            </div>
                            
                            <form>
                                <div class="mb-2">
                                    <label for="exampleInputEmail1" class={`${style.form_label}`}>Your Email </label>
                                    <input type="email" class={` ${style.form_input} `} id="exampleInputEmail1" placeholder=' shopfy@mail.com ' aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-2">
                                    <label for="exampleInputPassword1" class={`${style.form_label}`}>Password</label>
                                    <input type="password" class={` ${style.form_input} `} placeholder=' Min. 6 character' id="exampleInputPassword1"/>
                                </div>
                                <div>
                                    <button type="submit" class={`${style.form_submit_btn}`}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;