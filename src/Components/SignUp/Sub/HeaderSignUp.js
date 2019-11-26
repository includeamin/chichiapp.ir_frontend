import React, {Component} from 'react';
import {Link} from "react-scroll/modules";

class HeaderSignUp extends Component {
    render() {
        return (
            <div>
                <ul className='d-flex w-100 justify-content-between padding-Zero'>
                    <li className='list-unstyled'><a href=" " className='alink fs-13vw'>خانه</a></li>
                    <li className='  list-unstyled'><a href=" " className='alink fs-13vw'>درباره ما</a></li>
                    <li className='  list-unstyled'>
                        <Link name="first" activeClass="active" className="alink fs-13vw w-100 pointer " to="SignUp" spy={true} smooth={true} duration={500}  ><a href=' ' className='alink fs-13vw'>ثبت نام </a> </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderSignUp;