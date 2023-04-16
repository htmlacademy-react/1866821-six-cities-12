import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/base';
import styles from './login-form.module.css';
import cn from 'classnames';
import { loginAction } from '../../store/api-actions';
import { AuthData } from 'types/auth-data';
import { StatusCodes } from 'http-status-codes';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

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
  error: boolean;
  errorMessage: string;
}

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const serverError = useAppSelector((state) => state.error);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    navigate(AppRoute.Root);
  }

  const [formData, setFormData] = useState<Record<string, Field>>({
    email: {
      value: '',
      error: false,
      regex: emailRegexPattern,
      errorMessage: 'email error'
    },
    password: {
      value: '',
      error: false,
      regex: passwordRegexPattern,
      errorMessage: 'password error'
    },
  });

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    const isError = !formData[name].regex.test(value);

    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value: !isError ? evt.target.value : formData[name].value,
        error: isError
      }
    });
  };

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const formDataMap = new Map(Object.entries(formData));
    let hasEmtyFields = false;
    let hasErrors = false;
    const formDataClone: Record<string, Field> = {...formData};

    for(const name of formDataMap.keys()) {
      if (formData[name].value === '') {
        formData[name].error = true;
        hasEmtyFields = true;
      }
      if (formData[name].error) {
        hasErrors = true;
      }
    }

    if (hasEmtyFields || hasErrors) {
      setFormData({...formDataClone});
      return;
    }

    onSubmit({
      login: formData.email.value,
      password: formData.password.value
    });
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

      <button className="login__submit form__submit button" type="submit">Sign in</button>
      {serverError && serverError.code !== StatusCodes.UNAUTHORIZED && (
        <span className={cn(styles.errorBlock, styles.btnErrorBlock)}>
          {serverErrorText}
        </span>
      )}
    </form>
  );
}
