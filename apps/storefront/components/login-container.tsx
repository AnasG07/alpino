import React from 'react';
import styles from './login.module.css';
import classNames from 'classnames';

export default function LoginContainer({ type }) {
  console.log(type);
  return (
    <div>
      <h1 className="text-white text-2xl md:text-3xl leading-8 text-center">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h1>
      <div className="pt-24">
        <form>
          {type === 'signup' && (
            <div className="pb-12">
              <input placeholder="Full Name" type="text" className={classNames(styles['input-styles'], 'text-login')} />
            </div>
          )}
          <div>
            <input placeholder="Email" type="text" className={classNames(styles['input-styles'], 'text-login')} />
          </div>
          <div className="pt-12">
            <input placeholder="Password" type="text" className={classNames(styles['input-styles'], 'text-login')} />
          </div>

          <div className="pt-4">
            <span>
              <input type="checkbox" className="checkbox-round" />
            </span>
            <span className="leading-8 text-xxs md:text-xs text-login-font pl-2 md:pl-4 font-light">
              {' '}
              {type === 'login' ? 'Remember me' : 'Agree to Terms and Conditions'}
            </span>
          </div>
          <div className="flex justify-center pt-10 md:pt-8">
            <button className="leading-5 rounded-full text-base py-3 px:24  md:px-32 lg:px-40 outline-none  bg-white text-black  max-w-400 w-full flex justify-center text-right font-semibold hover-transparent border-2 border-white border-solid">
              {type === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </div>
          <div className="pt-6 text-center">
            {type === 'login' ? (
              <p className="font-light text-sm md:text-lg leading-8 text-login-font">
                Don’t have an account? <span className="font-semibold">Sign Up </span>
              </p>
            ) : (
              <p className="font-light text-sm md:text-lg leading-8 text-login-font">
                Already have an account? <span className="font-semibold">Login </span>
              </p>
            )}
          </div>
          <div className="pt-20">
            <h1 className="text-base md:text-2xl text-login-font leading-8 font-bold text-center">Or</h1>
            <p className="text-xs md:text-sm leading-8 text-login-font font-light text-center">Sign up with</p>
          </div>
          <div className="px-8 md:px-12 lg:px-24 flex justify-between pt-12">
            <div className="flex flex-col justify-center items-center ">
              <img src="/google.svg" alt="google" className="height-22" />
              <p className="text-xs md:text-sm leading-8 text-login-font font-light text-center">Google</p>
            </div>
            <div className="flex flex-col justify-center">
              <img src="/fbLogin.svg" alt="Facebook" className="height-22" />
              <p className="text-xs md:text-sm leading-8 text-login-font font-light text-center">Facebook</p>
            </div>
            <div className="flex flex-col justify-center">
              <img src="/twitterLogin.svg" alt="Twitter" className="height-22" />
              <p className="text-xs md:text-sm leading-8 text-login-font font-light text-center">Twitter</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
