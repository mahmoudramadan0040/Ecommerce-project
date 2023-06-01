import style from './Footer.module.css'
function Footer() {
    return ( 
        <div className={`${style.footer}`}>
            <div class='container'>
                <div class="row gx-5">
                    <div className='col-4 mt-5'>
                        <h3 className='mb-4'>
                            <img src='https://weblearnbd.net/tphtml/shofy-prv/shofy/assets/img/logo/logo.svg' alt="logo"></img>
                        </h3>
                        <p className='mb-5 fs-5'>
                        We are a team of designers and developers that create high quality WordPress
                        </p>
                        <div className={`${style.footer_icons} d-flex justify-content-left`}>
                            <div className={`${style.footer_icon}`}>
                                <i class="bi bi-twitter"></i>
                            </div>
                            <div className={`${style.footer_icon}`}>
                                <i class="bi bi-linkedin"></i>
                            </div>
                            <div className={`${style.footer_icon}`}>
                                <i class="bi bi-facebook"></i>
                            </div >
                            <div className={`${style.footer_icon}`}>
                                <i class="bi bi-whatsapp"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 mt-5'>
                        <h3>My Account</h3>
                        <ul className={`${style.footer_list}`}>
                            <li>track Orders</li>
                            <li>shipping</li>
                            <li>whishlist</li>
                            <li>My Account</li>
                            <li>Order History</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div className='col-2 mt-5'>
                        <h3>Information</h3>
                        <ul className={`${style.footer_list}`}>
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Privacy Policy </li>
                            <li>Terms & conditions</li>
                            <li>Lastest News</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='col-4 mt-5'>
                        <h3>Talk To Us</h3>
                        <div className={`${style.footer_link}`}>
                            <div>Got Questions? Call us</div>
                            <div>+670 413 90 762</div>
                            <div>
                            shofy@support.com
                            </div>
                            <div>79 Sleepy Hollow St.Jamaica, New York 1432</div>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className={`${style.footer_link}`}>
                    © 2023 All Rights Reserved | HTML Template by mahmoud ramadan ahmed
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;