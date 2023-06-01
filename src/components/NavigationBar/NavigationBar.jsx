import style from './NavigationBar.module.css'
function NavigationBar() {
    return ( 
        <div className={`${style.main_header} `}>
            <div 
            class={` 
            d-flex mt-3 
            justify-content-between 
            align-items-center 
            container`}>
                <div class="logo  mt-0">
                    <img src='https://weblearnbd.net/tphtml/shofy-prv/shofy/assets/img/logo/logo.svg' alt="logo"></img>
                </div>
                <div class="search-product">
                    <input type="text" placeholder='search for product '
                    class={`${style.search}`}></input>
                    <button className={style.search_btn}>
                        <i class="bi bi-search"></i>
                    </button>
                </div>

                <div class="account-section d-flex align-items-center ">
                    <div className='m-1'>
                        <i class={`bi bi-person-circle ${style.account_logo}`}></i>
                    </div>
                    <div class="d-block lh-1">
                        <div>Hello, sign in </div>
                        <div>Your Account </div>
                    </div>
                    <div className='ms-4'>
                        <i class="bi bi-arrow-down-up me-4 fs-5"></i>
                        <i class="bi bi-suit-heart me-4 fs-5"></i>
                        <i class="bi bi-bag-check  fs-5"></i>
                    </div>
                </div>
                
            </div>
            <hr className=' mt-3 m-0'></hr>
            <div className={`d-flex container justify-content-between `}>
                <div className='m-0'>
                    <nav class={`${style.navbar}`}>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list fs-4 p-2"></i>
                        <span class="fs-5 ms-2">All Department</span>
                        <i class="bi bi-chevron-down fs-5 p-2 ms-2"></i>
                        </button>
                    </nav>
                    <div class="collapse " id="navbarToggleExternalContent">
                        <div class={`${style.collapsed_content}`}>
                            <h5 class="text-body-emphasis h4">Collapsed content</h5>
                            <span class="text-body-secondary">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                </div>
                <div className={`${style.navbar_center} d-flex justify-content-between align-items-center mt-2 `}>
                    <div>Home <i class="bi bi-chevron-down fs-6 p-2 "></i></div>
                    <div>Shop <i class="bi bi-chevron-down fs-6 p-2 "></i></div>
                    <div>Products<i class="bi bi-chevron-down fs-6 p-2 "></i></div>
                    <div>Coupons <i class="bi bi-chevron-down fs-6 p-2 "></i></div>
                    <div>Blog <i class="bi bi-chevron-down fs-6 p-2 "></i></div>
                </div>
                <div class={`${style.navbar_right} d-flex align-items- justify-content-end`}>
                    <div class={`mt-2 me-3 ` }>
                        <i class={`bi bi-telephone-x fs-5 ${style.contact} `}></i>
                    </div>
                    <div className='lh-1 mt-2'>
                        <div> hotline:</div>
                        <div className='fs-5 '> +(402) 763 282 46</div>
                    </div>
                </div>
                
            </div>
        </div>
            

    );
}

export default NavigationBar;