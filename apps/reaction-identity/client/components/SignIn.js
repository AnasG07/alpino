import { makeStyles } from '@material-ui/core';
import Button from '@reactioncommerce/components/Button/v1';
import ErrorsBlock from '@reactioncommerce/components/ErrorsBlock/v1';
import Field from '@reactioncommerce/components/Field/v1';
import InlineAlert from '@reactioncommerce/components/InlineAlert/v1';
import TextInput from './Input.js';
import Random from '@reactioncommerce/random';
import { Meteor } from 'meteor/meteor';
import queryString from 'query-string';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import useReactoForm from 'reacto-form/cjs/useReactoForm';
import SimpleSchema from 'simpl-schema';
import './spinner.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

/**
 * @summary Does `Meteor.loginWithPassword` followed by
 *   calling the "oauth/login" method.
 * @param {Object} input Input
 * @param {String} [input.challenge] Challenge to pass to the "oauth/login" method
 *   after logging in.
 * @param {String} input.email Email address to pass to `Meteor.loginWithPassword`
 * @param {String} input.password Password to pass to `Meteor.loginWithPassword`
 * @return {Promise<String|undefined>} Redirect URL or `undefined` if no
 *   `challenge` argument was passed.
 */
function callSignIn({ challenge, email, password }) {
  return new Promise((resolve, reject) => {
    Meteor.loginWithPassword(email, password, (meteorLoginError) => {
      if (meteorLoginError) {
        reject(meteorLoginError);
      } else {
        if (!challenge) {
          resolve();
          return;
        }
        Meteor.call('oauth/login', { challenge }, (oauthLoginError, redirectUrl) => {
          if (oauthLoginError) {
            reject(oauthLoginError);
          } else {
            resolve(redirectUrl);
          }
        });
      }
    });
  });
}

const useStyles = makeStyles(() => ({
  inlineAlert: {
    marginBottom: 16,
  },
  pageTitle: {
    color: '#1999dd',
    fontFamily: "'Source Sans Pro', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
    fontSize: 30,
    fontWeight: 400,
    marginBottom: 40,
    textAlign: 'center',
  },
}));

const formSchema = new SimpleSchema({
  email: {
    type: String,
    min: 3,
  },
  password: {
    type: String,
  },
});
const validator = formSchema.getFormValidator();

/**
 * @summary SignIn React component
 * @param {Object} props Component props
 * @return {React.Node} Rendered component instance
 */
function SignIn() {
  const { t } = useTranslation(); // eslint-disable-line id-length
  const uniqueId = useMemo(() => Random.id(), []);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const { login_challenge: challenge } = queryString.parse(location.search);

  const { getErrors, getInputProps, submitForm } = useReactoForm({
    async onSubmit(formData) {
      setIsSubmitting(true);
      let redirectUrl;
      try {
        redirectUrl = await callSignIn({ challenge, ...formData });
      } catch (error) {
        setSubmitError(error.message);
        setIsSubmitting(false);
        return { ok: false };
      }
      setIsSubmitting(false);
      if (redirectUrl) window.location.href = redirectUrl;
      return { ok: true };
    },
    validator,
  });

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <main className="bg-login-background">
        <Header transparent />
        <div className="flex flex-row w-full">
          <div className="w-full lg:w-2/4 pt-12 md:pt-16 lg:pt-40 px-8  md:px-16 pb-20">
            <div>
              <h1 className="text-white text-2xl md:text-3xl leading-8 text-center pt-12 lg:pt-0">Login</h1>
              <div className="pt-24">
                <form>
                  <div>
                    <Field
                      isRequired
                      errors={getErrors(['email'])}
                      name="email"
                      placeholder="Email"
                      labelFor={`email-${uniqueId}`}>
                      <TextInput
                        type="email"
                        id={`email-${uniqueId}`}
                        {...getInputProps('email')}
                        placeholder="Email"
                        className="input-login"
                      />
                      <ErrorsBlock errors={getErrors(['email'])} />
                    </Field>
                  </div>
                  <div className="pt-12">
                    <Field
                      isRequired
                      errors={getErrors(['password'])}
                      name="password"
                      placeholder={t('password')}
                      labelFor={`password-${uniqueId}`}>
                      <TextInput
                        type="password"
                        id={`password-${uniqueId}`}
                        placeholder="Password"
                        {...getInputProps('password')}
                        className="input-login"
                      />
                      <ErrorsBlock errors={getErrors(['password'])} />
                    </Field>
                  </div>

                  <div className="pt-4">
                    <span>
                      <input type="checkbox" className="checkbox-round" />
                    </span>
                    <span className="leading-8 text-xxs md:text-xs text-login-font pl-2 md:pl-4 font-light">
                      Remember me
                    </span>
                  </div>
                  {submitError && (
                    <InlineAlert alertType="error" className={classes.inlineAlert} message={submitError} />
                  )}
                  <div className="flex justify-center pt-10 md:pt-8">
                    <Button
                      actionType="important"
                      isFullWidth
                      isWaiting={isSubmitting}
                      onClick={submitForm}
                      className="button-login">
                      {t('Login')}
                    </Button>
                  </div>
                  <div className="pt-6 text-center">
                    <p className="font-light text-sm md:text-lg leading-8 text-login-font">
                      Don’t have an account ? &nbsp;
                      <span className="font-semibold">
                        <a href="/account/enroll">Sign Up</a>
                      </span>
                    </p>
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
                      <img src="/twitterlogin.svg" alt="Twitter" className="height-22" />
                      <p className="text-xs md:text-sm leading-8 text-login-font font-light text-center">Twitter</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/4">
            <img src="/login.jpeg" alt="login" className="w-full h-full" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
