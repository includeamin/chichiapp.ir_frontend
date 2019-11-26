import React, {Component} from 'react';
import firstImg from './../../Common/Img/Illustration1.svg'
import secondImg from './../../Common/Img/Illustration2.svg'
import {Button,FormGroup ,Input}from 'reactstrap'
import { Link } from 'react-scroll';
import validator from 'validator';



class SIgnUpPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            fields:{phoneNumber:'',Name:''},errors:{}
        }
    }

    ChangeField(e) {
        let {name, value} = e.target;
        let fields=this.state.fields;
        fields[name]=value;
        this.setState({fields});
    }
    validateForm() {
        const{fields}=this.state;
        let formValidate=true;
        let errors={};
        //Name
        if (validator.isEmpty(fields.Name)) {
            formValidate = false;
            errors['Name'] = "  نام اجباری است! ";

        }
        //PhoneNumber
        if (validator.isEmpty(fields.phoneNumber)) {
            formValidate = false;
            errors['phoneNumber'] = "  شماره تماس اجباری است! ";
        }
        this.setState({errors});
        return formValidate
    }

    submitForm(e){
        e.preventDefault();
        if (this.validateForm()){
            console.log(this.state.fields);

        }else {
            console.log(this.state.errors)
        }

    }

    render() {
        let{phoneNumber,Name}=this.state.fields;
        let{errors}=this.state ;
        return (
            <div className=''>
                <div className='col-5   justify-content-end d-inline-flex flex-column p-0'>
                    <div className='w-100   justify-content-start  mr-5 mt-5 d-inline-flex flex-column'>
                        <ul className='d-flex col-8 justify-content-between'>
                            <li className='list-unstyled'><a href=" " className='alink fs-13vw'>خانه</a></li>
                            <li className='  list-unstyled'><a href=" " className='alink fs-13vw'>درباره ما</a></li>
                            <li className='  list-unstyled'>
                                <Link name="first" activeClass="active" className="alink fs-13vw w-100 pointer " to="SignUp" spy={true} smooth={true} duration={500}  ><a href=' ' className='alink fs-13vw'>ثبت نام </a> </Link>
                            </li>
                        </ul>

                        <div className='vh-10'>

                        </div>
                        <div className='d-flex justify-content-start flex-column text-right'>
                            <h1 className='blueColor fs-25vw text-bold '>چی چی</h1>
                            <h2 className='mt-4 fs-13vw text-bold'>اولین اپلیکیشن سوپرمارکت آنلاین ساری</h2>
                            <p className='mt-4 fs-1vw col-8'>
                                اولین اپلیکشینی که با اون می توانید خیلی راحت و با بیشترین تخیف خرید کنید و خرید شما خیل سریع به منزل شما میاد!
                            </p>
                            <div className=' d-flex justify-content-start align-items-center vh-5 mt-4  '>
                                <Link name="first" activeClass="active" className="first w-100" to="SignUp" spy={true} smooth={true} duration={500}  >

                                    <Button className='col-5 btn-blue-Color fs-1vw'>همین حالا ثبت نام کنید </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='vh-20'>

                        </div>
                    </div>
                    <div className='  col-12 float-right p-0 vh-110'>
                        <img src={secondImg} alt={secondImg} className='img-self-cover'/>
                    </div>
                </div>

                <div className='  col-7 float-left p-0 d-flex flex-column'>
                    <div>
                        <img src={firstImg} alt={firstImg} className='img-self-cover'/>
                    </div>

                    <div className='vh-20'>

                    </div>
                    <div className='d-flex justify-content-center align-items-center flex-column text-center  ' id='SignUp'>
                        <h1 className='  fs-25vw text-bold'>همین حالا ثبت نام کنید ! </h1>
                        <p className='mt-3 fs-1vw col-6'>همین حالا با وارد کردن نام و شماره تماس خود ثبت نام کنید همچنین می توانید دوستان خود را دعوت کنید .</p>
                        <form className='w-100 d-flex justify-content-center align-items-center flex-column text-center' onSubmit={this.submitForm.bind(this)}>
                            <FormGroup className='col-6'>
                                <Input vlaue={Name} type="text" name="Name" id="Name" className='InputBackGround' placeholder="نام و نام خانوادگی"  onChange={this.ChangeField.bind(this)}/>
                                <span className='redColor' style={{display:errors['Name']?"block ":"none"}}>{errors['Name']}</span>
                            </FormGroup>
                            <FormGroup className='col-6'>
                                <Input vlaue={phoneNumber} type="number" name="phoneNumber" id="phoneNumber" className='InputBackGround' placeholder="شماره همراه" onChange={this.ChangeField.bind(this)} />
                                <span className='redColor' style={{display:errors['phoneNumber']?"block":"none"}}>{errors['phoneNumber']}</span>
                            </FormGroup>
                            <Button type='submit' className='col-4 vh-10 mt-3 btn-blue-Color fs-1vw'>ثبت نامم کن ! </Button>
                        </form>


                        {/*<div className=' d-flex justify-content-start align-items-center vh-5 mt-3 w-100 '>*/}
                        {/*<Button className='col-5 btn-blue-Color fs-1vw'>همین حالا ثبت نام کنید </Button>*/}
                        {/*</div>*/}
                    </div>

                </div>


            </div>
        );
    }
}

export default SIgnUpPage;