import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/base';
import styles from './login-form.module.css';
import cn from 'classnames';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus, FetchStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationLoadStatus, getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { resetAuthLoadStatus } from '../../store/user-process/user-process.slice';

const LoginFields: Record<string, string> = {
  email: 'E-mail',
  password: 'Password'
};

const emailRegexPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegexPattern = /^\S*$/;
const serverErrorText = 'Ошибка, попробуйте позже';

type Field = {
  value: string;
  regex: RegExp;
  touched: boolean;
  error: boolean;
  errorMessage: string;
}

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const authloadStatus = useAppSelector(getAuthorizationLoadStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus]);


  useEffect(() => {
    dispatch(resetAuthLoadStatus)
  }, []);

  const [formData, setFormData] = useState<Record<string, Field>>({
    email: {
      value: '',
      error: false,
      touched: false,
      regex: emailRegexPattern,
      errorMessage: 'email error'
    },
    password: {
      value: '',
      error: false,
      touched: false,
      regex: passwordRegexPattern,
      errorMessage: 'password error'
    }
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    const isError = !formData[name].regex.test(value);
    setTouched(true);
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value: value,
        touched: true,
        error: isError
      }
    });
  };


  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setTouched(true);
    let hasEmtyFields = false;
    let hasErrors = false;
    const newFormData = {...formData};

    for(const name of Object.keys(formData)) {
      if (formData[name].value === '') {
        newFormData[name].error = true;
        hasEmtyFields = true;
      }
      if (formData[name].error) {
        hasErrors = true;
      }
    }

    if (hasEmtyFields || hasErrors) {
      setFormData({...newFormData});
      return;
    }


    dispatch(loginAction({
      login: formData.email.value,
      password: formData.password.value
    }));
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      {Object.entries(LoginFields).map(([name, label]) => {
        const inputErrorClassName = formData[name].error ? styles.error : '';
        return(
          <div key={name} className={cn('login__input-wrapper', 'form__input-wrapper', styles.inputWrapPositioned)}>
            <label className="visually-hidden">{label}</label>
            <input
              className={cn('login__input', 'form__input', inputErrorClassName)}
              type={name}
              name={name}
              placeholder={label}
              onInput={handleInputChange}
            />
            {formData[name].error && (
              <span className={styles.errorBlock}>
                {formData[name].errorMessage}
              </span>
            )}
          </div>);}
      )}

      <button
        className="login__submit form__submit button"
        type="submit"
      >
        Sign in
      </button>
      {(touched && authloadStatus.isError) &&
        <span className={cn(styles.errorBlock, styles.btnErrorBlock)}>
          {serverErrorText}
        </span>}
    </form>
  );
}
