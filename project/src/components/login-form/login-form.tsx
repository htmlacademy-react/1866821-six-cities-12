import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/base';
import styles from './login-form.module.css';
import cn from 'classnames';
import { loginAction } from '../../store/api-actions';

const LoginFields: Record<string, string> = {
  email: 'E-mail',
  password: 'Password'
};

const emailRegexPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordRegexPattern = /^\S*$/;

type Field = {
  value: string;
  regex: RegExp;
  touched: boolean;
  error: boolean;
  errorMessage: string;
}

export default function LoginForm() {
  const dispatch = useAppDispatch();

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

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    const isError = !formData[name].regex.test(value);
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


  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
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
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
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
              onInput={handleChange}
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
    </form>
  );
}
