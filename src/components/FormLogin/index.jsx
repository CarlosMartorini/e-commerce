import { Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router';


const FormLogin = () => {

    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required!'),
        password: yup
        .string()
        .min(8, 'Minimum 8 characters!')
        .matches(
            /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
         'Password must contain at least one uppercase letter, one lowercase letter, a number and a special character!')
        .required('Password confirm is required!')
    })

    const { register, handleSubmit, formState:{errors}, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handleForm = (data) => {
        console.log(data)
        reset();
        history.push('/');
    }



    return (
        <div
            style={{
                width:'100vw',
                margin:'5rem auto',
                display:'flex',
                flexDirection: 'column'
            }}
        >
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField
                        margin='dense'
                        variant='outlined'
                        label='Email'
                        size='medium'
                        color='primary'
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField
                        margin='dense'
                        variant='outlined'
                        label='Password'
                        size='medium'
                        color='primary'
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <Button 
                        type='submit' 
                        variant='contained' 
                        color='primary'
                        style={{width:'230px', margin:'40px'}}
                    >Login</Button>
                </div>
            </form>
        </div>

    )
}

export default FormLogin;